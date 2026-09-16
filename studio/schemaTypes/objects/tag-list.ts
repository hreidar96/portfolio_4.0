import {defineArrayMember, defineType} from 'sanity'

// A list of short labels. Registered as a named type so it can be localized
// with `internationalizedArrayTagList`.
export const tagListType = defineType({
  name: 'tagList',
  title: 'Tags',
  type: 'array',
  of: [defineArrayMember({type: 'string'})],
  options: {layout: 'tags'},
})
