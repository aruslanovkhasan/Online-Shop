<template>
    <div class="container">
        <main class="content" v-if="items">
        <div class="content__top">      
            <h2 class="content__top-title">{{ props.title }}</h2>
            <div class="content__top-sort" :class="{active: appear}">
                <p @click="appear = !appear">Sort By</p>
                <i @click="appear = !appear" class="fas angle up"></i>
                <div class="content__top-sort-box" :class="{active: appear}">
                    <button 
                        class="content__top-sort-box-btn" 
                        v-for="(btn, idx) in btns"
                        :key="idx"
                        :class="{active: isActive == idx}"
                        @click="getSortCateg(idx, btn.name, btn.type)"
                         >
                          {{ btn.title }}
                    </button>
                </div>
            </div>  
        </div>
        <div class="content__bot">
                <div class="content__bot-grid" v-if="items">
                    <div class="content__bot-item" 
                    v-for="item in items" 
                    :key="item.id" 
                    v-show="item.category.includes(typeTwo) || item.category.includes(type) && type[0] == item.category[0]"
                    >
                        <div class="content__bot-item-box">
                        <img v-lazy="item.thumbnail" alt="" class="content__bot-item-bg">
                        <div class="content__bot-desc">
                            <p class="content__bot-item-brand">{{ item.brand || 'Unknown'}}</p>
                            <p class="content__bot-item-title">{{ item.title }}</p>
                            <p class="content__bot-item-rating">Stock: {{ item.stock }}</p>
                                <p class="content__bot-item-sale">Price: ${{ item.price }}</p>
                            <p class="content__bot-item-price">Discount: {{ Math.round(item.discountPercentage) }}%</p>
                            <div class="content__bot-item-product">
                                <router-link :to="`${title}/` + item.id" class="btn__about">
                                    <span class="btn__about-text">See More</span>
                                </router-link>
                                <div class="btn__about-box">
                                    <button class="btn__about-link">
                                        <img src="@/assets/images/sell-icon.svg" alt="">
                                        <span class="btn__about-count"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Loader v-else/>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import { useProducts } from "@/store/products";
import { useItemById } from "@/store/itembyid";

const itemByIdStore = useItemById()
const productsStore = useProducts()

const props = defineProps(['type', 'title', 'typeTwo'])

const items = computed(()=> productsStore.items)

onMounted(() => {
productsStore.getProducts({sort: sortCateg.value, type: typic.value})
})

const btns = ref([
    {title: 'title', name: 'title', type: 'asc'},
    {title: 'rating', name: 'rating', type: 'desc'},
    {title: 'stock', name: 'stock', type: 'desc'} ,
    {title: 'asc. price', name: 'price', type: 'asc'},
    {title: 'desc. price', name: 'price', type: 'desc'}
])
const typic = ref('')
const isActive = ref(0)
const appear = ref(false)

const getSortCateg = async (index, item, types) => {
    sortCateg.value = item
    typic.value = types
    isActive.value = index
    await productsStore.getProducts({sort: item, type: types})
}
const sortCateg = ref('title')
</script>

<style lang="scss" scoped>

</style>