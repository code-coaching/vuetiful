import { catppuccin, cerberus, pine, rose, type Theme } from '@skeletonlabs/skeleton/themes';
import rocket from './rocket.theme';
import vuetiful from './vuetiful.theme';

export const themes: Record<
  'vuetiful' | 'rocket' | 'catppuccin' | 'cerberus' | 'pine' | 'rose',
  Theme
> = {
  vuetiful,
  rocket,
  catppuccin,
  cerberus,
  pine,
  rose,
};

export const themeArray: Array<Theme> = [vuetiful, rocket, catppuccin, cerberus, pine, rose];
