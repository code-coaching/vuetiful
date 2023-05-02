<script setup lang="ts">
import { VChip, VCodeBlock } from '@code-coaching/vuetiful';
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VChip</h1>
    <section class="section">
      <v-code-block language="ts" :code="`import { VChip } from '@code-coaching/vuetiful`" />
    </section>

    <h2>Usage</h2>
    <section class="section">
      <div class="mb-4 flex flex-wrap items-start gap-2">
        <v-chip class="variant-filled">default</v-chip>
      </div>
      <v-code-block language="html" :code="`<v-chip class=&quot;variant-filled&quot;>default</v-chip>`" />
    </section>

    <h3>Variants</h3>
    <h4>Filled</h4>
    <section class="section">
      <div class="mb-4 flex flex-wrap gap-2">
        <v-chip class="variant-filled">Default</v-chip>
        <v-chip class="variant-filled-surface">Surface</v-chip>
        <v-chip class="variant-filled-primary">Primary</v-chip>
        <v-chip class="variant-filled-secondary">Secondary</v-chip>
        <v-chip class="variant-filled-tertiary">Tertiary</v-chip>
        <v-chip class="variant-filled-success">Success</v-chip>
        <v-chip class="variant-filled-warning">Warning</v-chip>
        <v-chip class="variant-filled-error">Error</v-chip>
      </div>
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
    </section>

    <h4>Ringed</h4>
    <section class="section">
      <div class="mb-4 flex flex-wrap gap-2">
        <v-chip class="variant-ringed">Default</v-chip>
        <v-chip class="variant-ringed-surface">Surface</v-chip>
        <v-chip class="variant-ringed-primary">Primary</v-chip>
        <v-chip class="variant-ringed-secondary">Secondary</v-chip>
        <v-chip class="variant-ringed-tertiary">Tertiary</v-chip>
        <v-chip class="variant-ringed-success">Success</v-chip>
        <v-chip class="variant-ringed-warning">Warning</v-chip>
        <v-chip class="variant-ringed-error">Error</v-chip>
      </div>
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
    </section>

    <h4>Ghost</h4>
    <section class="section">
      <div class="mb-4 flex flex-wrap gap-2">
        <v-chip class="variant-ghost">Default</v-chip>
        <v-chip class="variant-ghost-surface">Surface</v-chip>
        <v-chip class="variant-ghost-primary">Primary</v-chip>
        <v-chip class="variant-ghost-secondary">Secondary</v-chip>
        <v-chip class="variant-ghost-tertiary">Tertiary</v-chip>
        <v-chip class="variant-ghost-success">Success</v-chip>
        <v-chip class="variant-ghost-warning">Warning</v-chip>
        <v-chip class="variant-ghost-error">Error</v-chip>
      </div>
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
    </section>

    <h4>Soft</h4>
    <section class="section">
      <div class="mb-4 flex flex-wrap gap-2">
        <v-chip class="variant-soft">Default</v-chip>
        <v-chip class="variant-soft-surface">Surface</v-chip>
        <v-chip class="variant-soft-primary">Primary</v-chip>
        <v-chip class="variant-soft-secondary">Secondary</v-chip>
        <v-chip class="variant-soft-tertiary">Tertiary</v-chip>
        <v-chip class="variant-soft-success">Success</v-chip>
        <v-chip class="variant-soft-warning">Warning</v-chip>
        <v-chip class="variant-soft-error">Error</v-chip>
      </div>
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
    </section>

    <h4>Glass</h4>
    <section class="section">
      <div class="mb-4 flex flex-wrap gap-2">
        <v-chip class="variant-glass">Default</v-chip>
        <v-chip class="variant-glass-surface">Surface</v-chip>
        <v-chip class="variant-glass-primary">Primary</v-chip>
        <v-chip class="variant-glass-secondary">Secondary</v-chip>
        <v-chip class="variant-glass-tertiary">Tertiary</v-chip>
        <v-chip class="variant-glass-success">Success</v-chip>
        <v-chip class="variant-glass-warning">Warning</v-chip>
        <v-chip class="variant-glass-error">Error</v-chip>
      </div>
      <v-code-block
        language="html"
        :code="`<v-chip class=&quot;variant-glass&quot;>Default</v-chip>
  <v-chip class=&quot;variant-glass-surface&quot;>Surface</v-chip>
  <v-chip class=&quot;variant-glass-primary&quot;>Primary</v-chip>
  <v-chip class=&quot;variant-glass-secondary&quot;>Secondary</v-chip>
  <v-chip class=&quot;variant-glass-tertiary&quot;>Tertiary</v-chip>
  <v-chip class=&quot;variant-glass-success&quot;>Success</v-chip>
  <v-chip class=&quot;variant-glass-warning&quot;>Warning</v-chip>
  <v-chip class=&quot;variant-glass-error&quot;>Error</v-chip>`"
      />
    </section>
  </div>
</template>
