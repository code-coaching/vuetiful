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
      <pre>npm install -D tailwindcss</pre>
    </div>

    <h2>Initialize Tailwind</h2>
    <div>
      <pre>npx tailwindcss init</pre>
    </div>

    <h2>tailwind.config.js</h2>
    <pre>
/** @type {import('tailwindcss').Config} */
module.exports = {
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
  plugins: [],
}</pre
    >

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
      <h3>Vue3 - main.ts</h3>
      <pre>
import { createApp } from "vue";

import "@code-coaching/vuetiful/styles/all.css";

<!-- Import any of the pre-made themes. -->
<!-- Make sure to only have one theme active at a time. -->
import "@code-coaching/vuetiful/themes/theme-vuetiful.css";
<!-- import "@code-coaching/vuetiful/themes/theme-modern.css";
import "@code-coaching/vuetiful/themes/theme-rocket.css";
import "@code-coaching/vuetiful/themes/theme-seafoam.css";
import "@code-coaching/vuetiful/themes/theme-seasonal.css";
import "@code-coaching/vuetiful/themes/theme-vintage.css"; -->

import "./style.css";

import App from "./App.vue";

createApp(App).mount("#app");
</pre>

      Note: `@code-coaching/vuetiful/styles/all.css` must be imported before any
      other css.
      <p>
        You can test out the different themes by switching between them using
        the Theme Switcher on this page.
      </p>

      <h3>App.vue - script setup</h3>
      Add the following code to your App.vue file.

      <pre
        >{{ exampleScriptSetup }}
</pre
      >

      <h3>App.vue - Composition API</h3>
      <pre
        >{{ exampleComposition }}
</pre
      >

      <h3>Index.html</h3>
      <pre>{{ exampleBody }}</pre>
    </details>

    <h2>Quasar</h2>
    <details>
      <summary>Click here for the Quasar instructions</summary>
      <h3>Vue3 - main.ts</h3>
      <pre>
import { createApp } from "vue";

import "@code-coaching/vuetiful/styles/all.css";
import "./style.css";

import App from "./App.vue";

createApp(App).mount("#app");
</pre
      >
      Note: `@code-coaching/vuetiful/styles/all.css` must be imported before any
      other css.
    </details>

    <h2>Dark mode</h2>
    <p>
      Dark mode is managed through a class named `dark`, placed on the `html`
      element.
    </p>
    <pre>{{ exampleDarkMode }}</pre>
    Note: To use Light mode, just remove the `dark` class from the `html`
    element.
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const exampleScriptSetup = `import { useDarkMode, useTheme } from "@code-coaching/vuetiful";
import "@code-coaching/vuetiful/styles/all.css";

import { onMounted } from "vue";

const { initializeMode } = useDarkMode();
const { initializeTheme } = useTheme();

onMounted(() => {
  initializeMode();
  initializeTheme();
});`;

    const exampleComposition = `import { useDarkMode, useTheme } from "@code-coaching/vuetiful";
import "@code-coaching/vuetiful/styles/all.css";
// import '../styles/tailwind.css'

import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    const { initializeMode } = useDarkMode();
    const { initializeTheme } = useTheme();

    onMounted(() => {
      initializeMode();
      initializeTheme();
    });
  },
});`;

    const exampleBody = `<!-- Add the data-theme attribute with the chosen theme name -->
<body data-theme="vuetiful">
  <div id="app"></div>
</body>`;

    const exampleDarkMode = `<!DOCTYPE html>
<html class="dark" lang="en">
  <head>
    <title>Vuetiful</title>
  </head>
  <body data-theme="vuetiful">
    <div id="app"></div>
  </body>
</html>`;

    return {
      exampleScriptSetup,
      exampleComposition,
      exampleBody,
      exampleDarkMode,
    };
  },
});
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
