import { Data } from "../types";

const temperatures: Data[] = [
  {
    unit: "C",
    aliases: ["Celsius", "°C", "celsius"],
  },
  {
    unit: "F",
    aliases: ["Fahrenheit", "°F", "fahrenheit"],
    customConvert: {
      fromBase: (value) => value * 1.8 + 32,
      toBase: (value) => (value - 32) / 1.8,
    },
  },
  {
    unit: "K",
    aliases: ["Kelvin", "°K", "kelvin"],
    customConvert: {
      fromBase: (value) => value + 273.15,
      toBase: (value) => value - 273.15,
    },
  },
  {
    unit: "R",
    aliases: ["Rankine", "°R", "rankine"],
    customConvert: {
      fromBase: (value) => (value + 273.15) * 1.8,
      toBase: (value) => (value - 491.67) * (5 / 9),
    },
  },
  {
    unit: "De",
    aliases: ["Delisle", "°De", "delisle"],
    customConvert: {
      fromBase: (value) => (100 - value) * 1.5,
      toBase: (value) => (100 - value * 2 / 3),
    },
  },
  {
    unit: "N",
    aliases: ["Newton", "°N", "newton"],
    customConvert: {
      fromBase: (value) => value * (33 / 100),
      toBase: (value) => value * (100 / 33),
    },
  },
  {
    unit: "Re",
    aliases: ["Réaumur", "°Re", "réaumur", "r"],
    customConvert: {
      fromBase: (value) => value * 0.8,
      toBase: (value) => value * 1.25,
    },
  },
  {
    unit: "Ra",
    aliases: ["Rømer", "°Ra", "rømer"],
    customConvert: {
      fromBase: (value) => value * (21 / 40) + 7.5,
      toBase: (value) => (value - 7.5) * (40 / 21),
    },
  },
];

export default temperatures;
export const defaultUnit = "C";
