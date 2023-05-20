<script setup lang="ts">
import { VCodeBlock, VPreview } from '@code-coaching/vuetiful';

const source = `<v-preview class="min-w-full">
  <template v-slot:preview>
    Put a component to preview here.
  </template>
  <template v-slot:source>
    Put the source code here.
  </template>
</v-preview>`;

const sourceHide = `<v-preview hide-swatches hide-mobile-toggle class="min-w-full">
  <template v-slot:preview>
    Put a component to preview here.
  </template>
  <template v-slot:source>
    Put the source code here.
  </template>
</v-preview>`;
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VPreview</h1>
    <section class="section">
      <v-code-block language="ts" :code="`import { VPreview } from '@code-coaching/vuetiful`" />
    </section>

    <h2>Usage</h2>
    <h3>Default</h3>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <v-preview class="min-w-full">
            <template v-slot:preview> Put a component to preview here. </template>
            <template v-slot:source> Put the source code here. </template>
          </v-preview>
        </template>
        <template v-slot:source>
          <v-code-block language="html" :code="source" />
        </template>
      </v-preview>
    </section>

    <h3>Hide</h3>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <v-preview hide-swatches hide-mobile-toggle class="min-w-full">
            <template v-slot:preview> Put a component to preview here. </template>
            <template v-slot:source> Put the source code here. </template>
          </v-preview>
        </template>
        <template v-slot:source>
          <v-code-block language="html" :code="sourceHide" />
          <p><code>hide-swatches</code> hides the swatches (background picker).</p>
          <p><code>hide-mobile-toggle</code> hides the toggle to showcase the mobile view.</p>
          <p>The mobile toggle is not shown when the screen is to small.</p>
        </template>
      </v-preview>
    </section>
  </div>
</template>
