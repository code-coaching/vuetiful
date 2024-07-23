<template>
  <h1 class="h1">Colors</h1>

  <h2 class="h2">Usage</h2>
  <section class="section">
    <p>
      All <a target="_blank" href="https://tailwindcss.com/docs/background-color">Tailwind colors</a> are available.
    </p>
    <p>
      Aditionally, the following colors are available: primary, secondary, tertiary, success, warning, error, surface
    </p>

    <p>
      Intensity <code>500</code> is the default color. The higher the intensity, the darker the color. The lower the
      intensity, the lighter the color.
    </p>
  </section>
  <section class="section">
    <p class="mb-4">Colors can be used combined with:</p>
    <div class="flex flex-col gap-2">
      <div class="flex">
        <a target="_blank" class="w-28" href="https://tailwindcss.com/docs/background-color">Background</a>
        <code>bg-primary-500</code>
      </div>

      <div class="flex">
        <a target="_blank" class="w-28" href="https://tailwindcss.com/docs/text-color">Text</a>
        <code>text-primary-500</code>
      </div>

      <div class="flex">
        <a target="_blank" class="w-28" href="https://tailwindcss.com/docs/border-color">Border</a>
        <code>border-primary-500</code>
      </div>

      <div class="flex">
        <a target="_blank" class="w-28" href="https://tailwindcss.com/docs/outline-color">Outline</a>
        <code>outline-primary-500</code>
      </div>

      <div class="flex">
        <a target="_blank" class="w-28" href="https://tailwindcss.com/docs/ring-color">Ring</a>
        <code>ring-primary-900</code>
      </div>

      <div class="flex">
        <a target="_blank" class="w-28" href="https://tailwindcss.com/docs/ring-offset-color">Ring Offset</a>
        <code>ring-offset-primary-900</code>
      </div>

      <div class="flex">
        <a target="_blank" class="w-28" href="https://tailwindcss.com/docs/divide-color">Divide</a>
        <code>divide-primary-900</code>
      </div>
    </div>
  </section>

  <h2 class="h2">Examples</h2>
  <section class="section">
    <div class="w-full">
      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">surface</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-surface-50 text-surface-contrast-50">50</div>
          <div class="btn-sm bg-surface-100 text-surface-contrast-100">100</div>
          <div class="btn-sm bg-surface-200 text-surface-contrast-200">200</div>
          <div class="btn-sm bg-surface-300 text-surface-contrast-300">300</div>
          <div class="btn-sm bg-surface-400 text-surface-contrast-400">400</div>
          <div class="btn-sm bg-surface-500 text-surface-contrast-500">500</div>
          <div class="btn-sm bg-surface-600 text-surface-contrast-600">600</div>
          <div class="btn-sm bg-surface-700 text-surface-contrast-700">700</div>
          <div class="btn-sm bg-surface-800 text-surface-contrast-800">800</div>
          <div class="btn-sm bg-surface-900 text-surface-contrast-900">900</div>
          <div class="btn-sm bg-surface-950 text-surface-contrast-950">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">primary</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-primary-50 text-primary-contrast-50">50</div>
          <div class="btn-sm bg-primary-100 text-primary-contrast-100">100</div>
          <div class="btn-sm bg-primary-200 text-primary-contrast-200">200</div>
          <div class="btn-sm bg-primary-300 text-primary-contrast-300">300</div>
          <div class="btn-sm bg-primary-400 text-primary-contrast-400">400</div>
          <div class="btn-sm bg-primary-500 text-primary-contrast-500">500</div>
          <div class="btn-sm bg-primary-600 text-primary-contrast-600">600</div>
          <div class="btn-sm bg-primary-700 text-primary-contrast-700">700</div>
          <div class="btn-sm bg-primary-800 text-primary-contrast-800">800</div>
          <div class="btn-sm bg-primary-900 text-primary-contrast-900">900</div>
          <div class="btn-sm bg-primary-950 text-primary-contrast-950">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">secondary</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-secondary-50 text-secondary-contrast-50">50</div>
          <div class="btn-sm bg-secondary-100 text-secondary-contrast-100">100</div>
          <div class="btn-sm bg-secondary-200 text-secondary-contrast-200">200</div>
          <div class="btn-sm bg-secondary-300 text-secondary-contrast-300">300</div>
          <div class="btn-sm bg-secondary-400 text-secondary-contrast-400">400</div>
          <div class="btn-sm bg-secondary-500 text-secondary-contrast-500">500</div>
          <div class="btn-sm bg-secondary-600 text-secondary-contrast-600">600</div>
          <div class="btn-sm bg-secondary-700 text-secondary-contrast-700">700</div>
          <div class="btn-sm bg-secondary-800 text-secondary-contrast-800">800</div>
          <div class="btn-sm bg-secondary-900 text-secondary-contrast-900">900</div>
          <div class="btn-sm bg-secondary-950 text-secondary-contrast-950">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">tertiary</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-tertiary-50 text-tertiary-contrast-50">50</div>
          <div class="btn-sm bg-tertiary-100 text-tertiary-contrast-100">100</div>
          <div class="btn-sm bg-tertiary-200 text-tertiary-contrast-200">200</div>
          <div class="btn-sm bg-tertiary-300 text-tertiary-contrast-300">300</div>
          <div class="btn-sm bg-tertiary-400 text-tertiary-contrast-400">400</div>
          <div class="btn-sm bg-tertiary-500 text-tertiary-contrast-500">500</div>
          <div class="btn-sm bg-tertiary-600 text-tertiary-contrast-600">600</div>
          <div class="btn-sm bg-tertiary-700 text-tertiary-contrast-700">700</div>
          <div class="btn-sm bg-tertiary-800 text-tertiary-contrast-800">800</div>
          <div class="btn-sm bg-tertiary-900 text-tertiary-contrast-900">900</div>
          <div class="btn-sm bg-tertiary-950 text-tertiary-contrast-950">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">success</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-success-50 text-success-contrast-50">50</div>
          <div class="btn-sm bg-success-100 text-success-contrast-100">100</div>
          <div class="btn-sm bg-success-200 text-success-contrast-200">200</div>
          <div class="btn-sm bg-success-300 text-success-contrast-300">300</div>
          <div class="btn-sm bg-success-400 text-success-contrast-400">400</div>
          <div class="btn-sm bg-success-500 text-success-contrast-500">500</div>
          <div class="btn-sm bg-success-600 text-success-contrast-600">600</div>
          <div class="btn-sm bg-success-700 text-success-contrast-700">700</div>
          <div class="btn-sm bg-success-800 text-success-contrast-800">800</div>
          <div class="btn-sm bg-success-900 text-success-contrast-900">900</div>
          <div class="btn-sm bg-success-950 text-success-contrast-950">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">warning</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-warning-50 text-warning-contrast-50">50</div>
          <div class="btn-sm bg-warning-100 text-warning-contrast-100">100</div>
          <div class="btn-sm bg-warning-200 text-warning-contrast-200">200</div>
          <div class="btn-sm bg-warning-300 text-warning-contrast-300">300</div>
          <div class="btn-sm bg-warning-400 text-warning-contrast-400">400</div>
          <div class="btn-sm bg-warning-500 text-warning-contrast-500">500</div>
          <div class="btn-sm bg-warning-600 text-warning-contrast-600">600</div>
          <div class="btn-sm bg-warning-700 text-warning-contrast-700">700</div>
          <div class="btn-sm bg-warning-800 text-warning-contrast-800">800</div>
          <div class="btn-sm bg-warning-900 text-warning-contrast-900">900</div>
          <div class="btn-sm bg-warning-950 text-warning-contrast-950">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">error</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-error-50 text-error-contrast-50">50</div>
          <div class="btn-sm bg-error-100 text-error-contrast-100">100</div>
          <div class="btn-sm bg-error-200 text-error-contrast-200">200</div>
          <div class="btn-sm bg-error-300 text-error-contrast-300">300</div>
          <div class="btn-sm bg-error-400 text-error-contrast-400">400</div>
          <div class="btn-sm bg-error-500 text-error-contrast-500">500</div>
          <div class="btn-sm bg-error-600 text-error-contrast-600">600</div>
          <div class="btn-sm bg-error-700 text-error-contrast-700">700</div>
          <div class="btn-sm bg-error-800 text-error-contrast-800">800</div>
          <div class="btn-sm bg-error-900 text-error-contrast-900">900</div>
          <div class="btn-sm bg-error-950 text-error-contrast-950">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">neutral</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-neutral-50 text-neutral-900">50</div>
          <div class="btn-sm bg-neutral-100 text-neutral-900">100</div>
          <div class="btn-sm bg-neutral-200 text-neutral-900">200</div>
          <div class="btn-sm bg-neutral-300 text-neutral-900">300</div>
          <div class="btn-sm bg-neutral-400 text-neutral-900">400</div>
          <div class="btn-sm bg-neutral-500 text-neutral-50">500</div>
          <div class="btn-sm bg-neutral-600 text-neutral-50">600</div>
          <div class="btn-sm bg-neutral-700 text-neutral-50">700</div>
          <div class="btn-sm bg-neutral-800 text-neutral-50">800</div>
          <div class="btn-sm bg-neutral-900 text-neutral-50">900</div>
          <div class="btn-sm bg-neutral-950 text-neutral-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">slate</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-slate-50 text-slate-900">50</div>
          <div class="btn-sm bg-slate-100 text-slate-900">100</div>
          <div class="btn-sm bg-slate-200 text-slate-900">200</div>
          <div class="btn-sm bg-slate-300 text-slate-900">300</div>
          <div class="btn-sm bg-slate-400 text-slate-900">400</div>
          <div class="btn-sm bg-slate-500 text-slate-50">500</div>
          <div class="btn-sm bg-slate-600 text-slate-50">600</div>
          <div class="btn-sm bg-slate-700 text-slate-50">700</div>
          <div class="btn-sm bg-slate-800 text-slate-50">800</div>
          <div class="btn-sm bg-slate-900 text-slate-50">900</div>
          <div class="btn-sm bg-slate-950 text-slate-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">gray</div>
        <div class="flex flex-wrap gap-2">
          <div class="text-gray-900 btn-sm bg-gray-50">50</div>
          <div class="text-gray-900 bg-gray-100 btn-sm">100</div>
          <div class="text-gray-900 bg-gray-200 btn-sm">200</div>
          <div class="text-gray-900 bg-gray-300 btn-sm">300</div>
          <div class="text-gray-900 bg-gray-400 btn-sm">400</div>
          <div class="bg-gray-500 btn-sm text-gray-50">500</div>
          <div class="bg-gray-600 btn-sm text-gray-50">600</div>
          <div class="bg-gray-700 btn-sm text-gray-50">700</div>
          <div class="bg-gray-800 btn-sm text-gray-50">800</div>
          <div class="bg-gray-900 btn-sm text-gray-50">900</div>
          <div class="btn-sm bg-gray-950 text-gray-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">zinc</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-zinc-50 text-zinc-900">50</div>
          <div class="btn-sm bg-zinc-100 text-zinc-900">100</div>
          <div class="btn-sm bg-zinc-200 text-zinc-900">200</div>
          <div class="btn-sm bg-zinc-300 text-zinc-900">300</div>
          <div class="btn-sm bg-zinc-400 text-zinc-900">400</div>
          <div class="btn-sm bg-zinc-500 text-zinc-50">500</div>
          <div class="btn-sm bg-zinc-600 text-zinc-50">600</div>
          <div class="btn-sm bg-zinc-700 text-zinc-50">700</div>
          <div class="btn-sm bg-zinc-800 text-zinc-50">800</div>
          <div class="btn-sm bg-zinc-900 text-zinc-50">900</div>
          <div class="btn-sm bg-zinc-950 text-zinc-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">neutral</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-neutral-50 text-neutral-900">50</div>
          <div class="btn-sm bg-neutral-100 text-neutral-900">100</div>
          <div class="btn-sm bg-neutral-200 text-neutral-900">200</div>
          <div class="btn-sm bg-neutral-300 text-neutral-900">300</div>
          <div class="btn-sm bg-neutral-400 text-neutral-900">400</div>
          <div class="btn-sm bg-neutral-500 text-neutral-50">500</div>
          <div class="btn-sm bg-neutral-600 text-neutral-50">600</div>
          <div class="btn-sm bg-neutral-700 text-neutral-50">700</div>
          <div class="btn-sm bg-neutral-800 text-neutral-50">800</div>
          <div class="btn-sm bg-neutral-900 text-neutral-50">900</div>
          <div class="btn-sm bg-neutral-950 text-neutral-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">stone</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-stone-50 text-stone-900">50</div>
          <div class="btn-sm bg-stone-100 text-stone-900">100</div>
          <div class="btn-sm bg-stone-200 text-stone-900">200</div>
          <div class="btn-sm bg-stone-300 text-stone-900">300</div>
          <div class="btn-sm bg-stone-400 text-stone-900">400</div>
          <div class="btn-sm bg-stone-500 text-stone-50">500</div>
          <div class="btn-sm bg-stone-600 text-stone-50">600</div>
          <div class="btn-sm bg-stone-700 text-stone-50">700</div>
          <div class="btn-sm bg-stone-800 text-stone-50">800</div>
          <div class="btn-sm bg-stone-900 text-stone-50">900</div>
          <div class="btn-sm bg-stone-950 text-stone-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">red</div>
        <div class="flex flex-wrap gap-2">
          <div class="text-red-900 btn-sm bg-red-50">50</div>
          <div class="text-red-900 bg-red-100 btn-sm">100</div>
          <div class="text-red-900 bg-red-200 btn-sm">200</div>
          <div class="text-red-900 bg-red-300 btn-sm">300</div>
          <div class="text-red-900 bg-red-400 btn-sm">400</div>
          <div class="bg-red-500 btn-sm text-red-50">500</div>
          <div class="bg-red-600 btn-sm text-red-50">600</div>
          <div class="bg-red-700 btn-sm text-red-50">700</div>
          <div class="bg-red-800 btn-sm text-red-50">800</div>
          <div class="bg-red-900 btn-sm text-red-50">900</div>
          <div class="btn-sm bg-red-950 text-red-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">orange</div>
        <div class="flex flex-wrap gap-2">
          <div class="text-orange-900 btn-sm bg-orange-50">50</div>
          <div class="text-orange-900 bg-orange-100 btn-sm">100</div>
          <div class="text-orange-900 bg-orange-200 btn-sm">200</div>
          <div class="text-orange-900 bg-orange-300 btn-sm">300</div>
          <div class="text-orange-900 bg-orange-400 btn-sm">400</div>
          <div class="bg-orange-500 btn-sm text-orange-50">500</div>
          <div class="bg-orange-600 btn-sm text-orange-50">600</div>
          <div class="bg-orange-700 btn-sm text-orange-50">700</div>
          <div class="bg-orange-800 btn-sm text-orange-50">800</div>
          <div class="bg-orange-900 btn-sm text-orange-50">900</div>
          <div class="btn-sm bg-orange-950 text-orange-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">amber</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-amber-50 text-amber-900">50</div>
          <div class="btn-sm bg-amber-100 text-amber-900">100</div>
          <div class="btn-sm bg-amber-200 text-amber-900">200</div>
          <div class="btn-sm bg-amber-300 text-amber-900">300</div>
          <div class="btn-sm bg-amber-400 text-amber-900">400</div>
          <div class="btn-sm bg-amber-500 text-amber-50">500</div>
          <div class="btn-sm bg-amber-600 text-amber-50">600</div>
          <div class="btn-sm bg-amber-700 text-amber-50">700</div>
          <div class="btn-sm bg-amber-800 text-amber-50">800</div>
          <div class="btn-sm bg-amber-900 text-amber-50">900</div>
          <div class="btn-sm bg-amber-950 text-amber-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">yellow</div>
        <div class="flex flex-wrap gap-2">
          <div class="text-yellow-900 btn-sm bg-yellow-50">50</div>
          <div class="text-yellow-900 bg-yellow-100 btn-sm">100</div>
          <div class="text-yellow-900 bg-yellow-200 btn-sm">200</div>
          <div class="text-yellow-900 bg-yellow-300 btn-sm">300</div>
          <div class="text-yellow-900 bg-yellow-400 btn-sm">400</div>
          <div class="bg-yellow-500 btn-sm text-yellow-50">500</div>
          <div class="bg-yellow-600 btn-sm text-yellow-50">600</div>
          <div class="bg-yellow-700 btn-sm text-yellow-50">700</div>
          <div class="bg-yellow-800 btn-sm text-yellow-50">800</div>
          <div class="bg-yellow-900 btn-sm text-yellow-50">900</div>
          <div class="btn-sm bg-yellow-950 text-yellow-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">lime</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-lime-50 text-lime-900">50</div>
          <div class="btn-sm bg-lime-100 text-lime-900">100</div>
          <div class="btn-sm bg-lime-200 text-lime-900">200</div>
          <div class="btn-sm bg-lime-300 text-lime-900">300</div>
          <div class="btn-sm bg-lime-400 text-lime-900">400</div>
          <div class="btn-sm bg-lime-500 text-lime-50">500</div>
          <div class="btn-sm bg-lime-600 text-lime-50">600</div>
          <div class="btn-sm bg-lime-700 text-lime-50">700</div>
          <div class="btn-sm bg-lime-800 text-lime-50">800</div>
          <div class="btn-sm bg-lime-900 text-lime-50">900</div>
          <div class="btn-sm bg-lime-950 text-lime-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">green</div>
        <div class="flex flex-wrap gap-2">
          <div class="text-green-900 btn-sm bg-green-50">50</div>
          <div class="text-green-900 bg-green-100 btn-sm">100</div>
          <div class="text-green-900 bg-green-200 btn-sm">200</div>
          <div class="text-green-900 bg-green-300 btn-sm">300</div>
          <div class="text-green-900 bg-green-400 btn-sm">400</div>
          <div class="bg-green-500 btn-sm text-green-50">500</div>
          <div class="bg-green-600 btn-sm text-green-50">600</div>
          <div class="bg-green-700 btn-sm text-green-50">700</div>
          <div class="bg-green-800 btn-sm text-green-50">800</div>
          <div class="bg-green-900 btn-sm text-green-50">900</div>
          <div class="btn-sm bg-green-950 text-green-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">emerald</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-emerald-50 text-emerald-900">50</div>
          <div class="btn-sm bg-emerald-100 text-emerald-900">100</div>
          <div class="btn-sm bg-emerald-200 text-emerald-900">200</div>
          <div class="btn-sm bg-emerald-300 text-emerald-900">300</div>
          <div class="btn-sm bg-emerald-400 text-emerald-900">400</div>
          <div class="btn-sm bg-emerald-500 text-emerald-50">500</div>
          <div class="btn-sm bg-emerald-600 text-emerald-50">600</div>
          <div class="btn-sm bg-emerald-700 text-emerald-50">700</div>
          <div class="btn-sm bg-emerald-800 text-emerald-50">800</div>
          <div class="btn-sm bg-emerald-900 text-emerald-50">900</div>
          <div class="btn-sm bg-emerald-950 text-emerald-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">teal</div>
        <div class="flex flex-wrap gap-2">
          <div class="text-teal-900 btn-sm bg-teal-50">50</div>
          <div class="text-teal-900 bg-teal-100 btn-sm">100</div>
          <div class="text-teal-900 bg-teal-200 btn-sm">200</div>
          <div class="text-teal-900 bg-teal-300 btn-sm">300</div>
          <div class="text-teal-900 bg-teal-400 btn-sm">400</div>
          <div class="bg-teal-500 btn-sm text-teal-50">500</div>
          <div class="bg-teal-600 btn-sm text-teal-50">600</div>
          <div class="bg-teal-700 btn-sm text-teal-50">700</div>
          <div class="bg-teal-800 btn-sm text-teal-50">800</div>
          <div class="bg-teal-900 btn-sm text-teal-50">900</div>
          <div class="btn-sm bg-teal-950 text-teal-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">cyan</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-cyan-50 text-cyan-900">50</div>
          <div class="btn-sm bg-cyan-100 text-cyan-900">100</div>
          <div class="btn-sm bg-cyan-200 text-cyan-900">200</div>
          <div class="btn-sm bg-cyan-300 text-cyan-900">300</div>
          <div class="btn-sm bg-cyan-400 text-cyan-900">400</div>
          <div class="btn-sm bg-cyan-500 text-cyan-50">500</div>
          <div class="btn-sm bg-cyan-600 text-cyan-50">600</div>
          <div class="btn-sm bg-cyan-700 text-cyan-50">700</div>
          <div class="btn-sm bg-cyan-800 text-cyan-50">800</div>
          <div class="btn-sm bg-cyan-900 text-cyan-50">900</div>
          <div class="btn-sm bg-cyan-950 text-cyan-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">sky</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-sky-50 text-sky-900">50</div>
          <div class="btn-sm bg-sky-100 text-sky-900">100</div>
          <div class="btn-sm bg-sky-200 text-sky-900">200</div>
          <div class="btn-sm bg-sky-300 text-sky-900">300</div>
          <div class="btn-sm bg-sky-400 text-sky-900">400</div>
          <div class="btn-sm bg-sky-500 text-sky-50">500</div>
          <div class="btn-sm bg-sky-600 text-sky-50">600</div>
          <div class="btn-sm bg-sky-700 text-sky-50">700</div>
          <div class="btn-sm bg-sky-800 text-sky-50">800</div>
          <div class="btn-sm bg-sky-900 text-sky-50">900</div>
          <div class="btn-sm bg-sky-950 text-sky-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">blue</div>
        <div class="flex flex-wrap gap-2">
          <div class="text-blue-900 btn-sm bg-blue-50">50</div>
          <div class="text-blue-900 bg-blue-100 btn-sm">100</div>
          <div class="text-blue-900 bg-blue-200 btn-sm">200</div>
          <div class="text-blue-900 bg-blue-300 btn-sm">300</div>
          <div class="text-blue-900 bg-blue-400 btn-sm">400</div>
          <div class="bg-blue-500 btn-sm text-blue-50">500</div>
          <div class="bg-blue-600 btn-sm text-blue-50">600</div>
          <div class="bg-blue-700 btn-sm text-blue-50">700</div>
          <div class="bg-blue-800 btn-sm text-blue-50">800</div>
          <div class="bg-blue-900 btn-sm text-blue-50">900</div>
          <div class="btn-sm bg-blue-950 text-blue-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">indigo</div>
        <div class="flex flex-wrap gap-2">
          <div class="text-indigo-900 btn-sm bg-indigo-50">50</div>
          <div class="text-indigo-900 bg-indigo-100 btn-sm">100</div>
          <div class="text-indigo-900 bg-indigo-200 btn-sm">200</div>
          <div class="text-indigo-900 bg-indigo-300 btn-sm">300</div>
          <div class="text-indigo-900 bg-indigo-400 btn-sm">400</div>
          <div class="bg-indigo-500 btn-sm text-indigo-50">500</div>
          <div class="bg-indigo-600 btn-sm text-indigo-50">600</div>
          <div class="bg-indigo-700 btn-sm text-indigo-50">700</div>
          <div class="bg-indigo-800 btn-sm text-indigo-50">800</div>
          <div class="bg-indigo-900 btn-sm text-indigo-50">900</div>
          <div class="btn-sm bg-indigo-950 text-indigo-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">violet</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-violet-50 text-violet-900">50</div>
          <div class="btn-sm bg-violet-100 text-violet-900">100</div>
          <div class="btn-sm bg-violet-200 text-violet-900">200</div>
          <div class="btn-sm bg-violet-300 text-violet-900">300</div>
          <div class="btn-sm bg-violet-400 text-violet-900">400</div>
          <div class="btn-sm bg-violet-500 text-violet-50">500</div>
          <div class="btn-sm bg-violet-600 text-violet-50">600</div>
          <div class="btn-sm bg-violet-700 text-violet-50">700</div>
          <div class="btn-sm bg-violet-800 text-violet-50">800</div>
          <div class="btn-sm bg-violet-900 text-violet-50">900</div>
          <div class="btn-sm bg-violet-950 text-violet-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">purple</div>
        <div class="flex flex-wrap gap-2">
          <div class="text-purple-900 btn-sm bg-purple-50">50</div>
          <div class="text-purple-900 bg-purple-100 btn-sm">100</div>
          <div class="text-purple-900 bg-purple-200 btn-sm">200</div>
          <div class="text-purple-900 bg-purple-300 btn-sm">300</div>
          <div class="text-purple-900 bg-purple-400 btn-sm">400</div>
          <div class="bg-purple-500 btn-sm text-purple-50">500</div>
          <div class="bg-purple-600 btn-sm text-purple-50">600</div>
          <div class="bg-purple-700 btn-sm text-purple-50">700</div>
          <div class="bg-purple-800 btn-sm text-purple-50">800</div>
          <div class="bg-purple-900 btn-sm text-purple-50">900</div>
          <div class="btn-sm bg-purple-950 text-purple-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">fuchsia</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-fuchsia-50 text-fuchsia-900">50</div>
          <div class="btn-sm bg-fuchsia-100 text-fuchsia-900">100</div>
          <div class="btn-sm bg-fuchsia-200 text-fuchsia-900">200</div>
          <div class="btn-sm bg-fuchsia-300 text-fuchsia-900">300</div>
          <div class="btn-sm bg-fuchsia-400 text-fuchsia-900">400</div>
          <div class="btn-sm bg-fuchsia-500 text-fuchsia-50">500</div>
          <div class="btn-sm bg-fuchsia-600 text-fuchsia-50">600</div>
          <div class="btn-sm bg-fuchsia-700 text-fuchsia-50">700</div>
          <div class="btn-sm bg-fuchsia-800 text-fuchsia-50">800</div>
          <div class="btn-sm bg-fuchsia-900 text-fuchsia-50">900</div>
          <div class="btn-sm bg-fuchsia-950 text-fuchsia-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">pink</div>
        <div class="flex flex-wrap gap-2">
          <div class="text-pink-900 btn-sm bg-pink-50">50</div>
          <div class="text-pink-900 bg-pink-100 btn-sm">100</div>
          <div class="text-pink-900 bg-pink-200 btn-sm">200</div>
          <div class="text-pink-900 bg-pink-300 btn-sm">300</div>
          <div class="text-pink-900 bg-pink-400 btn-sm">400</div>
          <div class="bg-pink-500 btn-sm text-pink-50">500</div>
          <div class="bg-pink-600 btn-sm text-pink-50">600</div>
          <div class="bg-pink-700 btn-sm text-pink-50">700</div>
          <div class="bg-pink-800 btn-sm text-pink-50">800</div>
          <div class="bg-pink-900 btn-sm text-pink-50">900</div>
          <div class="btn-sm bg-pink-950 text-pink-50">950</div>
        </div>
      </div>

      <div class="flex flex-wrap items-start gap-2 mb-4">
        <div class="color-column">rose</div>
        <div class="flex flex-wrap gap-2">
          <div class="btn-sm bg-rose-50 text-rose-900">50</div>
          <div class="btn-sm bg-rose-100 text-rose-900">100</div>
          <div class="btn-sm bg-rose-200 text-rose-900">200</div>
          <div class="btn-sm bg-rose-300 text-rose-900">300</div>
          <div class="btn-sm bg-rose-400 text-rose-900">400</div>
          <div class="btn-sm bg-rose-500 text-rose-50">500</div>
          <div class="btn-sm bg-rose-600 text-rose-50">600</div>
          <div class="btn-sm bg-rose-700 text-rose-50">700</div>
          <div class="btn-sm bg-rose-800 text-rose-50">800</div>
          <div class="btn-sm bg-rose-900 text-rose-50">900</div>
          <div class="btn-sm bg-rose-950 text-rose-50">950</div>
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
