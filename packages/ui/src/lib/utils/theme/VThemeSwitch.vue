<script setup lang="ts">
import {
  VButton,
  VLightSwitch,
  VRadioGroup,
  VRadioItem,
  tm,
  useTheme,
  vClickOutsideGroup,
} from '@/lib';
import { ref } from 'vue';

const props = defineProps({
  class: {
    type: String,
    default: '',
  },

  classButton: {
    type: String,
    default: '',
  },

  classItem: {
    type: String,
    default: '',
  },
  classItemActive: {
    type: String,
    default: 'preset-filled-surface-800-200',
  },
});

const { applyTheme, themes, chosenTheme } = useTheme();

const classRootDefault =
  'absolute z-10 mt-1 right-4 w-60 space-y-4 rounded-container p-4 shadow-xl bg-surface-200-800 text-surface-800-200';
const classRootMerged = tm(classRootDefault, props.class);

const classButtonDefault = '';
const classButtonMerged = tm(classButtonDefault, props.classButton);

const classItemDefault = 'p-2 text-center capitalize hover:cursor-pointer';
const classItemMerged = tm(classItemDefault, props.classItem);

const classItemActiveDefault = 'preset-filled-surface-800-200';
const classItemActiveMerged = tm(classItemActiveDefault, props.classItemActive);

const showPopup = ref(false);
</script>

<template>
  <div class="vuetiful-theme-switcher">
    <v-button
      :class="`vuetiful-theme-switcher__button ${classButtonMerged}`"
      @click="showPopup = !showPopup"
    >
      Theme
    </v-button>

    <div
      v-if="showPopup"
      v-click-outside-group="{
        elementsInGroup: ['.vuetiful-theme-switcher__button'],
        callback: () => (showPopup = false),
      }"
      class="vuetiful-theme-switcher__popup"
      :class="`${classRootMerged}`"
    >
      <section class="flex items-center justify-between">
        <div class="text-lg">Mode</div>
        <v-light-switch />
      </section>
      <v-radio-group vertical class="w-full border-none max-h-60 sm:max-h-96 overflow-y-auto">
        <template v-for="(theme, index) in themes">
          <v-radio-item
            :value="theme.name"
            :class="`vuetiful-theme-switcher__popup-list-item ${classItemMerged} ${chosenTheme.name === theme.name ? classItemActiveMerged : ''}`"
            @click="applyTheme(theme)"
          >
            {{ theme.name }}
          </v-radio-item>
        </template>
      </v-radio-group>
    </div>
  </div>
</template>
