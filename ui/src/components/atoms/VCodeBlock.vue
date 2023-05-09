<script setup lang="ts">
import { CssClasses, vClipboard } from "@/index";
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

  headerClass: {
    type: String as () => CssClasses,
    default: "",
  },
  preClass: {
    type: String as () => CssClasses,
    default: "",
  },

  buttonClass: {
    type: String as () => CssClasses,
    default: "btn btn-sm variant-soft !text-white",
  },
  buttonText: {
    type: String,
    default: "Copy",
  },
  buttonCopiedText: {
    type: String,
    default: "👍",
  },
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
</script>

<template v-if="language && code">
  <div class="code-block bg-neutral-900/90 text-sm text-white shadow rounded-container-token">
    <header
      :class="`code-block-header flex items-center justify-between p-2 pb-0 pl-4 text-xs uppercase text-white/50 ${headerClass}`"
    >
      <span :class="`code-block-language`">{{ languageFormatter(language) }}</span>
      <button
        :class="`code-block-btn ${buttonClass}`"
        @click="onCopyClick()"
        v-clipboard="props.code"
      >
        {{ !copyState ? buttonText : buttonCopiedText }}
      </button>
    </header>
    <pre
      :class="`code-block-pre ${
        preventOverflow ? 'whitespace-pre-wrap break-all' : 'overflow-auto'
      } p-4 pt-1 ${preClass}`"
    ><code :class="`code-block-code language-${language}`" v-html="highlight(props.code, props.language)"></code></pre>
  </div>
</template>
