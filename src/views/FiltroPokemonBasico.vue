<template>
  <div>
    <div class="filtro-pokemon">
      <input
        v-model="filtroPokemon"
        type="text"
        placeholder="Digite o nome do Pokémon"
      />
    </div>
    <div class="lista-pokemon">
      <div
        class="card-pokemon"
        v-for="(pokemon, index) in listaPokemonFiltrada"
        :key="index"
      >
        <img :src="pokemon.sprites.front_default" alt="" width="200px" />
        <div class="card-pokemon-descricao">
          <span>{{
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          }}</span>
          <span>#{{ pokemon.id }}</span>
        </div>
      </div>
    </div>
    <div class="pokemon-n-encontrado" v-if="listaPokemonFiltrada.length === 0">
      <p>Nenhum Pokémon encontrado.</p>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
  data() {
    return {
      filtroPokemon: "",
      listaPokemon: [],
      qtdPopkemons: 151,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        for (let i = 1; i <= this.qtdPopkemons; i++) {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${i}`
          );
          this.listaPokemon.push(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    },
  },
  computed: {
    listaPokemonFiltrada() {
      // Função de filtro com base no nome
      return this.listaPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.filtroPokemon.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.filtro-pokemon {
  margin: 10px 5px 10px 5px;
}

.filtro-pokemon input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid var(--input-border-color);
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.3s ease-in-out;
}

.filtro-pokemon input:focus {
  outline: none;
  border-color: var(--input-focus-color);
}

.filtro-pokemon input:not(:placeholder-shown) {
  border-color: var(--input-filled-color);
}

.card-pokemon {
  background-color: white;
  text-align: center;
  border-radius: 3px;
  width: 18rem;
  padding: 10px;
}

.card-pokemon-descricao {
  display: flex;
  justify-content: space-between;
}

.lista-pokemon {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
}

.pokemon-n-encontrado {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

/* Estilo para ajustar tamanho e família da fonte */
.pokemon-n-encontrado p {
  font-size: 18px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeInAnimation {
  animation: fadeIn 0.5s ease-out;
}
</style>
