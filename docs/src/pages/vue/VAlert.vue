<script setup lang="ts">
import { VAlert, VButton, VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';
import { AlertUnstyled } from 'src/components';
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
    <v-button @click="handleCustomAction"> Custom </v-button>
  </template>
</v-alert>`;

const unstyledTemplate = `<v-alert unstyled type="info">This is an info alert.</v-alert>
<v-alert unstyled type="success">This is a success alert.</v-alert>
<v-alert unstyled type="warning">This is a warning alert.</v-alert>
<v-alert unstyled type="error">This is an error alert.</v-alert>`;

const unstyledPropTemplate =
  '<v-alert unstyled type="">This is an unstyled alert without any prop-based styles.</v-alert>';

const unstyledCustomTemplate = `<v-alert
  unstyled
  type=""
  class="flex flex-row-reverse items-center gap-4 bg-blue-600 p-2"
  show-close
  class-close="bg-green-600"
  @close="handleCloseAction"
  class-pre="bg-red-600 p-1"
>
  <template v-slot:pre>
    <!-- https://fontawesome.com/icons/ghost?f=classic&s=solid -->
    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512">
      <path
        d="M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
      />
    </svg>
  </template>
  This is an unstyled alert with custom styles.
</v-alert>`;

const showCustomAlert = ref(true);

const handleCustomAction = () => {
  alert('Custom action clicked!');
};
const handleCloseAction = () => {
  alert('Close action clicked!');
};
</script>

<template>
  <h1>VAlert</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VAlert } from '@code-coaching/vuetiful`" />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template v-slot:tabs>
      <v-tab>Usage</v-tab>
      <v-tab>Unstyled</v-tab>
    </template>
    <v-tab-panel>
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

      <h2>Accessibility</h2>
      <section class="section">
        <p><kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>: Move focus onto and away from the alert.</p>
        <p><kbd>Space</kbd> and <kbd>Enter</kbd>: Close the alert.</p>
      </section>

      <h2>Customization</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-alert hide-icon show-close :show="showCustomAlert" @close="showCustomAlert = false" type="warning">
              This is a warning alert without an icon or actions.
            </v-alert>
          </template>
          <template v-slot:footer>
            <div class="flex justify-center">
              <v-button variant="filled-warning" @click="showCustomAlert = !showCustomAlert">Toggle Alert</v-button>
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
                <v-button @click="handleCustomAction"> Custom </v-button>
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
    </v-tab-panel>
    <v-tab-panel>
      <section class="section">
        <alert-unstyled />
      </section>

      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex w-full flex-col gap-2">
              <v-alert unstyled type="info">This is an info alert.</v-alert>
              <v-alert unstyled type="success">This is a success alert.</v-alert>
              <v-alert unstyled type="warning">This is a warning alert.</v-alert>
              <v-alert unstyled type="error">This is an error alert.</v-alert>
            </div>
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
            <v-alert unstyled type="">This is an unstyled alert without any prop-based styles.</v-alert>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="unstyledPropTemplate" />
            <p>Set <code>type</code> to an empty string to have no prop-based styles.</p>
          </template>
        </v-preview>
      </section>

      <h2>Custom style example</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-alert
              unstyled
              type=""
              class="flex flex-row-reverse items-center gap-4 bg-blue-600 p-2 text-white"
              show-close
              class-close="bg-green-600"
              @close="handleCloseAction"
              class-pre="bg-red-600 p-1"
            >
              <template v-slot:pre>
                <!-- https://fontawesome.com/icons/ghost?f=classic&s=solid -->
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill="white" viewBox="0 0 384 512">
                  <path
                    d="M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                  />
                </svg>
              </template>
              This is an unstyled alert with custom styles.
            </v-alert>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="unstyledCustomTemplate" />
            <p>Set <code>type</code> to an empty string to have no prop-based styles.</p>
            <p><code>class</code> will add classes to the alert.</p>
            <p><code>class-pre</code> will add classes to the pre slot.</p>
            <p><code>class-close</code> will add classes to the close button.</p>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
