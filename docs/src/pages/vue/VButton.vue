<script setup lang="ts">
import { VBadge, VButton, VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';
import { AlertUnstyled } from 'src/components';

const labelExample = '<v-button aria-label="menu">John Duck</v-button>';
const sizeSexample = `<v-button size="xs">xs</v-button>
<v-button size="sm">sm</v-button>
<v-button size="md">md</v-button>
<v-button size="lg">lg</v-button>
<v-button size="xl">xl</v-button>`;

const filled = `<v-button variant="filled">Default</v-button>
<v-button variant="filled-surface">Surface</v-button>
<v-button variant="filled-primary">Primary</v-button>
<v-button variant="filled-secondary">Secondary</v-button>
<v-button variant="filled-tertiary">Tertiary</v-button>
<v-button variant="filled-success">Success</v-button>
<v-button variant="filled-warning">Warning</v-button>
<v-button variant="filled-error">Error</v-button>`;

const glass = `<v-button variant="glass text-white/75">Default</v-button>
<v-button variant="glass-surface text-white/75">Surface</v-button>
<v-button variant="glass-primary text-white/75">Primary</v-button>
<v-button variant="glass-secondary text-white/75">Secondary</v-button>
<v-button variant="glass-tertiary text-white/75">Tertiary</v-button>
<v-button variant="glass-success text-white/75">Success</v-button>
<v-button variant="glass-warning text-white/75">Warning</v-button>
<v-button variant="glass-error text-white/75">Error</v-button>`;

const ringed = `<v-button variant="ringed">Default</v-button>
<v-button variant="ringed-surface">Surface</v-button>
<v-button variant="ringed-primary">Primary</v-button>
<v-button variant="ringed-secondary">Secondary</v-button>
<v-button variant="ringed-tertiary">Tertiary</v-button>
<v-button variant="ringed-success">Success</v-button>
<v-button variant="ringed-warning">Warning</v-button>
<v-button variant="ringed-error">Error</v-button>`;

const ghost = `<v-button variant="ghost">Default</v-button>
<v-button variant="ghost-surface">Surface</v-button>
<v-button variant="ghost-primary">Primary</v-button>
<v-button variant="ghost-secondary">Secondary</v-button>
<v-button variant="ghost-tertiary">Tertiary</v-button>
<v-button variant="ghost-success">Success</v-button>
<v-button variant="ghost-warning">Warning</v-button>
<v-button variant="ghost-error">Error</v-button>`;

const soft = `<v-button variant="soft">Default</v-button>
<v-button variant="soft-surface">Surface</v-button>
<v-button variant="soft-primary">Primary</v-button>
<v-button variant="soft-secondary">Secondary</v-button>
<v-button variant="soft-tertiary">Tertiary</v-button>
<v-button variant="soft-success">Success</v-button>
<v-button variant="soft-warning">Warning</v-button>
<v-button variant="soft-error">Error</v-button>`;

const unstyledTemplate = '';
const unstyledPropTemplate = '';
const unstyledCustomTemplate = '';
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VButton</h1>
    <section class="section">
      <v-code-block language="ts" :code="`import { VButton } from '@code-coaching/vuetiful`" />
    </section>

    <v-tabs class-panels="py-4 md:py-10">
      <template v-slot:tabs>
        <v-tab>Usage</v-tab>
        <v-tab>Unstyled</v-tab>
      </template>
      <v-tab-panel>
        <h2>Accessibility</h2>
        <section class="section">
          <h3>Keyboard Interaction</h3>
          <section class="section">
            <p><kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>: Move focus to and from button.</p>
            <p><kbd>Space</kbd> and <kbd>Enter</kbd>: Execute the action coupled to the button.</p>
          </section>

          <h3>Label</h3>
          <v-preview>
            <template v-slot:preview>
              <v-button aria-label="menu">John Duck</v-button>
            </template>
            <template v-slot:source>
              <v-code-block class="mb-2" language="html" :code="labelExample" />
              <p>
                By default the accessibility label is the same as the button text. If you want to change the
                accessibility label, you can use the
                <code>aria-label</code> attribute.
              </p>
            </template>
          </v-preview>
        </section>

        <h2>Sizes</h2>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap items-start gap-2">
                <v-button size="xs">xs</v-button>
                <v-button size="sm">sm</v-button>
                <v-button size="md">md</v-button>
                <v-button size="lg">lg</v-button>
                <v-button size="xl">xl</v-button>
              </div>
            </template>
            <template v-slot:source>
              <v-code-block class="mb-2" language="html" :code="sizeSexample" />
              <p><v-badge variant="filled">md</v-badge> is the default size.</p>
              <p>
                A custom class can be passed to the <v-badge variant="filled">size</v-badge> prop to change the size of
                the button.
              </p>
            </template>
          </v-preview>
        </section>

        <h2>Variants</h2>
        <h3>Filled</h3>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <v-button variant="filled">Default</v-button>
                <v-button variant="filled-surface">Surface</v-button>
                <v-button variant="filled-primary">Primary</v-button>
                <v-button variant="filled-secondary">Secondary</v-button>
                <v-button variant="filled-tertiary">Tertiary</v-button>
                <v-button variant="filled-success">Success</v-button>
                <v-button variant="filled-warning">Warning</v-button>
                <v-button variant="filled-error">Error</v-button>
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
                <v-button variant="ringed">Default</v-button>
                <v-button variant="ringed-surface">Surface</v-button>
                <v-button variant="ringed-primary">Primary</v-button>
                <v-button variant="ringed-secondary">Secondary</v-button>
                <v-button variant="ringed-tertiary">Tertiary</v-button>
                <v-button variant="ringed-success">Success</v-button>
                <v-button variant="ringed-warning">Warning</v-button>
                <v-button variant="ringed-error">Error</v-button>
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
                <v-button variant="ghost">Default</v-button>
                <v-button variant="ghost-surface">Surface</v-button>
                <v-button variant="ghost-primary">Primary</v-button>
                <v-button variant="ghost-secondary">Secondary</v-button>
                <v-button variant="ghost-tertiary">Tertiary</v-button>
                <v-button variant="ghost-success">Success</v-button>
                <v-button variant="ghost-warning">Warning</v-button>
                <v-button variant="ghost-error">Error</v-button>
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
                <v-button variant="soft">Default</v-button>
                <v-button variant="soft-surface">Surface</v-button>
                <v-button variant="soft-primary">Primary</v-button>
                <v-button variant="soft-secondary">Secondary</v-button>
                <v-button variant="soft-tertiary">Tertiary</v-button>
                <v-button variant="soft-success">Success</v-button>
                <v-button variant="soft-warning">Warning</v-button>
                <v-button variant="soft-error">Error</v-button>
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
                <v-button variant="glass" class="text-white/75">Default</v-button>
                <v-button variant="glass-surface" class="text-white/75">Surface</v-button>
                <v-button variant="glass-primary" class="text-white/75">Primary</v-button>
                <v-button variant="glass-secondary" class="text-white/75">Secondary</v-button>
                <v-button variant="glass-tertiary" class="text-white/75">Tertiary</v-button>
                <v-button variant="glass-success" class="text-white/75">Success</v-button>
                <v-button variant="glass-warning" class="text-white/75">Warning</v-button>
                <v-button variant="glass-error" class="text-white/75">Error</v-button>
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
              <v-button unstyled>Unstyled</v-button>
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
              <v-button unstyled variant="">No prop-based styles</v-button>
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
              <v-button unstyled variant="" class="bg-blue-600 p-1 text-white">Custom</v-button>
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
