import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userId = ref(null)
  const token = ref(null)

  return { userId, token }
})
