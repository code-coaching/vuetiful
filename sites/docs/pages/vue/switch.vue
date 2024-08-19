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
} from "@code-coaching/vuetiful";
import { ref } from "vue";

const basicScript = "const switchValue = ref(false);";
const basicTemplate = '<v-switch v-model="switchValue" />';

const groupTemplate = `<v-switch-group>
  <v-switch-label class="font-bold">A label</v-switch-label>
  <div class="flex w-[260px] items-center gap-2">
    <v-switch v-model="switchValue" />
    <v-switch-description>The current value is: {{ switchValue }}</v-switch-description>
  </div>
</v-switch-group>`;

const labelTemplate =
  '<v-switch v-model="switchValue">Label for screen readers</v-switch>';

const presetFilled = `<div class="flex flex-wrap gap-2">
  <v-switch
    v-model="switchValue"
    class="preset-filled"
    class-thumb="bg-surface-100-900"
  />
  <v-switch
    v-model="switchValue"
    class="preset-filled-surface-200-800"
    class-thumb="bg-surface-800-200"
  />
  <v-switch
    v-model="switchValue"
    class="preset-filled-primary-200-800"
    class-thumb="bg-primary-800-200"
  />
  <v-switch
    v-model="switchValue"
    class="preset-filled-secondary-200-800"
    class-thumb="bg-secondary-800-200"
  />
  <v-switch
    v-model="switchValue"
    class="preset-filled-tertiary-200-800"
    class-thumb="bg-tertiary-800-200"
  />
  <v-switch
    v-model="switchValue"
    class="preset-filled-success-200-800"
    class-thumb="bg-success-800-200"
  />
  <v-switch
    v-model="switchValue"
    class="preset-filled-warning-200-800"
    class-thumb="bg-warning-800-200"
  />
  <v-switch
    v-model="switchValue"
    class="preset-filled-error-200-800"
    class-thumb="bg-error-800-200"
  />
</div>`;

const presetOutlined = `<div class="flex flex-wrap gap-2">
  <v-switch
    v-model="switchValue"
    class="preset-outlined"
    class-thumb="bg-surface-950-50"
  />
  <v-switch
    v-model="switchValue"
    class="preset-outlined-surface-200-800"
    class-thumb="bg-surface-200-800"
  />
  <v-switch
    v-model="switchValue"
    class="preset-outlined-primary-200-800"
    class-thumb="bg-primary-200-800"
  />
  <v-switch
    v-model="switchValue"
    class="preset-outlined-secondary-200-800"
    class-thumb="bg-secondary-200-800"
  />
  <v-switch
    v-model="switchValue"
    class="preset-outlined-tertiary-200-800"
    class-thumb="bg-tertiary-200-800"
  />
  <v-switch
    v-model="switchValue"
    class="preset-outlined-success-200-800"
    class-thumb="bg-success-200-800"
  />
  <v-switch
    v-model="switchValue"
    class="preset-outlined-warning-200-800"
    class-thumb="bg-warning-200-800"
  />
  <v-switch
    v-model="switchValue"
    class="preset-outlined-error-200-800"
    class-thumb="bg-error-200-800"
  />
</div>`;

const presetTonal = `<div class="flex flex-wrap gap-2">
  <v-switch
    v-model="switchValue"
    class="preset-tonal"
    class-thumb="bg-surface-950-50"
  />
  <v-switch
    v-model="switchValue"
    class="preset-tonal-surface"
    class-thumb="bg-surface-950-50"
  />
  <v-switch
    v-model="switchValue"
    class="preset-tonal-primary"
    class-thumb="bg-primary-950-50"
  />
  <v-switch
    v-model="switchValue"
    class="preset-tonal-secondary"
    class-thumb="bg-secondary-950-50"
  />
  <v-switch
    v-model="switchValue"
    class="preset-tonal-tertiary"
    class-thumb="bg-tertiary-950-50"
  />
  <v-switch
    v-model="switchValue"
    class="preset-tonal-success"
    class-thumb="bg-success-950-50"
  />
  <v-switch
    v-model="switchValue"
    class="preset-tonal-warning"
    class-thumb="bg-warning-950-50"
  />
  <v-switch
    v-model="switchValue"
    class="preset-tonal-error"
    class-thumb="bg-error-950-50"
  />
</div>`;

const switchValue = ref(false);
</script>

<template>
  <h1 class="h1">VSwitch</h1>
  <section class="section">
    <v-code-block
      language="ts"
      :code="`import { VSwitch } from '@code-coaching/vuetiful';`"
    />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template #tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">Basic</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-switch v-model="switchValue" />
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="basicTemplate" />
            </div>
          </template>
          <template #footer>
            <div class="flex items-center justify-center">
              {{ switchValue }}
            </div>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Group - Label - Description</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <div>
              <v-switch-group>
                <v-switch-label class="font-bold">A label</v-switch-label>
                <div class="flex w-[260px] items-center gap-2">
                  <v-switch v-model="switchValue" />
                  <v-switch-description
                    >The current value is:
                    {{ switchValue }}</v-switch-description
                  >
                </div>
              </v-switch-group>
            </div>
          </template>
          <template #source>
            <v-code-block language="html" :code="groupTemplate" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Accessibility</h2>
      <section class="section">
        <h3 class="h3">Keyboard Interaction</h3>
        <section class="section">
          <p>
            <kbd class="kbd">Tab</kbd>: Move focus to the next focusable
            element.
          </p>
          <p>
            <kbd class="kbd">Space</kbd>: Switches the toggle to the opposite
            state.
          </p>
          <br />
          <p>All relevant ARIA attributes are automatically managed.</p>
        </section>

        <h3 class="h3">Labels</h3>
        <section>
          <v-preview>
            <template #preview>
              <v-switch v-model="switchValue"
                >Label for screen readers</v-switch
              >
            </template>
            <template #source>
              <v-code-block
                class="mb-2"
                language="html"
                :code="labelTemplate"
              />
              <p>
                The text inside the <code class="code">v-switch</code> tag is
                only visible to screen readers.
              </p>
              <p>
                When not using an explicit label (<code class="code"
                  >v-switch-label</code
                >), do add text to the <code class="code">v-switch</code> tag
                for accessibility.
              </p>
            </template>
          </v-preview>
        </section>
      </section>

      <h2 class="h2">Presets</h2>
      <h3 class="h3">Filled</h3>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex flex-wrap gap-2">
              <v-switch
                v-model="switchValue"
                class="preset-filled"
                class-thumb="bg-surface-100-900"
              />
              <v-switch
                v-model="switchValue"
                class="preset-filled-surface-200-800"
                class-thumb="bg-surface-800-200"
              />
              <v-switch
                v-model="switchValue"
                class="preset-filled-primary-200-800"
                class-thumb="bg-primary-800-200"
              />
              <v-switch
                v-model="switchValue"
                class="preset-filled-secondary-200-800"
                class-thumb="bg-secondary-800-200"
              />
              <v-switch
                v-model="switchValue"
                class="preset-filled-tertiary-200-800"
                class-thumb="bg-tertiary-800-200"
              />
              <v-switch
                v-model="switchValue"
                class="preset-filled-success-200-800"
                class-thumb="bg-success-800-200"
              />
              <v-switch
                v-model="switchValue"
                class="preset-filled-warning-200-800"
                class-thumb="bg-warning-800-200"
              />
              <v-switch
                v-model="switchValue"
                class="preset-filled-error-200-800"
                class-thumb="bg-error-800-200"
              />
            </div>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="presetFilled" />
            </div>
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Outlined</h3>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex flex-wrap gap-2">
              <v-switch
                v-model="switchValue"
                class="preset-outlined"
                class-thumb="bg-surface-950-50"
              />
              <v-switch
                v-model="switchValue"
                class="preset-outlined-surface-200-800"
                class-thumb="bg-surface-200-800"
              />
              <v-switch
                v-model="switchValue"
                class="preset-outlined-primary-200-800"
                class-thumb="bg-primary-200-800"
              />
              <v-switch
                v-model="switchValue"
                class="preset-outlined-secondary-200-800"
                class-thumb="bg-secondary-200-800"
              />
              <v-switch
                v-model="switchValue"
                class="preset-outlined-tertiary-200-800"
                class-thumb="bg-tertiary-200-800"
              />
              <v-switch
                v-model="switchValue"
                class="preset-outlined-success-200-800"
                class-thumb="bg-success-200-800"
              />
              <v-switch
                v-model="switchValue"
                class="preset-outlined-warning-200-800"
                class-thumb="bg-warning-200-800"
              />
              <v-switch
                v-model="switchValue"
                class="preset-outlined-error-200-800"
                class-thumb="bg-error-200-800"
              />
            </div>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="presetOutlined" />
            </div>
          </template>
        </v-preview>
      </section>

      <h3 class="h3">Tonal</h3>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex flex-wrap gap-2">
              <v-switch
                v-model="switchValue"
                class="preset-tonal"
                class-thumb="bg-surface-950-50"
              />
              <v-switch
                v-model="switchValue"
                class="preset-tonal-surface"
                class-thumb="bg-surface-950-50"
              />
              <v-switch
                v-model="switchValue"
                class="preset-tonal-primary"
                class-thumb="bg-primary-950-50"
              />
              <v-switch
                v-model="switchValue"
                class="preset-tonal-secondary"
                class-thumb="bg-secondary-950-50"
              />
              <v-switch
                v-model="switchValue"
                class="preset-tonal-tertiary"
                class-thumb="bg-tertiary-950-50"
              />
              <v-switch
                v-model="switchValue"
                class="preset-tonal-success"
                class-thumb="bg-success-950-50"
              />
              <v-switch
                v-model="switchValue"
                class="preset-tonal-warning"
                class-thumb="bg-warning-950-50"
              />
              <v-switch
                v-model="switchValue"
                class="preset-tonal-error"
                class-thumb="bg-error-950-50"
              />
            </div>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="basicScript" />
              <v-code-block language="html" :code="presetTonal" />
            </div>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
