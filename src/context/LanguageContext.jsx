import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const translations = {
  en: {
    settings: "Settings",
    language: "Language",
    theme: "Theme",

    dashboard: "Dashboard",
    goals: "Goals",
    categories: "Categories",
    logout: "Logout",
  },

  fa: {
    settings: "تنظیمات",
    language: "زبان",
    theme: "تم",

    dashboard: "داشبورد",
    goals: "هدف‌ها",
    categories: "دسته‌بندی‌ها",
    logout: "خروج",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang(lang === "en" ? "fa" : "en");
  };

  useEffect(() => {
    document.body.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}