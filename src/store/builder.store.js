import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getPokemonsApi } from '../apis/builder.api.ts';

export const useBuilderStore = defineStore('builder', () => {
  const pokeList = ref([]);
  const errorMessage = ref('');

  async function getPokemons() {
    try {
      const result = await getPokemonsApi();
      pokeList.value = result;
    } 
    catch (error) {
      errorMessage.value = error.message;
    }
  }

  return { getPokemons, pokeList, errorMessage };
});