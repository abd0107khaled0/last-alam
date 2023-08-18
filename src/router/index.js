import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeV.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/courses",
    name: "courses",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Courses.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/registerFirst",
    name: "registerFirst",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterV.vue"),
  },
  {
    path: "/courses/showCourse/:id",
    name: "showCourse",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ShowCourse.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
