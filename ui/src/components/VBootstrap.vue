<script setup lang="ts">
import { Variant } from '@/types';
import { PropType } from 'vue';

/**
 * VBoostrap is a component that should not be used directly.
 * It is used to make sure that the variant-classes are bundled with the application.
 * This allows us to use `variant-${variant}` in the template.
 *
 * In the future it might be a good idea to just add .filled, .ringed, etc. as alternatives for .variant-filled, .variant-ringed, etc. and remove this component.
 */

defineProps({
  variant: {
    // explicit string union because TypeScript type won't throw error if invalid value is passed
    type: String as PropType<
      | ''
      | 'variant-filled'
      | 'variant-filled-primary'
      | 'variant-filled-secondary'
      | 'variant-filled-tertiary'
      | 'variant-filled-success'
      | 'variant-filled-warning'
      | 'variant-filled-error'
      | 'variant-filled-surface'
      | 'variant-ringed'
      | 'variant-ringed-primary'
      | 'variant-ringed-secondary'
      | 'variant-ringed-tertiary'
      | 'variant-ringed-success'
      | 'variant-ringed-warning'
      | 'variant-ringed-error'
      | 'variant-ringed-surface'
      | 'variant-ghost'
      | 'variant-ghost-primary'
      | 'variant-ghost-secondary'
      | 'variant-ghost-tertiary'
      | 'variant-ghost-success'
      | 'variant-ghost-warning'
      | 'variant-ghost-error'
      | 'variant-ghost-surface'
      | 'variant-soft'
      | 'variant-soft-primary'
      | 'variant-soft-secondary'
      | 'variant-soft-tertiary'
      | 'variant-soft-success'
      | 'variant-soft-warning'
      | 'variant-soft-error'
      | 'variant-soft-surface'
      | 'variant-glass'
      | 'variant-glass-primary'
      | 'variant-glass-secondary'
      | 'variant-glass-tertiary'
      | 'variant-glass-success'
      | 'variant-glass-warning'
      | 'variant-glass-error'
      | 'variant-glass-surface'
    >,
    default: Variant.Filled,
  },
});
</script>
