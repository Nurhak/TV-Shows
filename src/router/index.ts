import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/show/:id",
    name: "showDetails",
    component: () => import("../views/ShowView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { routes };

export default router;
