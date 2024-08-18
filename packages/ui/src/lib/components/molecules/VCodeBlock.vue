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

interface CodeBlockProps {
  class: string;
  language: string;
  code: string;
  fileName: string;
  preventOverflow: boolean;
  classHeader: string;
  classLanguage: string;
  classPre: string;
  classCode: string;
  classFileName: string;
  classButton: string;
  buttonText: string;
  buttonCopiedText: string;
}

const props = withDefaults(defineProps<CodeBlockProps>(), {
  class: '',
  language: 'plaintext',
  code: '',
  fileName: '',
  preventOverflow: false,
  classHeader: '',
  classLanguage: '',
  classPre: '',
  classCode: '',
  classFileName: '',
  classButton: '',
  buttonText: 'Copy',
  buttonCopiedText: '👍',
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

const classHeaderDefault = 'flex items-center justify-between p-2 pb-0 pl-4 text-xs text-[#a4a4a4]';
const classHeaderMerged = computed(() => tm(classHeaderDefault, props.classHeader));

const classButtonDefault = 'bg-[#171717] text-[#a4a4a4] dark:bg-[#171717] dark:text-[#a4a4a4]';
const classButtonMerged = computed(() => tm(classButtonDefault, props.classButton));

const classPreDefault = 'rounded-t-none bg-transparent p-4 pt-0';
const classPreMerged = computed(() => tm(classPreDefault, props.classPre));

const classFileNameDefault = 'text-[#a4a4a4] border-b border-b-[#a4a4a4]';
const classFileNameMerged = computed(() => tm(classFileNameDefault, props.classFileName));

const classLanguageDefault = 'uppercase';
const classLanguageMerged = computed(() => tm(classLanguageDefault, props.classLanguage));
</script>

<template v-if="language && code">
  <div :class="`vuetiful-code-block ${classRootMerged}`">
    <header :class="`vuetiful-code-block-header ${classHeaderMerged}`">
      <span :class="`vuetiful-code-block-language ${classLanguageMerged}`">{{
        languageFormatter(language)
      }}</span>
      <div v-if="fileName" :class="`vuetiful-code-block-file ${classFileNameMerged}`">
        {{ fileName }}
      </div>
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
