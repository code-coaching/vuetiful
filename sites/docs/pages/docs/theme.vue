<script setup lang="ts">
import {
  VAlert,
  VCodeBlock,
  VPreview,
  VTab,
  VTabPanel,
  VTabs,
  VThemeSwitch,
} from "@code-coaching/vuetiful";

const simpleUsage = `import {
  useDarkMode,
  useTheme,
} from "@code-coaching/vuetiful";

import { onMounted } from "vue";

const { autoModeWatcher } = useDarkMode();
const { applyTheme, themes } = useTheme();

onMounted(() => {
  applyTheme(themes.vuetiful);
  autoModeWatcher();
});
`;

const themeSwitchScript = `import { VThemeSwitch } from "@code-coaching/vuetiful";`;
const themeSwitchTemplate = `<v-theme-switch class-button="preset-filled" />`;

const themeCookie = `import {
  useDarkMode,
  useTheme,
} from "@code-coaching/vuetiful";

import { onMounted } from "vue";

const { autoModeWatcher } = useDarkMode();
const { applyTheme, themes, getThemeFromCookie } = useTheme();

onMounted(() => {
  const theme = getThemeFromCookie(document.cookie);
  applyTheme(theme);
  autoModeWatcher();
});
`;

const ssrExample = `import { useDarkMode, useTheme } from "@code-coaching/vuetiful";

const { applyThemeSSR, getThemeFromCookie, themes } = useTheme();
const { applyModeSSR, getModeFromCookie } = useDarkMode();

let html = ''; // This depends on your framework
const cookie = ''; // This depends on your framework
const theme = getThemeFromCookie(cookie) || themes.vuetiful; // Default to vuetiful theme
const mode = getModeFromCookie(cookie);
html = applyThemeSSR(html, theme);
html = applyModeSSR(html, mode);`;

const ssrNuxtExample = `import { useDarkMode, useTheme } from "@code-coaching/vuetiful";

const { applyThemeSSR, getThemeFromCookie, themes } = useTheme();
const { applyModeSSR, getModeFromCookie } = useDarkMode();

export default eventHandler(async (event) => {

  const originalEnd = event.node.res.end;

  event.node.res.end = (chunk, ...args) => {
    let html = chunk instanceof Buffer ? chunk.toString("utf-8") : chunk;

    if (event.node.res.getHeader("content-type")?.includes("text/html")) {
      const cookie = event.node.req.headers.cookie || "";
      const theme = getThemeFromCookie(cookie) || themes.vuetiful;
      const mode = getModeFromCookie(cookie);
      html = applyThemeSSR(html, theme);
      html = applyModeSSR(html, mode);

      event.node.res.setHeader(
        "Content-Length",
        Buffer.byteLength(html).toString(),
      );
      originalEnd.call(event.node.res, html, ...args);
    } else {
      originalEnd.call(event.node.res, chunk, ...args);
    }
  };
});
`

const ssrQuasarExample = `import { useDarkMode, useTheme } from '@code-coaching/vuetiful';
import { RenderError } from '@quasar/app-vite';
import { ssrMiddleware } from 'quasar/wrappers';
const { applyThemeSSR, getThemeFromCookie } = useTheme();
const { applyModeSSR, MODE, getModeFromCookie } = useDarkMode();

// This middleware should execute as last one
// since it captures everything and tries to
// render the page with Vue

export default ssrMiddleware(({ app, resolve, render, serve }) => {
  // we capture any other Express route and hand it
  // over to Vue and Vue Router to render our page
  app.get(resolve.urlPath('*'), (req, res) => {
    res.setHeader('Content-Type', 'text/html');

    render(/* the ssrContext: */ { req, res })
      .then((html) => {
        const mode = getModeFromCookie(req.headers.cookie || '');
        if (mode === MODE.DARK) html = applyModeSSR(html, mode);

        const theme = getThemeFromCookie(req.headers.cookie || '');
        if (theme) {
          html = applyThemeSSR(html, theme);
        }

        // now let's send the rendered html to the client
        res.send(html);
      })
      .catch((err: RenderError) => {
        // oops, we had an error while rendering the page

        // we were told to redirect to another URL
        if (err.url) {
          if (err.code) {
            res.redirect(err.code, err.url);
          } else {
            res.redirect(err.url);
          }
        } else if (err.code === 404) {
          // hmm, Vue Router could not find the requested route

          // Should reach here only if no "catch-all" route
          // is defined in /src/routes
          res.status(404).send('404 | Page Not Found');
        } else if (process.env.DEV) {
          // well, we treat any other code as error;
          // if we're in dev mode, then we can use Quasar CLI
          // to display a nice error page that contains the stack
          // and other useful information

          // serve.error is available on dev only
          serve.error({ err, req, res });
        } else {
          // we're in production, so we should have another method
          // to display something to the client when we encounter an error
          // (for security reasons, it's not ok to display the same wealth
          // of information as we do in development)

          // Render Error Page on production or
          // create a route (/src/routes) for an error page and redirect to it
          res.status(500).send('500 | Internal Server Error');
          // console.error(err.stack)
        }
      });
  });
});
`
</script>

<template>
  <h1 class="h1">Theme</h1>

  <section class="section">
    Assuming you followed the installation guide, you will have a working
    Vuetiful setup, applying a single theme.

    <v-alert type="info">
      Anything a mode is changed or a theme is applied, the mode and theme will
      be stored in a cookie.
    </v-alert>
  </section>

  <h2 class="h2">Simple usage</h2>
  <section class="section">
    <p>Pick one theme, directly apply it.</p>
    <v-code-block language="ts" :code="simpleUsage" />
    <v-alert type="info">
      Depending on your framework, it might be in a different lifecycle hook.
      E.g. in Nuxt, you would use <code class="code">onNuxtReady</code>.
    </v-alert>
  </section>

  <h2 class="h2">Theme Switch</h2>
  <section class="section">
    <p>Add the <code class="code">VThemeSwitch</code> to your application.</p>

    <v-preview>
      <template #preview>
        <div class="h-[400px] w-60">
          <v-theme-switch class-button="preset-filled" />
        </div>
      </template>
      <template #source>
        <v-code-block class="mb-2" language="ts" :code="themeSwitchScript" />
        <v-code-block
          class="mb-2"
          language="html"
          :code="themeSwitchTemplate"
        />
      </template>
    </v-preview>
  </section>

  <h3 class="h3">Load theme from cookie</h3>
  <section class="section">
    <v-code-block language="ts" :code="themeCookie" />
    <v-alert type="info">
      Depending on your framework, it might be in a different lifecycle hook.
      E.g. in Nuxt, you would use <code class="code">onNuxtReady</code>.
    </v-alert>
  </section>

  <h2 class="h2">FOUC - SSR</h2>
  <section class="section">
    <p>FOUC: Flash Of Unstyled Content</p>
    <p>
      When not using Server Side Rendering, the page will initially load and
      then Vuetiful will load the theme and apply it. This causes a
      <code class="code">Flash Of Unstyled Content</code>.
    </p>
    <p>
      The solution to this is to use SSR (Nuxt, Quasar SSR, ...) and apply the
      theming on the rendered HTML.
    </p>
  </section>
  <section class="section">
    <v-code-block language="js" :code="ssrExample" />
    <v-tabs class="mt-8" class-panels="py-4 md:py-10">
      <template #tabs>
        <v-tab>Nuxt</v-tab>
        <v-tab>Quasar SSR</v-tab>
      </template>
      <v-tab-panel>
        <section class="section">
          <v-code-block language="js" file-name="server/middleware/vuetiful-theme.js" :code="ssrNuxtExample" /> 
          <v-alert type="info">
            Do place this file in the <code class="code">server/middleware</code> folder.
            Nuxt will automatically load this middleware. The file name does not matter.
          </v-alert>
        </section>
      </v-tab-panel>
      <v-tab-panel>
        <section class="section">
          <v-code-block language="js" file-name="src-ssr/middlewares/render.ts" :code="ssrQuasarExample" /> 
        </section>
      </v-tab-panel>
    </v-tabs>
  </section>
</template>
