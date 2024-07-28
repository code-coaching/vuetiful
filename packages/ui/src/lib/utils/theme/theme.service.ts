import type { Theme, ThemeProperties } from '@skeletonlabs/skeleton/themes';
import { ref, type Ref } from 'vue';
import { usePlatform } from '../platform/platform.service';
import { themes, themeArray } from './themes';

const { isBrowser } = usePlatform();
const chosenTheme: Ref<Theme> = ref(themeArray[0]);

const useTheme = () => {
  const changeDataTheme = (name: string) => document.body.setAttribute('data-theme', name);

  const getThemeFromCookie = (cookies: string): Theme => {
    const themeName = getThemeNameFromCookie(cookies);
    const theme = themeArray.find((t) => t.name === themeName);
    if (theme) return theme;
    return themeArray[0];
  };

  const getThemeNameFromCookie = (cookies: string): string => {
    const cookie = cookies.split(';').find((c) => c.trim().startsWith(`vuetiful-theme=`));
    const value = cookie?.split('=')[1];
    return value || '';
  };

  const applyThemeSSR = (html: string, theme: Theme): string => {
    chosenTheme.value = theme;
    const css = generateCss(theme);
    html = html.replace(
      '</head>',
      `<style type="text/css" id="vuetiful-theme">${css}</style></head>`,
    );
    html = html.replace('<body', `<body data-theme="${theme.name}"`);
    return html;
  };

  const generateCss = (theme: Theme): string => {
    return `
    :root {
      /* =~= Theme Properties =~= */
      ${Object.keys(theme.properties)
        .map((key) => `${key}: ${theme.properties[key as keyof ThemeProperties]};`)
        .join('\n')}
        }
      /* =~= Custom Properties =~= */
      ${theme.custom ? theme.custom : ''}
    `;
  };

  const applyTheme = (theme: Theme, callback?: Function) => {
    const existingStyle = document.getElementById('vuetiful-theme');
    const themeCss = generateCss(theme);

    const style = document.createElement('style');
    style.innerHTML = themeCss;
    style.id = 'vuetiful-theme';
    style.onload = () => {
      if (existingStyle) existingStyle.remove();
      if (callback) callback();
    };

    const head = document.querySelector('head');
    if (head) head.appendChild(style);

    chosenTheme.value = theme;
    if (isBrowser) {
      document.cookie = `vuetiful-theme=${theme.name};path=/;max-age=31536000;SameSite=Lax`;
      changeDataTheme(theme.name);
    }
  };

  const initializeTheme = (callback?: Function): void => {
    if (isBrowser) {
      const themeName = getThemeNameFromCookie(document.cookie);

      if (themeName === 'custom') {
        const storedThemeJson = localStorage.getItem('vuetiful-custom-theme');
        let storedTheme: Theme | null = null;

        try {
          storedTheme = storedThemeJson ? JSON.parse(storedThemeJson) : null;
          if (storedTheme) {
            applyTheme(storedTheme, callback);
            registerTheme(storedTheme);
          }
        } catch (e) {
          applyTheme(themeArray[0], callback);
        }
      } else {
        const theme = themeArray.find((t) => t.name === themeName);
        if (theme) {
          applyTheme(theme, callback);
        } else {
          applyTheme(themeArray[0], callback);
        }
      }
    }
  };

  const registerTheme = (theme: Theme): void => {
    const existingTheme = themeArray.find((t) => t.name === theme.name);
    if (existingTheme) {
      const index = themeArray.indexOf(existingTheme);
      themeArray[index] = theme;
    } else {
      themeArray.push(theme);
    }
  };

  return {
    chosenTheme,
    themes,
    themeArray,
    applyThemeSSR,
    applyTheme,
    getThemeFromCookie,
    initializeTheme,
    changeDataTheme,
    registerTheme,
  };
};

export { useTheme };
