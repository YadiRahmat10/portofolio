import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projek/simpeg",
    name: "Simpeg",
    component: () => import("../components/projeck/simpeg.vue"),
  },
  {
    path: "/projek/sicantik",
    name: "Sicantik",
    component: () => import("../components/projeck/sicantik.vue"),
  },
  {
    path: "/projek/siabang",
    name: "Siabang",
    component: () => import("../components/projeck/siabang.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
