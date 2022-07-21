import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: () => import("../views/MovieView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { routes };

export default router;
