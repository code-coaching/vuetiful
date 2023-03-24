<template>
  <div class="p-4">
    <header class="space-y-4">
      <h1>Get Started</h1>
      <p>
        Vuetiful can be used standalone in any Vue3 project or it can be coupled
        into other frameworks like
        <a href="https://quasar.dev" target="_blank" rel="noreferrer">
          Quasar
        </a>
        .
      </p>

      <p>
        Vuetiful works with TailwindCSS, you will need to add it as a
        dependency. However, you are not obligated to use TailwindCSS yourself.
      </p>
      <hr class="space-y-4" />
    </header>

    <h2>Install Vuetiful</h2>
    <div>
      <pre>npm install @code-coaching/vuetiful</pre>
    </div>

    <h2>Install Tailwind</h2>
    <div>
      <pre>npm install -D tailwindcss postcss autoprefixer</pre>
    </div>

    <h2>Initialize Tailwind</h2>
    <div>
      <pre>npx tailwindcss init</pre>
    </div>

    <h2>tailwind.config.js</h2>
    <pre>{{ exampleTailwindConfig }}</pre>
    Note: This file might be called `tailwind.config.cjs` depending on your
    setup.

    <h2>Tailwind Directives</h2>
    Make sure to <strong>not</strong> have the Tailwind directives in your css,
    this is provided by Vuetiful.
    <pre>
// If this is in your css, remove it
@tailwind base;
@tailwind components;
@tailwind utilities;</pre
    >

    <h2>Vue 3</h2>
    <details>
      <summary>Click here for the Vue 3 instructions</summary>

      <h3>PostCSS config</h3>
      <p>
        Create a `postcss.config.cjs` file in the root of your project, add the
        following content:
      </p>
      <pre>
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
</pre
      >

      <h3>Vue3 - main.ts</h3>
      <pre>
import { createApp } from "vue";

import "@code-coaching/vuetiful/styles/all.css";
import "./style.css";

import App from "./App.vue";

createApp(App).mount("#app");</pre
      >

      <p>
        Note: `@code-coaching/vuetiful/styles/all.css` must be imported before
        any other css.
      </p>

      <h3>App.vue - script setup</h3>
      Add the following code to your App.vue file.

      <pre
        >{{ exampleScriptSetup }}
</pre
      >

      <h3>App.vue - no script setup</h3>
      <pre
        >{{ exampleNoScriptSetup }}
</pre
      >
    </details>

    <h2>Quasar</h2>
    <p class="mb-2">Vuetiful is Quasar SSR compatible</p>
    <details>
      <summary>Click here for the Quasar instructions</summary>

      <h3>postcss.config.js</h3>
      <pre>{{ exampleQuasarPostCss }}</pre>

      <h3>quasar.config.js</h3>
      <pre>{{ exampleQuasarConfig }}</pre>
      <div>
        There are two things to change in `quasar.config.js`:
        <ul>
          <li>- remove "app.css" from the css array</li>
          <li>- extendViteConf to dedupe Vue</li>
        </ul>
      </div>

      <h3>App.vue - no script setup</h3>
      <pre>{{ exampleQuasarNoScriptSetup }}</pre>

      <h3>App.vue - script setup</h3>
      <pre>{{ exampleQuasarScriptSetup }}</pre>
    </details>
  </div>
</template>

<script setup lang="ts">
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
const exampleScriptSetup = `import { useDarkMode, useTheme } from "@code-coaching/vuetiful";
import "@code-coaching/vuetiful/styles/all.css";
import { onMounted } from "vue";

const { autoModeWatcher } = useDarkMode();
const { loadTheme, THEMES } = useTheme();

onMounted(() => {
  autoModeWatcher();
  loadTheme(THEMES.VUETIFUL);
});`;

const exampleNoScriptSetup = `import { useDarkMode, useTheme } from "@code-coaching/vuetiful";

import { onMounted } from "vue";

export default defineComponent({
  setup() {
    const { autoModeWatcher } = useDarkMode();
    const { loadTheme, THEMES } = useTheme();

    onMounted(() => {
      autoModeWatcher(); // automatically use the dark preference of the OS
      loadTheme(BUILT_IN_THEMES.VUETIFUL);
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
      loadTheme(THEMES.SEAFOAM);
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
  loadTheme(THEMES.VUETIFUL);
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
</script>

<style scoped>
h2,
h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

pre {
  margin-top: 1rem;
}
</style>
