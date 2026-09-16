import {defineArrayMember, defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons/Cog'

export const settingsType = defineType({
  name: 'settings',
  title: 'Site settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {name: 'profile', title: 'Profile', default: true},
    {name: 'seo', title: 'SEO'},
    {name: 'navigation', title: 'Navigation'},
    {name: 'footer', title: 'Footer'},
  ],
  fields: [
    defineField({
      name: 'name',
      description: 'Your name as shown across the site.',
      type: 'string',
      group: 'profile',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      description: 'Public contact email address.',
      type: 'string',
      group: 'profile',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'portrait',
      type: 'image',
      group: 'profile',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => rule.required().warning('Alt text helps accessibility and SEO'),
        }),
      ],
    }),
    defineField({
      name: 'cv',
      title: 'CV',
      type: 'file',
      group: 'profile',
      options: {accept: 'application/pdf'},
    }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      group: 'profile',
      of: [
        defineArrayMember({
          name: 'socialLink',
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              type: 'string',
              options: {
                list: [
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'GitHub', value: 'github'},
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {select: {title: 'platform', subtitle: 'url'}},
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      options: {collapsible: false},
      fields: [
        defineField({
          name: 'title',
          type: 'internationalizedArrayString',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          type: 'internationalizedArrayText',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'keywords',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
          options: {layout: 'tags'},
        }),
      ],
    }),
    defineField({
      name: 'navigation',
      description: 'Labels for the links in the header.',
      type: 'object',
      group: 'navigation',
      options: {collapsible: false},
      fields: [
        defineField({name: 'home', type: 'internationalizedArrayString'}),
        defineField({name: 'services', type: 'internationalizedArrayString'}),
        defineField({name: 'work', type: 'internationalizedArrayString'}),
        defineField({name: 'about', type: 'internationalizedArrayString'}),
        defineField({name: 'contact', type: 'internationalizedArrayString'}),
      ],
    }),
    defineField({
      name: 'footer',
      type: 'object',
      group: 'footer',
      options: {collapsible: false},
      fields: [
        defineField({name: 'copyright', type: 'internationalizedArrayString'}),
        defineField({name: 'colophonLabel', type: 'internationalizedArrayString'}),
        defineField({
          name: 'colophon',
          description: 'How the site is built.',
          type: 'internationalizedArrayText',
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Site settings'}),
  },
})
