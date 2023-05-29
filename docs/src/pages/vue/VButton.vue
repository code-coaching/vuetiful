<script setup lang="ts">
import { VButton, VCodeBlock, VPreview } from '@code-coaching/vuetiful';

const glassExample = `<v-button class="variant-glass text-white/75">Default</v-button>
<v-button class="variant-glass-surface text-white/75">Surface</v-button>
<v-button class="variant-glass-primary text-white/75">Primary</v-button>
<v-button class="variant-glass-secondary text-white/75">Secondary</v-button>
<v-button class="variant-glass-tertiary text-white/75">Tertiary</v-button>
<v-button class="variant-glass-success text-white/75">Success</v-button>
<v-button class="variant-glass-warning text-white/75">Warning</v-button>
<v-button class="variant-glass-error text-white/75">Error</v-button>`;
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VButton</h1>
    <section class="section">
      <v-code-block language="ts" :code="`import { VButton } from '@code-coaching/vuetiful`" />
    </section>

    <h2>Usage</h2>

    <h3>Accessibility</h3>
    <section class="section">
      <h4>Keyboard Interaction</h4>
      <section class="section">
        <p><kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>: Move focus to and from button.</p>
        <p><kbd>Space</kbd> and <kbd>Enter</kbd>: Execute the action coupled to the button.</p>
      </section>

      <h4>Label</h4>
      <v-preview>
        <template v-slot:preview>
          <v-button class="variant-filled" aria-label="menu">John Duck</v-button>
        </template>
        <template v-slot:source>
          <v-code-block
            class="mb-2"
            language="html"
            :code="`<v-button class=&quot;variant-filled&quot; aria-label=&quot;menu&quot;>John Duck</v-button>`"
          />
          <p>
            By default the accessibility label is the same as the button text. If you want to change the accessibility
            label, you can use the
            <code>aria-label</code> attribute.
          </p>
        </template>
      </v-preview>
    </section>

    <h3>Sizes</h3>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap items-start gap-2">
            <v-button class="variant-filled btn-sm">sm</v-button>
            <v-button class="variant-filled">default</v-button>
            <v-button class="variant-filled btn-lg">lg</v-button>
            <v-button class="variant-filled btn-xl">xl</v-button>
          </div>
        </template>
        <template v-slot:source>
          <v-code-block
            language="html"
            :code="`<v-button class=&quot;variant-filled btn-sm&quot;>sm</v-button>
<v-button class=&quot;variant-filled&quot;>default</v-button>
<v-button class=&quot;variant-filled btn-lg&quot;>lg</v-button>
<v-button class=&quot;variant-filled btn-xl&quot;>xl</v-button>`"
          />
        </template>
      </v-preview>
    </section>

    <h3>Variants</h3>
    <h4>Filled</h4>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap gap-2">
            <v-button class="variant-filled">Default</v-button>
            <v-button class="variant-filled-surface">Surface</v-button>
            <v-button class="variant-filled-primary">Primary</v-button>
            <v-button class="variant-filled-secondary">Secondary</v-button>
            <v-button class="variant-filled-tertiary">Tertiary</v-button>
            <v-button class="variant-filled-success">Success</v-button>
            <v-button class="variant-filled-warning">Warning</v-button>
            <v-button class="variant-filled-error">Error</v-button>
          </div>
        </template>
        <template v-slot:source>
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
        </template>
      </v-preview>
    </section>

    <h4>Ringed</h4>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap gap-2">
            <v-button class="variant-ringed">Default</v-button>
            <v-button class="variant-ringed-surface">Surface</v-button>
            <v-button class="variant-ringed-primary">Primary</v-button>
            <v-button class="variant-ringed-secondary">Secondary</v-button>
            <v-button class="variant-ringed-tertiary">Tertiary</v-button>
            <v-button class="variant-ringed-success">Success</v-button>
            <v-button class="variant-ringed-warning">Warning</v-button>
            <v-button class="variant-ringed-error">Error</v-button>
          </div>
        </template>
        <template v-slot:source>
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
        </template>
      </v-preview>
    </section>

    <h4>Ghost</h4>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap gap-2">
            <v-button class="variant-ghost">Default</v-button>
            <v-button class="variant-ghost-surface">Surface</v-button>
            <v-button class="variant-ghost-primary">Primary</v-button>
            <v-button class="variant-ghost-secondary">Secondary</v-button>
            <v-button class="variant-ghost-tertiary">Tertiary</v-button>
            <v-button class="variant-ghost-success">Success</v-button>
            <v-button class="variant-ghost-warning">Warning</v-button>
            <v-button class="variant-ghost-error">Error</v-button>
          </div>
        </template>
        <template v-slot:source>
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
        </template>
      </v-preview>
    </section>

    <h4>Soft</h4>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap gap-2">
            <v-button class="variant-soft">Default</v-button>
            <v-button class="variant-soft-surface">Surface</v-button>
            <v-button class="variant-soft-primary">Primary</v-button>
            <v-button class="variant-soft-secondary">Secondary</v-button>
            <v-button class="variant-soft-tertiary">Tertiary</v-button>
            <v-button class="variant-soft-success">Success</v-button>
            <v-button class="variant-soft-warning">Warning</v-button>
            <v-button class="variant-soft-error">Error</v-button>
          </div>
        </template>
        <template v-slot:source>
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
            <v-button class="variant-glass text-white/75">Default</v-button>
            <v-button class="variant-glass-surface text-white/75">Surface</v-button>
            <v-button class="variant-glass-primary text-white/75">Primary</v-button>
            <v-button class="variant-glass-secondary text-white/75">Secondary</v-button>
            <v-button class="variant-glass-tertiary text-white/75">Tertiary</v-button>
            <v-button class="variant-glass-success text-white/75">Success</v-button>
            <v-button class="variant-glass-warning text-white/75">Warning</v-button>
            <v-button class="variant-glass-error text-white/75">Error</v-button>
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
