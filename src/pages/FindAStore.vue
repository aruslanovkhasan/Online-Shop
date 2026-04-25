<template>
    <div class="find">
        <div class="container">
            <h2 class="find__title">Find a Shopify Store</h2>
            <div class="find__store">
                <h3 class="find__store-title">3 Stores Near You</h3>
                <div class="find__store-block">
                    <div class="find__store-block-box">
                        <p class="find__store-block-box-text">Shopify NYC - House of Innovation 000</p>
                        <p class="find__store-block-box-desc">650 5th Ave.</p>
                        <p class="find__store-block-box-desc">New York, NY, 10019, US</p>
                        <p class="find__store-block-box-desc"><span>Closed</span> • Opens at 11:00 am</p>
                    </div>
                    <div class="find__store-block-box">
                        <p class="find__store-block-box-text">Shopify By Upper East Side</p>
                        <p class="find__store-block-box-desc">1131 3rd Ave.</p>
                        <p class="find__store-block-box-desc">New York, NY, 10065, US</p>
                        <p class="find__store-block-box-desc"><span>Closed</span> • Opens at 11:00 am</p>
                    </div>
                    <div class="find__store-block-box">
                        <p class="find__store-block-box-text">Shopify By Flatiron</p>
                        <p class="find__store-block-box-desc">156 Fifth Ave.</p>
                        <p class="find__store-block-box-desc">New York, NY, 10010, US</p>
                        <p class="find__store-block-box-desc"><span>Closed</span> • Opens at 11:00 am</p>
                    </div>
                </div>
            </div>
        </div>
        <img src="@/assets/images/find-bg.png" alt="" class="find__bg">
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.find{
    margin-top: 240px;
    position: relative;
    &__title{
        color: #111;
        font-size: 38px;
        font-weight: 500;
        line-height: 36px;
    }
    &__bg{
        position: absolute;
        max-width: 1319px;
        object-fit: cover;
        width: 100%;
        height: 829px;
        left: 480px;
        top: -200px;
        border-bottom: solid 1px #757575;
    }
    &__store{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 30px;
        &-title{
            font-size: 25px;
            color: #757575;
        }
        &-block{
            display: flex;
            flex-direction: column;
            &-box{
                margin-left: -20px;
                max-width: 480px;
                width: 100%;
                border-top: solid 1px #757575;
                border-bottom: solid 1px #757575;
                padding: 28px 32px;
                margin-top: -1px;
                display: flex;
                flex-direction: column;
                gap: 12px;
                &-text{
                    font-size: 18px;
                    font-weight: 700;
                }
                &-desc{
                    font-size: 16px;
                    color: #757575;
                    & span {
                        color: #D43F21;
                    }
                }
            }
        }
    }
}
</style>