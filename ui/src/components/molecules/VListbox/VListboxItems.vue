<script setup lang="ts">
import { ListboxOptions } from "@headlessui/vue";
import { inject } from "vue";

defineProps({
  as: {
    type: String,
    default: "ul",
  },
  static: {
    type: Boolean,
    default: false,
  },
});

const background = inject("background") as string;
const text = inject("text") as string;
const horizontal = inject("horizontal") as boolean;
</script>

<template>
  <ListboxOptions
    :as="as"
    :static="static"
    :class="`p-4 border-token border-surface-400-500-token rounded-container-token ${background} ${text}`"
  >
    <div data-test="listbox-items" :class="`flex ${horizontal ? 'flex' : 'flex-col'} gap-1`">
      <slot />
    </div>
  </ListboxOptions>
</template>
