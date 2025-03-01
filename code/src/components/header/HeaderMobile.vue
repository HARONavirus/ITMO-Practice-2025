<script setup>
import { inject } from 'vue';

const menu = inject('menu');
</script>

<template>
  <header>
    <div class="header-mobile">
      <img
        src="@/assets/svg/search.svg"
        alt="Иконка поиска"
        class="header-mobile__search-btn"
      >
      <img
        src="@/assets/svg/logo.svg"
        alt="Логотип сайта"
        class="header-mobile__logo"
      >
      <img
        @click="menu.open()"
        src="@/assets/svg/burger.svg"
        alt="Иконка меню"
        class="header-mobile__menu-btn"
      >
    </div>
  </header>
</template>

<style scoped>
.header-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 20px;
  border-bottom: 1px solid black;
  margin-top: 50px;
}

.header-mobile__search-btn {
  width: 20px;
  height: 20px;
}

.header-mobile__logo {
  width: 113px;
  height: 24px;
}

.header-mobile__menu-btn {
  width: 28px;
  height: 11px;
}

@media (min-width: 768px) {
  .header-mobile {
    height: 84px;
  }

  .header-mobile__search-btn {
    width: 30px;
    height: 30px;
  }

  .header-mobile__logo {
    width: 123px;
    height: 34px;
  }

  .header-mobile__menu-btn {
    width: 38px;
    height: 21px;
  }
}
</style>
