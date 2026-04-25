<template>
    <div class="about" v-if="getItemId">
        <img :src="getItemId.thumbnail" alt="" class="about__img">
        <div class="about__box">
            <h2 class="about__box-item-title">{{ getItemId.title }}</h2>
            <div class="about__box-item">
                <Swiper
                :navigation="true"
                :loop="true"
                :modules="modules"
                :slidesPerView="1.5"
                :centeredSlides="true"
                :grabCursor="true"
                :space-between="25"
                :autoplay="autoDelay"
                :speed="800"
                class="about__swiper"
                >
                    <Swiper-slide 
                    v-for="item in getItemId.images" 
                    :key="item"
                    class="about__swiper-item"
                    >
                        <img v-lazy="item" alt="">
                    </Swiper-slide>
                </Swiper>
                <p class="about__box-item-brand">{{ getItemId.brand }}</p>
                <p class="about__box-item-text">{{ getItemId.description }}</p>
                <p class="about__box-item-price">Price: ${{ getItemId.price }}</p>
                <p class="about__box-item-sale">Price: <span>${{ Math.round(getItemId.price - getItemId.price / 100 * Math.round(getItemId.discountPercentage)) }}</span></p>
                <p class="about__box-item-stock">Stock: <span>{{ getItemId.stock }}</span></p>
            </div>
        </div>
    </div>
    <Loader v-else/>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, computed, ref } from "vue";
import { useItemById } from "@/store/itembyid";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const modules = ref([Navigation, Autoplay]);

const autoDelay = ref({
  delay: 2000,
  disableOnInteraction: false,
});

const storeItemById = useItemById()
const route = useRoute()

onMounted(() => {
  storeItemById.getItemById({id: route.params.id})
})

const getItemId = computed(() => storeItemById.itemById)


</script>

<style lang="scss" scoped>

</style>