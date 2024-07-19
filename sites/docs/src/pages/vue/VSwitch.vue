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
import AlertUnstyled from 'src/components/docs/AlertUnstyled.vue';
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

const presetFilled = `<v-switch v-model="switchValue" class-track="preset-filled-surface-500" class-thumb="bg-surface-100" />
<v-switch v-model="switchValue" class-track="preset-filled-primary-500" class-thumb="bg-primary-100" />
<v-switch v-model="switchValue" class-track="preset-filled-secondary-500" class-thumb="bg-secondary-100" />
<v-switch v-model="switchValue" class-track="preset-filled-tertiary-500" class-thumb="bg-tertiary-100" />
<v-switch v-model="switchValue" class-track="preset-filled-success-500" class-thumb="bg-success-100" />
<v-switch v-model="switchValue" class-track="preset-filled-warning-500" class-thumb="bg-warning-100" />
<v-switch v-model="switchValue" class-track="preset-filled-error-500" class-thumb="bg-error-100" />`;

const presetRinged = `<v-switch v-model="switchValue" class-track="preset-outlined-surface-500" class-thumb="bg-surface-900-100" />
<v-switch v-model="switchValue" class-track="preset-outlined-primary-500" class-thumb="bg-primary-900-100" />
<v-switch v-model="switchValue" class-track="preset-outlined-secondary-500" class-thumb="bg-secondary-900-100" />
<v-switch v-model="switchValue" class-track="preset-outlined-tertiary-500" class-thumb="bg-tertiary-900-100" />
<v-switch v-model="switchValue" class-track="preset-outlined-success-500" class-thumb="bg-success-900-100" />
<v-switch v-model="switchValue" class-track="preset-outlined-warning-500" class-thumb="bg-warning-900-100" />
<v-switch v-model="switchValue" class-track="preset-outlined-error-500" class-thumb="bg-error-900-100" />`;

const presetGhost = `<v-switch v-model="switchValue" class-track="preset-tonal-surface" class-thumb="bg-surface-900-100" />
<v-switch v-model="switchValue" class-track="preset-tonal-primary" class-thumb="bg-primary-900-100" />
<v-switch v-model="switchValue" class-track="preset-tonal-secondary" class-thumb="bg-secondary-900-100" />
<v-switch v-model="switchValue" class-track="preset-tonal-tertiary" class-thumb="bg-tertiary-900-100" />
<v-switch v-model="switchValue" class-track="preset-tonal-success" class-thumb="bg-success-900-100" />
<v-switch v-model="switchValue" class-track="preset-tonal-warning" class-thumb="bg-warning-900-100" />
<v-switch v-model="switchValue" class-track="preset-tonal-error" class-thumb="bg-error-900-100" />`;

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
    <v-code-block language="ts" :code="`import { VSwitch } from '@code-coaching/vuetiful';`" />
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
            <div class="flex flex-col gap-4">
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

      <h2>Presets</h2>
      <h3>Filled</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-switch v-model="switchValue" class-track="preset-filled" class-thumb="bg-surface-100-900" />
              <v-switch
                v-model="switchValue"
                class-track="preset-filled-surface-500"
                class-thumb="bg-surface-100-900"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-filled-primary-500"
                class-thumb="bg-primary-100-900"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-filled-secondary-500"
                class-thumb="bg-secondary-100-900"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-filled-tertiary-500"
                class-thumb="bg-tertiary-100-900"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-filled-success-500"
                class-thumb="bg-success-100-900"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-filled-warning-500"
                class-thumb="bg-warning-100-900"
              />
              <v-switch v-model="switchValue" class-track="preset-filled-error-500" class-thumb="bg-error-100-900" />
            </div>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="presetFilled" />
            </div>
          </template>
        </v-preview>
      </section>

      <h3>Outlined</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-switch v-model="switchValue" class-track="preset-outlined" class-thumb="bg-surface-950-50" />
              <v-switch v-model="switchValue" class-track="preset-outlined-surface-500" class-thumb="bg-surface-500" />
              <v-switch v-model="switchValue" class-track="preset-outlined-primary-500" class-thumb="bg-primary-500" />
              <v-switch
                v-model="switchValue"
                class-track="preset-outlined-secondary-500"
                class-thumb="bg-secondary-500"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-outlined-tertiary-500"
                class-thumb="bg-tertiary-500"
              />
              <v-switch v-model="switchValue" class-track="preset-outlined-success-500" class-thumb="bg-success-500" />
              <v-switch v-model="switchValue" class-track="preset-outlined-warning-500" class-thumb="bg-warning-500" />
              <v-switch v-model="switchValue" class-track="preset-outlined-error-500" class-thumb="bg-error-500" />
            </div>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="presetRinged" />
            </div>
          </template>
        </v-preview>
      </section>

      <h3>Tonal</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-switch v-model="switchValue" class-track="preset-tonal" class-thumb="bg-surface-950-50" />
              <v-switch v-model="switchValue" class-track="preset-tonal-surface" class-thumb="bg-surface-950-50" />
              <v-switch v-model="switchValue" class-track="preset-tonal-primary" class-thumb="bg-primary-950-50" />
              <v-switch v-model="switchValue" class-track="preset-tonal-secondary" class-thumb="bg-secondary-950-50" />
              <v-switch v-model="switchValue" class-track="preset-tonal-tertiary" class-thumb="bg-tertiary-950-50" />
              <v-switch v-model="switchValue" class-track="preset-tonal-success" class-thumb="bg-success-950-50" />
              <v-switch v-model="switchValue" class-track="preset-tonal-warning" class-thumb="bg-warning-950-50" />
              <v-switch v-model="switchValue" class-track="preset-tonal-error" class-thumb="bg-error-950-50" />
            </div>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="presetGhost" />
            </div>
          </template>
        </v-preview>
      </section>

      <h3>Mix and match</h3>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal preset-outlined"
                class-thumb="bg-surface-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-surface preset-outlined-surface-950-50"
                class-thumb="bg-surface-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-primary preset-outlined-primary-950-50"
                class-thumb="bg-primary-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-secondary preset-outlined-secondary-950-50"
                class-thumb="bg-secondary-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-tertiary preset-outlined-tertiary-950-50"
                class-thumb="bg-tertiary-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-success preset-outlined-success-950-50"
                class-thumb="bg-success-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-warning preset-outlined-warning-950-50"
                class-thumb="bg-warning-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-error preset-outlined-error-950-50"
                class-thumb="bg-error-950-50"
              />
            </div>
            <div class="flex flex-wrap gap-2 mt-2">
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal preset-outlined"
                class-thumb="bg-surface-50-950 preset-outlined-surface-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-surface preset-outlined-surface-950-50"
                class-thumb="bg-surface-50-950 preset-outlined-surface-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-primary preset-outlined-primary-950-50"
                class-thumb="bg-primary-50-950 preset-outlined-primary-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-secondary preset-outlined-secondary-950-50"
                class-thumb="bg-secondary-50-950 preset-outlined-secondary-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-tertiary preset-outlined-tertiary-950-50"
                class-thumb="bg-tertiary-50-950 preset-outlined-tertiary-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-success preset-outlined-success-950-50"
                class-thumb="bg-success-50-950 preset-outlined-success-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-warning preset-outlined-warning-950-50"
                class-thumb="bg-warning-50-950 preset-outlined-warning-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-error preset-outlined-error-950-50"
                class-thumb="bg-error-50-950 preset-outlined-error-950-50"
              />
            </div>
            <div class="flex flex-wrap gap-2 mt-2">
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal preset-outlined"
                class-thumb="bg-surface-50-950 preset-outlined-surface-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-surface preset-outlined-surface-950-50"
                class-thumb="bg-surface-50-950 preset-outlined-surface-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-primary preset-outlined-primary-950-50"
                class-thumb="bg-primary-50-950 preset-outlined-primary-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-secondary preset-outlined-secondary-950-50"
                class-thumb="bg-secondary-50-950 preset-outlined-secondary-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-tertiary preset-outlined-tertiary-950-50"
                class-thumb="bg-tertiary-50-950 preset-outlined-tertiary-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-success preset-outlined-success-950-50"
                class-thumb="bg-success-50-950 preset-outlined-success-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-warning preset-outlined-warning-950-50"
                class-thumb="bg-warning-50-950 preset-outlined-warning-950-50"
              />
              <v-switch
                v-model="switchValue"
                class-track="preset-tonal-error preset-outlined-error-950-50"
                class-thumb="bg-error-50-950 preset-outlined-error-950-50"
              />
            </div>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="presetGhost" />
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
            <div class="flex flex-col gap-4">
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
            <div class="flex flex-col gap-2 mb-2">
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
            <div class="flex flex-col gap-2 mb-2">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="unstyledCustomTemplate" />
            </div>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
