import type {
  ColorSettings,
  Palette,
  PassReport,
  Report,
  SemanticNames,
} from './colors/colors.service';
import { useColors } from './colors/colors.service';
import { usePlatform } from './platform/platform.service';
import ThemeSwitcher from './theme/theme-switcher.vue';
import { useTheme } from './theme/theme.service';

export { ThemeSwitcher, useColors, usePlatform, useTheme };
export type { PassReport, Report, SemanticNames, ColorSettings, Palette };
