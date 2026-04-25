import { createWebHistory, createRouter } from "vue-router";

export const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'main', component: ()=> import('@/pages/Main.vue')},
        {path: '/men', name: 'men', component: ()=> import('@/pages/Men.vue')},
        {path: '/women', name: 'women', component: ()=> import('@/pages/Women.vue')},
        {path: '/furniture', name: 'toprated', component: ()=> import('@/pages/Furniture.vue')},
        {path: '/groceries', name: 'groceries', component: ()=> import('@/pages/Groceries.vue')},
        {path: '/basket', name: 'basket', component: ()=> import('@/pages/Basket.vue')},
        {path: '/findastore', name: 'findastore', component: ()=> import('@/pages/FindAStore.vue')},
        {path: '/help', name: 'help', component: ()=> import('@/pages/Help.vue')},
        {path: '/joinus', name: 'joinus', component: ()=> import('@/pages/JoinUs.vue')},
        {path: '/signin', name: 'signin', component: ()=> import('@/pages/SignIn.vue')},
        {path: '/:title/:id', name: 'titleid', component: ()=> import('@/pages/Product.vue')},
    ]
})