import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import ru from './locales/ru.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import zh from './locales/zh.json';


const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    en,
    ru,
    fr,
    es,
    zh
  },
});

export default i18n;