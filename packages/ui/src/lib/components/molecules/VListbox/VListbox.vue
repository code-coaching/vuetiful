<script setup lang="ts">
import { tm } from '@/lib/utils/tailwind-merge';
import { Listbox } from '@headlessui/vue';
import { computed, provide, ref, watch } from 'vue';
import VListboxButton from './VListboxButton.vue';
import VListboxItems from './VListboxItems.vue';
import VListboxLabel from './VListboxLabel.vue';

const emit = defineEmits(['update:modelValue']);

interface ListboxProps {
  class?: string;
  classLabel?: string;
  classButton?: string;
  classItem?: string;
  classItemActive?: string;
  classItemHover?: string;
  classItemDisabled?: string;
  classItems?: string;
  modelValue?: any;
  by?: string;
  display?: string;
  textLabel?: string;
  textButton?: string;
  horizontal?: boolean;
  multiple?: boolean;
}

const props = withDefaults(defineProps<ListboxProps>(), {
  classItemActive: '',
  classItemHover: '',
  textButton: 'Select an option',
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

const classItemActiveDefault = 'preset-filled-surface-800-200';
const classItemActiveMerged = computed(() => tm(classItemActiveDefault, props.classItemActive));
const classItemHoverDefault = 'hover:preset-outlined-surface-800-200';
const classItemHoverMerged = computed(() => tm(classItemHoverDefault, props.classItemHover));

const classItemDisabledDefault = 'pointer-events-none opacity-50';
const classItemDisabledMerged = computed(() =>
  tm(classItemDisabledDefault, props.classItemDisabled),
);

provide('active', classItemActiveMerged.value);
provide('hover', classItemHoverMerged.value);
provide('disabled', classItemDisabledMerged.value);
provide('horizontal', props.horizontal);
provide('classItem', props.classItem);

const showText = computed(() => {
  if (props.display && parentModelValue.value) return parentModelValue.value[props.display];

  const length = parentModelValue.value?.length;
  if (props.multiple && length === 0) return props.textButton;
  if (props.multiple && length === 1) return parentModelValue.value[0];
  if (props.multiple && length > 1) return `${length} options selected`; // TODO: i18n

  if (parentModelValue.value) return parentModelValue.value;

  return props.textButton;
});

const classRootDefault = 'rounded-container preset-filled-surface-200-800';
const classRootMerged = computed(() => tm(classRootDefault, props.class));
</script>

<template>
  <!-- There is some odd behavior with test coverage, v-model must be the last property in this component -->
  <Listbox
    data-test="listbox"
    as="div"
    :by="by"
    :multiple="multiple"
    :class="`vuetiful-listbox relative`"
    v-model="parentModelValue"
  >
    <v-listbox-label v-if="textLabel" :class="classLabel">{{ textLabel }}</v-listbox-label>
    <v-listbox-button data-test="listbox-button" :class="`${classRootMerged}`">
      {{ showText }}
    </v-listbox-button>
    <transition
      enter-active-class="transition-opacity"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <v-listbox-items data-test="listbox-items" :class="`absolute mt-1 min-w-full ${classItems}`">
        <slot />
      </v-listbox-items>
    </transition>
  </Listbox>
</template>
