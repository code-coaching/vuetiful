import { describe, expect, it, vi } from 'vitest';
import * as index from './index';

describe('src', () => {
  Object.entries(index).forEach(([key, value]) => {
    it(`${key} is defined`, () => {
      expect(value).toBeDefined();
    });
  });
});
