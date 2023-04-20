import { describe, expect } from "vitest";
import { useRail } from "./rail.service";

const { selectedRailTile } = useRail();

describe("useRail", () => {
  describe("selectedRailTile", () => {
    selectedRailTile.value = "John Duck";
    expect(selectedRailTile.value).toBe("John Duck");
  });
});
