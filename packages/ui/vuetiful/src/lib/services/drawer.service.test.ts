import { describe, expect, test } from 'vitest';
import { useDrawer } from './drawer.service';

const { drawer, open, close } = useDrawer();

describe('useDrawer', () => {
  describe('defaults', () => {
    test('should have the default values', () => {
      expect(drawer.id).toBe('default');
      expect(drawer.open).toBe(false);
      expect(drawer.position).toBe('left');
      expect(drawer.duration).toBe(300);
      expect(drawer.regionBackdrop).toBe('');
      expect(drawer.regionDrawer).toBe('');
    });
  });

  describe('open', () => {
    test('should use the settings', () => {
      open({
        id: 'test',
        open: true,
        position: 'right',
        duration: 150,
        regionBackdrop: 'backdrop',
        regionDrawer: 'drawer',
      });
      expect(drawer.id).toBe('test');
      expect(drawer.open).toBe(true);
      expect(drawer.position).toBe('right');
      expect(drawer.duration).toBe(150);
      expect(drawer.regionBackdrop).toBe('backdrop');
      expect(drawer.regionDrawer).toBe('drawer');
    });
  });

  describe('close', () => {
    test('should set the drawer to close', () => {
      open();
      expect(drawer.open).toBe(true);
      close();
      expect(drawer.open).toBe(false);
    });
  });
});
