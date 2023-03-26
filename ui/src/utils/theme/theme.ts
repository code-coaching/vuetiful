import { readonly, Ref, ref } from "vue";
import { usePlatform } from "../platform/platform";

const { isBrowser } = usePlatform();

interface Theme {
  name: string;
  url: string;
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

const builtInUrl = (name: string): string => {
  return `https://code-coaching.dev/vuetiful-themes/theme-${name}.css`;
};

const builtInThemes: Array<Theme> = [
  { name: THEMES.VUETIFUL, url: builtInUrl(`${THEMES.VUETIFUL}-0.0.1`) },
  { name: THEMES.ROCKET, url: builtInUrl(`${THEMES.ROCKET}`) },
  { name: THEMES.SAHARA, url: builtInUrl(`${THEMES.SAHARA}`) },
  { name: THEMES.SEAFOAM, url: builtInUrl(`${THEMES.SEAFOAM}`) },
  { name: THEMES.SEASONAL, url: builtInUrl(`${THEMES.SEASONAL}`) },
  { name: THEMES.SKELETON, url: builtInUrl(`${THEMES.SKELETON}`) },
  { name: THEMES.VINTAGE, url: builtInUrl(`${THEMES.VINTAGE}`) },
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

  const registerTheme = (name: string, url: string): Theme => {
    return { url, name };
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
