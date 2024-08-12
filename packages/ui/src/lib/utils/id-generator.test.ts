import { expect, vi, test } from 'vitest';
import { idGenerator } from './id-generator';


  test('should generate ids', async () => {
    expect(idGenerator()).toBe('vuetiful-0');
    expect(idGenerator()).toBe('vuetiful-1');
  });
