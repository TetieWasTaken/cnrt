import { Data } from "../types";

const mass: Data[] = [
  // SI/metric/magnitude
  {
    unit: "qg",
    aliases: ["quectogram"],
    reference: 1e-33,
  },
  {
    unit: "rg",
    aliases: ["rontogram"],
    reference: 1e-30,
  },
  {
    unit: "yg",
    aliases: ["yoctogram"],
    reference: 1e-27,
  },
  {
    unit: "zg",
    aliases: ["zeptogram"],
    reference: 1e-24,
  },
  {
    unit: "ag",
    aliases: ["attogram"],
    reference: 1e-21,
  },
  {
    unit: "fg",
    aliases: ["femtogram"],
    reference: 1e-18,
  },
  {
    unit: "pg",
    aliases: ["picogram"],
    reference: 1e-15,
  },
  {
    unit: "ng",
    aliases: ["nanogram"],
    reference: 1e-12,
  },
  {
    unit: "μg",
    aliases: ["microgram", "mcg"],
    reference: 1e-9,
  },
  {
    unit: "mg",
    aliases: ["milligram", "milligrams"],
    reference: 1e-6,
  },
  {
    unit: "cg",
    aliases: ["centigram"],
    reference: 1e-5,
  },
  {
    unit: "dg",
    aliases: ["decigram"],
    reference: 1e-4,
  },
  {
    unit: "g",
    aliases: ["gram", "grams"],
    reference: 1e-3,
  },
  {
    unit: "dag",
    aliases: ["decagram"],
    reference: 1e-2,
  },
  {
    unit: "hg",
    aliases: ["hectogram"],
    reference: 1e-1,
  },
  {
    unit: "kg",
    aliases: ["kilogram", "kilograms"],
    reference: 1,
  },
  {
    unit: "Mg",
    aliases: ["megagram", "tonne", "t", "metric ton", "ton"],
    reference: 1e3,
  },
  {
    unit: "Gg",
    aliases: ["gigagram"],
    reference: 1e6,
  },
  {
    unit: "Tg",
    aliases: ["teragram"],
    reference: 1e9,
  },
  {
    unit: "Pg",
    aliases: ["petagram"],
    reference: 1e12,
  },
  {
    unit: "Eg",
    aliases: ["exagram"],
    reference: 1e15,
  },
  {
    unit: "Zg",
    aliases: ["zettagram"],
    reference: 1e18,
  },
  {
    unit: "Yg",
    aliases: ["yottagram"],
    reference: 1e21,
  },
  {
    unit: "Rg",
    aliases: ["ronnagram"],
    reference: 1e24,
  },
  {
    unit: "Qg",
    aliases: ["quettagram"],
    reference: 1e27,
  },
  // other units
  {
    unit: "ct",
    aliases: ["carat", "carats"],
    reference: 2e-4,
  },
  {
    unit: "ounce",
    aliases: ["oz", "ounces"],
    reference: 28.349523125e-3,
  },
  {
    unit: "troy ounce",
    aliases: ["troy oz", "troy ounces"],
    reference: 31.1034768e-3,
  },
  {
    unit: "pound",
    aliases: ["lb", "pounds"],
    reference: 0.45359237,
  },
  {
    unit: "short ton",
    aliases: [],
    reference: 907.18474,
  },
  {
    unit: "long ton",
    aliases: [],
    reference: 1016.0469088,
  },
  {
    unit: "eV",
    aliases: ["electronvolt"],
    reference: 1.78266192e-36,
  },
  {
    unit: "Da",
    aliases: ["dalton", "unified atomic mass unit", "u"],
    reference: 1.6605390666e-27,
  },
  {
    unit: "sl",
    aliases: ["slug"],
    reference: 14.59390294,
  },
  {
    unit: "planck mass",
    aliases: ["planck"],
    reference: 2.176434e-8,
  },
];

export default mass;
export const defaultUnit = "kg";
