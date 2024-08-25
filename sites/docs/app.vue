<script lang="ts" setup>
import {
  useDarkMode,
  useDrawer,
  useTheme,
  VButton,
  VDrawer,
  VShell,
  VThemeSwitch,
  Vuetiful,
} from "@code-coaching/vuetiful";
import "highlight.js/styles/github-dark.min.css";
import { MenuIcon } from "lucide-vue-next";
import { version } from "../../packages/ui/package.json";

const { applyTheme, themes } = useTheme();
const { autoModeWatcher } = useDarkMode();

onNuxtReady(() => {
  autoModeWatcher();
  if (process.env.NODE_ENV === "development") {
    applyTheme(themes.vuetiful);
  }
});

const { open, drawer } = useDrawer();

const generateId = () => useId();

useHead({
  style: [
    {
      children: `
        .h1,
        .h2,
        .h3,
        .h4,
        .h5,
        .h6 {
          margin-bottom: 1rem; /* Tailwind mb-4 */
        }

        @media (min-width: 768px) {
          .h1,
          .h2,
          .h3,
          .h4,
          .h5,
          .h6 {
            margin-bottom: 2rem; /* Tailwind md:mb-8 */
          }
        }

        section.section {
          margin-bottom: 1.5rem; /* Tailwind mb-6 */
          display: flex; /* Tailwind flex */
          flex-direction: column; /* Tailwind flex-col */
          gap: 0.5rem; /* Tailwind gap-2 */
        }

        @media (min-width: 768px) {
          section.section {
            margin-bottom: 3.5rem; /* Tailwind md:mb-14 */
          }
        }

        header.header {
          margin-bottom: 1rem; /* Tailwind mb-4 */
        }

        @media (min-width: 768px) {
          header.header {
            margin-bottom: 2.5rem; /* Tailwind md:mb-10 */
          }
        }

        summary {
          cursor: pointer;
        }
      `,
    },
  ],
});
</script>
<template>
  <Vuetiful :id-generator="generateId">
    <v-drawer>
      <DocsSideBar v-if="drawer.id === 'docs'" embedded />
      <DocsDrawerExample
        title="This is a drawer"
        v-if="drawer.id === 'drawer-example'"
      />
      <DocsDrawerExample
        title="Content One"
        v-if="drawer.id === 'drawer-multi-example-one'"
      />
      <DocsDrawerExample
        title="Content Two"
        v-if="drawer.id === 'drawer-multi-example-two'"
      />
      <DocsDrawerExample
        title="Content Three"
        v-if="drawer.id === 'drawer-multi-example-three'"
      />
      <DocsDrawerExample
        title="Content Four"
        v-if="drawer.id === 'drawer-multi-example-four'"
      />
    </v-drawer>
    <v-shell fixed-header-height="50px">
      <template v-slot:fixedHeader>
        <div class="flex h-[50px] w-full items-center justify-between p-2">
          <div class="flex items-center gap-2">
            <v-button
              icon
              class="2xl:hidden"
              id="icon-button"
              aria-label="Menu"
              @click="open({ id: 'docs', duration: 150 })"
            >
              <MenuIcon />
            </v-button>

            <div class="font-bold">Vuetiful</div>
          </div>

          <div class="flex items-center gap-2">
            <VThemeSwitch
              class-button="bg-surface-800-200 text-surface-contrast-800 dark:text-surface-contrast-200"
              class="right-4 w-60"
            />
            <div>v{{ version }}</div>
          </div>
        </div>
      </template>

      <template v-slot:sidebarLeft>
        <DocsSideBar />
      </template>
      <div ref="layoutRef" class="flex justify-center p-4 md:p-10">
        <div class="flex w-full max-w-5xl flex-col">
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </div>
      </div>
    </v-shell>
  </Vuetiful>
</template>

<style>
/* h1,
h2,
h3,
h4,
h5,
h6 {
  @apply mb-4 md:mb-8;
}

section.section {
  @apply mb-6 md:mb-14;
  @apply flex flex-col gap-2;
}
header.header {
  @apply mb-4 md:mb-10;
}

summary {
  cursor: pointer;
} */
</style>
