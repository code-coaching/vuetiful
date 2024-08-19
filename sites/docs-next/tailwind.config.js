import { skeleton } from "@skeletonlabs/skeleton/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,ts,vue}",
    require("path").join(
      require.resolve("@code-coaching/vuetiful"),
      "../**/*.{html,js,ts,vue,mjs}"
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    skeleton(),
  ],
};
