<script setup lang="ts">
import { CssClasses, useSettings } from "@/index";
import { computed, ref, useAttrs } from "vue";

const props = defineProps({
  // Initials
  initials: { type: String, default: "" },
  fill: { type: String as () => CssClasses, default: "" },
  classInitials: { type: String, default: "" },

  // Image
  src: { type: String, default: "" },
  alt: { type: String, default: "" },
  fallback: { type: String, default: "" },
  classImage: { type: String, default: "" },

  size: { type: String, default: "md" },

  unstyled: { type: Boolean, default: false },
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

const avatarSize = computed(() => {
  switch (props.size) {
    case "xs":
      return "w-8";
    case "sm":
      return "w-12";
    case "md":
      return "w-16";
    case "lg":
      return "w-20";
    case "xl":
      return "w-24";
    default:
      return props.size;
  }
});

const { settings } = useSettings();
const isUnstyled =
  settings.global.unstyled || settings.components.avatar.unstyled || props.unstyled;
</script>
<template>
  <figure
    data-test="avatar"
    :class="`vuetiful-avatar ${
      isUnstyled
        ? ''
        : 'isolate flex aspect-square items-center justify-center overflow-hidden font-semibold rounded-token'
    } ${avatarSize}`"
  >
    <img
      :class="`vuetiful-avatar-image ${classImage}`"
      v-if="src"
      :src="imgSrc"
      :alt="alt"
      @error="() => (imgSrc = fallback)"
    />
    <svg
      v-else
      :class="`vuetiful-avatar-initials ${isUnstyled ? '' : 'h-full w-full'} ${classInitials}`"
      viewBox="0 0 512 512"
    >
      <text
        x="50%"
        y="50%"
        dominant-baseline="central"
        text-anchor="middle"
        font-weight="bold"
        :font-size="150"
        :class="`vuetiful-avatar-text ${fillInitials}`"
      >
        {{ String(initials).substring(0, 2).toUpperCase() }}
      </text>
    </svg>
  </figure>
</template>
