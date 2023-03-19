export const notFound = {
  path: "/:catchAll(.*)",
  component: () => import("@/views/404.vue"),
  meta: {
    title: "404",
    metaTags: [
      {
        name: "description",
        content: "Page not found.",
      },
    ],
  },
};
