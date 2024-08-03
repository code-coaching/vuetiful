<script setup lang="ts">
import { VAvatar, VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';

const defaultUsage = `<div class="flex flex-wrap gap-2">
  <v-avatar initials="JD" />
  <v-avatar src="/img/john-duck.png" alt="Image of John Duck" />
  <v-avatar src="/img/does-not-exist.png" alt="Non existing image" fallback="/img/john-duck.png" />
</div>`;

const size = `<div class="flex flex-col gap-4">
  <div class="flex flex-wrap gap-2">
    <v-avatar src="/img/john-duck.png" class="w-8 h-8" />
    <v-avatar src="/img/john-duck.png" class="w-12 h-12" />
    <v-avatar src="/img/john-duck.png" />
    <v-avatar src="/img/john-duck.png" class="w-20 h-20" />
    <v-avatar src="/img/john-duck.png" class="w-24 h-24" />
  </div>
  <div class="flex flex-wrap gap-2">
    <v-avatar initials="JD" class="w-8 h-8 text-sm" />
    <v-avatar initials="JD" class="w-12 h-12 text-md" />
    <v-avatar initials="JD" />
    <v-avatar initials="JD" class="w-20 h-20 text-2xl" />
    <v-avatar initials="JD" class="w-24 h-24 text-3xl" />
  </div>
</div>`;

const rounded = `<div class="flex flex-wrap gap-2">
  <v-avatar initials="JD" rounded="rounded-none" />
  <v-avatar initials="JD" rounded="rounded-sm" />
  <v-avatar initials="JD" rounded="rounded-md" />
  <v-avatar initials="JD" rounded="rounded-lg" />
  <v-avatar initials="JD" rounded="rounded-xl" />
  <v-avatar initials="JD" rounded="rounded-2xl" />
  <v-avatar initials="JD" rounded="rounded-3xl" />
  <v-avatar initials="JD" rounded="rounded-full" />
</div>`;

const filled = `<div class="flex flex-wrap gap-2">
  <v-avatar background="preset-filled" fill="fill-white dark:fill-black" initials="AB" />
  <v-avatar background="preset-filled-surface-200-800" fill="fill-surface-800-200" initials="CD" />
  <v-avatar
    background="preset-filled-primary-200-800"
    fill="fill-primary-contrast-200 dark:fill-primary-contrast-800"
    initials="EF"
  />
  <v-avatar
    background="preset-filled-secondary-200-800"
    fill="fill-secondary-contrast-200 dark:fill-secondary-contrast-800"
    initials="GH"
  />
  <v-avatar
    background="preset-filled-tertiary-200-800"
    fill="fill-tertiary-contrast-200 dark:fill-tertiary-contrast-800"
    initials="IJ"
  />
  <v-avatar
    background="preset-filled-success-200-800"
    fill="fill-success-contrast-200 dark:fill-success-contrast-800"
    initials="KL"
  />
  <v-avatar
    background="preset-filled-warning-200-800"
    fill="fill-warning-contrast-200 dark:fill-warning-contrast-800"
    initials="MN"
  />
  <v-avatar
    background="preset-filled-error-200-800"
    fill="fill-error-contrast-200 dark:fill-error-contrast-800"
    initials="OP"
  />
</div>`;

const tonal = `<div class="flex flex-wrap gap-2">
  <v-avatar initials="AB" class="preset-tonal fill-black dark:fill-white" />
  <v-avatar initials="CD" class="preset-tonal-surface fill-surface-950-50" />
  <v-avatar initials="EF" class="preset-tonal-primary fill-primary-950-50" />
  <v-avatar initials="GH" class="preset-tonal-secondary fill-secondary-950-50" />
  <v-avatar initials="IJ" class="preset-tonal-tertiary fill-tertiary-950-50" />
  <v-avatar initials="KL" class="preset-tonal-success fill-success-950-50" />
  <v-avatar initials="MN" class="preset-tonal-warning fill-warning-950-50" />
  <v-avatar class="preset-tonal-error fill-error-950-50" initials="OP" />
</div>`;

const outlined = `<div class="flex flex-col gap-4">
  <div class="flex flex-wrap gap-2">
    <v-avatar initials="AB" class="preset-outlined fill-black dark:fill-white" />
    <v-avatar initials="CD" class="preset-outlined-surface-800-200 fill-surface-800-200" />
    <v-avatar initials="EF" class="preset-outlined-primary-800-200 fill-primary-800-200" />
    <v-avatar initials="GH" class="preset-outlined-secondary-800-200 fill-secondary-800-200" />
    <v-avatar initials="IJ" class="preset-outlined-tertiary-800-200 fill-tertiary-800-200" />
    <v-avatar initials="KL" class="preset-outlined-success-800-200 fill-success-800-200" />
    <v-avatar initials="MN" class="preset-outlined-warning-800-200 fill-warning-800-200" />
    <v-avatar initials="OP" class="preset-outlined-error-800-200 fill-error-800-200" />
  </div>
  <div class="flex flex-wrap gap-2">
    <v-avatar initials="AB" class="bg-transparent preset-outlined fill-black dark:fill-white" />
    <v-avatar initials="CD" class="bg-transparent preset-outlined-surface-800-200 fill-surface-800-200" />
    <v-avatar initials="EF" class="bg-transparent preset-outlined-primary-800-200 fill-primary-800-200" />
    <v-avatar initials="GH" class="bg-transparent preset-outlined-secondary-800-200 fill-secondary-800-200" />
    <v-avatar initials="IJ" class="bg-transparent preset-outlined-tertiary-800-200 fill-tertiary-800-200" />
    <v-avatar initials="KL" class="bg-transparent preset-outlined-success-800-200 fill-success-800-200" />
    <v-avatar initials="MN" class="bg-transparent preset-outlined-warning-800-200 fill-warning-800-200" />
    <v-avatar initials="OP" class="bg-transparent preset-outlined-error-800-200 fill-error-800-200" />
  </div>
</div>`;

const custom = `<div class="flex flex-wrap gap-2">
  <v-avatar
    initials="JD"
    fill="fill-black"
    background="custom-background"
    rounded="rounded-full"
    height="h-16"
    width="w-20"
  />
  <v-avatar initials="JD" class="w-20 h-16 rounded-full custom-background" fill="fill-black" />
</div>`;

const customCss = `.custom-background {
  background: #42b883;
  background: linear-gradient(90deg, #35495e 0%, #42b883 50%, #35495e 100%);
}`;
</script>

<template>
  <h1 class="h1">VAvatar</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VAvatar } from '@code-coaching/vuetiful';`" />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template v-slot:tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">Examples</h2>
      <h3 class="h3">Default</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-avatar initials="JD" />
              <v-avatar src="/img/john-duck.png" alt="Image of John Duck" />
              <v-avatar src="/img/does-not-exist.png" alt="Non existing image" fallback="/img/john-duck.png" />
            </div>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="defaultUsage" />
            <div class="flex flex-col gap-2">
              <p>
                Passing a <code class="code">src</code> will render an image. If the image fails to load, the
                <code class="code">fallback</code> will be used.
              </p>
              <p>Passing <code class="code">initials</code> will render initials.</p>
            </div>
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Size</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-col gap-4">
              <div class="flex flex-wrap gap-2">
                <v-avatar src="/img/john-duck.png" class="h-8 w-8" />
                <v-avatar src="/img/john-duck.png" class="h-12 w-12" />
                <v-avatar src="/img/john-duck.png" />
                <v-avatar src="/img/john-duck.png" class="h-20 w-20" />
                <v-avatar src="/img/john-duck.png" class="h-24 w-24" />
              </div>
              <div class="flex flex-wrap gap-2">
                <v-avatar initials="JD" class="h-8 w-8 text-sm" />
                <v-avatar initials="JD" class="text-md h-12 w-12" />
                <v-avatar initials="JD" />
                <v-avatar initials="JD" class="h-20 w-20 text-2xl" />
                <v-avatar initials="JD" class="h-24 w-24 text-3xl" />
              </div>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="size" />
            <p>The default <code class="code">width</code> is <code class="code">w-16</code>.</p>
            <p>The default <code class="code">height</code> is <code class="code">h-16</code>.</p>
            <p>This can be any class, but usually a class just defining the width or height is passed.</p>
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Rounded</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-avatar initials="JD" class="rounded-none" />
              <v-avatar initials="JD" class="rounded-sm" />
              <v-avatar initials="JD" class="rounded-md" />
              <v-avatar initials="JD" class="rounded-lg" />
              <v-avatar initials="JD" class="rounded-xl" />
              <v-avatar initials="JD" class="rounded-2xl" />
              <v-avatar initials="JD" class="rounded-3xl" />
              <v-avatar initials="JD" class="rounded-full" />
            </div>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="rounded" />
            <p>By default it will use the roundedness of the theme. You can override this.</p>
            <p>This can be any class, but usually a class just defining the border radius is passed.</p>
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Custom</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-avatar
                initials="JD"
                class="custom-background h-16 w-20 rounded-full text-black dark:bg-blue-500 dark:text-black"
              />
            </div>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="custom" />
            <v-code-block class="mb-2" language="css" :code="customCss" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Presets</h2>
      <h3 class="h3">Filled</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-avatar class="preset-filled" initials="AB" />
              <v-avatar class="preset-filled-surface-200-800" initials="CD" />
              <v-avatar initials="EF" class="preset-filled-primary-200-800" />
              <v-avatar initials="GH" class="preset-filled-secondary-200-800" />
              <v-avatar initials="IJ" class="preset-filled-tertiary-200-800" />
              <v-avatar initials="KL" class="preset-filled-success-200-800" />
              <v-avatar initials="MN" class="preset-filled-warning-200-800" />
              <v-avatar initials="OP" class="preset-filled-error-200-800" />
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
              <v-avatar initials="AB" class="preset-tonal" />
              <v-avatar initials="CD" class="preset-tonal-surface" />
              <v-avatar initials="EF" class="preset-tonal-primary" />
              <v-avatar initials="GH" class="preset-tonal-secondary" />
              <v-avatar initials="IJ" class="preset-tonal-tertiary" />
              <v-avatar initials="KL" class="preset-tonal-success" />
              <v-avatar initials="MN" class="preset-tonal-warning" />
              <v-avatar initials="OP" class="preset-tonal-error" />
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
            <div class="flex flex-col gap-4">
              <div class="flex flex-wrap gap-2">
                <v-avatar initials="AB" class="preset-outlined" />
                <v-avatar initials="CD" class="preset-outlined-surface-800-200" />
                <v-avatar initials="EF" class="preset-outlined-primary-800-200" />
                <v-avatar initials="GH" class="preset-outlined-secondary-800-200" />
                <v-avatar initials="IJ" class="preset-outlined-tertiary-800-200" />
                <v-avatar initials="KL" class="preset-outlined-success-800-200" />
                <v-avatar initials="MN" class="preset-outlined-warning-800-200" />
                <v-avatar initials="OP" class="preset-outlined-error-800-200" />
              </div>
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
