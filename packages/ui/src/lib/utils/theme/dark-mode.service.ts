import { computed, readonly, ref } from 'vue';
import { usePlatform } from '../platform/platform.service';

const { isBrowser } = usePlatform();

const MODE = {
  LIGHT: 'light',
  DARK: 'dark',
};
export type Mode = (typeof MODE)[keyof typeof MODE];

const defaultMode = MODE.DARK;
const chosenMode = ref(defaultMode);
const isDark = computed(() => chosenMode.value === MODE.DARK);

const useDarkMode = () => {
  const getModeFromCookie = (cookies: string) => {
    const cookie = cookies.split(';').find((c) => c.trim().startsWith('vuetiful-mode='));
    if (cookie) {
      const value = cookie.split('=')[1];
      return value;
    }
    return defaultMode;
  };

  const applyModeSSR = (html: string, mode: Mode): string => {
    if (mode === MODE.DARK) html = html.replace('<html', '<html class="dark"');
    return html;
  };

  const initializeMode = () => {
    if (isBrowser) {
      const mode = getModeFromCookie(document.cookie);
      applyMode(mode);
    }
  };

  const applyMode = (value: Mode) => {
    const elemHtmlClasses = document.documentElement.classList;
    const classDark = 'dark';
    value === MODE.LIGHT ? elemHtmlClasses.remove(classDark) : elemHtmlClasses.add(classDark);
    if (isBrowser) {
      document.cookie = `vuetiful-mode=${value};path=/;max-age=31536000;SameSite=Lax`;
    }
    chosenMode.value = value;
  };

  const autoModeWatcher = (): void => {
    const mql = window.matchMedia('(prefers-color-scheme: light)');
    const setMode = (value: boolean) => {
      const elemHtmlClasses = document.documentElement.classList;
      const classDark = `dark`;
      const mode = value ? MODE.LIGHT : MODE.DARK;
      mode === MODE.LIGHT ? elemHtmlClasses.remove(classDark) : elemHtmlClasses.add(classDark);
      applyMode(mode);
    };
    setMode(mql.matches);
    mql.onchange = () => {
      setMode(mql.matches);
    };
  };

  return {
    chosenMode,
    isDark: readonly(isDark),
    initializeMode,
    applyMode,
    autoModeWatcher,
    applyModeSSR,
    getModeFromCookie,
    MODE,
  };
};

export { useDarkMode };
