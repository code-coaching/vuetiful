import { mount } from '@vue/test-utils';
import { expect, test, describe } from 'vitest';
import { VRadioGroup, VRail, VRailTile, useRail } from '@/index';

describe('VRailTile', () => {
  // TODO: add tests
  test('default slot', () => {
    const wrapper = mount({
      provide: {
        activeRail: null,
        hoverRail: null,
      },
      template: /*html*/ `
        <v-radio-group>
          <v-rail-tile>John Duck</v-rail-tile>
        </v-radio-group>
      `,
      components: {
        'v-rail-tile': VRailTile,
        'v-radio-group': VRadioGroup,
      },
    });

    expect(wrapper).toBeTruthy();
  });

  test('label prop', () => {
    const wrapper = mount({
      provide: {
        activeRail: null,
        hoverRail: null,
      },
      template: /*html*/ `
        <v-radio-group>
          <v-rail-tile label="John Duck label">
            John Duck
          </v-rail-tile>
        </v-radio-group>
      `,
      components: {
        'v-rail-tile': VRailTile,
        'v-radio-group': VRadioGroup,
      },
    });

    const label = wrapper.find('.vuetiful-rail-tile-label');
    expect(label.text()).toContain('John Duck label');
  });

  test('no default slot', () => {
    const wrapper = mount({
      provide: {
        activeRail: null,
        hoverRail: null,
      },
      template: /*html*/ `
        <v-radio-group>
          <v-rail-tile label="John Duck label">
          </v-rail-tile>
        </v-radio-group>
      `,
      components: {
        'v-rail-tile': VRailTile,
        'v-radio-group': VRadioGroup,
      },
    });

    const icon = wrapper.find('.vuetiful-rail-tile-icon');
    expect(icon.exists()).toBeFalsy();
  });

  test('selected rail tile', async () => {
    const wrapper = mount({
      provide: {
        activeRail: 'fake-active-class',
        hoverRail: null,
      },
      template: /*html*/ `
        <v-rail data-test="rail">
          <v-rail-tile data-test='rail-tile' label="John Duck label" value="John Duck">
            John Duck
          </v-rail-tile>
        </v-rail>
      `,
      components: {
        'v-rail-tile': VRailTile,
        'v-rail': VRail,
      },
    });

    const { selectedRailTile } = useRail();
    expect(selectedRailTile.value).toBe('');
    const railTile = wrapper.find('.vuetiful-rail-tile');
    await railTile.trigger('click');
    expect(selectedRailTile.value).toBe('John Duck');
  });
});
