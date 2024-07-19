<script setup lang="ts">
import { useSettings } from '@/lib';
import { ListboxOption } from '@headlessui/vue';
import { inject } from 'vue';

const props = defineProps({
  value: {
    type: [String, Number, Boolean, Object],
    required: true,
  },

  unstyled: {
    type: Boolean,
    default: false,
  },
});

const activeClass = inject('active') as string;
const hoverClass = inject('hover') as string;
const classItem = inject('classItem') as string;

const { settings } = useSettings();
const isUnstyled =
  settings.global.unstyled || settings.components.listboxItem.unstyled || props.unstyled;
</script>

<template>
  <ListboxOption v-slot="{ selected, disabled, active }" :value="value">
    <div
      data-test="listbox-item"
      :class="`vuetiful-listbox-item ${isUnstyled ? '' : 'px-4 py-1 text-base rounded-token'} 
      ${selected ? activeClass : hoverClass} 
      ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
      ${active && !selected ? hoverClass : ''}
      ${classItem}`"
    >
      <slot />
    </div>
  </ListboxOption>
</template>
