<script setup lang="ts">
import { VBadge, VButton, VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';

const labelExample = '<v-button aria-label="menu">John Duck</v-button>';
const sizeSexample = `<div class="flex flex-wrap items-start gap-2">
  <v-button size="xs">xs</v-button>
  <v-button size="sm">sm</v-button>
  <v-button size="md">md</v-button>
  <v-button size="lg">lg</v-button>
  <v-button size="xl">xl</v-button>
</div>`;

const filled = `<div class="flex flex-wrap gap-2">
  <v-button class="preset-filled">Default</v-button>
  <v-button class="preset-filled-surface-200-800">Surface</v-button>
  <v-button class="preset-filled-primary-200-800">Primary</v-button>
  <v-button class="preset-filled-secondary-200-800">Secondary</v-button>
  <v-button class="preset-filled-tertiary-200-800">Tertiary</v-button>
  <v-button class="preset-filled-success-200-800">Success</v-button>
  <v-button class="preset-filled-warning-200-800">Warning</v-button>
  <v-button class="preset-filled-error-200-800">Error</v-button>
</div>`;

const tonal = `<div class="flex flex-wrap gap-2">
  <v-button class="preset-tonal">Default</v-button>
  <v-button class="preset-tonal-surface">Surface</v-button>
  <v-button class="preset-tonal-primary">Primary</v-button>
  <v-button class="preset-tonal-secondary">Secondary</v-button>
  <v-button class="preset-tonal-tertiary">Tertiary</v-button>
  <v-button class="preset-tonal-success">Success</v-button>
  <v-button class="preset-tonal-warning">Warning</v-button>
  <v-button class="preset-tonal-error">Error</v-button>
</div>`;

const outlined = `<div class="flex flex-wrap gap-2">
  <v-button class="preset-outlined">Default</v-button>
  <v-button class="preset-outlined-surface-200-800">Surface</v-button>
  <v-button class="preset-outlined-primary-200-800">Primary</v-button>
  <v-button class="preset-outlined-secondary-200-800">Secondary</v-button>
  <v-button class="preset-outlined-tertiary-200-800">Tertiary</v-button>
  <v-button class="preset-outlined-success-200-800">Success</v-button>
  <v-button class="preset-outlined-warning-200-800">Warning</v-button>
  <v-button class="preset-outlined-error-200-800">Error</v-button>
</div>`;
</script>

<template>
  <h1 class="h1">VButton</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VButton } from '@code-coaching/vuetiful';`" />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template #tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">Accessibility</h2>
      <section class="section">
        <h3 class="h3">Keyboard Interaction</h3>
        <section class="section">
          <p><kbd class="kbd">Tab</kbd> and <kbd class="kbd">Shift + Tab</kbd>: Move focus to and from button.</p>
          <p>
            <kbd class="kbd">Space</kbd> and <kbd class="kbd">Enter</kbd>: Execute the action coupled to the button.
          </p>
        </section>

        <h3 class="h3">Label</h3>
        <v-preview>
          <template #preview>
            <v-button aria-label="menu">John Duck</v-button>
          </template>
          <template #source>
            <v-code-block class="mb-2" language="html" :code="labelExample" />
            <p>
              By default the accessibility label is the same as the button text. If you want to change the accessibility
              label, you can use the
              <code class="code">aria-label</code> attribute.
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Sizes</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex flex-wrap items-start gap-2">
              <v-button size="xs">xs</v-button>
              <v-button size="sm">sm</v-button>
              <v-button size="md">md</v-button>
              <v-button size="lg">lg</v-button>
              <v-button size="xl">xl</v-button>
            </div>
          </template>
          <template #source>
            <v-code-block class="mb-2" language="html" :code="sizeSexample" />
            <p><v-badge class="filled">md</v-badge> is the default size.</p>
            <p>
              A custom class can be passed to the <v-badge class="filled">size</v-badge> prop to change the size of the
              button.
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Presets</h2>
      <h3 class="h3">Filled</h3>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex flex-wrap gap-2">
              <v-button class="preset-filled">Default</v-button>
              <v-button class="preset-filled-surface-200-800">Surface</v-button>
              <v-button class="preset-filled-primary-200-800">Primary</v-button>
              <v-button class="preset-filled-secondary-200-800">Secondary</v-button>
              <v-button class="preset-filled-tertiary-200-800">Tertiary</v-button>
              <v-button class="preset-filled-success-200-800">Success</v-button>
              <v-button class="preset-filled-warning-200-800">Warning</v-button>
              <v-button class="preset-filled-error-200-800">Error</v-button>
            </div>
          </template>
          <template #source>
            <v-code-block language="html" :code="filled" />
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Tonal</h3>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex flex-wrap gap-2">
              <v-button class="preset-tonal">Default</v-button>
              <v-button class="preset-tonal-surface">Surface</v-button>
              <v-button class="preset-tonal-primary">Primary</v-button>
              <v-button class="preset-tonal-secondary">Secondary</v-button>
              <v-button class="preset-tonal-tertiary">Tertiary</v-button>
              <v-button class="preset-tonal-success">Success</v-button>
              <v-button class="preset-tonal-warning">Warning</v-button>
              <v-button class="preset-tonal-error">Error</v-button>
            </div>
          </template>
          <template #source>
            <v-code-block language="html" :code="tonal" />
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Outlined</h3>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex flex-wrap gap-2">
              <v-button class="preset-outlined">Default</v-button>
              <v-button class="preset-outlined-surface-200-800">Surface</v-button>
              <v-button class="preset-outlined-primary-200-800">Primary</v-button>
              <v-button class="preset-outlined-secondary-200-800">Secondary</v-button>
              <v-button class="preset-outlined-tertiary-200-800">Tertiary</v-button>
              <v-button class="preset-outlined-success-200-800">Success</v-button>
              <v-button class="preset-outlined-warning-200-800">Warning</v-button>
              <v-button class="preset-outlined-error-200-800">Error</v-button>
            </div>
          </template>
          <template #source>
            <v-code-block language="html" :code="outlined" />
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
