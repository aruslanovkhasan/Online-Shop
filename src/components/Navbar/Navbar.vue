<template>
  <nav class="intro__nav">
    <div class="container">
      <div class="intro__nav-box">
        <router-link to="/">
          <img src="@/assets/images/online.png" alt="" class="intro__nav-box-img">
        </router-link>
        <ul class="intro__nav-box-list">
          <li v-for="list in lists" :key="list.title">
            <router-link :to="list.url" class="intro__nav-box-link">
              {{ list.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav class="nav">
        <div class="container">
          <div class="nav__box">
            <router-link to="/" class="nav__box-logo">
              <i class="fab shopify"></i>
              <p class="nav__box-title">SHOPIFY</p>
            </router-link>
            <div class="menu" @click="menu = !menu" :class="{active: menu}">
              <span class="menu__span"></span>
            </div>
            <ul class="nav__list" :class="{active: menu}">
              <li v-for="link in links" :key="link.title">
                <router-link :to="link.url" class="nav__link">
                  {{ link.title }}
                </router-link>
              </li>
            </ul>
            <div class="nav__desc">
              <div class="nav__func">
                  <input 
                  type="search" 
                  placeholder="Search"
                  class="nav__func-search"
                  @click="getInfo"
                  v-model="search"
                  />
                    <img src="@/assets/images/search.svg" alt="" class="nav__func-img">
              </div>
              <router-link to="/basket" class="nav__link">
                <i class="fas nav__basket"></i>
              </router-link>
            </div>
          </div>
        </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";

const links = ref([
  {title: 'Main', url: '/'},
  {title: 'Men', url: '/men'},
  {title: 'Women', url: '/women'},
  {title: 'Furniture', url: '/furniture'},
  {title: 'Groceries', url: '/groceries'},
])

const lists = ref([
  {title: 'Find a Store', url: '/findastore'},
  {title: 'Help', url: '/help'},
  {title: 'Join Us', url: '/joinus'},
  {title: 'Sign In', url: '/signin'},
])

const menu = ref(false)
const search = ref('')
</script>

<style lang="scss" scoped>

</style>