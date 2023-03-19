import { Route } from "@/router/routes.enum";
import HomeView from "@/views/HomeView.vue";

export const homeRoute = {
  name: Route.Home,
  path: "/",
  alias: "/home",
  component: HomeView,
  meta: {
    metaTags: [
      {
        name: "description",
        content: "content",
      },
    ],
  },
};
