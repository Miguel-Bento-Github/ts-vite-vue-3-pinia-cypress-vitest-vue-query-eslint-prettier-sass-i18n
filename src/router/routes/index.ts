import { notFound } from "@/router/routes/notFound";
import { homeRoute } from "@/router/routes/homeRoute";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [homeRoute, notFound];
