<script setup lang="ts">
import {
  VChip,
  VCodeBlock,
  VPreview,
  VTab,
  VTabPanel,
  VTabs,
} from "@code-coaching/vuetiful";

const usage = "<v-chip>default</v-chip>";

const filled = `<div class="flex flex-wrap gap-2">
  <v-chip class="preset-filled">Default</v-chip>
  <v-chip class="preset-filled-surface-200-800">Surface</v-chip>
  <v-chip class="preset-filled-primary-200-800">Primary</v-chip>
  <v-chip class="preset-filled-secondary-200-800">Secondary</v-chip>
  <v-chip class="preset-filled-tertiary-200-800">Tertiary</v-chip>
  <v-chip class="preset-filled-success-200-800">Success</v-chip>
  <v-chip class="preset-filled-warning-200-800">Warning</v-chip>
  <v-chip class="preset-filled-error-200-800">Error</v-chip>
</div>`;

const tonal = `<div class="flex flex-wrap gap-2">
  <v-chip class="preset-tonal">Default</v-chip>
  <v-chip class="preset-tonal-surface">Surface</v-chip>
  <v-chip class="preset-tonal-primary">Primary</v-chip>
  <v-chip class="preset-tonal-secondary">Secondary</v-chip>
  <v-chip class="preset-tonal-tertiary">Tertiary</v-chip>
  <v-chip class="preset-tonal-success">Success</v-chip>
  <v-chip class="preset-tonal-warning">Warning</v-chip>
  <v-chip class="preset-tonal-error">Error</v-chip>
</div>`;

const outlined = `<div class="flex flex-wrap gap-2">
  <v-chip class="preset-outlined">Default</v-chip>
  <v-chip class="preset-outlined-surface-200-800">Surface</v-chip>
  <v-chip class="preset-outlined-primary-200-800">Primary</v-chip>
  <v-chip class="preset-outlined-secondary-200-800">Secondary</v-chip>
  <v-chip class="preset-outlined-tertiary-200-800">Tertiary</v-chip>
  <v-chip class="preset-outlined-success-200-800">Success</v-chip>
  <v-chip class="preset-outlined-warning-200-800">Warning</v-chip>
  <v-chip class="preset-outlined-error-200-800">Error</v-chip>
</div>`;
</script>

<template>
  <h1 class="h1">VChip</h1>
  <section class="section">
    <v-code-block
      language="ts"
      :code="`import { VChip } from '@code-coaching/vuetiful';`"
    />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template #tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex flex-wrap gap-2">
              <v-chip>default</v-chip>
            </div>
          </template>
          <template #source>
            <v-code-block language="html" :code="usage" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Presets</h2>
      <h3 class="h3">Filled</h3>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex flex-wrap gap-2">
              <v-chip class="preset-filled">Default</v-chip>
              <v-chip class="preset-filled-surface-200-800">Surface</v-chip>
              <v-chip class="preset-filled-primary-200-800">Primary</v-chip>
              <v-chip class="preset-filled-secondary-200-800">Secondary</v-chip>
              <v-chip class="preset-filled-tertiary-200-800">Tertiary</v-chip>
              <v-chip class="preset-filled-success-200-800">Success</v-chip>
              <v-chip class="preset-filled-warning-200-800">Warning</v-chip>
              <v-chip class="preset-filled-error-200-800">Error</v-chip>
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
              <v-chip class="preset-tonal">Default</v-chip>
              <v-chip class="preset-tonal-surface">Surface</v-chip>
              <v-chip class="preset-tonal-primary">Primary</v-chip>
              <v-chip class="preset-tonal-secondary">Secondary</v-chip>
              <v-chip class="preset-tonal-tertiary">Tertiary</v-chip>
              <v-chip class="preset-tonal-success">Success</v-chip>
              <v-chip class="preset-tonal-warning">Warning</v-chip>
              <v-chip class="preset-tonal-error">Error</v-chip>
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
              <v-chip class="preset-outlined">Default</v-chip>
              <v-chip class="preset-outlined-surface-200-800">Surface</v-chip>
              <v-chip class="preset-outlined-primary-200-800">Primary</v-chip>
              <v-chip class="preset-outlined-secondary-200-800">
                Secondary
              </v-chip>
              <v-chip class="preset-outlined-tertiary-200-800">Tertiary</v-chip>
              <v-chip class="preset-outlined-success-200-800">Success</v-chip>
              <v-chip class="preset-outlined-warning-200-800">Warning</v-chip>
              <v-chip class="preset-outlined-error-200-800">Error</v-chip>
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
