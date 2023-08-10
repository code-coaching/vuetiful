<script setup lang="ts">
import { useSettings } from '@/index';
import { unstyledProp } from '@/props';
import { provide } from 'vue';

const emit = defineEmits(['click']);

const props = defineProps({
  hideSeparator: {
    type: Boolean,
    default: false,
  },
  background: {
    type: String,
    default: 'bg-surface-200-700-token',
  },
  text: {
    type: String,
    default: 'text-surface-900-50-token',
  },
  clickable: {
    type: Boolean,
    default: false,
  },

  unstyled: unstyledProp,
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

const { settings } = useSettings();
const isUnstyled = settings.global.unstyled || settings.components.card.unstyled || props.unstyled;
</script>

<template>
  <div
    @click="onClick"
    @keydown="onKeydown"
    :tabindex="clickable ? 0 : undefined"
    :class="`vuetiful-card flex flex-col ${
      isUnstyled ? '' : 'border-token rounded-container-token ring-outline-token'
    } ${background} ${text} ${
      clickable ? `${isUnstyled ? '' : 'card-hover'} hover:cursor-pointer` : ''
    }`"
  >
    <slot />
  </div>
</template>

<style>
.vuetiful-card-header {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.vuetiful-card-header > * {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
</style>
