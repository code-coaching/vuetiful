<script setup lang="ts">
import type { CssClasses } from "@/index";
import { useRail } from "@/services";
import { inject, useAttrs } from "vue";

const emit = defineEmits<{
  (event: "click"): void;
}>();

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  tag: {
    type: String as () => string,
    default: "button",
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

const attrs = useAttrs();

const { selectedRailTile } = useRail();
const active = inject("active");
const hover = inject("hover");

const onClickHandler = (event: MouseEvent) => {
  if (!props.value) return;
  selectedRailTile.value = props.value;
  emit("click");
};
const onKeyHandler = (event: KeyboardEvent) => {
  if (!props.value) return;
  if (!["Enter", "Space"].includes(event.key)) return;
  selectedRailTile.value = props.value;
  emit("click");
};
</script>

<template>
  <div
    @click="onClickHandler"
    @keydown="onKeyHandler"
  >
    <component
      :is="tag"
      v-bind="attrs"
      :class="`app-rail-tile unstyled grid aspect-square w-full cursor-pointer place-content-center place-items-center space-y-1.5 ${hover} ${
        selectedRailTile === value ? `${active}` : ''
      } ${attrs.class || ''}`"
    >
      <template v-if="$slots.default">
        <div :class="`app-rail-tile-icon ${regionIcon}`"><slot /></div>
      </template>
      <template v-if="label">
        <div :class="`app-rail-tile-label text-center text-xs font-bold ${regionLabel}`">
          {{ label }}
        </div>
      </template>
    </component>
  </div>
</template>
