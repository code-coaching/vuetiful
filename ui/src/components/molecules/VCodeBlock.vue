<script setup lang="ts">
import { CssClasses, VButton, useSettings, vClipboard } from "@/index";
import { unstyledProp } from "@/props";
import { useHighlight } from "@/services/highlight.service";
import "highlight.js/styles/github-dark.css";
import { ref } from "vue";

const { highlight } = useHighlight();

const props = defineProps({
  language: {
    type: String,
    default: "plaintext",
  },
  code: {
    type: String,
    default: "",
  },

  preventOverflow: {
    type: Boolean,
    default: false,
  },

  classHeader: {
    type: String as () => CssClasses,
    default: "",
  },
  classLanguage: {
    type: String as () => CssClasses,
    default: "",
  },
  classPre: {
    type: String as () => CssClasses,
    default: "",
  },
  classCode: {
    type: String as () => CssClasses,
    default: "",
  },

  classButton: {
    type: String as () => CssClasses,
    default: "",
  },
  buttonText: {
    type: String,
    default: "Copy",
  },
  buttonCopiedText: {
    type: String,
    default: "👍",
  },

  unstyled: unstyledProp,
});

const emit = defineEmits<{
  (event: "copy"): void;
}>();

const copyState = ref(false);

// Allow shorthand alias, but show full text in UI
function languageFormatter(lang: string): string {
  if (lang === "js") return "javascript";
  if (lang === "ts") return "typescript";
  if (["sh", "bash", "zsh", "shell"].includes(lang)) return "console";
  return lang;
}

function onCopyClick() {
  copyState.value = true;
  setTimeout(() => {
    copyState.value = false;
  }, 2000);
  emit("copy");
}

const { settings } = useSettings();
const isUnstyled =
  settings.global.unstyled || settings.components.codeBlock.unstyled || props.unstyled;
</script>

<template v-if="language && code">
  <div
    :class="`vuetiful-code-block code-block ${
      isUnstyled
        ? ''
        : 'max-w-full bg-[#171717] text-sm text-white shadow rounded-container-token'
    }`"
  >
    <header
      :class="`vuetiful-code-block-header ${
        isUnstyled
          ? ''
          : 'flex items-center justify-between p-2 pb-0 pl-4 text-xs uppercase text-[#a4a4a4]'
      } ${classHeader}`"
    >
      <span :class="`vuetiful-code-block-language ${classLanguage}`">{{
        languageFormatter(language)
      }}</span>
      <v-button
        size="sm"
        :class="`vuetiful-code-block-button ${
          classButton ? classButton : 'bg-[#171717] dark:bg-[#171717] text-[#a4a4a4] dark:text-[#a4a4a4]'
        }`"
        @click="onCopyClick()"
        v-clipboard="code"
      >
        {{ !copyState ? buttonText : buttonCopiedText }}
      </v-button>
    </header>
    <pre
      :class="`vuetiful-code-block-pre ${
        isUnstyled ? '' : '!rounded-t-none bg-transparent p-4 !pt-0'
      } ${preventOverflow ? 'whitespace-pre-wrap break-all' : 'overflow-auto'} ${classPre}`"
    ><code :class="`vuetiful-code-block-code language-${language} ${classCode}`" v-html="highlight(code, language)"></code></pre>
  </div>
</template>
