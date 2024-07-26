<script setup lang="ts">
import { type CssClasses, VButton, VLightSwitch, useTheme, vClickOutsideGroup } from '@/lib';
import { ref } from 'vue';

defineProps({
  background: {
    type: String as () => CssClasses,
    default: 'bg-surface-50-950',
  },
  text: {
    type: String as () => CssClasses,
    default: 'text-surface-950-50',
  },

  widthPopup: {
    type: String as () => CssClasses,
    default: 'w-60',
  },
  heightList: {
    type: String as () => CssClasses,
    default: 'max-h-64 lg:max-h-[500px]',
  },

  classButton: {
    type: String as () => CssClasses,
    default: '',
  },
  classList: {
    type: String as () => CssClasses,
    default: '',
  },
  classListItem: {
    type: String as () => CssClasses,
    default: '',
  },
  classListItemActive: {
    type: String as () => CssClasses,
    default: 'preset-filled-surface-200-800',
  },
});

const { applyTheme, themes, chosenTheme } = useTheme();

const showPopup = ref(false);
</script>

<template>
  <div class="vuetiful-theme-switcher">
    <v-button
      :class="`vuetiful-theme-switcher__button ${classButton}`"
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
      class="absolute z-10 p-4 mt-1 space-y-4 shadow-xl vuetiful-theme-switcher__popup rounded-container"
      :class="`${background} ${text} ${widthPopup} ${classList}`"
    >
      <section class="flex items-center justify-between">
        <div class="text-lg">Mode</div>
        <v-light-switch />
      </section>
      <nav
        class="flex flex-col gap-4 p-4 -m-4 overflow-y-auto vuetiful-theme-switcher__popup-list"
        :class="`${heightList} ${classList}`"
      >
        <v-button
          class="w-full h-full p-2 text-center capitalize vuetiful-theme-switcher__popup-list-item hover:cursor-pointer"
          v-for="(theme, index) in themes"
          :class="`${classListItem} ${chosenTheme.name === theme.name ? classListItemActive : ''}`"
          :key="index"
          @click="applyTheme(theme)"
        >
          {{ theme.name }}
        </v-button>
      </nav>
    </div>
  </div>
</template>
