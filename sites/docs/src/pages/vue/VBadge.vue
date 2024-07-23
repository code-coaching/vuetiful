<script setup lang="ts">
import { VBadge, VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';
import { AlertUnstyled } from 'src/components';

const filled = `<v-badge preset="filled">Default</v-badge>
<v-badge preset="filled-surface-500">Surface</v-badge>
<v-badge preset="filled-primary-500">Primary</v-badge>
<v-badge preset="filled-secondary-500">Secondary</v-badge>
<v-badge preset="filled-tertiary-500">Tertiary</v-badge>
<v-badge preset="filled-success-500">Success</v-badge>
<v-badge preset="filled-warning-500">Warning</v-badge>
<v-badge preset="filled-error-500">Error</v-badge>`;

const tonal = `<v-badge preset="tonal">Default</v-badge>
<v-badge preset="tonal-surface">Surface</v-badge>
<v-badge preset="tonal-primary">Primary</v-badge>
<v-badge preset="tonal-secondary">Secondary</v-badge>
<v-badge preset="tonal-tertiary">Tertiary</v-badge>
<v-badge preset="tonal-success">Success</v-badge>
<v-badge preset="tonal-warning">Warning</v-badge>
<v-badge preset="tonal-error">Error</v-badge>`;

const outlined = `<v-badge preset="outlined">Default</v-badge>
<v-badge preset="outlined-surface-500">Surface</v-badge>
<v-badge preset="outlined-primary-500">Primary</v-badge>
<v-badge preset="outlined-secondary-500">Secondary</v-badge>
<v-badge preset="outlined-tertiary-500">Tertiary</v-badge>
<v-badge preset="outlined-success-500">Success</v-badge>
<v-badge preset="outlined-warning-500">Warning</v-badge>
<v-badge preset="outlined-error-500">Error</v-badge>`;

const unstyledTemplate = '<v-badge unstyled>Unstyled</v-badge>';
const unstyledPropTemplate = '<v-badge unstyled preset="">No prop-based styles</v-badge>';
const unstyledCustomTemplate = '<v-badge unstyled preset="" class="p-1 text-white bg-blue-600">Custom</v-badge>';
</script>

<template>
  <h1 class="h1">VBadge</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VBadge } from '@code-coaching/vuetiful';`" />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template v-slot:tabs>
      <v-tab>Usage</v-tab>
      <v-tab>Unstyled</v-tab>
    </template>
    <v-tab-panel>
      <section class="section">
        <v-preview>
          <template v-slot:preview> <v-badge preset="filled">default</v-badge> </template>"
          <template v-slot:source>
            <v-code-block language="html" :code="`<v-badge class=&quot;preset-filled&quot;>default</v-badge>`" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Presets</h2>
      <h3 class="h3">Filled</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-badge preset="filled">Default</v-badge>
              <v-badge preset="filled-surface-500">Surface</v-badge>
              <v-badge preset="filled-primary-500">Primary</v-badge>
              <v-badge preset="filled-secondary-500">Secondary</v-badge>
              <v-badge preset="filled-tertiary-500">Tertiary</v-badge>
              <v-badge preset="filled-success-500">Success</v-badge>
              <v-badge preset="filled-warning-500">Warning</v-badge>
              <v-badge preset="filled-error-500">Error</v-badge>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="filled" />
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Tonal</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-badge preset="tonal">Default</v-badge>
              <v-badge preset="tonal-surface">Surface</v-badge>
              <v-badge preset="tonal-primary">Primary</v-badge>
              <v-badge preset="tonal-secondary">Secondary</v-badge>
              <v-badge preset="tonal-tertiary">Tertiary</v-badge>
              <v-badge preset="tonal-success">Success</v-badge>
              <v-badge preset="tonal-warning">Warning</v-badge>
              <v-badge preset="tonal-error">Error</v-badge>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="tonal" />
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Outlined</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-badge preset="outlined">Default</v-badge>
              <v-badge preset="outlined-surface-500">Surface</v-badge>
              <v-badge preset="outlined-primary-500">Primary</v-badge>
              <v-badge preset="outlined-secondary-500">Secondary</v-badge>
              <v-badge preset="outlined-tertiary-500">Tertiary</v-badge>
              <v-badge preset="outlined-success-500">Success</v-badge>
              <v-badge preset="outlined-warning-500">Warning</v-badge>
              <v-badge preset="outlined-error-500">Error</v-badge>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="outlined" />
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
    <v-tab-panel>
      <section class="section">
        <alert-unstyled />
      </section>

      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-badge unstyled>Unstyled</v-badge>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="unstyledTemplate" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">No prop-based styles</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-badge unstyled preset="">No prop-based styles</v-badge>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="unstyledPropTemplate" />
            <p>Set <code>preset</code> to an empty string to have no prop-based styles.</p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Custom style example</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-badge unstyled preset="" class="p-1 text-white bg-blue-600">Custom</v-badge>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="unstyledCustomTemplate" />
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
