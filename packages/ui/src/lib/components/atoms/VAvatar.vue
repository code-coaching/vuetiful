<script setup lang="ts">
import { type CssClasses, useSettings } from '@/lib';
import { presetProp, sizeProp, unstyledProp } from '@/lib/props';
import { Size } from '@/lib/types';
import { computed, ref } from 'vue';
const props = defineProps({
  // Initials
  initials: { type: String, default: '' },
  fill: { type: String as () => CssClasses, default: '' },
  classInitials: { type: String, default: '' },

  // Image
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  fallback: { type: String, default: '' },
  classImage: { type: String, default: '' },

  size: sizeProp,
  preset: presetProp,
  unstyled: unstyledProp,
});

const imgSrc = ref(props.src);
const fillInitials = computed(() => {
  if (props.fill) return props.fill;

  const variantString = props.preset as string | undefined;
  const type = variantString?.split('-')[1];
  if (variantString?.includes('filled')) {
    if (!type) return 'fill-white dark:fill-black';
    return 'fill-white';
  }
  return 'fill-black dark:fill-white';
});

const avatarSize = computed(() => {
  switch (props.size) {
    case Size.XS:
      return 'w-8';
    case Size.SM:
      return 'w-12';
    case Size.MD:
      return 'w-16';
    case Size.LG:
      return 'w-20';
    case Size.XL:
      return 'w-24';
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
        : 'isolate flex aspect-square items-center justify-center overflow-hidden font-semibold rounded'
    } ${avatarSize} preset-${preset}`"
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
