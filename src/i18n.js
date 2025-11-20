import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationAR from "./locales/ar/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      ar: { translation: translationAR },
    },
    lng: "ar",
    fallbackLng: "ar",
    interpolation: { escapeValue: false },
  });

// تغيير اتجاه الصفحة حسب اللغة
i18n.on("languageChanged", (lng) => {
  document.body.dir = lng === "ar" ? "rtl" : "ltr";
});

export default i18n;
