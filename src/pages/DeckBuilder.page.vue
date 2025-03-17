<template>
  <div>
    <h1>Deck Builder</h1>
    <n-grid cols="4" x-gap="12" y-gap="12">
      <n-card v-for="pokemon in store.pokeList" :key="pokemon.id" :title="pokemon.name">
        <img :src="pokemon.imageUrl" alt="pokemon.name" style="width: 100%;" />
        <n-tag>{{ pokemon.type }}</n-tag>
      </n-card>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useBuilderStore } from './../store/builder.store.js';

const store = useBuilderStore();

onMounted(() => {
  console.log(store.getPokemons());
});
</script>

<style scoped>
</style>