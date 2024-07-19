import { skeleton } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';

/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: [
    './src/**/*.{html,js,ts,vue}',
    require('path').join(
      require.resolve('@code-coaching/vuetiful'),
      '../**/*.{html,js,ts,vue,mjs}'
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    skeleton({
      themes: [themes.cerberus, themes.catppuccin, themes.pine, themes.rose],
    }),
  ],
};
