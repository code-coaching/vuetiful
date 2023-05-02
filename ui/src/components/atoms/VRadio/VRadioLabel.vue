<script setup lang="ts">
import { RadioGroupLabel } from '@headlessui/vue';

defineProps({
  as: {
    type: RadioGroupLabel.props['as'].type,
    default: 'p'
  }
});


</script>

<template>
  <RadioGroupLabel :as="as"><slot /></RadioGroupLabel>
</template>
