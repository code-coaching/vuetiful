<script setup lang="ts">
import {
  VAlert,
  VCodeBlock,
  VTab,
  VTabPanel,
  VTabs,
} from "@code-coaching/vuetiful";

const exampleTailwindConfig = `import { skeleton } from "@skeletonlabs/skeleton/plugin";

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
};`;

const exampleScriptSetup = `import {
  useDarkMode,
  useTheme,
  VShell,
  Vuetiful,
} from "@code-coaching/vuetiful";
import { onMounted } from "vue";

const { autoModeWatcher } = useDarkMode();
const { applyTheme, themes } = useTheme();

onMounted(() => {
  /**
   * This adds the data-theme attribute to the <body> tag
   * And it will load the theme in the <head> tag
   */
  applyTheme(themes.vuetiful);
  /**
   * This will add the dark mode class to the html tag based on the OS preference
   */
  autoModeWatcher();
});`;

const exampleNoScriptSetup = `import { useDarkMode, useTheme } from "@code-coaching/vuetiful";
import { onMounted } from "vue";

export default defineComponent({
  setup() {
    const { autoModeWatcher } = useDarkMode();
    const { applyTheme, themes } = useTheme();

    onMounted(() => {
      /**
       * This adds the data-theme attribute to the <body> tag
       * And it will load the theme in the <head> tag
       */
      applyTheme(themes.vuetiful);
      /**
       * This will add the dark mode class to the html tag based on the OS preference
       */
      autoModeWatcher();
    });

    return {};
  },
});`;

const exampleTemplate = `<Vuetiful>
  <v-shell fixed-header-height="50px">
    <template #fixedHeader>
      <div class="flex h-[50px] items-center">
        <div class="mx-4 font-bold">Vuetiful</div>
      </div>
    </template>
    <router-view />
  </v-shell>
</Vuetiful>`;

const settings = `{
  // ... other settings

  "editor.quickSuggestions": {
    "strings": true
  },
  "tailwindCSS.experimental.classRegex": [
    "class\\w+\\s*[:=]\\s*['\"\`]([^'\"\`]*)['\"\`]", // matches classCustom="tailwind-class" or classCustom:'tailwind-class'
    "class(?:-[a-z]+)+[:=]['\"\`]([^'\"\`]*)['\"\`]" // matches class-custom="tailwind-class" or class-custom:'tailwind-class'
  ]
}`;

const nuxtConfig = `// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
})`;

const exampleNuxtSetup = `import {
  useDarkMode,
  useTheme,
  VShell,
  Vuetiful,
} from "@code-coaching/vuetiful";

const { applyTheme, themes } = useTheme();
const { autoModeWatcher } = useDarkMode();

onNuxtReady(() => {
  /**
    * This adds the data-theme attribute to the <body> tag
    * And it will load the theme in the <head> tag
    */
  applyTheme(themes.vuetiful);
  /**
    * This will add the dark mode class to the html tag based on the OS preference
    */
  autoModeWatcher();
});

const generateId = () => useId();`;

const exampleNuxtTemplate = `<Vuetiful :id-generator="generateId">
  <v-shell fixed-header-height="50px">
    <template #fixedHeader>
      <div class="flex h-[50px] items-center">
        <div class="mx-4 font-bold">Vuetiful</div>
      </div>
    </template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-shell>
</Vuetiful>`;

const exampleQuasarPostcss = `/* eslint-disable */
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
        'last 4 iOS versions'
      ]
    })

    // https://github.com/elchininet/postcss-rtlcss
    // If you want to support RTL css, then
    // 1. yarn/npm install postcss-rtlcss
    // 2. optionally set quasar.config.js > framework > lang to an RTL language
    // 3. uncomment the following line:
    // require('postcss-rtlcss')
  ]
}`;

const exampleQuasarConig = `/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js


const { configure } = require('quasar/wrappers');


module.exports = configure(function (/* ctx */) {
  return {

    // more code here

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
    build: {

      // more code here

      extendViteConf(viteConf) {
        viteConf.resolve = {
          ...viteConf.resolve,
          dedupe: ['vue'],
        };
      },

      // more code here
      
    },

    // more code here
  }
});`;

const exampleQuasarScriptSetup = `import { useDarkMode, useTheme } from '@code-coaching/vuetiful';
import { useQuasar } from 'quasar';
import { onMounted, watch } from 'vue';

import "@code-coaching/vuetiful/css/overrides/quasar.css"; // This provides overrides for Quasar components

const { autoModeWatcher, chosenMode, MODE } = useDarkMode();
const { applyTheme, themes } = useTheme();
const $q = useQuasar();

onMounted(() => {
  applyTheme(themes.vuetiful); // adds data-theme="vuetiful" to the <body> tag
  autoModeWatcher(); // automatically use the dark preference of the OS
  handleQuasarDarkMode(chosenMode.value);
});

const handleQuasarDarkMode = (mode: string) => {
  $q.dark.set(mode === MODE.DARK);
};

watch(() => chosenMode.value, (newMode) => {
  handleQuasarDarkMode(newMode);
});`;
</script>

<template>
  <h1 class="h1">Getting Started</h1>

  <header class="header">
    <section class="section">
      <p>
        Vuetiful is a component library for Vue applications. It is based on the
        design tokens of
        <a class="anchor" href="https://www.skeleton.dev">Skeleton</a>, it
        leverages TailwindCSS and HeadlessUI. It is SSR compatible and provides
        both theming and dark mode support.
      </p>
    </section>
  </header>

  <h2 class="h2">Install Vuetiful</h2>
  <section class="section">
    <v-code-block
      language="sh"
      code="npm install @skeletonlabs/skeleton@next @code-coaching/vuetiful"
    />
    <v-alert type="info">
      Make sure to use the <code class="code">next</code> version of skeleton
      <code class="code">@skeletonlabs/skeleton@next</code>.
    </v-alert>
  </section>

  <v-tabs class-panels="px-0">
    <template v-slot:tabs>
      <v-tab>Vue 3</v-tab>
      <v-tab>Nuxt</v-tab>
      <v-tab>Quasar</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">Install Tailwind</h2>
      <section class="section">
        <p>
          TailwindCSS is a framework with utility/helper classes for direct
          styling of HTML elements.
        </p>
        <p class="mb-4">
          Vuetiful is created using TailwindCSS, you will need to add it as a
          dependency. However, you are not obligated to use TailwindCSS
          yourself.
        </p>
        <v-code-block
          language="sh"
          code="npm install -D tailwindcss @tailwindcss/forms postcss autoprefixer"
        />
      </section>

      <h3 class="h3">Initialize Tailwind</h3>
      <section class="section">
        <v-code-block language="sh" code="npx tailwindcss init -p" />
        <p>
          This will create a file named
          <code class="code">tailwind.config.js</code> and a file named
          <code class="code">postcss.config.js</code> .
        </p>
      </section>

      <section class="section">
        <v-code-block
          file-name="tailwind.config.js"
          class="mb-2"
          language="js"
          :code="exampleTailwindConfig"
        />
        <v-alert type="info">
          Skeleton provides the design tokens that are used in Vuetiful.
        </v-alert>
      </section>

      <section class="section">
        <v-code-block
          file-name="postcss.config.js"
          language="js"
          :code="`module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`"
        />
      </section>

      <h3 class="h3">Tailwind Directives</h3>
      <section class="section">
        <p class="mb-4">
          Make sure to have the Tailwind directives in your main css file, e.g.
          <code class="code">style.css</code> or
          <code class="code">main.css</code>.
        </p>

        <v-code-block
          file-name="style.css"
          language="css"
          :code="`
@tailwind base;
@tailwind components;
@tailwind utilities;`"
        />
      </section>

      <h3 class="h3">Theme & Dark Mode</h3>
      <section class="section">
        <p>
          This will be added to your main component, e.g.
          <code class="code">App.vue</code>.
        </p>
        <v-tabs class-panels="px-0">
          <template v-slot:tabs>
            <v-tab><h4 class="mb-0">script setup</h4></v-tab>
            <v-tab><h4 class="mb-0">no script setup</h4></v-tab>
          </template>
          <v-tab-panel>
            <v-code-block
              file-name="App.vue - script setup"
              language="ts"
              :code="exampleScriptSetup"
            />
          </v-tab-panel>
          <v-tab-panel>
            <v-code-block
              file-name="App.vue - script"
              language="ts"
              :code="exampleNoScriptSetup"
            />
          </v-tab-panel>
        </v-tabs>
        <v-alert type="info">
          The built-in themes are: vuetiful, rocket, catppuccin, cerberus, pine,
          rose.
        </v-alert>
      </section>
      <section class="section">
        <v-code-block
          file-name="App.vue - template"
          language="html"
          :code="exampleTemplate"
        />
        <v-alert type="info">
          Do set a fixed height for the header and also pass this value to the
          <code class="code">fixed-header-height</code> prop on the
          <code class="code">v-shell</code> component.
        </v-alert>
      </section>
    </v-tab-panel>
    <v-tab-panel>
      <h2 class="h2">Install Tailwind</h2>
      <section class="section">
        <p>
          TailwindCSS is a framework with utility/helper classes for direct
          styling of HTML elements.
        </p>
        <p class="mb-4">
          Vuetiful is created using TailwindCSS, you will need to add it as a
          dependency. However, you are not obligated to use TailwindCSS
          yourself.
        </p>
        <v-code-block
          language="sh"
          code="npm install -D tailwindcss @tailwindcss/forms"
        />
        <v-code-block
          language="sh"
          code="npx nuxi@latest module add tailwindcss"
        />
      </section>

      <section class="section">
        <p>
          This will add <code class="code">@nuxtjs/tailwindcss</code> to the
          modules property in <code class="code">nuxt.config.ts</code>.
          Additionally, add the <code class="code">tailwindcss</code> property.
        </p>

        <v-code-block
          file-name="nuxt.config.ts"
          language="ts"
          :code="nuxtConfig"
        />
      </section>

      <h3 class="h3">Initialize Tailwind</h3>
      <section class="section">
        <v-code-block language="sh" code="npx tailwindcss init" />
        <p>
          This will create a file named
          <code class="code">tailwind.config.js</code>.
        </p>
      </section>

      <section class="section">
        <v-code-block
          file-name="tailwind.config.js"
          class="mb-2"
          language="js"
          :code="exampleTailwindConfig"
        />
        <v-alert type="info">
          Skeleton provides the design tokens that are used in Vuetiful.
        </v-alert>
      </section>

      <h3 class="h3">Theme & Dark Mode</h3>
      <section class="section">
        <p>
          This will be added to your main component
          <code class="code">app.vue</code>.
        </p>
        <v-code-block
          file-name="app.vue - script setup"
          language="ts"
          :code="exampleNuxtSetup"
        />
        <v-alert type="info">
          The built-in themes are: vuetiful, rocket, catppuccin, cerberus, pine,
          rose.
        </v-alert>
        <v-alert type="info">
          If you are using Nuxt with magic imports, you can leave out the
          components from the
          <code class="code">@code-coaching/vuetiful</code> imports. In this
          example that would be <code class="code">Vuetiful</code> and
          <code class="code">VShell</code>.
        </v-alert>
      </section>

      <section class="section">
        <v-code-block
          file-name="app.vue - template"
          language="html"
          :code="exampleNuxtTemplate"
        />
        <v-alert type="info">
          Do set a fixed height for the header and also pass this value to the
          <code class="code">fixed-header-height</code> prop on the
          <code class="code">v-shell</code> component.
        </v-alert>
        <v-alert type="info">
          Do pass the <code class="code">generateId</code> function that calls
          the Nuxt <code class="code">useId</code> function Vuetiful to the
          <code class="code">id-generator</code> prop on the
          <code class="code">Vuetiful</code> component. This will ensure that
          the IDs generated on the server and client are the same.
        </v-alert>
      </section>
    </v-tab-panel>
    <v-tab-panel>
      <v-alert class="mb-2" type="info">
        As a Quasar user, you will probably want to use Vuetiful to add theming
        to your existing application.
      </v-alert>

      <v-alert class="mb-2" type="warning">
        TailwindCSS utility classes clash with some Quasar utility classes. The
        provided override will rewrite the clashing classes to adhere to
        TailwindCSS's implementation.
      </v-alert>

      <v-alert class="mb-4" type="warning">
        The overriden components are limited.
      </v-alert>

      <h2 class="h2">Install Tailwind</h2>
      <section class="section">
        <p>
          TailwindCSS is a framework with utility/helper classes for direct
          styling of HTML elements.
        </p>
        <p class="mb-4">
          Vuetiful is created using TailwindCSS, you will need to add it as a
          dependency. However, you are not obligated to use TailwindCSS
          yourself.
        </p>
        <v-code-block
          language="sh"
          code="npm install -D tailwindcss @tailwindcss/forms"
        />
        <v-alert type="info">
          <p class="mb-2">
            It might be necessary to add the flag
            <code class="code">--legacy-peer-deps</code>.
          </p>

          <v-code-block language="sh" code="npm install --legacy-peer-deps" />
        </v-alert>
      </section>

      <h3 class="h3">Initialize Tailwind</h3>
      <section class="section">
        <v-code-block language="sh" code="npx tailwindcss init" />
        <p>
          This will create a file named
          <code class="code">tailwind.config.js</code>.
        </p>
      </section>

      <section class="section">
        <v-code-block
          file-name="tailwind.config.js"
          class="mb-2"
          language="js"
          :code="exampleTailwindConfig"
        />
        <v-alert type="info">
          Skeleton provides the design tokens that are used in Vuetiful.
        </v-alert>
      </section>

      <section class="section">
        <v-code-block
          file-name="postcss.config.js"
          language="js"
          :code="exampleQuasarPostcss"
        />
      </section>

      <h3 class="h3">Tailwind Directives</h3>
      <section class="section">
        <p class="mb-4">
          Make sure to have the Tailwind directives in your main css file, e.g.
          <code class="code">app.css</code> or
          <code class="code">app.scss</code>.
        </p>

        <v-code-block
          file-name="app.css"
          language="css"
          :code="`
@tailwind base;
@tailwind components;
@tailwind utilities;`"
        />
      </section>

      <h2 class="h2">Dedupe Vue</h2>
      <section class="section">
        <v-code-block
          file-name="quasar.config.js"
          language="js"
          :code="exampleQuasarConig"
        />
      </section>

      <h3 class="h3">Theme & Dark Mode</h3>
      <section class="section">
        <p>
          This will be added to your main component, e.g.
          <code class="code">App.vue</code>.
        </p>

        <v-code-block
          file-name="App.vue - script setup"
          language="ts"
          :code="exampleQuasarScriptSetup"
        />

        <v-alert type="info">
          The built-in themes are: vuetiful, rocket, catppuccin, cerberus, pine,
          rose.
        </v-alert>
      </section>
    </v-tab-panel>
  </v-tabs>

  <h2 class="h2">Suggestions</h2>
  <h3 class="h3">Prettier</h3>

  <section class="section">
    <p>Prettier is a code formatter that will help you keep your code clean.</p>
    <p>
      Adding <code class="code">prettier-plugin-tailwindcss</code> will make it
      such that Tailwind classes are automatically sorted.
    </p>
    <v-code-block
      language="sh"
      code="npm install -D prettier prettier-plugin-tailwindcss"
    />
  </section>

  <section class="section">
    <v-code-block
      file-name=".prettierrc"
      language="sh"
      :code="`{
  &quot;plugins&quot;: [&quot;prettier-plugin-tailwindcss&quot;]
}
`"
    />
  </section>

  <h3 class="h3">VSCode Extension</h3>
  <section class="section">
    <a
      class="anchor"
      href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
    >
      Tailwind CSS IntelliSense
    </a>

    <p>
      This will provide autocompletion for TailwindCSS classes. It will also
      autocomplete custom classes provided by Vuetiful.
    </p>
  </section>

  <h3 class="h3">VSCode Settings</h3>
  <section class="section">
    <p>
      Open the settings <kbd class="kbd">⌘</kbd> +
      <kbd class="kbd">Shift</kbd> + <kbd class="kbd">P</kbd> or
      <kbd class="kbd">Ctrl</kbd> + <kbd class="kbd">Shift</kbd> +
      <kbd class="kbd">P</kbd> and type
      <code class="code">Preferences: Open User Settings (JSON)</code>.
    </p>

    <v-code-block file-name="settings.json" :code="settings" />
    <p>
      This will provide tailwind autocomplete in all props and variables
      starting with <code class="code">class</code>.
    </p>
  </section>
</template>
