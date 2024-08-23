import type { Theme } from '@skeletonlabs/skeleton/themes';

const vuetiful = {
  name: 'vuetiful',
  properties: {
    '--space-scale-factor': '1',
    '--type-scale-factor': '1.0',
    '--type-scale-1': 'calc(0.75rem * var(--type-scale-factor))',
    '--type-scale-2': 'calc(0.875rem * var(--type-scale-factor))',
    '--type-scale-3': 'calc(1rem * var(--type-scale-factor))',
    '--type-scale-4': 'calc(1.125rem * var(--type-scale-factor))',
    '--type-scale-5': 'calc(1.25rem * var(--type-scale-factor))',
    '--type-scale-6': 'calc(1.5rem * var(--type-scale-factor))',
    '--type-scale-7': 'calc(1.875rem * var(--type-scale-factor))',
    '--type-scale-8': 'calc(2.25rem * var(--type-scale-factor))',
    '--type-scale-9': 'calc(3rem * var(--type-scale-factor))',
    '--type-scale-10': 'calc(3.75rem * var(--type-scale-factor))',
    '--type-scale-11': 'calc(4.5rem * var(--type-scale-factor))',
    '--type-scale-12': 'calc(6rem * var(--type-scale-factor))',
    '--type-scale-13': 'calc(8rem * var(--type-scale-factor))',
    '--base-font-color': 'var(--color-surface-950)',
    '--base-font-color-dark': 'var(--color-surface-50)',
    '--base-font-family': 'system-ui, sans-serif',
    '--base-font-size': 'inherit',
    '--base-line-height': 'inherit',
    '--base-font-weight': 'normal',
    '--base-font-style': 'normal',
    '--base-letter-spacing': '0em',
    '--heading-font-color': 'var(--color-surface-950)',
    '--heading-font-color-dark': 'var(--color-surface-50)',
    '--heading-font-family': 'inherit',
    '--heading-font-weight': 'bold',
    '--heading-font-style': 'normal',
    '--heading-letter-spacing': 'inherit',
    '--anchor-font-color': 'var(--color-primary-500)',
    '--anchor-font-color-dark': 'var(--color-primary-500)',
    '--anchor-font-family': 'inherit',
    '--anchor-font-size': 'inherit',
    '--anchor-line-height': 'inherit',
    '--anchor-font-weight': 'normal',
    '--anchor-font-style': 'normal',
    '--anchor-letter-spacing': 'inherit',
    '--anchor-text-decoration': 'none',
    '--anchor-text-decoration-hover': 'underline',
    '--anchor-text-decoration-active': 'none',
    '--anchor-text-decoration-focus': 'none',
    '--body-background-color': 'var(--color-surface-50)',
    '--body-background-color-dark': 'var(--color-surface-700)',
    '--radii-default': '6px',
    '--radii-container': '12px',
    '--border-width-default': '1px',
    '--ring-width-default': '1px',
    '--outline-width-default': '1px',
    '--divide-width-default': '1px',
    '--color-primary-50': '255 204 255',
    '--color-primary-100': '251 178 235',
    '--color-primary-200': '247 151 214',
    '--color-primary-300': '244 125 194',
    '--color-primary-400': '240 98 173',
    '--color-primary-500': '236 72 153',
    '--color-primary-600': '209 58 131',
    '--color-primary-700': '182 43 109',
    '--color-primary-800': '156 29 88',
    '--color-primary-900': '129 14 66',
    '--color-primary-950': '102 0 44',
    '--color-primary-contrast-dark': 'var(--color-primary-950)',
    '--color-primary-contrast-light': 'var(--color-primary-50)',
    '--color-primary-contrast-50': 'var(--color-primary-contrast-dark)',
    '--color-primary-contrast-100': 'var(--color-primary-contrast-dark)',
    '--color-primary-contrast-200': 'var(--color-primary-contrast-dark)',
    '--color-primary-contrast-300': 'var(--color-primary-contrast-dark)',
    '--color-primary-contrast-400': 'var(--color-primary-contrast-dark)',
    '--color-primary-contrast-500': 'var(--color-primary-contrast-dark)',
    '--color-primary-contrast-600': 'var(--color-primary-contrast-light)',
    '--color-primary-contrast-700': 'var(--color-primary-contrast-light)',
    '--color-primary-contrast-800': 'var(--color-primary-contrast-light)',
    '--color-primary-contrast-900': 'var(--color-primary-contrast-light)',
    '--color-primary-contrast-950': 'var(--color-primary-contrast-light)',
    '--color-secondary-50': '185 255 255',
    '--color-secondary-100': '149 240 246',
    '--color-secondary-200': '113 226 238',
    '--color-secondary-300': '78 211 229',
    '--color-secondary-400': '42 197 221',
    '--color-secondary-500': '6 182 212',
    '--color-secondary-600': '5 159 188',
    '--color-secondary-700': '4 136 165',
    '--color-secondary-800': '2 113 141',
    '--color-secondary-900': '1 90 118',
    '--color-secondary-950': '0 67 94',
    '--color-secondary-contrast-dark': 'var(--color-secondary-950)',
    '--color-secondary-contrast-light': 'var(--color-secondary-50)',
    '--color-secondary-contrast-50': 'var(--color-secondary-contrast-dark)',
    '--color-secondary-contrast-100': 'var(--color-secondary-contrast-dark)',
    '--color-secondary-contrast-200': 'var(--color-secondary-contrast-dark)',
    '--color-secondary-contrast-300': 'var(--color-secondary-contrast-dark)',
    '--color-secondary-contrast-400': 'var(--color-secondary-contrast-dark)',
    '--color-secondary-contrast-500': 'var(--color-secondary-contrast-dark)',
    '--color-secondary-contrast-600': 'var(--color-secondary-contrast-dark)',
    '--color-secondary-contrast-700': 'var(--color-secondary-contrast-light)',
    '--color-secondary-contrast-800': 'var(--color-secondary-contrast-light)',
    '--color-secondary-contrast-900': 'var(--color-secondary-contrast-light)',
    '--color-secondary-contrast-950': 'var(--color-secondary-contrast-light)',
    '--color-tertiary-50': '180 255 255',
    '--color-tertiary-100': '148 241 237',
    '--color-tertiary-200': '116 227 219',
    '--color-tertiary-300': '84 212 202',
    '--color-tertiary-400': '52 198 184',
    '--color-tertiary-500': '20 184 166',
    '--color-tertiary-600': '16 161 144',
    '--color-tertiary-700': '12 137 122',
    '--color-tertiary-800': '8 114 99',
    '--color-tertiary-900': '4 90 77',
    '--color-tertiary-950': '0 67 55',
    '--color-tertiary-contrast-dark': 'var(--color-tertiary-950)',
    '--color-tertiary-contrast-light': 'var(--color-tertiary-50)',
    '--color-tertiary-contrast-50': 'var(--color-tertiary-contrast-dark)',
    '--color-tertiary-contrast-100': 'var(--color-tertiary-contrast-dark)',
    '--color-tertiary-contrast-200': 'var(--color-tertiary-contrast-dark)',
    '--color-tertiary-contrast-300': 'var(--color-tertiary-contrast-dark)',
    '--color-tertiary-contrast-400': 'var(--color-tertiary-contrast-dark)',
    '--color-tertiary-contrast-500': 'var(--color-tertiary-contrast-dark)',
    '--color-tertiary-contrast-600': 'var(--color-tertiary-contrast-dark)',
    '--color-tertiary-contrast-700': 'var(--color-tertiary-contrast-light)',
    '--color-tertiary-contrast-800': 'var(--color-tertiary-contrast-light)',
    '--color-tertiary-contrast-900': 'var(--color-tertiary-contrast-light)',
    '--color-tertiary-contrast-950': 'var(--color-tertiary-contrast-light)',
    '--color-success-50': '255 255 161',
    '--color-success-100': '230 245 133',
    '--color-success-200': '206 235 105',
    '--color-success-300': '181 224 78',
    '--color-success-400': '157 214 50',
    '--color-success-500': '132 204 22',
    '--color-success-600': '106 180 18',
    '--color-success-700': '79 156 13',
    '--color-success-800': '53 133 9',
    '--color-success-900': '26 109 4',
    '--color-success-950': '0 85 0',
    '--color-success-contrast-dark': 'var(--color-success-950)',
    '--color-success-contrast-light': 'var(--color-success-50)',
    '--color-success-contrast-50': 'var(--color-success-contrast-dark)',
    '--color-success-contrast-100': 'var(--color-success-contrast-dark)',
    '--color-success-contrast-200': 'var(--color-success-contrast-dark)',
    '--color-success-contrast-300': 'var(--color-success-contrast-dark)',
    '--color-success-contrast-400': 'var(--color-success-contrast-dark)',
    '--color-success-contrast-500': 'var(--color-success-contrast-dark)',
    '--color-success-contrast-600': 'var(--color-success-contrast-dark)',
    '--color-success-contrast-700': 'var(--color-success-contrast-light)',
    '--color-success-contrast-800': 'var(--color-success-contrast-light)',
    '--color-success-contrast-900': 'var(--color-success-contrast-light)',
    '--color-success-contrast-950': 'var(--color-success-contrast-light)',
    '--color-warning-50': '255 255 155',
    '--color-warning-100': '251 240 126',
    '--color-warning-200': '247 225 96',
    '--color-warning-300': '242 209 67',
    '--color-warning-400': '238 194 37',
    '--color-warning-500': '234 179 8',
    '--color-warning-600': '208 156 6',
    '--color-warning-700': '182 134 5',
    '--color-warning-800': '155 111 3',
    '--color-warning-900': '129 89 2',
    '--color-warning-950': '103 66 0',
    '--color-warning-contrast-dark': 'var(--color-warning-950)',
    '--color-warning-contrast-light': 'var(--color-warning-50)',
    '--color-warning-contrast-50': 'var(--color-warning-contrast-dark)',
    '--color-warning-contrast-100': 'var(--color-warning-contrast-dark)',
    '--color-warning-contrast-200': 'var(--color-warning-contrast-dark)',
    '--color-warning-contrast-300': 'var(--color-warning-contrast-dark)',
    '--color-warning-contrast-400': 'var(--color-warning-contrast-dark)',
    '--color-warning-contrast-500': 'var(--color-warning-contrast-dark)',
    '--color-warning-contrast-600': 'var(--color-warning-contrast-dark)',
    '--color-warning-contrast-700': 'var(--color-warning-contrast-light)',
    '--color-warning-contrast-800': 'var(--color-warning-contrast-light)',
    '--color-warning-contrast-900': 'var(--color-warning-contrast-light)',
    '--color-warning-contrast-950': 'var(--color-warning-contrast-light)',
    '--color-error-50': '255 199 183',
    '--color-error-100': '252 173 160',
    '--color-error-200': '249 147 137',
    '--color-error-300': '245 120 114',
    '--color-error-400': '242 94 91',
    '--color-error-500': '239 68 68',
    '--color-error-600': '211 54 54',
    '--color-error-700': '183 41 41',
    '--color-error-800': '156 27 27',
    '--color-error-900': '128 14 14',
    '--color-error-950': '100 0 0',
    '--color-error-contrast-dark': 'var(--color-error-950)',
    '--color-error-contrast-light': 'var(--color-error-50)',
    '--color-error-contrast-50': 'var(--color-error-contrast-dark)',
    '--color-error-contrast-100': 'var(--color-error-contrast-dark)',
    '--color-error-contrast-200': 'var(--color-error-contrast-dark)',
    '--color-error-contrast-300': 'var(--color-error-contrast-dark)',
    '--color-error-contrast-400': 'var(--color-error-contrast-dark)',
    '--color-error-contrast-500': 'var(--color-error-contrast-dark)',
    '--color-error-contrast-600': 'var(--color-error-contrast-light)',
    '--color-error-contrast-700': 'var(--color-error-contrast-light)',
    '--color-error-contrast-800': 'var(--color-error-contrast-light)',
    '--color-error-contrast-900': 'var(--color-error-contrast-light)',
    '--color-error-contrast-950': 'var(--color-error-contrast-light)',
    '--color-surface-50': '237 222 255',
    '--color-surface-100': '209 198 252',
    '--color-surface-200': '182 174 249',
    '--color-surface-300': '154 150 247',
    '--color-surface-400': '127 126 244',
    '--color-surface-500': '99 102 241',
    '--color-surface-600': '79 83 216',
    '--color-surface-700': '59 63 191',
    '--color-surface-800': '40 44 166',
    '--color-surface-900': '20 24 141',
    '--color-surface-950': '0 5 116',
    '--color-surface-contrast-dark': 'var(--color-surface-950)',
    '--color-surface-contrast-light': 'var(--color-surface-50)',
    '--color-surface-contrast-50': 'var(--color-surface-contrast-dark)',
    '--color-surface-contrast-100': 'var(--color-surface-contrast-dark)',
    '--color-surface-contrast-200': 'var(--color-surface-contrast-dark)',
    '--color-surface-contrast-300': 'var(--color-surface-contrast-dark)',
    '--color-surface-contrast-400': 'var(--color-surface-contrast-dark)',
    '--color-surface-contrast-500': 'var(--color-surface-contrast-dark)',
    '--color-surface-contrast-600': 'var(--color-surface-contrast-light)',
    '--color-surface-contrast-700': 'var(--color-surface-contrast-light)',
    '--color-surface-contrast-800': 'var(--color-surface-contrast-light)',
    '--color-surface-contrast-900': 'var(--color-surface-contrast-light)',
    '--color-surface-contrast-950': 'var(--color-surface-contrast-light)',
  },
  custom: ``,
} satisfies Theme;

vuetiful.custom = `
/* vietnamese */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJFQNYuDyP7bh.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJVQNYuDyP7bh.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts/quicksand/v31/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJFQNYuDyP7bh.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJVQNYuDyP7bh.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/quicksand/v31/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJFQNYuDyP7bh.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJVQNYuDyP7bh.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts/quicksand/v31/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJFQNYuDyP7bh.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJVQNYuDyP7bh.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts/quicksand/v31/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJFQNYuDyP7bh.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJVQNYuDyP7bh.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts/quicksand/v31/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}


[data-theme='vuetiful'] h1, h2, h3, h4, h5, h6 {
  font-family: 'Quicksand', system-ui;
  font-weight: 700;
}
[data-theme='vuetiful'] body {
  font-family: 'Quicksand', system-ui;
}
[data-theme='vuetiful'] {
  /* prettier-ignore */
  background-image:
		radial-gradient(at 76% 0%, hsla(189,100%,56%,0.36) 0px, transparent 50%),
		radial-gradient(at 1% 0%, hsla(340,100%,76%,0.26) 0px, transparent 50%),
		radial-gradient(at 20% 100%, hsla(241,100%,70%,0.47) 0px, transparent 50%);
  
  .kbd {
    background-color: rgb(var(--color-surface-600) / var(--tw-bg-opacity));
    color: rgb(var(--color-surface-contrast-600) / var(--tw-text-opacity));
  }
  
  .code {
    background-color: rgb(var(--color-surface-700) / var(--tw-bg-opacity));
    color: rgb(var(--color-surface-contrast-700) / var(--tw-text-opacity));
  }

  .anchor {
    color: rgb(var(--color-surface-950) / var(--tw-text-opacity));
    font-weight: 800;
    font-style: italic;
  }
}
.dark [data-theme='vuetiful'] {
  /* prettier-ignore */
  background-image:
		radial-gradient(at 76% 0%, hsla(189,100%,56%,0.20) 0px, transparent 50%),
		radial-gradient(at 1% 0%, hsla(340,100%,76%,0.15) 0px, transparent 50%),
		radial-gradient(at 20% 100%, hsla(241,100%,70%,0.30) 0px, transparent 50%);

  .kbd {
    background-color: rgb(var(--color-surface-400) / var(--tw-bg-opacity));
    color: rgb(var(--color-surface-contrast-400) / var(--tw-text-opacity));
  }

  .code {
    background-color: rgb(var(--color-surface-300) / var(--tw-bg-opacity));
    color: rgb(var(--color-surface-contrast-300) / var(--tw-text-opacity));
  }
  
  .anchor {
    color: rgb(var(--color-surface-50) / var(--tw-text-opacity));
    font-weight: 800;
    font-style: italic;
  }
}
`;

export default vuetiful;
