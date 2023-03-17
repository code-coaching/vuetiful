// The Vuetiful Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// Vuetiful Docs: https://www.vuetiful.dev/docs/get-started

const plugin = require("tailwindcss/plugin");

// Vuetiful Theme Modules
const themeColors = require("./theme/colors.cjs");
// Vuetiful Design Token Modules
const tokensBackgrounds = require("./tokens/backgrounds.cjs");
const tokensBorders = require("./tokens/borders.cjs");
const tokensBorderRadius = require("./tokens/border-radius.cjs");
const tokensFills = require("./tokens/fills.cjs");
const tokensText = require("./tokens/text.cjs");
const tokensRings = require("./tokens/rings.cjs");

module.exports = plugin(
  ({ addUtilities }) => {
    addUtilities({
      // Implement Vuetiful design token classes
      ...tokensBackgrounds(),
      ...tokensBorders(),
      ...tokensBorderRadius(),
      ...tokensFills(),
      ...tokensText(),
      ...tokensRings(),
    });
  },
  {
    theme: {
      extend: {
        // Implement Vuetiful theme colors
        colors: themeColors(),
      },
    },
  }
);
