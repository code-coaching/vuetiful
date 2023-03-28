<script setup lang="ts">
import { CssClasses, vClipboard } from "@/index";
import "highlight.js/styles/github-dark.css";
import { computed, ref, useAttrs } from "vue";
import { useHighlight } from "./highlight";

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
  background: {
    type: String as () => CssClasses,
    default: "bg-neutral-900/90",
  },
  blur: {
    type: String as () => CssClasses,
    default: "",
  },
  text: {
    type: String as () => CssClasses,
    default: "text-sm",
  },
  color: {
    type: String as () => CssClasses,
    default: "text-white",
  },
  rounded: {
    type: String as () => CssClasses,
    default: "rounded-container-token",
  },
  shadow: {
    type: String as () => CssClasses,
    default: "shadow",
  },

  button: {
    type: String as () => CssClasses,
    default: "btn btn-sm variant-soft !text-white",
  },
  buttonLabel: {
    type: String,
    default: "Copy",
  },
  buttonCopied: {
    type: String,
    default: "👍",
  },
});

const attrs = useAttrs();
const emit = defineEmits<{
  (event: "copy"): void;
}>();

const cBase = "overflow-hidden shadow";
const cHeader = "text-xs text-white/50 uppercase flex justify-between items-center p-2 pl-4 pb-0";
const cPre = "whitespace-pre-wrap break-all p-4 pt-1";

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

// Reactive
const classesBase = computed(
  () =>
    `${cBase} ${props.background} ${props.blur} ${props.text} ${props.color} ${props.rounded} ${
      props.shadow
    } ${attrs.class ?? ""}`
);
</script>

<!-- prettier-ignore -->
<template>
	<div v-if="language && code">
		<div :class="`code-block ${classesBase}`" data-testid="code-block">
			<header :class="`code-block-header ${cHeader}`">
				<span :class="`code-block-language`">{{languageFormatter(language)}}</span>
				<button :class="`code-block-btn ${button}`" @click="onCopyClick()" v-clipboard="props.code">
					{{!copyState ? buttonLabel : buttonCopied}}
				</button>
			</header>
			<pre :class="`code-block-pre ${cPre}`"><code :class="`code-block-code language-${language}`" v-html="highlight(props.code, props.language)"></code></pre>
		</div>
	</div>
</template>
