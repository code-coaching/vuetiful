<script setup lang="ts">
import { useSettings } from "@/services";
import { Variant } from "@/types";
import { PropType } from "vue";

const props = defineProps({
  variant: {
    // explicit string union because TypeScript type won't throw error if invalid value is passed
    type: String as PropType<
      | ""
      | "filled"
      | "filled-primary"
      | "filled-secondary"
      | "filled-tertiary"
      | "filled-success"
      | "filled-warning"
      | "filled-error"
      | "filled-surface"
      | "ringed"
      | "ringed-primary"
      | "ringed-secondary"
      | "ringed-tertiary"
      | "ringed-success"
      | "ringed-warning"
      | "ringed-error"
      | "ringed-surface"
      | "ghost"
      | "ghost-primary"
      | "ghost-secondary"
      | "ghost-tertiary"
      | "ghost-success"
      | "ghost-warning"
      | "ghost-error"
      | "ghost-surface"
      | "soft"
      | "soft-primary"
      | "soft-secondary"
      | "soft-tertiary"
      | "soft-success"
      | "soft-warning"
      | "soft-error"
      | "soft-surface"
      | "glass"
      | "glass-primary"
      | "glass-secondary"
      | "glass-tertiary"
      | "glass-success"
      | "glass-warning"
      | "glass-error"
      | "glass-surface"
    >,
    default: Variant.Filled,
  },

  unstyled: {
    type: Boolean,
    default: false,
  },
});

const { settings } = useSettings();
const isUnstyled = settings.global.unstyled || settings.components.badge.unstyled || props.unstyled;
</script>
<template>
  <div :class="`vuetiful-badge ${isUnstyled ? '' : 'badge'} variant-${variant}`">
    <slot />
  </div>
</template>
