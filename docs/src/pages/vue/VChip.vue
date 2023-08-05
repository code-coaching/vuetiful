<script setup lang="ts">
import { VChip, VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';

const usage = '<v-chip>default</v-chip>';

const filled = `<v-chip variant="filled">Default</v-chip>
<v-chip variant="filled-surface">Surface</v-chip>
<v-chip variant="filled-primary">Primary</v-chip>
<v-chip variant="filled-secondary">Secondary</v-chip>
<v-chip variant="filled-tertiary">Tertiary</v-chip>
<v-chip variant="filled-success">Success</v-chip>
<v-chip variant="filled-warning">Warning</v-chip>
<v-chip variant="filled-error">Error</v-chip>`;

const ringed = `<v-chip variant="ringed">Default</v-chip>
<v-chip variant="ringed-surface">Surface</v-chip>
<v-chip variant="ringed-primary">Primary</v-chip>
<v-chip variant="ringed-secondary">Secondary</v-chip>
<v-chip variant="ringed-tertiary">Tertiary</v-chip>
<v-chip variant="ringed-success">Success</v-chip>
<v-chip variant="ringed-warning">Warning</v-chip>
<v-chip variant="ringed-error">Error</v-chip>`;

const ghost = `<v-chip variant="ghost">Default</v-chip>
<v-chip variant="ghost-surface">Surface</v-chip>
<v-chip variant="ghost-primary">Primary</v-chip>
<v-chip variant="ghost-secondary">Secondary</v-chip>
<v-chip variant="ghost-tertiary">Tertiary</v-chip>
<v-chip variant="ghost-success">Success</v-chip>
<v-chip variant="ghost-warning">Warning</v-chip>
<v-chip variant="ghost-error">Error</v-chip>`;

const soft = `<v-chip variant="soft">Default</v-chip>
<v-chip variant="soft-surface">Surface</v-chip>
<v-chip variant="soft-primary">Primary</v-chip>
<v-chip variant="soft-secondary">Secondary</v-chip>
<v-chip variant="soft-tertiary">Tertiary</v-chip>
<v-chip variant="soft-success">Success</v-chip>
<v-chip variant="soft-warning">Warning</v-chip>
<v-chip variant="soft-error">Error</v-chip>`;

const glass = `<v-chip variant="glass text-white/75">Default</v-chip>
<v-chip variant="glass-surface text-white/75">Surface</v-chip>
<v-chip variant="glass-primary text-white/75">Primary</v-chip>
<v-chip variant="glass-secondary text-white/75">Secondary</v-chip>
<v-chip variant="glass-tertiary text-white/75">Tertiary</v-chip>
<v-chip variant="glass-success text-white/75">Success</v-chip>
<v-chip variant="glass-warning text-white/75">Warning</v-chip>
<v-chip variant="glass-error text-white/75">Error</v-chip>`;

const unstyledTemplate = '<v-chip unstyled>Unstyled</v-chip>';
const unstyledPropTemplate = '<v-chip unstyled variant="">No prop-based styles</v-chip>';
const unstyledCustomTemplate = '<v-chip unstyled variant="" class="bg-blue-600 p-1 text-white">Custom</v-chip>';
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VChip</h1>
    <section class="section">
      <v-code-block language="ts" :code="`import { VChip } from '@code-coaching/vuetiful`" />
    </section>

    <v-tabs class-panels="py-4 md:py-10">
      <template v-slot:tabs>
        <v-tab>Usage</v-tab>
        <v-tab>Unstyled</v-tab>
      </template>
      <v-tab-panel>
        <h2>Usage</h2>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <v-chip>default</v-chip>
              </div>
            </template>
            <template v-slot:source>
              <v-code-block language="html" :code="usage" />
            </template>
          </v-preview>
        </section>

        <h3>Variants</h3>
        <h4>Filled</h4>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <v-chip variant="filled">Default</v-chip>
                <v-chip variant="filled-surface">Surface</v-chip>
                <v-chip variant="filled-primary">Primary</v-chip>
                <v-chip variant="filled-secondary">Secondary</v-chip>
                <v-chip variant="filled-tertiary">Tertiary</v-chip>
                <v-chip variant="filled-success">Success</v-chip>
                <v-chip variant="filled-warning">Warning</v-chip>
                <v-chip variant="filled-error">Error</v-chip>
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
                <v-chip variant="ringed">Default</v-chip>
                <v-chip variant="ringed-surface">Surface</v-chip>
                <v-chip variant="ringed-primary">Primary</v-chip>
                <v-chip variant="ringed-secondary">Secondary</v-chip>
                <v-chip variant="ringed-tertiary">Tertiary</v-chip>
                <v-chip variant="ringed-success">Success</v-chip>
                <v-chip variant="ringed-warning">Warning</v-chip>
                <v-chip variant="ringed-error">Error</v-chip>
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
                <v-chip variant="ghost">Default</v-chip>
                <v-chip variant="ghost-surface">Surface</v-chip>
                <v-chip variant="ghost-primary">Primary</v-chip>
                <v-chip variant="ghost-secondary">Secondary</v-chip>
                <v-chip variant="ghost-tertiary">Tertiary</v-chip>
                <v-chip variant="ghost-success">Success</v-chip>
                <v-chip variant="ghost-warning">Warning</v-chip>
                <v-chip variant="ghost-error">Error</v-chip>
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
                <v-chip variant="soft">Default</v-chip>
                <v-chip variant="soft-surface">Surface</v-chip>
                <v-chip variant="soft-primary">Primary</v-chip>
                <v-chip variant="soft-secondary">Secondary</v-chip>
                <v-chip variant="soft-tertiary">Tertiary</v-chip>
                <v-chip variant="soft-success">Success</v-chip>
                <v-chip variant="soft-warning">Warning</v-chip>
                <v-chip variant="soft-error">Error</v-chip>
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
                style="
                  background: url('https://i.imgur.com/DdrZVb7.gif') center center no-repeat;
                  background-size: cover;
                "
              >
                <v-chip variant="glass" class="text-white/75">Default</v-chip>
                <v-chip variant="glass-surface" class="text-white/75">Surface</v-chip>
                <v-chip variant="glass-primary" class="text-white/75">Primary</v-chip>
                <v-chip variant="glass-secondary" class="text-white/75">Secondary</v-chip>
                <v-chip variant="glass-tertiary" class="text-white/75">Tertiary</v-chip>
                <v-chip variant="glass-success" class="text-white/75">Success</v-chip>
                <v-chip variant="glass-warning" class="text-white/75">Warning</v-chip>
                <v-chip variant="glass-error" class="text-white/75">Error</v-chip>
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
              <v-chip unstyled>Unstyled</v-chip>
            </template>
            <template v-slot:source>
              <v-code-block language="html" :code="unstyledTemplate" />
            </template>
          </v-preview>
        </section>

        <h2>No prop-based styles</h2>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <v-chip unstyled variant="">No prop-based styles</v-chip>
            </template>
            <template v-slot:source>
              <v-code-block class="mb-2" language="html" :code="unstyledPropTemplate" />
              <p>Set <code>variant</code> to an empty string to have no prop-based styles.</p>
            </template>
          </v-preview>
        </section>

        <h2>Custom style example</h2>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <v-chip unstyled variant="" class="bg-blue-600 p-1 text-white">Custom</v-chip>
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
