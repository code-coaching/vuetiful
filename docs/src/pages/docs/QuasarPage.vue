<script setup lang="ts">
import { CodeBlock } from '@code-coaching/vuetiful';
import { reactive, ref } from 'vue';

const onDropdownItemClick = (item: string) => {
  console.log(item);
};

const hex = ref('#0FBA81');
const hexa = ref('#4F46E5AB');
const rgb = ref('rgb(14, 165, 233)');
const rgba = ref('rgba(212, 25, 118,0.8)');

const editor = ref('Vuetiful is beautiful');

const text = reactive({
  surface: 'surface',
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  success: 'success',
  warning: 'warning',
  error: 'error',
});

const selectModel = ref(null);
const selectOptions = ['Vuetiful', 'Quasar', 'Vue', 'Vite', 'TailwindCSS'];

const fileModel = ref(null);

const time = ref('03:30');
const timeWithSeconds = ref('03:30:00');
const date = ref('1991/08/13');

const qAvatarExample = `<div class="flex flex-wrap gap-1">
  <q-avatar class="h-8 w-8">
    <img src="/img/john-duck.png" />
  </q-avatar>
  <q-avatar class="h-16 w-16">
    <img src="/img/john-duck.png" />
  </q-avatar>
  <q-avatar class="h-32 w-32">
    <img src="/img/john-duck.png" />
  </q-avatar>

  <q-avatar class="h-8 w-8 bg-surface-300 text-surface-900">JD</q-avatar>
  <q-avatar class="h-16 w-16 bg-surface-300 text-surface-900">
    JD
  </q-avatar>
  <q-avatar class="h-32 w-32 bg-surface-300 text-surface-900">
    JD
  </q-avatar>

  <q-avatar class="h-8 w-8 bg-surface-800 text-surface-50">JD</q-avatar>
  <q-avatar class="h-16 w-16 bg-surface-800 text-surface-50">
    JD
  </q-avatar>
  <q-avatar class="h-32 w-32 bg-surface-800 text-surface-50">
    JD
  </q-avatar>
</div>`;

const qBadgeExample = `<div class="flex flex-col gap-2">
  <div class="flex flex-wrap gap-2">
    <q-badge class="bg-surface-100 text-surface-900"> Surface </q-badge>
    <q-badge class="bg-primary-100 text-primary-900"> Primary </q-badge>
    <q-badge class="bg-secondary-100 text-secondary-900">
      Secondary
    </q-badge>
    <q-badge class="bg-tertiary-100 text-tertiary-900"> Tertiary </q-badge>
    <q-badge class="bg-success-100 text-success-900"> Success </q-badge>
    <q-badge class="bg-warning-100 text-warning-900"> Warning </q-badge>
    <q-badge class="bg-error-100 text-error-900"> Error </q-badge>
  </div>
  <div class="flex flex-wrap gap-2">
    <q-badge class="bg-surface-800 text-surface-50"> Surface </q-badge>
    <q-badge class="bg-primary-800 text-primary-50"> Primary </q-badge>
    <q-badge class="bg-secondary-800 text-secondary-50">
      Secondary
    </q-badge>
    <q-badge class="bg-tertiary-800 text-tertiary-50"> Tertiary </q-badge>
    <q-badge class="bg-success-800 text-success-50"> Success </q-badge>
    <q-badge class="bg-warning-800 text-warning-50"> Warning </q-badge>
    <q-badge class="bg-error-800 text-error-50"> Error </q-badge>
  </div>
</div>
`;

const qBannerExample = (
  color: string
) => `<q-banner inline-actions class="bg-${color}-100 text-${color}-900">
  Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
  the Vue.js framework with visually pleasing and elegant design.
  <template v-slot:action>
    <q-btn flat label="Dismiss" />
  </template>
</q-banner>

<q-banner inline-actions class="bg-${color}-800 text-${color}-50">
  Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
  the Vue.js framework with visually pleasing and elegant design.
  <template v-slot:action>
    <q-btn flat label="Dismiss" />
  </template>
</q-banner>`;

const qBtnExample = (type: string) => {
  return `<div class="flex flex-wrap gap-2">
  <q-btn ${type} class="!bg-surface-100 !text-surface-900"> Surface </q-btn>
  <q-btn ${type} class="!bg-primary-100 !text-primary-900"> Primary </q-btn>
  <q-btn ${type} class="!bg-secondary-100 !text-secondary-900"> Secondary </q-btn>
  <q-btn ${type} class="!bg-tertiary-100 !text-tertiary-900"> Tertiary </q-btn>
  <q-btn ${type} class="!bg-success-100 !text-success-900"> Success </q-btn>
  <q-btn ${type} class="!bg-warning-100 !text-warning-900"> Warning </q-btn>
  <q-btn ${type} class="!bg-error-100 !text-error-900"> Error </q-btn>
</div>`;
};

const qBtnGroupExample = (type: string) => {
  return `<q-btn-group ${type}>
  <q-btn ${type} class="!bg-surface-100 !text-surface-900">
    Surface
  </q-btn>
  <q-btn ${type} class="!bg-primary-100 !text-primary-900">
    Primary
  </q-btn>
  <q-btn ${type} class="!bg-secondary-100 !text-secondary-900">
    Secondary
  </q-btn>
  <q-btn ${type} class="!bg-tertiary-100 !text-tertiary-900">
    Tertiary
  </q-btn>
  <q-btn ${type} class="!bg-success-100 !text-success-900">
    Success
  </q-btn>
  <q-btn ${type} class="!bg-warning-100 !text-warning-900">
    Warning
  </q-btn>
  <q-btn ${type} class="!bg-error-100 !text-error-900"> Error </q-btn>
</q-btn-group>

<q-btn-group ${type}>
  <q-btn ${type} class="!bg-surface-800 !text-surface-50"> Surface </q-btn>
  <q-btn ${type} class="!bg-primary-800 !text-primary-50"> Primary </q-btn>
  <q-btn ${type} class="!bg-secondary-800 !text-secondary-50">
    Secondary
  </q-btn>
  <q-btn ${type} class="!bg-tertiary-800 !text-tertiary-50">
    Tertiary
  </q-btn>
  <q-btn ${type} class="!bg-success-800 !text-success-50"> Success </q-btn>
  <q-btn ${type} class="!bg-warning-800 !text-warning-50"> Warning </q-btn>
  <q-btn ${type} class="!bg-error-800 !text-error-50"> Error </q-btn>
</q-btn-group>`;
};

const qButtonDropdownExample = `<q-btn-dropdown
  class="!bg-primary-100 !text-primary-900"
  label="Dropdown Button"
>
  <q-list class="!bg-primary-100 !text-primary-900">
    <q-item
      clickable
      v-close-popup
      @click="onDropdownItemClick('Vuetiful')"
    >
      <q-item-section>
        <q-item-label>Vuetiful</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable v-close-popup @click="onDropdownItemClick('Is')">
      <q-item-section>
        <q-item-label>Is</q-item-label>
      </q-item-section>
    </q-item>

    <q-item
      clickable
      v-close-popup
      @click="onDropdownItemClick('Beautiful')"
    >
      <q-item-section>
        <q-item-label>Beautiful</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</q-btn-dropdown>

<q-btn-dropdown
  class="!bg-primary-800 !text-primary-50"
  label="Dropdown Button"
>
  <q-list class="!bg-primary-800 !text-primary-50">
    <q-item
      clickable
      v-close-popup
      @click="onDropdownItemClick('Vuetiful')"
    >
      <q-item-section>
        <q-item-label>Vuetiful</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable v-close-popup @click="onDropdownItemClick('Is')">
      <q-item-section>
        <q-item-label>Is</q-item-label>
      </q-item-section>
    </q-item>

    <q-item
      clickable
      v-close-popup
      @click="onDropdownItemClick('Beautiful')"
    >
      <q-item-section>
        <q-item-label>Beautiful</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</q-btn-dropdown>`;

const qCardOneExample = `<q-card class="w-64 bg-surface-100 text-surface-900">
  <q-item>
    <q-item-section avatar>
      <q-avatar>
        <img src="/img/john-duck.png" />
      </q-avatar>
    </q-item-section>

    <q-item-section class="text-surface-900">
      <q-item-label>John Duck</q-item-label>
      <q-item-label caption class="!text-surface-900"
        >Vuetiful is beautiful</q-item-label
      >
    </q-item-section>
  </q-item>

  <img src="/img/john-duck.png" />
</q-card>
<q-card class="w-64 bg-surface-800 text-surface-50">
  <q-item>
    <q-item-section avatar>
      <q-avatar>
        <img src="/img/john-duck.png" />
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>John Duck</q-item-label>
      <q-item-label caption>Vuetiful is beautiful</q-item-label>
    </q-item-section>
  </q-item>

  <img src="/img/john-duck.png" />
</q-card>`;

const qCardTwoExample = `<q-card class="w-64 bg-surface-100 text-surface-900">
  <img src="/img/john-duck.png" />

  <q-card-section>
    <div class="text-h6">Vuetiful</div>
    <div class="text-subtitle2">by John Duck</div>
  </q-card-section>

  <q-card-section class="q-pt-none">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
    quasi!
  </q-card-section>
</q-card>
<q-card class="w-64 bg-surface-800 text-surface-50">
  <img src="/img/john-duck.png" />

  <q-card-section>
    <div class="text-h6">Vuetiful</div>
    <div class="text-subtitle2">by John Duck</div>
  </q-card-section>

  <q-card-section class="q-pt-none">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
    quasi!
  </q-card-section>
</q-card>`;

const qCardThreeExample = `<q-card class="w-64">
  <q-img src="/img/john-duck.png">
    <div class="absolute-bottom text-subtitle2 text-center">
      John Duck
    </div>
  </q-img>
</q-card>

<q-card class="w-64">
  <q-img src="/img/john-duck.png">
    <div class="text-subtitle2 absolute-top text-center">John Duck</div>
  </q-img>
</q-card>

<q-card class="w-64">
  <q-img src="/img/john-duck.png">
    <div class="text-h5 absolute-bottom text-right">John Duck</div>
  </q-img>
</q-card>`;

const qCardFourExample = `<q-card class="w-64 bg-surface-100 text-surface-900">
  <q-img src="/img/john-duck.png">
    <div class="absolute-bottom">
      <div class="text-h6">Vuetiful</div>
      <div class="text-subtitle2">by John Duck</div>
    </div>
  </q-img>

  <q-card-actions>
    <q-btn flat>Quack 1</q-btn>
    <q-btn flat>Quack 2</q-btn>
  </q-card-actions>
</q-card>

<q-card class="w-64 bg-surface-800 text-surface-50">
  <q-img src="/img/john-duck.png">
    <div class="absolute-bottom">
      <div class="text-h6">Vuetiful</div>
      <div class="text-subtitle2">by John Duck</div>
    </div>
  </q-img>

  <q-card-actions>
    <q-btn flat>Quack 1</q-btn>
    <q-btn flat>Quack 2</q-btn>
  </q-card-actions>
</q-card>`;

const qChipExample = (type: string) => `<q-chip ${type}
  class="bg-surface-100-800-token text-surface-900-50-token"
>
  <q-avatar>
    <img src="/img/john-duck.png" />
  </q-avatar>
  Surface
</q-chip>

<q-chip ${type}
  class="bg-primary-100-800-token text-primary-900-50-token"
>
  <q-avatar>
    <img src="/img/john-duck.png" />
  </q-avatar>
  Primary
</q-chip>

<q-chip ${type}
  class="bg-secondary-100-800-token text-secondary-900-50-token"
>
  <q-avatar>
    <img src="/img/john-duck.png" />
  </q-avatar>
  Secondary
</q-chip>

<q-chip ${type}
  class="bg-tertiary-100-800-token text-tertiary-900-50-token"
>
  <q-avatar>
    <img src="/img/john-duck.png" />
  </q-avatar>
  Secondary
</q-chip>

<q-chip ${type}
  class="bg-success-100-800-token text-success-900-50-token"
>
  <q-avatar>
    <img src="/img/john-duck.png" />
  </q-avatar>
  Success
</q-chip>

<q-chip ${type}
  class="bg-warning-100-800-token text-warning-900-50-token"
>
  <q-avatar>
    <img src="/img/john-duck.png" />
  </q-avatar>
  Warning
</q-chip>

<q-chip ${type} class="bg-error-100-800-token text-error-900-50-token">
  <q-avatar>
    <img src="/img/john-duck.png" />
  </q-avatar>
  Error
</q-chip>`;

const qColorExample = `<div class="flex flex-col gap-2">
  <div class="flex flex-wrap items-start gap-2">
    <q-color class="bg-surface-100 text-surface-900" v-model="hex" />
    <q-color class="bg-surface-100 text-surface-900" v-model="hexa" />
    <q-color class="bg-surface-100 text-surface-900" v-model="rgb" />
    <q-color class="bg-surface-100 text-surface-900" v-model="rgba" />
  </div>
  <div class="flex flex-wrap items-start gap-2">
    <q-color class="bg-surface-800 text-surface-50" v-model="hex" />
    <q-color class="bg-surface-800 text-surface-50" v-model="hexa" />
    <q-color class="bg-surface-800 text-surface-50" v-model="rgb" />
    <q-color class="bg-surface-800 text-surface-50" v-model="rgba" />
  </div>
</div>`;

const qColorScriptExample = `const hex = ref('#0FBA81');
const hexa = ref('#4F46E5AB');
const rgb = ref('rgb(14, 165, 233)');
const rgba = ref('rgba(212, 25, 118,0.8)');`;

const qEditorExample = `<q-editor
  class="dark-actions bg-surface-100 text-surface-900"
  v-model="editor"
  min-height="5rem"
/>

<q-editor
  class="light-actions bg-surface-800 text-surface-50"
  v-model="editor"
  min-height="5rem"
/>`;

const qEditorScriptExample = "const editor = ref('Vuetiful is beautiful');";

const qExpansionItemExample = `<div class="flex flex-wrap items-start gap-4">
  <q-list class="w-64" bordered>
    <q-expansion-item
      expand-separator
      icon="perm_identity"
      label="Account settings"
      caption="John Duck"
    >
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
          eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
          dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-expansion-item
      expand-separator
      icon="signal_wifi_off"
      label="Wifi settings"
    >
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
          eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
          dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-expansion-item icon="assessment" label="Disabled" disable>
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
          eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
          dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-expansion-item expand-separator icon="drafts" label="Drafts">
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
          eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
          dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>

  <q-list class="w-64 bg-surface-800 text-surface-50" bordered>
    <q-expansion-item
      expand-separator
      icon="perm_identity"
      label="Account settings"
      caption="John Duck"
      group="accordion"
    >
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
          eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
          dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-expansion-item
      expand-separator
      icon="signal_wifi_off"
      label="Wifi settings"
      group="accordion"
    >
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
          eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
          dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-expansion-item
      icon="assessment"
      label="Disabled"
      group="accordion"
      disable
    >
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
          eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
          dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-expansion-item
      expand-separator
      icon="drafts"
      label="Drafts"
      group="accordion"
    >
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
          eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
          dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</div>`;

const qInputLightExample = `<div class="flex flex-wrap gap-2">
  <q-input
    color="black"
    label-color="black"
    class="w-64 bg-surface-100"
    input-class="text-surface-900 dark:text-surface-900"
    outlined
    v-model="TEXT.SURFACE"
    label="Outlined"
  />

  <q-input
    color="black"
    label-color="black"
    class="w-64 bg-primary-100"
    input-class="text-primary-900 dark:text-primary-900"
    outlined
    v-model="TEXT.PRIMARY"
    label="Outlined"
  />

  <q-input
    color="black"
    label-color="black"
    class="w-64 bg-secondary-100"
    input-class="text-secondary-900 dark:text-secondary-900"
    outlined
    v-model="TEXT.SECONDARY"
    label="Outlined"
  />

  <q-input
    color="black"
    label-color="black"
    class="w-64 bg-tertiary-100"
    input-class="text-tertiary-900 dark:text-tertiary-900"
    outlined
    v-model="TEXT.TERTIARY"
    label="Outlined"
  />

  <q-input
    color="black"
    label-color="black"
    class="w-64 bg-success-100"
    input-class="text-success-900 dark:text-success-900"
    outlined
    v-model="TEXT.SUCCESS"
    label="Outlined"
  />

  <q-input
    color="black"
    label-color="black"
    class="w-64 bg-warning-100"
    input-class="text-warning-900 dark:text-warning-900"
    outlined
    v-model="TEXT.WARNING"
    label="Outlined"
  />

  <q-input
    color="black"
    label-color="black"
    class="w-64 bg-error-100"
    input-class="text-error-900 dark:text-error-900"
    outlined
    v-model="TEXT.ERROR"
    label="Outlined"
  />
</div>`;

const qInputDarkExample = `<q-input
  color="white"
  label-color="white"
  class="w-64 bg-surface-800"
  input-class="text-surface-50 dark:text-surface-50"
  outlined
  v-model="text.surface"
  label="Outlined"
/>

<q-input
  color="white"
  label-color="white"
  class="w-64 bg-primary-800"
  input-class="text-primary-50 dark:text-primary-50"
  outlined
  v-model="text.primary"
  label="Outlined"
/>

<q-input
  color="white"
  label-color="white"
  class="w-64 bg-secondary-800"
  input-class="text-secondary-50 dark:text-secondary-50"
  outlined
  v-model="text.secondary"
  label="Outlined"
/>

<q-input
  color="white"
  label-color="white"
  class="w-64 bg-tertiary-800"
  input-class="text-tertiary-50 dark:text-tertiary-50"
  outlined
  v-model="text.tertiary"
  label="Outlined"
/>

<q-input
  color="white"
  label-color="white"
  class="w-64 bg-success-800"
  input-class="text-success-50 dark:text-success-50"
  outlined
  v-model="text.success"
  label="Outlined"
/>

<q-input
  color="white"
  label-color="white"
  class="w-64 bg-warning-800"
  input-class="text-warning-50 dark:text-warning-50"
  outlined
  v-model="text.warning"
  label="Outlined"
/>

<q-input
  color="white"
  label-color="white"
  class="w-64 bg-error-900"
  input-class="text-error-50 dark:text-error-50"
  outlined
  v-model="text.error"
  label="Outlined"
/>`;

const qInputScriptExample = `const text = reactive({
  surface: 'surface',
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  success: 'success',
  warning: 'warning',
  error: 'error',
});`;

const qSelectLightExample = `<div class="flex flex-wrap gap-2">
  <q-select
    color="black"
    label-color="black"
    class="dark-actions w-64 bg-surface-100"
    popup-content-class="!bg-surface-100 dark:!bg-surface-100 !text-surface-900 dark:!text-surface-900"
    outlined
    v-model="selectModel"
    :options="selectOptions"
    label="Outlined"
  />

  <q-select
    color="black"
    label-color="black"
    class="dark-actions w-64 !bg-primary-100"
    popup-content-class="!bg-primary-100 dark:!bg-primary-100 !text-primary-900 dark:!text-primary-900"
    outlined
    v-model="selectModel"
    :options="selectOptions"
    label="Outlined"
  />

  <q-select
    color="black"
    label-color="black"
    class="dark-actions w-64 !bg-secondary-100"
    popup-content-class="!bg-secondary-100 dark:!bg-secondary-100 !text-secondary-900 dark:!text-secondary-900"
    outlined
    v-model="selectModel"
    :options="selectOptions"
    label="Outlined"
  />

  <q-select
    color="black"
    label-color="black"
    class="dark-actions w-64 !bg-tertiary-100"
    popup-content-class="!bg-tertiary-100 dark:!bg-tertiary-100 !text-tertiary-900 dark:!text-tertiary-900"
    outlined
    v-model="selectModel"
    :options="selectOptions"
    label="Outlined"
  />

  <q-select
    color="black"
    label-color="black"
    class="dark-actions w-64 !bg-success-100"
    popup-content-class="!bg-success-100 dark:!bg-success-100 !text-success-900 dark:!text-success-900"
    outlined
    v-model="selectModel"
    :options="selectOptions"
    label="Outlined"
  />

  <q-select
    color="black"
    label-color="black"
    class="dark-actions w-64 !bg-warning-100"
    popup-content-class="!bg-warning-100 dark:!bg-warning-100 !text-warning-900 dark:!text-warning-900"
    outlined
    v-model="selectModel"
    :options="selectOptions"
    label="Outlined"
  />

  <q-select
    color="black"
    label-color="black"
    class="dark-actions w-64 !bg-error-100"
    popup-content-class="!bg-error-100 dark:!bg-error-100 !text-error-900 dark:!text-error-900"
    outlined
    v-model="selectModel"
    :options="selectOptions"
    label="Outlined"
  />
</div>`;

const qSelectDarkExample = `<div class="flex flex-wrap gap-2">
  <q-select
    color="white"
    label-color="white"
    class="light-actions w-64 !bg-surface-800"
    popup-content-class="!bg-surface-800 dark:!bg-surface-800 !text-surface-50 dark:!text-surface-50"
    outlined
    v-model="selectModel"
    :options="selectOptions"
    label="Outlined"
  />

  <q-select
    color="white"
    label-color="white"
    class="light-actions w-64 !bg-primary-800"
    input-class="text-primary-50 !dark:text-primary-50"
    popup-content-class="!bg-primary-800 dark:!bg-primary-800 !text-primary-50 dark:!text-primary-50"
    outlined
    v-model="selectModel"
    :options="selectOptions"
    label="Outlined"
  />

  <q-select
    color="white"
    label-color="white"
    class="light-actions w-64 !bg-secondary-800"
    input-class="text-secondary-50 !dark:text-secondary-50"
    popup-content-class="!bg-secondary-800 dark:!bg-secondary-800 !text-secondary-50 dark:!text-secondary-50"
    outlined
    v-model="selectModel"
    :options="selectOptions"
    label="Outlined"
  />

  <q-select
    color="white"
    label-color="white"
    class="light-actions w-64 !bg-tertiary-800"
    input-class="text-tertiary-50 !dark:text-tertiary-50"
    popup-content-class="!bg-tertiary-800 dark:!bg-tertiary-800 !text-tertiary-50 dark:!text-tertiary-50"
    outlined
    v-model="selectModel"
    :options="selectOptions"
    label="Outlined"
  />

  <q-select
    color="white"
    label-color="white"
    class="light-actions w-64 !bg-success-800"
    input-class="text-success-50 !dark:text-success-50"
    popup-content-class="!bg-success-800 dark:!bg-success-800 !text-success-50 dark:!text-success-50"
    outlined
    v-model="selectModel"
    :options="selectOptions"
    label="Outlined"
  />

  <q-select
    color="white"
    label-color="white"
    class="light-actions w-64 !bg-warning-800"
    input-class="text-warning-50 !dark:text-warning-50"
    popup-content-class="!bg-warning-800 dark:!bg-warning-800 !text-warning-50 dark:!text-warning-50"
    outlined
    v-model="selectModel"
    :options="selectOptions"
    label="Outlined"
  />

  <q-select
    color="white"
    label-color="white"
    class="light-actions w-64 !bg-error-800"
    input-class="text-error-50 !dark:text-error-50"
    popup-content-class="!bg-error-800 dark:!bg-error-800 !text-error-50 dark:!text-error-50"
    outlined
    v-model="selectModel"
    :options="selectOptions"
    label="Outlined"
  />
</div>`;

const qSelectScriptExample = `const selectModel = ref(null);
const selectOptions = ['Vuetiful', 'Quasar', 'Vue', 'Vite', 'TailwindCSS'];`;

const qFileLightExample = `<div class="flex flex-wrap gap-2">
  <q-file
    color="black"
    label-color="black"
    class="dark-actions w-64 !bg-surface-100"
    input-class="text-surface-900 !dark:text-surface-900"
    outlined
    v-model="fileModel"
    label="Outlined"
  />

  <q-file
    color="black"
    label-color="black"
    class="dark-actions w-64 !bg-primary-100"
    input-class="text-primary-900 !dark:text-primary-900"
    outlined
    v-model="fileModel"
    label="Outlined"
  />

  <q-file
    color="black"
    label-color="black"
    class="dark-actions w-64 !bg-secondary-100"
    input-class="text-secondary-900 !dark:text-secondary-900"
    outlined
    v-model="fileModel"
    label="Outlined"
  />

  <q-file
    color="black"
    label-color="black"
    class="dark-actions w-64 !bg-tertiary-100"
    input-class="text-tertiary-900 !dark:text-tertiary-900"
    outlined
    v-model="fileModel"
    label="Outlined"
  />

  <q-file
    color="black"
    label-color="black"
    class="dark-actions w-64 !bg-success-100"
    input-class="text-success-900 !dark:text-success-900"
    outlined
    v-model="fileModel"
    label="Outlined"
  />

  <q-file
    color="black"
    label-color="black"
    class="dark-actions w-64 !bg-warning-100"
    input-class="text-warning-900 !dark:text-warning-900"
    outlined
    v-model="fileModel"
    label="Outlined"
  />

  <q-file
    color="black"
    label-color="black"
    class="dark-actions w-64 !bg-error-100"
    input-class="text-error-900 !dark:text-error-900"
    outlined
    v-model="fileModel"
    label="Outlined"
  />
</div>`;

const qFileDarkExample = `<div class="flex flex-wrap gap-2">
  <q-file
    color="white"
    label-color="white"
    class="dark-actions w-64 !bg-surface-800"
    input-class="text-surface-50 !dark:text-surface-50"
    outlined
    v-model="fileModel"
    label="Outlined"
  />

  <q-file
    color="white"
    label-color="white"
    class="dark-actions w-64 !bg-primary-800"
    input-class="text-primary-50 !dark:text-primary-50"
    outlined
    v-model="fileModel"
    label="Outlined"
  />

  <q-file
    color="white"
    label-color="white"
    class="dark-actions w-64 !bg-secondary-800"
    input-class="text-secondary-50 !dark:text-secondary-50"
    outlined
    v-model="fileModel"
    label="Outlined"
  />

  <q-file
    color="white"
    label-color="white"
    class="dark-actions w-64 !bg-tertiary-800"
    input-class="text-tertiary-50 !dark:text-tertiary-50"
    outlined
    v-model="fileModel"
    label="Outlined"
  />

  <q-file
    color="white"
    label-color="white"
    class="dark-actions w-64 !bg-success-800"
    input-class="text-success-50 !dark:text-success-50"
    outlined
    v-model="fileModel"
    label="Outlined"
  />

  <q-file
    color="white"
    label-color="white"
    class="dark-actions w-64 !bg-warning-800"
    input-class="text-warning-50 !dark:text-warning-50"
    outlined
    v-model="fileModel"
    label="Outlined"
  />

  <q-file
    color="white"
    label-color="white"
    class="dark-actions w-64 !bg-error-800"
    input-class="text-error-50 !dark:text-error-50"
    outlined
    v-model="fileModel"
    label="Outlined"
  />
</div>`;

const qFileScriptExample = 'const fileModel = ref(null);';

const qTimeExample = `<div class="flex flex-wrap gap-4">
  <q-time v-model="time" />
  <q-time v-model="timeWithSeconds" with-seconds />
</div>`;
const qTimeScriptExample = `const time = ref('03:30');
const timeWithSeconds = ref('03:30:00');`;

const qDateExample = `<div class="flex flex-wrap gap-4">
  <q-date color="bg-primary-100" v-model="date" />
  <q-date v-model="date" minimal />
</div>`;
const qDateScriptExample = "const date = ref('1991/08/13');";
</script>

<template>
  <div class="m-8">
    <h1>Quasar Components</h1>

    <h2>QAvatar</h2>
    <div class="flex gap-2">
      <div class="flex flex-wrap gap-1">
        <q-avatar class="h-8 w-8">
          <img src="/img/john-duck.png" />
        </q-avatar>
        <q-avatar class="h-16 w-16">
          <img src="/img/john-duck.png" />
        </q-avatar>
        <q-avatar class="h-32 w-32">
          <img src="/img/john-duck.png" />
        </q-avatar>

        <q-avatar class="h-8 w-8 bg-surface-300 text-surface-900">JD</q-avatar>
        <q-avatar class="h-16 w-16 bg-surface-300 text-surface-900">
          JD
        </q-avatar>
        <q-avatar class="h-32 w-32 bg-surface-300 text-surface-900">
          JD
        </q-avatar>

        <q-avatar class="h-8 w-8 bg-surface-800 text-surface-50">JD</q-avatar>
        <q-avatar class="h-16 w-16 bg-surface-800 text-surface-50">
          JD
        </q-avatar>
        <q-avatar class="h-32 w-32 bg-surface-800 text-surface-50">
          JD
        </q-avatar>
      </div>
    </div>

    <details class="mt-8">
      <summary>Code</summary>
      <CodeBlock language="html" :code="qAvatarExample" />
    </details>

    <h2>QBadge</h2>
    <div class="flex flex-col gap-2">
      <div class="flex flex-wrap gap-2">
        <q-badge class="bg-surface-100 text-surface-900"> Surface </q-badge>
        <q-badge class="bg-primary-100 text-primary-900"> Primary </q-badge>
        <q-badge class="bg-secondary-100 text-secondary-900">
          Secondary
        </q-badge>
        <q-badge class="bg-tertiary-100 text-tertiary-900"> Tertiary </q-badge>
        <q-badge class="bg-success-100 text-success-900"> Success </q-badge>
        <q-badge class="bg-warning-100 text-warning-900"> Warning </q-badge>
        <q-badge class="bg-error-100 text-error-900"> Error </q-badge>
      </div>
      <div class="flex flex-wrap gap-2">
        <q-badge class="bg-surface-800 text-surface-50"> Surface </q-badge>
        <q-badge class="bg-primary-800 text-primary-50"> Primary </q-badge>
        <q-badge class="bg-secondary-800 text-secondary-50">
          Secondary
        </q-badge>
        <q-badge class="bg-tertiary-800 text-tertiary-50"> Tertiary </q-badge>
        <q-badge class="bg-success-800 text-success-50"> Success </q-badge>
        <q-badge class="bg-warning-800 text-warning-50"> Warning </q-badge>
        <q-badge class="bg-error-800 text-error-50"> Error </q-badge>
      </div>
    </div>

    <details class="mt-8">
      <summary>Code</summary>
      <CodeBlock language="html" :code="qBadgeExample" />
    </details>

    <h2>QBanner</h2>
    <div class="flex flex-col gap-1">
      <q-banner inline-actions class="bg-surface-100 text-surface-900">
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
        the Vue.js framework with visually pleasing and elegant design.
        <template v-slot:action>
          <q-btn flat label="Dismiss" />
        </template>
      </q-banner>

      <q-banner inline-actions class="bg-surface-800 text-surface-50">
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
        the Vue.js framework with visually pleasing and elegant design.
        <template v-slot:action>
          <q-btn flat label="Dismiss" />
        </template>
      </q-banner>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qBannerExample('surface')" />
      </details>

      <q-banner inline-actions class="bg-primary-100 text-primary-900">
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
        the Vue.js framework with visually pleasing and elegant design.
        <template v-slot:action>
          <q-btn flat label="Dismiss" />
        </template>
      </q-banner>
      <q-banner inline-actions class="bg-primary-800 text-primary-50">
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
        the Vue.js framework with visually pleasing and elegant design.
        <template v-slot:action>
          <q-btn flat label="Dismiss" />
        </template>
      </q-banner>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qBannerExample('primary')" />
      </details>

      <q-banner inline-actions class="bg-secondary-100 text-secondary-900">
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
        the Vue.js framework with visually pleasing and elegant design.
        <template v-slot:action>
          <q-btn flat label="Dismiss" />
        </template>
      </q-banner>
      <q-banner inline-actions class="bg-secondary-800 text-secondary-50">
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
        the Vue.js framework with visually pleasing and elegant design.
        <template v-slot:action>
          <q-btn flat label="Dismiss" />
        </template>
      </q-banner>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qBannerExample('secondary')" />
      </details>

      <q-banner inline-actions class="bg-tertiary-100 text-tertiary-900">
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
        the Vue.js framework with visually pleasing and elegant design.
        <template v-slot:action>
          <q-btn flat label="Dismiss" />
        </template>
      </q-banner>
      <q-banner inline-actions class="bg-tertiary-800 text-tertiary-50">
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
        the Vue.js framework with visually pleasing and elegant design.
        <template v-slot:action>
          <q-btn flat label="Dismiss" />
        </template>
      </q-banner>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qBannerExample('tertiary')" />
      </details>

      <q-banner inline-actions class="bg-success-100 text-success-900">
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
        the Vue.js framework with visually pleasing and elegant design.
        <template v-slot:action>
          <q-btn flat label="Dismiss" />
        </template>
      </q-banner>
      <q-banner inline-actions class="bg-success-800 text-success-50">
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
        the Vue.js framework with visually pleasing and elegant design.
        <template v-slot:action>
          <q-btn flat label="Dismiss" />
        </template>
      </q-banner>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qBannerExample('success')" />
      </details>

      <q-banner inline-actions class="bg-warning-100 text-warning-900">
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
        the Vue.js framework with visually pleasing and elegant design.
        <template v-slot:action>
          <q-btn flat label="Dismiss" />
        </template>
      </q-banner>
      <q-banner inline-actions class="bg-warning-800 text-warning-50">
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
        the Vue.js framework with visually pleasing and elegant design.
        <template v-slot:action>
          <q-btn flat label="Dismiss" />
        </template>
      </q-banner>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qBannerExample('warning')" />
      </details>

      <q-banner inline-actions class="bg-error-100 text-error-900">
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
        the Vue.js framework with visually pleasing and elegant design.
        <template v-slot:action>
          <q-btn flat label="Dismiss" />
        </template>
      </q-banner>
      <q-banner inline-actions class="bg-error-800 text-error-50">
        Vuetiful is a portmanteau of Vue and Beautiful, combining the power of
        the Vue.js framework with visually pleasing and elegant design.
        <template v-slot:action>
          <q-btn flat label="Dismiss" />
        </template>
      </q-banner>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qBannerExample('error')" />
      </details>
    </div>

    <h2>QBtn</h2>
    <div class="flex flex-col gap-4">
      <div class="flex flex-wrap gap-2">
        <q-btn class="!bg-surface-100 !text-surface-900"> Surface </q-btn>
        <q-btn class="!bg-primary-100 !text-primary-900"> Primary </q-btn>
        <q-btn class="!bg-secondary-100 !text-secondary-900"> Secondary </q-btn>
        <q-btn class="!bg-tertiary-100 !text-tertiary-900"> Tertiary </q-btn>
        <q-btn class="!bg-success-100 !text-success-900"> Success </q-btn>
        <q-btn class="!bg-warning-100 !text-warning-900"> Warning </q-btn>
        <q-btn class="!bg-error-100 !text-error-900"> Error </q-btn>
      </div>
      <div class="flex flex-wrap gap-2">
        <q-btn class="!bg-surface-800 !text-surface-50"> Surface </q-btn>
        <q-btn class="!bg-primary-800 !text-primary-50"> Primary </q-btn>
        <q-btn class="!bg-secondary-800 !text-secondary-50"> Secondary </q-btn>
        <q-btn class="!bg-tertiary-800 !text-tertiary-50"> Tertiary </q-btn>
        <q-btn class="!bg-success-800 !text-success-50"> Success </q-btn>
        <q-btn class="!bg-warning-800 !text-warning-50"> Warning </q-btn>
        <q-btn class="!bg-error-800 !text-error-50"> Error </q-btn>
      </div>
      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qBtnExample('')" />
      </details>

      <div class="flex flex-wrap gap-2">
        <q-btn flat class="!bg-surface-100 !text-surface-900"> Surface </q-btn>
        <q-btn flat class="!bg-primary-100 !text-primary-900"> Primary </q-btn>
        <q-btn flat class="!bg-secondary-100 !text-secondary-900">
          Secondary
        </q-btn>
        <q-btn flat class="!bg-tertiary-100 !text-tertiary-900">
          Tertiary
        </q-btn>
        <q-btn flat class="!bg-success-100 !text-success-900"> Success </q-btn>
        <q-btn flat class="!bg-warning-100 !text-warning-900"> Warning </q-btn>
        <q-btn flat class="!bg-error-100 !text-error-900"> Error </q-btn>
      </div>
      <div class="flex flex-wrap gap-2">
        <q-btn flat class="!bg-surface-800 !text-surface-50"> Surface </q-btn>
        <q-btn flat class="!bg-primary-800 !text-primary-50"> Primary </q-btn>
        <q-btn flat class="!bg-secondary-800 !text-secondary-50">
          Secondary
        </q-btn>
        <q-btn flat class="!bg-tertiary-800 !text-tertiary-50">
          Tertiary
        </q-btn>
        <q-btn flat class="!bg-success-800 !text-success-50"> Success </q-btn>
        <q-btn flat class="!bg-warning-800 !text-warning-50"> Warning </q-btn>
        <q-btn flat class="!bg-error-800 !text-error-50"> Error </q-btn>
      </div>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qBtnExample('flat')" />
      </details>

      <div class="flex gap-2">
        <q-btn outline class="!bg-surface-100 !text-surface-900">
          Surface
        </q-btn>
        <q-btn outline class="!bg-primary-100 !text-primary-900">
          Primary
        </q-btn>
        <q-btn outline class="!bg-secondary-100 !text-secondary-900">
          Secondary
        </q-btn>
        <q-btn outline class="!bg-tertiary-100 !text-tertiary-900">
          Tertiary
        </q-btn>
        <q-btn outline class="!bg-success-100 !text-success-900">
          Success
        </q-btn>
        <q-btn outline class="!bg-warning-100 !text-warning-900">
          Warning
        </q-btn>
        <q-btn outline class="!bg-error-100 !text-error-900"> Error </q-btn>
      </div>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qBtnExample('outline')" />
      </details>

      <div class="flex gap-2">
        <q-btn outline class="!bg-surface-800 !text-surface-50">
          Surface
        </q-btn>
        <q-btn outline class="!bg-primary-800 !text-primary-50">
          Primary
        </q-btn>
        <q-btn outline class="!bg-secondary-800 !text-secondary-50">
          Secondary
        </q-btn>
        <q-btn outline class="!bg-tertiary-800 !text-tertiary-50">
          Tertiary
        </q-btn>
        <q-btn outline class="!bg-success-800 !text-success-50">
          Success
        </q-btn>
        <q-btn outline class="!bg-warning-800 !text-warning-50">
          Warning
        </q-btn>
        <q-btn outline class="!bg-error-800 !text-error-50"> Error </q-btn>
      </div>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qBtnExample('outline')" />
      </details>

      <h3>QBtnGroup</h3>
      <div class="flex flex-col gap-2">
        <q-btn-group push>
          <q-btn push class="!bg-surface-100 !text-surface-900">
            Surface
          </q-btn>
          <q-btn push class="!bg-primary-100 !text-primary-900">
            Primary
          </q-btn>
          <q-btn push class="!bg-secondary-100 !text-secondary-900">
            Secondary
          </q-btn>
          <q-btn push class="!bg-tertiary-100 !text-tertiary-900">
            Tertiary
          </q-btn>
          <q-btn push class="!bg-success-100 !text-success-900">
            Success
          </q-btn>
          <q-btn push class="!bg-warning-100 !text-warning-900">
            Warning
          </q-btn>
          <q-btn push class="!bg-error-100 !text-error-900"> Error </q-btn>
        </q-btn-group>

        <q-btn-group push>
          <q-btn push class="!bg-surface-800 !text-surface-50"> Surface </q-btn>
          <q-btn push class="!bg-primary-800 !text-primary-50"> Primary </q-btn>
          <q-btn push class="!bg-secondary-800 !text-secondary-50">
            Secondary
          </q-btn>
          <q-btn push class="!bg-tertiary-800 !text-tertiary-50">
            Tertiary
          </q-btn>
          <q-btn push class="!bg-success-800 !text-success-50"> Success </q-btn>
          <q-btn push class="!bg-warning-800 !text-warning-50"> Warning </q-btn>
          <q-btn push class="!bg-error-800 !text-error-50"> Error </q-btn>
        </q-btn-group>

        <details class="mb-2">
          <summary>Code</summary>
          <CodeBlock language="html" :code="qBtnGroupExample('push')" />
        </details>

        <q-btn-group outline>
          <q-btn outline class="!bg-surface-100 !text-surface-900">
            Surface
          </q-btn>
          <q-btn outline class="!bg-primary-100 !text-primary-900">
            Primary
          </q-btn>
          <q-btn outline class="!bg-secondary-100 !text-secondary-900">
            Secondary
          </q-btn>
          <q-btn outline class="!bg-tertiary-100 !text-tertiary-900">
            Tertiary
          </q-btn>
          <q-btn outline class="!bg-success-100 !text-success-900">
            Success
          </q-btn>
          <q-btn outline class="!bg-warning-100 !text-warning-900">
            Warning
          </q-btn>
          <q-btn outline class="!bg-error-100 !text-error-900"> Error </q-btn>
        </q-btn-group>

        <q-btn-group outline>
          <q-btn outline class="!bg-surface-800 !text-surface-50">
            Surface
          </q-btn>
          <q-btn outline class="!bg-primary-800 !text-primary-50">
            Primary
          </q-btn>
          <q-btn outline class="!bg-secondary-800 !text-secondary-50">
            Secondary
          </q-btn>
          <q-btn outline class="!bg-tertiary-800 !text-tertiary-50">
            Tertiary
          </q-btn>
          <q-btn outline class="!bg-success-800 !text-success-50">
            Success
          </q-btn>
          <q-btn outline class="!bg-warning-800 !text-warning-50">
            Warning
          </q-btn>
          <q-btn outline class="!bg-error-800 !text-error-50"> Error </q-btn>
        </q-btn-group>

        <details class="mb-2">
          <summary>Code</summary>
          <CodeBlock language="html" :code="qBtnGroupExample('outline')" />
        </details>
      </div>

      <h3>QBtnDropdown</h3>
      <div class="flex flex-wrap gap-2">
        <q-btn-dropdown
          class="!bg-primary-100 !text-primary-900"
          label="Dropdown Button"
        >
          <q-list class="!bg-primary-100 !text-primary-900">
            <q-item
              clickable
              v-close-popup
              @click="onDropdownItemClick('Vuetiful')"
            >
              <q-item-section>
                <q-item-label>Vuetiful</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onDropdownItemClick('Is')">
              <q-item-section>
                <q-item-label>Is</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              v-close-popup
              @click="onDropdownItemClick('Beautiful')"
            >
              <q-item-section>
                <q-item-label>Beautiful</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown
          class="!bg-primary-800 !text-primary-50"
          label="Dropdown Button"
        >
          <q-list class="!bg-primary-800 !text-primary-50">
            <q-item
              clickable
              v-close-popup
              @click="onDropdownItemClick('Vuetiful')"
            >
              <q-item-section>
                <q-item-label>Vuetiful</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onDropdownItemClick('Is')">
              <q-item-section>
                <q-item-label>Is</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              v-close-popup
              @click="onDropdownItemClick('Beautiful')"
            >
              <q-item-section>
                <q-item-label>Beautiful</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qButtonDropdownExample" />
      </details>
    </div>

    <h2>QCard</h2>
    <div class="flex flex-col items-start justify-start gap-2">
      <div class="flex flex-wrap items-start gap-2">
        <q-card class="w-64 bg-surface-100 text-surface-900">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="/img/john-duck.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="text-surface-900">
              <q-item-label>John Duck</q-item-label>
              <q-item-label caption class="!text-surface-900">
                Vuetiful is beautiful
              </q-item-label>
            </q-item-section>
          </q-item>

          <img src="/img/john-duck.png" />
        </q-card>

        <q-card class="w-64 bg-surface-800 text-surface-50">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="/img/john-duck.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>John Duck</q-item-label>
              <q-item-label caption>Vuetiful is beautiful</q-item-label>
            </q-item-section>
          </q-item>

          <img src="/img/john-duck.png" />
        </q-card>
      </div>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qCardOneExample" />
      </details>

      <div class="flex flex-wrap items-start gap-2">
        <q-card class="w-64 bg-surface-100 text-surface-900">
          <img src="/img/john-duck.png" />

          <q-card-section>
            <div class="text-h6">Vuetiful</div>
            <div class="text-subtitle2">by John Duck</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            quasi!
          </q-card-section>
        </q-card>

        <q-card class="w-64 bg-surface-800 text-surface-50">
          <img src="/img/john-duck.png" />

          <q-card-section>
            <div class="text-h6">Vuetiful</div>
            <div class="text-subtitle2">by John Duck</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            quasi!
          </q-card-section>
        </q-card>
      </div>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qCardTwoExample" />
      </details>

      <div class="flex flex-wrap items-start gap-2">
        <q-card class="w-64 bg-surface-100 text-surface-900">
          <q-img src="/img/john-duck.png">
            <div class="absolute-bottom text-h6">John Duck</div>
          </q-img>

          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            molestias.
          </q-card-section>
        </q-card>

        <q-card class="w-64 bg-surface-800 text-surface-50">
          <q-img src="/img/john-duck.png">
            <div class="absolute-bottom text-h6">John Duck</div>
          </q-img>

          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            molestias.
          </q-card-section>
        </q-card>
      </div>

      <div class="flex flex-wrap items-start gap-2">
        <q-card class="w-64">
          <q-img src="/img/john-duck.png">
            <div class="absolute-bottom text-subtitle2 text-center">
              John Duck
            </div>
          </q-img>
        </q-card>

        <q-card class="w-64">
          <q-img src="/img/john-duck.png">
            <div class="text-subtitle2 absolute-top text-center">John Duck</div>
          </q-img>
        </q-card>

        <q-card class="w-64">
          <q-img src="/img/john-duck.png">
            <div class="text-h5 absolute-bottom text-right">John Duck</div>
          </q-img>
        </q-card>
      </div>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qCardThreeExample" />
      </details>

      <div class="flex flex-wrap items-start gap-2">
        <q-card class="w-64 bg-surface-100 text-surface-900">
          <q-img src="/img/john-duck.png">
            <div class="absolute-bottom">
              <div class="text-h6">Vuetiful</div>
              <div class="text-subtitle2">by John Duck</div>
            </div>
          </q-img>

          <q-card-actions>
            <q-btn flat>Quack 1</q-btn>
            <q-btn flat>Quack 2</q-btn>
          </q-card-actions>
        </q-card>

        <q-card class="w-64 bg-surface-800 text-surface-50">
          <q-img src="/img/john-duck.png">
            <div class="absolute-bottom">
              <div class="text-h6">Vuetiful</div>
              <div class="text-subtitle2">by John Duck</div>
            </div>
          </q-img>

          <q-card-actions>
            <q-btn flat>Quack 1</q-btn>
            <q-btn flat>Quack 2</q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qCardFourExample" />
      </details>
    </div>

    <h2>QChip</h2>
    <div class="flex flex-col gap-2">
      <div class="flex flex-wrap gap-1">
        <q-chip class="bg-surface-100-800-token text-surface-900-50-token">
          <q-avatar>
            <img src="/img/john-duck.png" />
          </q-avatar>
          Surface
        </q-chip>

        <q-chip class="bg-primary-100-800-token text-primary-900-50-token">
          <q-avatar>
            <img src="/img/john-duck.png" />
          </q-avatar>
          Primary
        </q-chip>

        <q-chip class="bg-secondary-100-800-token text-secondary-900-50-token">
          <q-avatar>
            <img src="/img/john-duck.png" />
          </q-avatar>
          Secondary
        </q-chip>

        <q-chip class="bg-tertiary-100-800-token text-tertiary-900-50-token">
          <q-avatar>
            <img src="/img/john-duck.png" />
          </q-avatar>
          Tertiary
        </q-chip>

        <q-chip class="bg-success-100-800-token text-success-900-50-token">
          <q-avatar>
            <img src="/img/john-duck.png" />
          </q-avatar>
          Success
        </q-chip>

        <q-chip class="bg-warning-100-800-token text-warning-900-50-token">
          <q-avatar>
            <img src="/img/john-duck.png" />
          </q-avatar>
          Warning
        </q-chip>

        <q-chip class="bg-error-100-800-token text-error-900-50-token">
          <q-avatar>
            <img src="/img/john-duck.png" />
          </q-avatar>
          Error
        </q-chip>
      </div>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qChipExample('')" />
      </details>

      <div class="flex flex-wrap gap-1">
        <q-chip
          dense
          class="bg-surface-100-800-token text-surface-900-50-token"
        >
          <q-avatar>
            <img src="/img/john-duck.png" />
          </q-avatar>
          Surface
        </q-chip>

        <q-chip
          dense
          class="bg-primary-100-800-token text-primary-900-50-token"
        >
          <q-avatar>
            <img src="/img/john-duck.png" />
          </q-avatar>
          Primary
        </q-chip>

        <q-chip
          dense
          class="bg-secondary-100-800-token text-secondary-900-50-token"
        >
          <q-avatar>
            <img src="/img/john-duck.png" />
          </q-avatar>
          Secondary
        </q-chip>

        <q-chip
          dense
          class="bg-tertiary-100-800-token text-tertiary-900-50-token"
        >
          <q-avatar>
            <img src="/img/john-duck.png" />
          </q-avatar>
          Secondary
        </q-chip>

        <q-chip
          dense
          class="bg-success-100-800-token text-success-900-50-token"
        >
          <q-avatar>
            <img src="/img/john-duck.png" />
          </q-avatar>
          Success
        </q-chip>

        <q-chip
          dense
          class="bg-warning-100-800-token text-warning-900-50-token"
        >
          <q-avatar>
            <img src="/img/john-duck.png" />
          </q-avatar>
          Warning
        </q-chip>

        <q-chip dense class="bg-error-100-800-token text-error-900-50-token">
          <q-avatar>
            <img src="/img/john-duck.png" />
          </q-avatar>
          Error
        </q-chip>
      </div>

      <details class="mb-2">
        <summary>Code</summary>
        <CodeBlock language="html" :code="qChipExample('dense')" />
      </details>
    </div>

    <h2>QColor</h2>
    <div class="flex flex-col gap-2">
      <div class="flex flex-wrap items-start gap-2">
        <q-color class="bg-surface-100 text-surface-900" v-model="hex" />
        <q-color class="bg-surface-100 text-surface-900" v-model="hexa" />
        <q-color class="bg-surface-100 text-surface-900" v-model="rgb" />
        <q-color class="bg-surface-100 text-surface-900" v-model="rgba" />
      </div>
      <div class="flex flex-wrap items-start gap-2">
        <q-color class="bg-surface-800 text-surface-50" v-model="hex" />
        <q-color class="bg-surface-800 text-surface-50" v-model="hexa" />
        <q-color class="bg-surface-800 text-surface-50" v-model="rgb" />
        <q-color class="bg-surface-800 text-surface-50" v-model="rgba" />
      </div>
    </div>

    <details class="mb-2">
      <summary>Code</summary>
      <div class="flex flex-col gap-2">
        <CodeBlock language="ts" :code="qColorScriptExample" />
        <CodeBlock language="html" :code="qColorExample" />
      </div>
    </details>

    <h2>QEditor</h2>
    <div class="flex flex-wrap gap-2">
      <q-editor
        class="dark-actions bg-surface-100 text-surface-900"
        v-model="editor"
        min-height="5rem"
      />

      <q-editor
        class="light-actions bg-surface-800 text-surface-50"
        v-model="editor"
        min-height="5rem"
      />
    </div>

    <details class="mt-2 mb-2">
      <summary>Code</summary>
      <div class="flex flex-col gap-2">
        <CodeBlock language="ts" :code="qEditorScriptExample" />
        <CodeBlock language="html" :code="qEditorExample" />
      </div>
    </details>

    <h2>QExpansionItem</h2>
    <div class="flex flex-wrap items-start gap-4">
      <q-list class="w-64" bordered>
        <q-expansion-item
          expand-separator
          icon="perm_identity"
          label="Account settings"
          caption="John Duck"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          icon="signal_wifi_off"
          label="Wifi settings"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item icon="assessment" label="Disabled" disable>
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item expand-separator icon="drafts" label="Drafts">
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

      <q-list class="w-64 bg-surface-800 text-surface-50" bordered>
        <q-expansion-item
          expand-separator
          icon="perm_identity"
          label="Account settings"
          caption="John Duck"
          group="accordion"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          icon="signal_wifi_off"
          label="Wifi settings"
          group="accordion"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          icon="assessment"
          label="Disabled"
          group="accordion"
          disable
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          icon="drafts"
          label="Drafts"
          group="accordion"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>

    <details class="mt-2 mb-2">
      <summary>Code</summary>
      <div class="flex flex-col gap-2">
        <CodeBlock language="html" :code="qExpansionItemExample" />
      </div>
    </details>

    <h2>QInput</h2>
    <div class="flex flex-col gap-4">
      <p>Only the outlined variant is supported</p>
      <div class="flex flex-wrap gap-2">
        <q-input
          color="black"
          label-color="black"
          class="w-64 bg-surface-100"
          input-class="text-surface-900 dark:text-surface-900"
          outlined
          v-model="text.surface"
          label="Outlined"
        />

        <q-input
          color="black"
          label-color="black"
          class="w-64 bg-primary-100"
          input-class="text-primary-900 dark:text-primary-900"
          outlined
          v-model="text.primary"
          label="Outlined"
        />

        <q-input
          color="black"
          label-color="black"
          class="w-64 bg-secondary-100"
          input-class="text-secondary-900 dark:text-secondary-900"
          outlined
          v-model="text.secondary"
          label="Outlined"
        />

        <q-input
          color="black"
          label-color="black"
          class="w-64 bg-tertiary-100"
          input-class="text-tertiary-900 dark:text-tertiary-900"
          outlined
          v-model="text.tertiary"
          label="Outlined"
        />

        <q-input
          color="black"
          label-color="black"
          class="w-64 bg-success-100"
          input-class="text-success-900 dark:text-success-900"
          outlined
          v-model="text.success"
          label="Outlined"
        />

        <q-input
          color="black"
          label-color="black"
          class="w-64 bg-warning-100"
          input-class="text-warning-900 dark:text-warning-900"
          outlined
          v-model="text.warning"
          label="Outlined"
        />

        <q-input
          color="black"
          label-color="black"
          class="w-64 bg-error-100"
          input-class="text-error-900 dark:text-error-900"
          outlined
          v-model="text.error"
          label="Outlined"
        />
      </div>

      <details class="mb-2">
        <summary>Code</summary>
        <div class="flex flex-col gap-2">
          <CodeBlock language="ts" :code="qInputScriptExample" />
          <CodeBlock language="html" :code="qInputLightExample" />
        </div>
      </details>

      <div class="flex flex-wrap gap-2">
        <q-input
          color="white"
          label-color="white"
          class="w-64 bg-surface-800"
          input-class="text-surface-50 dark:text-surface-50"
          outlined
          v-model="text.surface"
          label="Outlined"
        />

        <q-input
          color="white"
          label-color="white"
          class="w-64 bg-primary-800"
          input-class="text-primary-50 dark:text-primary-50"
          outlined
          v-model="text.primary"
          label="Outlined"
        />

        <q-input
          color="white"
          label-color="white"
          class="w-64 bg-secondary-800"
          input-class="text-secondary-50 dark:text-secondary-50"
          outlined
          v-model="text.secondary"
          label="Outlined"
        />

        <q-input
          color="white"
          label-color="white"
          class="w-64 bg-tertiary-800"
          input-class="text-tertiary-50 dark:text-tertiary-50"
          outlined
          v-model="text.tertiary"
          label="Outlined"
        />

        <q-input
          color="white"
          label-color="white"
          class="w-64 bg-success-800"
          input-class="text-success-50 dark:text-success-50"
          outlined
          v-model="text.success"
          label="Outlined"
        />

        <q-input
          color="white"
          label-color="white"
          class="w-64 bg-warning-800"
          input-class="text-warning-50 dark:text-warning-50"
          outlined
          v-model="text.warning"
          label="Outlined"
        />

        <q-input
          color="white"
          label-color="white"
          class="w-64 bg-error-900"
          input-class="text-error-50 dark:text-error-50"
          outlined
          v-model="text.error"
          label="Outlined"
        />
      </div>

      <details class="mb-2">
        <summary>Code</summary>
        <div class="flex flex-col gap-2">
          <CodeBlock language="ts" :code="qInputScriptExample" />
          <CodeBlock language="html" :code="qInputDarkExample" />
        </div>
      </details>
    </div>

    <h2>QSelect</h2>
    <div class="flex flex-col gap-4">
      <p>Only the outlined variant is supported</p>
      <div class="flex flex-wrap gap-2">
        <q-select
          color="black"
          label-color="black"
          class="dark-actions w-64 bg-surface-100"
          popup-content-class="!bg-surface-100 dark:!bg-surface-100 !text-surface-900 dark:!text-surface-900"
          outlined
          v-model="selectModel"
          :options="selectOptions"
          label="Outlined"
        />

        <q-select
          color="black"
          label-color="black"
          class="dark-actions w-64 !bg-primary-100"
          popup-content-class="!bg-primary-100 dark:!bg-primary-100 !text-primary-900 dark:!text-primary-900"
          outlined
          v-model="selectModel"
          :options="selectOptions"
          label="Outlined"
        />

        <q-select
          color="black"
          label-color="black"
          class="dark-actions w-64 !bg-secondary-100"
          popup-content-class="!bg-secondary-100 dark:!bg-secondary-100 !text-secondary-900 dark:!text-secondary-900"
          outlined
          v-model="selectModel"
          :options="selectOptions"
          label="Outlined"
        />

        <q-select
          color="black"
          label-color="black"
          class="dark-actions w-64 !bg-tertiary-100"
          popup-content-class="!bg-tertiary-100 dark:!bg-tertiary-100 !text-tertiary-900 dark:!text-tertiary-900"
          outlined
          v-model="selectModel"
          :options="selectOptions"
          label="Outlined"
        />

        <q-select
          color="black"
          label-color="black"
          class="dark-actions w-64 !bg-success-100"
          popup-content-class="!bg-success-100 dark:!bg-success-100 !text-success-900 dark:!text-success-900"
          outlined
          v-model="selectModel"
          :options="selectOptions"
          label="Outlined"
        />

        <q-select
          color="black"
          label-color="black"
          class="dark-actions w-64 !bg-warning-100"
          popup-content-class="!bg-warning-100 dark:!bg-warning-100 !text-warning-900 dark:!text-warning-900"
          outlined
          v-model="selectModel"
          :options="selectOptions"
          label="Outlined"
        />

        <q-select
          color="black"
          label-color="black"
          class="dark-actions w-64 !bg-error-100"
          popup-content-class="!bg-error-100 dark:!bg-error-100 !text-error-900 dark:!text-error-900"
          outlined
          v-model="selectModel"
          :options="selectOptions"
          label="Outlined"
        />
      </div>

      <details class="mb-2">
        <summary>Code</summary>
        <div class="flex flex-col gap-2">
          <CodeBlock language="ts" :code="qSelectScriptExample" />
          <CodeBlock language="html" :code="qSelectLightExample" />
        </div>
      </details>

      <div class="flex flex-wrap gap-2">
        <q-select
          color="white"
          label-color="white"
          class="light-actions w-64 !bg-surface-800"
          popup-content-class="!bg-surface-800 dark:!bg-surface-800 !text-surface-50 dark:!text-surface-50"
          outlined
          v-model="selectModel"
          :options="selectOptions"
          label="Outlined"
        />

        <q-select
          color="white"
          label-color="white"
          class="light-actions w-64 !bg-primary-800"
          input-class="text-primary-50 !dark:text-primary-50"
          popup-content-class="!bg-primary-800 dark:!bg-primary-800 !text-primary-50 dark:!text-primary-50"
          outlined
          v-model="selectModel"
          :options="selectOptions"
          label="Outlined"
        />

        <q-select
          color="white"
          label-color="white"
          class="light-actions w-64 !bg-secondary-800"
          input-class="text-secondary-50 !dark:text-secondary-50"
          popup-content-class="!bg-secondary-800 dark:!bg-secondary-800 !text-secondary-50 dark:!text-secondary-50"
          outlined
          v-model="selectModel"
          :options="selectOptions"
          label="Outlined"
        />

        <q-select
          color="white"
          label-color="white"
          class="light-actions w-64 !bg-tertiary-800"
          input-class="text-tertiary-50 !dark:text-tertiary-50"
          popup-content-class="!bg-tertiary-800 dark:!bg-tertiary-800 !text-tertiary-50 dark:!text-tertiary-50"
          outlined
          v-model="selectModel"
          :options="selectOptions"
          label="Outlined"
        />

        <q-select
          color="white"
          label-color="white"
          class="light-actions w-64 !bg-success-800"
          input-class="text-success-50 !dark:text-success-50"
          popup-content-class="!bg-success-800 dark:!bg-success-800 !text-success-50 dark:!text-success-50"
          outlined
          v-model="selectModel"
          :options="selectOptions"
          label="Outlined"
        />

        <q-select
          color="white"
          label-color="white"
          class="light-actions w-64 !bg-warning-800"
          input-class="text-warning-50 !dark:text-warning-50"
          popup-content-class="!bg-warning-800 dark:!bg-warning-800 !text-warning-50 dark:!text-warning-50"
          outlined
          v-model="selectModel"
          :options="selectOptions"
          label="Outlined"
        />

        <q-select
          color="white"
          label-color="white"
          class="light-actions w-64 !bg-error-800"
          input-class="text-error-50 !dark:text-error-50"
          popup-content-class="!bg-error-800 dark:!bg-error-800 !text-error-50 dark:!text-error-50"
          outlined
          v-model="selectModel"
          :options="selectOptions"
          label="Outlined"
        />
      </div>

      <details class="mb-2">
        <summary>Code</summary>
        <div class="flex flex-col gap-2">
          <CodeBlock language="ts" :code="qSelectScriptExample" />
          <CodeBlock language="html" :code="qSelectDarkExample" />
        </div>
      </details>
    </div>

    <h2>QFile</h2>
    <div class="flex flex-col gap-4">
      <p>Only the outlined variant is supported</p>
      <div class="flex flex-wrap gap-2">
        <q-file
          color="black"
          label-color="black"
          class="dark-actions w-64 !bg-surface-100"
          input-class="text-surface-900 !dark:text-surface-900"
          outlined
          v-model="fileModel"
          label="Outlined"
        />

        <q-file
          color="black"
          label-color="black"
          class="dark-actions w-64 !bg-primary-100"
          input-class="text-primary-900 !dark:text-primary-900"
          outlined
          v-model="fileModel"
          label="Outlined"
        />

        <q-file
          color="black"
          label-color="black"
          class="dark-actions w-64 !bg-secondary-100"
          input-class="text-secondary-900 !dark:text-secondary-900"
          outlined
          v-model="fileModel"
          label="Outlined"
        />

        <q-file
          color="black"
          label-color="black"
          class="dark-actions w-64 !bg-tertiary-100"
          input-class="text-tertiary-900 !dark:text-tertiary-900"
          outlined
          v-model="fileModel"
          label="Outlined"
        />

        <q-file
          color="black"
          label-color="black"
          class="dark-actions w-64 !bg-success-100"
          input-class="text-success-900 !dark:text-success-900"
          outlined
          v-model="fileModel"
          label="Outlined"
        />

        <q-file
          color="black"
          label-color="black"
          class="dark-actions w-64 !bg-warning-100"
          input-class="text-warning-900 !dark:text-warning-900"
          outlined
          v-model="fileModel"
          label="Outlined"
        />

        <q-file
          color="black"
          label-color="black"
          class="dark-actions w-64 !bg-error-100"
          input-class="text-error-900 !dark:text-error-900"
          outlined
          v-model="fileModel"
          label="Outlined"
        />
      </div>

      <details class="mb-2">
        <summary>Code</summary>
        <div class="flex flex-col gap-2">
          <CodeBlock language="ts" :code="qFileScriptExample" />
          <CodeBlock language="html" :code="qFileLightExample" />
        </div>
      </details>

      <div class="flex flex-wrap gap-2">
        <q-file
          color="white"
          label-color="white"
          class="dark-actions w-64 !bg-surface-800"
          input-class="text-surface-50 !dark:text-surface-50"
          outlined
          v-model="fileModel"
          label="Outlined"
        />

        <q-file
          color="white"
          label-color="white"
          class="dark-actions w-64 !bg-primary-800"
          input-class="text-primary-50 !dark:text-primary-50"
          outlined
          v-model="fileModel"
          label="Outlined"
        />

        <q-file
          color="white"
          label-color="white"
          class="dark-actions w-64 !bg-secondary-800"
          input-class="text-secondary-50 !dark:text-secondary-50"
          outlined
          v-model="fileModel"
          label="Outlined"
        />

        <q-file
          color="white"
          label-color="white"
          class="dark-actions w-64 !bg-tertiary-800"
          input-class="text-tertiary-50 !dark:text-tertiary-50"
          outlined
          v-model="fileModel"
          label="Outlined"
        />

        <q-file
          color="white"
          label-color="white"
          class="dark-actions w-64 !bg-success-800"
          input-class="text-success-50 !dark:text-success-50"
          outlined
          v-model="fileModel"
          label="Outlined"
        />

        <q-file
          color="white"
          label-color="white"
          class="dark-actions w-64 !bg-warning-800"
          input-class="text-warning-50 !dark:text-warning-50"
          outlined
          v-model="fileModel"
          label="Outlined"
        />

        <q-file
          color="white"
          label-color="white"
          class="dark-actions w-64 !bg-error-800"
          input-class="text-error-50 !dark:text-error-50"
          outlined
          v-model="fileModel"
          label="Outlined"
        />
      </div>

      <details class="mb-2">
        <summary>Code</summary>
        <div class="flex flex-col gap-2">
          <CodeBlock language="ts" :code="qFileScriptExample" />
          <CodeBlock language="html" :code="qFileDarkExample" />
        </div>
      </details>
    </div>

    <h2>QTime</h2>
    <div class="flex flex-wrap gap-4">
      <q-time v-model="time" />
      <q-time v-model="timeWithSeconds" with-seconds />
    </div>

    <details class="mt-2 mb-2">
      <summary>Code</summary>
      <div class="flex flex-col gap-2">
        <CodeBlock language="ts" :code="qTimeScriptExample" />
        <CodeBlock language="html" :code="qTimeExample" />
      </div>
    </details>

    <h2>QDate</h2>
    <div class="flex flex-wrap gap-4">
      <q-date color="bg-primary-100" v-model="date" />
      <q-date v-model="date" minimal />
    </div>

    <details class="mt-2 mb-2">
      <summary>Code</summary>
      <div class="flex flex-col gap-2">
        <CodeBlock language="ts" :code="qDateScriptExample" />
        <CodeBlock language="html" :code="qDateExample" />
      </div>
    </details>
  </div>
</template>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>
