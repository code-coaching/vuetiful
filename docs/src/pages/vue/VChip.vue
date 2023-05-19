<script setup lang="ts">
import { VChip, VCodeBlock, VPreview } from '@code-coaching/vuetiful';

const glassExample = `<v-chip class="variant-glass text-white/75">Default</v-chip>
<v-chip class="variant-glass-surface text-white/75">Surface</v-chip>
<v-chip class="variant-glass-primary text-white/75">Primary</v-chip>
<v-chip class="variant-glass-secondary text-white/75">Secondary</v-chip>
<v-chip class="variant-glass-tertiary text-white/75">Tertiary</v-chip>
<v-chip class="variant-glass-success text-white/75">Success</v-chip>
<v-chip class="variant-glass-warning text-white/75">Warning</v-chip>
<v-chip class="variant-glass-error text-white/75">Error</v-chip>`;
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VChip</h1>
    <section class="section">
      <v-code-block language="ts" :code="`import { VChip } from '@code-coaching/vuetiful`" />
    </section>

    <h2>Usage</h2>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap gap-2">
            <v-chip class="variant-filled">default</v-chip>
          </div>
        </template>
        <template v-slot:source>
          <v-code-block language="html" :code="`<v-chip class=&quot;variant-filled&quot;>default</v-chip>`" />
        </template>
      </v-preview>
    </section>

    <h3>Variants</h3>
    <h4>Filled</h4>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap gap-2">
            <v-chip class="variant-filled">Default</v-chip>
            <v-chip class="variant-filled-surface">Surface</v-chip>
            <v-chip class="variant-filled-primary">Primary</v-chip>
            <v-chip class="variant-filled-secondary">Secondary</v-chip>
            <v-chip class="variant-filled-tertiary">Tertiary</v-chip>
            <v-chip class="variant-filled-success">Success</v-chip>
            <v-chip class="variant-filled-warning">Warning</v-chip>
            <v-chip class="variant-filled-error">Error</v-chip>
          </div>
        </template>
        <template v-slot:source>
          <v-code-block
            language="html"
            :code="`<v-chip class=&quot;variant-filled&quot;>Default</v-chip>
<v-chip class=&quot;variant-filled-surface&quot;>Surface</v-chip>
<v-chip class=&quot;variant-filled-primary&quot;>Primary</v-chip>
<v-chip class=&quot;variant-filled-secondary&quot;>Secondary</v-chip>
<v-chip class=&quot;variant-filled-tertiary&quot;>Tertiary</v-chip>
<v-chip class=&quot;variant-filled-success&quot;>Success</v-chip>
<v-chip class=&quot;variant-filled-warning&quot;>Warning</v-chip>
<v-chip class=&quot;variant-filled-error&quot;>Error</v-chip>`"
          />
        </template>
      </v-preview>
    </section>

    <h4>Ringed</h4>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap gap-2">
            <v-chip class="variant-ringed">Default</v-chip>
            <v-chip class="variant-ringed-surface">Surface</v-chip>
            <v-chip class="variant-ringed-primary">Primary</v-chip>
            <v-chip class="variant-ringed-secondary">Secondary</v-chip>
            <v-chip class="variant-ringed-tertiary">Tertiary</v-chip>
            <v-chip class="variant-ringed-success">Success</v-chip>
            <v-chip class="variant-ringed-warning">Warning</v-chip>
            <v-chip class="variant-ringed-error">Error</v-chip>
          </div>
        </template>
        <template v-slot:source>
          <v-code-block
            language="html"
            :code="`<v-chip class=&quot;variant-ringed&quot;>Default</v-chip>
<v-chip class=&quot;variant-ringed-surface&quot;>Surface</v-chip>
<v-chip class=&quot;variant-ringed-primary&quot;>Primary</v-chip>
<v-chip class=&quot;variant-ringed-secondary&quot;>Secondary</v-chip>
<v-chip class=&quot;variant-ringed-tertiary&quot;>Tertiary</v-chip>
<v-chip class=&quot;variant-ringed-success&quot;>Success</v-chip>
<v-chip class=&quot;variant-ringed-warning&quot;>Warning</v-chip>
<v-chip class=&quot;variant-ringed-error&quot;>Error</v-chip>`"
          />
        </template>
      </v-preview>
    </section>

    <h4>Ghost</h4>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap gap-2">
            <v-chip class="variant-ghost">Default</v-chip>
            <v-chip class="variant-ghost-surface">Surface</v-chip>
            <v-chip class="variant-ghost-primary">Primary</v-chip>
            <v-chip class="variant-ghost-secondary">Secondary</v-chip>
            <v-chip class="variant-ghost-tertiary">Tertiary</v-chip>
            <v-chip class="variant-ghost-success">Success</v-chip>
            <v-chip class="variant-ghost-warning">Warning</v-chip>
            <v-chip class="variant-ghost-error">Error</v-chip>
          </div>
        </template>
        <template v-slot:source>
          <v-code-block
            language="html"
            :code="`<v-chip class=&quot;variant-ghost&quot;>Default</v-chip>
<v-chip class=&quot;variant-ghost-surface&quot;>Surface</v-chip>
<v-chip class=&quot;variant-ghost-primary&quot;>Primary</v-chip>
<v-chip class=&quot;variant-ghost-secondary&quot;>Secondary</v-chip>
<v-chip class=&quot;variant-ghost-tertiary&quot;>Tertiary</v-chip>
<v-chip class=&quot;variant-ghost-success&quot;>Success</v-chip>
<v-chip class=&quot;variant-ghost-warning&quot;>Warning</v-chip>
<v-chip class=&quot;variant-ghost-error&quot;>Error</v-chip>`"
          />
        </template>
      </v-preview>
    </section>

    <h4>Soft</h4>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap gap-2">
            <v-chip class="variant-soft">Default</v-chip>
            <v-chip class="variant-soft-surface">Surface</v-chip>
            <v-chip class="variant-soft-primary">Primary</v-chip>
            <v-chip class="variant-soft-secondary">Secondary</v-chip>
            <v-chip class="variant-soft-tertiary">Tertiary</v-chip>
            <v-chip class="variant-soft-success">Success</v-chip>
            <v-chip class="variant-soft-warning">Warning</v-chip>
            <v-chip class="variant-soft-error">Error</v-chip>
          </div>
        </template>
        <template v-slot:source>
          <v-code-block
            language="html"
            :code="`<v-chip class=&quot;variant-soft&quot;>Default</v-chip>
<v-chip class=&quot;variant-soft-surface&quot;>Surface</v-chip>
<v-chip class=&quot;variant-soft-primary&quot;>Primary</v-chip>
<v-chip class=&quot;variant-soft-secondary&quot;>Secondary</v-chip>
<v-chip class=&quot;variant-soft-tertiary&quot;>Tertiary</v-chip>
<v-chip class=&quot;variant-soft-success&quot;>Success</v-chip>
<v-chip class=&quot;variant-soft-warning&quot;>Warning</v-chip>
<v-chip class=&quot;variant-soft-error&quot;>Error</v-chip>`"
          />
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
            <v-chip class="variant-glass text-white/75">Default</v-chip>
            <v-chip class="variant-glass-surface text-white/75">Surface</v-chip>
            <v-chip class="variant-glass-primary text-white/75">Primary</v-chip>
            <v-chip class="variant-glass-secondary text-white/75">Secondary</v-chip>
            <v-chip class="variant-glass-tertiary text-white/75">Tertiary</v-chip>
            <v-chip class="variant-glass-success text-white/75">Success</v-chip>
            <v-chip class="variant-glass-warning text-white/75">Warning</v-chip>
            <v-chip class="variant-glass-error text-white/75">Error</v-chip>
          </div>
        </template>
        <template v-slot:footer>
          <div class="flex items-center justify-center">
            <a target="_blank" href="https://www.markferrari.com/"> Image Source </a>
          </div>
        </template>

        <template v-slot:source>
          <v-code-block language="html" :code="glassExample" />
        </template>
      </v-preview>
    </section>
  </div>
</template>
