import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

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
      test('should set the theme to the default theme if no theme is stored', async () => {
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
        test('should set the theme to the default theme', async () => {
          const platform = await import('../platform/platform.service');
          vi.spyOn(platform, 'usePlatform').mockReturnValueOnce({
            isBrowser: true,
          });

          const localStorageSpy = vi.spyOn(window.localStorage, 'getItem');

          const { useTheme } = await import('./theme.service');
          const { initializeTheme, themeArray, chosenTheme } = useTheme();

          initializeTheme();

          expect(localStorageSpy).not.toHaveBeenCalled();
          expect(chosenTheme.value.name).toBe(themeArray[0].name);
        });
      });

      describe('given a theme is stored', () => {
        test('should set the theme to the stored theme', async () => {
          const platform = await import('../platform/platform.service');
          vi.spyOn(platform, 'usePlatform').mockReturnValueOnce({
            isBrowser: true,
          });

          const { useTheme } = await import('./theme.service');
          const { initializeTheme, themeArray, chosenTheme } = useTheme();

          const customTheme = JSON.parse(JSON.stringify(themeArray[1]));
          customTheme.name = 'rocket';

          const localStorageSpy = vi.spyOn(window.localStorage, 'getItem');

          document.cookie = 'vuetiful-theme=rocket';
          initializeTheme();

          expect(localStorageSpy).not.toHaveBeenCalled();
          expect(chosenTheme.value).toEqual(customTheme);
        });
      });

      describe('given the theme cookie is not a known theme', () => {
        test('should set the theme to the default theme', async () => {
          const platform = await import('../platform/platform.service');
          vi.spyOn(platform, 'usePlatform').mockReturnValueOnce({
            isBrowser: true,
          });

          const { useTheme } = await import('./theme.service');
          const { initializeTheme, themeArray, chosenTheme } = useTheme();

          const localStorageSpy = vi.spyOn(window.localStorage, 'getItem');

          document.cookie = 'vuetiful-theme=not-a-theme';
          initializeTheme();

          expect(localStorageSpy).not.toHaveBeenCalled();
          expect(chosenTheme.value).toEqual(themeArray[0]);
        });
      });

      describe('given the theme is set to custom', () => {
        test('should set the custom theme from local storage', async () => {
          const platform = await import('../platform/platform.service');
          vi.spyOn(platform, 'usePlatform').mockReturnValueOnce({
            isBrowser: true,
          });

          const { useTheme } = await import('./theme.service');
          const { initializeTheme, themeArray, chosenTheme } = useTheme();

          const localStorageSpy = vi.spyOn(window.localStorage, 'getItem');
          const customTheme = JSON.parse(JSON.stringify(themeArray[0]));
          customTheme.name = 'custom';
          localStorageSpy.mockReturnValueOnce(JSON.stringify(customTheme));

          document.cookie = 'vuetiful-theme=custom';
          initializeTheme();

          expect(localStorageSpy).toHaveBeenCalledWith('vuetiful-custom-theme');
          expect(chosenTheme.value).toEqual(customTheme);
        });

        test('should set the default theme if an invalid theme is stored', async () => {
          const platform = await import('../platform/platform.service');
          vi.spyOn(platform, 'usePlatform').mockReturnValueOnce({
            isBrowser: true,
          });

          const { useTheme } = await import('./theme.service');
          const { initializeTheme, themeArray, chosenTheme } = useTheme();

          const localStorageSpy = vi.spyOn(window.localStorage, 'getItem');
          localStorageSpy.mockReturnValueOnce('not-a-theme');

          document.cookie = 'vuetiful-theme=custom';
          initializeTheme();

          expect(localStorageSpy).toHaveBeenCalledWith('vuetiful-custom-theme');
          expect(chosenTheme.value).toEqual(themeArray[0]);
        })

        test('should set the default theme if no theme is stored', async () => {
          const platform = await import('../platform/platform.service');
          vi.spyOn(platform, 'usePlatform').mockReturnValueOnce({
            isBrowser: true,
          });

          const { useTheme } = await import('./theme.service');
          const { initializeTheme, themeArray, chosenTheme } = useTheme();

          const localStorageSpy = vi.spyOn(window.localStorage, 'getItem');
          localStorageSpy.mockReturnValueOnce(null);

          document.cookie = 'vuetiful-theme=custom';
          initializeTheme();

          expect(localStorageSpy).toHaveBeenCalledWith('vuetiful-custom-theme');
          expect(chosenTheme.value).toEqual(themeArray[0]);
        })
      });

    });
  });

  describe('registerTheme', () => {
    test('should register a theme', async () => {
      const { useTheme } = await import('./theme.service');
      const { registerTheme, themeArray } = useTheme();

      const newTheme = JSON.parse(JSON.stringify(themeArray[0]));
      newTheme.name = 'new-theme';

      registerTheme(newTheme);
      expect(themeArray).toContain(newTheme);
    });

    describe('given the theme is already registered', () => {
      test('should update the theme', async () => {
        const { useTheme } = await import('./theme.service');
        const { registerTheme, themeArray } = useTheme();

        const newTheme = JSON.parse(JSON.stringify(themeArray[0]));
        newTheme.customCss = 'new-custom-css';

        registerTheme(newTheme);

        expect(themeArray.find((theme) => theme.name === newTheme.name)).toEqual(newTheme);
      });
    });
  });

  describe('getThemeFromCookie', () => {
    describe('given there is no cookie', () => {
      test('should return default theme', async () => {
        const { useTheme } = await import('./theme.service');
        const { getThemeFromCookie, themeArray } = useTheme();

        const cookie = '';
        const theme = getThemeFromCookie(cookie);

        expect(theme).toEqual(themeArray[0]);
      });
    });

    describe('given there is a cookie', () => {
      test('should return the theme', async () => {
        const { useTheme } = await import('./theme.service');
        const { getThemeFromCookie, themeArray } = useTheme();

        const cookie = 'vuetiful-theme=rocket';

        const theme = getThemeFromCookie(cookie);

        const rocketTheme = themeArray.find((theme) => theme.name === 'rocket');
        expect(theme).toEqual(rocketTheme);
      });
    });
  });

  describe('applyThemeSSR', () => {
    test('should apply the theme', async () => {
      const { useTheme } = await import('./theme.service');
      const { applyThemeSSR, themeArray } = useTheme();

      const theme = themeArray[0];

      const preHtml = '<html><head></head><body></body></html>';
      const html = applyThemeSSR(preHtml, theme);

      const style = html.includes('id="vuetiful-theme"');
      expect(style).toBe(true);
      const body = html.includes('data-theme="vuetiful"');
      expect(body).toBe(true);
    });
  });
});
