import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import VRadioGroup from './VRadioGroup.vue';

test('VRadioGroup using slot', () => {
  const wrapper = mount(VRadioGroup, {
    slots: {
      default: 'John Duck',
    },
  });

  expect(wrapper.text()).toContain('John Duck');
});

test('VRadioGroup default props', () => {
  const wrapper = mount(VRadioGroup);
  const radioGroupEl = wrapper.find('div');
  expect(radioGroupEl.classes()).toEqual([
    'vuetiful-radio-group',
    'inline-flex',
    'gap-1',
    'p-1',
    'border',
    'border-surface-400-600',
    'rounded-container',
    'bg-surface-200-800',
    'text-surface-950-50',
    'flex-row'
  ]);

  const radioGroup = wrapper.find("[data-test='radio-group']");
  expect(radioGroup.element.tagName).toBe('DIV');
});

test('VRadioGroup custom class props', () => {
  const wrapper = mount(VRadioGroup, {
    props: {
      class: 'bg-blue-800 text-blue-200',
    },
  });
  const radioGroupEl = wrapper.find('div');
  expect(radioGroupEl.classes()).toEqual([
    'vuetiful-radio-group',
    'inline-flex',
    'gap-1',
    'p-1',
    'border',
    'border-surface-400-600',
    'rounded-container',
    'flex-row',
    'bg-blue-800',
    'text-blue-200',
  ]);
});

test("VRadioGroup custom 'as' prop", () => {
  const wrapper = mount(VRadioGroup, {
    props: {
      as: 'span',
    },
  });

  const radioGroup = wrapper.find("[data-test='radio-group']");
  expect(radioGroup.element.tagName).toBe('SPAN');
});

describe('VRadioGroup v-model', () => {
  describe('given value changes', () => {
    test('should emit update:modelValue', async () => {
      const wrapper = mount(VRadioGroup, {
        props: {
          modelValue: 'John Duck',
        },
      });

      wrapper.setProps({ modelValue: 'Jane Duck' });
      await wrapper.vm.$nextTick();
      expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['Jane Duck']);
    });
  });
});

test('vertical', () => {
  const wrapper = mount(VRadioGroup, {
    props: {
      vertical: true,
    },
  });

  const radioGroupEl = wrapper.find('div');
  expect(radioGroupEl.classes()).toContain('flex-col');
})
