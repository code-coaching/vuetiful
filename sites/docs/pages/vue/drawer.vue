<script setup lang="ts">
import {
  VAlert,
  VBadge,
  VButton,
  VCodeBlock,
  VPreview,
  VTab,
  VTabPanel,
  VTabs,
  useDrawer,
} from '@code-coaching/vuetiful';
import DrawerExample from '~/components/docs/DrawerExample.vue';

const { open } = useDrawer();

const codeExample = `<v-drawer>
  <h1 class="h1">This is a drawer</h1>
  <p>This is some content in the drawer.</p>
</v-drawer>

<v-button @click="open()">Open Drawer</v-button>`;

const codeExampleOpen = `import { VDrawer, useDrawer } from '@code-coaching/vuetiful';
const { open } = useDrawer();`;
const codeExampleOpenMultiple = `import { VDrawer, useDrawer } from '@code-coaching/vuetiful';
const { open, drawer } = useDrawer();`;

const codeExampleMultipleTemplate = `<v-drawer>
  <template v-if="drawer.id === 'content-one'">
    <h1 class="h1">Content One</h1>
    <p>This is some content in the drawer.</p>
  </template>
  <template v-if="drawer.id === 'content-two'">
    <h1 class="h1">Content Two</h1>
    <p>This is some content in the drawer.</p>
  </template>
  <template v-if="drawer.id === 'content-three'">
    <h1 class="h1">Content Three</h1>
    <p>This is some content in the drawer.</p>
  </template>
  <template v-if="drawer.id === 'content-four'">
    <h1 class="h1">Content Four</h1>
    <p>This is some content in the drawer.</p>
  </template>
</v-drawer>

<v-button @click="open({ id: 'content-one', position: 'top' })">
  Open Drawer One &#8595;
</v-button>
<v-button @click="open({ id: 'content-two', position: 'left' })">
  Open Drawer Two &#8594;
</v-button>
<v-button @click="open({ id: 'content-three', position: 'right' })">
  Open Drawer Three &#8592;
</v-button>
<v-button @click="open({ id: 'content-four', position: 'bottom' })">
  Open Drawer Four &#8593;
</v-button>`;
</script>

<template>
  <h1 class="h1">VDrawer</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VDrawer } from '@code-coaching/vuetiful';`" />
    <v-alert type="info">
      There should only be exact one <v-badge preset="filled-surface-500">VDrawer</v-badge> component in the app. A good
      place to put it is in the main layout component.
    </v-alert>
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template v-slot:tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">Single drawer</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-col gap-4 md:gap-8">
              <div class="border border-black p-4 dark:border-white md:p-10">
                <drawer-example title="This is a drawer" />
              </div>

              <v-button @click="open({ id: 'drawer-example' })">Open Drawer</v-button>
            </div>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="codeExampleOpen" />
              <v-code-block language="html" :code="codeExample" />
            </div>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Multiple drawers</h2>
      <section class="section">
        <v-alert type="info">
          Ensure only one instance of <v-badge preset="filled-surface-500">VDrawer</v-badge> exists in the app. Add
          multiple sections using <v-badge preset="filled-surface-500">template</v-badge> and
          <v-badge preset="filled-surface-500">v-if</v-badge>. Open different sections by passing
          <v-badge preset="filled-surface-500">id</v-badge>s via
          <v-badge preset="filled-surface-500">useDrawer</v-badge>'s
          <v-badge preset="filled-surface-500">open()</v-badge> method.
        </v-alert>
      </section>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <div class="flex flex-wrap justify-center gap-8 overflow-y-auto md:gap-16">
              <div class="flex flex-1 flex-col gap-4 md:gap-8">
                <div class="border border-black p-4 dark:border-white md:p-10">
                  <drawer-example title="Content One" />
                </div>

                <v-button @click="open({ id: 'drawer-multi-example-one', position: 'top' })">
                  Open Drawer One &#8595; 
                </v-button>
              </div>

              <div class="flex flex-1 flex-col gap-4 md:gap-8">
                <div class="border border-black p-4 dark:border-white md:p-10">
                  <drawer-example title="Content Two" />
                </div>

                <v-button @click="open({ id: 'drawer-multi-example-two', position: 'left' })">
                  Open Drawer Two &#8594; 
                </v-button>
              </div>

              <div class="flex flex-1 flex-col gap-4 md:gap-8">
                <div class="border border-black p-4 dark:border-white md:p-10">
                  <drawer-example title="Content Three" />
                </div>

                <v-button @click="open({ id: 'drawer-multi-example-three', position: 'right' })">
                  Open Drawer Three &#8592;
                </v-button>
              </div>

              <div class="flex flex-1 flex-col gap-4 md:gap-8">
                <div class="border border-black p-4 dark:border-white md:p-10">
                  <drawer-example title="Content Four" />
                </div>

                <v-button @click="open({ id: 'drawer-multi-example-four', position: 'bottom' })">
                  Open Drawer Four &#8593;
                </v-button>
              </div>
            </div>
          </template>
          <template v-slot:source>
            <div class="flex flex-col gap-4">
              <v-code-block language="ts" :code="codeExampleOpenMultiple" />
              <v-code-block language="html" :code="codeExampleMultipleTemplate" />
            </div>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
