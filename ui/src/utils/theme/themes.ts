import { ColorSettings } from '../colors/colors.service';

export const themes: Array<Theme> = [
  {
    name: 'vuetiful',
    gradients: {
      light:
        'radial-gradient(at 76% 0%, hsla(189,100%,56%,0.36) 0px, transparent 50%), radial-gradient(at 1% 0%, hsla(340,100%,76%,0.26) 0px, transparent 50%), radial-gradient(at 20% 100%, hsla(241,100%,70%,0.47) 0px, transparent 50%)',
      dark: 'radial-gradient(at 76% 0%, hsla(189,100%,56%,0.20) 0px, transparent 50%), radial-gradient(at 1% 0%, hsla(340,100%,76%,0.15) 0px, transparent 50%), radial-gradient(at 20% 100%, hsla(241,100%,70%,0.30) 0px, transparent 50%)',
    },
    colors: {
      primary: { key: 'primary', label: 'Primary', hex: '#EC4899', rgb: '0 0 0', on: '0 0 0' },
      secondary: { key: 'secondary', label: 'Secondary', hex: '#06B6D4', rgb: '0 0 0', on: '0 0 0' },
      tertiary: { key: 'tertiary', label: 'Tertiary', hex: '#14B8A6', rgb: '0 0 0', on: '0 0 0' },
      success: { key: 'success', label: 'Success', hex: '#84CC16', rgb: '0 0 0', on: '0 0 0' },
      warning: { key: 'warning', label: 'Warning', hex: '#EAB308', rgb: '0 0 0', on: '0 0 0' },
      error: { key: 'error', label: 'Error', hex: '#EF4444', rgb: '0 0 0', on: '255 255 255' },
      surface: { key: 'surface', label: 'Surface', hex: '#6366F1', rgb: '0 0 0', on: '255 255 255' },
    },
    fonts: {
      base: 'system',
      customBase: 'Quicksand',
      baseImports:
        '@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");',
      headings: 'system',
      customHeadings: 'Quicksand',
      headingImports: '',
    },
    textColorLight: '0 0 0',
    textColorDark: '255 255 255',
    roundedBase: '12px',
    roundedContainer: '12px',
    borderBase: '0px',
    customCss: `
  [data-theme="vuetiful"] h1,
  [data-theme="vuetiful"] h2,
  [data-theme="vuetiful"] h3,
  [data-theme="vuetiful"] h4,
  [data-theme="vuetiful"] h5,
  [data-theme="vuetiful"] h6,
  [data-theme="vuetiful"] a,
  [data-theme="vuetiful"] button {
    font-weight: bold;
  }`,
  },
  {
    name: 'rocket',
    gradients: {
      light:
        'radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%), radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%)',
      dark: 'radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%), radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%)',
    },
    colors: {
      primary: { key: 'primary', label: 'Primary', hex: '#06b6d4', rgb: '0 0 0', on: '0 0 0' },
      secondary: { key: 'secondary', label: 'Secondary', hex: '#3b82f6', rgb: '0 0 0', on: '255 255 255' },
      tertiary: { key: 'tertiary', label: 'Tertiary', hex: '#3b82f6', rgb: '0 0 0', on: '255 255 255' },
      success: { key: 'success', label: 'Success', hex: '#4ccb15', rgb: '0 0 0', on: '0 0 0' },
      warning: { key: 'warning', label: 'Warning', hex: '#f4c12a', rgb: '0 0 0', on: '0 0 0' },
      error: { key: 'error', label: 'Error', hex: '#b52c55', rgb: '0 0 0', on: '255 255 255' },
      surface: { key: 'surface', label: 'Surface', hex: '#64748b', rgb: '0 0 0', on: '255 255 255' },
    },
    fonts: {
      base: 'system',
      customBase: 'Roboto',
      baseImports: '@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");',
      headings: 'system',
      customHeadings: 'Space Grotesk',
      headingImports:
        '@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");',
    },
    textColorLight: '0 0 0',
    textColorDark: '255 255 255',
    roundedBase: '0px',
    roundedContainer: '0px',
    borderBase: '0px',
    customCss: `
  [data-theme='rocket'] h1,
  [data-theme='rocket'] h2,
  [data-theme='rocket'] h3,
  [data-theme='rocket'] h4,
  [data-theme='rocket'] h5,
  [data-theme='rocket'] h6 {
    font-weight: bold;
  }`,
  },
];

export const THEME = {
  VUETIFUL: themes[0],
  ROCKET: themes[1],
}

export interface Theme {
  name: string;
  gradients: Gradients;
  colors: {
    primary: ColorSettings;
    secondary: ColorSettings;
    tertiary: ColorSettings;
    success: ColorSettings;
    warning: ColorSettings;
    error: ColorSettings;
    surface: ColorSettings;
  };
  fonts: Fonts;
  textColorLight: string;
  textColorDark: string;
  roundedBase: string;
  roundedContainer: string;
  borderBase: string;
  customCss: string;
  [key: string]: any;
}

export interface Fonts {
  base: string;
  customBase: string;
  baseImports: string;
  headings: string;
  customHeadings: string;
  headingImports: string;
}

export interface Gradients {
  light: string;
  dark: string;
}
