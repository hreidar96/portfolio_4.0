import {defineLocations, type PresentationPluginOptions} from 'sanity/presentation'
import {languages} from '../lib/languages'

// Everything renders on the single home page, available once per language.
const homeLocations = (section?: string) =>
  languages.map((language) => ({
    title: `Home (${language.id.toUpperCase()})`,
    href: `/${language.id}${section ? `#${section}` : ''}`,
  }))

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    homePage: defineLocations({locations: homeLocations()}),
    settings: defineLocations({locations: homeLocations()}),
    service: defineLocations({locations: homeLocations('services')}),
    project: defineLocations({locations: homeLocations('work')}),
  },
  mainDocuments: languages.map((language) => ({
    route: `/${language.id}`,
    filter: `_id == "homePage"`,
  })),
}
