import {
  QueryClient,
  VueQueryPlugin,
  type VueQueryPluginOptions,
} from "@tanstack/vue-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3, // 3 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const vueQueryPluginOptions: VueQueryPluginOptions = { queryClient };
export const vueQuery = [VueQueryPlugin, vueQueryPluginOptions] as const;
