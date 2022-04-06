import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: () => import("../views/WelcomeView.vue"),
  },
  {
    path: "/points",
    component: () => import("../views/PointsView.vue"),
  },
  {
    path: "/locations",
    component: () => import("../views/LocationsView.vue"),
  },
  {
    path: "/details",
    component: () => import("../views/DetailsView.vue"),
  },
  {
    path: "/details/:id",
    component: () => import("../views/DetailsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
