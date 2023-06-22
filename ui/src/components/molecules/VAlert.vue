<script setup lang="ts">
import { PropType, computed } from "vue";

const emit = defineEmits(["close"]);
const props = defineProps({
  hideIcon: {
    type: Boolean,
    default: false,
  },
  hideClose: {
    type: Boolean,
    default: false,
  },

  show: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String as PropType<"info" | "success" | "warning" | "error">,
    default: "",
  },
});

const typeBackground = computed(() => {
  switch (props.type) {
    case "info":
      return "variant-filled";
    case "success":
      return "variant-filled-success";
    case "warning":
      return "variant-filled-warning";
    case "error":
      return "variant-filled-error";
    default:
      return "variant-filled-primary";
  }
});

const close = () => emit("close");
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter" || event.key === " ") {
    close();
  }
};
</script>

<template>
  <aside
    v-if="show"
    :class="`vuetiful-alert flex w-full flex-row items-center gap-4 p-4 border-token rounded-container-token ${typeBackground}`"
  >
    <div v-if="!hideIcon">
      <slot v-if="$slots.pre" name="pre" />
      <template v-if="!$slots.pre">
        <!-- https://fontawesome.com/icons/circle-info?f=classic&s=solid -->
        <svg
          v-if="type === 'info'"
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
          />
        </svg>

        <!-- https://fontawesome.com/icons/circle-check?f=classic&s=solid -->
        <svg
          v-if="type === 'success'"
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
          />
        </svg>

        <!-- https://fontawesome.com/icons/circle-exclamation?f=classic&s=solid -->
        <svg
          v-if="type === 'warning'"
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
          />
        </svg>

        <!-- https://fontawesome.com/icons/triangle-exclamation?f=classic&s=solid -->
        <svg
          v-if="type === 'error'"
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
          />
        </svg>
      </template>
    </div>

    <div class="vuetiful-alert-message flex-auto">
      <slot />
    </div>

    <slot name="actions"> </slot>
    <!-- https://fontawesome.com/icons/xmark?f=classic&s=solid -->
    <svg
      data-test="close"
      v-if="!hideClose"
      tabindex="0"
      @keydown="handleKeydown"
      @click="close"
      class="icon hover:cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      />
    </svg>
  </aside>
</template>

<style scoped>
.icon {
  @apply my-1 h-6 min-h-[1.5rem] w-6 min-w-[1.5rem] fill-current;
}
</style>
