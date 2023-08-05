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
  VTab,
  VTabPanel,
  VTabs,
} from '@code-coaching/vuetiful';
import { AlertUnstyled } from 'src/components';

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

const unstyledTemplate = `<div class="flex flex-wrap items-start justify-center gap-4 overflow-y-auto">
  <v-card unstyled class="w-[20rem]">
    <v-card-header unstyled>
      <img class="overflow-hidden" src="/img/john-duck.png" alt="Vuetiful Logo" />
    </v-card-header>

    <v-card-body unstyled>
      <h3 class="mb-4">Vuetiful Is Beautiful</h3>
      <p>
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of the Vue.js framework with
        visually pleasing and elegant design.
      </p>
    </v-card-body>

    <v-card-footer unstyled>
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          <v-avatar src="/img/john-duck.png" width="w-8" />
          <div class="font-semibold">John Duck</div>
        </div>
        <small>{{ currentDate }}</small>
      </div>
    </v-card-footer>
  </v-card>

  <v-card unstyled class="w-[20rem]">
    <v-card-header unstyled>
      <h3 class="mb-0">Ceci n'est pas une carte</h3>
    </v-card-header>

    <v-card-body unstyled>
      <h3 class="mb-4">Vuetiful Is Beautiful</h3>
      <p>
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of the Vue.js framework with
        visually pleasing and elegant design.
      </p>
    </v-card-body>

    <v-card-footer unstyled>
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

const unstyledPropTemplate = `<div class="flex flex-wrap items-start justify-center gap-4 overflow-y-auto">
  <v-card unstyled class="w-[20rem]" background="" text="" hide-separator>
    <v-card-header unstyled class-separator="">
      <img class="overflow-hidden" src="/img/john-duck.png" alt="Vuetiful Logo" />
    </v-card-header>

    <v-card-body unstyled>
      <h3 class="mb-4">Vuetiful Is Beautiful</h3>
      <p>
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of the Vue.js framework with
        visually pleasing and elegant design.
      </p>
    </v-card-body>

    <v-card-footer unstyled>
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          <v-avatar src="/img/john-duck.png" width="w-8" />
          <div class="font-semibold">John Duck</div>
        </div>
        <small>{{ currentDate }}</small>
      </div>
    </v-card-footer>
  </v-card>

  <v-card unstyled class="w-[20rem]" background="" text="">
    <v-card-header unstyled>
      <h3 class="mb-0">Ceci n'est pas une carte</h3>
    </v-card-header>

    <v-card-body unstyled>
      <h3 class="mb-4">Vuetiful Is Beautiful</h3>
      <p>
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of the Vue.js framework with
        visually pleasing and elegant design.
      </p>
    </v-card-body>

    <v-card-footer unstyled hide-separator>
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

const unstyledCustomTemplate = '';
</script>

<template>
  <h1>VCard</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VCard } from '@code-coaching/vuetiful`" />
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
            <div class="flex flex-wrap items-start justify-center gap-4 overflow-y-auto">
              <v-card class="w-[20rem]">
                <v-card-header>
                  <img class="overflow-hidden" src="/img/john-duck.png" alt="Vuetiful Logo" />
                </v-card-header>

                <v-card-body>
                  <h3 class="mb-4">Vuetiful Is Beautiful</h3>
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
                  <h3 class="mb-4">Vuetiful Is Beautiful</h3>
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

      <h2>Accessibility</h2>
      <v-alert class="mb-4" type="info" hide-close>
        Add the property <v-badge variant="filled-surface">clickable</v-badge> to the
        <v-badge variant="filled-surface">v-card</v-badge> component to make it accessible.
      </v-alert>
      <section class="section">
        <h3>Keyboard Interaction</h3>
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
                  <h3 class="mb-4">Vuetiful Is Beautiful</h3>
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
            Having the prop <code>clickable</code> present adds an hover effect.
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
            <div class="flex flex-wrap items-start justify-center gap-4 overflow-y-auto">
              <v-card unstyled class="w-[20rem]">
                <v-card-header unstyled>
                  <img class="overflow-hidden" src="/img/john-duck.png" alt="Vuetiful Logo" />
                </v-card-header>

                <v-card-body unstyled>
                  <h3 class="mb-4">Vuetiful Is Beautiful</h3>
                  <p>
                    Vuetiful is a portmanteau of Vue and Beautiful, combining the power of the Vue.js framework with
                    visually pleasing and elegant design.
                  </p>
                </v-card-body>

                <v-card-footer unstyled>
                  <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-2">
                      <v-avatar src="/img/john-duck.png" width="w-8" />
                      <div class="font-semibold">John Duck</div>
                    </div>
                    <small>{{ currentDate }}</small>
                  </div>
                </v-card-footer>
              </v-card>

              <v-card unstyled class="w-[20rem]">
                <v-card-header unstyled>
                  <h3 class="mb-0">Ceci n'est pas une carte</h3>
                </v-card-header>

                <v-card-body unstyled>
                  <h3 class="mb-4">Vuetiful Is Beautiful</h3>
                  <p>
                    Vuetiful is a portmanteau of Vue and Beautiful, combining the power of the Vue.js framework with
                    visually pleasing and elegant design.
                  </p>
                </v-card-body>

                <v-card-footer unstyled>
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
            <v-code-block language="html" :code="unstyledTemplate" />
          </template>
        </v-preview>
      </section>

      <h2>No prop-based styles</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap items-start justify-center gap-4 overflow-y-auto">
              <v-card unstyled class="w-[20rem]" background="" text="" hide-separator>
                <v-card-header unstyled>
                  <img class="overflow-hidden" src="/img/john-duck.png" alt="Vuetiful Logo" />
                </v-card-header>

                <v-card-body unstyled>
                  <h3 class="mb-4">Vuetiful Is Beautiful</h3>
                  <p>
                    Vuetiful is a portmanteau of Vue and Beautiful, combining the power of the Vue.js framework with
                    visually pleasing and elegant design.
                  </p>
                </v-card-body>

                <v-card-footer unstyled>
                  <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-2">
                      <v-avatar src="/img/john-duck.png" width="w-8" />
                      <div class="font-semibold">John Duck</div>
                    </div>
                    <small>{{ currentDate }}</small>
                  </div>
                </v-card-footer>
              </v-card>

              <v-card unstyled class="w-[20rem]" background="" text="">
                <v-card-header unstyled>
                  <h3 class="mb-0">Ceci n'est pas une carte</h3>
                </v-card-header>

                <v-card-body unstyled>
                  <h3 class="mb-4">Vuetiful Is Beautiful</h3>
                  <p>
                    Vuetiful is a portmanteau of Vue and Beautiful, combining the power of the Vue.js framework with
                    visually pleasing and elegant design.
                  </p>
                </v-card-body>

                <v-card-footer unstyled hide-separator>
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
            <v-code-block class="mb-2" language="html" :code="unstyledPropTemplate" />
            <p>Set <code>variant</code> to an empty string to have no prop-based styles.</p>
          </template>
        </v-preview>
      </section>

      <h2>Custom style example</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap items-start justify-center gap-4 overflow-y-auto">
              <v-card unstyled class="w-[20rem] flex-col-reverse border border-black" background="" text="">
                <v-card-header unstyled class="bg-green-600 p-8 text-white" class-separator="border-black">
                  <img class="overflow-hidden" src="/img/john-duck.png" alt="Vuetiful Logo" />
                </v-card-header>

                <v-card-body unstyled class="bg-red-600 p-8 text-white">
                  <h3 class="mb-4">Vuetiful Is Beautiful</h3>
                  <p>
                    Vuetiful is a portmanteau of Vue and Beautiful, combining the power of the Vue.js framework with
                    visually pleasing and elegant design.
                  </p>
                </v-card-body>

                <v-card-footer unstyled class="bg-blue-600 p-8 text-white" class-separator="border-black">
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
            <v-code-block language="html" :code="unstyledCustomTemplate" />
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
