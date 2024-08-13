import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationDE from './locales/de/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    ru: { translation: translationRU },
    de: { translation: translationDE },
  },
  lng: 'de',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }, // для защиты от XSS-атак
});

export default i18n;
