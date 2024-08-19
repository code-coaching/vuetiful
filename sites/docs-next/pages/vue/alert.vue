<script setup lang="ts">
import {
  VAlert,
  VButton,
  VCodeBlock,
  VPreview,
  VTab,
  VTabPanel,
  VTabs,
} from "@code-coaching/vuetiful";
import { ref } from "vue";

const usageTemplate = `<div class="flex w-full flex-col gap-2">
  <v-alert type="info">This is an info alert.</v-alert>
  <v-alert type="success">This is a success alert.</v-alert>
  <v-alert type="warning">This is a warning alert.</v-alert>
  <v-alert type="error">This is an error alert.</v-alert>
</div>`;

const customScript = "const showCustomAlert = ref(true);";
const customTemplate = `<v-alert hide-icon show-close :show="showCustomAlert" @close="showCustomAlert = false" type="warning">
  This is a warning alert without an icon or actions.
</v-alert>`;

const customSlotsScript = `const handleCustomAction = () => {
  alert('Custom action clicked!');
};`;
const customSlotsTemplate = `<v-alert
  class="bg-[#42b883] bg-gradient-to-r from-[#35495e] via-[#42b883] to-[#35495e] text-xl text-white"
>
  <template #pre>
    <!-- https://lucide.dev/icons/ghost -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-ghost h-6"
    >
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path
        d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"
      />
    </svg>
  </template>
  This is a custom alert with a custom icon and a custom action.
  <template #actions>
    <v-button
      class="bg-white text-black"
      @click="handleCustomAction"
    >
      Custom
    </v-button>
  </template>
</v-alert>`;

const showCustomAlert = ref(true);

const handleCustomAction = () => {
  alert("Custom action clicked!");
};
</script>

<template>
  <h1 class="h1">VAlert</h1>
  <section class="section">
    <v-code-block
      language="ts"
      :code="`import { VAlert } from '@code-coaching/vuetiful';`"
    />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template #tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex w-full flex-col gap-2">
              <v-alert type="info">This is an info alert.</v-alert>
              <v-alert type="success">This is a success alert.</v-alert>
              <v-alert type="warning">This is a warning alert.</v-alert>
              <v-alert type="error">This is an error alert.</v-alert>
            </div>
          </template>
          <template #source>
            <v-code-block language="html" :code="usageTemplate" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Accessibility</h2>
      <section class="section">
        <p>
          <kbd class="kbd">Tab</kbd> and <kbd class="kbd">Shift + Tab</kbd>:
          Move focus onto and away from the alert.
        </p>
        <p>
          <kbd class="kbd">Space</kbd> and <kbd class="kbd">Enter</kbd>: Close
          the alert.
        </p>
      </section>

      <h2 class="h2">Customization</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-alert
              hide-icon
              show-close
              :show="showCustomAlert"
              @close="showCustomAlert = false"
              type="warning"
            >
              This is a warning alert without an icon or actions.
            </v-alert>
          </template>
          <template #footer>
            <div class="flex justify-center">
              <v-button
                class="preset-filled-warning-500"
                @click="showCustomAlert = !showCustomAlert"
                >Toggle Alert</v-button
              >
            </div>
          </template>
          <template #source>
            <v-code-block class="mb-2" language="ts" :code="customScript" />
            <v-code-block class="mb-2" language="html" :code="customTemplate" />
            <p>
              <code class="code">hide-icon</code> will hide the icon in the
              alert.
            </p>
            <p>
              <code class="code">show-close</code> will show the close button in
              the alert.
            </p>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview>
          <template #preview>
            <v-alert
              class="bg-[#42b883] bg-gradient-to-r from-[#35495e] via-[#42b883] to-[#35495e] text-xl text-white"
            >
              <template #pre>
                <!-- https://lucide.dev/icons/ghost -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-ghost h-6"
                >
                  <path d="M9 10h.01" />
                  <path d="M15 10h.01" />
                  <path
                    d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"
                  />
                </svg>
              </template>
              This is a custom alert with a custom icon and a custom action.
              <template #actions>
                <v-button
                  class="bg-white text-black"
                  @click="handleCustomAction"
                >
                  Custom
                </v-button>
              </template>
            </v-alert>
          </template>
          <template #source>
            <v-code-block
              class="mb-2"
              language="ts"
              :code="customSlotsScript"
            />
            <v-code-block
              class="mb-2"
              language="html"
              :code="customSlotsTemplate"
            />
            <p class="mt-4">
              <code class="code">#pre</code> will override the default
              content (icon).
            </p>
            <p>
              <code class="code">#actions</code> will add content to the
              actions slot (before the close button).
            </p>
            <v-alert class="mt-4" type="info">
              The <code class="code">svg</code> approach works without having
              the Lucid dependency installed. You probably want to use
              <code class="code">{{`<Ghost />`}}</code> instead.
            </v-alert>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
