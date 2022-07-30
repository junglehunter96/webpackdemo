import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/page1.vue") },
  { path: "/page2", component: () => import("@/views/page2.vue") },
];

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
