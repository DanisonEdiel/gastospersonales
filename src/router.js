import { createRouter, createMemoryHistory } from "vue-router";

import AppPdf from "./components/AppPdf.vue";
import GastosPersonales from "./components/Gastospersonal.vue";

const routes = [
  { path: "/", component: GastosPersonales },
  { path: "/appPdf", component: AppPdf, props: true },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
