import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user-store',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }
    //外面使用要return 出去
    return {
      token,
      setToken,
      removeToken
    }
  },
  {
    persist: true
  }
)
