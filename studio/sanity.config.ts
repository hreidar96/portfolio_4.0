import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {defaultLanguage, languages} from './lib/languages'
import {resolve} from './presentation/resolve'
import {schemaTypes} from './schemaTypes'
import {SINGLETON_TYPES, structure} from './structure'

// The website the Presentation tool previews. Overridden to localhost in
// `.env.development` while running `sanity dev`.
const previewOrigin = process.env.SANITY_STUDIO_PREVIEW_ORIGIN || 'https://hreidarhallgrims.com'

export default defineConfig({
  name: 'default',
  title: 'Hreiðar Hallgríms',

  projectId: '7mzw821b',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    presentationTool({
      resolve,
      previewUrl: {
        initial: `${previewOrigin}/${defaultLanguage}`,
        previewMode: {enable: '/api/draft-mode/enable'},
      },
      allowOrigins: ['http://localhost:*', 'https://hreidarhallgrims.com'],
    }),
    internationalizedArray({
      languages: [...languages],
      defaultLanguages: [defaultLanguage],
      fieldTypes: ['string', 'text', 'blockContent', 'tagList'],
      buttonLocations: ['field', 'document'],
      languageDisplay: 'titleAndCode',
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Hide singletons from the global "New document" menu.
    templates: (templates) => templates.filter(({schemaType}) => !SINGLETON_TYPES.includes(schemaType)),
  },

  document: {
    // Singletons can't be duplicated, deleted or unpublished.
    actions: (actions, {schemaType}) =>
      SINGLETON_TYPES.includes(schemaType)
        ? actions.filter(({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : actions,
  },
})
