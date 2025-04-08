<script setup lang="ts">
import type { Personagem } from "../models/personagem"

defineProps<{
  personagem: Personagem
}>()
</script>

<template>
  <div id="card" class="border p-4 rounded shadow mb-3">
    <h2 class="text-xl font-bold">{{ personagem.name }}</h2>
    <p>Nascimento: {{ personagem.birth_year }}</p>
    <p>Gênero: {{ personagem.gender }}</p>

    <div class="mt-2">
      <slot name="actions" />
    </div>
  </div>
</template>
