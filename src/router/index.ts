import { createRouter, createWebHistory } from "vue-router";
import UserProfiles from "../views/UserProfilesListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: UserProfiles,
    },
  ],
});

export default router;
