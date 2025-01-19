import { Command, Option } from "@commander-js/extra-typings";
import { VERSION } from "./constants";

const program = new Command()
  .version(VERSION, "-v, --version", "output the current version");

program.parse();
const options = program.opts();

console.log(options);
