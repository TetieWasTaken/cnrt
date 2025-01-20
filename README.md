# [cnrt](https://npmjs.com/package/cnrt)
[![npm](https://img.shields.io/npm/v/cnrt.svg)](https://npmjs.com/package/cnrt)
[![npm](https://img.shields.io/npm/dm/cnrt.svg)](https://npmjs.com/package/cnrt)
[![npm](https://img.shields.io/npm/l/cnrt.svg)](https://github.com/TetieWasTaken/cnrt/blob/main/LICENSE)

cnrt is a CLI for converting length, light, mass, temperature, time and volume units. All written in TypeScript! You can find the package on [npm](https://npmjs.com/package/cnrt).

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
###### general usage: `index [value] [options]`

### Examples
```bash
# convert 1 meter to feet
cnrt 1 -t ft # meter is the default unit for length, so no need to specify -f
# convert 50 Fahrenheit to Celsius
cnrt 50 -f F
# convert 30 pounds to grams
cnrt 30 -f lb -t g
```

###### Please note that the units are case-sensitive (`mg` ≠ `Mg`)
###### Aliases are supported for most units (e.g. `m`/`meter` and `ft`/`foot`)

### List of available units
```bash
cnrt -l
```

#### Length (in increasing size order)
lp, am, fm, xu, pm, A, a0, nm, µm, thou, mm, cm, in, dm, l., ft, yd, m, fathom, rod, dam, ch, hm, furlong, km, mi, NM, league, myriameter, Mm, R⊕, ld, ls, LD, Gm, lh, lim, AU, Tm, Pm, ly, pc, Em, Zm, Ym, Hubble length

#### Light
lm, HK, cp, cd

#### Mass (in increasing size order)
eV, qg, rg, yg, Da, zg, ag, fg, pg, ng, μg, planck mass, mg, cg, dg, ct, g, dag, ounce, troy ounce, hg, pound, kg, sl, short ton, Mg, long ton, Gg, Tg, Pg, Eg, Zg, Yg, Rg, Qg

#### Temperature
C, F, K, R, De, N, Re, Ra

#### Time (in increasing size order)
planck, qs, rs, ys, jiffy, zs, as, fs, S, ps, ns, shake, µs, ms, cs, ds, s, das, min, milliday, moment, hs, centiday, ks, h, deciday, d, wk, decaday, Ms, fortnight, lunar month, mo, quarantine, hectoday, semester, lunar year, common year, tropical year, Gregorian year, y, sidereal year, leap year, olympiad, lustrum, dec, Gs, jubilee, cen, mil, Age, Ts, megaannum, Ps, galactic year, eon, kalpa, Es, Zs, Ys, Rs, Qs

#### Volume (in increasing size order)
mm3, μL, cm3, mL, cL, cu in, imp fl oz, dL, gi, US dry pt, imp pt, dm3, L, imp qt, US dry qt, board foot, US dry gal, US pk, pk, daL, kenning, US kenning, ft3, US fl oz, US bsh, imp bsh, firkin, kilderkin, hL, US bbl, US beer bbl, US dry bbl, imp bbl, bbl, US pt, yd3, US qt, m3, kL, MTON, US gal, imp gal, dam3, ML, acre ft, hm3, GL, km3, mi3

###### Units stated above may not be 100% accurate, please refer to src/data or use `cnrt -l` for the most accurate list

## Local Development
```bash
gh repo clone TetieWasTaken/cnrt # using GitHub CLI
git clone https://github.com/TetieWasTaken/cnrt.git # using git
cd cnrt
npm install
npm run build
node ./dist/index.js
```
