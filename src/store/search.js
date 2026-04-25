import axios from 'axios'
import { defineStore } from 'pinia'

export const useSearch = defineStore({
  id: 'search',
  state: () => ({
    url: `https://dummyjson.com/products/search?q=`,
    searchProducts: null,
  }),
  actions: {
    async getSearch({question}){
      try {
        const res = await axios.get(`${this.url}${question}`)
        this.searchProducts = res.data
      } catch (error) {
        console.error('Ошибка при получении данных', error);
      }
    }
  },
  getters:{

  }
})