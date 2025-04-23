import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('main', () => {
  const user = ref({ name: 'Mrfneto' })

  return { user }
})
