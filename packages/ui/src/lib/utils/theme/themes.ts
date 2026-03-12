import type { Theme } from '@/lib/types/skeletonlabs';
import { reactive } from 'vue';
import vuetiful from './vuetiful.theme';

export const themeArray: Theme[] = reactive([vuetiful]);
