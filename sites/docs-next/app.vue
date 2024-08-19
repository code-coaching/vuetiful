<script lang="ts" setup>
import {
  VThemeSwitch,
  useDarkMode,
  useDrawer,
  useTheme,
  VButton,
  VDrawer,
  VShell,
  Vuetiful,
} from "@code-coaching/vuetiful";
import { MenuIcon } from "lucide-vue-next";
import 'highlight.js/styles/github-dark.min.css';
import { version } from "../../packages/ui/package.json";

const { applyTheme, themes } = useTheme();
const { autoModeWatcher } = useDarkMode();

onNuxtReady(() => {
  autoModeWatcher(); 
  applyTheme(themes.vuetiful);
});

const { open, drawer } = useDrawer();

const generateId = () => useId();
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
        <div
          class="w-full flex justify-between items-center p-2 h-[50px]"
        >
          <div class="flex gap-2 items-center">
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
            <VThemeSwitch button-classes="btn-sm" width-popup="w-60 right-4" />
            <div>v{{ version }}</div>
          </div>
        </div>
      </template>

      <template v-slot:sidebarLeft>
        <DocsSideBar />
      </template>
      <div ref="layoutRef" class="flex justify-center p-4 md:p-10">
        <div class="flex flex-col w-full max-w-5xl">
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </div>
      </div>
    </v-shell>
  </Vuetiful>
</template>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply mb-4 md:mb-8;
}

section.section {
  @apply mb-6 md:mb-14;
  @apply flex flex-col gap-2
}
header.header {
  @apply mb-4 md:mb-10;
}

summary {
  cursor: pointer;
}
</style>
