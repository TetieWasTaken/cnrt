"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnitData = getUnitData;
var fs = require("fs");
function getData() {
    var data = {};
    var files = fs.readdirSync("dist/data");
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        var module_1 = require("./data/".concat(file));
        var moduleData = module_1.default;
        var defaultUnit = module_1.defaultUnit;
        for (var _a = 0, moduleData_1 = moduleData; _a < moduleData_1.length; _a++) {
            var d = moduleData_1[_a];
            d.default = d.unit === defaultUnit;
        }
        data[file.split(".")[0]] = moduleData;
    }
    return data;
}
var dataIndex = getData();
function getUnitData(unit) {
    for (var key in dataIndex) {
        var data = dataIndex[key].find(function (d) { return d.unit === unit; });
        if (data)
            return data;
    }
    return null;
}
