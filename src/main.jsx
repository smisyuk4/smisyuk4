import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainPage } from './pages/mainPage';
import './index.css';

import global_en from './translation/en/global.json';
import global_ua from './translation/ua/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      global: global_en,
    },
    ua: {
      global: global_ua,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <MainPage />
    </I18nextProvider>
  </React.StrictMode>
);
