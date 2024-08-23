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
      expect(itemEl.classes()).toContain('bg-surface-950-50');
      expect(itemEl.classes().some((c) => c.startsWith('hover:'))).toBe(false);
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
      expect(itemEl.classes()).not.toContain('bg-surface-950-50');
      expect(itemEl.classes()).not.toContain('text-surface-50-950');
      expect(itemEl.classes()).toContain('hover:border-black');
      expect(itemEl.classes()).toContain('dark:hover:border-white');
      expect(itemEl.classes()).toContain('hover:border');
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
          <v-radio-group class-item-hover="custom-hover-class" class-item-active="custom-active-class" v-model="value">
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
      expect(itemEl.element.classList.toString().includes('custom-active-class')).toBe(true);
      expect(itemEl.element.classList.toString().includes('custom-hover-class')).toBe(false);
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
          <v-radio-group class-item-hover="custom-hover-class" class-item-active="custom-active-class" v-model="value">
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
      expect(itemEl.element.classList.toString().includes('custom-active-class')).toBe(false);
      expect(itemEl.element.classList.toString().includes('custom-hover-class')).toBe(true);
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
      expect(itemEl.element.classList.toString().includes('cursor-pointer')).toBe(true);
      expect(itemEl.element.classList.toString().includes('cursor-not-allowed')).toBe(false);
      expect(itemEl.element.classList.toString().includes('opacity-50')).toBe(false);
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
      expect(itemEl.element.classList.toString().includes('cursor-pointer')).toBe(false);
      expect(itemEl.element.classList.toString().includes('pointer-events-none')).toBe(true);
      expect(itemEl.element.classList.toString().includes('opacity-50')).toBe(true);
    });
  });
});
