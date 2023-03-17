import { readonly, Ref, ref } from "vue";
import { usePlatform } from "../platform/platform";

const { isBrowser } = usePlatform();

const MODE = {
  LIGHT: true,
  DARK: false,
};

const modeOsPrefers = ref(MODE.DARK);
const currentMode = ref(MODE.DARK);
const modeUserPrefers: Ref<boolean | undefined> = ref(undefined);

const useDarkMode = () => {
  const getModeOsPrefers = (): boolean => {
    const prefersLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
    console.log("p: ", prefersLightMode);
    setModeOsPrefers(prefersLightMode);
    return prefersLightMode;
  };

  const getModeUserPrefers = (): boolean | undefined => {
    if (isBrowser) {
      const mode = localStorage.getItem("modeUserPrefers");
      if (mode !== null) modeUserPrefers.value = mode === "true";
    }
    return modeUserPrefers.value;
  };

  const getModeAutoPrefers = (): boolean => {
    const os = getModeOsPrefers();
    const user = getModeUserPrefers();
    console.log("user: ", user);
    const modeValue = user !== undefined ? user : os;
    console.log("modeValue: ", modeValue);
    return modeValue;
  };

  const setModeOsPrefers = (value: boolean) => {
    modeOsPrefers.value = value;
    if (isBrowser) {
      localStorage.setItem("modeOsPrefers", value.toString());
    }
  };
  const setModeUserPrefers = (value: boolean): void => {
    modeUserPrefers.value = value;
    if (isBrowser) {
      localStorage.setItem("modeUserPrefers", value.toString());
    }
  };

  const setModeCurrent = (value: boolean) => {
    const elemHtmlClasses = document.documentElement.classList;
    const classDark = "dark";
    value === MODE.LIGHT ? elemHtmlClasses.remove(classDark) : elemHtmlClasses.add(classDark);
    currentMode.value = value;
    console.log("currentMode: ", currentMode.value);
  };

  const initializeMode = (): void => {
    const mode = getModeAutoPrefers();
    setModeCurrent(mode);
  };

  const autoModeWatcher = (): void => {
    const mql = window.matchMedia("(prefers-color-scheme: light)");
    const setMode = (value: boolean) => {
      const elemHtmlClasses = document.documentElement.classList;
      const classDark = `dark`;
      value === MODE.LIGHT ? elemHtmlClasses.remove(classDark) : elemHtmlClasses.add(classDark);
    };
    setMode(mql.matches);
    mql.onchange = () => {
      setMode(mql.matches);
    };
  };

  return {
    modeOsPrefers: readonly(modeOsPrefers),
    modeUserPrefers: readonly(modeUserPrefers),
    currentMode: readonly(currentMode),
    getModeOsPrefers,
    getModeUserPrefers,
    getModeAutoPrefers,
    setModeUserPrefers,
    setModeCurrent,
    autoModeWatcher,
    initializeMode,
    MODE,
  };
};

export { useDarkMode };
