<script setup lang="ts">
import { CodeBlock, VButton } from '@code-coaching/vuetiful';
</script>

<template>
  <div class="p-4">
    <h1>VButton</h1>

    <h2>Usage</h2>
    <h3>Import</h3>
    <CodeBlock
      language="ts"
      :code="`import { VButton } from '@code-coaching/vuetiful`"
    />
    <h3>Register</h3>
    <p>In case of not using <code>&lt;script setup&gt;</code></p>
    <CodeBlock
      language="ts"
      :code="`// ...
setup() {
  // ...
  components: {
    VButton,
  },
  // ...
}
// ...`"
    />

    <h2>Sizes</h2>
    <div class="mb-2 flex flex-wrap items-start gap-2">
      <v-button class="variant-filled btn-sm">sm</v-button>
      <v-button class="variant-filled">default</v-button>
      <v-button class="variant-filled btn-lg">lg</v-button>
      <v-button class="variant-filled btn-xl">xl</v-button>
    </div>
    <CodeBlock
      language="html"
      :code="`<v-button class=&quot;variant-filled btn-sm&quot;>sm</v-button>
<v-button class=&quot;variant-filled&quot;>default</v-button>
<v-button class=&quot;variant-filled btn-lg&quot;>lg</v-button>
<v-button class=&quot;variant-filled btn-xl&quot;>xl</v-button>`"
    />

    <h2>Variants</h2>
    <h3>Outline</h3>
    <div class="mb-2 flex flex-wrap gap-2">
      <v-button class="variant-outline">Default</v-button>
      <v-button class="variant-outline-surface">Surface</v-button>
      <v-button class="variant-outline-primary">Primary</v-button>
      <v-button class="variant-outline-secondary">Secondary</v-button>
      <v-button class="variant-outline-tertiary">Tertiary</v-button>
      <v-button class="variant-outline-success">Success</v-button>
      <v-button class="variant-outline-warning">Warning</v-button>
      <v-button class="variant-outline-error">Error</v-button>
    </div>
    <CodeBlock
      language="html"
      :code="`<v-button class=&quot;variant-outline&quot;>Default</v-button>
<v-button class=&quot;variant-outline-surface&quot;>Surface</v-button>
<v-button class=&quot;variant-outline-primary&quot;>Primary</v-button>
<v-button class=&quot;variant-outline-secondary&quot;>Secondary</v-button>
<v-button class=&quot;variant-outline-tertiary&quot;>Tertiary</v-button>
<v-button class=&quot;variant-outline-success&quot;>Success</v-button>
<v-button class=&quot;variant-outline-warning&quot;>Warning</v-button>
<v-button class=&quot;variant-outline-error&quot;>Error</v-button>
    `"
    />

    <h3>Filled</h3>
    <div class="mb-2 flex flex-wrap gap-2">
      <v-button class="variant-filled">Default</v-button>
      <v-button class="variant-filled-surface">Surface</v-button>
      <v-button class="variant-filled-primary">Primary</v-button>
      <v-button class="variant-filled-secondary">Secondary</v-button>
      <v-button class="variant-filled-tertiary">Tertiary</v-button>
      <v-button class="variant-filled-success">Success</v-button>
      <v-button class="variant-filled-warning">Warning</v-button>
      <v-button class="variant-filled-error">Error</v-button>
    </div>
    <CodeBlock
      language="html"
      :code="`<v-button class=&quot;variant-filled&quot;>Default</v-button>
<v-button class=&quot;variant-filled-surface&quot;>Surface</v-button>
<v-button class=&quot;variant-filled-primary&quot;>Primary</v-button>
<v-button class=&quot;variant-filled-secondary&quot;>Secondary</v-button>
<v-button class=&quot;variant-filled-tertiary&quot;>Tertiary</v-button>
<v-button class=&quot;variant-filled-success&quot;>Success</v-button>
<v-button class=&quot;variant-filled-warning&quot;>Warning</v-button>
<v-button class=&quot;variant-filled-error&quot;>Error</v-button>
    `"
    />

    <h3>Ringed</h3>
    <div class="mb-2 flex flex-wrap gap-2">
      <v-button class="variant-ringed">Default</v-button>
      <v-button class="variant-ringed-surface">Surface</v-button>
      <v-button class="variant-ringed-primary">Primary</v-button>
      <v-button class="variant-ringed-secondary">Secondary</v-button>
      <v-button class="variant-ringed-tertiary">Tertiary</v-button>
      <v-button class="variant-ringed-success">Success</v-button>
      <v-button class="variant-ringed-warning">Warning</v-button>
      <v-button class="variant-ringed-error">Error</v-button>
    </div>
    <CodeBlock
      language="html"
      :code="`<v-button class=&quot;variant-ringed&quot;>Default</v-button>
<v-button class=&quot;variant-ringed-surface&quot;>Surface</v-button>
<v-button class=&quot;variant-ringed-primary&quot;>Primary</v-button>
<v-button class=&quot;variant-ringed-secondary&quot;>Secondary</v-button>
<v-button class=&quot;variant-ringed-tertiary&quot;>Tertiary</v-button>
<v-button class=&quot;variant-ringed-success&quot;>Success</v-button>
<v-button class=&quot;variant-ringed-warning&quot;>Warning</v-button>
<v-button class=&quot;variant-ringed-error&quot;>Error</v-button>
    `"
    />

    <h3>Ghost</h3>
    <div class="mb-2 flex flex-wrap gap-2">
      <v-button class="variant-ghost">Default</v-button>
      <v-button class="variant-ghost-surface">Surface</v-button>
      <v-button class="variant-ghost-primary">Primary</v-button>
      <v-button class="variant-ghost-secondary">Secondary</v-button>
      <v-button class="variant-ghost-tertiary">Tertiary</v-button>
      <v-button class="variant-ghost-success">Success</v-button>
      <v-button class="variant-ghost-warning">Warning</v-button>
      <v-button class="variant-ghost-error">Error</v-button>
    </div>
    <CodeBlock
      language="html"
      :code="`<v-button class=&quot;variant-ghost&quot;>Default</v-button>
<v-button class=&quot;variant-ghost-surface&quot;>Surface</v-button>
<v-button class=&quot;variant-ghost-primary&quot;>Primary</v-button>
<v-button class=&quot;variant-ghost-secondary&quot;>Secondary</v-button>
<v-button class=&quot;variant-ghost-tertiary&quot;>Tertiary</v-button>
<v-button class=&quot;variant-ghost-success&quot;>Success</v-button>
<v-button class=&quot;variant-ghost-warning&quot;>Warning</v-button>
<v-button class=&quot;variant-ghost-error&quot;>Error</v-button>
    `"
    />

    <h3>Soft</h3>
    <div class="mb-2 flex flex-wrap gap-2">
      <v-button class="variant-soft">Default</v-button>
      <v-button class="variant-soft-surface">Surface</v-button>
      <v-button class="variant-soft-primary">Primary</v-button>
      <v-button class="variant-soft-secondary">Secondary</v-button>
      <v-button class="variant-soft-tertiary">Tertiary</v-button>
      <v-button class="variant-soft-success">Success</v-button>
      <v-button class="variant-soft-warning">Warning</v-button>
      <v-button class="variant-soft-error">Error</v-button>
    </div>
    <CodeBlock
      language="html"
      :code="`<v-button class=&quot;variant-soft&quot;>Default</v-button>
<v-button class=&quot;variant-soft-surface&quot;>Surface</v-button>
<v-button class=&quot;variant-soft-primary&quot;>Primary</v-button>
<v-button class=&quot;variant-soft-secondary&quot;>Secondary</v-button>
<v-button class=&quot;variant-soft-tertiary&quot;>Tertiary</v-button>
<v-button class=&quot;variant-soft-success&quot;>Success</v-button>
<v-button class=&quot;variant-soft-warning&quot;>Warning</v-button>
<v-button class=&quot;variant-soft-error&quot;>Error</v-button>
    `"
    />

    <h3>Glass</h3>
    <div class="mb-2 flex flex-wrap gap-2">
      <v-button class="variant-glass">Default</v-button>
      <v-button class="variant-glass-surface">Surface</v-button>
      <v-button class="variant-glass-primary">Primary</v-button>
      <v-button class="variant-glass-secondary">Secondary</v-button>
      <v-button class="variant-glass-tertiary">Tertiary</v-button>
      <v-button class="variant-glass-success">Success</v-button>
      <v-button class="variant-glass-warning">Warning</v-button>
      <v-button class="variant-glass-error">Error</v-button>
    </div>
    <CodeBlock
      language="html"
      :code="`<v-button class=&quot;variant-glass&quot;>Default</v-button>
<v-button class=&quot;variant-glass-surface&quot;>Surface</v-button>
<v-button class=&quot;variant-glass-primary&quot;>Primary</v-button>
<v-button class=&quot;variant-glass-secondary&quot;>Secondary</v-button>
<v-button class=&quot;variant-glass-tertiary&quot;>Tertiary</v-button>
<v-button class=&quot;variant-glass-success&quot;>Success</v-button>
<v-button class=&quot;variant-glass-warning&quot;>Warning</v-button>
<v-button class=&quot;variant-glass-error&quot;>Error</v-button>
    `"
    />
  </div>
</template>

<style scoped>
h2,
h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>
