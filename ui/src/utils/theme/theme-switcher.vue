<script setup lang="ts">
import { CssClasses, VButton, VLightSwitch, useTheme, vClickOutsideGroup } from '@/index';
import { ref } from 'vue';

defineProps({
  background: {
    type: String as () => CssClasses,
    default: 'bg-surface-50-900-token',
  },
  text: {
    type: String as () => CssClasses,
    default: 'text-surface-900-50-token',
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
});

const { applyTheme, themes, chosenTheme } = useTheme();

const showPopup = ref(false);
</script>

<template>
  <div class="vuetiful-theme-switcher">
    <v-button :class="`vuetiful-theme-switcher__button ${classButton}`" @click="showPopup = !showPopup">
      Theme
    </v-button>

    <div
      v-if="showPopup"
      v-click-outside-group="{
        elementsInGroup: ['.vuetiful-theme-switcher__button'],
        callback: () => (showPopup = false),
      }"
      class="vuetiful-theme-switcher__popup absolute z-10 mt-1 space-y-4 p-4 shadow-xl rounded-container-token"
      :class="`${background} ${text} ${widthPopup} ${classList}`"
    >
      <section class="flex items-center justify-between">
        <div class="text-lg">Mode</div>
        <v-light-switch />
      </section>
      <nav
        class="vuetiful-theme-switcher__popup-list -m-4 flex flex-col gap-4 overflow-y-auto p-4"
        :class="`${heightList} ${classList}`"
      >
        <v-button
          class="vuetiful-theme-switcher__popup-list-item h-full w-full p-2 text-center capitalize hover:cursor-pointer"
          v-for="(theme, index) in themes"
          :class="`${classListItem} ${chosenTheme.name === theme.name ? 'variant-filled-surface' : ''}`"
          :key="index"
          @click="applyTheme(theme)"
        >
          {{ theme.name }}
        </v-button>
      </nav>
    </div>
  </div>
</template>
