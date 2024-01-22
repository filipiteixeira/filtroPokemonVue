import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/filtroPokemonBasico",
      name: "filtroPokemonBasico",
      component: () => import("../views/FiltroPokemonBasico.vue"),
    },
    {
      path: "/filtroPokemon",
      name: "filtroPokemon",
      component: () => import("../views/FiltroPokemon.vue"),
    },
  ],
});

export default router;
