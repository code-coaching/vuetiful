import { Preset, Size } from '@/lib/types';
import { type PropType } from 'vue';

const sizeProp = {
  type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
  default: Size.MD,
};

const unstyledProp = {
  type: Boolean,
  default: false,
};

const presetProp = {
  // explicit string union because TypeScript type won't throw error if invalid value is passed
  type: String as PropType<
    | ''
    | 'filled'
    | 'filled-primary-500'
    | 'filled-secondary-500'
    | 'filled-tertiary-500'
    | 'filled-success-500'
    | 'filled-warning-500'
    | 'filled-error-500'
    | 'filled-surface-500'
    | 'tonal'
    | 'tonal-primary-500'
    | 'tonal-secondary-500'
    | 'tonal-tertiary-500'
    | 'tonal-success-500'
    | 'tonal-warning-500'
    | 'tonal-error-500'
    | 'tonal-surface-500'
    | 'outlined'
    | 'outlined-primary-500'
    | 'outlined-secondary-500'
    | 'outlined-tertiary-500'
    | 'outlined-success-500'
    | 'outlined-warning-500'
    | 'outlined-error-500'
    | 'outlined-surface-500'
  >,
  default: Preset.Filled,
};

export { presetProp, sizeProp, unstyledProp };
