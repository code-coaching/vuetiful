<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { ref } from 'vue';

type AvatarProps = {
  // Classes
  class?: string;

  // Initials
  initials?: string;

  // Image
  src?: string;
  alt?: string;
  fallback?: string;
  classImage?: string;
};

const props = withDefaults(defineProps<AvatarProps>(), {
  // Image
  src: '',
  alt: '',
  fallback: '',
  classImage: '',

  // Initials
  initials: '',
});

const imgSrc = ref(props.src);

const classRootDefault =
  'flex items-center justify-center overflow-hidden h-16 w-16 rounded preset-filled text-xl';
const classRoot = tm(classRootDefault, props.class);
</script>
<template>
  <div data-test="avatar" :class="`vuetiful-avatar ${classRoot}`">
    <img
      :class="`vuetiful-avatar-image ${classImage}`"
      v-if="src"
      :src="imgSrc"
      :alt="alt"
      @error="() => (imgSrc = fallback)"
    />
    <template v-else>
      {{ String(initials).substring(0, 2).toUpperCase() }}
    </template>
  </div>
</template>
