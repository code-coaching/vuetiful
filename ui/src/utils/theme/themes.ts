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
      base: 'system-ui',
      customBase: 'Quicksand',
      baseImports:
        '@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");',
      headings: 'system-ui',
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
      secondary: { key: 'secondary', label: 'Secondary', hex: '#3b82f6', rgb: '0 0 0', on: '0 0 0' },
      tertiary: { key: 'tertiary', label: 'Tertiary', hex: '#3b82f6', rgb: '0 0 0', on: '0 0 0' },
      success: { key: 'success', label: 'Success', hex: '#4ccb15', rgb: '0 0 0', on: '0 0 0' },
      warning: { key: 'warning', label: 'Warning', hex: '#f4c12a', rgb: '0 0 0', on: '0 0 0' },
      error: { key: 'error', label: 'Error', hex: '#b52c55', rgb: '0 0 0', on: '255 255 255' },
      surface: { key: 'surface', label: 'Surface', hex: '#64748b', rgb: '0 0 0', on: '255 255 255' },
    },
    fonts: {
      base: 'system-ui',
      customBase: 'Roboto',
      baseImports: '@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");',
      headings: 'system-ui',
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
  {
    name: 'sahara',
    gradients: {
      light:
        'radial-gradient(at 100% 36%, hsla(37,81%,56%,0.15) 0px, transparent 50%), radial-gradient(at 7% 0%, hsla(37,81%,56%,0.20) 0px, transparent 50%)',
      dark: 'radial-gradient(at 100% 36%, hsla(37,81%,56%,0.15) 0px, transparent 50%), radial-gradient(at 7% 0%, hsla(37,81%,56%,0.20) 0px, transparent 50%)',
    },
    colors: {
      primary: { key: 'primary', label: 'Primary', hex: '#ecaa36', rgb: '0 0 0', on: '0 0 0' },
      secondary: { key: 'secondary', label: 'Secondary', hex: '#3acbba', rgb: '0 0 0', on: '0 0 0' },
      tertiary: { key: 'tertiary', label: 'Tertiary', hex: '#bbdf86', rgb: '0 0 0', on: '0 0 0' },
      success: { key: 'success', label: 'Success', hex: '#84cc16', rgb: '0 0 0', on: '0 0 0' },
      warning: { key: 'warning', label: 'Warning', hex: '#e5c157', rgb: '0 0 0', on: '0 0 0' },
      error: { key: 'error', label: 'Error', hex: '#db5c9c', rgb: '0 0 0', on: '0 0 0' },
      surface: { key: 'surface', label: 'Surface', hex: '#da4e65', rgb: '0 0 0', on: '0 0 0' },
    },
    fonts: {
      base: 'sans-serif',
      customBase: 'Lato',
      baseImports:
        '@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");',
      headings: 'sans-serif',
      customHeadings: 'Raleway',
      headingImports:
        '@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");',
    },
    textColorLight: '0 0 0',
    textColorDark: '255 255 255',
    roundedBase: '9999px',
    roundedContainer: '24px',
    borderBase: '1px',
    customCss: `
[data-theme='sahara'] h1,
[data-theme='sahara'] h2,
[data-theme='sahara'] h3,
[data-theme='sahara'] h4,
[data-theme='sahara'] h5,
[data-theme='sahara'] h6 {
  font-weight: 600;
}
[data-theme='sahara'] p {
  font-weight: 400;
}`,
  },
//   {
//     name: 'seafoam',
//     gradients: {
//       light: 'linear-gradient(0deg, rgba(203, 221, 254, 0.75) 0%, rgba(163, 209, 206, 0.75) 100%)',
//       dark: 'linear-gradient(0deg, rgba(203, 221, 254, 0.75) 0%, rgba(163, 209, 206, 0.75) 100%)',
//     },
//     colors: {
//       primary: { key: 'primary', label: 'Primary', hex: '#86d0cb', rgb: '0 0 0', on: '0 0 0' },
//       secondary: { key: 'secondary', label: 'Secondary', hex: '#213355', rgb: '0 0 0', on: '255 255 255' },
//       tertiary: { key: 'tertiary', label: 'Tertiary', hex: '#ff3d00', rgb: '0 0 0', on: '255 255 255' },
//       success: { key: 'success', label: 'Success', hex: '#06e5a2', rgb: '0 0 0', on: '0 0 0' },
//       warning: { key: 'warning', label: 'Warning', hex: '#eae557', rgb: '0 0 0', on: '0 0 0' },
//       error: { key: 'error', label: 'Error', hex: '#d24646', rgb: '0 0 0', on: '255 255 255' },
//       surface: { key: 'surface', label: 'Surface', hex: '#25d1d4', rgb: '0 0 0', on: '0 0 0' },
//     },
//     fonts: {
//       base: 'system-ui',
//       customBase: '',
//       baseImports:
//         '',
//       headings: 'serif',
//       customHeadings: 'Playfair Display',
//       headingImports:
//         '@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");',
//     },
//     textColorLight: '0 0 0',
//     textColorDark: '255 255 255',
//     roundedBase: '16px',
//     roundedContainer: '16px',
//     borderBase: '3px',
//     customCss: `
// [data-theme='seafoam'] h1,
// [data-theme='seafoam'] h2,
// [data-theme='seafoam'] h3,
// [data-theme='seafoam'] h4,
// [data-theme='seafoam'] h5,
// [data-theme='seafoam'] h6 {
//   font-weight: bold;
//   font-style: italic;
//   letter-spacing: 1px;
// }`
//   },
  {
    name: 'seasonal',
    gradients: {
      light: 'radial-gradient(at 22% 100%, hsla(39,68%,50%,0.23) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(189,100%,56%,0.33) 0px, transparent 50%)',
      dark: 'radial-gradient(at 22% 0%, hsla(39,68%,50%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.15) 0px, transparent 50%)',
    },
    colors: {
      primary: { key: 'primary', label: 'Primary', hex: '#40b09d', rgb: '0 0 0', on: '0 0 0' },
      secondary: { key: 'secondary', label: 'Secondary', hex: '#d7a12d', rgb: '0 0 0', on: '0 0 0' },
      tertiary: { key: 'tertiary', label: 'Tertiary', hex: '#411d96', rgb: '0 0 0', on: '0 0 0' },
      success: { key: 'success', label: 'Success', hex: '#aad765', rgb: '0 0 0', on: '0 0 0' },
      warning: { key: 'warning', label: 'Warning', hex: '#e1ca84', rgb: '0 0 0', on: '0 0 0' },
      error: { key: 'error', label: 'Error', hex: '#e1565d', rgb: '0 0 0', on: '0 0 0' },
      surface: { key: 'surface', label: 'Surface', hex: '#0f233e', rgb: '0 0 0', on: '255 255 255' },
    },
    fonts: {
      base: 'system-ui',
      customBase: '',
      baseImports: '',
      headings: 'sans-serif',
      customHeadings: 'Quicksand',
      headingImports:
        '@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");',
    },
    textColorLight: '0 0 0',
    textColorDark: '255 255 255',
    roundedBase: '12px',
    roundedContainer: '12px',
    borderBase: '0px',
    customCss: ''
  },
  {
    name: 'skeleton',
    gradients: {
      light: 'radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%), radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);',
      dark: 'radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%), radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);',
    },
    colors: {
      primary: { key: 'primary', label: 'Primary', hex: '#0FBA81', rgb: '0 0 0', on: '0 0 0' },
      secondary: { key: 'secondary', label: 'Secondary', hex: '#4F46E5', rgb: '0 0 0', on: '255 255 255' },
      tertiary: { key: 'tertiary', label: 'Tertiary', hex: '#0EA5E9', rgb: '0 0 0', on: '0 0 0' },
      success: { key: 'success', label: 'Success', hex: '#84cc16', rgb: '0 0 0', on: '0 0 0' },
      warning: { key: 'warning', label: 'Warning', hex: '#EAB308', rgb: '0 0 0', on: '0 0 0' },
      error: { key: 'error', label: 'Error', hex: '#D41976', rgb: '0 0 0', on: '255 255 255' },
      surface: { key: 'surface', label: 'Surface', hex: '#495a8f', rgb: '0 0 0', on: '255 255 255' },
    },
    fonts: {
      base: 'system-ui',
      customBase: '',
      baseImports: '',
      headings: 'system-ui',
      customHeadings: '',
      headingImports: '',
    },
    textColorLight: '0 0 0',
    textColorDark: '255 255 255',
    roundedBase: '9999px',
    roundedContainer: '8px',
    borderBase: 'px',
    customCss: `
[data-theme='skeleton'] h1,
[data-theme='skeleton'] h2,
[data-theme='skeleton'] h3,
[data-theme='skeleton'] h4,
[data-theme='skeleton'] h5,
[data-theme='skeleton'] h6 {
  font-weight: bold;
}`
  }
];

export const THEME = {
  VUETIFUL: themes[0],
  ROCKET: themes[1],
};

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
