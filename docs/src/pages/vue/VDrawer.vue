<script setup lang="ts">
import { CodeBlock, VButton, useDrawer } from '@code-coaching/vuetiful';

const { open } = useDrawer();

const codeExample = `<v-rail>
  <v-rail-tile value="demo-1" label="Vuetiful" />
  <v-rail-tile value="demo-2" label="Is" />
  <v-rail-tile value="demo-3" label="Beautiful" />
</v-rail>`;
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VRail</h1>

    <CodeBlock language="ts" :code="`import { VRail } from '@code-coaching/vuetiful`" />
    <p class="mt-8">In case of not using <code>&lt;script setup&gt;</code></p>
    <CodeBlock
      language="ts"
      :code="`// ...
setup() {
  // ...
  components: {
    VRail,
  },
  // ...
}
// ...`"
    />

    <h2>Usage</h2>
    <p>
      The <code>VRail</code> is a container for <code>VRailTile</code>s. The <code>VRailTile</code> is a clickable tile
      that can be used to visualize on which page/section the user is currently on.
    </p>

    <p>Combine this with a click handler to navigate to the desired page/section.</p>

    <p class="mb-8">The value of each tile should be unique. Active state is automatically set based on the value.</p>

    <div class="mb-4 flex flex-col items-center justify-center gap-2">
      <div class="grid grid-cols-3 gap-10">
        <div></div>
        <v-button class="variant-filled" @click="open({ position: 'top' })">&#8595;</v-button>
        <div></div>
        <v-button class="variant-filled" @click="open({ position: 'left' })">&#8594;</v-button>
        <div></div>
        <v-button class="variant-filled" @click="open({ position: 'right' })">&#8592;</v-button>
        <div></div>
        <v-button class="variant-filled" @click="open({ position: 'bottom' })">&#8593;</v-button>
        <div></div>
      </div>
    </div>

    <code-block language="html" :code="codeExample" />
  </div>
</template>
