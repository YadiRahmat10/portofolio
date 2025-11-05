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
    component: () => import("../views/projeck/work/Simpeg.vue"),
  },
  {
    path: "/projek/portofolio",
    name: "Index",
    component: () => import("../views/projeck/work/Index.vue"),
  },
  {
    path: "/projek/sicantik",
    name: "Sicantik",
    component: () => import("../views/projeck/work/Sicantik.vue"),
  },
  {
    path: "/projek/siabang",
    name: "Siabang",
    component: () => import("../views/projeck/work/Siabang.vue"),
  },
  {
    path: "/projek/sakip",
    name: "Sakip",
    component: () => import("../views/projeck/work/Sakip.vue"),
  },
  {
    path: "/profile/profile",
    name: "Profile",
    component: () => import("../views/profile/Profile.vue"),
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
