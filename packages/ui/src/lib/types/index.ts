import type { PresetProp, SizeProp } from '../props';

export * from './tailwind';

export const Preset: Record<string, PresetProp> = {
  Filled: 'preset-filled',
  FilledPrimary: 'preset-filled-primary-500',
  FilledSecondary: 'preset-filled-secondary-500',
  FilledTertiary: 'preset-filled-tertiary-500',
  FilledSuccess: 'preset-filled-success-500',
  FilledWarning: 'preset-filled-warning-500',
  FilledError: 'preset-filled-error-500',
  FilledSurface: 'preset-filled-surface-500',
  Tonal: 'preset-tonal',
  TonalPrimary: 'preset-tonal-primary-500',
  TonalSecondary: 'preset-tonal-secondary-500',
  TonalTertiary: 'preset-tonal-tertiary-500',
  TonalSuccess: 'preset-tonal-success-500',
  TonalWarning: 'preset-tonal-warning-500',
  TonalError: 'preset-tonal-error-500',
  TonalSurface: 'preset-tonal-surface-500',
  Outlined: 'preset-outlined',
  OutlinedPrimary: 'preset-outlined-primary-500',
  OutlinedSecondary: 'preset-outlined-secondary-500',
  OutlinedTertiary: 'preset-outlined-tertiary-500',
  OutlinedSuccess: 'preset-outlined-success-500',
  OutlinedWarning: 'preset-outlined-warning-500',
  OutlinedError: 'preset-outlined-error-500',
  OutlinedSurface: 'preset-outlined-surface-500',
};

export const Size: Record<string, SizeProp> = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
};
