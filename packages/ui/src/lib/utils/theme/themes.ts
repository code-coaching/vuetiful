import type { Theme } from '@/lib/types/skeletonlabs';
import rocket from './rocket.theme';
import vuetiful from './vuetiful.theme';

export const themes: Record<'vuetiful' | 'rocket', Theme> = {
  vuetiful,
  rocket,
};

export const themeArray: Array<Theme> = [vuetiful, rocket];
