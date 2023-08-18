import { Ref, ref } from 'vue';
import { usePlatform } from '../platform/platform.service';
import { ColorSettings, Palette, useColors } from '../colors/colors.service';
import { Theme, themes, THEME } from './themes';

const { isBrowser } = usePlatform();
const chosenTheme: Ref<Theme> = ref(themes[0]);
const { generatePalette, hexValuesAreValid } = useColors();

const generateColorCSS = (theme: Theme): string => {
  let newCSS = '';
  const newPalette: Record<string, Palette> = {};
  Object.values(theme.colors).forEach((color: ColorSettings) => {
    const colorKey = color.key;
    newPalette[color.key] = generatePalette(color.hex);
    newCSS += '\n\t';
    newCSS += `/* ${colorKey} | ${newPalette[colorKey][500].hex} */\n\t`;
    for (let [k, v] of Object.entries(newPalette[colorKey])) {
      newCSS += `--color-${colorKey}-${k}: ${v.rgb}; /* ⬅ ${v.hex} */\n\t`;
    }
  });
  return newCSS;
};

const useTheme = () => {
  const changeDataTheme = (name: string) => document.body.setAttribute('data-theme', name);

  const getThemeFromCookie = (cookies: string): Theme => {
    const themeName = getThemeNameFromCookie(cookies);
    const theme = themes.find((t) => t.name === themeName);
    if (theme) return theme;
    return themes[0];
  };

  const getThemeNameFromCookie = (cookies: string): string => {
    const cookie = cookies.split(';').find((c) => c.trim().startsWith(`vuetiful-theme=`));
    const value = cookie?.split('=')[1];
    return value || '';
  };

  const applyThemeSSR = (html: string, theme: Theme): string => {
    chosenTheme.value = theme;
    const css = generateCss(theme);
    html = html.replace('</head>', `<style type="text/css" id="vuetiful-theme">${css}</style></head>`);
    html = html.replace('<body', `<body data-theme="${theme.name}"`);
    return html;
  };

  const generateCss = (theme: Theme): string => {
    if (hexValuesAreValid(Object.values(theme.colors))) {
      return `${theme.fonts.baseImports}
  ${theme.fonts.headingImports}
  :root {
      /* =~= Theme Properties =~= */
      --theme-font-family-base: ${theme.fonts.customBase ? `"${theme.fonts.customBase}", ` : ''}${theme.fonts.base};
      --theme-font-family-heading: ${theme.fonts.customHeadings ? `"${theme.fonts.customHeadings}", ` : ''}${
        theme.fonts.headings
      };
      --theme-font-color-base: ${theme.textColorLight};
      --theme-font-color-dark: ${theme.textColorDark};
      --theme-rounded-base: ${theme.roundedBase};
      --theme-rounded-container: ${theme.roundedContainer};
      --theme-border-base: ${theme.borderBase};
  
      /* =~= Theme On-X Colors  =~= */
      --on-primary: ${theme.colors.primary.on};
      --on-secondary: ${theme.colors.secondary.on};
      --on-tertiary: ${theme.colors.tertiary.on};
      --on-success: ${theme.colors.success.on};
      --on-warning: ${theme.colors.warning.on};
      --on-error: ${theme.colors.error.on};
      --on-surface: ${theme.colors.surface.on};
  
      /* =~= Theme Colors  =~= */
${generateColorCSS(theme)}
  }
  
  ${
    theme.gradients.light.length
      ? `[data-theme="${theme.name}"] {
      background-image:
          ${theme.gradients.light};
  }`
      : ''
  }
  ${
    theme.gradients.dark.length
      ? `.dark [data-theme="${theme.name}"] {
      background-image:
          ${theme.gradients.dark};
  }`
      : ''
  }
  ${theme.customCss}
  `;
    }
    return '';
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
          applyTheme(themes[0], callback);
        }
      } else {
        const theme = themes.find((t) => t.name === themeName);
        if (theme) {
          applyTheme(theme, callback);
        } else {
          applyTheme(themes[0], callback);
        }
      }
    }
  };

  const registerTheme = (theme: Theme): void => {
    const existingTheme = themes.find((t) => t.name === theme.name);
    if (existingTheme) {
      const index = themes.indexOf(existingTheme);
      themes[index] = theme;
    } else {
      themes.push(theme);
    }
  };

  return {
    chosenTheme,
    themes,
    THEME,
    applyThemeSSR,
    applyTheme,
    getThemeFromCookie,
    initializeTheme,
    changeDataTheme,
    registerTheme,
  };
};

export { useTheme };
