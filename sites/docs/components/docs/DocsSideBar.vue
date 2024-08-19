<script setup lang="ts">
import {
  VRadioGroup,
  VRail,
  VRailTile,
  useRail,
} from "@code-coaching/vuetiful";
import { ROUTES } from "~/components/models";

defineProps({
  embedded: {
    type: Boolean,
    default: false,
  },
});

const { selectedRailTile } = useRail();

const name = (name: string) => {
  const removePrefixSlash = (name: string) => {
    return name[0] === "/" ? name.slice(1) : name;
  };

  const replaceSlashWithDash = (name: string) => {
    return name.replaceAll("/", "-");
  };

  name = removePrefixSlash(name);
  name = replaceSlashWithDash(name);
  return name.toLowerCase();
};

const docsLinks = [
  {
    title: "Getting Started",
    name: name(ROUTES.DOCS.GETTING_STARTED),
    link: ROUTES.DOCS.GETTING_STARTED,
  },
  {
    title: "Colors",
    name: name(ROUTES.DOCS.COLORS),
    link: ROUTES.DOCS.COLORS,
  },
  {
    title: "Icons",
    name: name(ROUTES.DOCS.ICONS),
    link: ROUTES.DOCS.ICONS,
  },
];

const docsResourceLinks = [
  {
    title: "Theme Generator",
    name: name(ROUTES.DOCS.THEME_GENERATOR),
    link: ROUTES.DOCS.THEME_GENERATOR,
  },
];

const vueLinksLayout = [
  {
    title: "Shell",
    name: name(ROUTES.VUE.V_SHELL),
    link: ROUTES.VUE.V_SHELL,
  },
  {
    title: "Rail",
    name: name(ROUTES.VUE.V_RAIL),
    link: ROUTES.VUE.V_RAIL,
  },
  {
    title: "Drawer",
    name: name(ROUTES.VUE.V_DRAWER),
    link: ROUTES.VUE.V_DRAWER,
  },
];

const vueLinks = [
  {
    title: "Accordion",
    name: name(ROUTES.VUE.V_ACCORDION),
    link: ROUTES.VUE.V_ACCORDION,
  },
  {
    title: "Alert",
    name: name(ROUTES.VUE.V_ALERT),
    link: ROUTES.VUE.V_ALERT,
  },
  {
    title: "Avatar",
    name: name(ROUTES.VUE.V_AVATAR),
    link: ROUTES.VUE.V_AVATAR,
  },
  {
    title: "Badge",
    name: name(ROUTES.VUE.V_BADGE),
    link: ROUTES.VUE.V_BADGE,
  },
  {
    title: "Button",
    name: name(ROUTES.VUE.V_BUTTON),
    link: ROUTES.VUE.V_BUTTON,
  },
  {
    title: "Card",
    name: name(ROUTES.VUE.V_CARD),
    link: ROUTES.VUE.V_CARD,
  },
  {
    title: "Chip",
    name: name(ROUTES.VUE.V_CHIP),
    link: ROUTES.VUE.V_CHIP,
  },
  {
    title: "CodeBlock",
    name: name(ROUTES.VUE.V_CODE_BLOCK),
    link: ROUTES.VUE.V_CODE_BLOCK,
  },
  {
    title: "Listbox",
    name: name(ROUTES.VUE.V_LISTBOX),
    link: ROUTES.VUE.V_LISTBOX,
  },
  {
    title: "Preview",
    name: name(ROUTES.VUE.V_PREVIEW),
    link: ROUTES.VUE.V_PREVIEW,
  },
  {
    title: "RadioGroup",
    name: name(ROUTES.VUE.V_RADIO_GROUP),
    link: ROUTES.VUE.V_RADIO_GROUP,
  },
  {
    title: "Switch",
    name: name(ROUTES.VUE.V_SWITCH),
    link: ROUTES.VUE.V_SWITCH,
  },
  {
    title: "Tabs",
    name: name(ROUTES.VUE.V_TABS),
    link: ROUTES.VUE.V_TABS,
  },
];

const activeRoute = useState(() => "docs-getting-started");

const ids = {
  rail: {
    root: "rail",
    docs: "ids.rail.docs",
    vue: "ids.rail.vue",
  },
  sidebar: {
    root: "sidebar",
  },
};
</script>

<template>
  <div
    :class="`sidebar h-full grid-cols-[auto_1fr] border-r border-surface-500/30 ${
      embedded ? 'grid' : 'hidden 2xl:grid'
    }`"
  >
    <v-rail
      :id="ids.rail.root"
      class="rail border-surface-500/30"
    >
      <v-rail-tile
        class="rounded-none"
        @click="navigateTo('/docs/getting-started')"
        value="docs"
        label="Docs"
        :id="ids.rail.docs"
      >
      </v-rail-tile>
      <v-rail-tile
        class="rounded-none"
        value="vue"
        label="Vue"
        @click="navigateTo('/vue/shell')"
        :id="ids.rail.vue"
      >
      </v-rail-tile>
    </v-rail>
    <v-radio-group
      :id="ids.sidebar.root"
      v-model="activeRoute"
      unstyled
      class="flex flex-col gap-4 p-4 overflow-y-auto rounded-none border-0"
      hover="transparant"
      active="transparant"
    >
      <template v-if="selectedRailTile === 'docs'">
        <div class="text-lg font-bold text-primary-900-100">Docs</div>
        <side-bar-link
          class="justify-start px-2 py-1"
          v-for="link in docsLinks"
          :key="link.name"
          :route-name="link.name"
          :link="link.link"
          :id="link.name"
        >
          {{ link.title }}
        </side-bar-link>
        <div class="text-lg font-bold text-primary-900-100">Resources</div>
        <side-bar-link
          class="justify-start w-40 min-w-full px-2 py-1"
          v-for="link in docsResourceLinks"
          :key="link.name"
          :route-name="link.name"
          :link="link.link"
          :id="link.name"
        >
          {{ link.title }}
        </side-bar-link>
      </template>

      <template
        v-if="selectedRailTile === 'vue' || selectedRailTile.includes('demo')"
      >
        <div class="text-lg font-bold text-primary-900-100">Layout</div>
        <side-bar-link
          class="justify-start w-40 min-w-full px-4 py-1"
          v-for="link in vueLinksLayout"
          :key="link.name"
          :route-name="link.name"
          :link="link.link"
          :id="link.name"
        >
          {{ link.title }}
        </side-bar-link>

        <div class="text-lg font-bold text-primary-900-100">Components</div>
        <side-bar-link
          class="justify-start w-40 min-w-full px-4 py-1"
          v-for="link in vueLinks"
          :key="link.name"
          :route-name="link.name"
          :link="link.link"
          :id="link.name"
        >
          {{ link.title }}
        </side-bar-link>
      </template>
    </v-radio-group>
  </div>
</template>
