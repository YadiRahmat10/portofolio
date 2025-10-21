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
  {
    path: "/profile/profile",
    name: "Profile",
    component: () => import("../views/profile/Profile.vue"),
  },
  {
    path: "/projek/portofolio",
    name: "Index",
    component: () => import("../views/projeck/Index.vue"),
  },
  {
    path: "/resume/resume",
    name: "Resume",
    component: () => import("../views/resume/Resume.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
