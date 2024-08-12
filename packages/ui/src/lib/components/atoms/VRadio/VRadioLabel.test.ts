import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import VRadioGroup from './VRadioGroup.vue';
import VRadioLabel from './VRadioLabel.vue';

test('VRadioLabel using slot', () => {
  const wrapper = mount({
    template: `
      <v-radio-group>
        <v-radio-label>John Duck</v-radio-label>
      </v-radio-group>
    `,
    components: {
      'v-radio-label': VRadioLabel,
      'v-radio-group': VRadioGroup,
    },
  });

  expect(wrapper.text()).toContain('John Duck');
});
