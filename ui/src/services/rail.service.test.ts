import { describe, expect, it } from 'vitest';
import { useRail } from './rail.service';

const { selectedRailTile } = useRail();

describe('useRail', () => {
  describe('selectedRailTile', () => {
    it('should expose selectedRailTile', () => {
      selectedRailTile.value = 'John Duck';
      expect(selectedRailTile.value).toBe('John Duck');
    });
  });
});
