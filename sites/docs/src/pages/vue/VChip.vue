<script setup lang="ts">
import { VChip, VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';

const usage = '<v-chip>default</v-chip>';

const filled = `<v-chip preset="filled">Default</v-chip>
<v-chip preset="filled-surface-500">Surface</v-chip>
<v-chip preset="filled-primary-500">Primary</v-chip>
<v-chip preset="filled-secondary-500">Secondary</v-chip>
<v-chip preset="filled-tertiary-500">Tertiary</v-chip>
<v-chip preset="filled-success-500">Success</v-chip>
<v-chip preset="filled-warning-500">Warning</v-chip>
<v-chip preset="filled-error-500">Error</v-chip>`;

const tonal = `<v-chip preset="tonal">Default</v-chip>
<v-chip preset="tonal-surface">Surface</v-chip>
<v-chip preset="tonal-primary">Primary</v-chip>
<v-chip preset="tonal-secondary">Secondary</v-chip>
<v-chip preset="tonal-tertiary">Tertiary</v-chip>
<v-chip preset="tonal-success">Success</v-chip>
<v-chip preset="tonal-warning">Warning</v-chip>
<v-chip preset="tonal-error">Error</v-chip>`;

const outlined = `<v-chip preset="outlined">Default</v-chip>
<v-chip preset="outlined-surface-500">Surface</v-chip>
<v-chip preset="outlined-primary-500">Primary</v-chip>
<v-chip preset="outlined-secondary-500">Secondary</v-chip>
<v-chip preset="outlined-tertiary-500">Tertiary</v-chip>
<v-chip preset="outlined-success-500">Success</v-chip>
<v-chip preset="outlined-warning-500">Warning</v-chip>
<v-chip preset="outlined-error-500">Error</v-chip>`;

const unstyledTemplate = '<v-chip unstyled>Unstyled</v-chip>';
const unstyledPropTemplate = '<v-chip unstyled preset="">No prop-based styles</v-chip>';
const unstyledCustomTemplate = '<v-chip unstyled preset="" class="p-1 text-white bg-blue-600">Custom</v-chip>';
</script>

<template>
  <h1 class="h1">VChip</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VChip } from '@code-coaching/vuetiful';`" />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template v-slot:tabs>
      <v-tab>Usage</v-tab>
      <v-tab>Unstyled</v-tab>
    </template>
    <v-tab-panel>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-chip>default</v-chip>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="usage" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Presets</h2>
      <h3 class="h3">Filled</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-chip preset="filled">Default</v-chip>
              <v-chip preset="filled-surface-500">Surface</v-chip>
              <v-chip preset="filled-primary-500">Primary</v-chip>
              <v-chip preset="filled-secondary-500">Secondary</v-chip>
              <v-chip preset="filled-tertiary-500">Tertiary</v-chip>
              <v-chip preset="filled-success-500">Success</v-chip>
              <v-chip preset="filled-warning-500">Warning</v-chip>
              <v-chip preset="filled-error-500">Error</v-chip>
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
              <v-chip preset="tonal">Default</v-chip>
              <v-chip preset="tonal-surface">Surface</v-chip>
              <v-chip preset="tonal-primary">Primary</v-chip>
              <v-chip preset="tonal-secondary">Secondary</v-chip>
              <v-chip preset="tonal-tertiary">Tertiary</v-chip>
              <v-chip preset="tonal-success">Success</v-chip>
              <v-chip preset="tonal-warning">Warning</v-chip>
              <v-chip preset="tonal-error">Error</v-chip>
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
              <v-chip preset="outlined">Default</v-chip>
              <v-chip preset="outlined-surface-500">Surface</v-chip>
              <v-chip preset="outlined-primary-500">Primary</v-chip>
              <v-chip preset="outlined-secondary-500">Secondary</v-chip>
              <v-chip preset="outlined-tertiary-500">Tertiary</v-chip>
              <v-chip preset="outlined-success-500">Success</v-chip>
              <v-chip preset="outlined-warning-500">Warning</v-chip>
              <v-chip preset="outlined-error-500">Error</v-chip>
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
            <v-chip unstyled>Unstyled</v-chip>
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
            <v-chip unstyled preset="">No prop-based styles</v-chip>
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
            <v-chip unstyled preset="" class="p-1 text-white bg-blue-600">Custom</v-chip>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="unstyledCustomTemplate" />
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
