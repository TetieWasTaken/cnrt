import { Data } from "../types";

const volumes: Data[] = [
  {
    unit: "mm3",
    reference: 1e-9,
    aliases: ["cubic millimeter", "cubic millimeters"],
  },
  {
    unit: "cm3",
    reference: 1e-6,
    aliases: ["cubic centimeter", "cubic centimeters"],
  },
  {
    unit: "dm3",
    reference: 1e-3,
    aliases: ["cubic decimeter", "cubic decimeters"],
  },
  {
    unit: "m3",
    reference: 1,
    aliases: ["cubic meter", "cubic meters"],
  },
  {
    unit: "dam3",
    reference: 1e3,
    aliases: ["cubic decameter", "cubic decameters"],
  },
  {
    unit: "hm3",
    reference: 1e6,
    aliases: ["cubic hectometer", "cubic hectometers"],
  },
  {
    unit: "km3",
    reference: 1e9,
    aliases: ["cubic kilometer", "cubic kilometers"],
  },
  {
    unit: "μL",
    reference: 1e-9,
    aliases: ["microliter", "microliters", "ul"],
  },
  {
    unit: "mL",
    reference: 1e-6,
    aliases: ["milliliter", "milliliters", "ml"],
  },
  {
    unit: "cL",
    reference: 1e-5,
    aliases: ["centiliter", "centiliters", "cl"],
  },
  {
    unit: "dL",
    reference: 1e-4,
    aliases: ["deciliter", "deciliters", "dl"],
  },
  {
    unit: "L",
    reference: 1e-3,
    aliases: ["liter", "liters", "l"],
  },
  {
    unit: "daL",
    reference: 1e-2,
    aliases: ["decaliter", "decaliters", "dal"],
  },
  {
    unit: "hL",
    reference: 1e-1,
    aliases: ["hectoliter", "hectoliters", "hl"],
  },
  {
    unit: "kL",
    reference: 1,
    aliases: ["kiloliter", "kiloliters", "kl"],
  },
  {
    unit: "ML",
    reference: 1e3,
    aliases: ["megaliter", "megaliters"],
  },
  {
    unit: "GL",
    reference: 1e6,
    aliases: ["gigaliter", "gigaliters"],
  },
  // other
  {
    unit: "cu in",
    reference: 1.63871e-5,
    aliases: ["cubic inch", "cubic inches", "in3"],
  },
  {
    unit: "mi3",
    reference: 4.2e9,
    aliases: ["cubic mile", "cumi", "cu mi"],
  },
  {
    unit: "acre ft",
    reference: 1.2e3,
    aliases: ["acre-foot", "acre feet", "acre foot"],
  },
  {
    unit: "yd3",
    reference: 0.76,
    aliases: ["cubic yard", "cuyd", "cu yd"],
  },
  {
    unit: "ft3",
    reference: 0.028,
    aliases: ["cubic foot", "cuft", "foot3", "cu foot"],
  },
  {
    unit: "board foot",
    reference: 0.0024,
    aliases: ["board feet"],
  },
  {
    unit: "MTON",
    reference: 1.1,
    aliases: ["measurement ton"],
  },
  {
    unit: "imp bbl",
    reference: 0.16,
    aliases: ["imperial barrel", "impbbl"],
  },
  {
    unit: "kilderkin",
    reference: 0.082,
    aliases: [],
  },
  {
    unit: "firkin",
    reference: 0.041,
    aliases: [],
  },
  {
    unit: "imp bsh",
    reference: 0.036,
    aliases: ["imperial bushel", "impbu"],
  },
  {
    unit: "kenning",
    reference: 0.018,
    aliases: ["imperial kenning", "impkenning"],
  },
  {
    unit: "pk",
    reference: 0.0091,
    aliases: ["imperial peck", "imppk"],
  },
  {
    unit: "imp qt",
    reference: 0.0011,
    aliases: ["imperial quart", "impqt"],
  },
  {
    unit: "imp gal",
    reference: 4.5,
    aliases: ["imperial gallon", "impgal"],
  },
  {
    unit: "imp pt",
    reference: 0.00057,
    aliases: ["imperial pint", "imppt"],
  },
  {
    unit: "gi",
    reference: 0.00014,
    aliases: ["gill", "impgi"],
  },
  {
    unit: "imp fl oz",
    reference: 0.000028,
    aliases: ["imperial fluid ounce", "impoz", "impfloz"],
  },
  {
    unit: "US bbl",
    reference: 0.12,
    aliases: ["US barrel", "USbbl", "usbbl", "U.S.bbl"],
  },
  {
    unit: "bbl",
    reference: 0.16,
    aliases: ["oilbbl"],
  },
  {
    unit: "US beer bbl",
    reference: 0.12,
    aliases: ["USbeerbbl", "usbeerbbl", "U.S.beerbbl"],
  },
  {
    unit: "US gal",
    reference: 3.8,
    aliases: ["US gallon", "USgal", "usgal", "U.S.gal"],
  },
  {
    unit: "US qt",
    reference: 0.95,
    aliases: ["US quart", "USqt", "usqt", "U.S.qt"],
  },
  {
    unit: "US pt",
    reference: 0.47,
    aliases: ["US pint", "USpt", "uspt", "U.S.pt"],
  },
  {
    unit: "US fl oz",
    reference: 0.03,
    aliases: ["US fluid ounce", "USoz", "USfloz", "usoz", "usfloz", "U.S.oz"],
  },
  {
    unit: "US dry bbl",
    reference: 0.12,
    aliases: ["US dry barrel", "USdrybbl", "usdrybbl", "drybbl", "U.S.drybbl"],
  },
  {
    unit: "US bsh",
    reference: 0.035,
    aliases: ["US bushel", "USbsh", "usbsh", "U.S.bsh"],
  },
  {
    unit: "US kenning",
    reference: 0.018,
    aliases: ["USkenning", "uskenning", "U.S.kenning"],
  },
  {
    unit: "US pk",
    reference: 0.0088,
    aliases: ["US peck", "USpk", "uspk", "U.S.pk"],
  },
  {
    unit: "US dry gal",
    reference: 0.0044,
    aliases: ["US dry gallon", "USdrygal", "usdrygal", "drygal", "U.S.drygal"],
  },
  {
    unit: "US dry qt",
    reference: 0.0011,
    aliases: ["USdryqt", "usdryqt", "dryqt", "U.S.dryqt"],
  },
  {
    unit: "US dry pt",
    reference: 0.00055,
    aliases: ["USdrypt", "usdrypt", "drypt", "U.S.drypt"],
  },
];

export default volumes;
export const defaultUnit = "m3";
