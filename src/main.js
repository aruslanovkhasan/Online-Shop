import { createApp } from 'vue'
import { createPinia } from "pinia";
import _ from 'lodash';
import { routers } from "@/router";
import './assets/style/main.scss'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

const app = createApp(App)
const pinia = createPinia()

import Products from "@/components/Products/Products.vue";
import Loader from "@/components/UI/Loader.vue";

import errorImage from "@/assets/images/error.png";
app.use(VueLazyload, {
  error: errorImage
})

app.component('Products', Products)
app.component('Loader', Loader)
app.use(pinia)
app.use(routers)
app.mount('#app')
