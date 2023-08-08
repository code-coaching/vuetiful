<script setup lang="ts">
import type { CssClasses } from "@/index";
import { VRadioItem } from "@/index";
import { useRail } from "@/services";
import { inject } from "vue";

defineProps({
  value: {
    type: String,
    default: "",
  },
  label: {
    type: String as () => string,
    default: "",
  },

  regionIcon: {
    type: String as () => CssClasses,
    default: "",
  },
  regionLabel: {
    type: String as () => CssClasses,
    default: "",
  },
});

const { selectedRailTile } = useRail();
const activeRail = inject("activeRail");
const hoverRail = inject("hoverRail");
</script>

<template>
  <v-radio-item
    unstyled
    :value="value"
    :class="`vuetiful-rail-tile grid aspect-square w-full cursor-pointer place-content-center place-items-center ${ selectedRailTile === value ? `${activeRail}` : `${hoverRail}` }`"
  >
    <template v-if="$slots.default">
      <div :class="`vuetiful-rail-tile-icon ${regionIcon}`"><slot /></div>
    </template>
    <template v-if="label">
      <div :class="`vuetiful-rail-tile-label text-center text-xs font-bold ${regionLabel}`">
        {{ label }}
      </div>
    </template>
  </v-radio-item>
</template>
