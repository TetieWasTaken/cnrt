import { Data } from "../types";

const times: Data[] = [
  // metric/SI units && magnitudes
  {
    unit: "qs",
    reference: 1e-30,
    aliases: ["nonillionth", "quectosecond"],
  },
  {
    unit: "rs",
    reference: 1e-27,
    aliases: ["rontosecond", "octillionth"],
  },
  {
    unit: "ys",
    reference: 1e-24,
    aliases: ["yoctosecond", "septillionth"],
  },
  {
    unit: "as",
    reference: 1e-18,
    aliases: ["attosecond", "attoseconds"],
  },
  {
    unit: "fs",
    reference: 1e-15,
    aliases: ["femtosecond", "femtoseconds"],
  },
  {
    unit: "ps",
    reference: 1e-12,
    aliases: ["picosecond", "picoseconds"],
  },
  {
    unit: "ns",
    reference: 1e-9,
    aliases: ["nanosecond", "nanoseconds"],
  },
  {
    unit: "µs",
    reference: 1e-6,
    aliases: ["microsecond", "microseconds"],
  },
  {
    unit: "ms",
    reference: 1e-3,
    aliases: ["millisecond", "milliseconds"],
  },
  {
    unit: "cs",
    reference: 1e-2,
    aliases: ["centisecond"],
  },
  {
    unit: "ds",
    reference: 1e-1,
    aliases: ["decisecond"],
  },
  {
    unit: "s",
    reference: 1,
    aliases: ["second", "seconds"],
  },
  {
    unit: "das",
    reference: 10,
    aliases: ["decasecond"],
  },
  {
    unit: "min",
    reference: 60,
    aliases: ["minute", "minutes"],
  },
  {
    unit: "hs",
    reference: 100,
    aliases: ["hectosecond"],
  },
  {
    unit: "ks",
    reference: 1000,
    aliases: ["kilosecond"],
  },
  {
    unit: "h",
    reference: 3600,
    aliases: ["hour", "hours"],
  },
  {
    unit: "d",
    reference: 86400,
    aliases: ["day", "days"],
  },
  {
    unit: "wk",
    reference: 604800,
    aliases: ["week", "weeks"],
  },
  {
    unit: "mo",
    reference: 2629800,
    aliases: ["month", "months"],
  },
  {
    unit: "y",
    reference: 31557600,
    aliases: ["year", "years"],
  },
  {
    unit: "dec",
    reference: 315576000,
    aliases: ["decade", "decades"],
  },
  {
    unit: "Gs",
    reference: 1e9,
    aliases: ["gigasecond"],
  },
  {
    unit: "cen",
    reference: 3155760000,
    aliases: ["century", "centuries"],
  },
  {
    unit: "mil",
    reference: 31557600000,
    aliases: ["millennium", "millennia", "killoannum"],
  },
  {
    unit: "Ts",
    reference: 1e12,
    aliases: ["terasecond"],
  },
  {
    unit: "Ps",
    reference: 1e15,
    aliases: ["petasecond"],
  },
  {
    unit: "Es",
    reference: 1e18,
    aliases: ["exasecond"],
  },
  {
    unit: "Zs",
    reference: 1e21,
    aliases: ["zettasecond"],
  },
  {
    unit: "Ys",
    reference: 1e24,
    aliases: ["yottasecond"],
  },
  {
    unit: "Rs",
    reference: 1e27,
    aliases: ["ronnasecond"],
  },
  {
    unit: "Qs",
    reference: 1e30,
    aliases: ["quettasecond"],
  },
  // other units
  {
    unit: "planck",
    reference: 5.39116e-44,
    aliases: ["planck time", "planck times"],
  },
  {
    unit: "jiffy",
    reference: 3e-24,
    aliases: [],
  },
  {
    unit: "zs",
    reference: 1e-21,
    aliases: ["zeptosecond", "sextillionth"],
  },
  {
    unit: "S",
    reference: 1e-13,
    aliases: ["Sv", "svedberg"],
  },
  {
    unit: "shake",
    reference: 1e-8,
    aliases: [],
  },
  {
    unit: "milliday",
    reference: 86.4,
    aliases: [],
  },
  {
    unit: "centiday",
    reference: 864,
    aliases: ["centiday"],
  },
  {
    unit: "moment",
    reference: 90,
    aliases: ["momenta"],
  },
  {
    unit: "deciday",
    reference: 8640,
    aliases: [],
  },
  {
    unit: "decaday",
    reference: 864000,
    aliases: [],
  },
  {
    unit: "Ms",
    reference: 1e6,
    aliases: ["megasecond"],
  },
  {
    unit: "fortnight",
    reference: 1209600,
    aliases: [],
  },
  {
    unit: "lunar month",
    reference: 2360591,
    aliases: ["lunation"],
  },
  {
    unit: "lunar year",
    reference: 30617280,
    aliases: [],
  },
  {
    unit: "quarantine",
    reference: 3456000,
    aliases: [],
  },
  {
    unit: "hectoday",
    reference: 8640000,
    aliases: [],
  },
  {
    unit: "semester",
    reference: 10886400,
    aliases: [],
  },
  {
    unit: "common year",
    reference: 31536000,
    aliases: [],
  },
  {
    unit: "tropical year",
    reference: 31556925.216,
    aliases: [],
  },
  {
    unit: "Gregorian year",
    reference: 31556952,
    aliases: [],
  },
  {
    unit: "sidereal year",
    reference: 31558149.7635456,
    aliases: ["sidereal orbital period"],
  },
  {
    unit: "leap year",
    reference: 31622400,
    aliases: [],
  },
  {
    unit: "olympiad",
    reference: 126230400,
    aliases: [],
  },
  {
    unit: "lustrum",
    reference: 157788000,
    aliases: [],
  },
  {
    unit: "jubilee",
    reference: 1577880000,
    aliases: ["jubilee"],
  },
  {
    unit: "Age",
    reference: 67658160000,
    aliases: ["astrological age"],
  },
  {
    unit: "megaannum",
    reference: 3.15576e13,
    aliases: ["megayear"],
  },

  {
    unit: "galactic year",
    reference: 7.2516e15,
    aliases: ["cosmic year"],
  },
  {
    unit: "eon",
    reference: 3.15576e16,
    aliases: ["aeon"],
  },
  {
    unit: "kalpa",
    reference: 1.36032e17,
    aliases: [],
  },
];

export default times;
export const defaultUnit = "s";
