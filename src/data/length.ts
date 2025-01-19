import { Data } from "../types";

interface Length extends Data {
  meters: number;
}

const lengths: Length[] = [
  {
    unit: "cm",
    meters: 0.01,
    aliases: ["centimeter", "centimetre"],
  },
  {
    unit: "m",
    meters: 1,
    aliases: ["meter", "metre"],
  },
  {
    unit: "mm",
    meters: 0.001,
    aliases: ["millimeter", "millimetre"],
  },
  {
    unit: "in",
    meters: 0.0254,
    aliases: ["inch"],
  },
  {
    unit: "ft",
    meters: 0.3048,
    aliases: ["foot", "feet"],
  },
  {
    unit: "yd",
    meters: 0.9144,
    aliases: ["yard"],
  },
  {
    unit: "mi",
    meters: 1609.34,
    aliases: ["mile"],
  },
  {
    unit: "km",
    meters: 1000,
    aliases: ["kilometer", "kilometre"],
  },
];

export default lengths;
