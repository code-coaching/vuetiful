import { readonly, ref } from "vue";
import { usePlatform } from "../platform/platform";

const { isBrowser } = usePlatform();
const chosenTheme = ref("vuetiful");

const useTheme = () => {
  const themes = ["vuetiful", "modern", "rocket", "sahara", "seafoam", "seasonal", "vintage"];
  const theme = ref("vuetiful");

  const setTheme = (name: string): void => {
    theme.value = name;
    if (isBrowser) {
      localStorage.setItem("vuetiful-theme", name);
      applyTheme(name);
    }
  };

  const applyTheme = (name: string): void => {
    document.body.setAttribute("data-theme", name);
  };

  const initializeTheme = (callback?: Function): void => {
    if (isBrowser) {
      const themeName = localStorage.getItem("vuetiful-theme") ?? "vuetiful";
      if (themeName) loadTheme(themeName, callback);
    }
  };

  const loadTheme = (theme: string, callback?: Function) => {
    chosenTheme.value = theme;
    const existingStyle = document.getElementById("theme");

    const themeUrl = `https://code-coaching.dev/vuetiful-themes/theme-${theme}.css`;

    const link = document.createElement("link");
    link.id = "theme";
    link.href = themeUrl;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.onload = () => {
      if (existingStyle) existingStyle.remove();
      setTheme(theme);
      if (callback) {
        callback();
        console.log("callback")
      }
    };

    const head = document.querySelector("head");
    if (head) head.appendChild(link);
  };

  return {
    theme: readonly(theme),
    themes: readonly(themes),
    chosenTheme: readonly(chosenTheme),

    setTheme,
    initializeTheme,
    loadTheme,
  };
};

export { useTheme };
