<script setup lang="ts">
import { tm, VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';

const source = `<v-preview class="min-w-full">
  <template #preview>
    Put a component to preview here.
  </template>
  <template #source>
    Put the source code here.
  </template>
</v-preview>`;

const sourceHide = `<v-preview hide-swatches hide-mobile-toggle class="min-w-full">
  <template #preview>
    Put a component to preview here.
  </template>
  <template #source>
    Put the source code here.
  </template>
</v-preview>`;
</script>

<template>
  <h1 class="h1">VPreview</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VPreview } from '@code-coaching/vuetiful';`" />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template #tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">Default</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-preview class="min-w-full">
              <template #preview> Put a component to preview here. </template>
              <template #source> Put the source code here. </template>
            </v-preview>
          </template>
          <template #source>
            <v-code-block language="html" :code="source" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Hide</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-preview hide-swatches hide-mobile-toggle class="min-w-full">
              <template #preview> Put a component to preview here. </template>
              <template #source> Put the source code here. </template>
            </v-preview>
          </template>
          <template #source>
            <v-code-block class="mb-2" language="html" :code="sourceHide" />
            <p><code class="code">hide-swatches</code> hides the swatches (background picker).</p>
            <p><code class="code">hide-mobile-toggle</code> hides the toggle to showcase the mobile view.</p>
            <p>The mobile toggle is not shown when the screen is to small.</p>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
