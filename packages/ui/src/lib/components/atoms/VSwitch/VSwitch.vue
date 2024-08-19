<script setup lang="ts">
import { type SizeProp } from '@/lib/props';
import { tm } from '@/lib/utils';
import { Switch } from '@headlessui/vue';
import { computed, ref, watch } from 'vue';
const emit = defineEmits(['update:modelValue']);

interface SwitchProps {
  class?: string;
  classThumb?: string;
  modelValue?: boolean;
  disabled?: boolean;
  as?: string;
  name?: string;
  size?: SizeProp;
}
const props = withDefaults(defineProps<SwitchProps>(), {
  class: '',
  classThumb: '',
  name: '',
  as: 'button',
  size: 'md',
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
  switch (props.size) {
    case 'xs':
      return 'w-8 h-4';
    case 'sm':
      return 'w-12 h-6';
    case 'md':
      return 'w-16 h-8';
    case 'lg':
      return 'w-20 h-10';
    case 'xl':
      return 'w-24 h-12';
  }
});

const classRootDefault = 'flex rounded transition-all duration-150 bg-surface-100-900';
const classRootMerged = computed(() => tm(classRootDefault, trackSize.value, props.class));

const classThumbDefault =
  'h-full w-[50%] scale-[0.8] rounded bg-opacity-90 shadow transition-all duration-150 bg-surface-900-100';
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
      :class="`vuetiful-slide-toggle-thumb ${checked ? 'translate-x-full' : 'opacity-90'} ${classThumbMerged}`"
    ></div>
  </Switch>
</template>
