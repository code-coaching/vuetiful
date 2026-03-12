<script setup lang="ts">
import {
  VAlert,
  VCodeBlock,
  VTab,
  VTabPanel,
  VTabs,
} from "@code-coaching/vuetiful";

const exampleViteConfig = `import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue(), tailwindcss()],
});`;

const exampleMainCss = `@custom-variant dark (&:where(.dark, .dark *));

@import "tailwindcss";
@import "@skeletonlabs/skeleton";
@import "@code-coaching/vuetiful/vuetiful.css";

/* Import the themes you want to use */
@import "@code-coaching/vuetiful/themes/vuetiful";
@import "@skeletonlabs/skeleton/themes/cerberus";
@import "@skeletonlabs/skeleton/themes/catppuccin";
@import "@skeletonlabs/skeleton/themes/pine";
@import "@skeletonlabs/skeleton/themes/rose";
@import "@skeletonlabs/skeleton/themes/rocket";`;

const exampleScriptSetup = `import {
  useDarkMode,
  useTheme,
  VShell,
  Vuetiful,
} from "@code-coaching/vuetiful";
import { onMounted } from "vue";

const { autoModeWatcher } = useDarkMode();
const { applyTheme, getThemeFromCookie, registerTheme } = useTheme();

// Register any Skeleton themes you imported in your CSS
registerTheme({ name: 'cerberus' });
registerTheme({ name: 'catppuccin' });
registerTheme({ name: 'pine' });
registerTheme({ name: 'rose' });
registerTheme({ name: 'rocket' });
// vuetiful is registered by default

onMounted(() => {
  const theme = getThemeFromCookie(document.cookie);
  applyTheme(theme); // sets data-theme on the <html> tag and handles the theme cookie
  autoModeWatcher(); // automatically use the dark preference of the OS and handles the dark mode cookie
});`;

const exampleNoScriptSetup = `import { useDarkMode, useTheme } from "@code-coaching/vuetiful";
import { onMounted } from "vue";

export default defineComponent({
  setup() {
    const { autoModeWatcher } = useDarkMode();
    const { applyTheme, getThemeFromCookie, registerTheme } = useTheme();

    // Register any Skeleton themes you imported in your CSS
    registerTheme({ name: 'cerberus' });
    registerTheme({ name: 'catppuccin' });
    registerTheme({ name: 'pine' });
    registerTheme({ name: 'rose' });
    registerTheme({ name: 'rocket' });
    // vuetiful is registered by default

    onMounted(() => {
      const theme = getThemeFromCookie(document.cookie);
      applyTheme(theme); // sets data-theme on the <html> tag and handles the theme cookie
      autoModeWatcher(); // automatically use the dark preference of the OS and handles the dark mode cookie
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

const nuxtConfig = `import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
})`;

const nuxtConfigAsAny = `import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: [tailwindcss() as any],
  },
})`;

const nuxtTailwindModule = `import { addVitePlugin, defineNuxtModule } from "@nuxt/kit";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtModule({
  setup() {
    addVitePlugin(() => tailwindcss());
  },
});`;

const nuxtConfigWithModule = `// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["./modules/tailwind"],
})`;

const exampleNuxtMainCss = `@custom-variant dark (&:where(.dark, .dark *));

@import "tailwindcss";
@import "@skeletonlabs/skeleton";
@import "@code-coaching/vuetiful/vuetiful.css";

/* Import the themes you want to use */
@import "@code-coaching/vuetiful/themes/vuetiful";
@import "@skeletonlabs/skeleton/themes/cerberus";
@import "@skeletonlabs/skeleton/themes/catppuccin";
@import "@skeletonlabs/skeleton/themes/pine";
@import "@skeletonlabs/skeleton/themes/rose";
@import "@skeletonlabs/skeleton/themes/rocket";`;

const exampleNuxtSetup = `import {
  useDarkMode,
  useTheme,
  VShell,
  Vuetiful,
} from "@code-coaching/vuetiful";

const { applyTheme, getThemeFromCookie, registerTheme } = useTheme();
const { autoModeWatcher } = useDarkMode();

// Register any Skeleton themes you imported in your CSS
registerTheme({ name: 'cerberus' });
registerTheme({ name: 'catppuccin' });
registerTheme({ name: 'pine' });
registerTheme({ name: 'rose' });
registerTheme({ name: 'rocket' });
// vuetiful is registered by default

onNuxtReady(() => {
  const theme = getThemeFromCookie(document.cookie);
  applyTheme(theme); // sets data-theme on the <html> tag and handles the theme cookie
  autoModeWatcher(); // automatically use the dark preference of the OS and handles the dark mode cookie
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

const exampleQuasarConfig = `import tailwindcssVite from '@tailwindcss/vite';
import { defineConfig } from '#q-app/wrappers';

export default defineConfig((/* ctx */) => {
  return {
    // more code here

    build: {
      // more code here

      extendViteConf(viteConf) {
        viteConf.resolve = {
          ...viteConf.resolve,
          dedupe: ['vue'],
        };
        viteConf.plugins = [...(viteConf.plugins ?? []), ...tailwindcssVite()];
      },

      // more code here
    },

    // more code here
  };
});`;

const exampleQuasarCss = `/* app global css */
@custom-variant dark (&:where(.dark, .dark *));

@import "tailwindcss";
@import "@skeletonlabs/skeleton";
@import "@code-coaching/vuetiful/vuetiful.css";

/* Import the themes you want to use */
@import "@code-coaching/vuetiful/themes/vuetiful";
@import "@skeletonlabs/skeleton/themes/cerberus";
@import "@skeletonlabs/skeleton/themes/catppuccin";
@import "@skeletonlabs/skeleton/themes/pine";
@import "@skeletonlabs/skeleton/themes/rose";
@import "@skeletonlabs/skeleton/themes/rocket";`;

const exampleQuasarScriptSetup = `import { useDarkMode, useTheme } from '@code-coaching/vuetiful';
import { useQuasar } from 'quasar';
import { onMounted, watch } from 'vue';

import "@code-coaching/vuetiful/css/overrides/quasar.css"; // This provides overrides for Quasar components

const { autoModeWatcher, chosenMode, MODE } = useDarkMode();
const { applyTheme, getThemeFromCookie, registerTheme } = useTheme();
const $q = useQuasar();

// Register any Skeleton themes you imported in your CSS
registerTheme({ name: 'cerberus' });
registerTheme({ name: 'catppuccin' });
registerTheme({ name: 'pine' });
registerTheme({ name: 'rose' });
registerTheme({ name: 'rocket' });
// vuetiful is registered by default

onMounted(() => {
  const theme = getThemeFromCookie(document.cookie);
  applyTheme(theme); // sets data-theme on the <html> tag and handles the theme cookie
  autoModeWatcher(); // automatically use the dark preference of the OS and handles the dark mode cookie
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
      code="npm install @skeletonlabs/skeleton @code-coaching/vuetiful"
    />
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
          code="npm install -D tailwindcss @tailwindcss/vite"
        />
      </section>

      <h3 class="h3">Configure Vite</h3>
      <section class="section">
        <p>
          Add the <code class="code">@tailwindcss/vite</code> plugin to your
          Vite configuration.
        </p>
        <v-code-block
          file-name="vite.config.ts"
          language="ts"
          :code="exampleViteConfig"
        />
      </section>

      <h3 class="h3">CSS Imports</h3>
      <section class="section">
        <p class="mb-4">
          Add the following imports to your main CSS file, e.g.
          <code class="code">style.css</code> or
          <code class="code">main.css</code>.
        </p>

        <v-code-block
          file-name="style.css"
          language="css"
          :code="exampleMainCss"
        />
        <v-alert type="info">
          Only import the themes you want to use. Skeleton provides
          <code class="code">cerberus</code>,
          <code class="code">catppuccin</code>, <code class="code">pine</code>,
          <code class="code">rose</code>, and
          <code class="code">rocket</code> among others. The
          <code class="code">vuetiful</code> theme is provided by Vuetiful
          itself.
        </v-alert>
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
          Call <code class="code">registerTheme({ name: '...' })</code> for each
          Skeleton theme you imported in your CSS. This makes them available in
          <code class="code">VThemeSwitch</code> and allows the theme cookie to
          restore them. The <code class="code">vuetiful</code> theme is
          registered by default.
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
          code="npm install -D tailwindcss @tailwindcss/vite"
        />
      </section>

      <h3 class="h3">Configure Nuxt</h3>
      <section class="section">
        <p>
          Add the <code class="code">@tailwindcss/vite</code> plugin and
          reference your CSS file in <code class="code">nuxt.config.ts</code>.
        </p>

        <v-code-block
          file-name="nuxt.config.ts"
          language="ts"
          :code="nuxtConfig"
        />
        <v-alert type="warning">
          <p class="mb-2">
            Due to a type mismatch between
            <code class="code">@nuxt/vite-builder</code>'s bundled types and the
            standalone vite types used by
            <code class="code">@tailwindcss/vite</code>, you may see a
            TypeScript error on the <code class="code">plugins</code> line.
            There are two ways to resolve this.
          </p>
          <v-tabs class-panels="px-0">
            <template v-slot:tabs>
              <v-tab><h4 class="mb-0">Quick fix</h4></v-tab>
              <v-tab><h4 class="mb-0">Clean solution</h4></v-tab>
            </template>
            <v-tab-panel>
              <p class="mb-2">
                Cast the plugin to <code class="code">any</code> to suppress the
                TypeScript error. This is the simplest fix but loses type safety
                for the plugin.
              </p>
              <v-code-block
                file-name="nuxt.config.ts"
                language="ts"
                :code="nuxtConfigAsAny"
              />
            </v-tab-panel>
            <v-tab-panel>
              <p class="mb-2">
                Register Tailwind through Nuxt's module system using
                <code class="code">addVitePlugin</code>, which uses the same
                standalone vite types as
                <code class="code">@tailwindcss/vite</code>
                and avoids the conflict entirely.
              </p>
              <div class="flex flex-col gap-2">
                <v-code-block
                  file-name="modules/tailwind.ts"
                  language="ts"
                  :code="nuxtTailwindModule"
                />
                <v-code-block
                  file-name="nuxt.config.ts"
                  language="ts"
                  :code="nuxtConfigWithModule"
                />
              </div>
            </v-tab-panel>
          </v-tabs>
        </v-alert>
      </section>

      <h3 class="h3">CSS Imports</h3>
      <section class="section">
        <p class="mb-4">
          Create <code class="code">assets/css/main.css</code> with the
          following imports.
        </p>
        <v-code-block
          file-name="assets/css/main.css"
          language="css"
          :code="exampleNuxtMainCss"
        />
        <v-alert type="info">
          Only import the themes you want to use. The
          <code class="code">vuetiful</code> theme is provided by Vuetiful.
          Skeleton themes use the path
          <code class="code">@skeletonlabs/skeleton/themes/[name]</code> (no
          <code class="code">.css</code> extension needed).
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
          Call <code class="code">registerTheme({ name: '...' })</code> for each
          Skeleton theme you imported in your CSS. This makes them available in
          <code class="code">VThemeSwitch</code> and allows the theme cookie to
          restore them. The <code class="code">vuetiful</code> theme is
          registered by default.
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
        The overridden components are limited.
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
          code="npm install -D tailwindcss @tailwindcss/vite"
        />
      </section>

      <h3 class="h3">Configure Quasar</h3>
      <section class="section">
        <p class="mb-4">
          Add the <code class="code">@tailwindcss/vite</code> plugin via
          <code class="code">extendViteConf</code> and dedupe Vue in
          <code class="code">quasar.config.ts</code>.
        </p>
        <v-code-block
          file-name="quasar.config.ts"
          language="ts"
          :code="exampleQuasarConfig"
        />
      </section>

      <h3 class="h3">CSS Imports</h3>
      <section class="section">
        <p class="mb-4">
          Add the following imports to your main CSS file, e.g.
          <code class="code">src/css/app.css</code>.
        </p>
        <v-code-block
          file-name="src/css/app.css"
          language="css"
          :code="exampleQuasarCss"
        />
        <v-alert type="info">
          Only import the themes you want to use. Skeleton provides
          <code class="code">cerberus</code>,
          <code class="code">catppuccin</code>, <code class="code">pine</code>,
          <code class="code">rose</code>, and
          <code class="code">rocket</code> among others. The
          <code class="code">vuetiful</code> theme is provided by Vuetiful
          itself.
        </v-alert>
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
          Call <code class="code">registerTheme({ name: '...' })</code> for each
          Skeleton theme you imported in your CSS. This makes them available in
          <code class="code">VThemeSwitch</code> and allows the theme cookie to
          restore them. The <code class="code">vuetiful</code> theme is
          registered by default.
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
