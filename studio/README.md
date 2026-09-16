# Portfolio Studio

Sanity Studio for hreidarhallgrims.com. Hosted at https://hreidarhallgrims.sanity.studio (project `7mzw821b`, dataset `production`).

```bash
npm install
npm run dev        # http://localhost:3333 — Presentation previews http://localhost:3000
npm run typegen    # Extract schema and regenerate ../sanity.types.ts from the app's GROQ queries
npm run deploy     # Deploy the hosted Studio
npx sanity schema deploy   # Deploy the schema to the Content Lake
```

## Content model

- **Home page** (`homePage`, singleton) — hero, services, work, about and contact sections. Services and projects are references, so their order is set here.
- **Site settings** (`settings`, singleton) — name, email, portrait, CV, social links, SEO, navigation and footer text.
- **Service** / **Project** — one document each.

Text fields are localized per field with `sanity-plugin-internationalized-array` (Icelandic `is`, English `en`). The languages are defined in `lib/languages.ts` and must match `i18n.ts` in the app.
