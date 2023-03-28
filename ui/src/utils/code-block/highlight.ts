import hljs from "highlight.js";

const highlighter = hljs;

const useHighlight = () => {
  const highlight = (code: string, lang: string) => {
    if (lang && highlighter.getLanguage(lang)) {
      return highlighter.highlight(lang, code).value;
    } else {
      return highlighter.highlightAuto(code).value;
    }
  };

  return {
    highlight,
  };
};

export { useHighlight };
