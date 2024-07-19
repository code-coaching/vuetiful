import hljs from 'highlight.js';

const highlighter = hljs;

const useHighlight = () => {
  const highlight = (code: string, language: string) => {
    if (language && highlighter.getLanguage(language)) {
      return highlighter.highlight(code, { language }).value.trim();
    } else {
      return highlighter.highlightAuto(code).value.trim();
    }
  };

  return {
    highlight,
  };
};

export { useHighlight };
