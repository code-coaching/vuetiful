import { usePlatform } from './platform/platform.service';
import ThemeSwitcher from './theme/theme-switcher.vue';
import { useTheme } from './theme/theme.service';
import { idGenerator } from './id-generator';
import { tm } from './tailwind-merge';

export { ThemeSwitcher, usePlatform, useTheme, idGenerator, tm };
