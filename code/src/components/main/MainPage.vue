<script setup>
import MainContentList from './MainContentList.vue';
</script>

<template>
  <main class="main">
    <section class="main container">
      <MainContentList />
    </section>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 60vh;
}

.container {
  display: flex;
  justify-content: center;
  padding: 30px 200px;
  max-width: 1600px;
  width: 100%;
}

@media (max-width: 1440px) {
  .container {
    padding: 30px 50px;
  }
}

@media (max-width: 1280px) {
  .container {
    padding: 30px 30px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 30px 15px;
  }
}
</style>