<script setup lang="ts">
import { VCodeBlock, VRail, VRailTile, VShell, useRail } from '@code-coaching/vuetiful';
const { selectedRailTile } = useRail();

const codeExample = `<v-rail>
  <v-rail-tile value="demo-1" label="Vuetiful" />
  <v-rail-tile value="demo-2" label="Is" />
  <v-rail-tile value="demo-3" label="Beautiful" />
</v-rail>`;

const useRailExample = `<v-shell class="flex border-2 border-surface-500">
  <div :class="'sidebar grid h-full grid-cols-[auto_1fr] border-r border-surface-500/30'">
    <v-rail class="border-r border-surface-500">
      <v-rail-tile value="demo-1" label="Vuetiful" />
      <v-rail-tile value="demo-2" label="Is" />
      <v-rail-tile value="demo-3" label="Beautiful" />
    </v-rail>
    <div class="flex items-center justify-center p-4">
      <h1 v-if="selectedRailTile === 'demo-1'">Vuetiful</h1>
      <h1 v-if="selectedRailTile === 'demo-2'">Is</h1>
      <h1 v-if="selectedRailTile === 'demo-3'">Beautiful</h1>
    </div>
  </div>
</v-shell>`;
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VRail</h1>
    <section class="section">
      <v-code-block language="ts" :code="`import { VRail, VRailTile } from '@code-coaching/vuetiful`" />
    </section>

    <h2>Usage</h2>
    <section class="section">
      <p>
        The <code>VRail</code> is a container for <code>VRailTile</code>s. The <code>VRailTile</code> is a clickable
        tile that can be used to visualize on which page/section the user is currently on.
      </p>

      <p>Combine this with a click handler to navigate to the desired page/section.</p>

      <p class="mb-4">
        The value of each tile should be unique. Active state is automatically set based on the value. This active state
        is kept in a variable called <code>selectedRailTile</code> which can be accessed through <code>useRail</code>.
      </p>

      <v-code-block language="html" :code="codeExample" />
    </section>

    <h2>Example</h2>
    <section class="section">
      <div class="flex h-[576px] flex-col items-center justify-center gap-2 md:h-[576px] mb-4">
        <v-shell class="flex border-2 border-surface-500">
          <div :class="'sidebar grid h-full grid-cols-[auto_1fr] border-r border-surface-500/30'">
            <v-rail class="border-r border-surface-500">
              <v-rail-tile value="demo-1" label="Vuetiful" />
              <v-rail-tile value="demo-2" label="Is" />
              <v-rail-tile value="demo-3" label="Beautiful" />
            </v-rail>
            <div class="flex items-center justify-center p-4">
              <h1 v-if="selectedRailTile === 'demo-1'">Vuetiful</h1>
              <h1 v-if="selectedRailTile === 'demo-2'">Is</h1>
              <h1 v-if="selectedRailTile === 'demo-3'">Beautiful</h1>
            </div>
          </div>
        </v-shell>
      </div>
      <div class="flex flex-col gap-2">
        <v-code-block
          language="ts"
          :code="`import { VRail, VRailTile, VShell, useRail } from '@code-coaching/vuetiful';`"
        />
        <v-code-block language="html" :code="useRailExample" />
      </div>
    </section>

  </div>
</template>
