import { createRouter, createWebHashHistory } from "vue-router";

import AppPdf from "./components/AppPdf.vue";
import GastosPersonales from "./components/Gastospersonal.vue";
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
  { path: "/", component: GastosPersonales },
  { path: "/appPdf", component: AppPdf, props: true },
  { path: "/users", component: HelloWorld },
];

const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
});

export default router;
