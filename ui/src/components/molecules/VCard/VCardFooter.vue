<script setup lang="ts">
import { inject } from "vue";
const hideSeparator = inject("hideSeparator", false);
</script>

<template>
  <hr v-if="!hideSeparator" data-test="vuetiful-card-footer-separator" class="opacity-90" />
  <div data-test="vuetiful-card-footer-content" class="vuetiful-card-footer p-4">
    <slot />
  </div>
</template>
