import { ref } from "vue";

const selectedRailTile = ref("");

const useRail = () => {
  return {
    selectedRailTile,
  };
};

export { useRail };
