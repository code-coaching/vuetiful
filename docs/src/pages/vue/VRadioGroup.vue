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
<v-radio-group active="variant-filled-${option.value}" v-model="radioValue">
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`
);
const filledBgExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group
  background="bg-${option.value}-100-800-token"
  active="variant-filled-${option.value}"
  hover="hover:variant-ghost-${option.value}"
  v-model="radioValue"
>
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`
);

const ringedExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group active="variant-ringed-${option.value}" v-model="radioValue">
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`
);
const ringedBgExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group
  background="bg-${option.value}-100-800-token"
  active="variant-ringed-${option.value}"
  hover="hover:variant-ghost-${option.value}"
  v-model="radioValue"
>
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`
);

const ghostExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group active="variant-ghost-${option.value}" hover="hover:variant-soft-surface" v-model="radioValue">
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`
);
const ghostBgExample = computed(
  () => `<v-radio-group
  background="bg-${option.value}-100-800-token"
  active="variant-ghost-${option.value}"
  hover="hover:variant-soft-${option.value}"
  v-model="radioValue"
>
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`
);

const softExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group active="variant-soft-${option.value}" v-model="radioValue">
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`
);
const softBgExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group
  background="bg-${option.value}-100-800-token"
  active="variant-glass-${option.value}"
  hover="hover:variant-ghost-${option.value}"
  v-model="radioValue"
>
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>
`
);

const glassExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group
  background="variant-glass-surface"
  active="variant-glass-${option.value}"
  v-model="radioValue"
>
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`
);
const glassBgExample = computed(
  () => `<div class="font-bold">${option.value}</div>
<v-radio-group
  background="variant-glass-${option.value}"
  active="variant-glass-${option.value}"
  hover="hover:variant-ghost-${option.value}"
  v-model="radioValue"
>
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item value="is">Is</v-radio-item>
  <v-radio-item value="beautiful">Beautiful</v-radio-item>
</v-radio-group>`
);

const unstyledTemplate = `<v-radio-group v-model="radioValue" unstyled>
  <v-radio-item value="vuetiful" unstyled>Vuetiful</v-radio-item>
  <v-radio-item value="is" unstyled>Is</v-radio-item>
  <v-radio-item value="beautiful" unstyled>Beautiful</v-radio-item>
</v-radio-group>`;
const unstyledPropTemplate = '';
const unstyledCustomTemplate = '';
</script>

<template>
  <h1>VRadioGroup</h1>
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
      <h2>Basic</h2>
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
            <div class="flex flex-col gap-2">
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

      <h2>Object as value</h2>
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

      <h2>Accessibility</h2>
      <section class="section">
        <h3>Keyboard Interaction</h3>
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

      <h2>Variants</h2>
      <section class="section">
        <h3>Filled</h3>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    active="variant-filled-surface"
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
                    active="variant-filled-primary"
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
                    active="variant-filled-secondary"
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
                    active="variant-filled-tertiary"
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
                    active="variant-filled-success"
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
                    active="variant-filled-warning"
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
                  <v-radio-group active="variant-filled-error" v-model="radioValue" @click="() => (option = 'error')">
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>
              </div>
            </template>
            <template v-slot:source>
              <div class="flex flex-col gap-2">
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
                    background="bg-surface-100-800-token"
                    active="variant-filled-surface"
                    hover="hover:variant-ghost-surface"
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
                    background="bg-primary-100-800-token"
                    active="variant-filled-primary"
                    hover="hover:variant-ghost-primary"
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
                    background="bg-secondary-100-800-token"
                    active="variant-filled-secondary"
                    hover="hover:variant-ghost-secondary"
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
                    background="bg-tertiary-100-800-token"
                    active="variant-filled-tertiary"
                    hover="hover:variant-ghost-tertiary"
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
                    background="bg-success-100-800-token"
                    active="variant-filled-success"
                    hover="hover:variant-ghost-success"
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
                    background="bg-warning-100-800-token"
                    active="variant-filled-warning"
                    hover="hover:variant-ghost-warning"
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
                    background="bg-error-100-800-token"
                    active="variant-filled-error"
                    hover="hover:variant-ghost-error"
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
              <div class="flex flex-col gap-2">
                <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
                <v-code-block language="html" :code="filledBgExample" />
              </div>
            </template>
          </v-preview>
        </section>

        <h3>Ringed</h3>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    active="variant-ringed-surface"
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
                    active="variant-ringed-primary"
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
                    active="variant-ringed-secondary"
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
                    active="variant-ringed-tertiary"
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
                    active="variant-ringed-success"
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
                    active="variant-ringed-warning"
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
                  <v-radio-group active="variant-ringed-error" v-model="radioValue" @click="() => (option = 'error')">
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>
              </div>
            </template>
            <template v-slot:source>
              <div class="flex flex-col gap-2">
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
                    background="bg-surface-100-800-token"
                    active="variant-ringed-surface"
                    hover="hover:variant-ghost-surface"
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
                    background="bg-primary-100-800-token"
                    active="variant-ringed-primary"
                    hover="hover:variant-ghost-primary"
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
                    background="bg-secondary-100-800-token"
                    active="variant-ringed-secondary"
                    hover="hover:variant-ghost-secondary"
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
                    background="bg-tertiary-100-800-token"
                    active="variant-ringed-tertiary"
                    hover="hover:variant-ghost-tertiary"
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
                    background="bg-success-100-800-token"
                    active="variant-ringed-success"
                    hover="hover:variant-ghost-success"
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
                    background="bg-warning-100-800-token"
                    active="variant-ringed-warning"
                    hover="hover:variant-ghost-warning"
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
                    background="bg-error-100-800-token"
                    active="variant-ringed-error"
                    hover="hover:variant-ghost-error"
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
              <div class="flex flex-col gap-2">
                <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
                <v-code-block language="html" :code="ringedBgExample" />
              </div>
            </template>
          </v-preview>
        </section>

        <h3>Ghost</h3>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    active="variant-ghost-surface"
                    hover="hover:variant-soft-surface"
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
                    active="variant-ghost-primary"
                    hover="hover:variant-soft-surface"
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
                    active="variant-ghost-secondary"
                    hover="hover:variant-soft-surface"
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
                    active="variant-ghost-tertiary"
                    hover="hover:variant-soft-surface"
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
                    active="variant-ghost-success"
                    hover="hover:variant-soft-surface"
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
                    active="variant-ghost-warning"
                    hover="hover:variant-soft-surface"
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
                    active="variant-ghost-error"
                    hover="hover:variant-soft-surface"
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
              <div class="flex flex-col gap-2">
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
                    background="bg-surface-100-800-token"
                    active="variant-ghost-surface"
                    hover="hover:variant-soft-surface"
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
                    background="bg-primary-100-800-token"
                    active="variant-ghost-primary"
                    hover="hover:variant-soft-primary"
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
                    background="bg-secondary-100-800-token"
                    active="variant-ghost-secondary"
                    hover="hover:variant-soft-secondary"
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
                    background="bg-tertiary-100-800-token"
                    active="variant-ghost-tertiary"
                    hover="hover:variant-soft-tertiary"
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
                    background="bg-success-100-800-token"
                    active="variant-ghost-success"
                    hover="hover:variant-soft-success"
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
                    background="bg-warning-100-800-token"
                    active="variant-ghost-warning"
                    hover="hover:variant-soft-warning"
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
                    background="bg-error-100-800-token"
                    active="variant-ghost-error"
                    hover="hover:variant-soft-error"
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
              <div class="flex flex-col gap-2">
                <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
                <v-code-block language="html" :code="ghostBgExample" />
              </div>
            </template>
          </v-preview>
        </section>

        <h3>Soft</h3>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group active="variant-soft-surface" v-model="radioValue" @click="() => (option = 'surface')">
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">primary</div>
                  <v-radio-group active="variant-soft-primary" v-model="radioValue" @click="() => (option = 'primary')">
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">secondary</div>
                  <v-radio-group
                    active="variant-soft-secondary"
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
                    active="variant-soft-tertiary"
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
                  <v-radio-group active="variant-soft-success" v-model="radioValue" @click="() => (option = 'success')">
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">warning</div>
                  <v-radio-group active="variant-soft-warning" v-model="radioValue" @click="() => (option = 'warning')">
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>

                <div>
                  <div class="font-bold">error</div>
                  <v-radio-group active="variant-soft-error" v-model="radioValue" @click="() => (option = 'error')">
                    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                    <v-radio-item value="is">Is</v-radio-item>
                    <v-radio-item value="beautiful">Beautiful</v-radio-item>
                  </v-radio-group>
                </div>
              </div>
            </template>
            <template v-slot:source>
              <div class="flex flex-col gap-2">
                <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
                <v-code-block language="html" :code="softExample" />
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
                    background="bg-surface-100-800-token"
                    active="variant-soft-surface"
                    hover="hover:variant-ghost-surface"
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
                    background="bg-primary-100-800-token"
                    active="variant-soft-primary"
                    hover="hover:variant-ghost-primary"
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
                    background="bg-secondary-100-800-token"
                    active="variant-soft-secondary"
                    hover="hover:variant-ghost-secondary"
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
                    background="bg-tertiary-100-800-token"
                    active="variant-soft-tertiary"
                    hover="hover:variant-ghost-tertiary"
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
                    background="bg-success-100-800-token"
                    active="variant-soft-success"
                    hover="hover:variant-ghost-success"
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
                    background="bg-warning-100-800-token"
                    active="variant-soft-warning"
                    hover="hover:variant-ghost-warning"
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
                    background="bg-error-100-800-token"
                    active="variant-soft-error"
                    hover="hover:variant-ghost-error"
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
              <div class="flex flex-col gap-2">
                <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
                <v-code-block language="html" :code="softBgExample" />
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
                style="
                  background: url('https://i.imgur.com/DdrZVb7.gif') center center no-repeat;
                  background-size: cover;
                "
              >
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    background="variant-glass-surface"
                    active="variant-glass-surface"
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
                    background="variant-glass-surface"
                    active="variant-glass-primary"
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
                    background="variant-glass-surface"
                    active="variant-glass-secondary"
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
                    background="variant-glass-surface"
                    active="variant-glass-tertiary"
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
                    background="variant-glass-surface"
                    active="variant-glass-success"
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
                    background="variant-glass-surface"
                    active="variant-glass-warning"
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
                    background="variant-glass-surface"
                    active="variant-glass-error"
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
            <template v-slot:footer>
              <div class="flex items-center justify-center">
                <a target="_blank" href="https://www.markferrari.com/"> Image Source </a>
              </div>
            </template>

            <template v-slot:source>
              <div class="flex flex-col gap-2">
                <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
                <v-code-block language="html" :code="glassExample" />
              </div>
            </template>
          </v-preview>
        </section>
        <section>
          <v-preview hide-swatches region-viewport="!p-0">
            <template v-slot:preview>
              <div
                class="flex w-full flex-wrap items-center justify-center gap-2 p-4 md:p-10"
                style="
                  background: url('https://i.imgur.com/DdrZVb7.gif') center center no-repeat;
                  background-size: cover;
                "
              >
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    background="variant-glass-surface"
                    active="variant-glass-surface"
                    hover="hover:variant-ghost-surface"
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
                    background="variant-glass-primary"
                    active="variant-glass-primary"
                    hover="hover:variant-ghost-primary"
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
                    background="variant-glass-secondary"
                    active="variant-glass-secondary"
                    hover="hover:variant-ghost-secondary"
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
                    background="variant-glass-tertiary"
                    active="variant-glass-tertiary"
                    hover="hover:variant-ghost-tertiary"
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
                    background="variant-glass-success"
                    active="variant-glass-success"
                    hover="hover:variant-ghost-success"
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
                    background="variant-glass-warning"
                    active="variant-glass-warning"
                    hover="hover:variant-ghost-warning"
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
                    background="variant-glass-error"
                    active="variant-glass-error"
                    hover="hover:variant-ghost-error"
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
            <template v-slot:footer>
              <div class="flex items-center justify-center">
                <a target="_blank" href="https://www.markferrari.com/"> Image Source </a>
              </div>
            </template>

            <template v-slot:source>
              <div class="flex flex-col gap-2">
                <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
                <v-code-block language="html" :code="glassBgExample" />
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
            <div class="flex flex-col gap-2">
              <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
              <v-code-block language="html" :code="unstyledTemplate" />
            </div>
          </template>
        </v-preview>
      </section>

      <h2>No prop-based styles</h2>
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

      <h2>Custom style example</h2>
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
              class="p-4 flex flex-col gap-2"
              class-item="p-2"
            >
              <v-radio-item value="vuetiful" unstyled>Vuetiful</v-radio-item>
              <v-radio-item value="is" unstyled>Is</v-radio-item>
              <v-radio-item value="beautiful" unstyled>Beautiful</v-radio-item>
            </v-radio-group>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-2">
              <v-code-block language="ts" :code="`const radioValue = ref('${radioValue}');`" />
              <v-code-block language="html" :code="unstyledCustomTemplate" />
            </div>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
