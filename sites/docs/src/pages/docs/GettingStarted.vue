<script setup lang="ts">
import { VAlert, VBadge, VCodeBlock, VRadioGroup, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';
import SideBarLink from 'components/SideBarLink.vue';
import { ROUTE_NAMES } from 'src/router/routes';

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

const exampleVueMain = `import { createApp } from 'vue';

import '@code-coaching/vuetiful/styles/all.css';
/**
 * Uncomment the theme you want to use
 */
import '@code-coaching/vuetiful/themes/theme-vuetiful.css';
// import '@code-coaching/vuetiful/themes/theme-rocket.css';
// import '@code-coaching/vuetiful/themes/theme-sahara.css';
// import '@code-coaching/vuetiful/themes/theme-seafoam.css';
// import '@code-coaching/vuetiful/themes/theme-seasonal.css';
// import '@code-coaching/vuetiful/themes/theme-skeleton.css';
import './style.css';

import App from './App.vue';

createApp(App).mount('#app');`;

const exampleScriptSetup = `import { useDarkMode, useTheme } from "@code-coaching/vuetiful";
import { onMounted } from "vue";

const { autoModeWatcher } = useDarkMode();
const { changeDataTheme } = useTheme();

onMounted(() => {
  changeDataTheme("vuetiful"); // adds data-theme="vuetiful" to the <body> tag
  autoModeWatcher(); // automatically use the dark preference of the OS
});`;

const exampleNoScriptSetup = `import { useDarkMode, useTheme } from "@code-coaching/vuetiful";
import { onMounted } from "vue";

export default defineComponent({
  setup() {
    const { autoModeWatcher } = useDarkMode();
    const { changeDataTheme } = useTheme();

    onMounted(() => {
      changeDataTheme("vuetiful"); // adds data-theme="vuetiful" to the <body> tag
      autoModeWatcher(); // automatically use the dark preference of the OS
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
/* Add in the line containing the useQuasar import from 'quasar', it gets parsed out for some reason */

import '@code-coaching/vuetiful/styles/all.css';
import "@code-coaching/vuetiful/css/overrides/quasar.css"; // This provides overrides for Quasar components

/**
 * Uncomment the theme you want to use
 */
import '@code-coaching/vuetiful/themes/theme-vuetiful.css';
// import '@code-coaching/vuetiful/themes/theme-rocket.css';
// import '@code-coaching/vuetiful/themes/theme-sahara.css';
// import '@code-coaching/vuetiful/themes/theme-seafoam.css';
// import '@code-coaching/vuetiful/themes/theme-seasonal.css';
// import '@code-coaching/vuetiful/themes/theme-skeleton.css';
import './css/app.css';

export default defineComponent({
  name: 'App',
  setup() {
    const { autoModeWatcher, chosenMode, MODE } = useDarkMode();
    const { changeDataTheme } = useTheme();
    const $q = useQuasar();

    onMounted(() => {
      changeDataTheme("vuetiful"); // adds data-theme="vuetiful" to the <body> tag
      autoModeWatcher(); // automatically use the dark preference of the OS
      handleQuasarDarkMode(chosenMode.value);
    });

    const handleQuasarDarkMode = (mode: string) => {
      $q.dark.set(mode === MODE.DARK);
      if (mode === MODE.LIGHT) {
        document.body.classList.remove('body--light');
      } else {
        document.body.classList.remove('body--dark');
      }
    };

    watch(() => chosenMode.value, (newMode) => {
      handleQuasarDarkMode(newMode);
    });

    return {};
  },
});`;

const exampleQuasarScriptSetup = `import { onMounted, watch } from 'vue';
import { useDarkMode, useTheme } from '@code-coaching/vuetiful';
import { useQuasar } from 'quasar';

import '@code-coaching/vuetiful/styles/all.css';
import "@code-coaching/vuetiful/css/overrides/quasar.css"; // This provides overrides for Quasar components

/**
 * Uncomment the theme you want to use
 */
import '@code-coaching/vuetiful/themes/theme-vuetiful.css';
// import '@code-coaching/vuetiful/themes/theme-rocket.css';
// import '@code-coaching/vuetiful/themes/theme-sahara.css';
// import '@code-coaching/vuetiful/themes/theme-seafoam.css';
// import '@code-coaching/vuetiful/themes/theme-seasonal.css';
// import '@code-coaching/vuetiful/themes/theme-skeleton.css';

import './css/app.css';

const { autoModeWatcher, chosenMode, MODE } = useDarkMode();
const { changeDataTheme } = useTheme();
const $q = useQuasar();

onMounted(() => {
  changeDataTheme("vuetiful"); // adds data-theme="vuetiful" to the <body> tag
  autoModeWatcher(); // automatically use the dark preference of the OS
  handleQuasarDarkMode(chosenMode.value);
});

const handleQuasarDarkMode = (mode: string) => {
  $q.dark.set(mode === MODE.DARK);
  if (mode === MODE.LIGHT) {
    document.body.classList.remove('body--light');
  } else {
    document.body.classList.remove('body--dark');
  }
};

watch(() => chosenMode.value, (newMode) => {
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

<template>
  <h1 class="h1">Getting Started</h1>

  <header class="header">
    <section class="section">
      <p>
        Vuetiful is a Proof of Concept component library for Vite based Vue3 applications. It is based on the design
        tokens of <a href="https://www.skeleton.dev">Skeleton</a>, it leverages TailwindCSS and HeadlessUI.
      </p>
      <p>It provides overwrites for a large set of Quasar components.</p>
      <p>
        Vuetiful can be used standalone in any Vue3 project or it can be coupled into other frameworks like
        <a href="https://quasar.dev" target="_blank" rel="noreferrer">Quasar</a>.
      </p>
    </section>
    <hr />
  </header>

  <h2 class="h2">Install Vuetiful</h2>
  <section class="section">
    <v-code-block language="sh" code="npm install @code-coaching/vuetiful" />
  </section>

  <h2 class="h2">Install Tailwind</h2>
  <section class="section">
    <p>TailwindCSS is a framework with utility/helper classes for direct styling of HTML elements.</p>
    <p class="mb-4">
      Vuetiful is created using TailwindCSS, you will need to add it as a dependency. However, you are not obligated to
      use TailwindCSS yourself.
    </p>
    <v-code-block language="sh" code="npm install -D tailwindcss postcss autoprefixer prettier-plugin-tailwindcss" />
  </section>

  <h3 class="h3">Initialize Tailwind</h3>
  <section class="section">
    <v-code-block language="sh" code="npx tailwindcss init" />
  </section>

  <h3 class="h3">tailwind.config.js</h3>
  <section class="section">
    <v-code-block class="mb-2" language="js" :code="exampleTailwindConfig" />
    <v-alert type="info">
      This file might be called <v-badge preset="filled-surface-500">tailwind.config.cjs</v-badge> depending on your
      setup.
    </v-alert>
  </section>

  <h3 class="h3">Tailwind Directives</h3>
  <section class="section">
    <p class="mb-4">
      Make sure to <strong>not</strong> have the Tailwind directives in your css, this is provided by Vuetiful.
    </p>

    <v-code-block
      language="css"
      :code="`// If any of these are in your css, remove them
@tailwind base;
@tailwind components;
@tailwind utilities;`"
    />
  </section>

  <h3 class="h3">pnpm | yarn</h3>
  <section class="section">
    <p class="mb-4">
      In case you are using pnpm or yarn instead of npm, you will need to create/add the following to
      <code class="code">prettier.config.js</code>.
    </p>
    <v-code-block
      language="js"
      :code="`// prettier.config.js
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
};`"
    />
  </section>

  <h3 class="h3">Recommended VSCode Extension</h3>
  <section class="section">
    <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">
      Tailwind CSS IntelliSense
    </a>

    <p>
      This will provide autocompletion for TailwindCSS classes. It will also autocomplete custom classes provided by
      Vuetiful.
    </p>
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template v-slot:tabs>
      <v-tab><h2 class="mb-0">Vue 3</h2></v-tab>
      <v-tab><h2 class="mb-0">Quasar</h2></v-tab>
    </template>
    <v-tab-panel>
      <h3 class="h3">PostCSS config</h3>
      <section class="section">
        <p class="mb-4">
          Create a <code class="code">postcss.config.cjs</code> file in the root of your project, add the following
          content:
        </p>

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

      <h3 class="h3">main.ts</h3>
      <section class="section flex flex-col gap-2">
        <v-code-block class="mb-2" language="ts" :code="exampleVueMain" />
        <v-alert type="info">
          <v-badge preset="filled-surface-500">@code-coaching/vuetiful/styles/all.css</v-badge> must be imported before
          any other css.
        </v-alert>
        <v-alert type="info">
          Visit the
          <v-radio-group unstyled hover="transparant" active="transparant" class="p-2">
            <side-bar-link
              class="w-40 min-w-full justify-start px-2 py-1"
              :route-name="ROUTE_NAMES.DOCS.THEME_GENERATOR"
              :link="ROUTE_NAMES.DOCS.THEME_GENERATOR"
            >
              Theme Generator
            </side-bar-link>
          </v-radio-group>
          to create a custom theme.
        </v-alert>
      </section>

      <h3 class="h3">App.vue</h3>
      <section class="section">
        <v-tabs>
          <template v-slot:tabs>
            <v-tab><h4 class="mb-0">script setup</h4></v-tab>
            <v-tab><h4 class="mb-0">no script setup</h4></v-tab>
          </template>
          <v-tab-panel>
            <v-code-block language="ts" :code="exampleScriptSetup" />
          </v-tab-panel>
          <v-tab-panel>
            <v-code-block language="ts" :code="exampleNoScriptSetup" />
          </v-tab-panel>
        </v-tabs>
      </section>
    </v-tab-panel>
    <v-tab-panel>
      <section class="section">
        <v-alert type="info">Vuetiful is Quasar SSR compatible</v-alert>
      </section>
      <section class="section">
        <h3 class="h3">postcss.config.js</h3>
        <section class="section">
          <v-code-block language="js" :code="exampleQuasarPostCss" />
        </section>

        <h3 class="h3">quasar.config.js</h3>
        <section class="section">
          <v-code-block language="js" :code="exampleQuasarConfig" />
          <div class="mt-2">
            There are two things to change in <code class="code">quasar.config.js</code>:
            <ul>
              <li>- remove <code class="code">app.css</code> from the css array</li>
              <li>- extendViteConf to dedupe Vue</li>
            </ul>
          </div>
        </section>

        <h3 class="h3">App.vue</h3>
        <section class="section">
          <v-tabs>
            <template v-slot:tabs>
              <v-tab><h4 class="mb-0">script setup</h4></v-tab>
              <v-tab><h4 class="mb-0">no script setup</h4></v-tab>
            </template>
            <v-tab-panel>
              <v-code-block language="ts" :code="exampleQuasarScriptSetup" />
            </v-tab-panel>
            <v-tab-panel>
              <v-code-block language="ts" :code="exampleQuasarNoScriptSetup" />
            </v-tab-panel>
          </v-tabs>
        </section>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>

<style scoped>
pre {
  margin-top: 1rem;
}
</style>
