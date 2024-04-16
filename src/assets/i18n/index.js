import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './lang/en';
import { sw } from './lang/sw'; // Import Swahili language file

i18next.use(initReactI18next).init({
  fallbackLng: 'en-GB',
  lng: localStorage.getItem('language'),
  resources: {
    'en-GB': en,
    'sw': sw, // Add Swahili language key and its file
  },
});
