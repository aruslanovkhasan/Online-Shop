<template>
    <div class="container">
        <div class="basket">
            <div class="basket__left">
                <div class="basket__left-top">
                    <p class="basket__left-top-text">Free Delivery</p>
                </div>
                <div class="basket__left-bot">
                    <h3 class="basket__left-bot-title">Basket</h3>
                    <div class="basket__left-bot-item" v-for="(item, idx) in productBasket" :key="idx">
                        <img class="basket__left-bot-item-img" :src="item.thumbnail" alt="">
                        <div class="basket__left-bot-item-info">
                            <h4 class="basket__left-bot-item-info-title">{{ item.title }}</h4>
                            <p class="basket__left-bot-item-info-category">{{ item.category }}</p>
                            <div class="basket__left-bot-item-info-dimensions">
                                <div class="basket__left-bot-item-info-dimensions-item">
                                    Width: {{ item.dimensions.width }},
                                </div>
                                <div class="basket__left-bot-item-info-dimensions-item">
                                    Height: {{ item.dimensions.height }},
                                </div>
                                <div class="basket__left-bot-item-info-dimensions-item">
                                    Depth: {{ item.dimensions.depth }}
                                </div>
                            </div>
                            <div class="basket__left-bot-item-info-policy">
                                <p class="basket__left-bot-item-info-policy-item">{{ item.warrantyInformation }},</p>
                                <p class="basket__left-bot-item-info-policy-item">{{ item.shippingInformation }},</p>
                                <p class="basket__left-bot-item-info-policy-item">{{ item.returnPolicy }}</p>
                            </div>
                            <div class="basket__left-bot-item-info-quantity">
                                Quantity: {{ item.stock > item.minimumOrderQuantity ? item.minimumOrderQuantity : item.minimumOrderQuantity = item.stock }}
                            </div>
                            <div class="basket__left-bot-item-info-dop">
                                <div class="basket__left-bot-item-info-dop-item">
                                    <i @click="plusCart(item)" class="fas fa-plus"></i>
                                </div>
                                <div @click="item.minimumOrderQuantity == 1 ? removeFromCart(idx) : minusCart(item)" class="basket__left-bot-item-info-dop-item">
                                    <i class="fas fa-minus"></i>
                                </div>
                                <div @click="removeFromCart(idx)" class="basket__left-bot-item-info-dop-item">
                                    <i class="fas fa-trash-can"></i>
                                </div>
                        </div>
                        </div>
                        <p class="basket__left-bot-item-price">${{ item.total }}</p>
                    </div>
                </div>
            </div>
            <div class="basket__right">
                <h3 class="basket__right-title">Summary</h3>
                <div class="basket__right-box">
                    <div class="basket__right-box-sub">
                        <div class="basket__right-box-sub-item">
                            <p class="basket__right-box-sub-text">Subtotal</p>
                            <p class="basket__right-box-sub-text">${{ getTotalPrice(productBasket) }}</p>
                        </div>
                        <div class="basket__right-box-sub-item">
                            <p class="basket__right-box-sub-text">Estimated Delivery & Handling</p>
                            <p class="basket__right-box-sub-text">Free</p>
                        </div>
                    </div>
                    <div class="basket__right-box-total">
                        <p class="basket__right-box-total-text">Total</p>
                        <p class="basket__right-box-total-text">${{ getTotalPrice(productBasket) }}</p>
                    </div>
                </div>
                <a href="#" class="basket__right-btn">Order</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useProducts } from "@/store/products";

onMounted(() => {
productsStore.loadCart()
})

const productsStore = useProducts()
const productBasket = computed(()=> productsStore.productBasket)

const removeFromCart = async (idx) => {
    await productsStore.removeFromCart(idx)
}

const minusCart = async (item) => {
    await productsStore.minusCart(item)
}
const plusCart = async (item) => {
    await productsStore.plusCart(item)
}

const getTotalPrice = () => {
    return productBasket.value.reduce((a, b) => a + b.total, 0)
}


</script>

<style lang="scss" scoped>

.basket{
    margin-top: 200px;
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-bottom: 100px;
    &__left{
        display: flex;
        flex-direction: column;
        gap: 15px;
        max-width: 800px;
        width: 100%;
        &-top{
            background: #F7F7F7;
            &-text{
                padding: 14px 8px;
                font-weight: 500;
                font-size: 18px;
            }
        }
        &-bot{
            &-title{
                font-size: 22px;
                line-height: 33px;
                font-weight: 500;
            }
            &-item{
                padding: 24px 0px;
                border-bottom: 2px solid #dfdada;
                display: flex;
                justify-content: space-between;
                &-img{
                    object-fit: cover;
                    width: 150px;
                    height: 150px;
                }
                &-info{
                    display: flex;
                    flex-direction: column;
                    margin-left: -120px;
                    &-dop{
                        display: flex;
                        gap: 25px;
                        margin-top: 20px;
                        &-item{
                            cursor: pointer;    
                        }
                    }
                    &-title{
                        color: #111;
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 28px;
                    }
                    &-category{
                        font-size: 18px;
                        line-height: 28px;
                        color: #757575;
                        text-transform: capitalize;
                    }
                    &-dimensions{
                        display: flex;
                        gap: 10px;
                        &-item{
                            font-size: 17px;
                            line-height: 25px;
                            color: #757575;
                            text-transform: capitalize;
                        }
                    }
                    &-policy{
                        display: flex;
                        gap: 10px;
                        &-item{
                            font-size: 17px;
                            line-height: 25px;
                            color: #757575;
                            text-transform: capitalize;
                        }
                    }
                    &-quantity{
                        font-size: 17px;
                        line-height: 25px;
                        color: #757575;
                        text-transform: capitalize;
                    }
                }
                &-price{
                    color: #111;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 28px;
                }
            }
        }
    }
    &__right{
        max-width: 350px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 25px;
        &-title{
            font-weight: 700;
            font-size: 21px;
            line-height: 33px;
        }
        &-box{
            display: flex;
            flex-direction: column;
            gap: 20px;
            &-sub{
                display: flex;
                flex-direction: column;
                gap: 10px;
                &-item{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                &-text{
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 28px;
                }
            }
            &-total{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 0;
                border-top: 2px solid #b1afaf;
                border-bottom: 2px solid #b1afaf;
                &-text{
                    font-weight: 700;
                    font-size: 17px;
                    line-height: 28px;
                }
            }
        }
        &-btn{
            max-width: 350px;
            width: 100%;
            padding: 18px 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #111111;
            color: #FFFFFF;
            font-size: 17px;
            font-weight: 500;
            line-height: 24px;
            border-radius: 30px;
        }
    }
}
</style>