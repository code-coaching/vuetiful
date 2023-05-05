<script setup lang="ts">
import type { CssClasses } from "@/index";
import { provide } from "vue";

const props = defineProps({
  active: {
    type: String as () => CssClasses,
    default: "bg-secondary-active-token",
  },
  hover: {
    type: String as () => CssClasses,
    default: "hover:bg-secondary-hover-token",
  },

  regionLead: {
    type: String as () => CssClasses,
    default: "",
  },
  regionDefault: {
    type: String as () => CssClasses,
    default: "",
  },
  regionTrail: {
    type: String as () => CssClasses,
    default: "",
  },
});

provide("active", props.active);
provide("hover", props.hover);
</script>

<template>
  <div class="v-rail grid h-full w-[70px] grid-rows-[auto_1fr_auto] gap-0 overflow-y-auto sm:w-20">
    <div class="v-bar-lead" :class="regionLead"><slot name="lead" /></div>
    <div class="v-bar-default" :class="regionDefault"><slot /></div>
    <div class="v-bar-trail" :class="regionTrail"><slot name="trail" /></div>
  </div>
</template>
