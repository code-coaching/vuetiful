import { afterEach, describe, expect, vi, test } from 'vitest';

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
};
const matchMediaMock = (matches: boolean) => vi.fn(() => ({ matches, onchange: vi.fn() }));

describe('useDarkMode', () => {
  afterEach(() => {
    vi.resetModules();
  });

  describe('applyMode', () => {
    test('light mode set', async () => {
      const { useDarkMode } = await import('./dark-mode.service');
      const { applyMode, chosenMode, MODE } = useDarkMode();

      applyMode(MODE.LIGHT);
      expect(chosenMode.value).toBe(MODE.LIGHT);
      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });
    test('dark mode set', async () => {
      const { useDarkMode } = await import('./dark-mode.service');
      const { applyMode, chosenMode, MODE } = useDarkMode();

      applyMode(MODE.DARK);
      expect(chosenMode.value).toBe(MODE.DARK);
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });
  });

  describe('autoModeWatcher', () => {
    describe('given mode changes', () => {
      test('should set modeCurrent', async () => {
        const { useDarkMode } = await import('./dark-mode.service');
        const darkMode = useDarkMode();

        const mql = {
          matches: true,
          onchange: () => {
            const mode = mql.matches ? darkMode.MODE.LIGHT : darkMode.MODE.DARK;
            darkMode.applyMode(mode);
          },
        };
        vi.spyOn(window, 'matchMedia').mockReturnValueOnce(mql as any);

        darkMode.autoModeWatcher();

        mql.matches = false;
        mql.onchange?.();
        expect(darkMode.chosenMode.value).toBe('dark');

        mql.matches = true;
        mql.onchange?.();
        expect(darkMode.chosenMode.value).toBe('light');
      });
    });
  });

  describe('applyModeSSR', () => {
    test('should add dark class to html tag', async () => {
      const { useDarkMode } = await import('./dark-mode.service');
      const darkMode = useDarkMode();

      const html = '<html>';
      const mode = darkMode.MODE.DARK;
      const result = darkMode.applyModeSSR(html, mode);
      expect(result).toBe('<html class="dark">');
    });
  });

  describe('getModeFromCookie', () => {
    test('should return default mode if cookie is not set', async () => {
      const { useDarkMode } = await import('./dark-mode.service');
      const darkMode = useDarkMode();

      const cookies = '';
      const result = darkMode.getModeFromCookie(cookies);
      expect(result).toBe('dark');
    });
    test('should return mode from cookie', async () => {
      const { useDarkMode } = await import('./dark-mode.service');
      const darkMode = useDarkMode();

      const cookies = 'vuetiful-mode=light';
      const result = darkMode.getModeFromCookie(cookies);
      expect(result).toBe('light');
    });
  });

  describe('initializeMode', () => {
    test('should set mode from cookie', async () => {
      const { useDarkMode } = await import('./dark-mode.service');
      const darkMode = useDarkMode();

      const cookies = 'vuetiful-mode=dark';
      vi.spyOn(document, 'cookie', 'get').mockReturnValueOnce(cookies);

      darkMode.initializeMode();
      expect(darkMode.chosenMode.value).toBe('dark');
    });
  });
});
