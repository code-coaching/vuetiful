<script setup lang="ts">
import { VButton, VCodeBlock, VPreview, VShellConfigurator, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';
import { computed, reactive } from 'vue';

const state = reactive({
  fixedHeader: true,
  sidebarLeft: true,
  sidebarRight: false,
  pageHeader: false,
  pageFooter: true,
  fixedFooter: false,
  vueRouter: false,
});

const codeExample = computed(() => {
  const code = `<v-shell>
    ${state.fixedHeader ? '<template v-slot:fixedHeader>fixedHeader</template>' : ' '}
    ${state.sidebarLeft ? '<template v-slot:sidebarLeft>sidebarLeft</template>' : ' '}
    ${state.sidebarRight ? '<template v-slot:sidebarRight>sidebarRight</template>' : ' '}
    ${state.pageHeader ? '<template v-slot:pageHeader>pageHeader</template>' : ' '}
    ${state.vueRouter ? '<router-view />' : '(default slot)'}
    ${state.pageFooter ? '<template v-slot:pageFooter>pageFooter</template>' : ' '}
    ${state.fixedFooter ? '<template v-slot:fixedFooter>fixedFooter</template>' : ' '}
</v-shell>`
    .split('\n')
    .filter((line) => line.trim().length > 0)
    .join('\n');
  return code;
});
</script>

<template>
  <h1 class="h1">VShell</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VShell } from '@code-coaching/vuetiful';`" />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template v-slot:tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <v-preview>
        <template v-slot:preview>
          <div class="flex flex-col gap-4">
            <div>
              <p>
                The <code class="code">page</code> is a scrollable area. The page exists out of the
                <code class="code">pageHeader</code>, <code class="code">(default slot)</code> and
                <code class="code">pageFooter</code>.
              </p>

              <p>
                Both <code class="code">sidebarLeft</code> and <code class="code">sidebarRight</code> are scrollable.
              </p>
            </div>
            <div class="flex h-[576px] flex-col items-center justify-center gap-2 md:h-[576px]">
              <v-shell-configurator class="max-w-3xl p-1 card">
                <template v-slot:fixedHeader>
                  <div
                    v-if="state.fixedHeader"
                    class="preset-filled-surface-300-700 card m-0.5 flex items-center justify-center overflow-hidden p-2 text-xs"
                  >
                    fixedHeader
                  </div>
                </template>
                <template v-slot:sidebarLeft>
                  <div
                    v-if="state.sidebarLeft"
                    class="preset-filled-surface-300-700 card m-0.5 flex h-[150%] items-center justify-center overflow-hidden p-2 text-xs"
                  >
                    <div class="flex flex-col items-center">
                      &#8593;
                      <div>sidebarLeft</div>
                      &#8595;
                    </div>
                  </div>
                </template>
                <template v-slot:sidebarRight>
                  <div
                    v-if="state.sidebarRight"
                    class="preset-filled-surface-300-700 card m-0.5 flex h-[150%] items-center justify-center overflow-hidden p-2 text-xs"
                  >
                    <div class="flex flex-col items-center">
                      &#8593;
                      <div>sidebarRight</div>
                      &#8595;
                    </div>
                  </div>
                </template>
                <template v-slot:pageHeader>
                  <div
                    v-if="state.pageHeader"
                    class="preset-filled-surface-200-800 card m-0.5 flex items-center justify-center overflow-hidden p-2 text-xs"
                  >
                    pageHeader
                  </div>
                </template>
                <template v-slot:pageFooter>
                  <div
                    v-if="state.pageFooter"
                    class="preset-filled-surface-200-800 card m-0.5 flex items-center justify-center overflow-hidden p-2 text-xs"
                  >
                    pageFooter
                  </div>
                </template>

                <div
                  class="preset-filled-surface-200-800 card m-0.5 flex h-[500px] items-center justify-center overflow-hidden p-2 text-xs"
                >
                  <div class="flex flex-col items-center">
                    &#8593;
                    <div>(default slot)</div>
                    &#8595;
                  </div>
                </div>

                <template v-slot:fixedFooter>
                  <div
                    v-if="state.fixedFooter"
                    class="preset-filled-surface-300-700 card m-0.5 flex items-center justify-center overflow-hidden p-2 text-xs"
                  >
                    fixedFooter
                  </div>
                </template>
              </v-shell-configurator>
            </div>
          </div>
        </template>
        <template v-slot:footer>
          <div class="flex flex-col items-center gap-2">
            <p>Adjust layout by using the buttons below!</p>
            <div class="flex flex-wrap justify-center gap-1">
              <v-button
                :preset="`${state.fixedHeader ? 'filled' : 'outlined'}`"
                @click="state.fixedHeader = !state.fixedHeader"
              >
                fixedHeader
              </v-button>
              <v-button
                :preset="`${state.sidebarLeft ? 'filled' : 'outlined'}`"
                @click="state.sidebarLeft = !state.sidebarLeft"
              >
                sidebarLeft
              </v-button>
              <v-button
                :preset="`${state.sidebarRight ? 'filled' : 'outlined'}`"
                @click="state.sidebarRight = !state.sidebarRight"
              >
                sidebarRight
              </v-button>
              <v-button
                :preset="`${state.fixedFooter ? 'filled' : 'outlined'}`"
                @click="state.fixedFooter = !state.fixedFooter"
              >
                fixedFooter
              </v-button>
              <v-button
                :preset="`${state.pageHeader ? 'filled' : 'outlined'}`"
                @click="state.pageHeader = !state.pageHeader"
              >
                pageHeader
              </v-button>
              <v-button
                :preset="`${state.pageFooter ? 'filled' : 'outlined'}`"
                @click="state.pageFooter = !state.pageFooter"
                >pageFooter</v-button
              >
            </div>
          </div>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-4" language="html" :code="codeExample" />
          <div class="flex justify-center w-full">
            <v-button
              :preset="`mt-2 ${state.vueRouter ? 'filled' : 'outlined'}`"
              @click="state.vueRouter = !state.vueRouter"
            >
              Vue Router
            </v-button>
          </div>
        </template>
      </v-preview>
    </v-tab-panel>
  </v-tabs>
</template>
