<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <main>
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
</template>

<style>
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in;
}
.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
