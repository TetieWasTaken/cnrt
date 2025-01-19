import { Data, ExtendedData } from "./types";
import * as fs from "fs";
import { distance } from "fastest-levenshtein";

function getData(): Record<string, ExtendedData[]> {
  const data: Record<string, ExtendedData[]> = {};
  const files = fs.readdirSync("dist/data");

  for (const file of files) {
    const module = require(`./data/${file}`);
    const moduleData = module.default as ExtendedData[];
    const defaultUnit = module.defaultUnit as string;

    for (const d of moduleData) {
      d.default = d.unit === defaultUnit;
    }

    data[file.split(".")[0]] = moduleData;
  }

  return data;
}

const dataIndex = getData();

export function getUnitData(unit: string): Data | null {
  for (const key in dataIndex) {
    const data = dataIndex[key].find((d) =>
      d.unit === unit || d.aliases.includes(unit)
    );
    if (data) return data;
  }

  return null;
}

export function convert(
  value: number,
  from: Data | null,
  to: Data | null,
): number {
  if (from && to) return (value * from.reference) / to.reference;
  else if (from && !to) return value * from.reference;
  else if (!from && to) return value / to.reference;
  else return value;
}

export function getSuggestions(unit: string): string[] {
  const suggestions: Record<string, number> = {};

  for (const key in dataIndex) {
    for (const data of dataIndex[key]) {
      for (const alias of data.aliases) {
        const dist = distance(unit, alias);
        if (dist <= 2) suggestions[alias] = dist;
      }
    }
  }

  return Object.keys(suggestions)
    .sort((a, b) => suggestions[a] - suggestions[b])
    .slice(0, 5);
}
