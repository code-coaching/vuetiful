<script setup lang="ts">
import { VButton, VRadioGroup, VRadioItem } from '@/lib';
import { ref } from 'vue';
const backgrounds: Record<string, string> = {
  'bg-transparent': 'bg-transparent',
  'neutral-opaque': 'bg-white/50 dark:bg-black/50',
  neutral: 'bg-surface-100-800-token',

  'variant-filled-surface': 'variant-filled-surface',
  'variant-filled-primary': 'variant-filled-primary',
  'variant-filled-secondary': 'variant-filled-secondary',
  'variant-filled-tertiary': 'variant-filled-tertiary',
  'variant-filled-success': 'variant-filled-success',
  'variant-filled-warning': 'variant-filled-warning',
  'variant-filled-error': 'variant-filled-error',

  // TODO: implement gradient backgrounds
  // 'primary-to-secondary': 'bg-gradient-to-br variant-gradient-primary-secondary',
  // 'secondary-to-tertiary': 'bg-gradient-to-br variant-gradient-secondary-tertiary',
  // 'tertiary-to-primary': 'bg-gradient-to-br variant-gradient-tertiary-primary',
  // 'secondary-to-primary': 'bg-gradient-to-br variant-gradient-secondary-primary',
  // 'tertiary-to-secondary': 'bg-gradient-to-br variant-gradient-tertiary-secondary',
  // 'primary-to-tertiary': 'bg-gradient-to-br variant-gradient-primary-tertiary',
  // 'success-to-warning': 'bg-gradient-to-br variant-gradient-success-warning',
  // 'warning-to-error': 'bg-gradient-to-br variant-gradient-warning-error',
  // 'error-to-success': 'bg-gradient-to-br variant-gradient-error-success',
  // 'warning-to-success': 'bg-gradient-to-br variant-gradient-warning-success',
  // 'error-to-warning': 'bg-gradient-to-br variant-gradient-error-warning',
  // 'success-to-error': 'bg-gradient-to-br variant-gradient-success-error',
};

const props = defineProps({
  hideMobileToggle: {
    type: Boolean,
    default: false,
  },
  hideSwatches: {
    type: Boolean,
    default: false,
  },
  background: {
    type: String,
    default: 'neutral',
  },

  // Props (regions)
  regionHeader: {
    type: String,
    default: '',
  },
  regionViewport: {
    type: String,
    default: '',
  },
  regionPreview: {
    type: String,
    default: '',
  },
  regionFooter: {
    type: String,
    default: '',
  },
  regionSource: {
    type: String,
    default: '',
  },
});

const chosenBackground = ref(props.background);
const tabView = ref('preview');
const radioSize = ref('full');
const swatches = ref(false);

const toggleSwatches = () => (swatches.value = !swatches.value);
</script>

<template>
  <div
    class="vuetiful-previewer overflow-hidden shadow-2xl shadow-surface-500/10 rounded-container-token dark:shadow-black/10"
  >
    <header
      :class="`vuetiful-previewer-header flex items-center justify-between gap-4 p-4 bg-surface-200-700-token ${regionHeader}`"
    >
      <div class="flex items-center gap-2">
        <v-radio-group v-model="tabView">
          <v-radio-item data-test="radio-item-preview" value="preview" title="Preview">
            <slot name="preview-item">
              <!-- https://fontawesome.com/icons/eye?f=classic&s=solid -->
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                />
              </svg>
            </slot>
          </v-radio-item>
          <v-radio-item data-test="radio-item-code" value="code" title="Code">
            <slot name="code-item">
              <!-- https://fontawesome.com/icons/code?f=classic&s=solid -->
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path
                  d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                />
              </svg>
            </slot>
          </v-radio-item>
        </v-radio-group>
        <v-radio-group
          class="hidden sm:!inline-flex"
          v-if="!hideMobileToggle && tabView === 'preview'"
          v-model="radioSize"
        >
          <v-radio-item data-test="radio-item-mobile" value="mobile">
            <slot name="mobile-item">
              <!-- https://fontawesome.com/icons/mobile-screen?f=classic&s=solid -->
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"
                />
              </svg>
            </slot>
          </v-radio-item>
          <v-radio-item value="full">
            <slot name="desktop-item">
              <!-- https://fontawesome.com/icons/display?f=classic&s=solid -->
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z"
                />
              </svg>
            </slot>
          </v-radio-item>
        </v-radio-group>
      </div>
      <v-button
        v-if="!hideSwatches"
        data-test="swatch-button"
        :variant="swatches ? 'filled' : ''"
        class="px-4 py-1 border-token border-surface-400-500-token"
        :class="
          swatches
            ? ''
            : 'text-center text-base rounded-token hover:variant-ghost hover:text-surface-900 dark:hover:text-surface-50'
        "
        @click="toggleSwatches"
        title="Backgrounds"
      >
        <slot name="swatchbook-item">
          <!-- https://fontawesome.com/icons/swatchbook?f=classic&s=solid -->
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M0 32C0 14.3 14.3 0 32 0H160c17.7 0 32 14.3 32 32V416c0 53-43 96-96 96s-96-43-96-96V32zM223.6 425.9c.3-3.3 .4-6.6 .4-9.9V154l75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3L223.6 425.9zM182.8 512l192-192H480c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H182.8zM128 64H64v64h64V64zM64 192v64h64V192H64zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
            />
          </svg>
        </slot>
      </v-button>
    </header>

    <!-- There is some odd behavior with test coverage, v-model must be the last property in this component -->
    <v-radio-group
      v-if="swatches"
      data-test="swatches"
      :class="`vuetiful-previewer-swatches variant-soft grid grid-cols-6 gap-2 !rounded-none p-4 sm:grid-cols-12`"
      active="bg-transparent"
      hover="bg-transparent"
      v-model="chosenBackground"
    >
      <v-radio-item
        v-for="([key, value], index) in Object.entries(backgrounds)"
        :value="key"
        :key="index"
        :class="`${value} flex aspect-square cursor-pointer items-center justify-center rounded ring-[1px] ring-surface-500/50`"
        :title="key"
      >
        <slot v-if="index === 0 && chosenBackground !== key" name="cancel-item">
          <!-- https://fontawesome.com/icons/circle-xmark?f=classic&s=solid -->
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
            />
          </svg>
        </slot>

        <slot v-if="chosenBackground === key" name="selected-item">
          <!-- https://fontawesome.com/icons/circle-check?f=classic&s=solid -->
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
            />
          </svg>
        </slot>
      </v-radio-item>
    </v-radio-group>

    <template v-if="tabView === 'preview'">
      <div
        :class="`vuetiful-previewer-viewport p-4 md:p-10 ${backgrounds[chosenBackground]} ${regionViewport}`"
      >
        <!-- <div v-if="$slots.lead" class="vuetiful-previewer-lead"><slot name="lead" /></div> -->
        <div
          data-test="previewer-preview"
          :class="`vuetiful-previewer-preview mx-auto flex duration-300 ${
            radioSize === 'mobile'
              ? 'mobile-screen flex h-[812px] max-w-[375px] flex-col overflow-hidden rounded-3xl border-8 border-black/50 p-2 shadow-2xl dark:border-white/50'
              : 'w-full items-center justify-center'
          } ${regionPreview}`"
        >
          <slot name="preview">(preview)</slot>
        </div>
        <!-- <div v-if="$slots.trail" class="vuetiful-previewer-trail"><slot name="trail" /></div> -->
      </div>
      <footer
        v-if="$slots.footer"
        :class="`vuetiful-previewer-footer variant-soft p-4 ${regionFooter}`"
      >
        <slot name="footer" />
      </footer>
    </template>

    <template v-if="tabView === 'code'">
      <div
        data-test="previewer-source"
        :class="`vuetiful-previewer-source p-4 md:p-10 ${backgrounds['neutral']} ${regionSource}`"
      >
        <slot name="source">(source)</slot>
      </div>
    </template>
  </div>
</template>

<style scoped>
.icon {
  @apply my-1 h-4 w-4 fill-current;
}
</style>
