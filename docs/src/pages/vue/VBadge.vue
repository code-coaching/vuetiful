<script setup lang="ts">
import { VBadge, VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';
import { AlertUnstyled } from 'src/components';

const filled = `<v-badge class="variant-filled">Default</v-badge>
<v-badge class="variant-filled-surface">Surface</v-badge>
<v-badge class="variant-filled-primary">Primary</v-badge>
<v-badge class="variant-filled-secondary">Secondary</v-badge>
<v-badge class="variant-filled-tertiary">Tertiary</v-badge>
<v-badge class="variant-filled-success">Success</v-badge>
<v-badge class="variant-filled-warning">Warning</v-badge>
<v-badge class="variant-filled-error">Error</v-badge>`;
const ringed = `<v-badge class="variant-ringed">Default</v-badge>
<v-badge class="variant-ringed-surface">Surface</v-badge>
<v-badge class="variant-ringed-primary">Primary</v-badge>
<v-badge class="variant-ringed-secondary">Secondary</v-badge>
<v-badge class="variant-ringed-tertiary">Tertiary</v-badge>
<v-badge class="variant-ringed-success">Success</v-badge>
<v-badge class="variant-ringed-warning">Warning</v-badge>
<v-badge class="variant-ringed-error">Error</v-badge>`;
const ghost = `<v-badge class="variant-ghost">Default</v-badge>
<v-badge class="variant-ghost-surface">Surface</v-badge>
<v-badge class="variant-ghost-primary">Primary</v-badge>
<v-badge class="variant-ghost-secondary">Secondary</v-badge>
<v-badge class="variant-ghost-tertiary">Tertiary</v-badge>
<v-badge class="variant-ghost-success">Success</v-badge>
<v-badge class="variant-ghost-warning">Warning</v-badge>
<v-badge class="variant-ghost-error">Error</v-badge>`;
const soft = `<v-badge class="variant-soft">Default</v-badge>
<v-badge class="variant-soft-surface">Surface</v-badge>
<v-badge class="variant-soft-primary">Primary</v-badge>
<v-badge class="variant-soft-secondary">Secondary</v-badge>
<v-badge class="variant-soft-tertiary">Tertiary</v-badge>
<v-badge class="variant-soft-success">Success</v-badge>
<v-badge class="variant-soft-warning">Warning</v-badge>
<v-badge class="variant-soft-error">Error</v-badge>`;
const glass = `<v-badge class="variant-glass text-white/75">Default</v-badge>
<v-badge class="variant-glass-surface text-white/75">Surface</v-badge>
<v-badge class="variant-glass-primary text-white/75">Primary</v-badge>
<v-badge class="variant-glass-secondary text-white/75">Secondary</v-badge>
<v-badge class="variant-glass-tertiary text-white/75">Tertiary</v-badge>
<v-badge class="variant-glass-success text-white/75">Success</v-badge>
<v-badge class="variant-glass-warning text-white/75">Warning</v-badge>
<v-badge class="variant-glass-error text-white/75">Error</v-badge>`;
const unstyledTemplate = '<v-badge unstyled>Unstyled</v-badge>';
const unstyledCustomTemplate = '<v-badge unstyled class="bg-blue-600 p-1 text-white">Custom</v-badge>';
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VBadge</h1>
    <section class="section">
      <v-code-block language="ts" :code="`import { VBadge } from '@code-coaching/vuetiful`" />
    </section>

    <v-tabs class-panels="py-4 md:py-10">
      <template v-slot:tabs>
        <v-tab>Usage</v-tab>
        <v-tab>Unstyled</v-tab>
      </template>
      <v-tab-panel>
        <section class="section">
          <v-preview>
            <template v-slot:preview> <v-badge class="variant-filled">default</v-badge> </template>"
            <template v-slot:source>
              <v-code-block language="html" :code="`<v-badge class=&quot;variant-filled&quot;>default</v-badge>`" />
            </template>
          </v-preview>
        </section>

        <h2>Variants</h2>
        <h3>Filled</h3>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <v-badge class="variant-filled">Default</v-badge>
                <v-badge class="variant-filled-surface">Surface</v-badge>
                <v-badge class="variant-filled-primary">Primary</v-badge>
                <v-badge class="variant-filled-secondary">Secondary</v-badge>
                <v-badge class="variant-filled-tertiary">Tertiary</v-badge>
                <v-badge class="variant-filled-success">Success</v-badge>
                <v-badge class="variant-filled-warning">Warning</v-badge>
                <v-badge class="variant-filled-error">Error</v-badge>
              </div>
            </template>
            <template v-slot:source>
              <v-code-block language="html" :code="filled" />
            </template>
          </v-preview>
        </section>

        <h3>Ringed</h3>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <v-badge class="variant-ringed">Default</v-badge>
                <v-badge class="variant-ringed-surface">Surface</v-badge>
                <v-badge class="variant-ringed-primary">Primary</v-badge>
                <v-badge class="variant-ringed-secondary">Secondary</v-badge>
                <v-badge class="variant-ringed-tertiary">Tertiary</v-badge>
                <v-badge class="variant-ringed-success">Success</v-badge>
                <v-badge class="variant-ringed-warning">Warning</v-badge>
                <v-badge class="variant-ringed-error">Error</v-badge>
              </div>
            </template>
            <template v-slot:source>
              <v-code-block language="html" :code="ringed" />
            </template>
          </v-preview>
        </section>

        <h3>Ghost</h3>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <v-badge class="variant-ghost">Default</v-badge>
                <v-badge class="variant-ghost-surface">Surface</v-badge>
                <v-badge class="variant-ghost-primary">Primary</v-badge>
                <v-badge class="variant-ghost-secondary">Secondary</v-badge>
                <v-badge class="variant-ghost-tertiary">Tertiary</v-badge>
                <v-badge class="variant-ghost-success">Success</v-badge>
                <v-badge class="variant-ghost-warning">Warning</v-badge>
                <v-badge class="variant-ghost-error">Error</v-badge>
              </div>
            </template>
            <template v-slot:source>
              <v-code-block language="html" :code="ghost" />
            </template>
          </v-preview>
        </section>

        <h3>Soft</h3>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <v-badge class="variant-soft">Default</v-badge>
                <v-badge class="variant-soft-surface">Surface</v-badge>
                <v-badge class="variant-soft-primary">Primary</v-badge>
                <v-badge class="variant-soft-secondary">Secondary</v-badge>
                <v-badge class="variant-soft-tertiary">Tertiary</v-badge>
                <v-badge class="variant-soft-success">Success</v-badge>
                <v-badge class="variant-soft-warning">Warning</v-badge>
                <v-badge class="variant-soft-error">Error</v-badge>
              </div>
            </template>
            <template v-slot:source>
              <v-code-block language="html" :code="soft" />
            </template>
          </v-preview>
        </section>

        <h3>Glass</h3>
        <section class="section">
          <v-preview hide-swatches region-viewport="!p-0">
            <template v-slot:preview>
              <div
                class="flex w-full flex-wrap items-center justify-center gap-2 p-4 md:p-10"
                style="
                  background: url('https://i.imgur.com/DdrZVb7.gif') center center no-repeat;
                  background-size: cover;
                "
              >
                <v-badge class="variant-glass text-white/75">Default</v-badge>
                <v-badge class="variant-glass-surface text-white/75">Surface</v-badge>
                <v-badge class="variant-glass-primary text-white/75">Primary</v-badge>
                <v-badge class="variant-glass-secondary text-white/75">Secondary</v-badge>
                <v-badge class="variant-glass-tertiary text-white/75">Tertiary</v-badge>
                <v-badge class="variant-glass-success text-white/75">Success</v-badge>
                <v-badge class="variant-glass-warning text-white/75">Warning</v-badge>
                <v-badge class="variant-glass-error text-white/75">Error</v-badge>
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
      </v-tab-panel>
      <v-tab-panel>
        <section class="section">
          <alert-unstyled />
        </section>

        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <v-badge unstyled>Unstyled</v-badge>
            </template>
            <template v-slot:source>
              <v-code-block language="html" :code="unstyledTemplate" />
            </template>
          </v-preview>
        </section>

        <h2>Custom style example</h2>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <v-badge unstyled class="bg-blue-600 p-1 text-white">Custom</v-badge>
            </template>
            <template v-slot:source>
              <v-code-block language="html" :code="unstyledCustomTemplate" />
            </template>
          </v-preview>
        </section>
      </v-tab-panel>
    </v-tabs>
  </div>
</template>
