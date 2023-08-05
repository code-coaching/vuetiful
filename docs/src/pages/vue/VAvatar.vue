<script setup lang="ts">
import { VAvatar, VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';
import { AlertUnstyled } from 'src/components';

const usage = `<v-avatar class="hover:cursor-pointer" initials="JD" />
<v-avatar initials="JD" fill="custom-class" />
<v-avatar src="/img/john-duck.png" size="xs" />
<v-avatar src="/img/john-duck.png" size="sm" />
<v-avatar src="/img/john-duck.png" size="md" />
<v-avatar src="/img/john-duck.png" size="lg" />
<v-avatar src="/img/john-duck.png" size="xl" />
<v-avatar src="/img/does-not-exist.png" fallback="/img/john-duck.png" />`;

const usageCss = `.custom-class {
  fill: #ec4899;
}`;

const filled = `<v-avatar variant="variant-filled" initials="AB" />
<v-avatar variant="variant-filled-surface" initials="CD" />
<v-avatar variant="variant-filled-primary" initials="EF" />
<v-avatar variant="variant-filled-secondary" initials="GH" />
<v-avatar variant="variant-filled-tertiary" initials="IJ" />
<v-avatar variant="variant-filled-success" initials="KL" />
<v-avatar variant="variant-filled-warning" initials="MN" />
<v-avatar variant="variant-filled-error" initials="OP" />`;

const ringed = `<v-avatar variant="variant-ringed" initials="AB" />
<v-avatar variant="variant-ringed-surface" initials="CD" />
<v-avatar variant="variant-ringed-primary" initials="EF" />
<v-avatar variant="variant-ringed-secondary" initials="GH" />
<v-avatar variant="variant-ringed-tertiary" initials="IJ" />
<v-avatar variant="variant-ringed-success" initials="KL" />
<v-avatar variant="variant-ringed-warning" initials="MN" />
<v-avatar variant="variant-ringed-error" initials="OP" />`;

const ghost = `<v-avatar variant="variant-ghost" initials="AB" />
<v-avatar variant="variant-ghost-surface" initials="CD" />
<v-avatar variant="variant-ghost-primary" initials="EF" />
<v-avatar variant="variant-ghost-secondary" initials="GH" />
<v-avatar variant="variant-ghost-tertiary" initials="IJ" />
<v-avatar variant="variant-ghost-success" initials="KL" />
<v-avatar variant="variant-ghost-warning" initials="MN" />
<v-avatar variant="variant-ghost-error" initials="OP" />`;

const soft = `<v-avatar variant="variant-soft" initials="AB" />
<v-avatar variant="variant-soft-surface" initials="CD" />
<v-avatar variant="variant-soft-primary" initials="EF" />
<v-avatar variant="variant-soft-secondary" initials="GH" />
<v-avatar variant="variant-soft-tertiary" initials="IJ" />
<v-avatar variant="variant-soft-success" initials="KL" />
<v-avatar variant="variant-soft-warning" initials="MN" />
<v-avatar variant="variant-soft-error" initials="OP" />>`;

const glass = `<v-avatar variant="variant-glass" initials="AB" />
<v-avatar variant="variant-glass-surface" initials="CD" />
<v-avatar variant="variant-glass-primary" initials="EF" />
<v-avatar variant="variant-glass-secondary" initials="GH" />
<v-avatar variant="variant-glass-tertiary" initials="IJ" />
<v-avatar variant="variant-glass-success" initials="KL" />
<v-avatar variant="variant-glass-warning" initials="MN" />
<v-avatar variant="variant-glass-error" initials="OP" />`;

const unstyledTemplate = '<v-avatar unstyled initials="JD" />';
const unstyledPropTemplate = '<v-avatar unstyled variant="" initials="JD" />';
const unstyledCustomTemplate = '';
</script>

<template>
  <h1>VAvatar</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VAvatar } from '@code-coaching/vuetiful`" />
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
            <div class="flex flex-wrap items-start gap-2">
              <v-avatar class="hover:cursor-pointer" initials="JD" />
              <v-avatar initials="JD" fill="custom-class" />
              <v-avatar src="/img/john-duck.png" size="xs" />
              <v-avatar src="/img/john-duck.png" size="sm" />
              <v-avatar src="/img/john-duck.png" size="md" />
              <v-avatar src="/img/john-duck.png" size="lg" />
              <v-avatar src="/img/john-duck.png" size="xl" />
              <v-avatar src="/img/does-not-exist.png" fallback="/img/john-duck.png" />
            </div>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="usage" />
            <v-code-block class="mb-2" language="css" :code="usageCss" />
            <p>
              Passing a <code>src</code> will render an image. If the image fails to load, the
              <code>fallback</code> will be used.
            </p>
            <p>Passing an empty string to <code>rounded</code> will remove the theme based rounded corners.</p>
            <p>
              Passing any class to the <code>fill</code> property will apply this class to the initials. Note that by
              default the component tries to automatically take a readable color, if this is not the case, do apply a
              custom color.
            </p>
          </template>
        </v-preview>
      </section>

      <h3>Variants</h3>
      <h4>Filled</h4>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-avatar variant="variant-filled" initials="AB" />
              <v-avatar variant="variant-filled-surface" initials="CD" />
              <v-avatar variant="variant-filled-primary" initials="EF" />
              <v-avatar variant="variant-filled-secondary" initials="GH" />
              <v-avatar variant="variant-filled-tertiary" initials="IJ" />
              <v-avatar variant="variant-filled-success" initials="KL" />
              <v-avatar variant="variant-filled-warning" initials="MN" />
              <v-avatar variant="variant-filled-error" initials="OP" />
            </div>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="filled" />
          </template>
        </v-preview>
      </section>

      <h4>Ringed</h4>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-avatar variant="variant-ringed" initials="AB" />
              <v-avatar variant="variant-ringed-surface" initials="CD" />
              <v-avatar variant="variant-ringed-primary" initials="EF" />
              <v-avatar variant="variant-ringed-secondary" initials="GH" />
              <v-avatar variant="variant-ringed-tertiary" initials="IJ" />
              <v-avatar variant="variant-ringed-success" initials="KL" />
              <v-avatar variant="variant-ringed-warning" initials="MN" />
              <v-avatar variant="variant-ringed-error" initials="OP" />
            </div>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="ringed" />
          </template>
        </v-preview>
      </section>

      <h4>Ghost</h4>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-avatar variant="variant-ghost" initials="AB" />
              <v-avatar variant="variant-ghost-surface" initials="CD" />
              <v-avatar variant="variant-ghost-primary" initials="EF" />
              <v-avatar variant="variant-ghost-secondary" initials="GH" />
              <v-avatar variant="variant-ghost-tertiary" initials="IJ" />
              <v-avatar variant="variant-ghost-success" initials="KL" />
              <v-avatar variant="variant-ghost-warning" initials="MN" />
              <v-avatar variant="variant-ghost-error" initials="OP" />
            </div>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="ghost" />
          </template>
        </v-preview>
      </section>

      <h4>Soft</h4>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-avatar variant="variant-soft" initials="AB" />
              <v-avatar variant="variant-soft-surface" initials="CD" />
              <v-avatar variant="variant-soft-primary" initials="EF" />
              <v-avatar variant="variant-soft-secondary" initials="GH" />
              <v-avatar variant="variant-soft-tertiary" initials="IJ" />
              <v-avatar variant="variant-soft-success" initials="KL" />
              <v-avatar variant="variant-soft-warning" initials="MN" />
              <v-avatar variant="variant-soft-error" initials="OP" />
            </div>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="soft" />
          </template>
        </v-preview>
      </section>

      <h4>Glass</h4>
      <section class="section">
        <v-preview hide-swatches region-viewport="!p-0">
          <template v-slot:preview>
            <div
              class="flex w-full flex-wrap items-center justify-center gap-2 p-4 md:p-10"
              style="background: url('https://i.imgur.com/DdrZVb7.gif') center center no-repeat; background-size: cover"
            >
              <v-avatar variant="variant-glass" initials="AB" fill="fill-white/75" />
              <v-avatar variant="variant-glass-surface" initials="CD" fill="fill-white/75" />
              <v-avatar variant="variant-glass-primary" initials="EF" fill="fill-white/75" />
              <v-avatar variant="variant-glass-secondary" initials="GH" fill="fill-white/75" />
              <v-avatar variant="variant-glass-tertiary" initials="IJ" fill="fill-white/75" />
              <v-avatar variant="variant-glass-success" initials="KL" fill="fill-white/75" />
              <v-avatar variant="variant-glass-warning" initials="MN" fill="fill-white/75" />
              <v-avatar variant="variant-glass-error" initials="OP" fill="fill-white/75" />
            </div>
          </template>
          <template v-slot:footer>
            <div class="flex items-center justify-center">
              <a target="_blank" href="https://www.markferrari.com/"> Image Source </a>
            </div>
          </template>

          <template v-slot:source>
            <v-code-block language="html" :code="glass" />
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
            <v-avatar unstyled initials="JD" />
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="unstyledTemplate" />
          </template>
        </v-preview>
      </section>

      <h2>No prop-based styles</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-avatar unstyled variant="" initials="JD" />
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="unstyledPropTemplate" />
            <p>Set <code>variant</code> to an empty string to have no prop-based styles.</p>
          </template>
        </v-preview>
      </section>

      <h2>Custom style example</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-avatar unstyled variant="" fill="fill-white" class="bg-blue-500 py-4" initials="JD" />
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="unstyledCustomTemplate" />
            <p>Set <code>type</code> to an empty string to have no prop-based styles.</p>
            <p><code>class</code> will add classes to the alert.</p>
            <p><code>class-pre</code> will add classes to the pre slot.</p>
            <p><code>class-close</code> will add classes to the close button.</p>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>

<style>
.custom-class {
  fill: #ec4899;
}
</style>
