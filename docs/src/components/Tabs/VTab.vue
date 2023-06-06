<script setup lang="ts">
import { VButton } from '@code-coaching/vuetiful';
import { Tab } from '@headlessui/vue';

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <Tab :disabled="disabled" as="template" v-slot="{ selected }">
    <v-button :class="{ 'variant-filled': selected, 'hover:variant-ghost': !selected }"><slot /></v-button>
  </Tab>
</template>
