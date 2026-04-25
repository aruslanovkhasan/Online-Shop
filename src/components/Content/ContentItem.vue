<template>
    <div class="main__bot-item" v-if="categ == 'All'">
        <img v-if="product.discountPercentage >= 5 && product.stock > 0" class="main__bot-item-img" src="@/assets/images/discount.png" alt="">
        <img v-if="product.stock == 0" class="main__bot-item-img" src="@/assets/images/out-of-stock.png" alt="">
        <div class="main__bot-item-png">
            <img v-lazy="product.thumbnail" alt="" class="main__bot-item-bg">
            <router-link :to="`${title}/` + product.id" class="main__bot-btn">
                <span class="main__bot-btn-text">See More</span>
            </router-link>
            <div class="main__bot-item-info">
                <p v-if="product.discountPercentage >= 5" class="main__bot-item-info-text discount">Discount: {{ Math.floor(product.discountPercentage) }}%</p>
                <p class="main__bot-item-info-text rating">Rating: {{ product.rating }}</p>
                <p class="main__bot-item-info-text">Stock: {{ product.stock }}</p>
            </div>
        </div>
        <div class="main__bot-desc">
            <p class="main__bot-item-brand">{{ product.brand || 'Unknown' }}</p>
            <p class="main__bot-item-title">{{ product.title }}</p>
            <p class="main__bot-item-price">Price: ${{ Math.round(product.price) }}</p>
            <div class="btn__item-product">
                <button v-if="product.stock > 0" class="btn__main" @click="addCart(product)">
                    <span class="btn__main-text">Add to Cart</span>
                </button>
                <star-rating :rtl="true" :increment="0.01"></star-rating>
            </div>
        </div> 
    </div>
</template>

<script setup>
import StarRating from 'vue-star-rating';
import { useProducts } from "@/store/products";
const props = defineProps(['product', 'title', 'categ']);

const productsStore = useProducts()

const addCart = async (product) => {
    await productsStore.addToCart(product)
}
</script>

<style lang="scss" scoped>

</style>