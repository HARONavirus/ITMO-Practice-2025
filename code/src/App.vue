<script setup>
import { RouterView } from 'vue-router'

import HeaderComponent from './components/header/HeaderComponent.vue';
import FooterComponent from './components/footer/FooterComponent.vue';
</script>

<template>
  <body>
    <HeaderComponent />
    <router-view></router-view>
    <FooterComponent />
  </body>
</template>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
