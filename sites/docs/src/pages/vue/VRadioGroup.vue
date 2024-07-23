<script setup lang="ts">
import {
  VCodeBlock,
  VPreview,
  VRadioDescription,
  VRadioGroup,
  VRadioItem,
  VRadioLabel,
  VTab,
  VTabPanel,
  VTabs,
} from '@code-coaching/vuetiful';
import { AlertUnstyled } from 'src/components';
import { computed, ref } from 'vue';

const radioValue = ref('vuetiful');
const radioObjectValue = ref({ id: 'vuetiful', name: 'Vuetiful' });
const defaultExample = `<div class="font-bold">default</div>
<v-radio-group v-model="radioValue">
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>

<div class="font-bold">icon</div>
<v-radio-group v-model="radioValue">
  <v-radio-item value="vuetiful">
    <i class="fa-solid fa-check" />
  </v-radio-item>
  <v-radio-item value="is">
    <i class="fa-solid fa-ghost" />
  </v-radio-item>
  <v-radio-item value="beautiful">
    <i class="fa-solid fa-code" />
  </v-radio-item>
</v-radio-group>`;

const a11yValue = ref('basic');
const a11yExample = `<div class="font-bold">Example using <code>v-radio-label</code> and <code>v-radio-description</code></div>
<v-radio-group v-model="a11yValue">
<v-radio-label class="sr-only">Label for v-radio-group only visible to screen readers</v-radio-label>
  <v-radio-item disabled value="free" class="flex flex-col">
    <v-radio-label class="font-bold">Free</v-radio-label>
    <v-radio-description>
      <div class="text-xs">€0 / month</div>
    </v-radio-description>
  </v-radio-item>
  <v-radio-item value="basic" class="flex flex-col">
    <v-radio-label class="font-bold">Basic</v-radio-label>
    <v-radio-description>
      <div class="text-xs">€5 / month</div>
    </v-radio-description>
  </v-radio-item>
  <v-radio-item value="pro" class="flex flex-col">
    <v-radio-label class="font-bold">Pro</v-radio-label>
    <v-radio-description>
      <div class="text-xs">€9 / month</div>
    </v-radio-description>
  </v-radio-item>
</v-radio-group>`;

const objectExample = `<div class="font-bold">by</div>
<v-radio-group by="id" v-model="radioObjectValue">
  <v-radio-item :value="{ id: 'vuetiful', name: 'Vuetiful' }">Vuetiful</v-radio-item>
  <v-radio-item :value="{ id: 'is', name: 'Is' }">Is</v-radio-item>
  <v-radio-item :value="{ id: 'beautiful', name: 'Beautiful' }">Beautiful</v-radio-item>
</v-radio-group>`;

const option = ref('surface');

const filledExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group active="preset-filled-${option.value}" v-model="radioValue">
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`,
);
const filledBgExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group
  background="bg-${option.value}-100-900"
  active="preset-filled-${option.value}"
  hover="hover:preset-outlined-${option.value}"
  v-model="radioValue"
>
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`,
);

const ringedExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group active="preset-tonal-${option.value}" v-model="radioValue">
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`,
);
const ringedBgExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group
  background="bg-${option.value}-100-900"
  active="preset-tonal-${option.value}"
  hover="hover:preset-outlined-${option.value}"
  v-model="radioValue"
>
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`,
);

const ghostExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group active="preset-outlined-${option.value}" hover="hover:preset-soft-surface" v-model="radioValue">
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`,
);
const ghostBgExample = computed(
  () => `<v-radio-group
  background="bg-${option.value}-100-900"
  active="preset-outline-${option.value}"
  hover="hover:preset-soft-${option.value}"
  v-model="radioValue"
>
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`,
);

const softExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group active="preset-soft-${option.value}" v-model="radioValue">
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`,
);
const softBgExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group
  background="bg-${option.value}-100-900"
  active="preset-glass-${option.value}"
  hover="hover:preset-outline-${option.value}"
  v-model="radioValue"
>
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>
`,
);

const glassExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group
  background="preset-glass-surface"
  active="preset-glass-${option.value}"
  v-model="radioValue"
>
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`,
);
const glassBgExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group
  background="preset-glass-${option.value}"
  active="preset-glass-${option.value}"
  hover="hover:preset-outline-${option.value}"
  v-model="radioValue"
>
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`,
);

const unstyledTemplate = `<v-radio-group v-model="radioValue" unstyled>
  <v-radio-item value="vuetiful" unstyled>Vuetiful</v-radio-item>
  <v-radio-item value="is" unstyled>Is</v-radio-item>
  <v-radio-item value="beautiful" unstyled>Beautiful</v-radio-item>
</v-radio-group>`;
const unstyledPropTemplate = `<v-radio-group v-model="radioValue" unstyled background="" text="" hover="" active="">
  <v-radio-item value="vuetiful" unstyled>Vuetiful</v-radio-item>
  <v-radio-item value="is" unstyled>Is</v-radio-item>
  <v-radio-item value="beautiful" unstyled>Beautiful</v-radio-item>
</v-radio-group>`;
const unstyledCustomTemplate = `<v-radio-group
  v-model="radioValue"
  unstyled
  background="bg-blue-600"
  text="text-white"
  hover="hover:bg-blue-500"
  active="bg-green-600"
  class="flex flex-col gap-2 p-4"
  class-item="p-2"
>
  <v-radio-item value="vuetiful" unstyled>Vuetiful</v-radio-item>
  <v-radio-item value="is" unstyled>Is</v-radio-item>
  <v-radio-item value="beautiful" unstyled>Beautiful</v-radio-item>
</v-radio-group>`;
</script>

<template>
  <h1 class="h1">VRadioGroup</h1>
  <section class="section">
    <v-code-block
      language="ts"
      :code="`import { VRadioGroup, VRadioItem, VRadioLabel, VRadioDescription } from '@code-coaching/vuetiful';`"
    />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template v-slot:tabs>
      <v-tab>Usage</v-tab>
      <v-tab>Unstyled</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">Basic</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap gap-2">
              <div>
                <div class="font-bold">default</div>
                <div>
                  <v-radio-group v-model="radioValue">
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>
              </div>
              <div>
                <div class="font-bold">icon</div>
                <div>
                  <v-radio-group v-model="radioValue">
                    <v-radio-item value="vuetiful"><i class="fa-solid fa-check" /></v-radio-item>
                    <v-radio-item value="is"><i class="fa-solid fa-ghost" /></v-radio-item>
                    <v-radio-item value="beautiful"><i class="fa-solid fa-code" /></v-radio-item>
                  </v-radio-group>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
              <v-code-block language="html" :code="defaultExample" />
            </div>
          </template>
          <template v-slot:footer>
            <p class="flex items-center justify-center">
              <code>{{ radioValue }}</code>
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Object as value</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div>
              <div class="font-bold">by</div>
              <v-radio-group by="id" v-model="radioObjectValue">
                <v-radio-item :value="{ id: 'vuetiful', name: 'Vuetiful' }">Vuetiful</v-radio-item>
                <v-radio-item :value="{ id: 'is', name: 'Is' }">Is</v-radio-item>
                <v-radio-item :value="{ id: 'beautiful', name: 'Beautiful' }">Beautiful</v-radio-item>
              </v-radio-group>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block
              class="mb-2"
              language="ts"
              :code="`const radioValue = ref({ id: ${radioObjectValue.id}, name: ${radioObjectValue.name} });`"
            />
            <v-code-block class="mb-2" language="html" :code="objectExample" />
            The <code>by</code> attribute on the <code>v-radio-group</code> contains the value of the property to filter
            by.
          </template>
          <template v-slot:footer>
            <p class="flex items-center justify-center">
              <code>{{ radioObjectValue }}</code>
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Accessibility</h2>
      <section class="section">
        <h3 class="h3">Keyboard Interaction</h3>
        <section>
          <p><kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>: Move focus into and out of the radio group.</p>
          <p><kbd>Space</kbd> and <kbd>Enter</kbd>: Checks the focused radio button if it is not already checked.</p>
          <p><kbd>Right Arrow</kbd> and <kbd>Down Arrow</kbd>: Select the next radio button in the group.</p>
          <p><kbd>Left Arrow</kbd> and <kbd>Up Arrow</kbd>: Select the previous radio button in the group.</p>
        </section>
      </section>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div>
              <div class="font-bold">Example using <code>v-radio-label</code> and <code>v-radio-description</code></div>
              <div>
                <v-radio-group v-model="a11yValue">
                  <v-radio-label class="sr-only">Label for v-radio-group only visible to screen readers</v-radio-label>
                  <v-radio-item disabled value="free" class="flex flex-col">
                    <v-radio-label class="font-bold">Free</v-radio-label>
                    <v-radio-description>
                      <div class="text-xs">€0 / month</div>
                    </v-radio-description>
                  </v-radio-item>
                  <v-radio-item value="basic" class="flex flex-col">
                    <v-radio-label class="font-bold">Basic</v-radio-label>
                    <v-radio-description>
                      <div class="text-xs">€5 / month</div>
                    </v-radio-description>
                  </v-radio-item>
                  <v-radio-item value="pro" class="flex flex-col">
                    <v-radio-label class="font-bold">Pro</v-radio-label>
                    <v-radio-description>
                      <div class="text-xs">€9 / month</div>
                    </v-radio-description>
                  </v-radio-item>
                </v-radio-group>
              </div>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="ts" :code="`const radioValue = ref('${a11yValue}');`" />
            <v-code-block class="mb-2" language="html" :code="a11yExample" />
            <p>Adding <code>disabled</code> to a <code>v-radio-item</code> will disable the radio button.</p>
            <p>
              Using <code>v-radio-label</code> and <code>v-radio-description</code> is optional, but recommended for
              accessibility.
            </p>
            <p>
              A <code>v-radio-label</code> will automatically generate the id for the label and the
              <code>aria-labbeledby</code> attribute for the closest <code>v-radio-item</code> or
              <code>v-radio-group</code> parent.
            </p>
            <p>
              A <code>v-radio-description</code> will automatically generate the id for the description and the
              <code>aria-describedby</code> attribute for the closest <code>v-radio-item</code> or
              <code>v-radio-group</code> parent.
            </p>
            <p>
              Add <code>class="sr-only"</code> on the <code>v-radio-label</code> to hide the label visually, but still
              make it available to screen readers.
            </p>
          </template>
          <template v-slot:footer>
            <p class="flex items-center justify-center">
              <code>{{ a11yValue }}</code>
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Presets</h2>
      <section class="section">
        <h3 class="h3">Filled</h3>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    active="preset-filled-surface-500"
                    v-model="radioValue"
                    @click="() => (option = 'surface')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">primary</div>
                  <v-radio-group
                    active="preset-filled-primary-500"
                    v-model="radioValue"
                    @click="() => (option = 'primary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">secondary</div>
                  <v-radio-group
                    active="preset-filled-secondary-500"
                    v-model="radioValue"
                    @click="() => (option = 'secondary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">tertiary</div>
                  <v-radio-group
                    active="preset-filled-tertiary-500"
                    v-model="radioValue"
                    @click="() => (option = 'tertiary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">success</div>
                  <v-radio-group
                    active="preset-filled-success-500"
                    v-model="radioValue"
                    @click="() => (option = 'success')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">warning</div>
                  <v-radio-group
                    active="preset-filled-warning-500"
                    v-model="radioValue"
                    @click="() => (option = 'warning')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">error</div>
                  <v-radio-group
                    active="preset-filled-error-500"
                    v-model="radioValue"
                    @click="() => (option = 'error')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>
              </div>
            </template>
            <template v-slot:source>
              <div class="flex flex-col gap-4">
                <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
                <v-code-block language="html" :code="filledExample" />
              </div>
            </template>
          </v-preview>
        </section>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    background="bg-surface-100-900"
                    active="preset-filled-surface-500"
                    hover="hover:preset-outlined-surface-500"
                    v-model="radioValue"
                    @click="() => (option = 'surface')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">primary</div>
                  <v-radio-group
                    background="bg-primary-100-900"
                    active="preset-filled-primary-500"
                    hover="hover:preset-outlined-primary-500"
                    v-model="radioValue"
                    @click="() => (option = 'primary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">secondary</div>
                  <v-radio-group
                    background="bg-secondary-100-900"
                    active="preset-filled-secondary-500"
                    hover="hover:preset-outlined-secondary-500"
                    v-model="radioValue"
                    @click="() => (option = 'secondary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">tertiary</div>
                  <v-radio-group
                    background="bg-tertiary-100-900"
                    active="preset-filled-tertiary-500"
                    hover="hover:preset-outlined-tertiary-500"
                    v-model="radioValue"
                    @click="() => (option = 'tertiary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">success</div>
                  <v-radio-group
                    background="bg-success-100-900"
                    active="preset-filled-success-500"
                    hover="hover:preset-outlined-success-500"
                    v-model="radioValue"
                    @click="() => (option = 'success')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">warning</div>
                  <v-radio-group
                    background="bg-warning-100-900"
                    active="preset-filled-warning-500"
                    hover="hover:preset-outlined-warning-500"
                    v-model="radioValue"
                    @click="() => (option = 'warning')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">error</div>
                  <v-radio-group
                    background="bg-error-100-900"
                    active="preset-filled-error-500"
                    hover="hover:preset-outlined-error-500"
                    v-model="radioValue"
                    @click="() => (option = 'error')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>
              </div>
            </template>
            <template v-slot:source>
              <div class="flex flex-col gap-4">
                <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
                <v-code-block language="html" :code="filledBgExample" />
              </div>
            </template>
          </v-preview>
        </section>

        <h3 class="h3">Tonal</h3>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    active="preset-tonal-surface"
                    v-model="radioValue"
                    @click="() => (option = 'surface')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">primary</div>
                  <v-radio-group active="preset-tonal-primary" v-model="radioValue" @click="() => (option = 'primary')">
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">secondary</div>
                  <v-radio-group
                    active="preset-tonal-secondary"
                    v-model="radioValue"
                    @click="() => (option = 'secondary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">tertiary</div>
                  <v-radio-group
                    active="preset-tonal-tertiary"
                    v-model="radioValue"
                    @click="() => (option = 'tertiary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">success</div>
                  <v-radio-group active="preset-tonal-success" v-model="radioValue" @click="() => (option = 'success')">
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">warning</div>
                  <v-radio-group active="preset-tonal-warning" v-model="radioValue" @click="() => (option = 'warning')">
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">error</div>
                  <v-radio-group active="preset-tonal-error" v-model="radioValue" @click="() => (option = 'error')">
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>
              </div>
            </template>
            <template v-slot:source>
              <div class="flex flex-col gap-4">
                <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
                <v-code-block language="html" :code="ringedExample" />
              </div>
            </template>
          </v-preview>
        </section>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    background="bg-surface-300-700"
                    active="preset-tonal-surface"
                    hover="hover:preset-outlined-surface-500"
                    v-model="radioValue"
                    @click="() => (option = 'surface')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">primary</div>
                  <v-radio-group
                    background="bg-primary-300-700"
                    active="preset-tonal-primary"
                    hover="hover:preset-outlined-primary-500"
                    v-model="radioValue"
                    @click="() => (option = 'primary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">secondary</div>
                  <v-radio-group
                    background="bg-secondary-300-700"
                    active="preset-tonal-secondary"
                    hover="hover:preset-outlined-secondary-500"
                    v-model="radioValue"
                    @click="() => (option = 'secondary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">tertiary</div>
                  <v-radio-group
                    background="bg-tertiary-300-700"
                    active="preset-tonal-tertiary"
                    hover="hover:preset-outlined-tertiary-500"
                    v-model="radioValue"
                    @click="() => (option = 'tertiary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">success</div>
                  <v-radio-group
                    background="bg-success-300-700"
                    active="preset-tonal-success"
                    hover="hover:preset-outlined-success-500"
                    v-model="radioValue"
                    @click="() => (option = 'success')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">warning</div>
                  <v-radio-group
                    background="bg-warning-300-700"
                    active="preset-tonal-warning"
                    hover="hover:preset-outlined-warning-500"
                    v-model="radioValue"
                    @click="() => (option = 'warning')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">error</div>
                  <v-radio-group
                    background="bg-error-300-700"
                    active="preset-tonal-error"
                    hover="hover:preset-outlined-error-500"
                    v-model="radioValue"
                    @click="() => (option = 'error')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>
              </div>
            </template>
            <template v-slot:source>
              <div class="flex flex-col gap-4">
                <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
                <v-code-block language="html" :code="ringedBgExample" />
              </div>
            </template>
          </v-preview>
        </section>

        <h3 class="h3">Outlined</h3>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    active="preset-outlined-surface-500"
                    hover="hover:preset-soft-surface"
                    v-model="radioValue"
                    @click="() => (option = 'surface')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">primary</div>
                  <v-radio-group
                    active="preset-outlined-primary-500"
                    hover="hover:preset-soft-surface"
                    v-model="radioValue"
                    @click="() => (option = 'primary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">secondary</div>
                  <v-radio-group
                    active="preset-outlined-secondary-900-100"
                    hover="hover:preset-soft-surface"
                    v-model="radioValue"
                    @click="() => (option = 'secondary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">tertiary</div>
                  <v-radio-group
                    active="preset-outlined-tertiary-500"
                    hover="hover:preset-soft-surface"
                    v-model="radioValue"
                    @click="() => (option = 'tertiary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">success</div>
                  <v-radio-group
                    active="preset-outlined-success-500"
                    hover="hover:preset-soft-surface"
                    v-model="radioValue"
                    @click="() => (option = 'success')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">warning</div>
                  <v-radio-group
                    active="preset-outlined-warning-500"
                    hover="hover:preset-soft-surface"
                    v-model="radioValue"
                    @click="() => (option = 'warning')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">error</div>
                  <v-radio-group
                    active="preset-outlined-error-500"
                    hover="hover:preset-soft-surface"
                    v-model="radioValue"
                    @click="() => (option = 'error')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>
              </div>
            </template>
            <template v-slot:source>
              <div class="flex flex-col gap-4">
                <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
                <v-code-block language="html" :code="ghostExample" />
              </div>
            </template>
          </v-preview>
        </section>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    background="bg-surface-100-900"
                    active="preset-outlined-surface-500"
                    hover="hover:preset-soft-surface"
                    v-model="radioValue"
                    @click="() => (option = 'surface')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">primary</div>
                  <v-radio-group
                    background="bg-primary-100-900"
                    active="preset-outlined-primary-500"
                    hover="hover:preset-soft-primary"
                    v-model="radioValue"
                    @click="() => (option = 'primary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">secondary</div>
                  <v-radio-group
                    background="bg-secondary-100-900"
                    active="preset-outlined-secondary-500"
                    hover="hover:preset-soft-secondary"
                    v-model="radioValue"
                    @click="() => (option = 'secondary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">tertiary</div>
                  <v-radio-group
                    background="bg-tertiary-100-900"
                    active="preset-outlined-tertiary-500"
                    hover="hover:preset-soft-tertiary"
                    v-model="radioValue"
                    @click="() => (option = 'tertiary')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">success</div>
                  <v-radio-group
                    background="bg-success-100-900"
                    active="preset-outlined-success-500"
                    hover="hover:preset-soft-success"
                    v-model="radioValue"
                    @click="() => (option = 'success')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">warning</div>
                  <v-radio-group
                    background="bg-warning-100-900"
                    active="preset-outlined-warning-500"
                    hover="hover:preset-soft-warning"
                    v-model="radioValue"
                    @click="() => (option = 'warning')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">error</div>
                  <v-radio-group
                    background="bg-error-100-900"
                    active="preset-outlined-error-500"
                    hover="hover:preset-soft-error"
                    v-model="radioValue"
                    @click="() => (option = 'error')"
                  >
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>
              </div>
            </template>
            <template v-slot:source>
              <div class="flex flex-col gap-4">
                <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
                <v-code-block language="html" :code="ghostBgExample" />
              </div>
            </template>
          </v-preview>
        </section>
      </section>
    </v-tab-panel>
    <v-tab-panel>
      <section class="section">
        <alert-unstyled />
      </section>

      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-radio-group v-model="radioValue" unstyled>
              <v-radio-item value="vuetiful" unstyled>Vuetiful</v-radio-item>
              <v-radio-item value="is" unstyled>Is</v-radio-item>
              <v-radio-item value="beautiful" unstyled>Beautiful</v-radio-item>
            </v-radio-group>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
              <v-code-block language="html" :code="unstyledTemplate" />
            </div>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">No prop-based styles</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-radio-group v-model="radioValue" unstyled background="" text="" hover="" active="">
              <v-radio-item value="vuetiful" unstyled>Vuetiful</v-radio-item>
              <v-radio-item value="is" unstyled>Is</v-radio-item>
              <v-radio-item value="beautiful" unstyled>Beautiful</v-radio-item>
            </v-radio-group>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-2 mb-2">
              <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
              <v-code-block language="html" :code="unstyledPropTemplate" />
            </div>
            <p>
              Set <code>background</code>, <code>text</code>, <code>hover</code> and <code>active</code> to an empty
              string to have no prop-based styles.
            </p>
          </template>
          <template v-slot:footer>
            <p class="flex items-center justify-center">
              <code>{{ radioValue }}</code>
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Custom style example</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-radio-group
              v-model="radioValue"
              unstyled
              background="bg-blue-600"
              text="text-white"
              hover="hover:bg-blue-500"
              active="bg-green-600"
              class="flex flex-col gap-2 p-4"
              class-item="p-2"
            >
              <v-radio-item value="vuetiful" unstyled>Vuetiful</v-radio-item>
              <v-radio-item value="is" unstyled>Is</v-radio-item>
              <v-radio-item value="beautiful" unstyled>Beautiful</v-radio-item>
            </v-radio-group>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
              <v-code-block language="html" :code="unstyledCustomTemplate" />
            </div>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
