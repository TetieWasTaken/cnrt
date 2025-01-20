interface Convert {
  fromBase: (value: number) => number;
  toBase: (value: number) => number;
}

export interface Data {
  unit: string;
  aliases: string[];
  reference?: number;
  customConvert?: Convert;
  warning?: string;
}

export interface ExtendedData extends Data {
  default: boolean;
}
