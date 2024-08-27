<script setup lang="ts">
import { VButton, VLightSwitch, VPopover, VRadioGroup, VRadioItem, tm, useTheme } from '@/lib';
import { ref } from 'vue';

interface ThemeSwitchProps {
  class?: string;
  classButton?: string;
  classItem?: string;
  classItemActive?: string;
}

const props = withDefaults(defineProps<ThemeSwitchProps>(), {
  class: '',
  classButton: '',
  classItem: '',
  classItemActive: '',
});

const { applyTheme, themes, chosenTheme } = useTheme();

const classRootDefault =
  'relative z-10 mt-1 w-60 space-y-4 rounded-container p-4 shadow-xl bg-surface-200-800 text-surface-950-50';
const classRootMerged = tm(classRootDefault, props.class);

const classButtonDefault = '';
const classButtonMerged = tm(classButtonDefault, props.classButton);

const classItemDefault = 'p-2 text-center capitalize hover:cursor-pointer';
const classItemMerged = tm(classItemDefault, props.classItem);

const classItemActiveDefault = 'bg-surface-800-200 text-surface-50-950';
const classItemActiveMerged = tm(classItemActiveDefault, props.classItemActive);

const showPopup = ref(false);

const anchorRef = ref();
const anchorRefFn = () => anchorRef;
</script>

<template>
  <div class="vuetiful-theme-switcher">
    <v-button
      id="theme-switcher"
      ref="anchorRef"
      :class="`vuetiful-theme-switcher__button ${classButtonMerged}`"
      @click="showPopup = !showPopup"
    >
      Theme
    </v-button>

    <v-popover
      show-on-click
      :anchor="anchorRefFn"
      :show="showPopup"
      class="vuetiful-theme-switcher__popup"
      :class="`${classRootMerged}`"
    >
      <section class="flex items-center justify-between">
        <div class="text-lg">Mode</div>
        <v-light-switch />
      </section>
      <v-radio-group vertical class="max-h-60 w-full overflow-y-auto border-none sm:max-h-96">
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
    </v-popover>
  </div>
</template>
