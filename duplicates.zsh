#!/bin/zsh

DATA_DIR="src/data"
TEMP_FILE=$(mktemp)

for file in $DATA_DIR/*; do
  grep -oE 'unit: "[^"]*|a: "[^"]*|b: "[^"]*|aliases: \[[^]]*\]' "$file" | sed -E 's/.*: "//; s/aliases: \[//; s/\]//' | tr ',' '\n' | sed 's/^ *//; s/ *$//' >> $TEMP_FILE
done

sort $TEMP_FILE | uniq -d
rm $TEMP_FILE
