<script setup lang="ts">
import { tm } from '@/lib/utils';
import { computed } from 'vue';

/**
 * @slot fixedHeader - Insert fixed header content, such as Skeleton's App Bar component.
 * @slot sidebarLeft - Hidden when empty. Allows you to set fixed left sidebar content.
 * @slot sidebarRight - Hidden when empty. Allows you to set fixed right sidebar content.
 * @slot pageHeader - Insert content that resides above your page content. Great for global alerts.
 * @slot pageFooter - Insert content that resides below your page content. Recommended for most layouts.
 * @slot fixedFooter - Insert fixed footer content. Not recommended for most layouts.
 */
export type CssClasses = string;
const props = defineProps({
  fixedHeaderHeight: {
    type: String,
    default: '50px',
  },
  fixedFooterHeight: {
    type: String,
    default: '50px',
  },

  class: {
    type: String,
    default: '',
  },

  classFixedHeader: {
    type: String,
    default: '',
  },

  classPageContainer: {
    type: String,
    default: '',
  },
  classPageSidebarLeft: {
    type: String,
    default: '',
  },
  classPageSidebarRight: {
    type: String,
    default: '',
  },
  classPageHeader: {
    type: String,
    default: '',
  },
  classPageContent: {
    type: String,
    default: '',
  },
  classPageFooter: {
    type: String,
    default: '',
  },

  classFixedFooter: {
    type: String,
    default: '',
  },
});

const slots = defineSlots();
const computedHeight = computed(() => {
  return `calc(100vh - ${slots.fixedHeader ? props.fixedHeaderHeight : '0px'} - ${slots.fixedFooter ? props.fixedFooterHeight : '0px'})`;
});
const computedTop = computed(() => {
  return `${slots.fixedHeader ? props.fixedHeaderHeight : '0px'}`;
});

const classRootDefault = 'relative min-h-screen w-full';
const classRootMerged = computed(() => tm(classRootDefault, props.class));

const classFixedHeaderDefault = 'sticky top-0 z-10';
const classFixedHeaderMerged = computed(() => tm(classFixedHeaderDefault, props.classFixedHeader));

const classPageContainerDefault = 'flex w-full';
const classPageContainerMerged = computed(() =>
  tm(classPageContainerDefault, props.classPageContainer),
);

const classPageSidebarLeftDefault = 'sticky hidden w-fit min-w-fit overflow-y-auto lg:block';
const classPageSidebarLeftMerged = computed(() =>
  tm(classPageSidebarLeftDefault, props.classPageSidebarLeft),
);

const classPageSidebarRightDefaut = 'sticky hidden w-fit min-w-fit overflow-y-auto lg:block';
const classPageSidebarRightMerged = computed(() => tm(classPageSidebarRightDefaut, props.classPageSidebarRight),);

const classPageHeaderDefault = '';
const classPageHeaderMerged = computed(() => tm(classPageHeaderDefault, props.classPageHeader));

const classPageContentDefault = 'h-full w-full';
const classPageContentMerged = computed(() => tm(classPageContentDefault, props.classPageContent));

const classPageFooterDefault = '';
const classPageFooterMerged = computed(() => tm(classPageFooterDefault, props.classPageFooter));

const classFixedFooterDefault = 'sticky bottom-0 z-10';
const classFixedFooterMerged = computed(() => tm(classFixedFooterDefault, props.classFixedFooter));
</script>

<!-- TODO - api -->
<template>
  <div :class="`vuetiful-shell ${classRootMerged}`">
    <header v-if="$slots.fixedHeader" :class="`vuetiful-fixed-header ${classFixedHeaderMerged}`">
      <slot name="fixedHeader" />
    </header>

    <div :class="`vuetiful-page-container ${classPageContainerMerged}`">
      <aside
        v-if="$slots.sidebarLeft"
        :class="`vuetiful-page-sidebar-left ${classPageSidebarLeftMerged}`"
        :style="`height: ${computedHeight}; top: ${computedTop}`"
      >
        <slot name="sidebarLeft" />
      </aside>

      <div tabindex="-1" class="vuetiful-page w-full">
        <header v-if="$slots.pageHeader" :class="`vuetiful-page-header ${classPageHeaderMerged}`">
          <slot name="pageHeader" />
        </header>

        <main :class="`vuetiful-page-content ${classPageContentMerged}`">
          <slot />
        </main>

        <footer v-if="$slots.pageFooter" :class="`vuetiful-page-footer ${classPageFooterMerged}`">
          <slot name="pageFooter" />
        </footer>
      </div>

      <aside
        v-if="$slots.sidebarRight"
        :class="`vuetiful-page-sidebar-right ${classPageSidebarRightMerged}`"
        :style="`height: ${computedHeight}; top: ${computedTop}`"
      >
        <slot name="sidebarRight" />
      </aside>
    </div>

    <footer
      v-if="$slots.fixedFooter"
      :class="`vuetiful-fixed-footer ${classFixedFooterMerged}`"
    >
      <slot name="fixedFooter" />
    </footer>
  </div>
</template>
