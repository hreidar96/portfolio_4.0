"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  translations,
  type Dictionary,
  type Language,
} from "@/lib/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Always start from the default ("is") so the server and first client render
  // match; the saved preference is applied after mount to avoid hydration
  // mismatches.
  const [language, setLanguageState] = useState<Language>("is");

  useEffect(() => {
    // Apply the saved preference only after mount: rendering "is" on the server
    // and first client render keeps hydration in sync, so this deliberate
    // post-mount setState is the intended pattern here.
    const saved = window.localStorage.getItem("language") as Language | null;
    if (saved === "en" || saved === "is") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    window.localStorage.setItem("language", lang);
  };

  const toggleLanguage = () => setLanguage(language === "is" ? "en" : "is");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider",
    );
  }
  return context;
}
