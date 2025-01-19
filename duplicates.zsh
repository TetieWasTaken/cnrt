#!/bin/zsh

DATA_DIR="src/data"
TEMP_FILE=$(mktemp)

for file in $DATA_DIR/*; do
  grep -o 'unit: "[^"]*' "$file" | sed 's/unit: "//' >> $TEMP_FILE
done

sort $TEMP_FILE | uniq -d
rm $TEMP_FILE
