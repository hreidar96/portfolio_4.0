// Languages the site is published in; each gets its own route (/is, /en).
// Keep in sync with `studio/lib/languages.ts`.
export const languages = ["is", "en"] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "is";

export function isLanguage(value: string): value is Language {
  return (languages as readonly string[]).includes(value);
}
