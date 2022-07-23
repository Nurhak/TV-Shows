import {
  createRouter,
  createWebHistory,
  type Router,
  type RouterScrollBehavior,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

type ScrollPositionNormalized = {
  behavior?: ScrollOptions["behavior"];
  left: number;
  top: number;
};

declare module "vue-router" {
  interface RouteMeta {
    scrollPos?: ScrollPositionNormalized;
  }
}

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

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (to.name === from.name) {
    to.meta?.scrollPos && (to.meta.scrollPos.top = 0);
    return { left: 0, top: 0 };
  }
  const scrollpos = savedPosition || to.meta?.scrollPos || { left: 0, top: 0 };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ...scrollpos,
        behavior: "smooth",
      });
    }, 500);
  });
};

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

router.beforeEach((to, from, next) => {
  from.meta?.scrollPos &&
    (from.meta.scrollPos.top = document.documentElement.scrollTop);
  return next();
});

export { routes };

export default router;
