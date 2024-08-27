<script setup lang="ts">
import { vClickOutsideGroup } from '@/lib/directives';
import { tm } from '@/lib/utils';
import { autoUpdate, flip, offset, shift, useFloating, type Placement } from '@floating-ui/vue';
import { onMounted, ref, type ComponentPublicInstance, type Ref, watch } from 'vue';

interface PopoverProps {
  class?: string;

  anchor: () => Ref<ComponentPublicInstance>;
  placement?: Placement;
  show?: boolean;
  showOnClick?: boolean;
  offset?: number;
}
const props = withDefaults(defineProps<PopoverProps>(), {
  placement: 'bottom',
  show: false,
  showOnClick: false,
  offset: 8,
});

const showRef = ref(props.show);
const anchorId = ref();

const floating = ref() as Ref<HTMLElement>;

const { floatingStyles } = useFloating(props.anchor(), floating, {
  placement: props.placement,
  middleware: [offset(props.offset), flip(), shift()],
  whileElementsMounted: autoUpdate,
});

const showTooltip = () => (showRef.value = true);
const hideTooltip = () => (showRef.value = false);
const toggleTooltip = () => (showRef.value = !showRef.value);

onMounted(() => {
  const anchorElement = props.anchor().value.$el ? props.anchor().value.$el : props.anchor().value;
  const events = [];

  if (props.showOnClick) {
    if (!anchorElement.id)
      console.error(
        'Vuetiful Error: When using "show-on-click" on v-popover, it is required to put a unique id on the anchor element.',
      );
    anchorId.value = `#${anchorElement.id}`;

    events.push(['click', toggleTooltip]);
    events.push([
      'keydown',
      (e: KeyboardEvent) => ['Enter', ' '].includes(e.key) && toggleTooltip(),
    ]);
  } else {
    events.push(
      ['mouseenter', showTooltip],
      ['mouseleave', hideTooltip],
      ['focus', showTooltip],
      ['blur', hideTooltip],
    );
  }

  events.forEach(([event, listener]) => {
    anchorElement.addEventListener(event, listener);
  });
});

const classRootDefault =
  'rounded-container p-4 shadow-xl bg-surface-200-800 text-surface-950-50';
const classRootMerged = tm(classRootDefault, props.class);
</script>

<template>
  <transition
    enter-active-class="transition-opacity"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="showRef"
      v-click-outside-group="{
        elementsInGroup: [anchorId],
        callback: () => (anchorId ? hideTooltip() : null),
      }"
      ref="floating"
      :style="floatingStyles"
      :class="`${classRootMerged}`"
    >
      <slot />
    </div>
  </transition>
</template>
