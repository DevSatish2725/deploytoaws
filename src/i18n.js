import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./components/multilang/locales/en.json";
import hi from "./components/multilang/locales/hi.json";
import sp from "./components/multilang/locales/sp.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    sp: { translation: sp }
  },
  lng: "hi",
  fallbackLng: "hi",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;