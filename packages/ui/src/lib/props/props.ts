import { Preset, Size } from '@/lib/types';
import { type PropType } from 'vue';

export type SizeProp = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
const sizeProp = {
  type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
  default: Size.MD,
};

const unstyledProp = {
  type: Boolean,
  default: false,
};

export type PresetProp = '' | 'preset-filled' | 'preset-filled-primary-500' | 'preset-filled-secondary-500' | 'preset-filled-tertiary-500' | 'preset-filled-success-500' | 'preset-filled-warning-500' | 'preset-filled-error-500' | 'preset-filled-surface-500' | 'preset-tonal' | 'preset-tonal-primary-500' | 'preset-tonal-secondary-500' | 'preset-tonal-tertiary-500' | 'preset-tonal-success-500' | 'preset-tonal-warning-500' | 'preset-tonal-error-500' | 'preset-tonal-surface-500' | 'preset-outlined' | 'preset-outlined-primary-500' | 'preset-outlined-secondary-500' | 'preset-outlined-tertiary-500' | 'preset-outlined-success-500' | 'preset-outlined-warning-500' | 'preset-outlined-error-500' | 'preset-outlined-surface-500';
const presetProp = {
  // explicit string union because TypeScript type won't throw error if invalid value is passed
  type: String as PropType<
    | ''
    | 'preset-filled'
    | 'preset-filled-primary-500'
    | 'preset-filled-secondary-500'
    | 'preset-filled-tertiary-500'
    | 'preset-filled-success-500'
    | 'preset-filled-warning-500'
    | 'preset-filled-error-500'
    | 'preset-filled-surface-500'
    | 'preset-tonal'
    | 'preset-tonal-primary-500'
    | 'preset-tonal-secondary-500'
    | 'preset-tonal-tertiary-500'
    | 'preset-tonal-success-500'
    | 'preset-tonal-warning-500'
    | 'preset-tonal-error-500'
    | 'preset-tonal-surface-500'
    | 'preset-outlined'
    | 'preset-outlined-primary-500'
    | 'preset-outlined-secondary-500'
    | 'preset-outlined-tertiary-500'
    | 'preset-outlined-success-500'
    | 'preset-outlined-warning-500'
    | 'preset-outlined-error-500'
    | 'preset-outlined-surface-500'
  >,
  default: Preset.Filled,
};

export { presetProp, sizeProp, unstyledProp };
