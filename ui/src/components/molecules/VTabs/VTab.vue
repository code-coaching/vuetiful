<script setup lang="ts">
import { Tab } from "@headlessui/vue";
import { computed, inject } from "vue";

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

const activeClass = inject("active") as string;
const hoverClass = inject("hover") as string;
const vertical = inject("vertical") as boolean;
const classTab = inject("classTab") as string;
const hideSeparator = inject("hideSeparator") as boolean;

const tabClass = computed(() => {
  return classTab ? classTab : "w-full px-4 py-2";
});
</script>

<template>
  <Tab
    :disabled="disabled"
    v-slot="{ selected }"
    :class="`flex ${vertical ? 'flex-row justify-between' : 'flex-col'}`"
  >
    <div data-test="slot-container" :class="`text-base rounded-token ${selected ? activeClass : hoverClass} ${tabClass}`">
      <slot />
    </div>
    <div
      v-show="selected && !hideSeparator"
      :class="`z-10 border-surface-900-50-token ${
        vertical ? 'mr-[-2px] h-full border-r-2' : 'mb-[-2px] w-full border-b-2'
      }`"
    ></div>
  </Tab>
</template>
