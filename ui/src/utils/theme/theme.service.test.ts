import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Theme } from './theme.service';

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
};

describe('useTheme', () => {
  afterEach(() => {
    vi.resetModules();
  });
  describe('initializetheme', () => {
    describe('given not in browser', () => {
      it('should set the theme to the default theme if no theme is stored', async () => {
        const platform = await import('../platform/platform.service');
        vi.spyOn(platform, 'usePlatform').mockReturnValueOnce({
          isBrowser: false,
        });

        const localStorageSpy = vi.spyOn(window.localStorage, 'getItem');

        const { useTheme } = await import('./theme.service');
        const { initializeTheme } = useTheme();

        initializeTheme();

        expect(localStorageSpy).not.toHaveBeenCalled();
      });
    });

    describe('given in browser', () => {
      beforeEach(() => {
        window.localStorage = localStorageMock as any;
      });
      describe('given no theme is stored', () => {
        it('should set the theme to the default theme', async () => {
          const platform = await import('../platform/platform.service');
          vi.spyOn(platform, 'usePlatform').mockReturnValueOnce({
            isBrowser: true,
          });

          const localStorageSpy = vi.spyOn(window.localStorage, 'getItem');

          const { useTheme } = await import('./theme.service');
          const { initializeTheme, THEMES, chosenTheme } = useTheme();

          initializeTheme();

          expect(localStorageSpy).toHaveBeenCalledWith('vuetiful-theme');
          expect(chosenTheme.value).toBe(THEMES.VUETIFUL);
        });
      });
      describe('given a theme is stored', () => {
        it('should set the theme to the stored theme', async () => {
          const platform = await import('../platform/platform.service');
          vi.spyOn(platform, 'usePlatform').mockReturnValueOnce({
            isBrowser: true,
          });

          const { useTheme } = await import('./theme.service');
          const { initializeTheme, THEMES, chosenTheme } = useTheme();

          const localStorageSpy = vi.spyOn(window.localStorage, 'getItem');
          localStorageSpy.mockReturnValueOnce(THEMES.ROCKET);

          initializeTheme();

          expect(localStorageSpy).toHaveBeenCalledWith('vuetiful-theme');
          expect(chosenTheme.value).toBe(THEMES.ROCKET);
        });
      });

      describe('given the theme is not valid', () => {
        it('should set the theme to the default theme', async () => {
          const platform = await import('../platform/platform.service');
          vi.spyOn(platform, 'usePlatform').mockReturnValueOnce({
            isBrowser: true,
          });

          const { useTheme } = await import('./theme.service');
          const { initializeTheme, THEMES, chosenTheme } = useTheme();

          const localStorageSpy = vi.spyOn(window.localStorage, 'getItem');
          localStorageSpy.mockReturnValueOnce('invalid-theme');

          initializeTheme();

          expect(localStorageSpy).toHaveBeenCalledWith('vuetiful-theme');
          expect(chosenTheme.value).toBe(THEMES.VUETIFUL);
        });
      });
    });
  });

  describe('loadTheme', () => {
    describe('given theme name exists in themes', () => {
      it('should set the theme to the given theme', async () => {
        const { useTheme } = await import('./theme.service');
        const { loadTheme, THEMES, chosenTheme } = useTheme();

        loadTheme(THEMES.ROCKET);

        expect(chosenTheme.value).toBe(THEMES.ROCKET);
      });
    });
    describe('given theme name does not exist in themes', () => {
      it('should set the theme to the default theme', async () => {
        const { useTheme } = await import('./theme.service');
        const { loadTheme, THEMES, chosenTheme } = useTheme();

        loadTheme('invalid-theme');

        expect(chosenTheme.value).toBe(THEMES.VUETIFUL);
      });
    });
    describe('given default theme is not in themes', () => {
      it('should set the theme to the first theme in the themes object', async () => {
        const { useTheme } = await import('./theme.service');
        const { loadTheme, THEMES, chosenTheme, overwriteThemes, themes } = useTheme();

        const theme: Theme = { name: 'fake theme', url: '' };
        overwriteThemes([themes.value[1], theme]);

        loadTheme('invalid-theme');

        expect(chosenTheme.value).toBe(themes.value[0].name);
      });
    });
  });

  describe('registerAllBuiltInThemes', () => {
    it('should register all built in themes', async () => {
      const { useTheme } = await import('./theme.service');
      const { registerAllBuiltInThemes, THEMES, themes } = useTheme();

      registerAllBuiltInThemes();

      expect(themes.value).toHaveLength(Object.keys(THEMES).length);
    });
  });

  describe('registerTheme', () => {
    it('should register a theme', async () => {
      const { useTheme } = await import('./theme.service');
      const { registerTheme } = useTheme();

      const theme: Theme = { name: 'fake theme', url: '' };
      expect(registerTheme(theme.name, '')).toEqual(theme);
    });
  });

  describe('saveThemeToStorage', () => {
    describe('given the theme does not exist', () => {
      it('should not save the theme to storage', async () => {
        const { useTheme } = await import('./theme.service');
        const { saveThemeToStorage } = useTheme();

        const localStorageSpy = vi.spyOn(window.localStorage, 'setItem');

        saveThemeToStorage('invalid-theme');

        expect(localStorageSpy).not.toHaveBeenCalled();
      });
    });
  });
});
