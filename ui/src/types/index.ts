export * from "./tailwind";

/**
 * The commented string unions are to use in PropType<> for Vue components,
 * TypeScript types or enums do not give errors when using a string that is not in the union.
 **/

export const Variant = {
  Filled: "filled",
  FilledPrimary: "filled-primary",
  FilledSecondary: "filled-secondary",
  FilledTertiary: "filled-tertiary",
  FilledSuccess: "filled-success",
  FilledWarning: "filled-warning",
  FilledError: "filled-error",
  FilledSurface: "filled-surface",
  Ringed: "ringed",
  RingedPrimary: "ringed-primary",
  RingedSecondary: "ringed-secondary",
  RingedTertiary: "ringed-tertiary",
  RingedSuccess: "ringed-success",
  RingedWarning: "ringed-warning",
  RingedError: "ringed-error",
  RingedSurface: "ringed-surface",
  Ghost: "ghost",
  GhostPrimary: "ghost-primary",
  GhostSecondary: "ghost-secondary",
  GhostTertiary: "ghost-tertiary",
  GhostSuccess: "ghost-success",
  GhostWarning: "ghost-warning",
  GhostError: "ghost-error",
  GhostSurface: "ghost-surface",
  Soft: "soft",
  SoftPrimary: "soft-primary",
  SoftSecondary: "soft-secondary",
  SoftTertiary: "soft-tertiary",
  SoftSuccess: "soft-success",
  SoftWarning: "soft-warning",
  SoftError: "soft-error",
  SoftSurface: "soft-surface",
  Glass: "glass",
  GlassPrimary: "glass-primary",
  GlassSecondary: "glass-secondary",
  GlassTertiary: "glass-tertiary",
  GlassSuccess: "glass-success",
  GlassWarning: "glass-warning",
  GlassError: "glass-error",
  GlassSurface: "glass-surface",
};
// "filled" | "filled-primary" | "filled-secondary" | "filled-tertiary" | "filled-success" | "filled-warning" | "filled-error" | "filled-surface" | "ringed" | "ringed-primary" | "ringed-secondary" | "ringed-tertiary" | "ringed-success" | "ringed-warning" | "ringed-error" | "ringed-surface" | "ghost" | "ghost-primary" | "ghost-secondary" | "ghost-tertiary" | "ghost-success" | "ghost-warning" | "ghost-error" | "ghost-surface" | "soft" | "soft-primary" | "soft-secondary" | "soft-tertiary" | "soft-success" | "soft-warning" | "soft-error" | "soft-surface" | "glass" | "glass-primary" | "glass-secondary" | "glass-tertiary" | "glass-success" | "glass-warning" | "glass-error" | "glass-surface" |

export const Size = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
};
// "xs" | "sm" | "md" | "lg" | "xl"
