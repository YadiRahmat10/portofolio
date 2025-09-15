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
    component: () => import("../components/projeck/Simpeg.vue"),
  },
  {
    path: "/projek/sicantik",
    name: "Sicantik",
    component: () => import("../components/projeck/Sicantik.vue"),
  },
  {
    path: "/projek/siabang",
    name: "Siabang",
    component: () => import("../components/projeck/Siabang.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
