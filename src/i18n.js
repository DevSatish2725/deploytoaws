import { lazy } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const en = lazy(() => import("./components/multilang/locales/en.json"));
const hi = lazy(() => import("./components/multilang/locales/hi.json"));
const sp = lazy(() => import("./components/multilang/locales/sp.json"));

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    sp: { translation: sp },
  },
  lng: "hi",
  fallbackLng: "hi",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
