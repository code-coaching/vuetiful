<template>
  <v-button
    tag="a"
    :class="`min-w-full hover:variant-ghost-secondary ${
      routeName === activeRoute
        ? 'variant-filled-secondary hover:!bg-secondary-500 hover:!text-on-secondary-token'
        : ''
    }`"
    :key="routeName"
    @click="onClick()"
  >
    <slot />
  </v-button>
</template>

<script setup lang="ts">
import { VButton } from '@code-coaching/vuetiful';
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
});

const router = useRouter();
const route = useRoute();
const activeRoute = computed(() => route.name);

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
  }
};
</script>
