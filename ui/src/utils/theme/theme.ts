import { readonly, Ref, ref } from "vue";
import { usePlatform } from "../platform/platform";

const { isBrowser } = usePlatform();

interface Theme {
  name: string;
  url?: string;
}

const THEMES = {
  VUETIFUL: "vuetiful",
  ROCKET: "rocket",
  SAHARA: "sahara",
  SEAFOAM: "seafoam",
  SEASONAL: "seasonal",
  SKELETON: "skeleton",
  VINTAGE: "vintage",
};

const builtInThemes: Array<Theme> = [
  { name: THEMES.VUETIFUL },
  { name: THEMES.ROCKET },
  { name: THEMES.SAHARA },
  { name: THEMES.SEAFOAM },
  { name: THEMES.SEASONAL },
  { name: THEMES.SKELETON},
  { name: THEMES.VINTAGE },
];

const themes: Ref<Array<Theme>> = ref([...builtInThemes]);

const defaultTheme = THEMES.VUETIFUL;
const chosenTheme = ref(defaultTheme);

const useTheme = () => {
  const setTheme = (name: string): void => {
    const theme = themes.value.find((t) => t.name === name);
    if (!theme) return;

    if (isBrowser) {
      localStorage.setItem("vuetiful-theme", theme.name);
      document.body.setAttribute("data-theme", theme.name);
    }
  };

  const initializeTheme = (callback?: Function): void => {
    if (isBrowser) {
      const storedTheme = localStorage.getItem("vuetiful-theme");
      if (storedTheme) loadTheme(storedTheme, callback);
      else loadTheme(defaultTheme, callback);
    }
  };

  const loadTheme = (themeName: string, callback?: Function) => {
    let themeToLoad = themes.value.find((t) => t.name === themeName);
    if (!themeToLoad)
      themeToLoad = themes.value.find((t) => t.name === defaultTheme) || themes.value[0];

    const theme: Theme = themeToLoad;
    chosenTheme.value = theme.name;

    const existingStyle = document.getElementById("theme");
    let themeUrl = theme.url;
    if (!themeUrl) {
      themeUrl = `https://code-coaching.dev/vuetiful-themes/theme-${theme.name}.css`;
    }

    const link = document.createElement("link");
    link.id = "theme";
    link.href = themeUrl;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.onload = () => {
      if (existingStyle) existingStyle.remove();
      setTheme(theme.name);
      if (callback) {
        callback();
      }
    };

    const head = document.querySelector("head");
    if (head) head.appendChild(link);
  };

  const registerAllBuiltInThemes = (): Array<Theme> => {
    return [...builtInThemes];
  };

  const registerTheme = (name: string, url?: string): Theme => {
    if (url) return { url, name };
    return { name };
  };

  const overwriteThemes = (newThemes: Array<Theme>): void => {
    themes.value = [...newThemes];
  };

  return {
    themes: readonly(themes),
    chosenTheme: readonly(chosenTheme),

    initializeTheme,
    loadTheme,

    THEMES,
    overwriteThemes,
    registerAllBuiltInThemes,
    registerTheme,
  };
};

export { useTheme };
