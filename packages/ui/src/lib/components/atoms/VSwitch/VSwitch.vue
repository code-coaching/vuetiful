<script setup lang="ts">
import { type SizeProp } from '@/lib/props';
import { tm } from '@/lib/utils';
import { Switch } from '@headlessui/vue';
import { CheckIcon } from 'lucide-vue-next';
import { computed, ref, watch } from 'vue';
const emit = defineEmits(['update:modelValue']);

interface SwitchProps {
  class?: string;
  classThumb?: string;
  classThumbIcon?: string;
  modelValue?: boolean;
  disabled?: boolean;
  as?: string;
  name?: string;
  size?: SizeProp;
  hideIcons?: boolean;
}
const props = withDefaults(defineProps<SwitchProps>(), {
  class: '',
  classThumb: '',
  classThumbIcon: 'text-surface-100-900',
  name: '',
  as: 'button',
  size: 'md',
  hideIcons: false,
});

const parentModelValue = ref(props.modelValue);
watch(
  () => props.modelValue,
  (newValue) => {
    parentModelValue.value = newValue;
  },
);
watch(
  () => parentModelValue.value,
  (newValue) => {
    emit('update:modelValue', newValue);
  },
);

const trackSize = computed(() => {
  const md = 'w-16 h-8';
  switch (props.size) {
    case 'xs':
      return 'w-8 h-4';
    case 'sm':
      return 'w-12 h-6';
    case 'md':
      return md;
    case 'lg':
      return 'w-20 h-10';
    case 'xl':
      return 'w-24 h-12';
    default:
      return md;
  }
});

const classRootDefault = 'flex rounded transition-all duration-150 bg-surface-100-900';
const classRootMerged = computed(() => tm(classRootDefault, trackSize.value, props.class));

const classThumbDefault =
  'h-full w-[50%] scale-[0.8] rounded shadow transition-all duration-150 bg-surface-900-100';
const classThumbMerged = computed(() => tm(classThumbDefault, props.classThumb));
</script>

<template>
  <!-- There is some odd behavior with test coverage, v-model must be the last property in this component -->
  <Switch
    data-test="switch"
    :class="`vuetiful-slide-toggle ${classRootMerged}`"
    :name="name"
    :disabled="disabled"
    v-slot="{ checked }"
    v-model="parentModelValue"
  >
    <template v-if="$slots.default">
      <span class="sr-only"><slot /></span>
    </template>
    <div
      data-test="switch-thumb"
      :class="`vuetiful-slide-toggle-thumb flex justify-center items-center ${checked ? 'translate-x-full' : 'opacity-70'} ${classThumbMerged}`"
    >
      <template v-if="checked && !hideIcons">
        <slot name="activeChild">
          <CheckIcon :size="14" :class="classThumbIcon" />
        </slot>
      </template>
      <template v-else>
        <slot name="inactiveChild"></slot>
      </template>
    </div>
  </Switch>
</template>
