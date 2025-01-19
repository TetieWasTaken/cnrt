export interface Data {
  unit: string;
  aliases: string[];
  reference: number;
}

export interface ExtendedData extends Data {
  default: boolean;
}
