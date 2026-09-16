"use client";

import { useLanguage } from "@/context/language-context";

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  // Show the language the button switches TO. The context starts at "is" on
  // both server and first client render, so this label never mismatches.
  const label = language === "is" ? "EN" : "IS";

  return (
    <button
      onClick={toggleLanguage}
      aria-label={
        language === "is" ? "Switch to English" : "Skipta yfir í íslensku"
      }
      className="fixed bottom-5 right-[4.75rem] z-[1000] flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/80 text-sm font-semibold text-gray-700 shadow-lg backdrop-blur-md transition hover:scale-110 active:scale-105 dark:border-white/10 dark:bg-gray-900/80 dark:text-white/80"
    >
      {label}
    </button>
  );
}
