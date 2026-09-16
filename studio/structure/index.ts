import type {ComponentType} from 'react'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'
import {CogIcon} from '@sanity/icons/Cog'
import {HomeIcon} from '@sanity/icons/Home'

// Singleton types are edited through fixed documents, never listed or created generically.
export const SINGLETON_TYPES = ['settings', 'homePage']

function singleton(S: StructureBuilder, typeName: string, title: string, icon: ComponentType) {
  return S.listItem()
    .title(title)
    .id(typeName)
    .icon(icon)
    .child(S.document().schemaType(typeName).documentId(typeName).title(title))
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      singleton(S, 'homePage', 'Home page', HomeIcon),
      singleton(S, 'settings', 'Site settings', CogIcon),
      S.divider(),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('project').title('Projects'),
      ...S.documentTypeListItems().filter(
        (item) => !['service', 'project', ...SINGLETON_TYPES].includes(item.getId() ?? ''),
      ),
    ])
