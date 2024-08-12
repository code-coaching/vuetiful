<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { computed } from 'vue';

const emit = defineEmits(['close']);
interface AlertProps {
  class?: string;
  classPre?: string;
  classMessage?: string;
  classClose?: string;
  hideIcon?: boolean;
  showClose?: boolean;
  show?: boolean;
  type?: 'info' | 'success' | 'warning' | 'error' | '';
}

const props = withDefaults(defineProps<AlertProps>(), {
  hideIcon: false,
  showClose: false,
  show: true,
  type: '',
});

const typeBackground = computed(() => {
  switch (props.type) {
    case 'info':
      return 'preset-filled-surface-200-800';
    case 'success':
      return 'preset-filled-success-200-800';
    case 'warning':
      return 'preset-filled-warning-200-800';
    case 'error':
      return 'preset-filled-error-200-800';
    case '':
      return '';
  }
});

const close = () => emit('close');
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    close();
  }
};

const classRootDefault = computed(
  () => `flex w-full items-center gap-4 rounded-container border p-4 ${typeBackground.value}`,
);
const classRootMerged = computed(() => tm(classRootDefault.value, props.class));

const classPreDefault = '';
const classPreMerged = computed(() => tm(classPreDefault, props.classPre));

const classMessageDefault = 'flex-auto';
const classMessageMerged = computed(() => tm(classMessageDefault, props.classMessage));

const classCloseDefault =
  ' my-1 h-6 min-h-[1.5rem] w-6 min-w-[1.5rem] fill-current hover:cursor-pointer';
const classCloseMerged = computed(() => tm(classCloseDefault, props.classClose));
</script>

<template>
  <aside v-if="show" :class="`vuetiful-alert ${classRootMerged}`">
    <div v-if="!hideIcon" :class="`vuetiful-alert-pre ${classPreMerged}`">
      <slot v-if="$slots.pre" name="pre" />
      <template v-if="!$slots.pre">
        <!-- https://fontawesome.com/icons/circle-info?f=classic&s=solid -->
        <svg
          v-if="type === 'info'"
          class="my-1 h-6 min-h-[1.5rem] w-6 min-w-[1.5rem] fill-current"
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
          class="my-1 h-6 min-h-[1.5rem] w-6 min-w-[1.5rem] fill-current"
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
          class="my-1 h-6 min-h-[1.5rem] w-6 min-w-[1.5rem] fill-current"
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
          class="my-1 h-6 min-h-[1.5rem] w-6 min-w-[1.5rem] fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
          />
        </svg>
      </template>
    </div>

    <div :class="`vuetiful-alert-message ${classMessageMerged}`">
      <slot />
    </div>

    <slot name="actions"> </slot>
    <!-- https://fontawesome.com/icons/xmark?f=classic&s=solid -->
    <svg
      data-test="close"
      v-if="showClose"
      tabindex="0"
      @keydown="handleKeydown"
      @click="close"
      :class="`vuetiful-alert-close-icon ${classCloseMerged}`"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      />
    </svg>
  </aside>
</template>
