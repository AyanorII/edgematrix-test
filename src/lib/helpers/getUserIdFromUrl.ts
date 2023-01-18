import type { RouteLocationNormalizedLoaded } from "vue-router";

export const getUserIdFromUrl = (route: RouteLocationNormalizedLoaded) => {
  return route.path.split("/")[1];
};
