import { Data } from "../types";

const luminousQuantities: Data[] = [
  {
    unit: "cd",
    aliases: ["candela"],
    reference: 1,
  },
  {
    unit: "cp",
    aliases: ["candlepower", "CP"],
    reference: 0.981,
  },
  {
    unit: "HK",
    aliases: ["Hefnerkerze", "Hefner lamp"],
    reference: 0.920,
  },
  {
    unit: "lm",
    aliases: ["lumen"],
    reference: 1 / (4 * Math.PI),
    warning: "Conversion uses solid angle of 1 steradian.",
  },
];

export default luminousQuantities;
export const defaultUnit = "cd";
