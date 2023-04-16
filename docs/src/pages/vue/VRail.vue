<script setup lang="ts">
import { CodeBlock, VRail, VRailTile } from '@code-coaching/vuetiful';

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

    <div class="mb-4 flex h-[576px] flex-col items-center justify-center gap-2 md:h-[576px]">
      <v-rail class="border-2 border-surface-500">
        <v-rail-tile value="demo-1" label="Vuetiful" />
        <v-rail-tile value="demo-2" label="Is" />
        <v-rail-tile value="demo-3" label="Beautiful" />
      </v-rail>
    </div>

    <code-block language="html" :code="codeExample" />
  </div>
</template>
