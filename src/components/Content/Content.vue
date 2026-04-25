<template>
    <div class="container">
    <main class="main" v-if="products">  
        <div class="main__top">        
            <h2 class="main__top-title">{{ categ }}</h2>
            <div class="content__top-sort" :class="{active: appear}">
                <p @click="appear = !appear">Sort By</p>
                <i @click="appear = !appear" class="fas angle up"></i>
                <div class="content__top-sort-box" :class="{active: appear}">
                    <button 
                        class="content__top-sort-box-btns" 
                        v-for="(btn, idx) in btns"
                        :key="idx"
                        :class="{active: isActive == idx}"
                        @click="getSort(idx, btn.name, btn.type)"
                         >
                          {{ btn.name }}
                    </button>
                </div>
            </div>  
        </div>
        <div class="main__bot">
            <div class="main__bot-left">
                <ul class="main__list">
                    <li>
                        <div @click="getAll()" class="main__link">All</div>
                    </li>
                    <li v-for="item in categoryList" :key="item.id">
                        <div @click="getCateg(item)" class="main__link">{{ item }}</div>
                    </li>
                </ul>
                <div class="main__bot-shop">
                    <h2 class="main__bot-title">Shop By Price</h2>
                    <i class="fas sliders"></i>
                </div>
                    <div 
                    class="main__bot-link" 
                    v-for="(item, idx) in shop" 
                    :key="idx" 
                    :class="{active: isTurned == idx}"
                    @click="getShopPrice(item.name, item.type, idx)"
                    >
                        {{ item.title }}
                        <i class="fas fa-check"></i>
                    </div>
            </div>
            <div class="main__bot-right">
                <div class="main__bot-grid" v-if="categ == 'All'">
                        <ContentItem
                            v-for="product in products" 
                            :key="product.id"
                            :title="title"
                            :product="product"
                            :categ="categ"
                        />
                </div>
                <div class="main__bot-another" v-if="categ !== 'All'">
                    <ContentCategory
                        :title="title"
                        :productsByCategory="productsByCategory"
                    />
                </div>
                <div class="pagination" v-if="products && categ == 'All'"> 
                    <div class="pagination__box">
                    <button @click="total(current - 1)" :disabled="current == 1">❮</button>
                    <span @click="total(1)" :class="{active: current == 1}">1</span>
                    <span @click="total(2)" :class="{active: current == 2}">2</span>
                    <span @click="total(3)" :class="{active: current == 3}">3</span>
                    <span @click="total(4)" :class="{active: current == 4}">4</span>
                    <span @click="total(5)" :class="{active: current == 5}">5</span>
                    <span @click="total(6)" :class="{active: current == 6}">6</span>
                    <span @click="total(7)" :class="{active: current == 7}">7</span>
                    <span @click="total(8)" :class="{active: current == 8}">8</span>
                    <span @click="total(9)" :class="{active: current == 9}">9</span>
                    <span @click="total(10)" :class="{active: current == 10}">10</span>
                    <button @click="total(current + 1)" :disabled="current == 10">❯</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Loader v-else/>
    </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useProducts } from "@/store/products";
import { useProductByCategory } from "@/store/productsByCategory";
import ContentItem from "@/components/Content/ContentItem.vue";
import ContentCategory from "@/components/Content/ContentCategory.vue";

const props = defineProps(['title'])

const productsStore = useProducts()
const productByCategoryStore = useProductByCategory()

onMounted(() => {
productsStore.getProducts({total: 21, skip: 0, sort: 'title', type: 'asc'}),
productsStore.getCategories()
productByCategoryStore.getProductByCategory({category: categ.value, sort: 'title', type: 'asc'})
})

const products = computed(()=> productsStore.products)
const categoryList = computed(()=> productsStore.categories)
const productsByCategory = computed(()=> productByCategoryStore.productByCategory)

const getAll = () => {
    categ.value = 'All'
}
const total = async (newTotal) => {
  current.value = newTotal
  await productsStore.getProducts({total: current.value * 21, skip: current.value * 21 - 21, sort: sort.value, type: type.value})

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
const getSort = async (index, item, types) => {
    isTurned.value = null
    sort.value = item
    type.value = types
    isActive.value = index
    await productsStore.getProducts({total: current.value * 21, skip: current.value * 21 - 21, sort: sort.value, type: type.value})
    await productByCategoryStore.getProductByCategory({category: categ.value, sort: sort.value, type: type.value})
}
const getShopPrice = async (item, types, index) => {
    isActive.value = null
    sort.value = item
    type.value = types
    isTurned.value = index
    await productsStore.getProducts({total: current.value * 21, skip: current.value * 21 - 21, sort: sort.value, type: type.value})
    await productByCategoryStore.getProductByCategory({category: categ.value, sort: sort.value, type: type.value})
}
const getCateg = async (item) => {
    categ.value = item
    await productByCategoryStore.getProductByCategory({category: categ.value, sort: sort.value, type: type.value})
}

const categ = ref('All')
const current = ref(1)
const btns = ref([
    {name: 'title', type: 'asc'},
    {name: 'rating', type: 'desc'},
    {name: 'stock', type: 'desc'} 
])


const shop = ref([
    {title: 'Ascending', name: 'price', type: 'asc'},
    {title: 'Descending', name: 'price', type: 'desc'},
])
const sort = ref('title')
const isActive = ref(0)
const isTurned = ref(null)
const appear = ref(false)
const type = ref('asc')

</script>

<style lang="scss" scoped>

</style>