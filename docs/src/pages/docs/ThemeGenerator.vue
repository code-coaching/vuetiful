<script setup lang="ts">
import {
  VBadge,
  VButton,
  VCard,
  VCardBody,
  VCardHeader,
  VCodeBlock,
  VLightSwitch,
  VSwitch,
  VSwitchDescription,
  VSwitchGroup,
  VSwitchLabel,
  useDarkMode,
} from '@code-coaching/vuetiful';
import { ContrastReport, SemanticNames, TailwindNumbers, semanticNames, tailwindNumbers } from 'src/components/models';
import {
  Palette,
  generateA11yOnColor,
  generatePalette,
  getPassReport,
  hexValueIsValid,
} from 'src/services/colors.service';
import { Ref, computed, ref, watch } from 'vue';

const isThemeGenerated = ref(false);

const { isDark } = useDarkMode();
const changeDataTheme = (name: string) => document.body.setAttribute('data-theme', name);
interface ColorSettings {
  key: SemanticNames;
  label: string;
  hex: string;
  rgb: string;
  on: string;
}

interface FormTheme {
  gradients: {
    light: string;
    dark: string;
  };
  colors: Array<ColorSettings>;
  fonts: {
    base: string;
    customBase: string;
    baseImports: string;
    headings: string;
    customHeadings: string;
    headingImports: string;
  };
  textColorLight: string;
  textColorDark: string;
  roundedBase: string;
  roundedContainer: string;
  borderBase: string;
}

const formTheme: Ref<FormTheme> = ref({
  gradients: {
    light: '',
    dark: '',
  },
  colors: [
    { key: 'primary', label: 'Primary', hex: '#0FBA81', rgb: '0 0 0', on: '0 0 0' },
    { key: 'secondary', label: 'Secondary', hex: '#4F46E5', rgb: '0 0 0', on: '255 255 255' },
    { key: 'tertiary', label: 'Tertiary', hex: '#0EA5E9', rgb: '0 0 0', on: '0 0 0' },
    { key: 'success', label: 'Success', hex: '#84cc16', rgb: '0 0 0', on: '0 0 0' },
    { key: 'warning', label: 'Warning', hex: '#EAB308', rgb: '0 0 0', on: '0 0 0' },
    { key: 'error', label: 'Error', hex: '#D41976', rgb: '0 0 0', on: '255 255 255' },
    { key: 'surface', label: 'Surface', hex: '#495a8f', rgb: '0 0 0', on: '255 255 255' },
  ],
  fonts: {
    base: 'system',
    customBase: '',
    baseImports: '',
    headings: 'system',
    customHeadings: '',
    headingImports: '',
  },
  textColorLight: '0 0 0',
  textColorDark: '255 255 255',
  roundedBase: '9999px',
  roundedContainer: '8px',
  borderBase: '1px',
} as FormTheme);

/**
 *  Generate a list of color properties for selection inputs.
 * E.g. --color-[colorName]-[colorShade] -> --color-primary-500
 */
const colorProperties: {
  label: string;
  value: `var(--color-${SemanticNames}-${TailwindNumbers})`;
}[] = [];
semanticNames.forEach((colorName) => {
  return tailwindNumbers.forEach((colorShade) => {
    const colorLabel = colorName.charAt(0).toUpperCase() + colorName.slice(1);
    colorProperties.push({ label: `${colorLabel} ${colorShade}`, value: `var(--color-${colorName}-${colorShade})` });
  });
});

const inputSettings = {
  colorProps: [{ label: 'Black', value: '0 0 0' }, { label: 'White', value: '255 255 255' }, ...colorProperties],
  fonts: ['system', 'sans-serif', 'serif', 'monospace'],
  rounded: ['0', '4px', '8px', '12px', '16px', '20px', '24px', '28px', '32px', '36px', '40px'],
  border: ['0', '1px', '2px', '3px', '4px'],
};

const randomize = (): void => {
  changeDataTheme('custom');
  formTheme.value.colors.forEach((_, i: number) => {
    const randomHexCode = '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
    formTheme.value.colors[i].hex = randomHexCode;
    formTheme.value.colors[i].on = generateA11yOnColor(randomHexCode);
  });
};

const hexValuesAreValid = (colors: ColorSettings[]) => {
  let valid = true;
  colors?.forEach((color: ColorSettings) => {
    valid = valid && hexValueIsValid(color.hex);
  });

  return valid;
};

const generateColorCSS = (): string => {
  let newCSS = '';
  const newPalette: Record<string, Palette> = {};
  formTheme.value.colors.forEach((color: ColorSettings, i: number) => {
    const colorKey = color.key;
    newPalette[color.key] = generatePalette(formTheme.value.colors[i].hex);
    newCSS += '\n\t';
    newCSS += `/* ${colorKey} | ${newPalette[colorKey][500].hex} */\n\t`;
    for (let [k, v] of Object.entries(newPalette[colorKey])) {
      newCSS += `--color-${colorKey}-${k}: ${v.rgb}; /* ⬅ ${v.hex} */\n\t`;
    }
  });
  return newCSS;
};

const getContrastReports = (): Array<ContrastReport> => {
  return formTheme.value.colors.map((value: ColorSettings) => ({
    ...value,
    contrastReport: getPassReport(value.hex, value.on),
  }));
};

const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomHsla = () => {
  const hue = random(0, 360);
  const saturation = random(50, 100);
  const lightness = random(50, 100);
  const alpha = random(0, 100) / 100;
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
};

const randomGradient = () => {
  const pos = {
    one: random(0, 100),
    two: random(0, 100),
  };
  return `radial-gradient(at ${pos.one}% ${pos.two}%, ${randomHsla()}  0px, transparent 50%)`;
};

const randomGradients = () => {
  const amount = random(1, 5);
  const randomGradients = [];
  for (let i = 0; i < amount; i++) {
    randomGradients.push(randomGradient());
  }
  if (synchronizeGradients.value) {
    formTheme.value.gradients.light = randomGradients.join(', \n\t\t');
    formTheme.value.gradients.dark = randomGradients.join(', \n\t\t');
  } else {
    console.log('isDark', isDark);
    if (isDark.value) {
      formTheme.value.gradients.dark = randomGradients.join(', \n\t\t');
    } else {
      formTheme.value.gradients.light = randomGradients.join(', \n\t\t');
    }
  }
};

const cssOutput = computed(() => {
  if (hexValuesAreValid(formTheme.value.colors)) {
    return `${formTheme.value.fonts.baseImports}
${formTheme.value.fonts.headingImports}
:root {
    /* =~= Theme Properties =~= */
    --theme-font-family-base: ${formTheme.value.fonts.customBase ? `"${formTheme.value.fonts.customBase}", ` : ''}${formTheme.value.fonts.base};
    --theme-font-family-heading: ${formTheme.value.fonts.customHeadings ? `"${formTheme.value.fonts.customHeadings}", ` : ''}${formTheme.value.fonts.headings};
    --theme-font-color-base: ${formTheme.value.textColorLight};
    --theme-font-color-dark: ${formTheme.value.textColorDark};
    --theme-rounded-base: ${formTheme.value.roundedBase};
    --theme-rounded-container: ${formTheme.value.roundedContainer};
    --theme-border-base: ${formTheme.value.borderBase};

    /* =~= Theme On-X Colors  =~= */
    --on-primary: ${formTheme.value.colors[0]?.on};
    --on-secondary: ${formTheme.value.colors[1]?.on};
    --on-tertiary: ${formTheme.value.colors[2]?.on};
    --on-success: ${formTheme.value.colors[3]?.on};
    --on-warning: ${formTheme.value.colors[4]?.on};
    --on-error: ${formTheme.value.colors[5]?.on};
    --on-surface: ${formTheme.value.colors[6]?.on};

    /* =~= Theme Colors  =~= */
${generateColorCSS()}
}

${
  formTheme.value.gradients.light.length
    ? `[data-theme="custom"] {
    background-image:
        ${formTheme.value.gradients.light};
}`
    : ''
}
${
  formTheme.value.gradients.dark.length
    ? `.dark [data-theme="custom"] {
    background-image:
        ${formTheme.value.gradients.dark};
}`
    : ''
}
`;
  }
  return '';
});

const removeThemeLink = () => {
  const link = document.getElementById('theme');
  if (link) link.remove();
};

watch(formTheme.value, () => {
  removeThemeLink();

  const style = document.getElementById('theme-generator');
  if (style) {
    style.innerHTML = cssOutput.value;
  } else {
    const css = cssOutput.value;
    const style = document.createElement('style');
    style.id = 'theme-generator';
    style.innerHTML = css;
    document.head.appendChild(style);
  }
});

const contrastReports = ref();
const areHexValuesValid = computed(() => hexValuesAreValid(formTheme.value.colors));
watch(
  formTheme.value,
  () => {
    if (areHexValuesValid.value) {
      contrastReports.value = getContrastReports();
    }
  },
  { immediate: true }
);

const randomizeFont = () => {
  const fonts = inputSettings.fonts;
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  const randomHeadingFont = fonts[Math.floor(Math.random() * fonts.length)];
  formTheme.value.fonts.base = randomFont;
  formTheme.value.fonts.headings = randomHeadingFont;
};

const randomRoundedBase = () => {
  const roundedBase = [...inputSettings.rounded, '9999px'];
  const randomRounded = roundedBase[Math.floor(Math.random() * roundedBase.length)];
  formTheme.value.roundedBase = randomRounded;
};

const randomRoundedContainer = () => {
  const roundedContainer = inputSettings.rounded;
  const randomRounded = roundedContainer[Math.floor(Math.random() * roundedContainer.length)];
  formTheme.value.roundedContainer = randomRounded;
};

const randomBorderBase = () => {
  const borderBase = inputSettings.border;
  const randomBorder = borderBase[Math.floor(Math.random() * borderBase.length)];
  formTheme.value.borderBase = randomBorder;
};

const randomThemeProperties = () => {
  randomizeFont();
  randomRoundedBase();
  randomRoundedContainer();
  randomBorderBase();
};

const generateTheme = () => {
  isThemeGenerated.value = true;
  changeDataTheme('custom');
  randomize();
  randomGradients();
  randomThemeProperties();
};

const synchronizeGradients = ref(true);
const resetGradients = () => {
  if (synchronizeGradients.value) {
    formTheme.value.gradients.light = '';
    formTheme.value.gradients.dark = '';
  } else {
    if (isDark.value) {
      formTheme.value.gradients.dark = '';
    } else {
      formTheme.value.gradients.light = '';
    }
  }
};
</script>
<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>Theme Generator</h1>
    <header class="header">
      <section class="section">
        <p>
          This page will change the theme of the entire documentation site. As long as you do not refresh or manually
          switch to another theme, the theme will remain the same. After generating a theme, you can fine tune the theme
          by adjusting the colors, fonts, and other properties.
        </p>
      </section>
      <section class="section flex justify-center">
        <v-button @click="generateTheme">Generate Theme</v-button>
      </section>
      <hr />
    </header>

    <transition name="slide-bottom-300">
      <div v-if="isThemeGenerated">
        <section class="section">
          <v-card>
            <v-card-header>
              <div class="flex flex-wrap items-center gap-4">
                <h2 class="mb-0">Colors</h2>
                <div class="flex flex-1 items-center justify-between">
                  <v-light-switch />
                  <v-button @click="randomize">Randomize Colors</v-button>
                </div>
              </div>
            </v-card-header>
            <div class="flex flex-col justify-center gap-4 p-4">
              <div v-for="(color, index) in formTheme.colors" :key="index">
                <div class="flex flex-wrap justify-between gap-4">
                  <div class="flex w-full flex-1">
                    <div class="w-full" v-for="(tint, index) in tailwindNumbers" :key="index">
                      <div class="flex w-full flex-col items-center">
                        <div>{{ tint }}</div>
                        <div
                          :class="`bg-${color.key}-${tint} flex h-[50px] w-full items-center justify-center`"
                          :style="`color: rgb(${color.on})`"
                        >
                          <template v-if="tint === '500'">
                            <div class="flex items-center px-4">
                              {{ tint }}
                            </div>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap items-end justify-between gap-4">
                    <label class="flex items-center gap-2">
                      <input class="input !h-[50px] !w-[50px] flex-shrink-0" type="color" v-model="color.hex" />
                      <input
                        class="input !h-[50px] bg-surface-50-900-token flex-1"
                        type="text"
                        v-model="color.hex"
                        placeholder="#BADA55"
                      />
                    </label>
                    <div class="input-group input-group-divider h-[50px] min-w-[175px] flex-1 pl-4 bg-surface-50-900-token">
                      <select v-model="color.on">
                        <option v-for="c in inputSettings.colorProps" :value="c.value" :key="c.value">
                          {{ c.label }}
                        </option>
                      </select>
                    </div>
                    <div
                      :title="contrastReports[index].contrastReport.report.note"
                      class="flex h-[50px] w-[50px] items-center justify-center rounded-token"
                      :class="{
                        'text-stone-900': contrastReports[index].contrastReport.fails,
                        'bg-red-500': contrastReports[index].contrastReport.fails,
                        'text-zinc-900': contrastReports[index].contrastReport.largeAA,
                        'bg-amber-500': contrastReports[index].contrastReport.largeAA,
                        'text-slate-900':
                          contrastReports[index].contrastReport.smallAAA ||
                          contrastReports[index].contrastReport.smallAA,
                        'bg-green-500':
                          contrastReports[index].contrastReport.smallAAA ||
                          contrastReports[index].contrastReport.smallAA,
                      }"
                      v-html="contrastReports[index].contrastReport.report.emoji"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </section>

        <section class="section">
          <v-card>
            <v-card-header>
              <div class="flex flex-wrap items-center gap-4">
                <h2 class="mb-0">Gradients</h2>
                <div class="flex flex-1 items-center justify-between">
                  <v-light-switch />
                  <v-button @click="randomGradients()">Randomize gradient</v-button>
                </div>
              </div>
            </v-card-header>
            <v-card-body>
              <div :class="`mb-2 flex flex-wrap gap-2 ${isDark ? 'dark' : ''}`">
                <div
                  data-theme="custom"
                  :class="`${
                    isDark ? 'border-surface-50 bg-surface-900' : 'border-surface-900 bg-surface-50'
                  } relative flex aspect-video min-w-[300px] flex-1 items-center justify-center border-2 rounded-container-token`"
                >
                  <v-button icon @click="resetGradients"
                    ><i class="fa-solid fa-xmark"
                  /></v-button>
                </div>
              </div>
              <p class="mb-4">
                <v-switch-group>
                  <v-switch-label class="font-bold">Synchronized gradients</v-switch-label>
                  <div class="flex w-[260px] items-center gap-2">
                    <v-switch v-model="synchronizeGradients" />
                    <v-switch-description>{{ synchronizeGradients ? 'on' : 'off' }}</v-switch-description>
                  </div>
                </v-switch-group>
              </p>
              <p>
                When <v-badge class="variant-filled">Synchronized gradients</v-badge> is
                <v-badge class="variant-filled">on</v-badge>, the gradient will be the same for both light and dark
                mode.
              </p>
              <p>
                When <v-badge class="variant-filled">Synchronized gradients</v-badge> is
                <v-badge class="variant-filled">off</v-badge>, the gradient will be different for light and dark mode.
                To set the gradient for light mode, switch to light mode and then generate a new gradient. To set the
                gradient for dark mode, switch to dark mode and then generate a new gradient.
              </p>
            </v-card-body>
          </v-card>
        </section>

        <section class="section card gap-4 p-4">
          <h3 class="h3 mb-0" data-toc-ignore>Fonts</h3>
          <div class="mb-4 flex flex-wrap gap-4">
            <div class="flex-1">
              <label class="label mb-4">
                <span>Base</span>
                <div class="input-group input-group-divider h-[50px] pl-4 bg-surface-50-900-token">
                  <select v-model="formTheme.fonts.base">
                    <option v-for="font in inputSettings.fonts" :key="font" :value="font">{{ font }}</option>
                  </select>
                </div>
              </label>
              <label class="label">
                <span>Custom base font</span>
                <textarea
                  class="textarea p-4 bg-surface-50-900-token rounded-container-token min-h-[130px]"
                  type="text"
                  v-model="formTheme.fonts.baseImports"
                  placeholder='Custom fonts, e.g. @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");'
                />
                <input
                  class="input h-[50px] bg-surface-50-900-token"
                  type="text"
                  v-model="formTheme.fonts.customBase"
                  placeholder="Custom font name, e.g. Roboto"
                />
              </label>
            </div>
            <div class="flex-1">
              <label class="label mb-4">
                <span>Headings</span>
                <div class="input-group input-group-divider h-[50px] pl-4 bg-surface-50-900-token">
                  <select v-model="formTheme.fonts.headings">
                    <option v-for="font in inputSettings.fonts" :key="font" :value="font">{{ font }}</option>
                  </select>
                </div>
              </label>
              <label class="label">
                <span>Custom headings font</span>
                <textarea
                  class="textarea p-4 bg-surface-50-900-token rounded-container-token min-h-[130px]"
                  type="text"
                  v-model="formTheme.fonts.headingImports"
                  placeholder='Custom fonts, e.g. @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");'
                />
                <input
                  class="input h-[50px] bg-surface-50-900-token"
                  type="text"
                  v-model="formTheme.fonts.customHeadings"
                  placeholder="Custom font name, e.g. Roboto"
                />
              </label>
            </div>
          </div>

          <h3 class="h3 mb-0" data-toc-ignore>Text Color</h3>
          <div class="mb-4 flex flex-wrap gap-4">
            <label class="label flex-1">
              <span>Light Mode</span>
              <div class="input-group input-group-divider h-[50px] pl-4 bg-surface-50-900-token">
                <select v-model="formTheme.textColorLight">
                  <option v-for="c in inputSettings.colorProps" :key="c.value" :value="c.value">{{ c.label }}</option>
                </select>
              </div>
            </label>
            <label class="label flex-1">
              <span>Dark Mode</span>
              <div class="input-group input-group-divider h-[50px] pl-4 bg-surface-50-900-token">
                <select v-model="formTheme.textColorDark">
                  <option v-for="c in inputSettings.colorProps" :key="c.value" :value="c.value">{{ c.label }}</option>
                </select>
              </div>
            </label>
          </div>

          <h3 class="h3 col-span-2 mb-0" data-toc-ignore>Border Radius</h3>
          <div class="mb-4 flex flex-wrap gap-4">
            <label class="label flex-1">
              <span>Base</span>
              <div class="input-group input-group-divider h-[50px] pl-4 bg-surface-50-900-token">
                <select v-model="formTheme.roundedBase">
                  <option v-for="r in inputSettings.rounded" :key="r" :value="r">{{ r }}</option>
                  <option value="9999px">9999px</option>
                </select>
              </div>
            </label>
            <label class="label flex-1">
              <span>Container</span>
              <div class="input-group input-group-divider h-[50px] pl-4 bg-surface-50-900-token">
                <select v-model="formTheme.roundedContainer">
                  <option v-for="r in inputSettings.rounded" :key="r" :value="r">{{ r }}</option>
                </select>
              </div>
            </label>
          </div>

          <h3 class="h3 mb-0" data-toc-ignore>Border Size</h3>
          <div class="mb-4 flex flex-wrap gap-4">
            <label class="label flex-1">
              <span>Base</span>
              <div class="input-group input-group-divider h-[50px] pl-4 bg-surface-50-900-token">
                <select v-model="formTheme.borderBase">
                  <option v-for="b in inputSettings.border" :key="b" :value="b">{{ b }}</option>
                </select>
              </div>
            </label>
            <div class="flex-1"></div>
          </div>
        </section>

        <section class="section">
          <v-code-block :code="cssOutput" language="css" />
        </section>
      </div>
    </transition>
  </div>
</template>
