import { defineStore } from "pinia";
import type { Personagem } from "@/models/personagem";

export const useFavoritos = defineStore('favoritos', {
    state: () => ({
        lista: [] as Personagem[]
    }),
    actions: {
        favoritar(personagem: Personagem) {
          const existe = this.lista.find(p => p.name === personagem.name)
          if (!existe) {
            this.lista.push(personagem)
          }
        },
        remover(nome: string) {
          this.lista = this.lista.filter(p => p.name !== nome)
        }
      }
})