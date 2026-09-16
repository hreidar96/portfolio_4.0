// Languages the site is published in. Icelandic is the primary language.
// Keep in sync with `i18n.ts` in the Next.js app (routes are /is and /en).
export const languages = [
  {id: 'is', title: 'Íslenska'},
  {id: 'en', title: 'English'},
] as const

export type LanguageId = (typeof languages)[number]['id']

export const defaultLanguage: LanguageId = 'is'

type LocalizedValue<T> = {language?: string; value?: T}

// Pick the value for the default language from an internationalized array,
// for document previews in the Studio.
export function getDefaultLanguageValue<T>(field?: LocalizedValue<T>[]): T | undefined {
  return (field?.find((item) => item.language === defaultLanguage) ?? field?.[0])?.value
}
