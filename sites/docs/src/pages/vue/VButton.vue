<script setup lang="ts">
import { VBadge, VButton, VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';
import { AlertUnstyled } from 'src/components';

const labelExample = '<v-button aria-label="menu">John Duck</v-button>';
const sizeSexample = `<v-button size="xs">xs</v-button>
<v-button size="sm">sm</v-button>
<v-button size="md">md</v-button>
<v-button size="lg">lg</v-button>
<v-button size="xl">xl</v-button>`;

const filled = `<v-button preset="filled">Default</v-button>
<v-button preset="filled-surface-500">Surface</v-button>
<v-button preset="filled-primary-500">Primary</v-button>
<v-button preset="filled-secondary-500">Secondary</v-button>
<v-button preset="filled-tertiary-500">Tertiary</v-button>
<v-button preset="filled-success-500">Success</v-button>
<v-button preset="filled-warning-500">Warning</v-button>
<v-button preset="filled-error-500">Error</v-button>`;

const tonal = `<v-button preset="tonal">Default</v-button>
<v-button preset="tonal-surface">Surface</v-button>
<v-button preset="tonal-primary">Primary</v-button>
<v-button preset="tonal-secondary">Secondary</v-button>
<v-button preset="tonal-tertiary">Tertiary</v-button>
<v-button preset="tonal-success">Success</v-button>
<v-button preset="tonal-warning">Warning</v-button>
<v-button preset="tonal-error">Error</v-button>`;

const outlined = `<v-button preset="outlined">Default</v-button>
<v-button preset="outlined-surface">Surface</v-button>
<v-button preset="outlined-primary">Primary</v-button>
<v-button preset="outlined-secondary">Secondary</v-button>
<v-button preset="outlined-tertiary">Tertiary</v-button>
<v-button preset="outlined-success">Success</v-button>
<v-button preset="outlined-warning">Warning</v-button>
<v-button preset="outlined-error">Error</v-button>`;

const unstyledTemplate = '';
const unstyledPropTemplate = '';
const unstyledCustomTemplate = '';
</script>

<template>
  <h1 class="h1">VButton</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VButton } from '@code-coaching/vuetiful';`" />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template v-slot:tabs>
      <v-tab>Usage</v-tab>
      <v-tab>Unstyled</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">Accessibility</h2>
      <section class="section">
        <h3 class="h3">Keyboard Interaction</h3>
        <section class="section">
          <p><kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>: Move focus to and from button.</p>
          <p><kbd>Space</kbd> and <kbd>Enter</kbd>: Execute the action coupled to the button.</p>
        </section>

        <h3 class="h3">Label</h3>
        <v-preview>
          <template v-slot:preview>
            <v-button aria-label="menu">John Duck</v-button>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="labelExample" />
            <p>
              By default the accessibility label is the same as the button text. If you want to change the accessibility
              label, you can use the
              <code>aria-label</code> attribute.
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Sizes</h2>
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
            <p><v-badge preset="filled">md</v-badge> is the default size.</p>
            <p>
              A custom class can be passed to the <v-badge preset="filled">size</v-badge> prop to change the size of the
              button.
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Presets</h2>
      <h3 class="h3">Filled</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-button preset="filled">Default</v-button>
              <v-button preset="filled-surface-500">Surface</v-button>
              <v-button preset="filled-primary-500">Primary</v-button>
              <v-button preset="filled-secondary-500">Secondary</v-button>
              <v-button preset="filled-tertiary-500">Tertiary</v-button>
              <v-button preset="filled-success-500">Success</v-button>
              <v-button preset="filled-warning-500">Warning</v-button>
              <v-button preset="filled-error-500">Error</v-button>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="filled" />
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Tonal</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-button preset="tonal">Default</v-button>
              <v-button preset="tonal-surface">Surface</v-button>
              <v-button preset="tonal-primary">Primary</v-button>
              <v-button preset="tonal-secondary">Secondary</v-button>
              <v-button preset="tonal-tertiary">Tertiary</v-button>
              <v-button preset="tonal-success">Success</v-button>
              <v-button preset="tonal-warning">Warning</v-button>
              <v-button preset="tonal-error">Error</v-button>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="tonal" />
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Outlined</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-button preset="outlined">Default</v-button>
              <v-button preset="outlined-surface-500">Surface</v-button>
              <v-button preset="outlined-primary-500">Primary</v-button>
              <v-button preset="outlined-secondary-500">Secondary</v-button>
              <v-button preset="outlined-tertiary-500">Tertiary</v-button>
              <v-button preset="outlined-success-500">Success</v-button>
              <v-button preset="outlined-warning-500">Warning</v-button>
              <v-button preset="outlined-error-500">Error</v-button>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="outlined" />
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

      <h2 class="h2">No prop-based styles</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-button unstyled preset="">No prop-based styles</v-button>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="unstyledPropTemplate" />
            <p>Set <code>preset</code> to an empty string to have no prop-based styles.</p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Custom style example</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-button unstyled preset="" class="p-1 text-white bg-blue-600">Custom</v-button>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="unstyledCustomTemplate" />
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
