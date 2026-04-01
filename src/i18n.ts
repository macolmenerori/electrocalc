import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

//Import all translation files
import English from '../public/locales/en.json';
import Spanish from '../public/locales/es.json';

const resources = {
  en: {
    translation: English
  },
  es: {
    translation: Spanish
  }
};

// SSR guard: Only use LanguageDetector in browser
const isBrowser = typeof window !== 'undefined';

const i18nInstance = i18next.use(initReactI18next);

if (isBrowser) {
  i18nInstance.use(LanguageDetector);
}

i18nInstance.init({
  resources,
  fallbackLng: 'en', // Default language english
  lng: isBrowser ? undefined : 'en' // Force English during SSR
});

export default i18next;
