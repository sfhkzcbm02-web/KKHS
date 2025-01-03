import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { BaseUrl } from '@/api/base'

export const useSearchStore = defineStore('search-store', () => {
  const Router = useRouter()
  const SearchValue = ref(null)
  const SearchResult = ref(0)
  const GoSearch = async () => {
    const Value = encodeURIComponent(SearchValue.value)
    const res = await axios.get(`${BaseUrl}/api/Layout/SearchItem?value=${Value}`)
    SearchResult.value = res.data.data
    Router.push('/search')
  }
  return {
    SearchValue,
    GoSearch,
    SearchResult
  }
})
