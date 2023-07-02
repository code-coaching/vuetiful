<script setup lang="ts">
import { VAlert, VBadge, VCodeBlock } from '@code-coaching/vuetiful';

const exampleTailwindConfig = `/** @type {import('tailwindcss').Config} */
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
  plugins: [...require('@code-coaching/vuetiful/tailwind/vuetiful.cjs')()],
};`;

const exampleVueMain = `import { createApp } from "vue";

import "@code-coaching/vuetiful/styles/all.css";
import "./style.css";

import App from "./App.vue";

createApp(App).mount("#app");`;

const exampleScriptSetup = `import { useDarkMode, useTheme } from "@code-coaching/vuetiful";
import "@code-coaching/vuetiful/styles/all.css";
import { onMounted } from "vue";

const { autoModeWatcher } = useDarkMode();
const { loadTheme, THEMES } = useTheme();

onMounted(() => {
  autoModeWatcher(); // automatically use the dark preference of the OS
  loadTheme(THEMES.VUETIFUL); // can be any theme from the THEMES object
});`;

const exampleNoScriptSetup = `import { useDarkMode, useTheme } from "@code-coaching/vuetiful";

import { onMounted } from "vue";

export default defineComponent({
  setup() {
    const { autoModeWatcher } = useDarkMode();
    const { loadTheme, THEMES } = useTheme();

    onMounted(() => {
      autoModeWatcher(); // automatically use the dark preference of the OS
      loadTheme(THEMES.VUETIFUL); // can be any theme from the THEMES object
    });

    return {};
  },
});`;

const exampleQuasarConfig = `const { configure } = require('quasar/wrappers');

module.exports = configure(function (/* ctx */) {
  return {

    // here more properties

    // "app.css" is removed here - added in App.vue instead
    css: [],

    build: {

      // here more properties

      // Extend the vite config to dedupe vue
      extendViteConf(viteConf) {
        viteConf.resolve = {
          ...viteConf.resolve,
          dedupe: ['vue'],
        };
      },

      // here more properties
    },

    // here more properties

  }
});`;

const exampleQuasarNoScriptSetup = `import { defineComponent, onMounted, watch } from 'vue';
import { useDarkMode, useTheme } from '@code-coaching/vuetiful';
import '@code-coaching/vuetiful/styles/all.css';
/* This line contains the useQuasar import from 'quasar' it gets parsed out for some reason */
import './css/app.css';


export default defineComponent({
  name: 'App',
  setup() {
    const { autoModeWatcher, currentMode, MODE } = useDarkMode();
    const { loadTheme, THEMES } = useTheme();
    const $q = useQuasar();

    onMounted(() => {
      autoModeWatcher(); // automatically use the dark preference of the OS
      handleQuasarDarkMode(currentMode.value);
      loadTheme(THEMES.VUETIFUL); // can be any theme from the THEMES object
    });

    const handleQuasarDarkMode = (mode: boolean) => {
      $q.dark.set(mode === MODE.DARK);
      if (mode === MODE.LIGHT) {
        document.body.classList.remove('body--light');
      } else {
        document.body.classList.remove('body--dark');
      }
    };

    watch(currentMode, (newMode) => {
      handleQuasarDarkMode(newMode);
    });

    return {};
  },
});`;

const exampleQuasarScriptSetup = `import { onMounted, watch } from 'vue';
import { useDarkMode, useTheme } from '@code-coaching/vuetiful';
import '@code-coaching/vuetiful/styles/all.css';
/* This line contains the useQuasar import from 'quasar' it gets parsed out for some reason */
import './css/app.css';

const { autoModeWatcher, currentMode, MODE } = useDarkMode();
const { loadTheme, THEMES } = useTheme();
const $q = useQuasar();

onMounted(() => {
  autoModeWatcher(); // automatically use the dark preference of the OS
  handleQuasarDarkMode(currentMode.value);
  loadTheme(THEMES.VUETIFUL); // can be any theme from the THEMES object
});

const handleQuasarDarkMode = (mode: boolean) => {
  $q.dark.set(mode === MODE.DARK);
  if (mode === MODE.LIGHT) {
    document.body.classList.remove('body--light');
  } else {
    document.body.classList.remove('body--dark');
  }
};

watch(currentMode, (newMode) => {
  handleQuasarDarkMode(newMode);
});`;

const exampleQuasarPostCss = `/* eslint-disable */
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
    require('tailwindcss'),
    // https://github.com/postcss/autoprefixer
    require('autoprefixer')({
      overrideBrowserslist: [
        'last 4 Chrome versions',
        'last 4 Firefox versions',
        'last 4 Edge versions',
        'last 4 Safari versions',
        'last 4 Android versions',
        'last 4 ChromeAndroid versions',
        'last 4 FirefoxAndroid versions',
        'last 4 iOS versions',
      ],
    }),

    // https://github.com/elchininet/postcss-rtlcss
    // If you want to support RTL css, then
    // 1. yarn/npm install postcss-rtlcss
    // 2. optionally set quasar.config.js > framework > lang to an RTL language
    // 3. uncomment the following line:
    // require('postcss-rtlcss')
  ],
};`;

const exampleQuasarCssOverwrite = `html,
body,
#q-app {
  /*
  * This is done to prevent double scrollbars
  */
  height: 100%;
  overflow: hidden;

  /*
  * Reset several font properties to browser defaults
  */
  font-size: 16px;
  font-family: 'QuickSand', sans-serif;
  -moz-osx-font-smoothing: auto;
}

.flex {
  /*
  * Quasar has a flex utility class that also adds flex-wrap: wrap;
  * This class is used to reset back to flex-wrap: nowrap; the default behavior.
  */
  display: flex;
  flex-wrap: nowrap;
}

/*
* This makes sure the Tailwind flex utility class is not overwritten
* by the override above.
*/
.flex-nowrap {
  flex-wrap: nowrap;
}
.flex-wrap {
  flex-wrap: wrap;
}

/* app global css */
.q-avatar,
.q-chip .q-avatar {
  @apply rounded-token;
  @apply transition-all;
}

.q-badge {
  @apply rounded-token;

  @apply transition-all;
}

.q-banner {
  @apply rounded-container-token;
  @apply transition-all;
}

.q-btn {
  @apply rounded-token;
  @apply transition-all;
}

.q-btn-group {
  @apply rounded-token;
  @apply transition-all;

  width: fit-content;
}

.q-btn-dropdown {
  @apply rounded-token;
  @apply transition-all;
}

.q-menu {
  @apply bg-surface-100-800-token;
  @apply text-surface-900-50-token;

  @apply rounded-container-token;
  @apply transition-all;
}

.q-menu--dark {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
}

.q-card {
  @apply rounded-container-token;
  @apply transition-all;
}

/* Overwrite the white shadow with the normal shadow */
.q-card--dark {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
}

.q-chip {
  @apply rounded-token;
  @apply transition-all;
}

.q-color-picker {
  @apply rounded-container-token;
  @apply transition-all;
}

.q-color-picker--dark {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
}

.q-color-picker__header-bg {
  @apply rounded-tl-container-token;
  @apply rounded-tr-container-token;
}

.q-editor {
  @apply rounded-container-token;
  @apply transition-all;
}

/**
  * Because of how .q-editor is styled
  * the a tag needs to be styled here
  * Add .light-actions or .dark-actions to the QEditor as a class
  */
.light-actions a {
  @apply !text-white;
}

.dark-actions a {
  @apply !text-black;
}

/**
  * Because of how .q-select is styled
  * the dropdown icon needs to be styled here
  * Add .light-actions or .dark-actions to the QSelect as a class
  */
.light-actions i {
  @apply !text-white;
}
.dark-actions i {
  @apply !text-black;
}

/*
* Because of how .q-expansion-item__container -> .q-item is styled
* the background and text color need to be set here
*/
.q-list {
  @apply bg-surface-100-800-token;
  @apply text-surface-900-50-token;

  @apply rounded-container-token;
  @apply transition-all;
}

.q-list .q-card {
  @apply bg-surface-100-800-token;
  @apply text-surface-900-50-token;
}

.q-list > .q-expansion-item:first-child .q-focus-helper {
  @apply rounded-tl-container-token;
  @apply rounded-tr-container-token;
}

.q-list > .q-expansion-item:last-child .q-focus-helper {
  @apply rounded-bl-container-token;
  @apply rounded-br-container-token;
}

.q-list > .q-expansion-item:last-child .q-card {
  @apply rounded-bl-container-token;
  @apply rounded-br-container-token;
}

.q-input {
  @apply rounded-container-token;
  @apply transition-all;
}

.q-field__control::before {
  @apply rounded-container-token;
}

.q-field--outlined .q-field__control::after {
  @apply rounded-container-token;
}

.q-input,
.q-select,
.q-file,
.q-time {
  @apply rounded-container-token;
}

.q-item--dark {
  color: currentColor;
}

.q-field__native {
  color: currentColor !important;
}

.q-time {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);

  @apply bg-surface-100-800-token;
  @apply text-surface-900-50-token;

  @apply rounded-tl-container-token;
  @apply rounded-tr-container-token;
}

.q-time__header {
  @apply bg-surface-300-600-token;
  @apply text-surface-900-50-token;

  @apply rounded-tl-container-token;
  @apply rounded-tr-container-token;
}

.q-time__clock-position--active,
.q-time__clock-pointer {
  @apply bg-surface-900-50-token;
  @apply text-surface-50-900-token;
}

.q-date {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);

  @apply bg-surface-100-800-token;
  @apply text-surface-900-50-token;

  @apply rounded-container-token;
}

.q-date__calendar-item .q-btn {
  @apply bg-surface-100-800-token;
  @apply text-surface-900-50-token;

  @apply rounded-token;
}

.q-date__calendar-item .q-btn--unelevated {
  @apply !bg-surface-900;
  @apply !text-surface-50;
}

.q-date__navigation .q-btn {
  @apply bg-transparent;
  @apply text-surface-900-50-token;

  @apply rounded-token;
}

.q-date__header {
  @apply bg-surface-300-600-token;
  @apply text-surface-900-50-token;
}`;
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>Getting Started</h1>

    <header class="header">
      <section class="section">
        <p>
          <strong>Vuetiful</strong> is an opensource project created and maintained by
          <a href="https://code-coaching.dev" target="_blank" rel="noreferrer"> Code Coaching </a>
          .
        </p>
        <p>
          Vuetiful can be used standalone in any Vue3 project or it can be coupled into other frameworks like
          <a href="https://quasar.dev" target="_blank" rel="noreferrer"> Quasar </a>
          .
        </p>
        <p>Vuetiful only supports Vite based projects.</p>
        <p>This documentation website is created using Quasar (SSR) + Vuetiful.</p>
      </section>
      <hr />
    </header>

    <h2>Install Vuetiful</h2>
    <section class="section">
      <v-code-block language="sh" code="npm install @code-coaching/vuetiful" />
    </section>

    <h2>Install Tailwind</h2>
    <section class="section">
      <p class="mb-4">
        Vuetiful is created using TailwindCSS, you will need to add it as a dependency. However, you are not obligated
        to use TailwindCSS yourself.
      </p>
      <v-code-block language="sh" code="npm install -D tailwindcss postcss autoprefixer prettier-plugin-tailwindcss" />
    </section>

    <h3>Initialize Tailwind</h3>
    <section class="section">
      <v-code-block language="sh" code="npx tailwindcss init" />
    </section>

    <h3>tailwind.config.js</h3>
    <section class="section">
      <v-code-block class="mb-2" language="js" :code="exampleTailwindConfig" />
      <v-alert type="info">
        This file might be called <v-badge class="variant-filled-surface">tailwind.config.cjs</v-badge> depending on your setup.
      </v-alert>
    </section>

    <h3>Tailwind Directives</h3>
    <section class="section">
      <p class="mb-4">
        Make sure to <strong>not</strong> have the Tailwind directives in your css, this is provided by Vuetiful.
      </p>

      <v-code-block
        language="css"
        :code="`// If this is in your css, remove it
@tailwind base;
@tailwind components;
@tailwind utilities;`"
      />
    </section>

    <h3>pnpm | yarn</h3>
    <section class="section">
      <p class="mb-4">
        In case you are using pnpm or yarn instead of npm, you will need to create/add the following to
        <code>prettier.config.js</code>.
      </p>
      <v-code-block
        language="js"
        :code="`// prettier.config.js
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
};`"
      />
    </section>

    <h3>Recommended VSCode Extension</h3>
    <section class="section">
      <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">
        Tailwind CSS IntelliSense
      </a>

      <p>
        This will provide autocompletion for TailwindCSS classes. It will also autocomplete custom classes provided by
        Vuetiful.
      </p>
    </section>

    <h2>Vue 3</h2>
    <section class="section">
      <details>
        <summary>Click here for the Vue 3 instructions</summary>

        <h3>PostCSS config</h3>
        <section class="section">
          <p class="mb-4">Create a <code>postcss.config.cjs</code> file in the root of your project, add the following content:</p>

          <v-code-block
            language="js"
            :code="`module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`"
          />
        </section>

        <h3>Vue3 - main.ts</h3>
        <section class="section">
          <v-code-block class="mb-2" language="ts" :code="exampleVueMain" />
          <v-alert type="info">
            <v-badge class="variant-filled-surface">@code-coaching/vuetiful/styles/all.css</v-badge> must be imported before any
            other css.
          </v-alert>
        </section>

        <h3>App.vue - script setup</h3>
        <section class="section">
          <p class="mb-4">Add the following code to your App.vue file.</p>
          <v-code-block language="ts" :code="exampleScriptSetup" />
        </section>

        <h3>App.vue - no script setup</h3>
        <section class="section">
          <v-code-block language="ts" :code="exampleNoScriptSetup" />
        </section>
      </details>
    </section>

    <h2>Quasar</h2>
    <section class="section">
      <p class="mb-2">Vuetiful is Quasar SSR compatible</p>
      <details>
        <summary>Click here for the Quasar instructions</summary>

        <h3>postcss.config.js</h3>
        <section class="section">
          <v-code-block language="js" :code="exampleQuasarPostCss" />
        </section>

        <h3>quasar.config.js</h3>
        <section class="section">
          <v-code-block language="js" :code="exampleQuasarConfig" />
          <div class="mt-2">
            There are two things to change in <code>quasar.config.js</code>:
            <ul>
              <li>- remove <code>app.css</code> from the css array</li>
              <li>- extendViteConf to dedupe Vue</li>
            </ul>
          </div>
        </section>

        <h3>App.vue - script setup</h3>
        <section class="section">
          <v-code-block language="ts" :code="exampleQuasarScriptSetup" />
        </section>

        <h3>App.vue - no script setup</h3>
        <section class="section">
          <v-code-block language="ts" :code="exampleQuasarNoScriptSetup" />
        </section>

        <h3>app.css</h3>
        <section class="section">
          <p class="mb-4">Copy paste this into your <code>app.css</code> file.</p>
          <v-code-block language="css" :code="exampleQuasarCssOverwrite" />
        </section>
      </details>
    </section>
  </div>
</template>

<style scoped>
pre {
  margin-top: 1rem;
}
</style>
