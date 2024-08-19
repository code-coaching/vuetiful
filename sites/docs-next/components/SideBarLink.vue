<script setup lang="ts">
import { VRadioItem, useDrawer } from "@code-coaching/vuetiful";
import { computed } from "vue";

const props = defineProps({
  id: {
    type: String,
    default: "",
  },

  link: {
    type: String,
    default: "#",
  },

  routeName: {
    type: String,
    default: "",
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

const route = useRoute();
const activeRoute = computed(() => route.name);
const { close } = useDrawer();

const onClick = () => {
  if (props.link.split("http")[0] === "") {
    window.open(props.link, "_blank")?.focus();
  } else {
    const { params } = props;
    if (Object.keys(params).length) {
      void navigateTo(props.link, params);
    } else {
      void navigateTo(props.link);
    }
    if (!props.preventAutoClose) close();
  }
};
</script>

<template>
  <v-radio-item
    :id="id"
    :value="props.link"
    :class="`min-w-full cursor-pointer ${
      routeName === activeRoute
        ? 'preset-filled'
        : 'hover:preset-outlined-surface focus:preset-outlined-surface'
    }`"
    :key="routeName"
    @click="onClick()"
    @keydown.enter="onClick()"
    @keydown.space="onClick()"
  >
    <slot />
  </v-radio-item>
</template>
