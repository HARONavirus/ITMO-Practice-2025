<script setup>
import { inject } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps ({
  pages : {
    type: Array,
    default: () => []
  }
})

const menu = inject('menu');
</script>

<template>
  <div v-if="menu.isOpen.value" class="header-menu">
    <div class="container">
      <div class="close-button">
        <img
          @click="menu.close()"
          src="@/assets/svg/close-btn.svg"
          alt="Кнопка закрыть"
          class="close-button__icon"
        >
      </div>
      <div class="header-menu__content">
        <img src="@/assets/svg/logo.svg" alt="Логотип" class="header-menu__content__logo">
        <div class="header-menu__content__list">
          <div v-for="page in pages" :key="page.title" class="header-menu__content__list__item">
            <p>{{ t(`header.pages.${page.title}`) }}</p>
          </div>
        </div>
      </div>
      <div class="header-menu__links">
        <img src="@/assets/svg/facebook.svg" alt="Иконка FaceBook" class="header-menu__links__item">
        <img src="@/assets/svg/twitter.svg" alt="Иконка Twitter" class="header-menu__links__item">
        <img src="@/assets/svg/youtube.svg" alt="Иконка YouTube" class="header-menu__links__item">
        <img src="@/assets/svg/tiktok.svg" alt="Иконка TikTok" class="header-menu__links__item-tok">
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 30px 15px;
  background-color: white;
  z-index: 100;
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 0 40px 0;
  width: 100%;
  height: 100%;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
}

.close-button__icon {
  width: 50px;
  height: 50px;
  opacity: 0.8;
  cursor: pointer;
    transition: transform 0.1s ease-in-out;

  &:hover {
    opacity: 1;
	}

  &:active {
    transform: scale(0.8);
  }
}

.header-menu__content {
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  width: 100%;
}

.header-menu__content__logo {
  width: 200px;
}

.header-menu__content__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.header-menu__content__list__item {
  font-family: "Inter", serif;
  font-weight: 400;
  font-size: 28px;
  text-align: center;
  cursor: pointer;
}

.header-menu__links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
}

.header-menu__links__item {
  width: 30px;
}

.header-menu__links__item-tok {
  width: 25px;
}
</style>
