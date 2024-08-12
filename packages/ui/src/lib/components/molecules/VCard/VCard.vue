<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { computed, provide } from 'vue';
const emit = defineEmits(['click']);

interface CardProps {
  class?: string;
  hideSeparator?: boolean;
  clickable?: boolean;
}

const props = withDefaults(defineProps<CardProps>(), {
  class: '',
});

provide('hideSeparator', props.hideSeparator);

const onClick = () => {
  if (!props.clickable) return;
  emit('click');
};
const onKeydown = (event: KeyboardEvent) => {
  if (!props.clickable) return;
  if (event.key === 'Enter') {
    event.preventDefault();
    emit('click');
  }
  if (event.key === ' ') {
    event.preventDefault();
    emit('click');
  }
};

const classRootDefault =
  'preset-filled-surface-200-800 flex flex-col border rounded-container ring overflow-hidden';
const classRootMerged = computed(() => tm(classRootDefault, props.class));
</script>

<!-- TODO: conigurable clickable classes -->
<template>
  <div
    @click="onClick"
    @keydown="onKeydown"
    :tabindex="clickable ? 0 : undefined"
    :class="`vuetiful-card ${classRootMerged} ${clickable ? `card-hover hover:cursor-pointer` : ''}`"
  >
    <slot />
  </div>
</template>
