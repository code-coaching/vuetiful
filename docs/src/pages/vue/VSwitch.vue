<script setup lang="ts">
import {
  VCodeBlock,
  VPreview,
  VSwitch,
  VSwitchDescription,
  VSwitchGroup,
  VSwitchLabel,
  VTab,
  VTabPanel,
  VTabs,
} from '@code-coaching/vuetiful';
import { ref } from 'vue';

const basicScript = 'const switchValue = ref(false);';
const basicTemplate = '<v-switch v-model="switchValue" />';

const groupTemplate = `<v-switch-group>
  <v-switch-label class="font-bold">A label</v-switch-label>
  <div class="flex w-[260px] items-center gap-2">
    <v-switch v-model="switchValue" />
    <v-switch-description>The current value is: {{ switchValue }}</v-switch-description>
  </div>
</v-switch-group>`;

const labelTemplate = '<v-switch v-model="switchValue">Label for screen readers</v-switch>';

const variantFilled = `<v-switch v-model="switchValue" class-track="variant-filled-surface" class-thumb="bg-surface-100" />
<v-switch v-model="switchValue" class-track="variant-filled-primary" class-thumb="bg-primary-100" />
<v-switch v-model="switchValue" class-track="variant-filled-secondary" class-thumb="bg-secondary-100" />
<v-switch v-model="switchValue" class-track="variant-filled-tertiary" class-thumb="bg-tertiary-100" />
<v-switch v-model="switchValue" class-track="variant-filled-success" class-thumb="bg-success-100" />
<v-switch v-model="switchValue" class-track="variant-filled-warning" class-thumb="bg-warning-100" />
<v-switch v-model="switchValue" class-track="variant-filled-error" class-thumb="bg-error-100" />`;

const variantRinged = `<v-switch v-model="switchValue" class-track="variant-ringed-surface" class-thumb="bg-surface-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-ringed-primary" class-thumb="bg-primary-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-ringed-secondary" class-thumb="bg-secondary-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-ringed-tertiary" class-thumb="bg-tertiary-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-ringed-success" class-thumb="bg-success-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-ringed-warning" class-thumb="bg-warning-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-ringed-error" class-thumb="bg-error-800-100-token" />`;

const variantGhost = `<v-switch v-model="switchValue" class-track="variant-ghost-surface" class-thumb="bg-surface-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-ghost-primary" class-thumb="bg-primary-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-ghost-secondary" class-thumb="bg-secondary-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-ghost-tertiary" class-thumb="bg-tertiary-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-ghost-success" class-thumb="bg-success-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-ghost-warning" class-thumb="bg-warning-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-ghost-error" class-thumb="bg-error-800-100-token" />`;

const variantSoft = `<v-switch v-model="switchValue" class-track="variant-soft-surface" class-thumb="bg-surface-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-soft-primary" class-thumb="bg-primary-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-soft-secondary" class-thumb="bg-secondary-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-soft-tertiary" class-thumb="bg-tertiary-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-soft-success" class-thumb="bg-success-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-soft-warning" class-thumb="bg-warning-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-soft-error" class-thumb="bg-error-800-100-token" />`;

const variantGlass = `<v-switch v-model="switchValue" class-track="variant-glass-surface" class-thumb="bg-surface-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-glass-primary" class-thumb="bg-primary-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-glass-secondary" class-thumb="bg-secondary-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-glass-tertiary" class-thumb="bg-tertiary-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-glass-success" class-thumb="bg-success-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-glass-warning" class-thumb="bg-warning-800-100-token" />
<v-switch v-model="switchValue" class-track="variant-glass-error" class-thumb="bg-error-800-100-token" />`;

const switchValue = ref(false);

const unstyledTemplate = '<v-switch v-model="switchValue" unstyled />';
const unstyledPropTemplate = `<v-switch
  v-model="switchValue"
  unstyled
  class-thumb="border border-black dark:border-white"
  class-track="border border-black dark:border-white"
/>`;
const unstyledCustomTemplate = `<v-switch
  v-model="switchValue"
  unstyled
  class-thumb="bg-blue-600 scale-[0.9] rounded-full"
  class-track="bg-blue-400"
/>`;
</script>

<template>
  <h1>VSwitch</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VSwitch } from '@code-coaching/vuetiful`" />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template v-slot:tabs>
      <v-tab>Usage</v-tab>
      <v-tab>Unstyled</v-tab>
    </template>
    <v-tab-panel>
      <h2>Basic</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div>
              <v-switch v-model="switchValue" />
            </div>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-2">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="basicTemplate" />
            </div>
          </template>
          <template v-slot:footer>
            <div class="flex items-center justify-center">
              {{ switchValue }}
            </div>
          </template>
        </v-preview>
      </section>

      <h2>Group - Label - Description</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div>
              <v-switch-group>
                <v-switch-label class="font-bold">A label</v-switch-label>
                <div class="flex w-[260px] items-center gap-2">
                  <v-switch v-model="switchValue" />
                  <v-switch-description>The current value is: {{ switchValue }}</v-switch-description>
                </div>
              </v-switch-group>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="groupTemplate" />
          </template>
        </v-preview>
      </section>

      <h2>Accessibility</h2>
      <section class="section">
        <h3>Keyboard Interaction</h3>
        <section class="section">
          <p><kbd>Tab</kbd>: Move focus to the next focusable element.</p>
          <p><kbd>Space</kbd>: Switches the toggle to the opposite state.</p>
          <br />
          <p>All relevant ARIA attributes are automatically managed.</p>
        </section>

        <h3>Labels</h3>
        <section>
          <v-preview>
            <template v-slot:preview>
              <v-switch v-model="switchValue">Label for screen readers</v-switch>
            </template>
            <template v-slot:source>
              <v-code-block class="mb-2" language="html" :code="labelTemplate" />
              <p>The text inside the <code>v-switch</code> tag is only visible to screen readers.</p>
              <p>
                When not using an explicit label (<code>v-switch-label</code>), do add text to the
                <code>v-switch</code> tag for accessibility.
              </p>
            </template>
          </v-preview>
        </section>
      </section>

      <h2>Variants</h2>
      <h3>Filled</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-switch v-model="switchValue" class-track="variant-filled-surface" class-thumb="bg-surface-100" />
              <v-switch v-model="switchValue" class-track="variant-filled-primary" class-thumb="bg-primary-100" />
              <v-switch v-model="switchValue" class-track="variant-filled-secondary" class-thumb="bg-secondary-100" />
              <v-switch v-model="switchValue" class-track="variant-filled-tertiary" class-thumb="bg-tertiary-100" />
              <v-switch v-model="switchValue" class-track="variant-filled-success" class-thumb="bg-success-100" />
              <v-switch v-model="switchValue" class-track="variant-filled-warning" class-thumb="bg-warning-100" />
              <v-switch v-model="switchValue" class-track="variant-filled-error" class-thumb="bg-error-100" />
            </div>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-2">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="variantFilled" />
            </div>
          </template>
        </v-preview>
      </section>

      <h3>Ringed</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-switch
                v-model="switchValue"
                class-track="variant-ringed-surface"
                class-thumb="bg-surface-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-ringed-primary"
                class-thumb="bg-primary-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-ringed-secondary"
                class-thumb="bg-secondary-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-ringed-tertiary"
                class-thumb="bg-tertiary-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-ringed-success"
                class-thumb="bg-success-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-ringed-warning"
                class-thumb="bg-warning-800-100-token"
              />
              <v-switch v-model="switchValue" class-track="variant-ringed-error" class-thumb="bg-error-800-100-token" />
            </div>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-2">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="variantRinged" />
            </div>
          </template>
        </v-preview>
      </section>

      <h3>Ghost</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-switch
                v-model="switchValue"
                class-track="variant-ghost-surface"
                class-thumb="bg-surface-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-ghost-primary"
                class-thumb="bg-primary-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-ghost-secondary"
                class-thumb="bg-secondary-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-ghost-tertiary"
                class-thumb="bg-tertiary-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-ghost-success"
                class-thumb="bg-success-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-ghost-warning"
                class-thumb="bg-warning-800-100-token"
              />
              <v-switch v-model="switchValue" class-track="variant-ghost-error" class-thumb="bg-error-800-100-token" />
            </div>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-2">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="variantGhost" />
            </div>
          </template>
        </v-preview>
      </section>

      <h3>Soft</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-switch
                v-model="switchValue"
                class-track="variant-soft-surface"
                class-thumb="bg-surface-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-soft-primary"
                class-thumb="bg-primary-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-soft-secondary"
                class-thumb="bg-secondary-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-soft-tertiary"
                class-thumb="bg-tertiary-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-soft-success"
                class-thumb="bg-success-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-soft-warning"
                class-thumb="bg-warning-800-100-token"
              />
              <v-switch v-model="switchValue" class-track="variant-soft-error" class-thumb="bg-error-800-100-token" />
            </div>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-2">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="variantSoft" />
            </div>
          </template>
        </v-preview>
      </section>

      <h3>Glass</h3>
      <section class="section">
        <v-preview hide-swatches region-viewport="!p-0">
          <template v-slot:preview>
            <div
              class="flex w-full flex-wrap items-center justify-center gap-2 p-4 md:p-10"
              style="background: url('https://i.imgur.com/DdrZVb7.gif') center center no-repeat; background-size: cover"
            >
              <v-switch
                v-model="switchValue"
                class-track="variant-glass-surface"
                class-thumb="bg-surface-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-glass-primary"
                class-thumb="bg-primary-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-glass-secondary"
                class-thumb="bg-secondary-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-glass-tertiary"
                class-thumb="bg-tertiary-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-glass-success"
                class-thumb="bg-success-800-100-token"
              />
              <v-switch
                v-model="switchValue"
                class-track="variant-glass-warning"
                class-thumb="bg-warning-800-100-token"
              />
              <v-switch v-model="switchValue" class-track="variant-glass-error" class-thumb="bg-error-800-100-token" />
            </div>
          </template>
          <template v-slot:footer>
            <div class="flex items-center justify-center">
              <a target="_blank" href="https://www.markferrari.com/"> Image Source </a>
            </div>
          </template>

          <template v-slot:source>
            <div class="flex flex-col gap-2">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="variantGlass" />
            </div>
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
            <v-switch v-model="switchValue" unstyled />
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-2">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="unstyledTemplate" />
            </div>
          </template>
        </v-preview>
      </section>

      <h2>No prop-based styles</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-switch
              v-model="switchValue"
              unstyled
              class-thumb="border border-black dark:border-white"
              class-track="border border-black dark:border-white"
            />
          </template>
          <template v-slot:source>
            <div class="mb-2 flex flex-col gap-2">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="unstyledPropTemplate" />
            </div>
            <p>
              Set <code>class-thumb</code> and <code>class-track</code> to an empty string to have no prop-based styles.
            </p>
            <p>This example adds a border to the thumb and track, otherwise they would be invisible.</p>
          </template>
        </v-preview>
      </section>

      <h2>Custom style example</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-switch
              v-model="switchValue"
              unstyled
              class-thumb="bg-blue-600 scale-[0.9] rounded-full"
              class-track="bg-blue-400"
            />
          </template>
          <template v-slot:source>
            <div class="mb-2 flex flex-col gap-2">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="unstyledCustomTemplate" />
            </div>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
