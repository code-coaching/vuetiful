<script setup lang="ts">
import { CodeBlock, VBadge } from '@code-coaching/vuetiful';
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VBadge</h1>
    <CodeBlock language="ts" :code="`import { VBadge } from '@code-coaching/vuetiful`" />

    <h2>Usage</h2>
    <div class="mb-2 flex flex-wrap items-start gap-2">
      <v-badge class="variant-filled">default</v-badge>
    </div>
    <CodeBlock language="html" :code="`<v-badge class=&quot;variant-filled&quot;>default</v-badge>`" />

    <h3>Variants</h3>
    <h4>Outline</h4>
    <div class="mb-2 flex flex-wrap gap-2">
      <v-badge class="variant-outline">Default</v-badge>
      <v-badge class="variant-outline-surface">Surface</v-badge>
      <v-badge class="variant-outline-primary">Primary</v-badge>
      <v-badge class="variant-outline-secondary">Secondary</v-badge>
      <v-badge class="variant-outline-tertiary">Tertiary</v-badge>
      <v-badge class="variant-outline-success">Success</v-badge>
      <v-badge class="variant-outline-warning">Warning</v-badge>
      <v-badge class="variant-outline-error">Error</v-badge>
    </div>
    <CodeBlock
      language="html"
      :code="`<v-badge class=&quot;variant-outline&quot;>Default</v-badge>
<v-badge class=&quot;variant-outline-surface&quot;>Surface</v-badge>
<v-badge class=&quot;variant-outline-primary&quot;>Primary</v-badge>
<v-badge class=&quot;variant-outline-secondary&quot;>Secondary</v-badge>
<v-badge class=&quot;variant-outline-tertiary&quot;>Tertiary</v-badge>
<v-badge class=&quot;variant-outline-success&quot;>Success</v-badge>
<v-badge class=&quot;variant-outline-warning&quot;>Warning</v-badge>
<v-badge class=&quot;variant-outline-error&quot;>Error</v-badge>`"
    />

    <h4>Filled</h4>
    <div class="mb-2 flex flex-wrap gap-2">
      <v-badge class="variant-filled">Default</v-badge>
      <v-badge class="variant-filled-surface">Surface</v-badge>
      <v-badge class="variant-filled-primary">Primary</v-badge>
      <v-badge class="variant-filled-secondary">Secondary</v-badge>
      <v-badge class="variant-filled-tertiary">Tertiary</v-badge>
      <v-badge class="variant-filled-success">Success</v-badge>
      <v-badge class="variant-filled-warning">Warning</v-badge>
      <v-badge class="variant-filled-error">Error</v-badge>
    </div>
    <CodeBlock
      language="html"
      :code="`<v-badge class=&quot;variant-filled&quot;>Default</v-badge>
<v-badge class=&quot;variant-filled-surface&quot;>Surface</v-badge>
<v-badge class=&quot;variant-filled-primary&quot;>Primary</v-badge>
<v-badge class=&quot;variant-filled-secondary&quot;>Secondary</v-badge>
<v-badge class=&quot;variant-filled-tertiary&quot;>Tertiary</v-badge>
<v-badge class=&quot;variant-filled-success&quot;>Success</v-badge>
<v-badge class=&quot;variant-filled-warning&quot;>Warning</v-badge>
<v-badge class=&quot;variant-filled-error&quot;>Error</v-badge>`"
    />

    <h4>Ringed</h4>
    <div class="mb-2 flex flex-wrap gap-2">
      <v-badge class="variant-ringed">Default</v-badge>
      <v-badge class="variant-ringed-surface">Surface</v-badge>
      <v-badge class="variant-ringed-primary">Primary</v-badge>
      <v-badge class="variant-ringed-secondary">Secondary</v-badge>
      <v-badge class="variant-ringed-tertiary">Tertiary</v-badge>
      <v-badge class="variant-ringed-success">Success</v-badge>
      <v-badge class="variant-ringed-warning">Warning</v-badge>
      <v-badge class="variant-ringed-error">Error</v-badge>
    </div>
    <CodeBlock
      language="html"
      :code="`<v-badge class=&quot;variant-ringed&quot;>Default</v-badge>
<v-badge class=&quot;variant-ringed-surface&quot;>Surface</v-badge>
<v-badge class=&quot;variant-ringed-primary&quot;>Primary</v-badge>
<v-badge class=&quot;variant-ringed-secondary&quot;>Secondary</v-badge>
<v-badge class=&quot;variant-ringed-tertiary&quot;>Tertiary</v-badge>
<v-badge class=&quot;variant-ringed-success&quot;>Success</v-badge>
<v-badge class=&quot;variant-ringed-warning&quot;>Warning</v-badge>
<v-badge class=&quot;variant-ringed-error&quot;>Error</v-badge>`"
    />

    <h4>Ghost</h4>
    <div class="mb-2 flex flex-wrap gap-2">
      <v-badge class="variant-ghost">Default</v-badge>
      <v-badge class="variant-ghost-surface">Surface</v-badge>
      <v-badge class="variant-ghost-primary">Primary</v-badge>
      <v-badge class="variant-ghost-secondary">Secondary</v-badge>
      <v-badge class="variant-ghost-tertiary">Tertiary</v-badge>
      <v-badge class="variant-ghost-success">Success</v-badge>
      <v-badge class="variant-ghost-warning">Warning</v-badge>
      <v-badge class="variant-ghost-error">Error</v-badge>
    </div>
    <CodeBlock
      language="html"
      :code="`<v-badge class=&quot;variant-ghost&quot;>Default</v-badge>
<v-badge class=&quot;variant-ghost-surface&quot;>Surface</v-badge>
<v-badge class=&quot;variant-ghost-primary&quot;>Primary</v-badge>
<v-badge class=&quot;variant-ghost-secondary&quot;>Secondary</v-badge>
<v-badge class=&quot;variant-ghost-tertiary&quot;>Tertiary</v-badge>
<v-badge class=&quot;variant-ghost-success&quot;>Success</v-badge>
<v-badge class=&quot;variant-ghost-warning&quot;>Warning</v-badge>
<v-badge class=&quot;variant-ghost-error&quot;>Error</v-badge>`"
    />

    <h4>Soft</h4>
    <div class="mb-2 flex flex-wrap gap-2">
      <v-badge class="variant-soft">Default</v-badge>
      <v-badge class="variant-soft-surface">Surface</v-badge>
      <v-badge class="variant-soft-primary">Primary</v-badge>
      <v-badge class="variant-soft-secondary">Secondary</v-badge>
      <v-badge class="variant-soft-tertiary">Tertiary</v-badge>
      <v-badge class="variant-soft-success">Success</v-badge>
      <v-badge class="variant-soft-warning">Warning</v-badge>
      <v-badge class="variant-soft-error">Error</v-badge>
    </div>
    <CodeBlock
      language="html"
      :code="`<v-badge class=&quot;variant-soft&quot;>Default</v-badge>
<v-badge class=&quot;variant-soft-surface&quot;>Surface</v-badge>
<v-badge class=&quot;variant-soft-primary&quot;>Primary</v-badge>
<v-badge class=&quot;variant-soft-secondary&quot;>Secondary</v-badge>
<v-badge class=&quot;variant-soft-tertiary&quot;>Tertiary</v-badge>
<v-badge class=&quot;variant-soft-success&quot;>Success</v-badge>
<v-badge class=&quot;variant-soft-warning&quot;>Warning</v-badge>
<v-badge class=&quot;variant-soft-error&quot;>Error</v-badge>`"
    />

    <h4>Glass</h4>
    <div class="mb-2 flex flex-wrap gap-2">
      <v-badge class="variant-glass">Default</v-badge>
      <v-badge class="variant-glass-surface">Surface</v-badge>
      <v-badge class="variant-glass-primary">Primary</v-badge>
      <v-badge class="variant-glass-secondary">Secondary</v-badge>
      <v-badge class="variant-glass-tertiary">Tertiary</v-badge>
      <v-badge class="variant-glass-success">Success</v-badge>
      <v-badge class="variant-glass-warning">Warning</v-badge>
      <v-badge class="variant-glass-error">Error</v-badge>
    </div>
    <CodeBlock
      language="html"
      :code="`<v-badge class=&quot;variant-glass&quot;>Default</v-badge>
<v-badge class=&quot;variant-glass-surface&quot;>Surface</v-badge>
<v-badge class=&quot;variant-glass-primary&quot;>Primary</v-badge>
<v-badge class=&quot;variant-glass-secondary&quot;>Secondary</v-badge>
<v-badge class=&quot;variant-glass-tertiary&quot;>Tertiary</v-badge>
<v-badge class=&quot;variant-glass-success&quot;>Success</v-badge>
<v-badge class=&quot;variant-glass-warning&quot;>Warning</v-badge>
<v-badge class=&quot;variant-glass-error&quot;>Error</v-badge>`"
    />
  </div>
</template>