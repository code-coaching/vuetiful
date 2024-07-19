<script lang="ts" setup>
import { VSwitch } from '@/lib';
import {
  Check as IconCheck,
  Frown as IconFrown,
  Moon as IconMoon,
  Smile as IconSmile,
  Sun as IconSun,
  X as IconX,
} from 'lucide-vue-next';
import { ref } from 'vue';

const disturb = ref(false);
const notifications = ref(true);
const disabled = ref(false);
const icons = ref(true);
const lightswitch = ref(false);
const compact = ref(false);
</script>

<template>
  <div class="space-y-10">
    <header>
      <h1 class="h1">VSwitch</h1>
    </header>
    <pre class="pre">{{
      JSON.stringify({ disturb, notifications, disabled, icons, lightswitch, compact }, null, 2)
    }}</pre>
    <section class="space-y-4">
      <label for="disturb" class="flex items-center justify-between gap-4 label">
        <p>Defaults to inactive state.</p>
        <VSwitch
          id="disturb"
          name="disturb"
          v-model="disturb"
        />
      </label>
      <hr class="hr" />
      <label for="notifications" class="flex items-center justify-between gap-4 label">
        <p>Defaults to active state.</p>
        <VSwitch
          id="notifications"
          name="notifications"
          v-model="notifications"
        />
      </label>
      <hr class="hr" />
      <label for="disabled" class="flex items-center justify-between gap-4 label">
        <p>Uses the disabled state.</p>
        <VSwitch
          id="disabled"
          name="disabled"
          v-model="disabled"
          disabled
        />
      </label>
      <hr class="hr" />
      <label for="icons" class="flex items-center justify-between gap-4 label">
        <p>Custom Icons</p>
        <VSwitch
          id="icons"
          name="icons"
          stateActive="bg-secondary-500"
          v-model="icons"
        >
          <template #inactiveChild>
            <IconX :size="14" />
          </template>
          <template #activeChild>
            <IconCheck color="blue" :size="14" />
          </template>
        </VSwitch>
      </label>
      <hr class="hr" />
      <label for="mode" class="flex items-center justify-between gap-4 label">
        <p>Lightswitch</p>
        <VSwitch
          id="mode"
          name="mode"
          stateActive="bg-surface-200"
          v-model="lightswitch"
        >
          <template #inactiveChild>
            <IconMoon :size="14" />
          </template>
          <template #activeChild>
            <IconSun :size="14" />
          </template>
        </VSwitch>
      </label>
      <hr class="hr" />
      <label for="compact" class="flex items-center justify-between gap-4 label">
        <p>Compact</p>
        <VSwitch
          id="compact"
          name="compact"
          v-model="compact"
          width="w-9"
          compact
        >
          <template #inactiveChild>
            <IconFrown :size="18" />
          </template>
          <template #activeChild>
            <IconSmile :size="18" />
          </template>
        </VSwitch>
      </label>
    </section>
  </div>
</template>
