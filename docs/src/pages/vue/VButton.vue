<script setup lang="ts">
import { VButton, VCodeBlock } from '@code-coaching/vuetiful';
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VButton</h1>
    <v-code-block language="ts" :code="`import { VButton } from '@code-coaching/vuetiful`" />

    <h2>Accessibility</h2>
    <p>
      The VButton component implements the
      <a href="https://www.w3.org/WAI/ARIA/apg/patterns/button/">WAI-ARAI button pattern</a>. This means that the
      component is accessible by default.
    </p>

    <p>
      By default the accessibility label is the same as the button text. If you want to change the accessibility label,
      you can use the
      <code>aria-label</code> attribute.
    </p>

    <p>Keyboard users can use the <code>Enter</code> or <code>Space</code> key to activate the button.</p>

    <v-code-block language="html" :code="`<v-button aria-label=&quot;Menu&quot;>John Duck</v-button>`" />

    <h2>Usage</h2>
    <h3>Sizes</h3>
    <div class="mb-2 flex flex-wrap items-start gap-2">
      <v-button class="variant-filled btn-sm">sm</v-button>
      <v-button class="variant-filled">default</v-button>
      <v-button class="variant-filled btn-lg">lg</v-button>
      <v-button class="variant-filled btn-xl">xl</v-button>
    </div>
    <v-code-block
      language="html"
      :code="`<v-button class=&quot;variant-filled btn-sm&quot;>sm</v-button>
<v-button class=&quot;variant-filled&quot;>default</v-button>
<v-button class=&quot;variant-filled btn-lg&quot;>lg</v-button>
<v-button class=&quot;variant-filled btn-xl&quot;>xl</v-button>`"
    />

    <h3>Variants</h3>
    <h4>Filled</h4>
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
    <v-code-block
      language="html"
      :code="`<v-button class=&quot;variant-filled&quot;>Default</v-button>
<v-button class=&quot;variant-filled-surface&quot;>Surface</v-button>
<v-button class=&quot;variant-filled-primary&quot;>Primary</v-button>
<v-button class=&quot;variant-filled-secondary&quot;>Secondary</v-button>
<v-button class=&quot;variant-filled-tertiary&quot;>Tertiary</v-button>
<v-button class=&quot;variant-filled-success&quot;>Success</v-button>
<v-button class=&quot;variant-filled-warning&quot;>Warning</v-button>
<v-button class=&quot;variant-filled-error&quot;>Error</v-button>`"
    />

    <h4>Ringed</h4>
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
    <v-code-block
      language="html"
      :code="`<v-button class=&quot;variant-ringed&quot;>Default</v-button>
<v-button class=&quot;variant-ringed-surface&quot;>Surface</v-button>
<v-button class=&quot;variant-ringed-primary&quot;>Primary</v-button>
<v-button class=&quot;variant-ringed-secondary&quot;>Secondary</v-button>
<v-button class=&quot;variant-ringed-tertiary&quot;>Tertiary</v-button>
<v-button class=&quot;variant-ringed-success&quot;>Success</v-button>
<v-button class=&quot;variant-ringed-warning&quot;>Warning</v-button>
<v-button class=&quot;variant-ringed-error&quot;>Error</v-button>`"
    />

    <h4>Ghost</h4>
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
    <v-code-block
      language="html"
      :code="`<v-button class=&quot;variant-ghost&quot;>Default</v-button>
<v-button class=&quot;variant-ghost-surface&quot;>Surface</v-button>
<v-button class=&quot;variant-ghost-primary&quot;>Primary</v-button>
<v-button class=&quot;variant-ghost-secondary&quot;>Secondary</v-button>
<v-button class=&quot;variant-ghost-tertiary&quot;>Tertiary</v-button>
<v-button class=&quot;variant-ghost-success&quot;>Success</v-button>
<v-button class=&quot;variant-ghost-warning&quot;>Warning</v-button>
<v-button class=&quot;variant-ghost-error&quot;>Error</v-button>`"
    />

    <h4>Soft</h4>
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
    <v-code-block
      language="html"
      :code="`<v-button class=&quot;variant-soft&quot;>Default</v-button>
<v-button class=&quot;variant-soft-surface&quot;>Surface</v-button>
<v-button class=&quot;variant-soft-primary&quot;>Primary</v-button>
<v-button class=&quot;variant-soft-secondary&quot;>Secondary</v-button>
<v-button class=&quot;variant-soft-tertiary&quot;>Tertiary</v-button>
<v-button class=&quot;variant-soft-success&quot;>Success</v-button>
<v-button class=&quot;variant-soft-warning&quot;>Warning</v-button>
<v-button class=&quot;variant-soft-error&quot;>Error</v-button>`"
    />

    <h4>Glass</h4>
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
    <v-code-block
      language="html"
      :code="`<v-button class=&quot;variant-glass&quot;>Default</v-button>
<v-button class=&quot;variant-glass-surface&quot;>Surface</v-button>
<v-button class=&quot;variant-glass-primary&quot;>Primary</v-button>
<v-button class=&quot;variant-glass-secondary&quot;>Secondary</v-button>
<v-button class=&quot;variant-glass-tertiary&quot;>Tertiary</v-button>
<v-button class=&quot;variant-glass-success&quot;>Success</v-button>
<v-button class=&quot;variant-glass-warning&quot;>Warning</v-button>
<v-button class=&quot;variant-glass-error&quot;>Error</v-button>`"
    />
  </div>
</template>
