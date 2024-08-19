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
} from "@code-coaching/vuetiful";
import { CheckIcon, CodeIcon, GhostIcon } from "lucide-vue-next";
import { computed, ref } from "vue";

const radioValue = ref("vuetiful");
const radioObjectValue = ref({ id: "vuetiful", name: "Vuetiful" });
const defaultExample = `<div class="flex flex-wrap gap-2">
  <div>
    <div class="font-bold">default</div>
    <v-radio-group v-model="radioValue">
      <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
      <v-radio-item value="is">Is</v-radio-item>
      <v-radio-item value="beautiful">Beautiful</v-radio-item>
    </v-radio-group>
  </div>
  <div>
    <div class="font-bold">icon</div>
    <v-radio-group v-model="radioValue">
      <v-radio-item value="vuetiful">
        <check-icon />
      </v-radio-item>
      <v-radio-item value="is">
        <ghost-icon />
      </v-radio-item>
      <v-radio-item value="beautiful"> <code-icon /></v-radio-item>
    </v-radio-group>
  </div>
</div>`;

const a11yValue = ref("basic");
const a11yExample = `<div class="font-bold">Example using <code class="code">v-radio-label</code> and <code class="code">v-radio-description</code></div>
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

const objectExample = `<div>
  <div class="font-bold">by</div>
  <v-radio-group by="id" v-model="radioObjectValue">
    <v-radio-item :value="{ id: 'vuetiful', name: 'Vuetiful' }">
      Vuetiful
    </v-radio-item>
    <v-radio-item :value="{ id: 'is', name: 'Is' }">
      Is
    </v-radio-item>
    <v-radio-item :value="{ id: 'beautiful', name: 'Beautiful' }">
      Beautiful
    </v-radio-item>
  </v-radio-group>
</div>`;

const option = ref("surface");

const filledExample = computed(
  () => `<div>
  <div class="font-bold">${option.value}</div>
  <v-radio-group
    class-item-active="preset-filled-${option.value}-800-200"
    v-model="radioValue"
  >
    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
    <v-radio-item value="is">Is</v-radio-item>
    <v-radio-item value="beautiful">Beautiful</v-radio-item>
  </v-radio-group>
</div>`,
);
const filledBgExample = computed(
  () => `<div>
  <div class="font-bold">${option.value}</div>
  <v-radio-group
    class="bg-${option.value}-100-900"
    class-item-active="preset-filled-${option.value}-800-200"
    class-item-hover="hover:preset-outlined-${option.value}-800-200"
    v-model="radioValue"
  >
    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
    <v-radio-item value="is">Is</v-radio-item>
    <v-radio-item value="beautiful">Beautiful</v-radio-item>
  </v-radio-group>
</div>`,
);

const tonalExample = computed(
  () => `<div>
  <div class="font-bold">${option.value}</div>
  <v-radio-group
    class-item-active="preset-tonal-${option.value}"
    v-model="radioValue"
  >
    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
    <v-radio-item value="is">Is</v-radio-item>
    <v-radio-item value="beautiful">Beautiful</v-radio-item>
  </v-radio-group>
</div>`,
);
const tonalBgExample = computed(
  () => `<div>
  <div class="font-bold">${option.value}</div>
  <v-radio-group
    class="bg-${option.value}-300-700"
    class-item-active="preset-tonal-${option.value}"
    class-item-hover="hover:preset-outlined-${option.value}-800-200"
    v-model="radioValue"
  >
    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
    <v-radio-item value="is">Is</v-radio-item>
    <v-radio-item value="beautiful">Beautiful</v-radio-item>
  </v-radio-group>
</div>`,
);

const outlinedExample = computed(
  () => `<div>
  <div class="font-bold">${option.value}</div>
  <v-radio-group
    class-item-active="preset-outlined-${option.value}-800-200"
    class-item-hover="hover:bg-transparent/30"
    v-model="radioValue"
  >
    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
    <v-radio-item value="is">Is</v-radio-item>
    <v-radio-item value="beautiful">Beautiful</v-radio-item>
  </v-radio-group>
</div>`,
);
const outlinedBgExample = computed(
  () => `<div>
  <div class="font-bold">${option.value}</div>
  <v-radio-group
    class="bg-${option.value}-100-900"
    class-item-active="preset-outlined-${option.value}-800-200"
    class-item-hover="hover:bg-transparent/30"
    v-model="radioValue"
  >
    <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
    <v-radio-item value="is">Is</v-radio-item>
    <v-radio-item value="beautiful">Beautiful</v-radio-item>
  </v-radio-group>
</div>`,
);

const customExample = computed(
  () => `<v-radio-group
  class-item-active="bg-blue-500 text-white"
  class-item-hover="hover:border-blue-500 dark:hover:border-blue-500"
  v-model="radioValue"
>
  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
  <v-radio-item
    class-active="bg-green-500 text-black"
    class-hover="hover:border-green-500 dark:hover:border-green-500"
    value="is"
  >
    Is
  </v-radio-item>
  <v-radio-item
    class-active="bg-red-500 text-white"
    class-hover="hover:border-red-500 dark:hover:border-red-500"
    value="beautiful"
  >
    Beautiful
  </v-radio-item>
</v-radio-group>`,
);
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
    <template #tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">Basic</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <div class="flex flex-wrap gap-2">
              <div>
                <div class="font-bold">default</div>
                <v-radio-group v-model="radioValue">
                  <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                  <v-radio-item value="is">Is</v-radio-item>
                  <v-radio-item value="beautiful">Beautiful</v-radio-item>
                </v-radio-group>
              </div>
              <div>
                <div class="font-bold">icon</div>
                <v-radio-group v-model="radioValue">
                  <v-radio-item value="vuetiful">
                    <check-icon />
                  </v-radio-item>
                  <v-radio-item value="is">
                    <ghost-icon />
                  </v-radio-item>
                  <v-radio-item value="beautiful"> <code-icon /></v-radio-item>
                </v-radio-group>
              </div>
            </div>
          </template>
          <template #source>
            <div class="flex flex-col gap-4">
              <v-code-block
                language="ts"
                :code="`const radioValue = ref('${radioValue}');`"
              />
              <v-code-block language="html" :code="defaultExample" />
            </div>
          </template>
          <template #footer>
            <p class="flex items-center justify-center">
              <code class="code">{{ radioValue }}</code>
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Object as value</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <div>
              <div class="font-bold">by</div>
              <v-radio-group by="id" v-model="radioObjectValue">
                <v-radio-item :value="{ id: 'vuetiful', name: 'Vuetiful' }">
                  Vuetiful
                </v-radio-item>
                <v-radio-item :value="{ id: 'is', name: 'Is' }">
                  Is
                </v-radio-item>
                <v-radio-item :value="{ id: 'beautiful', name: 'Beautiful' }">
                  Beautiful
                </v-radio-item>
              </v-radio-group>
            </div>
          </template>
          <template #source>
            <v-code-block
              class="mb-2"
              language="ts"
              :code="`const radioValue = ref({ id: ${radioObjectValue.id}, name: ${radioObjectValue.name} });`"
            />
            <v-code-block class="mb-2" language="html" :code="objectExample" />
            The <code class="code">by</code> attribute on the
            <code class="code">v-radio-group</code> contains the value of the
            property to filter by.
          </template>
          <template #footer>
            <p class="flex items-center justify-center">
              <code class="code">{{ radioObjectValue }}</code>
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Accessibility</h2>
      <section class="section">
        <h3 class="h3">Keyboard Interaction</h3>
        <section>
          <p>
            <kbd class="kbd">Tab</kbd> and <kbd class="kbd">Shift + Tab</kbd>:
            Move focus into and out of the radio group.
          </p>
          <p>
            <kbd class="kbd">Space</kbd> and <kbd class="kbd">Enter</kbd>:
            Checks the focused radio button if it is not already checked.
          </p>
          <p>
            <kbd class="kbd">Right Arrow</kbd> and
            <kbd class="kbd">Down Arrow</kbd>: Select the next radio button in
            the group.
          </p>
          <p>
            <kbd class="kbd">Left Arrow</kbd> and
            <kbd class="kbd">Up Arrow</kbd>: Select the previous radio button in
            the group.
          </p>
        </section>
      </section>
      <section class="section">
        <v-preview>
          <template #preview>
            <div>
              <div class="font-bold">
                Example using <code class="code">v-radio-label</code> and
                <code class="code">v-radio-description</code>
              </div>
              <div>
                <v-radio-group v-model="a11yValue">
                  <v-radio-label class="sr-only"
                    >Label for v-radio-group only visible to screen
                    readers</v-radio-label
                  >
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
          <template #source>
            <v-code-block
              class="mb-2"
              language="ts"
              :code="`const radioValue = ref('${a11yValue}');`"
            />
            <v-code-block class="mb-2" language="html" :code="a11yExample" />
            <p>
              Adding <code class="code">disabled</code> to a
              <code class="code">v-radio-item</code> will disable the radio
              button.
            </p>
            <p>
              Using <code class="code">v-radio-label</code> and
              <code class="code">v-radio-description</code> is optional, but
              recommended for accessibility.
            </p>
            <p>
              A <code class="code">v-radio-label</code> will automatically
              generate the id for the label and the
              <code class="code">aria-labbeledby</code> attribute for the
              closest <code class="code">v-radio-item</code> or
              <code class="code">v-radio-group</code> parent.
            </p>
            <p>
              A <code class="code">v-radio-description</code> will automatically
              generate the id for the description and the
              <code class="code">aria-describedby</code> attribute for the
              closest <code class="code">v-radio-item</code> or
              <code class="code">v-radio-group</code> parent.
            </p>
            <p>
              Add <code class="code">class="sr-only"</code> on the
              <code class="code">v-radio-label</code> to hide the label
              visually, but still make it available to screen readers.
            </p>
          </template>
          <template #footer>
            <p class="flex items-center justify-center">
              <code class="code">{{ a11yValue }}</code>
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Presets</h2>
      <section class="section">
        <h3 class="h3">Filled</h3>
        <section class="section">
          <v-preview>
            <template #preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    class-item-active="preset-filled-surface-800-200"
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
                    class-item-active="preset-filled-primary-800-200"
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
                    class-item-active="preset-filled-secondary-800-200"
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
                    class-item-active="preset-filled-tertiary-800-200"
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
                    class-item-active="preset-filled-success-800-200"
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
                    class-item-active="preset-filled-warning-800-200"
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
                    class-item-active="preset-filled-error-800-200"
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
            <template #source>
              <div class="flex flex-col gap-4">
                <v-code-block
                  language="ts"
                  :code="`const radioValue = ref('${radioValue}');`"
                />
                <v-code-block language="html" :code="filledExample" />
              </div>
            </template>
          </v-preview>
        </section>
        <section class="section">
          <v-preview>
            <template #preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    class="bg-surface-100-900"
                    class-item-active="preset-filled-surface-800-200"
                    class-item-hover="hover:bg-transparent/30-800-200"
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
                    class="bg-primary-100-900"
                    class-item-active="preset-filled-primary-800-200"
                    class-item-hover="hover:preset-outlined-primary-800-200"
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
                    class="bg-secondary-100-900"
                    class-item-active="preset-filled-secondary-800-200"
                    class-item-hover="hover:preset-outlined-secondary-800-200"
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
                    class="bg-tertiary-100-900"
                    class-item-active="preset-filled-tertiary-800-200"
                    class-item-hover="hover:preset-outlined-tertiary-800-200"
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
                    class="bg-success-100-900"
                    class-item-active="preset-filled-success-800-200"
                    class-item-hover="hover:preset-outlined-success-800-200"
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
                    class="bg-warning-100-900"
                    class-item-active="preset-filled-warning-800-200"
                    class-item-hover="hover:preset-outlined-warning-800-200"
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
                    class="bg-error-100-900"
                    class-item-active="preset-filled-error-800-200"
                    class-item-hover="hover:preset-outlined-error-800-200"
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
            <template #source>
              <div class="flex flex-col gap-4">
                <v-code-block
                  language="ts"
                  :code="`const radioValue = ref('${radioValue}');`"
                />
                <v-code-block language="html" :code="filledBgExample" />
              </div>
            </template>
          </v-preview>
        </section>

        <h3 class="h3">Tonal</h3>
        <section class="section">
          <v-preview>
            <template #preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    class-item-active="preset-tonal-surface"
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
                    class-item-active="preset-tonal-primary"
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
                    class-item-active="preset-tonal-secondary"
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
                    class-item-active="preset-tonal-tertiary"
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
                    class-item-active="preset-tonal-success"
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
                    class-item-active="preset-tonal-warning"
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
                    class-item-active="preset-tonal-error"
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
            <template #source>
              <div class="flex flex-col gap-4">
                <v-code-block
                  language="ts"
                  :code="`const radioValue = ref('${radioValue}');`"
                />
                <v-code-block language="html" :code="tonalExample" />
              </div>
            </template>
          </v-preview>
        </section>
        <section class="section">
          <v-preview>
            <template #preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    class="bg-surface-300-700"
                    class-item-active="preset-tonal-surface"
                    class-item-hover="hover:bg-transparent/30-800-200"
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
                    class="bg-primary-300-700"
                    class-item-active="preset-tonal-primary"
                    class-item-hover="hover:preset-outlined-primary-800-200"
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
                    class="bg-secondary-300-700"
                    class-item-active="preset-tonal-secondary"
                    class-item-hover="hover:preset-outlined-secondary-800-200"
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
                    class="bg-tertiary-300-700"
                    class-item-active="preset-tonal-tertiary"
                    class-item-hover="hover:preset-outlined-tertiary-800-200"
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
                    class="bg-success-300-700"
                    class-item-active="preset-tonal-success"
                    class-item-hover="hover:preset-outlined-success-800-200"
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
                    class="bg-warning-300-700"
                    class-item-active="preset-tonal-warning"
                    class-item-hover="hover:preset-outlined-warning-800-200"
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
                    class="bg-error-300-700"
                    class-item-active="preset-tonal-error"
                    class-item-hover="hover:preset-outlined-error-800-200"
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
            <template #source>
              <div class="flex flex-col gap-4">
                <v-code-block
                  language="ts"
                  :code="`const radioValue = ref('${radioValue}');`"
                />
                <v-code-block language="html" :code="tonalBgExample" />
              </div>
            </template>
          </v-preview>
        </section>

        <h3 class="h3">Outlined</h3>
        <section class="section">
          <v-preview>
            <template #preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    class-item-active="preset-outlined-surface-800-200"
                    class-item-hover="hover:bg-transparent/30"
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
                    class-item-active="preset-outlined-primary-800-200"
                    class-item-hover="hover:bg-transparent/30"
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
                    class-item-active="preset-outlined-secondary-900-100"
                    class-item-hover="hover:bg-transparent/30"
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
                    class-item-active="preset-outlined-tertiary-800-200"
                    class-item-hover="hover:bg-transparent/30"
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
                    class-item-active="preset-outlined-success-800-200"
                    class-item-hover="hover:bg-transparent/30"
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
                    class-item-active="preset-outlined-warning-800-200"
                    class-item-hover="hover:bg-transparent/30"
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
                    class-item-active="preset-outlined-error-800-200"
                    class-item-hover="hover:bg-transparent/30"
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
            <template #source>
              <div class="flex flex-col gap-4">
                <v-code-block
                  language="ts"
                  :code="`const radioValue = ref('${radioValue}');`"
                />
                <v-code-block language="html" :code="outlinedExample" />
              </div>
            </template>
          </v-preview>
        </section>
        <section class="section">
          <v-preview>
            <template #preview>
              <div class="flex flex-wrap gap-2">
                <div>
                  <div class="font-bold">surface</div>
                  <v-radio-group
                    class="bg-surface-100-900"
                    class-item-active="preset-outlined-surface-800-200"
                    class-item-hover="hover:bg-transparent/30"
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
                    class="bg-primary-100-900"
                    class-item-active="preset-outlined-primary-800-200"
                    class-item-hover="hover:bg-transparent/30"
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
                    class="bg-secondary-100-900"
                    class-item-active="preset-outlined-secondary-800-200"
                    class-item-hover="hover:bg-transparent/30"
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
                    class="bg-tertiary-100-900"
                    class-item-active="preset-outlined-tertiary-800-200"
                    class-item-hover="hover:bg-transparent/30"
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
                    class="bg-success-100-900"
                    class-item-active="preset-outlined-success-800-200"
                    class-item-hover="hover:bg-transparent/30"
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
                    class="bg-warning-100-900"
                    class-item-active="preset-outlined-warning-800-200"
                    class-item-hover="hover:bg-transparent/30"
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
                    class="bg-error-100-900"
                    class-item-active="preset-outlined-error-800-200"
                    class-item-hover="hover:bg-transparent/30"
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
            <template #source>
              <div class="flex flex-col gap-4">
                <v-code-block
                  language="ts"
                  :code="`const radioValue = ref('${radioValue}');`"
                />
                <v-code-block language="html" :code="outlinedBgExample" />
              </div>
            </template>
          </v-preview>
        </section>

        <h2 class="h2">Custom</h2>
        <section class="section">
          <v-preview>
            <template #preview>
              <v-radio-group
                class-item-active="bg-blue-500 text-white"
                class-item-hover="hover:border-blue-500 dark:hover:border-blue-500"
                v-model="radioValue"
              >
                <v-radio-item value="vuetiful">Vuetiful</v-radio-item>
                <v-radio-item
                  class-active="bg-green-500 text-black"
                  class-hover="hover:border-green-500 dark:hover:border-green-500"
                  value="is"
                >
                  Is
                </v-radio-item>
                <v-radio-item
                  class-active="bg-red-500 text-white"
                  class-hover="hover:border-red-500 dark:hover:border-red-500"
                  value="beautiful"
                >
                  Beautiful
                </v-radio-item>
              </v-radio-group>
            </template>
            <template #source>
              <div class="flex flex-col gap-4">
                <v-code-block
                  language="ts"
                  :code="`const radioValue = ref('${radioValue}');`"
                />
                <v-code-block language="html" :code="customExample" />
                <p>
                  Do pass <code class="code">class-item-active</code> and
                  <code class="code">class-item-hover</code> to
                  <code class="code">v-radio-group</code> to configure active
                  and hover classes to be applied to all
                  <code class="code">v-radio-item</code> children.
                </p>
                <p>
                  Do pass <code class="code">class-active</code> and
                  <code class="code">class-hover</code> to
                  <code class="code">v-radio-item</code> to configure active and
                  hover classes to be applied to this specific
                  <code class="code">v-radio-item</code> child.
                </p>
              </div>
            </template>
          </v-preview>
        </section>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
