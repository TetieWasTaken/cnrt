import { Command } from "@commander-js/extra-typings";
import { VERSION } from "./constants";
import { convert, dataIndex, getSuggestions, getUnitData } from "./utils";

const program = new Command()
  .version(VERSION, "-v, --version", "output the current version")
  .option("-f, --from <from>", "from unit")
  .option("-t, --to <to>", "to unit")
  .option("-l, --list", "list all available units")
  .argument("[value]", "value to convert");

program.parse();
const options = program.opts();

if (options.list) {
  console.log(
    "\x1b[1m\x1b[34mAvailable Categories:\x1b[0m (in increasing size order)",
  );
  for (const key in dataIndex) {
    console.log(
      `\x1b[1m\x1b[32m${key}:\x1b[0m ${
        dataIndex[key].map((d) => ` \x1b[33m${d.unit}\x1b[0m`).join(",")
      }`,
    );
  }

  process.exit(0);
}

if (!options.from && !options.to) {
  console.error(`\x1b[31mNo "from" or "to" unit specified.\x1b[0m`);
  console.log(
    `\x1b[1m\x1b[36mHint:\x1b[0m Use \x1b[33m--list\x1b[0m to list all available units.`,
  );
  process.exit(1);
}

if (!program.args.length) {
  console.error(`\x1b[31mNo value specified.\x1b[0m`);
  process.exit(1);
}

let fromData = options.from ? getUnitData(options.from) : null;
if (options.from && !fromData) {
  console.error(`\x1b[31mUnit "${options.from}" not found.\x1b[0m`);
  console.log(
    `Did you mean: \x1b[33m${getSuggestions(options.from).join(", ")}\x1b[0m?`,
  );
  process.exit(1);
} else if (!fromData) {
  console.warn(
    `\x1b[33mNo "from" unit specified. Using default unit.\x1b[0m`,
  );
}

let toData = options.to ? getUnitData(options.to) : null;
if (options.to && !toData) {
  console.error(`\x1b[31mUnit "${options.to}" not found.\x1b[0m`);
  console.log(
    `Did you mean: \x1b[33m${getSuggestions(options.to).join(", ")}\x1b[0m?`,
  );
  process.exit(1);
} else if (!toData) {
  console.warn(
    `\x1b[33mNo "to" unit specified. Using default unit.\x1b[0m`,
  );
}

if (!fromData && !toData) {
  console.error(`\x1b[31mNo units found.\x1b[0m`);
  process.exit(1);
}

if (!fromData && toData) {
  const key = toData.key;
  const def = dataIndex[key].find((d) => d.default);
  fromData = { key, data: def };
}

if (fromData && !toData) {
  const key = fromData.key;
  const def = dataIndex[key].find((d) => d.default);
  toData = { key, data: def };
}

if (fromData.key !== toData.key) {
  console.error(
    `\x1b[31mCannot convert between different categories.\x1b[0m`,
  );
  process.exit(1);
}

const value = parseFloat(program.args[0]);
if (isNaN(value)) {
  console.error("Invalid value.");
  process.exit(1);
}

const result = convert(value, fromData.data, toData.data);
console.log(
  `\x1b[1m${value}\x1b[0m ${fromData.data.unit} = \x1b[1m${result}\x1b[0m ${toData.data.unit}`,
);
