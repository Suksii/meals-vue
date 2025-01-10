import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MealsView from "../views/MealsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/letter/:letter",
    name: "byLetter",
    component: MealsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
