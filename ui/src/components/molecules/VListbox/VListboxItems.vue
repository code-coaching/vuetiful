<script setup lang="ts">
import { useSettings } from '@/index';
import { ListboxOptions } from '@headlessui/vue';
import { inject } from 'vue';

const props = defineProps({
  as: {
    type: String,
    default: 'ul',
  },
  static: {
    type: Boolean,
    default: false,
  },

  unstyled: {
    type: Boolean,
    default: false,
  },
});

const background = inject('background') as string;
const text = inject('text') as string;
const horizontal = inject('horizontal') as boolean;
const classItems = inject('classItems') as string;

const { settings } = useSettings();
const isUnstyled = settings.global.unstyled || settings.components.listbox.unstyled || props.unstyled;
</script>

<template>
  <ListboxOptions
    :as="as"
    :static="static"
    :class="`z-10 ${
      isUnstyled ? '' : `rounded-container-token' gap-1 p-4 border-token border-surface-400-500-token`
    } ${background} ${text} ${horizontal ? 'flex' : 'flex-col'} ${classItems}`"
    data-test="listbox-items"
  >
    <slot />
  </ListboxOptions>
</template>
