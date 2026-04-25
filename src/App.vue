<template>
  <div>
    <Navbar/>
    <router-view v-slot="{ Component }">
      <Transition name="scale" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>

<style lang="scss" scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>