import { Command } from "@commander-js/extra-typings";
import { VERSION } from "./constants";
import { convert, getUnitData } from "./utils";

const program = new Command()
  .version(VERSION, "-v, --version", "output the current version")
  .option("-f, --from <from>", "from unit")
  .option("-t, --to <to>", "to unit")
  .argument("<value>", "value to convert");

program.parse();
const options = program.opts();

const fromData = options.from ? getUnitData(options.from) : null;
if (options.from && !fromData) {
  console.error(`Unit "${options.from}" not found.`);
  process.exit(1);
}

const toData = options.to ? getUnitData(options.to) : null;
if (options.to && !toData) {
  console.error(`Unit "${options.to}" not found.`);
  process.exit(1);
}

const value = parseFloat(program.args[0]);
if (isNaN(value)) {
  console.error("Invalid value.");
  process.exit(1);
}

const result = convert(value, fromData, toData);
console.log(result);
