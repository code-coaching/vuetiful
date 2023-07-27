<script setup lang="ts">
import type { CssClasses } from "@/index";
import { VRadioGroup, useRail } from "@/index";
import { provide } from "vue";

const { selectedRailTile } = useRail();

const props = defineProps({
  active: {
    type: String as () => CssClasses,
    default: "variant-filled",
  },
  hover: {
    type: String as () => CssClasses,
    default: "hover:variant-ghost hover:text-surface-900 dark:hover:text-surface-50",
  },
});

provide("active", props.active);
provide("hover", props.hover);
</script>

<template>
  <v-radio-group
    unstyled
    :active="active"
    :hover="hover"
    v-model="selectedRailTile"
    class="vuetiful-rail flex h-full w-[70px] flex-col overflow-y-auto sm:w-20"
  >
    <slot />
  </v-radio-group>
</template>
