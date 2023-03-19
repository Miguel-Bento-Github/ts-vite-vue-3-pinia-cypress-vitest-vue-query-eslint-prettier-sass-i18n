import { nextTick } from "vue";
import type { RouterScrollBehavior } from "vue-router";
import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
} from "vue-router";
import { routes } from "@/router/routes";

export const scrollBehavior: RouterScrollBehavior = (
  to,
  from,
  savedPosition
) => {
  return new Promise((resolve) => {
    if (savedPosition) {
      resolve(savedPosition);
    } else if (to.hash) {
      resolve({
        el: to.hash,
        behavior: "smooth",
      });
    } else {
      resolve({ top: 0 });
    }
  });
};

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) return;

  nextTick(() => {
    if (typeof to.name === "string") {
      document.title = to.name;
    }
  });
});
