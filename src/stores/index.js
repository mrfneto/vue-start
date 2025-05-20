import { ref } from 'vue'
import { defineStore } from 'pinia'
import { watchAuthStage } from '@/services/auth'

export const useStore = defineStore('main', () => {
  const user = ref()
  const loading = ref(true)

  const init = () => {
    return new Promise((resolve, reject) => {
      watchAuthStage(
        u => {
          user.value = u
          loading.value = false
          resolve(u)
        },
        e => reject(e)
      )
    })
  }
  return { user, loading, init }
})
