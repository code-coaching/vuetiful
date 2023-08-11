<script setup lang="ts">
import { CssClasses, useSettings } from '@/index';
import { Listbox } from '@headlessui/vue';
import { computed, provide, ref, watch } from 'vue';
import VListboxButton from './VListboxButton.vue';
import VListboxItems from './VListboxItems.vue';
import VListboxLabel from './VListboxLabel.vue';
import { unstyledProp } from '@/props';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: Listbox.props['modelValue'],

  by: {
    type: String,
  },
  display: {
    type: String,
  },

  textLabel: {
    type: String,
  },
  classLabel: {
    type: String as () => CssClasses,
    default: '',
  },

  textButton: {
    type: String,
    default: 'Select an option',
  },
  classButton: {
    type: String as () => CssClasses,
    default: '',
  },

  classItem: {
    type: String as () => CssClasses,
    default: '',
  },
  classItems: {
    type: String as () => CssClasses,
    default: '',
  },

  horizontal: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },

  active: {
    type: String,
    default: 'variant-filled',
  },
  hover: {
    type: String,
    default: 'hover:variant-ghost',
  },

  background: {
    type: String,
    default: 'bg-surface-200-700-token',
  },
  text: {
    type: String,
    default: 'text-surface-900 dark:text-surface-50',
  },

  unstyled: unstyledProp,
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

provide('active', props.active);
provide('hover', props.hover);
provide('background', props.background);
provide('text', props.text);
provide('horizontal', props.horizontal);
provide('unstyled', props.unstyled);
provide('classItem', props.classItem);
provide('classItems', props.classItems);

const showText = computed(() => {
  if (props.display && parentModelValue.value) return parentModelValue.value[props.display];

  const length = parentModelValue.value?.length;
  if (props.multiple && length === 0) return props.textButton;
  if (props.multiple && length === 1) return parentModelValue.value[0];
  if (props.multiple && length > 1) return `${length} options selected`; // TODO: i18n

  if (parentModelValue.value) return parentModelValue.value;

  return props.textButton;
});

const { settings } = useSettings();
const isUnstyled = settings.global.unstyled || settings.components.listbox.unstyled || props.unstyled;
</script>

<template>
  <!-- There is some odd behavior with test coverage, v-model must be the last property in this component -->
  <Listbox
    data-test="listbox"
    as="div"
    :by="by"
    :multiple="multiple"
    :class="`vuetiful-listbox ${isUnstyled ? '' : 'relative rounded-container-token'}`"
    v-model="parentModelValue"
  >
    <v-listbox-label v-if="textLabel" :class="classLabel">{{ textLabel }}</v-listbox-label>
    <v-listbox-button data-test="listbox-button" :class="`${background} ${text} ${classButton}`">
      {{ showText }}
    </v-listbox-button>
    <!-- TODO: Add configurable transition -->
    <transition
      enter-active-class="transition duration-150 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <v-listbox-items
        data-test="listbox-items"
        :unstyled="unstyled"
        :class="`${isUnstyled ? '' : 'absolute mt-1 min-w-full'}`"
      >
        <slot />
      </v-listbox-items>
    </transition>
  </Listbox>
</template>
