import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import VSwitchGroup from './VSwitchGroup.vue';
import VSwitchLabel from './VSwitchLabel.vue';

test('VSwitchLabel using slot', () => {
  const wrapper = mount({
    template: `
      <v-switch-group>
        <v-switch-label>John Duck</v-switch-label>
      </v-switch-group>
    `,
    components: {
      'v-switch-label': VSwitchLabel,
      'v-switch-group': VSwitchGroup,
    },
  });

  expect(wrapper.text()).toContain('John Duck');
});

describe('VSwitchLabel props', () => {
  test("default 'as' prop", () => {
    const wrapper = mount({
      template: `
        <v-switch-group>
          <v-switch-label data-test="label">John Duck</v-switch-label>
        </v-switch-group>
      `,
      components: {
        'v-switch-label': VSwitchLabel,
        'v-switch-group': VSwitchGroup,
      },
    });

    const label = wrapper.find("[data-test='label']");
    expect(label.element).toBeInstanceOf(HTMLParagraphElement);
  });
  test("custom 'as' prop", () => {
    const wrapper = mount({
      template: `
        <v-switch-group>
          <v-switch-label as="div" data-test="label">John Duck</v-switch-label>
        </v-switch-group>
      `,
      components: {
        'v-switch-label': VSwitchLabel,
        'v-switch-group': VSwitchGroup,
      },
    });

    const label = wrapper.find("[data-test='label']");
    expect(label.element).toBeInstanceOf(HTMLDivElement);
  });

  test("default 'passive' prop'", () => {
    const wrapper = mount({
      template: `
        <v-switch-group>
          <v-switch-label>John Duck</v-switch-label>
        </v-switch-group>
      `,
      components: {
        'v-switch-label': VSwitchLabel,
        'v-switch-group': VSwitchGroup,
      },
    });

    const label = wrapper.findComponent(VSwitchLabel);
    expect(label.props('passive')).toBe(false);
  });

  test("custom 'passive' prop'", () => {
    const wrapper = mount({
      template: `
        <v-switch-group>
          <v-switch-label passive>John Duck</v-switch-label>
        </v-switch-group>
      `,
      components: {
        'v-switch-label': VSwitchLabel,
        'v-switch-group': VSwitchGroup,
      },
    });

    const label = wrapper.findComponent(VSwitchLabel);
    expect(label.props('passive')).toBe(true);
  });
});
