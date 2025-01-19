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
];

export default temperatures;
export const defaultUnit = "C";
