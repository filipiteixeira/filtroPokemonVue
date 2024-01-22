<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="home">
    <div class="menu">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/filtroPokemon">Listas Pokemon</RouterLink>
        <RouterLink to="/filtroPokemonBasico">Lista Pokemon Basica</RouterLink>
      </nav>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.menu {
  padding: 10px;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

header {
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

nav {
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}
</style>
