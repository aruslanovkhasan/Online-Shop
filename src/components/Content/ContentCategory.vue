<template>
    <div class="main__bot-itemCat"
        v-for="item in productsByCategory"
        :key="item.id"
    >
        <div class="main__bot-itemCat-box">
            <img v-lazy="item.thumbnail" alt="" class="main__bot-item-bg">
            <div class="main__bot-desc">
                <p class="main__bot-itemCat-brand">{{ item.brand || 'Unknown' }}</p>
                <p class="main__bot-itemCat-title">{{ item.title }}</p>
                <p class="main__bot-itemCat-rating">Rating: {{ item.rating }}</p>
                <p class="main__bot-itemCat-sale">Price: ${{ item.price }}</p>
                <p class="main__bot-itemCat-price">Price: ${{ Math.round(item.price - item.price / 100 * Math.round(item.discountPercentage)) }}</p>
                <div class="btn__item-product">
                    <router-link :to="`${title}/` + item.id" class="btn__main">
                        <span class="btn__main-text">See More</span>
                    </router-link>
                </div>
            </div> 
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['title', 'productsByCategory'])
</script>

<style lang="scss" scoped>

</style>