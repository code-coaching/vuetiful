<template>
  <q-item clickable @click="onClick()" tag="a">
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

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: {
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
  },
  setup(props) {
    const router = useRouter();

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

    return { onClick };
  },
});
</script>
