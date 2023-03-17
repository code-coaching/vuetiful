import { readonly, ref } from "vue";
import { usePlatform } from "../platform/platform";

const { isBrowser } = usePlatform();

const useTheme = () => {
  const themes = ["vuetiful", "modern", "rocket", "sahara", "seafoam", "seasonal", "test", "vintage"];
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

  const initializeTheme = (): void => {
    if (isBrowser) {
      const themeName = localStorage.getItem("vuetiful-theme") ?? "vuetiful";
      if (themeName) setTheme(themeName);
    }
  };

  return {
    theme: readonly(theme),
    themes,
    setTheme,
    initializeTheme,
  };
};

export { useTheme };
