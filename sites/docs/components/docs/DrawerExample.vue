<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1 class="h1">{{ title }}</h1>
  <p>This is some content in the drawer.</p>
</template>
