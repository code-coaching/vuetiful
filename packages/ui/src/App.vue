<script setup lang="ts">
import { VSwitch } from '@/lib';
import { Moon as IconMoon, Sun as IconSun } from 'lucide-vue-next';
import { ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';

const router = useRouter();
const lightMode = ref(false);

function onModeChange(newValue: boolean) {
  console.log('onModeChange', newValue);
  lightMode.value = newValue;
  if (lightMode.value) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
}
</script>

<template>
  <div class="grid h-screen grid-cols-[320px_minmax(0,_1fr)]">
    <!-- Nav -->
    <div class="p-8 space-y-8 overflow-y-auto bg-surface-100-900">
      <a class="p-2 font-mono font-bold text-white bg-[#42b883] type-scale-3" href="/">vuetiful</a>
      <hr class="hr" />
      <label class="flex items-center justify-between gap-4 label" for="mode">
        <p>Set Mode</p>
        <!-- <Switch
          id="mode"
          name="mode"
          stateActive="bg-surface-200"
          :checked="lightMode"
          @on-checked-change="onModeChange"
        >
          <template #inactiveChild>
            <IconMoon :size="14" />
          </template>
          <template #activeChild>
            <IconSun :size="14" />
          </template>
        </Switch> -->
      </label>
      <hr class="hr" />
      <!-- Components -->
      <div class="space-y-8">
        <span class="font-bold">Components</span>
        <nav class="flex flex-col gap-2 type-scale-2">
          <!-- <a class="anchor" href="/components/test">Test</a> -->
          <!-- <RouterLink class="anchor" to="/components/accordions">Accordions</RouterLink>
				<RouterLink class="anchor" to="/components/avatars">Avatars</RouterLink>
				<RouterLink class="anchor" to="/components/app-bars">App Bars</RouterLink>
				<RouterLink class="anchor" to="/components/navigation">Navigation</RouterLink>
				<RouterLink class="anchor" to="/components/progress">Progress</RouterLink>
				<RouterLink class="anchor" to="/components/progress-rings">Progress Rings</RouterLink>
				<RouterLink class="anchor" to="/components/segment-control">Segment Control</RouterLink> -->
          <a class="cursor-pointer anchor" @click="router.push({ name: 'switch' })">Switch</a>
          <!-- <RouterLink class="anchor" to="/components/tabs">Tabs</RouterLink>
				<RouterLink class="anchor" to="/components/ratings">Ratings</RouterLink> -->
        </nav>
      </div>
    </div>
    <!-- Page -->
    <main class="p-8 space-y-8 overflow-y-auto">
      <RouterView />
    </main>
  </div>
</template>
