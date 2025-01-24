import { Data, ExtendedData } from "./types";
import * as fs from "fs";
import { distance } from "fastest-levenshtein";

function getData(): Record<string, ExtendedData[]> {
  const data: Record<string, ExtendedData[]> = {};
  const files = fs.readdirSync(__dirname + "/data");

  for (const file of files) {
    const module = require(__dirname + `/data/${file}`);
    const moduleData = module.default as ExtendedData[];
    const defaultUnit = module.defaultUnit as string;

    for (const d of moduleData) {
      d.default = d.unit === defaultUnit;
    }

    moduleData.sort((a, b) => a.reference - b.reference);

    data[file.split(".")[0]] = moduleData;
  }

  return data;
}

export const dataIndex = getData();

export function getUnitData(unit: string): { key: string; data: Data } | null {
  for (const key in dataIndex) {
    const data = dataIndex[key].find((d) =>
      d.unit === unit || d.aliases.includes(unit)
    );
    if (data) return { key, data };
  }

  return null;
}

export function convert(
  value: number,
  from: Data,
  to: Data,
): number {
  if (from === to) return value;

  if (from.customConvert && to.customConvert) {
    return to.customConvert.fromBase(
      from.customConvert.toBase(value),
    );
  } else if (from.customConvert) {
    return from.customConvert.toBase(value);
  } else if (to.customConvert) {
    return to.customConvert.fromBase(value);
  }

  if (from && to) return (value * from.reference) / to.reference;
}

export function getSuggestions(unit: string): string[] {
  const suggestions: Record<string, number> = {};

  for (const key in dataIndex) {
    for (const data of dataIndex[key]) {
      for (const alias of data.aliases) {
        if (alias.length <= 3) continue;
        const dist = distance(unit, alias);
        if (dist <= 2) suggestions[alias] = dist;
      }

      if (data.unit.length > 3) {
        const dist = distance(unit, data.unit);
        if (dist <= 2) suggestions[data.unit] = dist;
      }
    }
  }

  return Object.keys(suggestions)
    .sort((a, b) => suggestions[a] - suggestions[b])
    .slice(0, 5);
}
