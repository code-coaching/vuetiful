<script setup lang="ts">
import { VAlert, VButton, VCodeBlock } from '@code-coaching/vuetiful';

const fileStructure = `font-awesome/
  css/
    brands.min.css
    fontawesome.min.css
    solid.min.css
  webfonts/
    fa-brands-400.ttf
    fa-brands-400.woff2
    fa-solid-900.ttf
    fa-solid-900.woff2
`;

const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... -->
    <link rel="stylesheet" href="font-awesome/css/fontawesome.min.css" />
    <link rel="stylesheet" href="font-awesome/css/brands.min.css" />
    <link rel="stylesheet" href="font-awesome/css/solid.min.css" />
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
`;

const faIcons = `<i class="fa-solid fa-code"></i>
<i class="fa-solid fa-spinner fa-spin"></i>
<i class="fa-solid fa-ghost fa-fade"></i>
<i class="fa-solid fa-ghost fa-beat-fade"></i>`;

const faIconsSizes = `<p><i class="fa-solid fa-code fa-2xs"></i></p>
<p><i class="fa-solid fa-code fa-xs"></i></p>
<p><i class="fa-solid fa-code fa-sm"></i></p>
<p><i class="fa-solid fa-code"></i></p>
<p><i class="fa-solid fa-code fa-lg"></i></p>
<p><i class="fa-solid fa-code fa-xl"></i></p>
<p><i class="fa-solid fa-code fa-2xl"></i></p>`;

const vbuttonIcon = `<v-button icon class="variant-filled">
  <i class="fa-solid fa-code"></i>
</v-button>

<v-button>
  <i class="fa-solid fa-code"></i>
</v-button>

<v-button>
  <i class="fa-solid fa-code"></i>
  <div>Code</div>
</v-button>

<v-button>
  <div>Code</div>
  <i class="fa-solid fa-code"></i>
</v-button>
`;

const quasarQIcon = `<v-button icon class="variant-filled">
  <q-icon name="code"></q-icon>
</v-button>

<v-button>
  <q-icon name="code"></q-icon>
</v-button>

<v-button>
  <q-icon name="code"></q-icon>
  <div>Code</div>
</v-button>

<v-button>
  <div>Code</div>
  <q-icon name="code"></q-icon>
</v-button>
`;
</script>
<template>
  <h1>Icons</h1>
  <header class="header">
    <section class="section">
      <p>You can use any icon library you want. This website uses Font Awesome.</p>
    </section>
    <hr />
  </header>

  <h2>Font Awesome</h2>
  <section class="section">
    <section class="section">
      <p class="mb-4">
        Download the <code>Free For Web</code> version of Font Awesome from
        <a href="https://fontawesome.com/download">Font Awesome</a>. Add the following file structure to a public
        folder. The <code>css</code>, <code>ttf</code> and <code>woff2</code> files are copied over from the download.
      </p>
      <v-code-block language="bash" :code="fileStructure" />
    </section>

    <section>
      <p class="mb-4">Add the css files to the <code>head</code> of your <code>index.html</code> file.</p>
      <v-code-block class="mb-2" language="html" :code="indexHtml" />
      <v-alert type="info">Make sure to point towards the correct paths.</v-alert>
    </section>
  </section>

  <h2>Usage</h2>
  <h3>Examples</h3>
  <section class="section">
    <p class="mb-4">
      Any free solid <a href="https://fontawesome.com/search?o=r&m=free&s=solid">Font Awesome Icon</a> can be used
    </p>
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-4">
          <i class="fa-solid fa-code"></i>
          <i class="fa-solid fa-spinner fa-spin"></i>
          <i class="fa-solid fa-ghost fa-fade"></i>
          <i class="fa-solid fa-ghost fa-beat-fade"></i>
        </div>
        <v-code-block language="html" :code="faIcons" />
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-4">
          <p><i class="fa-solid fa-code fa-2xs"></i></p>
          <p><i class="fa-solid fa-code fa-xs"></i></p>
          <p><i class="fa-solid fa-code fa-sm"></i></p>
          <p><i class="fa-solid fa-code"></i></p>
          <p><i class="fa-solid fa-code fa-lg"></i></p>
          <p><i class="fa-solid fa-code fa-xl"></i></p>
          <p><i class="fa-solid fa-code fa-2xl"></i></p>
        </div>
        <v-code-block language="html" :code="faIconsSizes" />
      </div>
    </div>
  </section>

  <h3>VButton</h3>
  <h4>Font Awesome</h4>
  <section class="section">
    <div class="flex flex-col gap-4">
      <div class="flex flex-wrap gap-4">
        <v-button icon class="variant-filled">
          <i class="fa-solid fa-code"></i>
        </v-button>
        <v-button>
          <i class="fa-solid fa-code"></i>
        </v-button>
        <v-button>
          <i class="fa-solid fa-code"></i>
          <div>Code</div>
        </v-button>
        <v-button>
          <div>Code</div>
          <i class="fa-solid fa-code"></i>
        </v-button>
      </div>
      <v-code-block language="html" :code="vbuttonIcon" />
    </div>
  </section>

  <h4>Quasar - QIcon</h4>
  <section class="section">
    <div class="flex flex-col gap-4">
      <div class="flex flex-wrap gap-4">
        <v-button icon class="variant-filled">
          <q-icon name="code"></q-icon>
        </v-button>
        <v-button>
          <q-icon name="code"></q-icon>
        </v-button>
        <v-button>
          <q-icon name="code"></q-icon>
          <div>Code</div>
        </v-button>
        <v-button>
          <div>Code</div>
          <q-icon name="code"></q-icon>
        </v-button>
      </div>
      <v-code-block language="html" :code="quasarQIcon" />
    </div>
  </section>
</template>
