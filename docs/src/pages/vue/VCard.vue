<script setup lang="ts">
import {
  VAlert,
  VAvatar,
  VBadge,
  VCard,
  VCardBody,
  VCardFooter,
  VCardHeader,
  VCodeBlock,
  VPreview,
} from '@code-coaching/vuetiful';

const currentDate = new Date().toLocaleDateString();

const onClick = () => {
  alert('Clicked!');
};

const usageScript = 'const currentDate = new Date().toLocaleDateString();';
const usageTemplate = `<div class="flex flex-wrap items-start justify-center gap-4 overflow-y-auto">
  <v-card class="w-[20rem]">
    <v-card-header>
      <img class="overflow-hidden" src="/img/john-duck.png" alt="Vuetiful Logo" />
    </v-card-header>

    <v-card-body>
      <h3>Vuetiful Is Beautiful</h3>
      <p>
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of the Vue.js framework with
        visually pleasing and elegant design.
      </p>
    </v-card-body>

    <v-card-footer>
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          <v-avatar src="/img/john-duck.png" width="w-8" />
          <div class="font-semibold">John Duck</div>
        </div>
        <small>{{ currentDate }}</small>
      </div>
    </v-card-footer>
  </v-card>

  <v-card class="w-[20rem]">
    <v-card-header>
      <h3 class="mb-0">Ceci n'est pas une carte</h3>
    </v-card-header>

    <v-card-body>
      <h3>Vuetiful Is Beautiful</h3>
      <p>
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of the Vue.js framework with
        visually pleasing and elegant design.
      </p>
    </v-card-body>

    <v-card-footer>
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          <v-avatar src="/img/john-duck.png" width="w-8" />
          <div class="font-semibold">John Duck</div>
        </div>
        <small>{{ currentDate }}</small>
      </div>
    </v-card-footer>
  </v-card>
</div>`;

const a11yScript = `const currentDate = new Date().toLocaleDateString();

const onClick = () => {
  alert('Clicked!');
};`;
const a11yTemplate = `<div class="flex flex-wrap gap-2">
  <v-card clickable class="w-[20rem]" @click="onClick">
    <v-card-header>
      <img class="overflow-hidden" src="/img/john-duck.png" alt="Vuetiful Logo" />
    </v-card-header>

    <v-card-body>
      <h3>Vuetiful Is Beautiful</h3>
      <p>
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of the Vue.js framework with
        visually pleasing and elegant design.
      </p>
    </v-card-body>

    <v-card-footer>
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          <v-avatar src="/img/john-duck.png" width="w-8" />
          <div class="font-semibold">John Duck</div>
        </div>
        <small>
          {{ currentDate }}
        </small>
      </div>
    </v-card-footer>
  </v-card>
</div>`;
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VCard</h1>
    <section class="section">
      <v-code-block language="ts" :code="`import { VCard } from '@code-coaching/vuetiful`" />
    </section>

    <h2>Usage</h2>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap items-start justify-center gap-4 overflow-y-auto">
            <v-card class="w-[20rem]">
              <v-card-header>
                <img class="overflow-hidden" src="/img/john-duck.png" alt="Vuetiful Logo" />
              </v-card-header>

              <v-card-body>
                <h3>Vuetiful Is Beautiful</h3>
                <p>
                  Vuetiful is a portmanteau of Vue and Beautiful, combining the power of the Vue.js framework with
                  visually pleasing and elegant design.
                </p>
              </v-card-body>

              <v-card-footer>
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center gap-2">
                    <v-avatar src="/img/john-duck.png" width="w-8" />
                    <div class="font-semibold">John Duck</div>
                  </div>
                  <small>{{ currentDate }}</small>
                </div>
              </v-card-footer>
            </v-card>

            <v-card class="w-[20rem]">
              <v-card-header>
                <h3 class="mb-0">Ceci n'est pas une carte</h3>
              </v-card-header>

              <v-card-body>
                <h3>Vuetiful Is Beautiful</h3>
                <p>
                  Vuetiful is a portmanteau of Vue and Beautiful, combining the power of the Vue.js framework with
                  visually pleasing and elegant design.
                </p>
              </v-card-body>

              <v-card-footer>
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center gap-2">
                    <v-avatar src="/img/john-duck.png" width="w-8" />
                    <div class="font-semibold">John Duck</div>
                  </div>
                  <small>{{ currentDate }}</small>
                </div>
              </v-card-footer>
            </v-card>
          </div>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-2" language="ts" :code="usageScript" />
          <v-code-block language="html" :code="usageTemplate" />
        </template>
      </v-preview>
    </section>

    <h3>Accessibility</h3>
    <v-alert class="mb-4" type="info" hide-close>
      Add the property <v-badge class="variant-filled-surface">clickable</v-badge> to the
      <v-badge class="variant-filled-surface">v-card</v-badge> component to make it accessible.
    </v-alert>
    <section class="section">
      <h4>Keyboard Interaction</h4>
      <section>
        <p><kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>: Move focus onto and away from the card.</p>
        <p><kbd>Enter</kbd> and <kbd>Space</kbd>: Execute the <code>@click</code> event handler.</p>
      </section>
    </section>

    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-wrap gap-2">
            <v-card clickable class="w-[20rem]" @click="onClick">
              <v-card-header>
                <img class="overflow-hidden" src="/img/john-duck.png" alt="Vuetiful Logo" />
              </v-card-header>

              <v-card-body>
                <h3>Vuetiful Is Beautiful</h3>
                <p>
                  Vuetiful is a portmanteau of Vue and Beautiful, combining the power of the Vue.js framework with
                  visually pleasing and elegant design.
                </p>
              </v-card-body>

              <v-card-footer>
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center gap-2">
                    <v-avatar src="/img/john-duck.png" width="w-8" />
                    <div class="font-semibold">John Duck</div>
                  </div>
                  <small>
                    {{ currentDate }}
                  </small>
                </div>
              </v-card-footer>
            </v-card>
          </div>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-2" language="ts" :code="a11yScript" />
          <v-code-block class="mb-2" language="html" :code="a11yTemplate" />
          <v-alert type="info" hide-close
            >Having the prop <v-badge class="variant-filled-surface">clickable</v-badge> present adds an hover
            effect.</v-alert
          >
        </template>
      </v-preview>
    </section>
  </div>
</template>
