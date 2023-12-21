import { createRouter, createWebHistory } from "vue-router";
//import authGuard from "../services/AuthGuardService";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/admin",
      component: () => import("../views/Admin.vue"),

    },
    {
      path: "/register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/sign-in",
      component: () => import("../views/SignIn.vue"),
    },
    {
      path: "/feed",
      component: () => import("../views/Feed.vue"),

    },
    {
        path: "/:patchMatch(.*)",
        name: "NotFound",
        component: () => import("../views/NotFound.vue"),

    }
  ],
});

export default router;