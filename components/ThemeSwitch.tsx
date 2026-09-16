"use client";

import { useTheme } from "@/context/theme-context";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeSwitch() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="fixed bottom-5 right-5 z-[1000] flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/80 text-lg text-gray-700 shadow-lg backdrop-blur-md transition hover:scale-110 active:scale-105 dark:border-white/10 dark:bg-gray-900/80 dark:text-white/80"
    >
      {/* Both icons render on server and client (no hydration mismatch); the
          `.dark` class — set before paint by the no-flash script — picks one. */}
      <BsSun className="dark:hidden" />
      <BsMoon className="hidden dark:block" />
    </button>
  );
}
