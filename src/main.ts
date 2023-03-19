import App from "@/App.vue";
import i18n from "@/plugins/i18n";
import { vueQuery } from "@/plugins/queryClient";
import { router } from "@/plugins/router";
import "@/styles/boot.scss";

import { createPinia } from "pinia";
import { createApp } from "vue";

createApp(App)
  .use(i18n)
  .use(createPinia())
  .use(router)
  .use(...vueQuery)
  .mount("#app");
