import { Data } from "../types";

const lengths: Data[] = [
  // metric/SI units
  {
    unit: "lp",
    reference: 1.616255e-35,
    aliases: ["Planck length", "Planck"],
  },
  {
    unit: "am",
    reference: 1e-18,
    aliases: ["attometer", "attometre"],
  },
  {
    unit: "fm",
    reference: 1e-15,
    aliases: ["femtometer", "femtometre"],
  },
  {
    unit: "pm",
    reference: 1e-12,
    aliases: ["picometer", "picometre"],
  },
  {
    unit: "nm",
    reference: 1e-9,
    aliases: ["nanometer", "nanometre"],
  },
  {
    unit: "µm",
    reference: 1e-6,
    aliases: ["micrometer", "micrometre", "um", "micron"],
  },
  {
    unit: "mm",
    reference: 1e-3,
    aliases: ["millimeter", "millimetre"],
  },
  {
    unit: "cm",
    reference: 0.01,
    aliases: ["centimeter", "centimetre"],
  },
  {
    unit: "dm",
    reference: 0.1,
    aliases: ["decimeter", "decimetre"],
  },
  {
    unit: "m",
    reference: 1,
    aliases: ["meter", "metre"],
  },
  {
    unit: "dam",
    reference: 10,
    aliases: ["decameter", "decametre"],
  },
  {
    unit: "hm",
    reference: 100,
    aliases: ["hectometer", "hectometre"],
  },
  {
    unit: "km",
    reference: 1000,
    aliases: ["kilometer", "kilometre"],
  },
  {
    unit: "Mm",
    reference: 1e6,
    aliases: ["megameter", "megametre"],
  },
  {
    unit: "Gm",
    reference: 1e9,
    aliases: ["gigameter", "gigametre"],
  },
  {
    unit: "Tm",
    reference: 1e12,
    aliases: ["terameter", "terametre"],
  },
  {
    unit: "Pm",
    reference: 1e15,
    aliases: ["petameter", "petametre"],
  },
  {
    unit: "Em",
    reference: 1e18,
    aliases: ["exameter", "exametre"],
  },
  {
    unit: "Zm",
    reference: 1e21,
    aliases: ["zettameter", "zettametre"],
  },
  {
    unit: "Ym",
    reference: 1e24,
    aliases: ["yottameter", "yottametre"],
  },
  // Other units
  {
    unit: "A",
    reference: 1e-10,
    aliases: ["Ångström"],
  },
  {
    unit: "myriameter",
    reference: 1e4,
    aliases: [],
  },
  {
    unit: "xu",
    reference: 1.0021e-13,
    aliases: ["x unit", "xunit"],
  },
  // imperial units
  {
    unit: "thou",
    reference: 2.54e-5,
    aliases: ["mils"],
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
    unit: "league",
    reference: 4828.02,
    aliases: ["lieue", "legua"],
  },
  {
    unit: "ch",
    reference: 20.1168,
    aliases: ["chain"],
  },
  {
    unit: "l.",
    reference: 0.2012,
    aliases: ["li.", "lnk.", "link", "lk", "lks"],
  },
  {
    unit: "rod",
    reference: 5.0292,
    aliases: ["perch", "pole", "lug"],
  },
  {
    unit: "furlong",
    reference: 201.168,
    aliases: ["fur."],
  },
  // Miscellaneous
  {
    unit: "fathom",
    reference: 1.8288,
    aliases: [],
  },
  {
    unit: "NM",
    reference: 1852,
    aliases: ["nautical mile", "nmi", "M"],
  },
  // astronomical units
  {
    unit: "AU",
    reference: 1.49597870700e11,
    aliases: ["astronomical unit", "au"],
  },
  {
    unit: "pc",
    reference: 3.08567758149137e16,
    aliases: ["parsec"],
  },
  {
    unit: "ly",
    reference: 9.4607e15,
    aliases: ["light-year", "lightyear", "lyr"],
  },
  {
    unit: "ld",
    reference: 3.1536e7,
    aliases: ["light-day", "lightday"],
  },
  {
    unit: "lh",
    reference: 1.0793e9,
    aliases: ["light-hour", "lighthour"],
  },
  {
    unit: "lim",
    reference: 1.7989e10,
    aliases: ["light-minute", "lightminute"],
  },
  {
    unit: "ls",
    reference: 2.9979e8,
    aliases: ["light-second", "lightsecond"],
  },
  {
    unit: "R⊕",
    reference: 6.371e6,
    aliases: ["Earth radius", "Earth's radius", "Rearth"],
  },
  {
    unit: "LD",
    reference: 3.84399e8,
    aliases: ["Lunar distance"],
  },
  {
    unit: "Hubble length",
    reference: 1.306e26,
    aliases: ["cH"],
  },
  // physics
  {
    unit: "a0",
    reference: 1e-10,
    aliases: ["Bohr radius"],
  },
  // enough for now, more can be added later (see wikipedia page on unit of length)
];

export const defaultUnit = "m";
export default lengths;
