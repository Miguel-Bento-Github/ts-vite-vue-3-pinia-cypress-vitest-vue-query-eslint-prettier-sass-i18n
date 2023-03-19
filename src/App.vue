<script setup lang="ts">
import LocaleChanger from "@/components/LocaleChanger.vue";
import { Route } from "@/router/routes.enum";
</script>

<template>
  <LocaleChanger />
  <nav>
    <RouterLink :to="Route.Home">{{ $t("home") }}</RouterLink>
    |
    <RouterLink :to="'404'">{{ $t("404") }}</RouterLink>
  </nav>
  <RouterView />
</template>
