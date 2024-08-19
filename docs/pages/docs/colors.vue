<script setup lang="ts">
import { VAlert } from "@code-coaching/vuetiful";
</script>

<template>
  <h1 class="h1">Colors</h1>

  <h2 class="h2">Usage</h2>
  <section class="section">
    <p>
      All
      <a
        class="anchor"
        target="_blank"
        href="https://tailwindcss.com/docs/background-color"
        >Tailwind colors</a
      >
      are available.
    </p>

    Aditionally, the following colors are available:
    <div class="flex gap-2">
      <code class="code">primary</code> <code class="code">secondary</code>
      <code class="code">tertiary</code> <code class="code">success</code>
      <code class="code">warning</code> <code class="code">error</code>
      <code class="code">surface</code>
    </div>
  </section>
  <section class="section">
    <p class="mb-4">Colors can be used combined with:</p>
    <div class="flex flex-col gap-2">
      <div class="flex">
        <a
          class="anchor w-28"
          target="_blank"
          href="https://tailwindcss.com/docs/background-color"
          >Background</a
        >
        <code class="code">bg-primary-500</code>
      </div>

      <div class="flex">
        <a
          class="anchor w-28"
          target="_blank"
          href="https://tailwindcss.com/docs/text-color"
          >Text</a
        >
        <code class="code">text-primary-500</code>
      </div>

      <div class="flex">
        <a
          class="anchor w-28"
          target="_blank"
          href="https://tailwindcss.com/docs/border-color"
          >Border</a
        >
        <code class="code">border-primary-500</code>
      </div>

      <div class="flex">
        <a
          class="anchor w-28"
          target="_blank"
          href="https://tailwindcss.com/docs/outline-color"
          >Outline</a
        >
        <code class="code">outline-primary-500</code>
      </div>

      <div class="flex">
        <a
          class="anchor w-28"
          target="_blank"
          href="https://tailwindcss.com/docs/ring-color"
          >Ring</a
        >
        <code class="code">ring-primary-900</code>
      </div>

      <div class="flex">
        <a
          class="anchor w-28"
          target="_blank"
          href="https://tailwindcss.com/docs/ring-offset-color"
          >Ring Offset</a
        >
        <code class="code">ring-offset-primary-900</code>
      </div>

      <div class="flex">
        <a
          class="anchor w-28"
          target="_blank"
          href="https://tailwindcss.com/docs/divide-color"
          >Divide</a
        >
        <code class="code">divide-primary-900</code>
      </div>
    </div>
  </section>

  <section class="section">
    <v-alert type="info">
      Vuetiful provides utility classes to handle light and dark mode in a
      single class.
      <code class="code"> bg-primary-200-800</code> will use
      <code class="code">bg-primary-200</code> in light mode and
      <code class="code">bg-primary-800</code> in dark mode. This is the same as
      using <code class="code">bg-primary-200 dark:bg-primary-800</code>.
    </v-alert>
  </section>

  <h2 class="h2">Examples</h2>
  <p>
    Intensity <code class="code">500</code> is the default color. The higher the
    intensity, the darker the color. The lower the intensity, the lighter the
    color.
  </p>
  <section class="section">
    <div class="w-full">
      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">surface</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-surface-50 text-surface-contrast-50">50</div>
          <div class="badge bg-surface-100 text-surface-contrast-100">100</div>
          <div class="badge bg-surface-200 text-surface-contrast-200">200</div>
          <div class="badge bg-surface-300 text-surface-contrast-300">300</div>
          <div class="badge bg-surface-400 text-surface-contrast-400">400</div>
          <div class="badge bg-surface-500 text-surface-contrast-500">500</div>
          <div class="badge bg-surface-600 text-surface-contrast-600">600</div>
          <div class="badge bg-surface-700 text-surface-contrast-700">700</div>
          <div class="badge bg-surface-800 text-surface-contrast-800">800</div>
          <div class="badge bg-surface-900 text-surface-contrast-900">900</div>
          <div class="badge bg-surface-950 text-surface-contrast-950">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">primary</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-primary-50 text-primary-contrast-50">50</div>
          <div class="badge bg-primary-100 text-primary-contrast-100">100</div>
          <div class="badge bg-primary-200 text-primary-contrast-200">200</div>
          <div class="badge bg-primary-300 text-primary-contrast-300">300</div>
          <div class="badge bg-primary-400 text-primary-contrast-400">400</div>
          <div class="badge bg-primary-500 text-primary-contrast-500">500</div>
          <div class="badge bg-primary-600 text-primary-contrast-600">600</div>
          <div class="badge bg-primary-700 text-primary-contrast-700">700</div>
          <div class="badge bg-primary-800 text-primary-contrast-800">800</div>
          <div class="badge bg-primary-900 text-primary-contrast-900">900</div>
          <div class="badge bg-primary-950 text-primary-contrast-950">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">secondary</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-secondary-50 text-secondary-contrast-50">50</div>
          <div class="badge bg-secondary-100 text-secondary-contrast-100">
            100
          </div>
          <div class="badge bg-secondary-200 text-secondary-contrast-200">
            200
          </div>
          <div class="badge bg-secondary-300 text-secondary-contrast-300">
            300
          </div>
          <div class="badge bg-secondary-400 text-secondary-contrast-400">
            400
          </div>
          <div class="badge bg-secondary-500 text-secondary-contrast-500">
            500
          </div>
          <div class="badge bg-secondary-600 text-secondary-contrast-600">
            600
          </div>
          <div class="badge bg-secondary-700 text-secondary-contrast-700">
            700
          </div>
          <div class="badge bg-secondary-800 text-secondary-contrast-800">
            800
          </div>
          <div class="badge bg-secondary-900 text-secondary-contrast-900">
            900
          </div>
          <div class="badge bg-secondary-950 text-secondary-contrast-950">
            950
          </div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">tertiary</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-tertiary-50 text-tertiary-contrast-50">50</div>
          <div class="badge bg-tertiary-100 text-tertiary-contrast-100">
            100
          </div>
          <div class="badge bg-tertiary-200 text-tertiary-contrast-200">
            200
          </div>
          <div class="badge bg-tertiary-300 text-tertiary-contrast-300">
            300
          </div>
          <div class="badge bg-tertiary-400 text-tertiary-contrast-400">
            400
          </div>
          <div class="badge bg-tertiary-500 text-tertiary-contrast-500">
            500
          </div>
          <div class="badge bg-tertiary-600 text-tertiary-contrast-600">
            600
          </div>
          <div class="badge bg-tertiary-700 text-tertiary-contrast-700">
            700
          </div>
          <div class="badge bg-tertiary-800 text-tertiary-contrast-800">
            800
          </div>
          <div class="badge bg-tertiary-900 text-tertiary-contrast-900">
            900
          </div>
          <div class="badge bg-tertiary-950 text-tertiary-contrast-950">
            950
          </div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">success</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-success-50 text-success-contrast-50">50</div>
          <div class="badge bg-success-100 text-success-contrast-100">100</div>
          <div class="badge bg-success-200 text-success-contrast-200">200</div>
          <div class="badge bg-success-300 text-success-contrast-300">300</div>
          <div class="badge bg-success-400 text-success-contrast-400">400</div>
          <div class="badge bg-success-500 text-success-contrast-500">500</div>
          <div class="badge bg-success-600 text-success-contrast-600">600</div>
          <div class="badge bg-success-700 text-success-contrast-700">700</div>
          <div class="badge bg-success-800 text-success-contrast-800">800</div>
          <div class="badge bg-success-900 text-success-contrast-900">900</div>
          <div class="badge bg-success-950 text-success-contrast-950">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">warning</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-warning-50 text-warning-contrast-50">50</div>
          <div class="badge bg-warning-100 text-warning-contrast-100">100</div>
          <div class="badge bg-warning-200 text-warning-contrast-200">200</div>
          <div class="badge bg-warning-300 text-warning-contrast-300">300</div>
          <div class="badge bg-warning-400 text-warning-contrast-400">400</div>
          <div class="badge bg-warning-500 text-warning-contrast-500">500</div>
          <div class="badge bg-warning-600 text-warning-contrast-600">600</div>
          <div class="badge bg-warning-700 text-warning-contrast-700">700</div>
          <div class="badge bg-warning-800 text-warning-contrast-800">800</div>
          <div class="badge bg-warning-900 text-warning-contrast-900">900</div>
          <div class="badge bg-warning-950 text-warning-contrast-950">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">error</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-error-50 text-error-contrast-50">50</div>
          <div class="badge bg-error-100 text-error-contrast-100">100</div>
          <div class="badge bg-error-200 text-error-contrast-200">200</div>
          <div class="badge bg-error-300 text-error-contrast-300">300</div>
          <div class="badge bg-error-400 text-error-contrast-400">400</div>
          <div class="badge bg-error-500 text-error-contrast-500">500</div>
          <div class="badge bg-error-600 text-error-contrast-600">600</div>
          <div class="badge bg-error-700 text-error-contrast-700">700</div>
          <div class="badge bg-error-800 text-error-contrast-800">800</div>
          <div class="badge bg-error-900 text-error-contrast-900">900</div>
          <div class="badge bg-error-950 text-error-contrast-950">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">neutral</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-neutral-50 text-neutral-900">50</div>
          <div class="badge bg-neutral-100 text-neutral-900">100</div>
          <div class="badge bg-neutral-200 text-neutral-900">200</div>
          <div class="badge bg-neutral-300 text-neutral-900">300</div>
          <div class="badge bg-neutral-400 text-neutral-900">400</div>
          <div class="badge bg-neutral-500 text-neutral-50">500</div>
          <div class="badge bg-neutral-600 text-neutral-50">600</div>
          <div class="badge bg-neutral-700 text-neutral-50">700</div>
          <div class="badge bg-neutral-800 text-neutral-50">800</div>
          <div class="badge bg-neutral-900 text-neutral-50">900</div>
          <div class="badge bg-neutral-950 text-neutral-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">slate</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-slate-50 text-slate-900">50</div>
          <div class="badge bg-slate-100 text-slate-900">100</div>
          <div class="badge bg-slate-200 text-slate-900">200</div>
          <div class="badge bg-slate-300 text-slate-900">300</div>
          <div class="badge bg-slate-400 text-slate-900">400</div>
          <div class="badge bg-slate-500 text-slate-50">500</div>
          <div class="badge bg-slate-600 text-slate-50">600</div>
          <div class="badge bg-slate-700 text-slate-50">700</div>
          <div class="badge bg-slate-800 text-slate-50">800</div>
          <div class="badge bg-slate-900 text-slate-50">900</div>
          <div class="badge bg-slate-950 text-slate-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">gray</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-gray-50 text-gray-900">50</div>
          <div class="badge bg-gray-100 text-gray-900">100</div>
          <div class="badge bg-gray-200 text-gray-900">200</div>
          <div class="badge bg-gray-300 text-gray-900">300</div>
          <div class="badge bg-gray-400 text-gray-900">400</div>
          <div class="badge bg-gray-500 text-gray-50">500</div>
          <div class="badge bg-gray-600 text-gray-50">600</div>
          <div class="badge bg-gray-700 text-gray-50">700</div>
          <div class="badge bg-gray-800 text-gray-50">800</div>
          <div class="badge bg-gray-900 text-gray-50">900</div>
          <div class="badge bg-gray-950 text-gray-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">zinc</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-zinc-50 text-zinc-900">50</div>
          <div class="badge bg-zinc-100 text-zinc-900">100</div>
          <div class="badge bg-zinc-200 text-zinc-900">200</div>
          <div class="badge bg-zinc-300 text-zinc-900">300</div>
          <div class="badge bg-zinc-400 text-zinc-900">400</div>
          <div class="badge bg-zinc-500 text-zinc-50">500</div>
          <div class="badge bg-zinc-600 text-zinc-50">600</div>
          <div class="badge bg-zinc-700 text-zinc-50">700</div>
          <div class="badge bg-zinc-800 text-zinc-50">800</div>
          <div class="badge bg-zinc-900 text-zinc-50">900</div>
          <div class="badge bg-zinc-950 text-zinc-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">neutral</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-neutral-50 text-neutral-900">50</div>
          <div class="badge bg-neutral-100 text-neutral-900">100</div>
          <div class="badge bg-neutral-200 text-neutral-900">200</div>
          <div class="badge bg-neutral-300 text-neutral-900">300</div>
          <div class="badge bg-neutral-400 text-neutral-900">400</div>
          <div class="badge bg-neutral-500 text-neutral-50">500</div>
          <div class="badge bg-neutral-600 text-neutral-50">600</div>
          <div class="badge bg-neutral-700 text-neutral-50">700</div>
          <div class="badge bg-neutral-800 text-neutral-50">800</div>
          <div class="badge bg-neutral-900 text-neutral-50">900</div>
          <div class="badge bg-neutral-950 text-neutral-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">stone</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-stone-50 text-stone-900">50</div>
          <div class="badge bg-stone-100 text-stone-900">100</div>
          <div class="badge bg-stone-200 text-stone-900">200</div>
          <div class="badge bg-stone-300 text-stone-900">300</div>
          <div class="badge bg-stone-400 text-stone-900">400</div>
          <div class="badge bg-stone-500 text-stone-50">500</div>
          <div class="badge bg-stone-600 text-stone-50">600</div>
          <div class="badge bg-stone-700 text-stone-50">700</div>
          <div class="badge bg-stone-800 text-stone-50">800</div>
          <div class="badge bg-stone-900 text-stone-50">900</div>
          <div class="badge bg-stone-950 text-stone-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">red</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-red-50 text-red-900">50</div>
          <div class="badge bg-red-100 text-red-900">100</div>
          <div class="badge bg-red-200 text-red-900">200</div>
          <div class="badge bg-red-300 text-red-900">300</div>
          <div class="badge bg-red-400 text-red-900">400</div>
          <div class="badge bg-red-500 text-red-50">500</div>
          <div class="badge bg-red-600 text-red-50">600</div>
          <div class="badge bg-red-700 text-red-50">700</div>
          <div class="badge bg-red-800 text-red-50">800</div>
          <div class="badge bg-red-900 text-red-50">900</div>
          <div class="badge bg-red-950 text-red-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">orange</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-orange-50 text-orange-900">50</div>
          <div class="badge bg-orange-100 text-orange-900">100</div>
          <div class="badge bg-orange-200 text-orange-900">200</div>
          <div class="badge bg-orange-300 text-orange-900">300</div>
          <div class="badge bg-orange-400 text-orange-900">400</div>
          <div class="badge bg-orange-500 text-orange-50">500</div>
          <div class="badge bg-orange-600 text-orange-50">600</div>
          <div class="badge bg-orange-700 text-orange-50">700</div>
          <div class="badge bg-orange-800 text-orange-50">800</div>
          <div class="badge bg-orange-900 text-orange-50">900</div>
          <div class="badge bg-orange-950 text-orange-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">amber</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-amber-50 text-amber-900">50</div>
          <div class="badge bg-amber-100 text-amber-900">100</div>
          <div class="badge bg-amber-200 text-amber-900">200</div>
          <div class="badge bg-amber-300 text-amber-900">300</div>
          <div class="badge bg-amber-400 text-amber-900">400</div>
          <div class="badge bg-amber-500 text-amber-50">500</div>
          <div class="badge bg-amber-600 text-amber-50">600</div>
          <div class="badge bg-amber-700 text-amber-50">700</div>
          <div class="badge bg-amber-800 text-amber-50">800</div>
          <div class="badge bg-amber-900 text-amber-50">900</div>
          <div class="badge bg-amber-950 text-amber-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">yellow</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-yellow-50 text-yellow-900">50</div>
          <div class="badge bg-yellow-100 text-yellow-900">100</div>
          <div class="badge bg-yellow-200 text-yellow-900">200</div>
          <div class="badge bg-yellow-300 text-yellow-900">300</div>
          <div class="badge bg-yellow-400 text-yellow-900">400</div>
          <div class="badge bg-yellow-500 text-yellow-50">500</div>
          <div class="badge bg-yellow-600 text-yellow-50">600</div>
          <div class="badge bg-yellow-700 text-yellow-50">700</div>
          <div class="badge bg-yellow-800 text-yellow-50">800</div>
          <div class="badge bg-yellow-900 text-yellow-50">900</div>
          <div class="badge bg-yellow-950 text-yellow-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">lime</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-lime-50 text-lime-900">50</div>
          <div class="badge bg-lime-100 text-lime-900">100</div>
          <div class="badge bg-lime-200 text-lime-900">200</div>
          <div class="badge bg-lime-300 text-lime-900">300</div>
          <div class="badge bg-lime-400 text-lime-900">400</div>
          <div class="badge bg-lime-500 text-lime-50">500</div>
          <div class="badge bg-lime-600 text-lime-50">600</div>
          <div class="badge bg-lime-700 text-lime-50">700</div>
          <div class="badge bg-lime-800 text-lime-50">800</div>
          <div class="badge bg-lime-900 text-lime-50">900</div>
          <div class="badge bg-lime-950 text-lime-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">green</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-green-50 text-green-900">50</div>
          <div class="badge bg-green-100 text-green-900">100</div>
          <div class="badge bg-green-200 text-green-900">200</div>
          <div class="badge bg-green-300 text-green-900">300</div>
          <div class="badge bg-green-400 text-green-900">400</div>
          <div class="badge bg-green-500 text-green-50">500</div>
          <div class="badge bg-green-600 text-green-50">600</div>
          <div class="badge bg-green-700 text-green-50">700</div>
          <div class="badge bg-green-800 text-green-50">800</div>
          <div class="badge bg-green-900 text-green-50">900</div>
          <div class="badge bg-green-950 text-green-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">emerald</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-emerald-50 text-emerald-900">50</div>
          <div class="badge bg-emerald-100 text-emerald-900">100</div>
          <div class="badge bg-emerald-200 text-emerald-900">200</div>
          <div class="badge bg-emerald-300 text-emerald-900">300</div>
          <div class="badge bg-emerald-400 text-emerald-900">400</div>
          <div class="badge bg-emerald-500 text-emerald-50">500</div>
          <div class="badge bg-emerald-600 text-emerald-50">600</div>
          <div class="badge bg-emerald-700 text-emerald-50">700</div>
          <div class="badge bg-emerald-800 text-emerald-50">800</div>
          <div class="badge bg-emerald-900 text-emerald-50">900</div>
          <div class="badge bg-emerald-950 text-emerald-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">teal</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-teal-50 text-teal-900">50</div>
          <div class="badge bg-teal-100 text-teal-900">100</div>
          <div class="badge bg-teal-200 text-teal-900">200</div>
          <div class="badge bg-teal-300 text-teal-900">300</div>
          <div class="badge bg-teal-400 text-teal-900">400</div>
          <div class="badge bg-teal-500 text-teal-50">500</div>
          <div class="badge bg-teal-600 text-teal-50">600</div>
          <div class="badge bg-teal-700 text-teal-50">700</div>
          <div class="badge bg-teal-800 text-teal-50">800</div>
          <div class="badge bg-teal-900 text-teal-50">900</div>
          <div class="badge bg-teal-950 text-teal-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">cyan</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-cyan-50 text-cyan-900">50</div>
          <div class="badge bg-cyan-100 text-cyan-900">100</div>
          <div class="badge bg-cyan-200 text-cyan-900">200</div>
          <div class="badge bg-cyan-300 text-cyan-900">300</div>
          <div class="badge bg-cyan-400 text-cyan-900">400</div>
          <div class="badge bg-cyan-500 text-cyan-50">500</div>
          <div class="badge bg-cyan-600 text-cyan-50">600</div>
          <div class="badge bg-cyan-700 text-cyan-50">700</div>
          <div class="badge bg-cyan-800 text-cyan-50">800</div>
          <div class="badge bg-cyan-900 text-cyan-50">900</div>
          <div class="badge bg-cyan-950 text-cyan-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">sky</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-sky-50 text-sky-900">50</div>
          <div class="badge bg-sky-100 text-sky-900">100</div>
          <div class="badge bg-sky-200 text-sky-900">200</div>
          <div class="badge bg-sky-300 text-sky-900">300</div>
          <div class="badge bg-sky-400 text-sky-900">400</div>
          <div class="badge bg-sky-500 text-sky-50">500</div>
          <div class="badge bg-sky-600 text-sky-50">600</div>
          <div class="badge bg-sky-700 text-sky-50">700</div>
          <div class="badge bg-sky-800 text-sky-50">800</div>
          <div class="badge bg-sky-900 text-sky-50">900</div>
          <div class="badge bg-sky-950 text-sky-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">blue</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-blue-50 text-blue-900">50</div>
          <div class="badge bg-blue-100 text-blue-900">100</div>
          <div class="badge bg-blue-200 text-blue-900">200</div>
          <div class="badge bg-blue-300 text-blue-900">300</div>
          <div class="badge bg-blue-400 text-blue-900">400</div>
          <div class="badge bg-blue-500 text-blue-50">500</div>
          <div class="badge bg-blue-600 text-blue-50">600</div>
          <div class="badge bg-blue-700 text-blue-50">700</div>
          <div class="badge bg-blue-800 text-blue-50">800</div>
          <div class="badge bg-blue-900 text-blue-50">900</div>
          <div class="badge bg-blue-950 text-blue-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">indigo</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-indigo-50 text-indigo-900">50</div>
          <div class="badge bg-indigo-100 text-indigo-900">100</div>
          <div class="badge bg-indigo-200 text-indigo-900">200</div>
          <div class="badge bg-indigo-300 text-indigo-900">300</div>
          <div class="badge bg-indigo-400 text-indigo-900">400</div>
          <div class="badge bg-indigo-500 text-indigo-50">500</div>
          <div class="badge bg-indigo-600 text-indigo-50">600</div>
          <div class="badge bg-indigo-700 text-indigo-50">700</div>
          <div class="badge bg-indigo-800 text-indigo-50">800</div>
          <div class="badge bg-indigo-900 text-indigo-50">900</div>
          <div class="badge bg-indigo-950 text-indigo-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">violet</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-violet-50 text-violet-900">50</div>
          <div class="badge bg-violet-100 text-violet-900">100</div>
          <div class="badge bg-violet-200 text-violet-900">200</div>
          <div class="badge bg-violet-300 text-violet-900">300</div>
          <div class="badge bg-violet-400 text-violet-900">400</div>
          <div class="badge bg-violet-500 text-violet-50">500</div>
          <div class="badge bg-violet-600 text-violet-50">600</div>
          <div class="badge bg-violet-700 text-violet-50">700</div>
          <div class="badge bg-violet-800 text-violet-50">800</div>
          <div class="badge bg-violet-900 text-violet-50">900</div>
          <div class="badge bg-violet-950 text-violet-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">purple</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-purple-50 text-purple-900">50</div>
          <div class="badge bg-purple-100 text-purple-900">100</div>
          <div class="badge bg-purple-200 text-purple-900">200</div>
          <div class="badge bg-purple-300 text-purple-900">300</div>
          <div class="badge bg-purple-400 text-purple-900">400</div>
          <div class="badge bg-purple-500 text-purple-50">500</div>
          <div class="badge bg-purple-600 text-purple-50">600</div>
          <div class="badge bg-purple-700 text-purple-50">700</div>
          <div class="badge bg-purple-800 text-purple-50">800</div>
          <div class="badge bg-purple-900 text-purple-50">900</div>
          <div class="badge bg-purple-950 text-purple-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">fuchsia</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-fuchsia-50 text-fuchsia-900">50</div>
          <div class="badge bg-fuchsia-100 text-fuchsia-900">100</div>
          <div class="badge bg-fuchsia-200 text-fuchsia-900">200</div>
          <div class="badge bg-fuchsia-300 text-fuchsia-900">300</div>
          <div class="badge bg-fuchsia-400 text-fuchsia-900">400</div>
          <div class="badge bg-fuchsia-500 text-fuchsia-50">500</div>
          <div class="badge bg-fuchsia-600 text-fuchsia-50">600</div>
          <div class="badge bg-fuchsia-700 text-fuchsia-50">700</div>
          <div class="badge bg-fuchsia-800 text-fuchsia-50">800</div>
          <div class="badge bg-fuchsia-900 text-fuchsia-50">900</div>
          <div class="badge bg-fuchsia-950 text-fuchsia-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">pink</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-pink-50 text-pink-900">50</div>
          <div class="badge bg-pink-100 text-pink-900">100</div>
          <div class="badge bg-pink-200 text-pink-900">200</div>
          <div class="badge bg-pink-300 text-pink-900">300</div>
          <div class="badge bg-pink-400 text-pink-900">400</div>
          <div class="badge bg-pink-500 text-pink-50">500</div>
          <div class="badge bg-pink-600 text-pink-50">600</div>
          <div class="badge bg-pink-700 text-pink-50">700</div>
          <div class="badge bg-pink-800 text-pink-50">800</div>
          <div class="badge bg-pink-900 text-pink-50">900</div>
          <div class="badge bg-pink-950 text-pink-50">950</div>
        </div>
      </div>

      <div class="mb-4 flex flex-wrap items-start gap-2">
        <div class="color-column">rose</div>
        <div class="flex flex-wrap gap-2">
          <div class="badge bg-rose-50 text-rose-900">50</div>
          <div class="badge bg-rose-100 text-rose-900">100</div>
          <div class="badge bg-rose-200 text-rose-900">200</div>
          <div class="badge bg-rose-300 text-rose-900">300</div>
          <div class="badge bg-rose-400 text-rose-900">400</div>
          <div class="badge bg-rose-500 text-rose-50">500</div>
          <div class="badge bg-rose-600 text-rose-50">600</div>
          <div class="badge bg-rose-700 text-rose-50">700</div>
          <div class="badge bg-rose-800 text-rose-50">800</div>
          <div class="badge bg-rose-900 text-rose-50">900</div>
          <div class="badge bg-rose-950 text-rose-50">950</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.color-column {
  width: 100px;
}
</style>
