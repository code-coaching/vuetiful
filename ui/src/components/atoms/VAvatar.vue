<script setup lang="ts">
import { CssClasses, useSettings } from "@/index";
import { Size, Variant } from "@/types";
import { PropType, computed, ref } from "vue";

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

  size: {
    type: String as PropType<"xs" | "sm" | "md" | "lg" | "xl">,
    default: Size.MD,
  },

  unstyled: { type: Boolean, default: false },
  variant: {
    // explicit string union because TypeScript type won't throw error if invalid value is passed
    type: String as PropType<
      | ""
      | "variant-filled"
      | "variant-filled-primary"
      | "variant-filled-secondary"
      | "variant-filled-tertiary"
      | "variant-filled-success"
      | "variant-filled-warning"
      | "variant-filled-error"
      | "variant-filled-surface"
      | "variant-ringed"
      | "variant-ringed-primary"
      | "variant-ringed-secondary"
      | "variant-ringed-tertiary"
      | "variant-ringed-success"
      | "variant-ringed-warning"
      | "variant-ringed-error"
      | "variant-ringed-surface"
      | "variant-ghost"
      | "variant-ghost-primary"
      | "variant-ghost-secondary"
      | "variant-ghost-tertiary"
      | "variant-ghost-success"
      | "variant-ghost-warning"
      | "variant-ghost-error"
      | "variant-ghost-surface"
      | "variant-soft"
      | "variant-soft-primary"
      | "variant-soft-secondary"
      | "variant-soft-tertiary"
      | "variant-soft-success"
      | "variant-soft-warning"
      | "variant-soft-error"
      | "variant-soft-surface"
      | "variant-glass"
      | "variant-glass-primary"
      | "variant-glass-secondary"
      | "variant-glass-tertiary"
      | "variant-glass-success"
      | "variant-glass-warning"
      | "variant-glass-error"
      | "variant-glass-surface"
    >,
    default: Variant.Filled,
  },
});

const imgSrc = ref(props.src);
const fillInitials = computed(() => {
  if (props.fill) return props.fill;

  const variantString = props.variant as string | undefined;
  if (variantString?.includes("variant-filled")) {
    return "fill-on-surface-token dark:fill-base-token";
  }
  return "dark:fill-on-surface-token fill-base-token";
});

const avatarSize = computed(() => {
  switch (props.size) {
    case Size.XS:
      return "w-8";
    case Size.SM:
      return "w-12";
    case Size.MD:
      return "w-16";
    case Size.LG:
      return "w-20";
    case Size.XL:
      return "w-24";
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
    } ${avatarSize} ${variant}`"
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
