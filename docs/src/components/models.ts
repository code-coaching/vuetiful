import { PassReport, SemanticNames } from '@code-coaching/vuetiful';

export const tailwindNumbers = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const;
export type TailwindNumbers = (typeof tailwindNumbers)[number];

export interface ContrastReport {
  key: SemanticNames;
  label: string;
  hex: string;
  rgb: string;
  on: string;
  contrastReport: PassReport;
}
