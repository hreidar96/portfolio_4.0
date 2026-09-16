import {defineArrayMember, defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons/Home'

const sectionIntroFields = [
  defineField({
    name: 'heading',
    type: 'internationalizedArrayString',
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'intro',
    type: 'internationalizedArrayText',
  }),
]

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {name: 'hero', title: 'Hero', default: true},
    {name: 'services', title: 'Services'},
    {name: 'work', title: 'Work'},
    {name: 'about', title: 'About'},
    {name: 'contact', title: 'Contact'},
  ],
  fields: [
    defineField({
      name: 'hero',
      type: 'object',
      group: 'hero',
      options: {collapsible: false},
      fields: [
        defineField({
          name: 'availability',
          description: 'Short status shown above the headline, e.g. "Available for freelance work".',
          type: 'internationalizedArrayString',
        }),
        defineField({
          name: 'headline',
          type: 'internationalizedArrayString',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'introduction',
          type: 'internationalizedArrayBlockContent',
        }),
        defineField({
          name: 'contactCallToAction',
          title: 'Contact call to action',
          description: 'Label for the button that scrolls to the contact form.',
          type: 'internationalizedArrayString',
        }),
        defineField({
          name: 'cvCallToAction',
          title: 'CV call to action',
          description: 'Label for the CV download button. The file is set in Site settings.',
          type: 'internationalizedArrayString',
        }),
      ],
    }),
    defineField({
      name: 'servicesSection',
      title: 'Services section',
      type: 'object',
      group: 'services',
      options: {collapsible: false},
      fields: [
        ...sectionIntroFields,
        defineField({
          name: 'services',
          type: 'array',
          of: [defineArrayMember({type: 'reference', to: [{type: 'service'}]})],
          validation: (rule) => rule.unique(),
        }),
      ],
    }),
    defineField({
      name: 'workSection',
      title: 'Work section',
      type: 'object',
      group: 'work',
      options: {collapsible: false},
      fields: [
        ...sectionIntroFields,
        defineField({
          name: 'projects',
          type: 'array',
          of: [defineArrayMember({type: 'reference', to: [{type: 'project'}]})],
          validation: (rule) => rule.unique(),
        }),
        defineField({
          name: 'liveLinkLabel',
          description: 'Label for the link to a live project.',
          type: 'internationalizedArrayString',
        }),
        defineField({
          name: 'repositoryLinkLabel',
          description: 'Label for the link to a project repository.',
          type: 'internationalizedArrayString',
        }),
      ],
    }),
    defineField({
      name: 'aboutSection',
      title: 'About section',
      type: 'object',
      group: 'about',
      options: {collapsible: false},
      fields: [
        defineField({
          name: 'heading',
          type: 'internationalizedArrayString',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'body',
          type: 'internationalizedArrayBlockContent',
        }),
        defineField({
          name: 'skills',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
          options: {layout: 'tags'},
          validation: (rule) => rule.unique(),
        }),
      ],
    }),
    defineField({
      name: 'contactSection',
      title: 'Contact section',
      type: 'object',
      group: 'contact',
      options: {collapsible: false},
      fields: [
        defineField({
          name: 'heading',
          type: 'internationalizedArrayString',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'body',
          type: 'internationalizedArrayBlockContent',
        }),
        defineField({
          name: 'form',
          title: 'Contact form',
          type: 'object',
          fields: [
            defineField({name: 'emailPlaceholder', type: 'internationalizedArrayString'}),
            defineField({name: 'messagePlaceholder', type: 'internationalizedArrayString'}),
            defineField({name: 'submitLabel', type: 'internationalizedArrayString'}),
            defineField({name: 'successMessage', type: 'internationalizedArrayString'}),
            defineField({name: 'errorMessage', type: 'internationalizedArrayString'}),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Home page'}),
  },
})
