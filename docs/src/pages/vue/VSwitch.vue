<script setup lang="ts">
import { VCodeBlock, VPreview, VSwitch, VSwitchDescription, VSwitchGroup, VSwitchLabel } from '@code-coaching/vuetiful';
import { ref } from 'vue';

const basicScript = 'const switchValue = ref(false);';
const basicTemplate = '<v-switch v-model="switchValue" />';

const groupTemplate = `<v-switch-group>
  <v-switch-label class="font-bold">A label</v-switch-label>
  <div class="flex items-center gap-2 w-[260px]">
    <v-switch v-model="switchValue" />
    <v-switch-description>The current value is: {{ switchValue }}</v-switch-description>
  </div>
</v-switch-group>`;

const labelTemplate = '<v-switch v-model="switchValue">Label for screen readers</v-switch>';

const variantFilled = `<v-switch v-model="switchValue" switch-class="variant-filled-surface" thumb-class="bg-surface-100" />
<v-switch v-model="switchValue" switch-class="variant-filled-primary" thumb-class="bg-primary-100" />
<v-switch v-model="switchValue" switch-class="variant-filled-secondary" thumb-class="bg-secondary-100" />
<v-switch v-model="switchValue" switch-class="variant-filled-tertiary" thumb-class="bg-tertiary-100" />
<v-switch v-model="switchValue" switch-class="variant-filled-success" thumb-class="bg-success-100" />
<v-switch v-model="switchValue" switch-class="variant-filled-warning" thumb-class="bg-warning-100" />
<v-switch v-model="switchValue" switch-class="variant-filled-error" thumb-class="bg-error-100" />`;

const variantRinged = `<v-switch v-model="switchValue" switch-class="variant-ringed-surface" thumb-class="bg-surface-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-ringed-primary" thumb-class="bg-primary-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-ringed-secondary" thumb-class="bg-secondary-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-ringed-tertiary" thumb-class="bg-tertiary-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-ringed-success" thumb-class="bg-success-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-ringed-warning" thumb-class="bg-warning-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-ringed-error" thumb-class="bg-error-800-100-token" />`;

const variantGhost = `<v-switch v-model="switchValue" switch-class="variant-ghost-surface" thumb-class="bg-surface-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-ghost-primary" thumb-class="bg-primary-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-ghost-secondary" thumb-class="bg-secondary-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-ghost-tertiary" thumb-class="bg-tertiary-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-ghost-success" thumb-class="bg-success-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-ghost-warning" thumb-class="bg-warning-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-ghost-error" thumb-class="bg-error-800-100-token" />`;

const variantSoft = `<v-switch v-model="switchValue" switch-class="variant-soft-surface" thumb-class="bg-surface-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-soft-primary" thumb-class="bg-primary-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-soft-secondary" thumb-class="bg-secondary-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-soft-tertiary" thumb-class="bg-tertiary-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-soft-success" thumb-class="bg-success-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-soft-warning" thumb-class="bg-warning-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-soft-error" thumb-class="bg-error-800-100-token" />`;

const variantGlass = `<v-switch v-model="switchValue" switch-class="variant-glass-surface" thumb-class="bg-surface-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-glass-primary" thumb-class="bg-primary-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-glass-secondary" thumb-class="bg-secondary-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-glass-tertiary" thumb-class="bg-tertiary-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-glass-success" thumb-class="bg-success-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-glass-warning" thumb-class="bg-warning-800-100-token" />
<v-switch v-model="switchValue" switch-class="variant-glass-error" thumb-class="bg-error-800-100-token" />`;

const switchValue = ref(false);
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VSwitch</h1>
    <section class="section">
      <v-code-block language="ts" :code="`import { VSwitch } from '@code-coaching/vuetiful`" />
    </section>

    <h2>Usage</h2>
    <h3>Basic</h3>
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

    <h3>Group - Label - Description</h3>
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
          <v-code-block class="mt-4" language="html" :code="groupTemplate" />
        </template>
      </v-preview>
    </section>

    <h3>Accessibility</h3>
    <section class="section">
      <h4>Keyboard Interaction</h4>
      <section class="section">
        <p><kbd>Tab</kbd>: Move focus to the next focusable element.</p>
        <p><kbd>Space</kbd>: Switches the toggle to the opposite state.</p>
        <br />
        <p>All relevant ARIA attributes are automatically managed.</p>
      </section>

      <h4>Labels</h4>
      <section>
        <v-preview>
          <template v-slot:preview>
            <v-switch v-model="switchValue">Label for screen readers</v-switch>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="labelTemplate" />
            <p>The text inside the <code>v-switch</code> tag is only visible to screen readers.</p>
            <p>
              When not using an explicit label (<code>v-switch-label</code>), do add text to the
              <code>v-switch</code> tag for accessibility.
            </p>
          </template>
        </v-preview>
      </section>
    </section>

    <h3>Variants</h3>
    <h4>Filled</h4>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap gap-2">
            <v-switch v-model="switchValue" switch-class="variant-filled-surface" thumb-class="bg-surface-100" />
            <v-switch v-model="switchValue" switch-class="variant-filled-primary" thumb-class="bg-primary-100" />
            <v-switch v-model="switchValue" switch-class="variant-filled-secondary" thumb-class="bg-secondary-100" />
            <v-switch v-model="switchValue" switch-class="variant-filled-tertiary" thumb-class="bg-tertiary-100" />
            <v-switch v-model="switchValue" switch-class="variant-filled-success" thumb-class="bg-success-100" />
            <v-switch v-model="switchValue" switch-class="variant-filled-warning" thumb-class="bg-warning-100" />
            <v-switch v-model="switchValue" switch-class="variant-filled-error" thumb-class="bg-error-100" />
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

    <h4>Ringed</h4>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap gap-2">
            <v-switch
              v-model="switchValue"
              switch-class="variant-ringed-surface"
              thumb-class="bg-surface-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-ringed-primary"
              thumb-class="bg-primary-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-ringed-secondary"
              thumb-class="bg-secondary-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-ringed-tertiary"
              thumb-class="bg-tertiary-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-ringed-success"
              thumb-class="bg-success-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-ringed-warning"
              thumb-class="bg-warning-800-100-token"
            />
            <v-switch v-model="switchValue" switch-class="variant-ringed-error" thumb-class="bg-error-800-100-token" />
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

    <h4>Ghost</h4>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap gap-2">
            <v-switch
              v-model="switchValue"
              switch-class="variant-ghost-surface"
              thumb-class="bg-surface-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-ghost-primary"
              thumb-class="bg-primary-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-ghost-secondary"
              thumb-class="bg-secondary-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-ghost-tertiary"
              thumb-class="bg-tertiary-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-ghost-success"
              thumb-class="bg-success-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-ghost-warning"
              thumb-class="bg-warning-800-100-token"
            />
            <v-switch v-model="switchValue" switch-class="variant-ghost-error" thumb-class="bg-error-800-100-token" />
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

    <h4>Soft</h4>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap gap-2">
            <v-switch
              v-model="switchValue"
              switch-class="variant-soft-surface"
              thumb-class="bg-surface-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-soft-primary"
              thumb-class="bg-primary-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-soft-secondary"
              thumb-class="bg-secondary-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-soft-tertiary"
              thumb-class="bg-tertiary-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-soft-success"
              thumb-class="bg-success-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-soft-warning"
              thumb-class="bg-warning-800-100-token"
            />
            <v-switch v-model="switchValue" switch-class="variant-soft-error" thumb-class="bg-error-800-100-token" />
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

    <h4>Glass</h4>
    <section class="section">
      <v-preview hide-swatches region-viewport="!p-0">
        <template v-slot:preview>
          <div
            class="flex w-full flex-wrap items-center justify-center gap-2 p-4 md:p-10"
            style="background: url('https://i.imgur.com/DdrZVb7.gif') center center no-repeat; background-size: cover"
          >
            <v-switch
              v-model="switchValue"
              switch-class="variant-glass-surface"
              thumb-class="bg-surface-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-glass-primary"
              thumb-class="bg-primary-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-glass-secondary"
              thumb-class="bg-secondary-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-glass-tertiary"
              thumb-class="bg-tertiary-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-glass-success"
              thumb-class="bg-success-800-100-token"
            />
            <v-switch
              v-model="switchValue"
              switch-class="variant-glass-warning"
              thumb-class="bg-warning-800-100-token"
            />
            <v-switch v-model="switchValue" switch-class="variant-glass-error" thumb-class="bg-error-800-100-token" />
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
  </div>
</template>
