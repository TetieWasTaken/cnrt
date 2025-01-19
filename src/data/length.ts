import { Data } from "../types";

const lengths: Data[] = [
  {
    unit: "cm",
    reference: 0.01,
    aliases: ["centimeter", "centimetre"],
  },
  {
    unit: "m",
    reference: 1,
    aliases: ["meter", "metre"],
  },
  {
    unit: "mm",
    reference: 0.001,
    aliases: ["millimeter", "millimetre"],
  },
  {
    unit: "in",
    reference: 0.0254,
    aliases: ["inch"],
  },
  {
    unit: "ft",
    reference: 0.3048,
    aliases: ["foot", "feet"],
  },
  {
    unit: "yd",
    reference: 0.9144,
    aliases: ["yard"],
  },
  {
    unit: "mi",
    reference: 1609.34,
    aliases: ["mile"],
  },
  {
    unit: "km",
    reference: 1000,
    aliases: ["kilometer", "kilometre"],
  },
];

export const defaultUnit = "m";
export default lengths;
