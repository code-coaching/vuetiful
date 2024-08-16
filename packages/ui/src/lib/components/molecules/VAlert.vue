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

const classCloseDefault = ' my-1 h-6 min-h-[1.5rem] w-6 min-w-[1.5rem] hover:cursor-pointer';
const classCloseMerged = computed(() => tm(classCloseDefault, props.classClose));
</script>

<template>
  <aside v-if="show" :class="`vuetiful-alert ${classRootMerged}`">
    <div v-if="!hideIcon" :class="`vuetiful-alert-pre ${classPreMerged}`">
      <slot v-if="$slots.pre" name="pre" />
      <template v-if="!$slots.pre">
        <!-- https://lucide.dev/icons/info -->
        <svg
          v-if="type === 'info'"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-info my-1 h-6 min-h-[1.5rem] w-6 min-w-[1.5rem]"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>

        <!-- https://lucide.dev/icons/circle-check -->
        <svg
          v-if="type === 'success'"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-circle-check my-1 h-6 min-h-[1.5rem] w-6 min-w-[1.5rem]"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>

        <!-- https://lucide.dev/icons/circle-alert  -->
        <svg
          v-if="type === 'warning'"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-circle-alert my-1 h-6 min-h-[1.5rem] w-6 min-w-[1.5rem]"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>

        <!-- https://lucide.dev/icons/triangle-alert  -->
        <svg
          v-if="type === 'error'"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-triangle-alert my-1 h-6 min-h-[1.5rem] w-6 min-w-[1.5rem]"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
      </template>
    </div>

    <div :class="`vuetiful-alert-message ${classMessageMerged}`">
      <slot />
    </div>

    <slot name="actions"> </slot>
    <!-- https://lucide.dev/icons/x -->
    <svg
      data-test="close"
      v-if="showClose"
      tabindex="0"
      @keydown="handleKeydown"
      @click="close"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      :class="`lucide lucide-x ${classCloseMerged}`"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  </aside>
</template>
