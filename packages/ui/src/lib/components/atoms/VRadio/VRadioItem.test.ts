import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { ref } from 'vue';
import VRadioGroup from './VRadioGroup.vue';
import VRadioItem from './VRadioItem.vue';

test('VRadioItem using slot', () => {
  const wrapper = mount({
    template: `
      <v-radio-group>
        <v-radio-item data-test="item" value="'John Duck'">John Duck</v-radio-item>
      </v-radio-group>
    `,
    components: {
      'v-radio-item': VRadioItem,
      'v-radio-group': VRadioGroup,
    },
  });

  const itemEl = wrapper.find("[data-test='item']").element;
  expect(itemEl.textContent).toBe('John Duck');
});

describe('VRadioItem slot states', () => {
  describe('given no injected provide', () => {
    test('should have the default active class', () => {
      const wrapper = mount({
        setup() {
          const value = ref('John Duck');
          return { value };
        },
        template: `
          <v-radio-group v-model="value">
            <v-radio-item data-test="item" :value="'John Duck'">John Duck</v-radio-item>
          </v-radio-group>
        `,
        components: {
          'v-radio-item': VRadioItem,
          'v-radio-group': VRadioGroup,
        },
      });

      const itemEl = wrapper.find("[data-test='item']").find('div');
      expect(itemEl.element.classList.contains('preset-filled')).toBe(true);
      expect(itemEl.element.classList.contains('hover:preset-outlined')).toBe(false);
    });

    test('should have the default hover class', () => {
      const wrapper = mount({
        setup() {
          const value = ref('not John Duck');
          return { value };
        },
        template: `
          <v-radio-group v-model="value">
            <v-radio-item data-test="item" :value="'John Duck'">John Duck</v-radio-item>
          </v-radio-group>
        `,
        components: {
          'v-radio-item': VRadioItem,
          'v-radio-group': VRadioGroup,
        },
      });

      const itemEl = wrapper.find("[data-test='item']").find('div');
      expect(itemEl.element.classList.contains('preset-filled')).toBe(false);
      expect(itemEl.element.classList.contains('hover:preset-outlined')).toBe(true);
    });
  });
  describe('given v-slot checked is true', () => {
    test('should have the active class', () => {
      const wrapper = mount({
        setup() {
          const value = ref('John Duck');
          return { value };
        },
        template: `
          <v-radio-group hover="custom-hover-class" active="custom-active-class" v-model="value">
            <v-radio-item data-test="item" :value="'John Duck'">John Duck</v-radio-item>
          </v-radio-group>
        `,
        components: {
          'v-radio-item': VRadioItem,
          'v-radio-group': VRadioGroup,
        },
        provide: {
          active: 'custom-active-class',
          hover: 'custom-hover-class',
        },
      });

      const itemEl = wrapper.find("[data-test='item']").find('div');
      expect(itemEl.element.classList.contains('custom-active-class')).toBe(true);
      expect(itemEl.element.classList.contains('custom-hover-class')).toBe(false);
    });
  });

  describe('given v-slot checked is false', () => {
    test('should have the hover class', () => {
      const wrapper = mount({
        setup() {
          const value = ref('not John Duck');
          return { value };
        },
        template: `
          <v-radio-group hover="custom-hover-class" active="custom-active-class" v-model="value">
            <v-radio-item data-test="item" :value="'John Duck'">John Duck</v-radio-item>
          </v-radio-group>
        `,
        components: {
          'v-radio-item': VRadioItem,
          'v-radio-group': VRadioGroup,
        },
        provide: {
          active: 'custom-active-class',
          hover: 'custom-hover-class',
        },
      });

      const itemEl = wrapper.find("[data-test='item']").find('div');
      expect(itemEl.element.classList.contains('custom-active-class')).toBe(false);
      expect(itemEl.element.classList.contains('custom-hover-class')).toBe(true);
    });
  });

  describe('given v-slot disabled is false', () => {
    test('should not have the disabled classes', () => {
      const wrapper = mount({
        setup() {
          const value = ref('John Duck');
          return { value };
        },
        template: `
          <v-radio-group hover="custom-hover-class" active="custom-active-class" v-model="value">
            <v-radio-item data-test="item" :value="'not John Duck'">John Duck</v-radio-item>
          </v-radio-group>
        `,
        components: {
          'v-radio-item': VRadioItem,
          'v-radio-group': VRadioGroup,
        },
        provide: {
          active: 'custom-active-class',
          hover: 'custom-hover-class',
        },
      });

      const itemEl = wrapper.find("[data-test='item']").find('div');
      expect(itemEl.element.classList.contains('cursor-pointer')).toBe(true);
      expect(itemEl.element.classList.contains('cursor-not-allowed')).toBe(false);
      expect(itemEl.element.classList.contains('opacity-50')).toBe(false);
    });
  });

  describe('given v-slot disabled is true', () => {
    test('should have the disabled classes', () => {
      const wrapper = mount({
        setup() {
          const value = ref('John Duck');
          return { value };
        },
        template: `
          <v-radio-group hover="custom-hover-class" active="custom-active-class" v-model="value">
            <v-radio-item disabled data-test="item" :value="'not John Duck'">John Duck</v-radio-item>
          </v-radio-group>
        `,
        components: {
          'v-radio-item': VRadioItem,
          'v-radio-group': VRadioGroup,
        },
        provide: {
          active: 'custom-active-class',
          hover: 'custom-hover-class',
        },
      });

      const itemEl = wrapper.find("[data-test='item']").find('div');
      expect(itemEl.element.classList.contains('cursor-pointer')).toBe(false);
      expect(itemEl.element.classList.contains('cursor-not-allowed')).toBe(true);
      expect(itemEl.element.classList.contains('opacity-50')).toBe(true);
    });
  });
});
