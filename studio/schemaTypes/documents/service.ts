import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'
import {getDefaultLanguageValue} from '../../lib/languages'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: CaseIcon,
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
      name: 'features',
      description: 'Short highlights of what the service includes.',
      type: 'internationalizedArrayTagList',
    }),
    defineField({
      name: 'category',
      description: 'Determines the icon shown for this service.',
      type: 'string',
      options: {
        list: [
          {title: 'E-commerce', value: 'ecommerce'},
          {title: 'Web applications', value: 'webApps'},
          {title: 'AI', value: 'ai'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'category'},
    prepare: ({title, subtitle}) => ({
      title: getDefaultLanguageValue<string>(title) ?? 'Untitled service',
      subtitle,
    }),
  },
})
