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

const filled = `<v-avatar preset="filled" initials="AB" />
<v-avatar preset="filled-surface-500" initials="CD" />
<v-avatar preset="filled-primary-500" initials="EF" />
<v-avatar preset="filled-secondary-500" initials="GH" />
<v-avatar preset="filled-tertiary-500" initials="IJ" />
<v-avatar preset="filled-success-500" initials="KL" />
<v-avatar preset="filled-warning-500" initials="MN" />
<v-avatar preset="filled-error-500" initials="OP" />`;

const tonal = `<v-avatar preset="tonal" initials="AB" />
<v-avatar preset="tonal-surface" initials="CD" />
<v-avatar preset="tonal-primary" initials="EF" />
<v-avatar preset="tonal-secondary" initials="GH" />
<v-avatar preset="tonal-tertiary" initials="IJ" />
<v-avatar preset="tonal-success" initials="KL" />
<v-avatar preset="tonal-warning" initials="MN" />
<v-avatar preset="tonal-error" initials="OP" />`;

const outlined = `<v-avatar preset="outlined" initials="AB" />
<v-avatar preset="outlined-surface-500" initials="CD" />
<v-avatar preset="outlined-primary-500" initials="EF" />
<v-avatar preset="outlined-secondary-500" initials="GH" />
<v-avatar preset="outlined-tertiary-500" initials="IJ" />
<v-avatar preset="outlined-success-500" initials="KL" />
<v-avatar preset="outlined-warning-500" initials="MN" />
<v-avatar preset="outlined-error-500" initials="OP" />`;

const unstyledTemplate = '<v-avatar unstyled initials="JD" />';
const unstyledPropTemplate = '<v-avatar unstyled preset="" initials="JD" />';
const unstyledCustomTemplate = '';
</script>

<template>
  <h1 class="h1">VAvatar</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VAvatar } from '@code-coaching/vuetiful';`" />
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
              Passing a <code class="code">src</code> will render an image. If the image fails to load, the
              <code class="code">fallback</code> will be used.
            </p>
            <p>
              Passing an empty string to <code class="code">rounded</code> will remove the theme based rounded corners.
            </p>
            <p>
              Passing any class to the <code class="code">fill</code> property will apply this class to the initials.
              Note that by default the component tries to automatically take a readable color, if this is not the case,
              do apply a custom color.
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Presets</h2>
      <h3 class="h3">Filled</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-avatar preset="filled" initials="AB" />
              <v-avatar preset="filled-surface-500" initials="CD" />
              <v-avatar preset="filled-primary-500" initials="EF" />
              <v-avatar preset="filled-secondary-500" initials="GH" />
              <v-avatar preset="filled-tertiary-500" initials="IJ" />
              <v-avatar preset="filled-success-500" initials="KL" />
              <v-avatar preset="filled-warning-500" initials="MN" />
              <v-avatar preset="filled-error-500" initials="OP" />
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
              <v-avatar preset="tonal" initials="AB" />
              <v-avatar preset="tonal-surface" initials="CD" />
              <v-avatar preset="tonal-primary" initials="EF" />
              <v-avatar preset="tonal-secondary" initials="GH" />
              <v-avatar preset="tonal-tertiary" initials="IJ" />
              <v-avatar preset="tonal-success" initials="KL" />
              <v-avatar preset="tonal-warning" initials="MN" />
              <v-avatar preset="tonal-error" initials="OP" />
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
              <v-avatar preset="outlined" initials="AB" />
              <v-avatar preset="outlined-surface-500" initials="CD" />
              <v-avatar preset="outlined-primary-500" initials="EF" />
              <v-avatar preset="outlined-secondary-500" initials="GH" />
              <v-avatar preset="outlined-tertiary-500" initials="IJ" />
              <v-avatar preset="outlined-success-500" initials="KL" />
              <v-avatar preset="outlined-warning-500" initials="MN" />
              <v-avatar preset="outlined-error-500" initials="OP" />
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
            <v-avatar unstyled initials="JD" />
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
            <v-avatar unstyled preset="" initials="JD" />
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="unstyledPropTemplate" />
            <p>Set <code class="code">preset</code> to an empty string to have no prop-based styles.</p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Custom style example</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-avatar unstyled preset="" fill="fill-white" class="py-4 bg-blue-500" initials="JD" />
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="unstyledCustomTemplate" />
            <p>Set <code class="code">type</code> to an empty string to have no prop-based styles.</p>
            <p><code class="code">class</code> will add classes to the alert.</p>
            <p><code class="code">class-pre</code> will add classes to the pre slot.</p>
            <p><code class="code">class-close</code> will add classes to the close button.</p>
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
