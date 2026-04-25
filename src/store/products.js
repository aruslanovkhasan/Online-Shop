import axios from 'axios'
import { defineStore } from 'pinia';


export const useProducts = defineStore({
  id: 'products',
  state: () => ({
    url: 'https://dummyjson.com/products',
    products: null,
    items: null,
    categories: null,
    productBasket: [],
    totalSum: 0
  }),
  actions: {
    async getProducts({total, skip, sort, type}){
      try {
        const res = await axios.get(`${this.url}?sortBy=${sort}&order=${type}`, {
          params: {
            limit: 0,
            skip: 0
          }
        })
        this.products = res.data.products.slice(skip, total)
        this.persistCart()
        this.getTotal()
        this.items = res.data.products
      } catch (error) {
        console.error('Ошибка при получении продуктов', error);
      }
    },
    async getCategories(){
      try {
        const rep = await axios.get('https://dummyjson.com/products/category-list')
        this.categories = rep.data
      } catch (error) {
        console.error('Ошибка при получении категорий', error);
      } 
    },
    addToCart(product) {
      this.productBasket.push(product);
      this.getTotal()
      this.persistCart()
    },
    removeFromCart(index) {
      this.productBasket.splice(index, 1);
      this.getTotal()
      this.persistCart()
    },
    minusCart(item){
      item.minimumOrderQuantity--
      this.getTotal()
      this.persistCart()
    },
    plusCart(item){
      if(item.stock > item.minimumOrderQuantity){
      item.minimumOrderQuantity++
      this.getTotal()
      this.persistCart()
      }
    },
    getTotal(){
      this.productBasket.forEach(obj => {
        obj.total = Math.round(obj.price) * obj.minimumOrderQuantity
        this.persistCart()
      })
    },
    persistCart() {
      localStorage.setItem('cart', JSON.stringify(this.productBasket));
    },
    loadCart() {
      const cart = localStorage.getItem('cart');
      if (cart) {
        const unique = JSON.parse(cart);
        this.productBasket = unique.filter((obj, idx, arr) =>
        idx === arr.findIndex((t) => t.id === obj.id)
        )
      }
    },
  },
  getters:{
    
  }
})
