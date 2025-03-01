<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps ({
  pages : {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="header-desktop">
    <img
      src="@/assets/svg/logo.svg"
      alt="Логотип сайта"
      class="header-desktop__logo"
    >
    <div class="header-desktop__content">
      <div v-if="pages" class="header-desktop__content__list">
        <div
          v-for="page in pages"
          :key="page.title"
          class="header-desktop__content__list__item"
        >
          <span class="header-desktop__content__list__item-text" :data-linktext="t(`header.pages.${page.title}`)">
            <p>{{ t(`header.pages.${page.title}`) }}</p>
          </span>
        </div>
      </div>
      <div class="header-desktop__content__search-block">
        <input
          type="search"
          id="search"
          name="search"
          :placeholder="t('header.search') + '...'"
          class="header-desktop__content__search-block__label"
        >
        <img src="@/assets/svg/search-input.svg" alt="Иконка поиска" class="header-desktop__content__search-block__icon">
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-desktop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 92px;
  padding: 0 80px;
  border-bottom: 1px solid black;
  margin-top: 50px;
}

.header-desktop__logo {
  width: 122px;
  height: 24px;
}

.header-desktop__content {
  display: flex;
  flex-direction: row;
  gap: 84px;
}

.header-desktop__content__list {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 60px;
}

.header-desktop__content__list__item {
  position: relative;
  overflow: hidden;
  display: inline-block;

  font-family: "Inter", serif;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
}

.header-desktop__content__list__item:hover {
  .header-desktop__content__list__item-text {
    transform: translateY(-110%);
  }

  .header-desktop__content__list__item-text::after {
    transform: skewY(0deg);
  }
}

.header-desktop__content__list__item-text {
  display: inline-block;
  transition: transform 0.5s cubic-bezier(0, 0, 0.2, 1);
}

.header-desktop__content__list__item-text::after {
  content: attr(data-linktext);
  position: absolute;
  top: 110%;
  transform-origin: left top;
  transform: skewY(5deg);
  display: block;
  color: inherit;
  transition: transform 1s cubic-bezier(0, 0, 0.2, 1);
}

.header-desktop__content__search-block {
  position: relative;
  width: 260px;
  height: 38px;
}

.header-desktop__content__search-block__label {
  width: 100%;
  height: 100%;
  border-radius: 24px;
  border: 1px solid #D2D2D2;
  padding: 0 20px 0 40px;
  font-family: "Inter", serif;
  font-weight: 400;
  font-size: 14px;
  color: #8C8C8C;
  
  &:focus {
    outline: none;
    border-color: black;
    box-shadow: 0 0 0 2px rgba(61, 61, 61, 0.25);
  }
}

.header-desktop__content__search-block__icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
