import type { Language } from "@/i18n";

export default function LanguageSwitch({ language }: { language: Language }) {
  // Links to the other language's version of the page.
  const target: Language = language === "is" ? "en" : "is";

  return (
    // A full page load on purpose: switching language replaces the whole
    // document (<html lang>, metadata), which client-side navigation can't do cleanly.
    <a
      href={`/${target}`}
      hrefLang={target}
      aria-label={
        language === "is" ? "Switch to English" : "Skipta yfir í íslensku"
      }
      className="fixed bottom-5 right-[4.75rem] z-[1000] flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/80 text-sm font-semibold text-gray-700 shadow-lg backdrop-blur-md transition hover:scale-110 active:scale-105 dark:border-white/10 dark:bg-gray-900/80 dark:text-white/80"
    >
      {target.toUpperCase()}
    </a>
  );
}
