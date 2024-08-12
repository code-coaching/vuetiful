<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { ListboxOption } from '@headlessui/vue';
import { computed, inject } from 'vue';

interface ListboxItemProps {
  class?: string;
  classActive?: string;
  classHover?: string;
  classDisabled?: string;
  value: string | number | boolean | object;
}
const props = defineProps<ListboxItemProps>();

const activeClass = inject('active') as string;
const hoverClass = inject('hover') as string;
const disabledClass = inject('disabled') as string;
const classItem = inject('classItem') as string;

const classRootDefault = 'rounded px-4 py-1 text-base';
const classRootMerged = computed(() => tm(classRootDefault, classItem, props.class));

const classActiveDefault = '';
const classActiveMerged = computed(() => tm(classActiveDefault, activeClass, props.classActive));

const classHoverDefault = '';
const classHoverMerged = computed(() => tm(classHoverDefault, hoverClass, props.classHover));

const classDisabledDefault = '';
const classDisabledMerged = computed(() =>
  tm(classDisabledDefault, disabledClass, props.classDisabled),
);
</script>

<template>
  <ListboxOption v-slot="{ selected, disabled }" :value="value">
    <div
      data-test="listbox-item"
      :class="`vuetiful-listbox-item ${classRootMerged} ${selected ? classActiveMerged : `${classHoverMerged}`} ${disabled ? classDisabledMerged : 'cursor-pointer'}`"
    >
      <slot />
    </div>
  </ListboxOption>
</template>
