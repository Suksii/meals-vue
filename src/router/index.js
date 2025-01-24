import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MealsView from "../views/MealsView.vue";
import SingleMealView from "../views/SingleMealView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/meals/:category",
    name: "byCategory",
    component: MealsView,
    props: true,
  },
  {
    path: "/meal/:id",
    name: "byId",
    component: SingleMealView,
  },

  {
    path: "/meals/letter/:letter",
    name: "byLetter",
    component: MealsView,
  },
  {
    path: "/meals/name/:name",
    name: "byName",
    component: MealsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
