<script setup lang="ts">
import {
  VAvatar,
  VCodeBlock,
  VPreview,
  VTab,
  VTabPanel,
  VTabs,
} from "@code-coaching/vuetiful";

const defaultUsage = `<div class="flex flex-wrap gap-2">
  <v-avatar initials="JD" />
  <v-avatar src="/img/john-duck.png" alt="Image of John Duck" />
  <v-avatar
    src="/img/does-not-exist.png"
    alt="Non existing image"
    fallback="/img/john-duck.png"
  />
</div>`;

const size = `<div class="flex flex-col gap-4">
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
</div>`;

const rounded = `<div class="flex flex-wrap gap-2">
  <v-avatar initials="JD" class="rounded-none" />
  <v-avatar initials="JD" class="rounded-sm" />
  <v-avatar initials="JD" class="rounded-md" />
  <v-avatar initials="JD" class="rounded-lg" />
  <v-avatar initials="JD" class="rounded-xl" />
  <v-avatar initials="JD" class="rounded-2xl" />
  <v-avatar initials="JD" class="rounded-3xl" />
  <v-avatar initials="JD" class="rounded-full" />
</div>`;

const filled = `<div class="flex flex-wrap gap-2">
  <v-avatar class="preset-filled" initials="AB" />
  <v-avatar class="preset-filled-surface-200-800" initials="CD" />
  <v-avatar initials="EF" class="preset-filled-primary-200-800" />
  <v-avatar initials="GH" class="preset-filled-secondary-200-800" />
  <v-avatar initials="IJ" class="preset-filled-tertiary-200-800" />
  <v-avatar initials="KL" class="preset-filled-success-200-800" />
  <v-avatar initials="MN" class="preset-filled-warning-200-800" />
  <v-avatar initials="OP" class="preset-filled-error-200-800" />
</div>`;

const tonal = `<div class="flex flex-wrap gap-2">
  <v-avatar initials="AB" class="preset-tonal" />
  <v-avatar initials="CD" class="preset-tonal-surface" />
  <v-avatar initials="EF" class="preset-tonal-primary" />
  <v-avatar initials="GH" class="preset-tonal-secondary" />
  <v-avatar initials="IJ" class="preset-tonal-tertiary" />
  <v-avatar initials="KL" class="preset-tonal-success" />
  <v-avatar initials="MN" class="preset-tonal-warning" />
  <v-avatar initials="OP" class="preset-tonal-error" />
</div>`;

const outlined = `<div class="flex flex-wrap gap-2">
  <v-avatar initials="AB" class="preset-outlined" />
  <v-avatar initials="CD" class="preset-outlined-surface-200-800" />
  <v-avatar initials="EF" class="preset-outlined-primary-200-800" />
  <v-avatar
    initials="GH"
    class="preset-outlined-secondary-200-800"
  />
  <v-avatar
    initials="IJ"
    class="preset-outlined-tertiary-200-800"
  />
  <v-avatar initials="KL" class="preset-outlined-success-200-800" />
  <v-avatar initials="MN" class="preset-outlined-warning-200-800" />
  <v-avatar initials="OP" class="preset-outlined-error-200-800" />
</div>`;

const custom = `<v-avatar
  initials="JD"
  class="h-16 w-20 rounded-full bg-[#42b883] bg-gradient-to-r from-[#35495e] via-[#42b883] to-[#35495e] text-black"
/>`;
</script>

<template>
  <h1 class="h1">VAvatar</h1>
  <section class="section">
    <v-code-block
      language="ts"
      :code="`import { VAvatar } from '@code-coaching/vuetiful';`"
    />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template #tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">Examples</h2>
      <h3 class="h3">Default</h3>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex flex-wrap gap-2">
              <v-avatar initials="JD" />
              <v-avatar src="/img/john-duck.png" alt="Image of John Duck" />
              <v-avatar
                src="/img/does-not-exist.png"
                alt="Non existing image"
                fallback="/img/john-duck.png"
              />
            </div>
          </template>
          <template #source>
            <v-code-block class="mb-2" language="html" :code="defaultUsage" />
            <div class="flex flex-col gap-2">
              <p>
                Passing a <code class="code">src</code> will render an image. If
                the image fails to load, the
                <code class="code">fallback</code> will be used.
              </p>
              <p>
                Passing <code class="code">initials</code> will render initials.
              </p>
            </div>
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Size</h3>
      <section class="section">
        <v-preview>
          <template #preview>
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
          <template #source>
            <v-code-block class="mb-2" language="html" :code="size" />
            <p>
              The default <code class="code">width</code> is
              <code class="code">w-16</code>.
            </p>
            <p>
              The default <code class="code">height</code> is
              <code class="code">h-16</code>.
            </p>
            <p>
              This can be any class, but usually a class just defining the width
              or height is passed.
            </p>
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Rounded</h3>
      <section class="section">
        <v-preview>
          <template #preview>
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
          <template #source>
            <v-code-block class="mb-2" language="html" :code="rounded" />
            <p>
              By default it will use the roundedness of the theme. You can
              override this.
            </p>
            <p>
              This can be any class, but usually a class just defining the
              border radius is passed.
            </p>
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Custom</h3>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-avatar
              initials="JD"
              class="h-16 w-20 rounded-full bg-[#42b883] bg-gradient-to-r from-[#35495e] via-[#42b883] to-[#35495e] text-black"
            />
          </template>
          <template #source>
            <v-code-block class="mb-2" language="html" :code="custom" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Presets</h2>
      <h3 class="h3">Filled</h3>
      <section class="section">
        <v-preview>
          <template #preview>
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
              <v-avatar initials="AB" class="preset-outlined" />
              <v-avatar initials="CD" class="preset-outlined-surface-200-800" />
              <v-avatar initials="EF" class="preset-outlined-primary-200-800" />
              <v-avatar
                initials="GH"
                class="preset-outlined-secondary-200-800"
              />
              <v-avatar
                initials="IJ"
                class="preset-outlined-tertiary-200-800"
              />
              <v-avatar initials="KL" class="preset-outlined-success-200-800" />
              <v-avatar initials="MN" class="preset-outlined-warning-200-800" />
              <v-avatar initials="OP" class="preset-outlined-error-200-800" />
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
