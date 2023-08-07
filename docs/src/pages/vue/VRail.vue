<script setup lang="ts">
import {
  VCodeBlock,
  VPreview,
  VRail,
  VRailTile,
  VShell,
  VTab,
  VTabPanel,
  VTabs,
  useRail,
} from '@code-coaching/vuetiful';
const { selectedRailTile } = useRail();

const scriptExample = "import { VRail, VRailTile } from '@code-coaching/vuetiful';";
const codeExample = `<v-rail>
  <v-rail-tile value="demo-1" label="Vuetiful" />
  <v-rail-tile value="demo-2" label="Is" />
  <v-rail-tile value="demo-3" label="Beautiful" />
</v-rail>`;

const useRailScript = `import { VRail, VRailTile, VShell, useRail } from '@code-coaching/vuetiful';
const { selectedRailTile } = useRail();`;
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
  <h1>VRail</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VRail, VRailTile, useRail } from '@code-coaching/vuetiful';`" />
  </section>

  <section class="section">
    <p><code>VRail</code> is a container that holds multiple <code>VRailTile</code> components.</p>
    <p>
      <code>VRailTile</code> is a clickable tile that indicates the current page and allows navigation through a click
      handler. Each tile has a unique value, determining its active state, which is automatically stored in the
      <code>selectedRailTile</code> variable accessible via <code>useRail</code>.
    </p>
  </section>

  <section class="section">
    <v-tabs class-panels="py-4 md:py-10">
      <template v-slot:tabs>
        <v-tab>Usage</v-tab>
      </template>
      <v-tab-panel>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <v-rail>
                <v-rail-tile value="demo-1" label="Vuetiful" />
                <v-rail-tile value="demo-2" label="Is" />
                <v-rail-tile value="demo-3" label="Beautiful" />
              </v-rail>
            </template>
            <template v-slot:source>
              <v-code-block class="mb-2" language="ts" :code="scriptExample" />
              <v-code-block language="html" :code="codeExample" />
            </template>
          </v-preview>
        </section>

        <h2>Example</h2>
        <section class="section">
          <v-preview>
            <template v-slot:preview>
              <div class="mb-4 flex h-[576px] w-full flex-col items-center justify-center gap-2 md:h-[576px]">
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
            </template>
            <template v-slot:source>
              <div class="flex flex-col gap-4">
                <v-code-block language="ts" :code="useRailScript" />
                <v-code-block language="html" :code="useRailExample" />
              </div>
            </template>
          </v-preview>
        </section>
      </v-tab-panel>
    </v-tabs>
  </section>
</template>
