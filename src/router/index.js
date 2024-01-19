import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import ServiceView from "../views/service/ServiceView.vue";
import NewsView from "../views/news/NewsView.vue";
import ContactView from "../views/contact/ContactView.vue";
// import SupportSection from "../views/home/Sections/SupportSection.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/service",
    name: "Service",
    // component: () => import("../components/Views/Service/ServiceView.vue"),
    component: ServiceView,
  },
  {
    path: "/news",
    name: "News",
    // component: () => import("../components/Views/Service/ServiceView.vue"),
    component: NewsView,
  },
  {
    path: "/contact",
    name: "Contact",
    // component: () => import("../components/Views/Service/ServiceView.vue"),
    component: ContactView,
  },
  // {
  //   path: "/support",
  //   name: "Support",
  //   // component: () => import("../components/Views/Service/ServiceView.vue"),
  //   component: SupportSection,
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
