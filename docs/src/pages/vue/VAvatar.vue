<script setup lang="ts">
import { VAvatar, VCodeBlock, VPreview } from '@code-coaching/vuetiful';

const usage = `<v-avatar class="variant-filled hover:cursor-pointer" initials="JD" />
<v-avatar class="variant-filled" initials="JD" fill="custom-class" />
<v-avatar class="variant-filled" src="/img/john-duck.png" width="w-8" />
<v-avatar class="variant-filled !w-8" src="/img/john-duck.png" />
<v-avatar class="variant-filled" src="/img/john-duck.png" width="w-16" />
<v-avatar class="variant-filled" src="/img/john-duck.png" width="w-32" />
<v-avatar class="variant-filled" src="/img/john-duck.png" rounded="" />
<v-avatar class="variant-filled" src="/img/does-not-exist.png" fallback="/img/john-duck.png" />`;

const usageCss = `.custom-class {
  fill: #ec4899;
}`;

const filled = `<v-avatar class="variant-filled" initials="AB" />
<v-avatar class="variant-filled-surface" initials="CD" />
<v-avatar class="variant-filled-primary" initials="EF" />
<v-avatar class="variant-filled-secondary" initials="GH" />
<v-avatar class="variant-filled-tertiary" initials="IJ" />
<v-avatar class="variant-filled-success" initials="KL" />
<v-avatar class="variant-filled-warning" initials="MN" />
<v-avatar class="variant-filled-error" initials="OP" />`;

const ringed = `<v-avatar class="variant-ringed" initials="AB" />
<v-avatar class="variant-ringed-surface" initials="CD" />
<v-avatar class="variant-ringed-primary" initials="EF" />
<v-avatar class="variant-ringed-secondary" initials="GH" />
<v-avatar class="variant-ringed-tertiary" initials="IJ" />
<v-avatar class="variant-ringed-success" initials="KL" />
<v-avatar class="variant-ringed-warning" initials="MN" />
<v-avatar class="variant-ringed-error" initials="OP" />`;

const ghost = `<v-avatar class="variant-ghost" initials="AB" />
<v-avatar class="variant-ghost-surface" initials="CD" />
<v-avatar class="variant-ghost-primary" initials="EF" />
<v-avatar class="variant-ghost-secondary" initials="GH" />
<v-avatar class="variant-ghost-tertiary" initials="IJ" />
<v-avatar class="variant-ghost-success" initials="KL" />
<v-avatar class="variant-ghost-warning" initials="MN" />
<v-avatar class="variant-ghost-error" initials="OP" />`;

const soft = `<v-avatar class="variant-soft" initials="AB" />
<v-avatar class="variant-soft-surface" initials="CD" />
<v-avatar class="variant-soft-primary" initials="EF" />
<v-avatar class="variant-soft-secondary" initials="GH" />
<v-avatar class="variant-soft-tertiary" initials="IJ" />
<v-avatar class="variant-soft-success" initials="KL" />
<v-avatar class="variant-soft-warning" initials="MN" />
<v-avatar class="variant-soft-error" initials="OP" />>`;

const glass = `<v-avatar class="variant-glass" initials="AB" />
<v-avatar class="variant-glass-surface" initials="CD" />
<v-avatar class="variant-glass-primary" initials="EF" />
<v-avatar class="variant-glass-secondary" initials="GH" />
<v-avatar class="variant-glass-tertiary" initials="IJ" />
<v-avatar class="variant-glass-success" initials="KL" />
<v-avatar class="variant-glass-warning" initials="MN" />
<v-avatar class="variant-glass-error" initials="OP" />`;
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VAvatar</h1>
    <section class="section">
      <v-code-block language="ts" :code="`import { VAvatar } from '@code-coaching/vuetiful`" />
    </section>

    <h2>Usage</h2>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap items-start gap-2">
            <v-avatar class="variant-filled hover:cursor-pointer" initials="JD" />
            <v-avatar class="variant-filled" initials="JD" fill="custom-class" />
            <v-avatar class="variant-filled" src="/img/john-duck.png" width="w-8" />
            <v-avatar class="variant-filled !w-8" src="/img/john-duck.png" />
            <v-avatar class="variant-filled" src="/img/john-duck.png" width="w-16" />
            <v-avatar class="variant-filled" src="/img/john-duck.png" width="w-32" />
            <v-avatar class="variant-filled" src="/img/john-duck.png" rounded="" />
            <v-avatar class="variant-filled" src="/img/does-not-exist.png" fallback="/img/john-duck.png" />
          </div>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-2" language="html" :code="usage" />
          <v-code-block class="mb-2" language="css" :code="usageCss" />
          <p>
            Passing a <code>src</code> will render an image. If the image fails to load, the <code>fallback</code> will
            be used.
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
            <v-avatar class="variant-filled" initials="AB" />
            <v-avatar class="variant-filled-surface" initials="CD" />
            <v-avatar class="variant-filled-primary" initials="EF" />
            <v-avatar class="variant-filled-secondary" initials="GH" />
            <v-avatar class="variant-filled-tertiary" initials="IJ" />
            <v-avatar class="variant-filled-success" initials="KL" />
            <v-avatar class="variant-filled-warning" initials="MN" />
            <v-avatar class="variant-filled-error" initials="OP" />
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
            <v-avatar class="variant-ringed" initials="AB" />
            <v-avatar class="variant-ringed-surface" initials="CD" />
            <v-avatar class="variant-ringed-primary" initials="EF" />
            <v-avatar class="variant-ringed-secondary" initials="GH" />
            <v-avatar class="variant-ringed-tertiary" initials="IJ" />
            <v-avatar class="variant-ringed-success" initials="KL" />
            <v-avatar class="variant-ringed-warning" initials="MN" />
            <v-avatar class="variant-ringed-error" initials="OP" />
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
            <v-avatar class="variant-ghost" initials="AB" />
            <v-avatar class="variant-ghost-surface" initials="CD" />
            <v-avatar class="variant-ghost-primary" initials="EF" />
            <v-avatar class="variant-ghost-secondary" initials="GH" />
            <v-avatar class="variant-ghost-tertiary" initials="IJ" />
            <v-avatar class="variant-ghost-success" initials="KL" />
            <v-avatar class="variant-ghost-warning" initials="MN" />
            <v-avatar class="variant-ghost-error" initials="OP" />
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
            <v-avatar class="variant-soft" initials="AB" />
            <v-avatar class="variant-soft-surface" initials="CD" />
            <v-avatar class="variant-soft-primary" initials="EF" />
            <v-avatar class="variant-soft-secondary" initials="GH" />
            <v-avatar class="variant-soft-tertiary" initials="IJ" />
            <v-avatar class="variant-soft-success" initials="KL" />
            <v-avatar class="variant-soft-warning" initials="MN" />
            <v-avatar class="variant-soft-error" initials="OP" />
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
            <v-avatar class="variant-glass" initials="AB" fill="fill-white/75" />
            <v-avatar class="variant-glass-surface" initials="CD" fill="fill-white/75" />
            <v-avatar class="variant-glass-primary" initials="EF" fill="fill-white/75" />
            <v-avatar class="variant-glass-secondary" initials="GH" fill="fill-white/75" />
            <v-avatar class="variant-glass-tertiary" initials="IJ" fill="fill-white/75" />
            <v-avatar class="variant-glass-success" initials="KL" fill="fill-white/75" />
            <v-avatar class="variant-glass-warning" initials="MN" fill="fill-white/75" />
            <v-avatar class="variant-glass-error" initials="OP" fill="fill-white/75" />
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
  </div>
</template>

<style>
.custom-class {
  fill: #ec4899;
}
</style>
