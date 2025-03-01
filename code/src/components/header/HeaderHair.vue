<script setup>
import { onMounted } from 'vue';
import { useContentStore } from '@/stores/content';
import { useI18n } from 'vue-i18n';

const contentStore = useContentStore();
const {locale} = useI18n()

const switchLocale = (newLocale) => {
  contentStore.setLocale(newLocale)
  locale.value = newLocale
}

onMounted(async () => {
  await contentStore.loadContent();
});
</script>

<template>
  <section class="lang-switcher">
    <div class="lang-switcher__block">
      <button @click="switchLocale('ru')" class="lang-switcher__block__ru">
        <img src="@/assets/svg/flags/ru-flag.svg" alt="Russian language" class="lang-switcher__block__ru__icon icon">
      </button>
      <button @click="switchLocale('en')" class="lang-switcher__block__en">
        <img src="@/assets/svg/flags/en-flag.svg" alt="English language" class="lang-switcher__block__en__icon icon">
      </button>
      <button @click="switchLocale('fr')" class="lang-switcher__block__fr">
        <img src="@/assets/svg/flags/fr-flag.svg" alt="French language" class="lang-switcher__block__fr__icon icon">
      </button>
      <button @click="switchLocale('es')" class="lang-switcher__block__es">
        <img src="@/assets/svg/flags/es-flag.svg" alt="Spanish language" class="lang-switcher__block__es__icon icon">
      </button>
      <button @click="switchLocale('zh')" class="lang-switcher__block__zh">
        <img src="@/assets/svg/flags/zh-flag.svg" alt="Chinese language" class="lang-switcher__block__zh__icon icon">
      </button>
    </div>
  </section>
</template>

<style scoped>
.lang-switcher {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  height: 50px;
  border-bottom: 1px solid black;
  background-color: white;
  z-index: 15;
}

.lang-switcher__block {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.lang-switcher__block__ru,
.lang-switcher__block__en,
.lang-switcher__block__fr,
.lang-switcher__block__es,
.lang-switcher__block__zh {
  height: 30px;
  background-color: white;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
}

.icon {
  width: 100%;
  height: 100%;
}
</style>
