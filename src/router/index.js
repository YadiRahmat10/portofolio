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
    component: () => import("../views/projeck/Simpeg.vue"),
  },
  {
    path: "/projek/sicantik",
    name: "Sicantik",
    component: () => import("../views/projeck/Sicantik.vue"),
  },
  {
    path: "/projek/siabang",
    name: "Siabang",
    component: () => import("../views/projeck/Siabang.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
