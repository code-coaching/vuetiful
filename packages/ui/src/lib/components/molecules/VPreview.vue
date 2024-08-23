<script setup lang="ts">
import { VButton, VRadioGroup, VRadioItem } from '@/lib';
import { tm } from '@/lib/utils/tailwind-merge';
import { computed, ref } from 'vue';
const backgrounds: Record<string, string> = {
  'bg-transparent': 'bg-transparent',
  'neutral-opaque': 'bg-white/50 dark:bg-black/50 text-surface-950 dark:text-surface-50',
  neutral: 'bg-surface-100-900',

  'preset-filled-surface-500': 'preset-filled-surface-500',
  'preset-filled-primary-500': 'preset-filled-primary-500',
  'preset-filled-secondary-500': 'preset-filled-secondary-500',
  'preset-filled-tertiary-500': 'preset-filled-tertiary-500',
  'preset-filled-success-500': 'preset-filled-success-500',
  'preset-filled-warning-500': 'preset-filled-warning-500',
  'preset-filled-error-500': 'preset-filled-error-500',
};

interface PreviewProps {
  class?: string;
  classHeader?: string;
  classRadioGroupWrapper?: string;
  classPreviewTab?: string;
  classPreviewTabArea?: string;
  classPreviewAreaMobile?: string;
  classPreviewAreaDesktop?: string;
  classPreviewTabFooter?: string;
  classPreviewTabSource?: string;
  classSwatchToggle?: string;
  classSwatchToggleActive?: string;
  classSwatchToggleInactive?: string;
  classSwatches?: string;
  classSwatch?: string;

  hideMobileToggle?: boolean;
  hideSwatches?: boolean;
  background?: string;
}

const props = withDefaults(defineProps<PreviewProps>(), {
  background: 'bg-transparent',
});

const chosenBackground = ref(props.background);
const tabView = ref('preview');
const radioSize = ref('full');
const swatches = ref(false);

const toggleSwatches = () => (swatches.value = !swatches.value);

const classRootDefault =
  'overflow-hidden rounded-container shadow-2xl shadow-surface-950/20';
const classRootMerged = computed(() => tm(classRootDefault, props.class));

const classHeaderDefault = 'flex items-center justify-between gap-4 p-4 bg-surface-200-800';
const classHeaderMerged = computed(() => tm(classHeaderDefault, props.classHeader));

const classRadioGroupWrapperDefault = 'flex items-center gap-2';
const classRadioGroupWrapperMerged = computed(() =>
  tm(classRadioGroupWrapperDefault, props.classRadioGroupWrapper),
);

const classViewportDefault = 'p-4 md:p-10 duration-150';
const classPreviewTabMerged = computed(() => tm(classViewportDefault, props.classPreviewTab));

const classPreviewAreaMobile =
  'mobile-screen flex h-[812px] max-w-[375px] flex-col overflow-hidden rounded-3xl border-8 border-black/50 p-2 shadow-2xl dark:border-white/50';
const classPreviewAreaMobileMerged = computed(() =>
  tm(classPreviewAreaMobile, props.classPreviewAreaMobile),
);

const classPreviewAreaDesktop = 'w-full items-center justify-center';
const classPreviewAreaDesktopmerged = computed(() =>
  tm(classPreviewAreaDesktop, props.classPreviewAreaDesktop),
);

const classPreviewTabAreaDeafult = 'mx-auto flex duration-150';
const classPreviewTabAreaMerged = computed(() =>
  tm(classPreviewTabAreaDeafult, props.classPreviewTabArea),
);
const classPreviewTabFooterDefault = 'p-4 bg-surface-200-800';
const classPreviewTabFooterMerged = computed(() =>
  tm(classPreviewTabFooterDefault, props.classPreviewTabFooter),
);

const classPreviewTabSourceDefault = 'p-4 md:p-10';
const classPreviewTabSourceMerged = computed(() =>
  tm(classPreviewTabSourceDefault, props.classPreviewTabSource),
);

const classSwatchToggleDefault = 'px-4 py-0 text-center text-base';
const classSwatchToggleMerged = computed(() =>
  tm(classSwatchToggleDefault, props.classSwatchToggle),
);

const classSwatchToggleActiveDefault = 'bg-surface-950-50 text-surface-50-950';
const classSwatchToggleActiveMerged = computed(() =>
  tm(classSwatchToggleActiveDefault, props.classSwatchToggleActive),
);

const classSwatchToggleInactiveDefault = 'bg-transparent hover:border';
const classSwatchToggleInactiveMerged = computed(() =>
  tm(classSwatchToggleInactiveDefault, props.classSwatchToggleInactive),
);

const classSwatchesDefault =
  'grid grid-cols-6 gap-2 rounded-none p-4 bg-surface-200-800 sm:grid-cols-12 border-0';
const classSwatchesMerged = computed(() => tm(classSwatchesDefault, props.classSwatches));

const classSwatchDefault =
  'flex aspect-square cursor-pointer items-center justify-center rounded';
const classSwatchMerged = computed(() => tm(classSwatchDefault, props.classSwatch));
</script>

<template>
  <div :class="`vuetiful-previewer ${classRootMerged}`">
    <header :class="`vuetiful-previewer-header ${classHeaderMerged}`">
      <div :class="`vuetiful-previewer-header-radio-group-wrapper ${classRadioGroupWrapperMerged}`">
        <v-radio-group v-model="tabView">
          <v-radio-item data-test="radio-item-preview" value="preview" title="Preview">
            <slot name="preview-item">
              <!-- https://lucide.dev/icons/eye  -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-eye h-5 w-5"
              >
                <path
                  d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </slot>
          </v-radio-item>
          <v-radio-item data-test="radio-item-code" value="code" title="Code">
            <slot name="code-item">
              <!-- https://lucide.dev/icons/code  -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-code h-5 w-5"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </slot>
          </v-radio-item>
        </v-radio-group>
        <v-radio-group
          class="hidden sm:flex"
          v-if="!hideMobileToggle && tabView === 'preview'"
          v-model="radioSize"
        >
          <v-radio-item data-test="radio-item-mobile" value="mobile">
            <slot name="mobile-item">
              <!-- https://lucide.dev/icons/smartphone -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-smartphone h-5 w-5"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                <path d="M12 18h.01" />
              </svg>
            </slot>
          </v-radio-item>
          <v-radio-item value="full">
            <slot name="desktop-item">
              <!-- https://lucide.dev/icons/monitor -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-monitor h-5 w-5"
              >
                <rect width="20" height="14" x="2" y="3" rx="2" />
                <line x1="8" x2="16" y1="21" y2="21" />
                <line x1="12" x2="12" y1="17" y2="21" />
              </svg>
            </slot>
          </v-radio-item>
        </v-radio-group>
      </div>
      <v-button
        v-if="!hideSwatches"
        data-test="swatch-button"
        :class="`vuetiful-previewer-swatch-toggle ${classSwatchToggleMerged} ${swatches ? classSwatchToggleActiveMerged : classSwatchToggleInactiveMerged}`"
        @click="toggleSwatches"
        title="Backgrounds"
      >
        <slot name="swatchbook-item">
          <!-- https://lucide.dev/icons/swatch-book -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-swatch-book h-5 w-5"
          >
            <path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" />
            <path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" />
            <path d="M 7 17h.01" />
            <path
              d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"
            />
          </svg>
        </slot>
      </v-button>
    </header>

    <!-- There is some odd behavior with test coverage, v-model must be the last property in this component -->
    <v-radio-group
      v-if="swatches"
      data-test="swatches"
      :class="`vuetiful-previewer-swatches ${classSwatchesMerged}`"
      active="bg-transparent"
      hover="bg-transparent"
      v-model="chosenBackground"
    >
      <v-radio-item
        v-for="([key, value], index) in Object.entries(backgrounds)"
        :value="key"
        :key="index"
        :class="`${value} ${classSwatchMerged}`"
        :title="key"
      >
        <slot v-if="index === 0 && chosenBackground !== key" name="cancel-item">
          <!-- https://lucide.dev/icons/circle-x -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-x h-5 w-5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </slot>

        <slot v-if="chosenBackground === key" name="selected-item">
          <!-- https://lucide.dev/icons/circle-check -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-check h-5 w-5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </slot>
      </v-radio-item>
    </v-radio-group>

    <template v-if="tabView === 'preview'">
      <div
        :class="`vuetiful-previewer-preview-tab ${backgrounds[chosenBackground]} ${classPreviewTabMerged}`"
      >
        <div
          data-test="previewer-preview"
          :class="`vuetiful-previewer-preview-tab-area ${
            radioSize === 'mobile' ? classPreviewAreaMobileMerged : classPreviewAreaDesktopmerged
          } ${classPreviewTabAreaMerged}`"
        >
          <slot name="preview">(preview)</slot>
        </div>
      </div>
      <footer
        v-if="$slots.footer"
        :class="`vuetiful-previewer-preview-footer ${classPreviewTabFooterMerged}`"
      >
        <slot name="footer" />
      </footer>
    </template>

    <template v-if="tabView === 'code'">
      <div
        data-test="previewer-source"
        :class="`vuetiful-previewer-tab-source ${backgrounds[chosenBackground]} ${classPreviewTabSourceMerged}`"
      >
        <slot name="source">(source)</slot>
      </div>
    </template>
  </div>
</template>
