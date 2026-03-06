export type ThemeProperties = Record<string, string>;

export interface Theme {
  name: string;
  properties: ThemeProperties;
  custom?: string;
}
