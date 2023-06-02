<script setup lang="ts">
import { CssClasses } from "@/index";
import { computed, ref, useAttrs } from "vue";

const props = defineProps({
  // Initials
  initials: { type: String, default: "" },
  fill: { type: String as () => CssClasses, default: "" },

  // Image
  src: { type: String, default: "" },
  alt: { type: String, default: "" },
  fallback: { type: String, default: "" },

  width: { type: String as () => CssClasses, default: "w-16" },
  rounded: { type: String as () => CssClasses, default: "rounded-token" },
});

const imgSrc = ref(props.src);
const fillInitials = computed(() => {
  if (props.fill) return props.fill;

  const attrs = useAttrs();
  const classString = attrs.class as string | undefined;

  if (classString?.includes("variant-filled")) {
    return "fill-on-surface-token dark:fill-base-token";
  }
  return "dark:fill-on-surface-token fill-base-token";
});
</script>
<template>
  <figure
    :class="`avatar isolate flex aspect-square items-center justify-center overflow-hidden font-semibold ${rounded} ${width}`"
  >
    <img
      class="avatar-image"
      v-if="src"
      :src="imgSrc"
      :alt="alt"
      @error="() => (imgSrc = fallback)"
    />
    <svg v-else class="avatar-initials h-full w-full" viewBox="0 0 512 512">
      <text
        x="50%"
        y="50%"
        dominant-baseline="central"
        text-anchor="middle"
        font-weight="bold"
        :font-size="150"
        :class="`avatar-text ${fillInitials}`"
      >
        {{ String(initials).substring(0, 2).toUpperCase() }}
      </text>
    </svg>
  </figure>
</template>
