import {homePageType} from './documents/home-page'
import {projectType} from './documents/project'
import {serviceType} from './documents/service'
import {settingsType} from './documents/settings'
import {blockContentType} from './objects/block-content'
import {tagListType} from './objects/tag-list'

export const schemaTypes = [
  // Documents
  settingsType,
  homePageType,
  serviceType,
  projectType,
  // Objects
  blockContentType,
  tagListType,
]
