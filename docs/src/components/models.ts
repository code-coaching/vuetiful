export const tailwindNumbers = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const;

export type TailwindNumbers = (typeof tailwindNumbers)[number];

export const semanticNames = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'] as const;

export type SemanticNames = (typeof semanticNames)[number];

export interface Report {
	emoji: string;
	note: string;
}

export interface PassReport {
	textColor: string;
	backgroundColor: string;
	contrast: number;
	report: Report;
	smallAA: boolean;
	smallAAA: boolean;
	largeAA: boolean;
	largeAAA: boolean;
	fails: boolean;
}

export interface ContrastReport {
	key: SemanticNames;
	label: string;
	hex: string;
	rgb: string;
	on: string;
	contrastReport: PassReport;
}
