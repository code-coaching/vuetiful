<template>
  <q-page class="col items-center justify-evenly">
    <h1>Vuetiful H1</h1>
    <h2>Vuetiful H2</h2>
    <h3>Vuetiful H3</h3>
    <h4>Vuetiful H4</h4>
    <h5>Vuetiful H5</h5>
    <h6>Vuetiful H6</h6>

    <br />

    <p>Vuetiful paragraph</p>

    <br />

    <q-card class="w-64">
      <q-card-section>
        <h3>This is a QCard</h3>
      </q-card-section>
      <q-card-section class="buttons">
        <v-button style="width: 100%">This is a VButton</v-button>
        <q-btn color="primary">This is a QBtn</q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VButton } from '@code-coaching/vuetiful';

export default defineComponent({
  name: 'IndexPage',
  components: { VButton },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
