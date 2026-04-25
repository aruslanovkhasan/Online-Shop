import axios from 'axios'
import { defineStore } from 'pinia'
  
export const useItemById = defineStore({
  id: 'itemById',
  state: () => ({
    url: 'https://dummyjson.com/products',
    itemById: null
  }),
  actions: {
    async getItemById({id}){
      try {
        const res = await axios.get(`${this.url}/${id}`)
        this.itemById = res.data
      } catch (error) {
        console.error('Ошибка при получении продуктов', error);
      }
    },
  },
  getters:{
    
  }
})