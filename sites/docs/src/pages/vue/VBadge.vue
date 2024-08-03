<script setup lang="ts">
import { VAlert, VBadge, VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';

const custom = `<div class="flex flex-wrap gap-2">
  <v-badge class="px-8 py-2" class="preset-tonal-tertiary">custom</v-badge>
  <v-badge class="px-8 py-2" background="custom-background" text="text-black font-extrabold">custom</v-badge>
</div>`;
const customCss = `.custom-background {
  background: #42b883;
  background: linear-gradient(90deg, #35495e 0%, #42b883 50%, #35495e 100%);
}`;

const filled = `<div class="flex flex-wrap gap-2">
  <v-badge class="preset-filled">Default</v-badge>
  <v-badge class="preset-filled-surface-800-200">Surface</v-badge>
  <v-badge class="preset-filled-primary-800-200">Primary</v-badge>
  <v-badge class="preset-filled-secondary-800-200">Secondary</v-badge>
  <v-badge class="preset-filled-tertiary-800-200">Tertiary</v-badge>
  <v-badge class="preset-filled-success-800-200">Success</v-badge>
  <v-badge class="preset-filled-warning-800-200">Warning</v-badge>
  <v-badge class="preset-filled-error-800-200">Error</v-badge>
</div>`;

const tonal = `<div class="flex flex-wrap gap-2">
  <v-badge class="preset-tonal">Default</v-badge>
  <v-badge class="preset-tonal-surface">Surface</v-badge>
  <v-badge class="preset-tonal-primary">Primary</v-badge>
  <v-badge class="preset-tonal-secondary">Secondary</v-badge>
  <v-badge class="preset-tonal-tertiary">Tertiary</v-badge>
  <v-badge class="preset-tonal-success">Success</v-badge>
  <v-badge class="preset-tonal-warning">Warning</v-badge>
  <v-badge class="preset-tonal-error">Error</v-badge>
</div>`;

const outlined = `<div class="flex flex-wrap gap-2">
  <v-badge class="preset-outlined">Default</v-badge>
  <v-badge class="preset-outlined-surface-800-200">Surface</v-badge>
  <v-badge class="preset-outlined-primary-800-200">Primary</v-badge>
  <v-badge class="preset-outlined-secondary-800-200">Secondary</v-badge>
  <v-badge class="preset-outlined-tertiary-800-200">Tertiary</v-badge>
  <v-badge class="preset-outlined-success-800-200">Success</v-badge>
  <v-badge class="preset-outlined-warning-800-200">Warning</v-badge>
  <v-badge class="preset-outlined-error-800-200">Error</v-badge>
</div>`;
</script>

<template>
  <h1 class="h1">VBadge</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VBadge } from '@code-coaching/vuetiful';`" />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template v-slot:tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">Props</h2>
      <h3 class="h3">Default</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-badge class="preset-filled">default</v-badge>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="`<v-badge>default</v-badge>`" />
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Custom</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-badge class="preset-tonal-tertiary">custom</v-badge>
              <v-badge class="px-8 py-2 font-extrabold text-black custom-background"> custom </v-badge>
              <v-badge class="h-4 rounded-none w-fit preset-filled">custom</v-badge>
            </div>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-2">
              <v-code-block language="html" :code="custom" />
              <v-code-block language="css" :code="customCss" />
              <v-alert type="info">
                Either provide <code class="code">preset</code> or <code class="code">background</code> and
                <code class="code">text</code>.
              </v-alert>
            </div>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Presets</h2>
      <h3 class="h3">Filled</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-badge class="preset-filled">Default</v-badge>
              <v-badge class="preset-filled-surface-800-200">Surface</v-badge>
              <v-badge class="preset-filled-primary-800-200">Primary</v-badge>
              <v-badge class="preset-filled-secondary-800-200">Secondary</v-badge>
              <v-badge class="preset-filled-tertiary-800-200">Tertiary</v-badge>
              <v-badge class="preset-filled-success-800-200">Success</v-badge>
              <v-badge class="preset-filled-warning-800-200">Warning</v-badge>
              <v-badge class="preset-filled-error-800-200">Error</v-badge>
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
              <v-badge class="text-surface-950-50 preset-tonal">Default</v-badge>
              <v-badge class="preset-tonal-surface">Surface</v-badge>
              <v-badge class="preset-tonal-primary">Primary</v-badge>
              <v-badge class="preset-tonal-secondary">Secondary</v-badge>
              <v-badge class="preset-tonal-tertiary">Tertiary</v-badge>
              <v-badge class="preset-tonal-success">Success</v-badge>
              <v-badge class="preset-tonal-warning">Warning</v-badge>
              <v-badge class="preset-tonal-error">Error</v-badge>
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
              <v-badge class="preset-outlined">Default</v-badge>
              <v-badge class="preset-outlined-surface-800-200">Surface</v-badge>
              <v-badge class="preset-outlined-primary-800-200">Primary</v-badge>
              <v-badge class="preset-outlined-secondary-800-200">Secondary</v-badge>
              <v-badge class="preset-outlined-tertiary-800-200">Tertiary</v-badge>
              <v-badge class="preset-outlined-success-800-200">Success</v-badge>
              <v-badge class="preset-outlined-warning-800-200">Warning</v-badge>
              <v-badge class="preset-outlined-error-800-200">Error</v-badge>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="outlined" />
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>

<style scoped>
.custom-background {
  background: #42b883;
  background: linear-gradient(90deg, #35495e 0%, #42b883 50%, #35495e 100%);
}
</style>
