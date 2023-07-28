<script setup lang="ts">
import { VAlert, VButton, VCodeBlock, VPreview } from '@code-coaching/vuetiful';
import { ref } from 'vue';

const usageTemplate = `<div class="flex w-full flex-col gap-2">
  <v-alert type="info">This is an info alert.</v-alert>
  <v-alert type="success">This is a success alert.</v-alert>
  <v-alert type="warning">This is a warning alert.</v-alert>
  <v-alert type="error">This is an error alert.</v-alert>
</div>`;

const customScript = 'const showCustomAlert = ref(true);';
const customTemplate = `<v-alert hide-icon show-close :show="showCustomAlert" @close="showCustomAlert = false" type="warning">
  This is a warning alert without an icon or actions.
</v-alert>`;

const customSlotsScript = `const handleCustomAction = () => {
  alert('Custom action clicked!');
};`;
const customSlotsTemplate = `<v-alert class="variant-ghost-primary text-primary-700-200-token">
  <template v-slot:pre>
    <!-- https://fontawesome.com/icons/ghost?f=classic&s=solid -->
    <svg
      class="fill-surface-700 dark:fill-surface-200"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path
        d="M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
      />
    </svg>
  </template>
  This is a custom alert with a custom icon and a custom action.
  <template v-slot:actions>
    <v-button class="variant-filled" @click="handleCustomAction"> Custom </v-button>
  </template>
</v-alert>`;

const showCustomAlert = ref(true);

const handleCustomAction = () => {
  alert('Custom action clicked!');
};
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VAlert</h1>
    <section class="section">
      <v-code-block language="ts" :code="`import { VAlert } from '@code-coaching/vuetiful`" />
    </section>

    <h2>Usage</h2>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex w-full flex-col gap-2">
            <v-alert type="info">This is an info alert.</v-alert>
            <v-alert type="success">This is a success alert.</v-alert>
            <v-alert type="warning">This is a warning alert.</v-alert>
            <v-alert type="error">This is an error alert.</v-alert>
          </div>
        </template>
        <template v-slot:source>
          <v-code-block language="html" :code="usageTemplate" />
        </template>
      </v-preview>
    </section>

    <h3>Accessibility</h3>
    <section class="section">
      <p><kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>: Move focus onto and away from the alert.</p>
      <p><kbd>Space</kbd> and <kbd>Enter</kbd>: Close the alert.</p>
    </section>

    <h3>Customization</h3>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <v-alert hide-icon show-close :show="showCustomAlert" @close="showCustomAlert = false" type="warning">
            This is a warning alert without an icon or actions.
          </v-alert>
        </template>
        <template v-slot:footer>
          <div class="flex justify-center">
            <v-button class="variant-filled-warning" @click="showCustomAlert = !showCustomAlert">
              Toggle Alert
            </v-button>
          </div>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-2" language="ts" :code="customScript" />
          <v-code-block class="mb-2" language="html" :code="customTemplate" />
          <p><code>hide-icon</code> will hide the icon in the alert.</p>
          <p><code>show-close</code> will show the close button in the alert.</p>
        </template>
      </v-preview>
    </section>

    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <v-alert class="variant-ghost-primary text-primary-700-200-token">
            <template v-slot:pre>
              <!-- https://fontawesome.com/icons/ghost?f=classic&s=solid -->
              <svg
                class="fill-surface-700 dark:fill-surface-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  d="M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                />
              </svg>
            </template>
            This is a custom alert with a custom icon and a custom action.
            <template v-slot:actions>
              <v-button class="variant-filled" @click="handleCustomAction"> Custom </v-button>
            </template>
          </v-alert>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-2" language="ts" :code="customSlotsScript" />
          <v-code-block class="mb-2" language="html" :code="customSlotsTemplate" />
          <p><code>v-slot:pre</code> will override the default content (icon).</p>
          <p><code>v-slot:actions</code> will add content to the actions slot (before the close button).</p>
        </template>
      </v-preview>
    </section>
  </div>
</template>
