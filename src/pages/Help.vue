<template>
    <div class="help">
        <div class="container">
        <h2 class="help__title">GET HELP</h2>
        <div class="help__block">
            <div class="help__left">
                <h3 class="help__left-title">WHAT PAYMENT OPTIONS CAN I USE ON SHOPIFY ORDERS?</h3>
                <p class="help__left-text">We want to make buying your favourite SHOPIFY products and gear online fast and easy, and we accept the following payment options:</p>
                <p class="help__left-texts">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                <p class="help__left-texts">If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
                <p class="help__left-texts">Apple Pay</p>
                <p class="help__left-text2"><span>SHOPIFY Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, <span>join us today.</span></p>
                <div class="help__left-btn">
                    <router-link to="/joinus">
                        <p class="help__left-btn-join">JOIN US</p>
                    </router-link>
                    <router-link to="/">
                        <p class="help__left-btn-join">SHOP SHOPIFY</p>
                    </router-link>
                </div>
                <h3 class="help__left-faq">FAQs</h3>
                <div class="help__left-faqbox">
                    <div class="help__left-faqbox-q1">
                        <h4 class="help__left-faq-title">Does my card need international purchases enabled?</h4>
                        <p class="help__left-faq-text">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                        <p class="help__left-faq-text">Please note, some banks may charge a small transaction fee for international orders.</p>
                    </div>
                    <div class="help__left-faqbox-q2">
                        <h4 class="help__left-faq-title">Can I pay for my order with multiple methods?</h4>
                        <p class="help__left-faq-text">No, payment for SHOPIFY orders can't be split between multiple payment methods.</p>
                    </div>
                    <div class="help__left-faqbox-q2">
                        <h4 class="help__left-faq-title">What payment method is accepted for Electronics orders?</h4>
                        <p class="help__left-faq-text">You can use any accepted credit card to pay for your Electronics order.</p>
                    </div>
                    <div class="help__left-faqbox-q2">
                        <h4 class="help__left-faq-title">Why don't I see Apple Pay as an option?</h4>
                        <p class="help__left-faq-text">To see Apple Pay as an option in the SHOPIFY App or on SHOPIFY, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on SHOPIFY.</p>
                    </div>
                </div>
            </div>
            <div class="help__right">
                <h3 class="help__right-title">CONTACT US</h3>
                <div class="help__right-tel">
                    <img src="@/assets/images/tel.svg" alt="" class="help__right-tel-img">
                    <p class="help__right-tel-text">000 800 919 0566</p>
                    <p class="help__right-tel-desc">
                    Products & Orders: 24 hours a day,
                        7 days a week
                    Company Info & Enquiries: 07:30 - 
                        16:30, Monday - Friday
                    </p>
                </div>
                <div class="help__right-msg">
                    <img src="@/assets/images/msg.svg" alt="" class="help__right-msg-img">
                    <p class="help__right-msg-text">24 hours a day</p>
                    <p class="help__right-msg-desc">7 days a week</p>
                </div>
                <div class="help__right-reply">
                    <img src="@/assets/images/reply.svg" alt="" class="help__right-reply-img">
                    <p class="help__right-reply-text">We'll reply within</p>
                    <p class="help__right-reply-desc">five business days</p>
                </div>
                <div class="help__right-loc">
                    <img src="@/assets/images/loc.svg" alt="" class="help__right-loc-img">
                    <p class="help__right-loc-text">STORE LOCATOR</p>
                    <p class="help__right-loc-desc">Find Shopify retail stores near you</p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.help{
    margin-top: 240px;
    &__title{
        color: #111;
        text-align: center;
        font-size: 38px;
        font-weight: 500;
        line-height: 36px;
    }
    &__block{
        display: flex;
        gap: 280px;
        padding: 30px;
    }
    &__left{
        max-width: 940px;
        width: 100%;
        margin-top: 50px;
        position: relative;
        &:after{
            content: '';
            position: absolute;
            width: 2px;
            height: 1045px;
            top: 0;
            right: -150px;
            background: grey;
        }
        &-title{
            color: #111;
            font-size: 32px;
            font-weight: 500;
            line-height: 32px; 
        }
        &-text{
            color: #111;
            font-size: 20px;
            font-weight: 500;
            line-height: 28px;
            margin-top: 38px;
        }
        &-texts{
            color: #111;
            font-size: 20px;
            font-weight: 500;
            line-height: 28px;
            margin-left: 32px;
            margin-top: 28px;
        }
        &-text2{
            margin-top: 31px;
            color: #111;
            font-size: 20px;
            font-weight: 500;
            line-height: 28px;
            & span{
                text-decoration: underline;
                font-weight: 600;
            }
        }
        &-btn{
            display: flex;
            gap: 20px;
            margin-top: 22px;
            margin-bottom: 50px;
            &-join{
                width: 150px;
                height: 50px;
                border-radius: 30px;
                background: #111;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFF;
                font-size: 16px;
                font-weight: 500;
                line-height: 24px;
            }
        }
        &-faq{
            color: #111;
            font-size: 35px;
            font-weight: 500;
            line-height: 24px;
            margin-bottom: 25px;
            &-title{    
                color: #111;
                font-size: 25px;
                font-weight: 700;
                line-height: 17px;
            }
            &-text{
                color: #111;
                font-size: 19px;
                font-weight: 500;
                line-height: 28px;
            }
        }
        &-faqbox{
            display: flex;
            flex-direction: column;
            gap: 25px;
            margin-bottom: 60px;
            &-q1{
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            &-q2{
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
        }
    }
    &__right{
        max-width: 310px;
        width: 100%;
        margin-top: 50px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 50px;
        &-title{
            color: #111;
            font-size: 32px;
            font-weight: 500;
            line-height: 32px; 
        }
        &-tel{
            max-width: 265px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            &-text{
                font-weight: 700;
                margin-top: 20px;
                font-size: 20px;
            }
            &-desc{
                text-align: center;
                font-size: 18px;
            }
        }       
        &-msg{
            max-width: 265px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
            &-text{
                font-weight: 700;
                margin-top: 20px;
                font-size: 20px;
            }
            &-desc{
                font-size: 18px;
            }
        }
        &-reply{
            max-width: 265px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
            &-text{
                font-weight: 700;
                margin-top: 20px;
                font-size: 20px;
            }
            &-desc{
                font-size: 18px;
            }
        }
        &-loc{
            max-width: 265px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            &-text{
                font-weight: 700;
                margin-top: 20px;
                font-size: 20px;
            }
            &-desc{
                font-size: 18px;
                text-align: center;
            }
        }
    }
}   

</style>