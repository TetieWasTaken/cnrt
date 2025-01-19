import { Command } from "@commander-js/extra-typings";
import { VERSION } from "./constants";
import { getUnitData } from "./helper";

const program = new Command()
  .version(VERSION, "-v, --version", "output the current version")
  .requiredOption("-f, --from <from>", "from unit")
  .option("-t, --to <to>", "to unit")
  .argument("<value>", "value to convert");

program.parse();
const options = program.opts();

console.log(getUnitData(options.from));
