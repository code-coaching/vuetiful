<script setup lang="ts">
import {
  VBadge,
  VCodeBlock,
  VPreview,
  VTab,
  VTabPanel,
  VTabs,
} from "@code-coaching/vuetiful";

const custom = `<div class="flex flex-wrap gap-2">
  <v-badge class="preset-tonal-tertiary">custom</v-badge>
  <v-badge
    class="bg-[#42b883] bg-gradient-to-r from-[#35495e] via-[#42b883] to-[#35495e] px-8 py-2 font-extrabold text-black"
  >
    custom
  </v-badge>
  <v-badge class="h-4 w-fit rounded-none preset-filled">
    custom
  </v-badge>
</div>`;

const filled = `<div class="flex flex-wrap gap-2">
  <v-badge class="preset-filled">Default</v-badge>
  <v-badge class="preset-filled-surface-200-800">Surface</v-badge>
  <v-badge class="preset-filled-primary-200-800">Primary</v-badge>
  <v-badge class="preset-filled-secondary-200-800">Secondary</v-badge>
  <v-badge class="preset-filled-tertiary-200-800">Tertiary</v-badge>
  <v-badge class="preset-filled-success-200-800">Success</v-badge>
  <v-badge class="preset-filled-warning-200-800">Warning</v-badge>
  <v-badge class="preset-filled-error-200-800">Error</v-badge>
</div>`;

const tonal = `<div class="flex flex-wrap gap-2">
  <v-badge class="preset-tonal"> Default </v-badge>
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
  <v-badge class="preset-outlined-surface-200-800">Surface</v-badge>
  <v-badge class="preset-outlined-primary-200-800">Primary</v-badge>
  <v-badge class="preset-outlined-secondary-200-800">
    Secondary
  </v-badge>
  <v-badge class="preset-outlined-tertiary-200-800">
    Tertiary
  </v-badge>
  <v-badge class="preset-outlined-success-200-800">Success</v-badge>
  <v-badge class="preset-outlined-warning-200-800">Warning</v-badge>
  <v-badge class="preset-outlined-error-200-800">Error</v-badge>
</div>`;
</script>

<template>
  <h1 class="h1">VBadge</h1>
  <section class="section">
    <v-code-block
      language="ts"
      :code="`import { VBadge } from '@code-coaching/vuetiful';`"
    />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template #tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">Props</h2>
      <h3 class="h3">Default</h3>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-badge>default</v-badge>
          </template>
          <template #source>
            <v-code-block
              language="html"
              :code="`<v-badge>default</v-badge>`"
            />
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Custom</h3>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex flex-wrap gap-2">
              <v-badge class="preset-tonal-tertiary">custom</v-badge>
              <v-badge
                class="bg-[#42b883] bg-gradient-to-r from-[#35495e] via-[#42b883] to-[#35495e] px-8 py-2 font-extrabold text-black"
              >
                custom
              </v-badge>
              <v-badge class="h-4 w-fit rounded-none preset-filled">
                custom
              </v-badge>
            </div>
          </template>
          <template #source>
            <v-code-block language="html" :code="custom" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Presets</h2>
      <h3 class="h3">Filled</h3>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex flex-wrap gap-2">
              <v-badge class="preset-filled">Default</v-badge>
              <v-badge class="preset-filled-surface-200-800">Surface</v-badge>
              <v-badge class="preset-filled-primary-200-800">Primary</v-badge>
              <v-badge class="preset-filled-secondary-200-800">
                Secondary
              </v-badge>
              <v-badge class="preset-filled-tertiary-200-800">Tertiary</v-badge>
              <v-badge class="preset-filled-success-200-800">Success</v-badge>
              <v-badge class="preset-filled-warning-200-800">Warning</v-badge>
              <v-badge class="preset-filled-error-200-800">Error</v-badge>
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
              <v-badge class="preset-tonal"> Default </v-badge>
              <v-badge class="preset-tonal-surface">Surface</v-badge>
              <v-badge class="preset-tonal-primary">Primary</v-badge>
              <v-badge class="preset-tonal-secondary">Secondary</v-badge>
              <v-badge class="preset-tonal-tertiary">Tertiary</v-badge>
              <v-badge class="preset-tonal-success">Success</v-badge>
              <v-badge class="preset-tonal-warning">Warning</v-badge>
              <v-badge class="preset-tonal-error">Error</v-badge>
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
              <v-badge class="preset-outlined">Default</v-badge>
              <v-badge class="preset-outlined-surface-200-800">Surface</v-badge>
              <v-badge class="preset-outlined-primary-200-800">Primary</v-badge>
              <v-badge class="preset-outlined-secondary-200-800">
                Secondary
              </v-badge>
              <v-badge class="preset-outlined-tertiary-200-800">
                Tertiary
              </v-badge>
              <v-badge class="preset-outlined-success-200-800">Success</v-badge>
              <v-badge class="preset-outlined-warning-200-800">Warning</v-badge>
              <v-badge class="preset-outlined-error-200-800">Error</v-badge>
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
