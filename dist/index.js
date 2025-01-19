#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var extra_typings_1 = require("@commander-js/extra-typings");
var constants_1 = require("./constants");
var program = new extra_typings_1.Command()
    .version(constants_1.VERSION, "-v, --version", "output the current version");
program.parse();
var options = program.opts();
console.log(options);
