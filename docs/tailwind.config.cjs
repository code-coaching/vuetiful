/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,ts,vue}',
    require('path').join(
      require.resolve('@code-coaching/vuetiful'),
      '../**/*.{html,js,ts,vue}'
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    ...require('@code-coaching/vuetiful/tailwind/vuetiful.cjs')()
  ],
};
