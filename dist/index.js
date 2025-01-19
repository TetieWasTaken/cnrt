#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var extra_typings_1 = require("@commander-js/extra-typings");
var constants_1 = require("./constants");
var helper_1 = require("./helper");
var program = new extra_typings_1.Command()
    .version(constants_1.VERSION, "-v, --version", "output the current version")
    .option("-f, --from <from>", "from unit")
    .option("-t, --to <to>", "to unit")
    .argument("<value>", "value to convert");
program.parse();
var options = program.opts();
console.log(options);
console.log((0, helper_1.getUnitData)(options.from));
if (!options.from || !options.to || !program.args.length) {
    program.help();
}
