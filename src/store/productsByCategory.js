import axios from 'axios'
import { defineStore } from 'pinia'

export const useProductByCategory = defineStore({
  id: 'productByCategory',
  state: () => ({
    url: 'https://dummyjson.com/products/category/',
    productByCategory: null
  }),
  actions: {
    async getProductByCategory({category, sort, type}){
      try {
        const res = await axios.get(`${this.url}${category}?sortBy=${sort}&order=${type}`)
        this.productByCategory = res.data.products
      } catch (error) {
        console.error('Ошибка при получении продуктов', error);
      }
    },
  },
  getters:{
    
  }
})