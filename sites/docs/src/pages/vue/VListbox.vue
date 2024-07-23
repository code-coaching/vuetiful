<script setup lang="ts">
import { VCodeBlock, VListbox, VListboxItem, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';
import { AlertUnstyled } from 'src/components';
import { ref } from 'vue';

const basicScript = 'const choice = ref();';
const basicTemplate = `<v-listbox text-label="Vertical (default)" class="w-60" v-model="choice">
    <v-listbox-item value="vuetiful">Vuetiful</v-listbox-item>
    <v-listbox-item value="is">Is</v-listbox-item>
    <v-listbox-item value="beautiful">Beautiful</v-listbox-item>
  </v-listbox>

  <v-listbox horizontal text-label="Horizontal" class="w-60" v-model="choice">
    <v-listbox-item value="vuetiful">Vuetiful</v-listbox-item>
    <v-listbox-item value="is">Is</v-listbox-item>
    <v-listbox-item value="beautiful">Beautiful</v-listbox-item>
  </v-listbox>
</div>`;

const objectScript = `const choiceObject = ref();
const choicesObject = ref([
  { id: 0, name: 'vuetiful' },
  { id: 1, name: 'is' },
  { id: 2, name: 'beautiful' },
]);`;
const objectTemplate = `<v-listbox by="id" display="name" class="w-60" v-model="choiceObject">
  <v-listbox-item v-for="item in choicesObject" :key="item.id" :value="item">
    {{ item.name }}
  </v-listbox-item>
</v-listbox>`;

const multipleScript = 'const choiceMultiple = ref([]);';
const multipleTemplate = `<v-listbox multiple class="w-60" v-model="choiceMultiple">
  <v-listbox-item value="vuetiful">Vuetiful</v-listbox-item>
  <v-listbox-item value="is">Is</v-listbox-item>
  <v-listbox-item value="beautiful">Beautiful</v-listbox-item>
</v-listbox>`;

const a11yScript = 'const a11yChoice = ref();';
const a11yTemplate = `<v-listbox text-label="Explicit label" class="w-60" v-model="a11yChoice">
  <v-listbox-item value="vuetiful">Vuetiful</v-listbox-item>
  <v-listbox-item value="is">Is</v-listbox-item>
  <v-listbox-item value="beautiful">Beautiful</v-listbox-item>
</v-listbox>`;

const choice = ref();

const choiceObject = ref();
const choicesObject = ref([
  { id: 0, name: 'vuetiful' },
  { id: 1, name: 'is' },
  { id: 2, name: 'beautiful' },
]);

const choiceMultiple = ref([]);

const a11yChoice = ref();

const unstyledTemplate = `<v-listbox unstyled text-label="Unstyled" class="w-60" v-model="choice">
  <v-listbox-item unstyled value="vuetiful">Vuetiful</v-listbox-item>
  <v-listbox-item unstyled value="is">Is</v-listbox-item>
  <v-listbox-item unstyled value="beautiful">Beautiful</v-listbox-item>
</v-listbox>`;

const unstyledPropTemplate = `<v-listbox unstyled background="" text="" hover="" active="" text-label="Unstyled - no props" class="w-60" v-model="choice">
  <v-listbox-item unstyled value="vuetiful">Vuetiful</v-listbox-item>
  <v-listbox-item unstyled value="is">Is</v-listbox-item>
  <v-listbox-item unstyled value="beautiful">Beautiful</v-listbox-item>
</v-listbox>`;

const unstyledCustomTemplate = `<v-listbox
  unstyled
  background="bg-blue-600"
  text="text-white"
  hover="hover:bg-blue-500"
  active="bg-green-600 text-white"
  text-label="Unstyled - no props"
  class="flex flex-col gap-2 w-60"
  class-button="p-4 hover:bg-blue-500"
  class-items="flex gap-2 p-2"
  class-item="p-2 px-4"
  v-model="choice"
>
  <v-listbox-item unstyled value="vuetiful">Vuetiful</v-listbox-item>
  <v-listbox-item unstyled value="is">Is</v-listbox-item>
  <v-listbox-item unstyled value="beautiful">Beautiful</v-listbox-item>
</v-listbox>`;
</script>

<template>
  <h1 class="h1">VListbox</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VListbox, VListboxItem } from '@code-coaching/vuetiful';`" />
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
            <div class="flex h-[200px] flex-wrap items-start gap-2">
              <v-listbox text-label="Vertical (default)" class="w-60" v-model="choice">
                <v-listbox-item value="vuetiful">Vuetiful</v-listbox-item>
                <v-listbox-item value="is">Is</v-listbox-item>
                <v-listbox-item value="beautiful">Beautiful</v-listbox-item>
              </v-listbox>

              <v-listbox horizontal text-label="Horizontal" class="w-60" v-model="choice">
                <v-listbox-item value="vuetiful">Vuetiful</v-listbox-item>
                <v-listbox-item value="is">Is</v-listbox-item>
                <v-listbox-item value="beautiful">Beautiful</v-listbox-item>
              </v-listbox>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="ts" :code="basicScript" />
            <v-code-block language="html" :code="basicTemplate" />
          </template>
          <template v-slot:footer>
            <p class="flex items-center justify-center">
              <code>{{ choice ? choice : 'undefined' }}</code>
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Object as value</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex h-[175px] flex-wrap items-start gap-2">
              <v-listbox by="id" display="name" class="w-60" v-model="choiceObject">
                <v-listbox-item v-for="item in choicesObject" :key="item.id" :value="item">
                  {{ item.name }}
                </v-listbox-item>
              </v-listbox>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="ts" :code="objectScript" />
            <v-code-block class="mb-2" language="html" :code="objectTemplate" />
            <p><code>by</code> is the property of the object to use as the value.</p>
            <p><code>display</code> is the property of the object to display in the listbox button.</p>
          </template>
          <template v-slot:footer>
            <p class="flex items-center justify-center">
              <code>{{ choiceObject ? choiceObject : 'undefined' }}</code>
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Multiple</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex h-[175px] flex-wrap items-start gap-2">
              <v-listbox multiple class="w-60" v-model="choiceMultiple">
                <v-listbox-item value="vuetiful">Vuetiful</v-listbox-item>
                <v-listbox-item value="is">Is</v-listbox-item>
                <v-listbox-item value="beautiful">Beautiful</v-listbox-item>
              </v-listbox>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="ts" :code="multipleScript" />
            <v-code-block class="mb-2" language="html" :code="multipleTemplate" />
            <p><code>multiple</code> allows for multiple selections.</p>
            <p>Pass an array to <code>v-model</code> to get the selected values.</p>
          </template>
          <template v-slot:footer>
            <p class="flex items-center justify-center">
              <code>{{ choiceMultiple }}</code>
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Accessibility</h2>
      <section class="section">
        <h3 class="h3">Keyboard Interaction</h3>
        <section class="section">
          <p><kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>: Move focus onto and away from the listbox button.</p>
          <p><kbd>Space</kbd> and <kbd>Enter</kbd>: Opens the listbox.</p>
          <p class="mt-2">With the listbox open:</p>
          <p><kbd>Escape</kbd>: Closes the listbox.</p>
          <p><kbd>Up Arrow</kbd> and <kbd>Down Arrow</kbd>: Moves focus up and down the listbox items.</p>
          <p><kbd>Space</kbd> and <kbd>Enter</kbd>: Selects the focused item.</p>
        </section>
        <section>
          <v-preview>
            <template v-slot:preview>
              <div class="flex h-[200px] flex-wrap items-start gap-2">
                <v-listbox text-label="Explicit label" class="w-60" v-model="a11yChoice">
                  <v-listbox-item value="vuetiful">Vuetiful</v-listbox-item>
                  <v-listbox-item value="is">Is</v-listbox-item>
                  <v-listbox-item value="beautiful">Beautiful</v-listbox-item>
                </v-listbox>
              </div>
            </template>
            <template v-slot:source>
              <v-code-block class="mb-2" language="ts" :code="a11yScript" />
              <v-code-block class="mb-2" language="html" :code="a11yTemplate" />
              <p>By default the text of the button is used as a label.</p>
              <p>Use <code>text-label</code> to provide an explicit label.</p>
              <p>
                Add <code>class="sr-only"</code> to the label to hide it visually. This will make sure screen readers
                still read the label.
              </p>
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
            <div class="flex h-[150px] flex-wrap items-start gap-2">
              <v-listbox unstyled text-label="Unstyled" class="w-60" v-model="choice">
                <v-listbox-item unstyled value="vuetiful">Vuetiful</v-listbox-item>
                <v-listbox-item unstyled value="is">Is</v-listbox-item>
                <v-listbox-item unstyled value="beautiful">Beautiful</v-listbox-item>
              </v-listbox>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="unstyledTemplate" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">No prop-based styles</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex h-[150px] flex-wrap items-start gap-2">
              <v-listbox
                unstyled
                background=""
                text=""
                hover=""
                active=""
                text-label="Unstyled - no props"
                class="w-60"
                v-model="choice"
              >
                <v-listbox-item unstyled value="vuetiful">Vuetiful</v-listbox-item>
                <v-listbox-item unstyled value="is">Is</v-listbox-item>
                <v-listbox-item unstyled value="beautiful">Beautiful</v-listbox-item>
              </v-listbox>
            </div>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="unstyledPropTemplate" />
            <p>Set <code>preset</code> to an empty string to have no prop-based styles.</p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Custom style example</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex h-[250px] flex-wrap items-start gap-2">
              <v-listbox
                unstyled
                background="bg-blue-600"
                text="text-white"
                hover="hover:bg-blue-500"
                active="bg-green-600 text-white"
                text-label="Unstyled - no props"
                class="flex flex-col gap-2 w-60"
                class-button="p-4 hover:bg-blue-500"
                class-items="flex gap-2 p-2"
                class-item="p-2 px-4"
                v-model="choice"
              >
                <v-listbox-item unstyled value="vuetiful">Vuetiful</v-listbox-item>
                <v-listbox-item unstyled value="is">Is</v-listbox-item>
                <v-listbox-item unstyled value="beautiful">Beautiful</v-listbox-item>
              </v-listbox>
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
