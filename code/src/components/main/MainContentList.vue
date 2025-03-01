<script setup>
import MainContentCard from './MainContentCard.vue';

import { computed } from 'vue';
import { useContentStore } from '@/stores/content';

const contentStore = useContentStore();

const getContent = computed(() => contentStore.getCurrentContent);
</script>

<template>
  <div class="main-content-list">
    <div v-for="news in getContent" :key="news.title" class="main-content-list__item">
      <MainContentCard
        :image="news?.image"
        :title="news?.title"
        :description="news?.description"
        :date="news?.date"
      />
    </div>
  </div>
</template>

<style scoped>
.main-content-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
}
</style>