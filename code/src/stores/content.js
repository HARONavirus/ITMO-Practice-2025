import { defineStore } from 'pinia';
import ru from '../i18n/locales/ru.json';
import en from '../i18n/locales/en.json';
import fr from '../i18n/locales/fr.json';
import es from '../i18n/locales/es.json';
import zh from '../i18n/locales/zh.json';

export const useContentStore = defineStore('content', {
  state: () => ({
    content: {
      ru: [],
      en: [],
      fr: [],
      es: [],
      zh: []
    },
    currentLocale: 'ru'
  }),
  getters: {
    getCurrentContent: (state) => state.content[state.currentLocale],
    getContentByLocale: (state) => (locale) => state.content[locale]
  },
  actions: {
    async loadContent() {
      // Имитация API запроса.  В реальном приложении здесь будет запрос к API.
      await new Promise(resolve => setTimeout(resolve, 500))

      this.content = {
        ru: ru.content,
        en: en.content,
        fr: fr.content,
        es: es.content,
        zh: zh.content
      };
    },

    setLocale(locale) {
      this.currentLocale = locale;
    }
  }
});