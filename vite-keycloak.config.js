import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "esnext",
    lib: {
      entry: fileURLToPath(new URL("./src/keycloak.ts", import.meta.url)),
      name: "Keycloak Styles",
    },
  },
});
