<script setup>
import { ref, watch } from 'vue';
import { useDateFormat } from '@/composables/useDateFormat';

const props = defineProps({
  image: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  date: {
    type: String,
    default: ""
  }
});

const dateRef = ref(props.date);

const { formatDate } = useDateFormat(dateRef);

watch(
  () => props.date,
  (newDate) => {
    dateRef.value = newDate;
  }
);
</script>

<template>
  <div class="main-content-card">
    <img :src="image" alt="Фотография новости" class="main-content-card__image">
    <div class="main-content-card__content">
      <div class="main-content-card__content__block">
        <p class="main-content-card__content__block__title">{{ title }}</p>
        <div v-html="description" class="main-content-card__content__block__description" />
      </div>
      <div class="main-content-card__content__date-block">
        <p class="main-content-card__content__date-block__date">{{ formatDate }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-content-card {
  display: flex;
  gap: 30px;
  width: 100%;
  height: 500px;
  background-color: #F1F1F1;
  padding: 30px;
  border-radius: 20px;
}

.main-content-card__image {
  width: 40%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.main-content-card__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-content-card__content__block {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.main-content-card__content__block__title {
  font-family: "Inter", serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
}

.main-content-card__content__block__description {
  font-family: "Inter", serif;
  font-weight: 400;
  font-size: 16px;
}

.main-content-card__content__date-block {
  display: flex;
  justify-content: flex-end;
}

.main-content-card__content__date-block__date {
  font-family: "Inter", serif;
  font-weight: 400;
  font-size: 14px;
  margin-top: 20px;
}

@media (max-width: 1280px) {
  .main-content-card {
    height: auto;
  }
}

@media (max-width: 768px) {
  .main-content-card {
    flex-direction: column;
  }

  .main-content-card__image {
    width: 100%;
    height: 300px;
  }
}
</style>