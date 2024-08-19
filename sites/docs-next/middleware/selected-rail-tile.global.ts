import { useRail } from "@code-coaching/vuetiful";
const { selectedRailTile } = useRail();

export default defineNuxtRouteMiddleware((to) => {
  if (to.fullPath.includes("/docs")) {
    selectedRailTile.value = "docs";
  } else if (to.fullPath.includes("/vue")) {
    selectedRailTile.value = "vue";
  }
});
