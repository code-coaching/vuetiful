<script setup lang="ts">
import { idGenerator } from '@/lib/utils';
import { provideUseId } from '@headlessui/vue';

const props = defineProps<{ 
  idGenerator?: () => string 
}>()

const generator = props.idGenerator || idGenerator;
provideUseId(generator);
</script>

<template>
  <slot />
</template>