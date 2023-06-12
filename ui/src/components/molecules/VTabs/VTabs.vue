<script setup lang="ts">
import { TabGroup, TabList, TabPanels } from "@headlessui/vue";
import { provide } from "vue";

const props = defineProps({
  hideSeparator: {
    type: Boolean,
    default: false,
  },

  vertical: {
    type: Boolean,
    default: false,
  },

  active: {
    type: String,
    default: "",
  },
  hover: {
    type: String,
    default: "hover:variant-ghost",
  },

  classPanels: {
    type: String,
    default: "",
  },
  classTabs: {
    type: String,
    default: "",
  },
  classTab: {
    type: String,
    default: "",
  },
  classSeparator: {
    type: String,
    default: "border border-surface-400-500-token",
  },

  defaultIndex: {
    type: Number,
    default: 0,
  },
});

provide("active", props.active);
provide("hover", props.hover);
provide("vertical", props.vertical);
provide("classTab", props.classTab);
provide("hideSeparator", props.hideSeparator);
</script>

<template>
  <TabGroup
    as="div"
    :vertical="vertical"
    :defaultIndex="defaultIndex"
    :class="`${vertical ? 'flex' : ''}`"
  >
    <TabList
      data-test="vuetiful-tab-list"
      :class="`vuetiful-tab-list flex ${vertical ? 'flex-col' : ''} ${
        vertical ? '!rounded-br-none !rounded-tr-none' : '!rounded-bl-none !rounded-br-none'
      } rounded-container-token ${classTabs}`"
    >
      <slot name="tabs" />
    </TabList>
    <div
      data-test="vuetiful-tab-separator"
      v-if="!hideSeparator"
      :class="`${classSeparator}`"
    ></div>
    <TabPanels
      data-test="vuetiful-tab-panels"
      :class="`vuetiful-tab-panels ${
        vertical ? '!rounded-bl-none !rounded-tl-none' : '!rounded-tl-none !rounded-tr-none'
      } rounded-container-token ${classPanels}`"
    >
      <slot />
    </TabPanels>
  </TabGroup>
</template>
