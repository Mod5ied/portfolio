import { createRouter, createWebHistory } from "vue-router";

const Dashboard = () => import("../views/Dashboard.vue");
const FourOh4 = () => import("../views/FourOhFour.vue");

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard },
  { path: "/:catchAll(.*)", name: "404", component: FourOh4 },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
