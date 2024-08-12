import { usePlatform } from './platform/platform.service';
import { useDarkMode, type Mode} from './theme/dark-mode.service';
import VLightSwitch from './theme/VLightSwitch.vue';
import VThemeSwitch from './theme/VThemeSwitch.vue';
import { useTheme } from './theme/theme.service';
import { idGenerator } from './id-generator';
import { tm } from './tailwind-merge';

export { VThemeSwitch, usePlatform, useTheme, idGenerator, tm, useDarkMode, VLightSwitch };
export type { Mode };
