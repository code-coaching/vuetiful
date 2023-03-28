<template>
  <q-item
    :active="name === activeRoute"
    active-class="active-item"
    clickable
    @click="onClick()"
    tag="a"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: '',
  },

  link: {
    type: String,
    default: '#',
  },

  name: {
    type: String,
    default: '',
  },

  icon: {
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
      void router.push({ name: props.name, params });
    } else {
      void router.push({ name: props.name });
    }
  }
};
</script>

<style scoped>
.active-item {
  background-color: rgb(var(--color-surface-300));
  color: rgb(var(--on-surface));
}

.dark .active-item {
  background-color: rgb(var(--color-surface-900));
}
</style>
