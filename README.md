# [cnrt](https://npmjs.com/package/cnrt)
[![npm](https://img.shields.io/npm/v/cnrt.svg)](https://npmjs.com/package/cnrt)
[![npm](https://img.shields.io/npm/dm/cnrt.svg)](https://npmjs.com/package/cnrt)
[![npm](https://img.shields.io/npm/l/cnrt.svg)](https://npmjs.com/package/cnrt)

cnrt is a CLI for converting length, light, mass, temperature, time and volume units. All written in TypeScript!

## Installation
```bash
npm install -g cnrt
```

## Usage

| Command            | Description                  |
|--------------------|------------------------------|
| **Arguments:**     |                              |
| `value`            | value to convert             |
| **Options:**       |                              |
| `-v, --version`    | output the current version   |
| `-f, --from <from>`| from unit                    |
| `-t, --to <to>`    | to unit                      |
| `-l, --list`       | list all available units     |
| `-h, --help`       | display help for command     |
###### `index [value] [options]`

### Examples
```bash
# convert 1 meter to feet
cnrt 1 -f m -t ft
# convert 50 Fahrenheit to Celsius
cnrt 50 -f F -t C
# convert 30 pounds to kilograms
cnrt 30 -f lb -t kg
```