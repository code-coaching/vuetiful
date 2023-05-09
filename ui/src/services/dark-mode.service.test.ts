import { afterEach, describe, expect, it, vi } from "vitest";

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
};
const matchMediaMock = (matches: boolean) => vi.fn(() => ({ matches, onchange: vi.fn() }));

describe("useDarkMode", () => {
  afterEach(() => {
    vi.resetModules();
  });
  describe("getModeUserPrefers", () => {
    describe("given not in browser", () => {
      it("should return default modeUserPrefers", async () => {
        const platform = await import("../utils/platform/platform.service");
        vi.spyOn(platform, "usePlatform").mockReturnValueOnce({ isBrowser: false });

        const { useDarkMode } = await import("./dark-mode.service");
        const { getModeUserPrefers } = useDarkMode();
        expect(getModeUserPrefers()).toBe(undefined);
      });
    });

    describe("given in browser", () => {
      describe("given no modeUserPrefers in localStorage", () => {
        it("should return default modeUserPrefers", async () => {
          const platform = await import("../utils/platform/platform.service");
          vi.spyOn(platform, "usePlatform").mockReturnValueOnce({ isBrowser: true });

          const { useDarkMode } = await import("./dark-mode.service");
          const { getModeUserPrefers } = useDarkMode();

          window.localStorage = localStorageMock as any;
          vi.spyOn(window.localStorage, "getItem").mockReturnValueOnce(null);

          expect(getModeUserPrefers()).toBe(undefined);
        });
      });
      describe("given modeUserPrefers in localStorage", () => {
        it("should return the value", async () => {
          const platform = await import("../utils/platform/platform.service");
          vi.spyOn(platform, "usePlatform").mockReturnValueOnce({ isBrowser: true });

          const { useDarkMode } = await import("./dark-mode.service");
          const { getModeUserPrefers } = useDarkMode();

          window.localStorage = localStorageMock as any;
          vi.spyOn(window.localStorage, "getItem").mockReturnValueOnce("true");

          expect(getModeUserPrefers()).toBe(true);
        });
      });
    });
  });

  describe("getModeOsPrefers", () => {
    describe("given not in browser", () => {
      it("should return default modeOsPrefers", async () => {
        const platform = await import("../utils/platform/platform.service");
        vi.spyOn(platform, "usePlatform").mockReturnValueOnce({ isBrowser: false });

        const { useDarkMode } = await import("./dark-mode.service");
        const { getModeOsPrefers } = useDarkMode();
        expect(getModeOsPrefers()).toBe(false);
      });
    });

    describe("given in browser", () => {
      describe("given prefers-color-scheme: light", () => {
        it("should return true", async () => {
          const platform = await import("../utils/platform/platform.service");
          vi.spyOn(platform, "usePlatform").mockReturnValueOnce({ isBrowser: true });
          const localStorageSpy = vi.spyOn(window.localStorage, "setItem");

          const { useDarkMode } = await import("./dark-mode.service");
          const { getModeOsPrefers, MODE } = useDarkMode();

          window.matchMedia = matchMediaMock(MODE.LIGHT) as any;
          expect(getModeOsPrefers()).toBe(MODE.LIGHT);
          expect(localStorageSpy).toHaveBeenCalledWith("modeOsPrefers", "true");
        });
      });
      describe("given prefers-color-scheme: dark", () => {
        it("should return false", async () => {
          const platform = await import("../utils/platform/platform.service");
          vi.spyOn(platform, "usePlatform").mockReturnValueOnce({ isBrowser: true });
          const localStorageSpy = vi.spyOn(window.localStorage, "setItem");

          const { useDarkMode } = await import("./dark-mode.service");
          const { getModeOsPrefers, MODE } = useDarkMode();

          window.matchMedia = matchMediaMock(MODE.DARK) as any;
          expect(getModeOsPrefers()).toBe(MODE.DARK);
          expect(localStorageSpy).toHaveBeenCalledWith("modeOsPrefers", "false");
        });
      });
    });
  });

  describe("getModeAutoPrefers", () => {
    describe("given not in browser", () => {
      it("should return default modeAutoPrefers", async () => {
        const platform = await import("../utils/platform/platform.service");
        vi.spyOn(platform, "usePlatform").mockReturnValueOnce({ isBrowser: false });

        const { useDarkMode } = await import("./dark-mode.service");
        const { getModeAutoPrefers } = useDarkMode();
        expect(getModeAutoPrefers()).toBe(false);
      });
    });

    describe("given in browser", () => {
      describe("given no modeUserPrefers in localStorage", () => {
        it("should return default modeAutoPrefers", async () => {
          const platform = await import("../utils/platform/platform.service");
          vi.spyOn(platform, "usePlatform").mockReturnValueOnce({ isBrowser: true });

          const { useDarkMode } = await import("./dark-mode.service");
          const { getModeAutoPrefers } = useDarkMode();

          window.localStorage = localStorageMock as any;
          vi.spyOn(window.localStorage, "getItem").mockReturnValueOnce(null);

          expect(getModeAutoPrefers()).toBe(false);
        });
      });
      describe("given modeUserPrefers in localStorage", () => {
        it("should return the value", async () => {
          const platform = await import("../utils/platform/platform.service");
          vi.spyOn(platform, "usePlatform").mockReturnValueOnce({ isBrowser: true });

          const { useDarkMode } = await import("./dark-mode.service");
          const { getModeAutoPrefers } = useDarkMode();

          window.localStorage = localStorageMock as any;
          vi.spyOn(window.localStorage, "getItem").mockReturnValueOnce("true");

          expect(getModeAutoPrefers()).toBe(true);
        });
      });
    });
  });

  describe("setModeUserPrefers", () => {
    describe("given not in browser", () => {
      it("should set modeUserPrefers", async () => {
        const platform = await import("../utils/platform/platform.service");
        vi.spyOn(platform, "usePlatform").mockReturnValueOnce({ isBrowser: false });
        vi.spyOn(window.localStorage, "setItem");

        const { useDarkMode } = await import("./dark-mode.service");
        const { setModeUserPrefers, modeUserPrefers } = useDarkMode();

        setModeUserPrefers(true);
        expect(modeUserPrefers.value).toBe(true);
        expect(window.localStorage.setItem).not.toHaveBeenCalled();
      });
    });

    describe("given in browser", () => {
      it("should set modeUserPrefers and localStorage", async () => {
        const platform = await import("../utils/platform/platform.service");
        vi.spyOn(platform, "usePlatform").mockReturnValueOnce({ isBrowser: true });

        const { useDarkMode } = await import("./dark-mode.service");
        const { setModeUserPrefers, modeUserPrefers } = useDarkMode();

        const localStorageSpy = vi.spyOn(window.localStorage, "setItem");

        setModeUserPrefers(true);
        expect(modeUserPrefers.value).toBe(true);
        expect(localStorageSpy).toHaveBeenCalledWith("modeUserPrefers", "true");
      });
    });
  });

  describe("setModeCurrent", () => {
    it("light mode set", async () => {
      const { useDarkMode } = await import("./dark-mode.service");
      const { setModeCurrent, currentMode, MODE } = useDarkMode();

      setModeCurrent(MODE.LIGHT);
      expect(currentMode.value).toBe(MODE.LIGHT);
      expect(document.documentElement.classList.contains("dark")).toBe(false);
    });
    it("dark mode set", async () => {
      const { useDarkMode } = await import("./dark-mode.service");
      const { setModeCurrent, currentMode, MODE } = useDarkMode();

      setModeCurrent(MODE.DARK);
      expect(currentMode.value).toBe(MODE.DARK);
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });
  });

  describe("initializeMode", () => {
    it("should set currentMode", async () => {
      const { useDarkMode } = await import("./dark-mode.service");
      const { initializeMode, currentMode, getModeAutoPrefers } = useDarkMode();

      const mode = getModeAutoPrefers();
      initializeMode();
      expect(currentMode.value).toBe(mode);
    });
  });

  describe("autoModeWatcher", () => {
    describe("given mode changes", () => {
      it("should set modeCurrent", async () => {
        const { useDarkMode } = await import("./dark-mode.service");
        const darkMode = useDarkMode();

        const mql = {
          matches: true,
          onchange: () => {
            darkMode.setModeCurrent(mql.matches);
          },
        };
        vi.spyOn(window, "matchMedia").mockReturnValueOnce(mql as any);

        darkMode.autoModeWatcher();

        mql.matches = false;
        mql.onchange?.();
        expect(darkMode.currentMode.value).toBe(false);

        mql.matches = true;
        mql.onchange?.();
        expect(darkMode.currentMode.value).toBe(true);
      });
    });
  });
});
