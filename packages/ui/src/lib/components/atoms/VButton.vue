<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { computed } from 'vue';

interface ButtonProps {
  class?: string;
  icon?: boolean;
  tag?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const props = withDefaults(defineProps<ButtonProps>(), {
  class: '',
  tag: 'button',
  size: 'md',
});

const emit = defineEmits<{ (event: 'click'): void }>();

const activate = () => {
  emit('click');
};

const clickHandler = (event: MouseEvent) => {
  event.preventDefault();
  activate();
};

const keydownHandler = (event: KeyboardEvent) => {
  if (['Enter', ' '].includes(event.key)) event.preventDefault();
  if (event.key === 'Enter') activate();
};

const keyupHandler = (event: KeyboardEvent) => {
  if (event.key === ' ') {
    event.preventDefault();
    activate();
  }
};

const btnSize = computed(() => {
  if (props.icon) return '';
  switch (props.size) {
    case 'xs':
      return 'px-2.5 py-1.5 text-xs';
    case 'sm':
      return 'px-3 py-2 text-sm leading-4';
    case 'md':
      return 'px-4 py-2 text-sm';
    case 'lg':
      return 'px-4 py-2 text-base';
    case 'xl':
      return 'px-6 py-3 text-base';
  }
});

const classRootDefault = computed(
  () =>
    `bg-surface-50-950 text-surface-950-50 ${props.icon ? 'btn-icon' : 'btn'} ${btnSize.value} hover:cursor-pointer`,
);
const classRootMerged = computed(() => tm(classRootDefault.value, props.class));
</script>

<template>
  <component
    tabindex="0"
    role="button"
    :is="tag"
    :class="`vuetiful-button ${classRootMerged}`"
    @click="clickHandler"
    @keydown="keydownHandler"
    @keyup="keyupHandler"
  >
    <slot />
  </component>
</template>
