// This file contains type declarations for 3rd party global components
// Without them, vue-tsc cannot check for issues with props etc.

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    RouterLink: typeof import("vue-router")["RouterLink"];
    RouterView: typeof import("vue-router")["RouterView"];
  }
}

export {};
