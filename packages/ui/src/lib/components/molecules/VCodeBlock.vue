<script setup lang="ts">
import { type CssClasses, VButton, vClipboard } from '@/lib';
import { useHighlight } from '@/lib/services';
import { tm } from '@/lib/utils/tailwind-merge';
/**
 * A consumer of Vuetiful needs to add highlight.js as dependency and import a style
 */
// import 'highlight.js/styles/github-dark.css';
import { computed, ref } from 'vue';

const { highlight } = useHighlight();

const props = defineProps({
  class: {
    type: String,
    default: '',
  },

  language: {
    type: String,
    default: 'plaintext',
  },
  code: {
    type: String,
    default: '',
  },

  preventOverflow: {
    type: Boolean,
    default: false,
  },

  classHeader: {
    type: String as () => CssClasses,
    default: '',
  },
  classLanguage: {
    type: String as () => CssClasses,
    default: '',
  },
  classPre: {
    type: String as () => CssClasses,
    default: '',
  },
  classCode: {
    type: String as () => CssClasses,
    default: '',
  },

  classButton: {
    type: String as () => CssClasses,
    default: '',
  },
  buttonText: {
    type: String,
    default: 'Copy',
  },
  buttonCopiedText: {
    type: String,
    default: '👍',
  },
});

const emit = defineEmits<{
  (event: 'copy'): void;
}>();

const copyState = ref(false);

// Allow shorthand alias, but show full text in UI
function languageFormatter(lang: string): string {
  if (lang === 'js') return 'javascript';
  if (lang === 'ts') return 'typescript';
  if (['sh', 'bash', 'zsh', 'shell'].includes(lang)) return 'console';
  return lang;
}

function onCopyClick() {
  copyState.value = true;
  setTimeout(() => {
    copyState.value = false;
  }, 2000);
  emit('copy');
}

const classRootDefault = 'max-w-full bg-[#171717] text-sm text-white shadow rounded-container';
const classRootMerged = computed(() => tm(classRootDefault, props.class));

const classHeaderDefault =
  'flex items-center justify-between p-2 pb-0 pl-4 text-xs uppercase text-[#a4a4a4]';
const classHeaderMerged = computed(() => tm(classHeaderDefault, props.classHeader));

const classButtonDefault = 'bg-[#171717] text-[#a4a4a4] dark:bg-[#171717] dark:text-[#a4a4a4]';
const classButtonMerged = computed(() => tm(classButtonDefault, props.classButton));

const classPreDefault = 'rounded-t-none bg-transparent p-4 pt-0';
const classPreMerged = computed(() => tm(classPreDefault, props.classPre));
</script>

<template v-if="language && code">
  <div :class="`vuetiful-code-block ${classRootMerged}`">
    <header :class="`vuetiful-code-block-header ${classHeaderMerged}`">
      <span :class="`vuetiful-code-block-language ${classLanguage}`">{{
        languageFormatter(language)
      }}</span>
      <v-button
        size="sm"
        :class="`vuetiful-code-block-button ${classButtonMerged}`"
        @click="onCopyClick()"
        v-clipboard="code"
      >
        {{ !copyState ? buttonText : buttonCopiedText }}
      </v-button>
    </header>
    <pre
      :class="`vuetiful-code-block-pre ${preventOverflow ? 'whitespace-pre-wrap break-all' : 'overflow-auto'} ${classPreMerged}`"
    ><code :class="`vuetiful-code-block-code language-${language} ${classCode}`" v-html="highlight(code, language)"></code></pre>
  </div>
</template>
