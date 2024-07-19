import { describe, expect, vi, test } from 'vitest';
import { usePlatform } from './platform.service';

const matchMediaMock = (matches: boolean) => vi.fn(() => ({ matches, onchange: vi.fn() }));

describe('usePlatform', () => {
  describe('isBrowser', () => {
    test('should return true when window is defined', () => {
      const { isBrowser } = usePlatform();
      expect(isBrowser).toBe(true);
    });

    test('should return false when window is not defined', () => {
      window = undefined as any;
      const { isBrowser } = usePlatform();
      expect(isBrowser).toBe(false);
    });
  });
});
