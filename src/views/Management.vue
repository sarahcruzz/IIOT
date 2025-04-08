<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CardComponent from '@/components/CardComponent.vue'
import { useFavoritos} from '../stores/favoritos'
import type { Personagem } from '@/models/personagem'


const personagens = ref<Personagem[]>([])
const store = useFavoritos()

onMounted(async () => {
  const res = await axios.get('https://swapi.dev/api/people')
  personagens.value = res.data.results
})

function favoritar(personagem: Personagem) {
  store.favoritar(personagem)
}
</script>

<template>
  <main>
    <header>
        <router-link to="/">Visualizar Cards</router-link>
        <router-link to="/management">Gerenciamento</router-link>
    </header>

    <div class="cards">
        <CardComponent
        v-for="p in personagens"
        :key="p.name"
        :personagem="p"
        >
        <template #actions>
          <button @click="favoritar(p)" class="bg-blue-600 text-white px-2 py-1 rounded">
            Favoritar
          </button>
        </template>
        </CardComponent>
    </div>
    
  </main>
</template>

<style>

.cards{
  display: flex;
  justify-content: space-around;
  width: 80%;
}
</style>
