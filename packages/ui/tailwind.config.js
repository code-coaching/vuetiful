import { skeleton } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    skeleton({
      themes: [themes.cerberus, themes.catppuccin, themes.pine, themes.rose],
    }),
  ],
};
