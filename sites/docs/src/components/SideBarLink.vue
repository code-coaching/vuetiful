<script setup lang="ts">
import { VRadioItem, useDrawer } from '@code-coaching/vuetiful';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  link: {
    type: String,
    default: '#',
  },

  routeName: {
    type: String,
    default: '',
  },

  params: {
    type: Object,
    default: () => ({}),
  },

  preventAutoClose: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();
const route = useRoute();
const activeRoute = computed(() => route.name);
const { close } = useDrawer();

const onClick = () => {
  if (props.link.split('http')[0] === '') {
    window.open(props.link, '_blank')?.focus();
  } else {
    const { params } = props;
    if (Object.keys(params).length) {
      void router.push({ name: props.routeName, params });
    } else {
      void router.push({ name: props.routeName });
    }
    if (!props.preventAutoClose) close();
  }
};
</script>

<template>
  <v-radio-item
    unstyled
    :value="props.link"
    :class="`min-w-full border-token rounded-token ${
      routeName === activeRoute
        ? 'variant-filled'
        : 'hover:variant-filled-surface focus:variant-ghost-surface hover:text-surface-900 dark:hover:text-surface-50'
    }`"
    :key="routeName"
    @click="onClick()"
    @keydown.enter="onClick()"
    @keydown.space="onClick()"
  >
    <slot />
  </v-radio-item>
</template>
