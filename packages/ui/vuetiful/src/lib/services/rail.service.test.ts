import { describe, expect, test } from 'vitest';
import { useRail } from './rail.service';

const { selectedRailTile } = useRail();

describe('useRail', () => {
  describe('selectedRailTile', () => {
    test('should expose selectedRailTile', () => {
      selectedRailTile.value = 'John Duck';
      expect(selectedRailTile.value).toBe('John Duck');
    });
  });
});
