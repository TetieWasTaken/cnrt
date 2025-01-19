import { Command } from "@commander-js/extra-typings";
import { VERSION } from "./constants";
import { convert, getSuggestions, getUnitData } from "./utils";

const program = new Command()
  .version(VERSION, "-v, --version", "output the current version")
  .option("-f, --from <from>", "from unit")
  .option("-t, --to <to>", "to unit")
  .argument("<value>", "value to convert");

program.parse();
const options = program.opts();

const fromData = options.from ? getUnitData(options.from) : null;
if (options.from && !fromData) {
  console.error(`\x1b[31mUnit "${options.from}" not found.\x1b[0m`);
  console.log(
    `Did you mean: \x1b[33m${getSuggestions(options.from).join(", ")}\x1b[0m?`,
  );
  process.exit(1);
}

const toData = options.to ? getUnitData(options.to) : null;
if (options.to && !toData) {
  console.error(`\x1b[31mUnit "${options.to}" not found.\x1b[0m`);
  console.log(
    `Did you mean: \x1b[33m${getSuggestions(options.to).join(", ")}\x1b[0m?`,
  );
  process.exit(1);
}

const value = parseFloat(program.args[0]);
if (isNaN(value)) {
  console.error("Invalid value.");
  process.exit(1);
}

const result = convert(value, fromData, toData);
console.log(result);
