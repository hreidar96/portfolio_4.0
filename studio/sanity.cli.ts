import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '7mzw821b',
    dataset: 'production',
  },
  studioHost: 'hreidarhallgrims',
  deployment: {
    appId: 'l4jikr7n9mklf438em9dzckz',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
  typegen: {
    enabled: true,
    // The Next.js app lives at the repository root, one level up.
    path: '../{app,components,sanity}/**/*.{ts,tsx}',
    schema: 'schema.json',
    generates: '../sanity.types.ts',
  },
})
