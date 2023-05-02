<script setup lang="ts">
import { RadioGroupDescription } from '@headlessui/vue';

defineProps({
  as: RadioGroupDescription.props['as'],
});
</script>

<template>
  <RadioGroupDescription :as="as"><slot /></RadioGroupDescription>
</template>
