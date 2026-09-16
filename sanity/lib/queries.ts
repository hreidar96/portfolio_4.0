import { defineQuery } from "next-sanity";

// Localized fields are internationalized arrays: [{language, value}, …].
// Each is resolved to the requested $lang, falling back to Icelandic.

export const SETTINGS_QUERY = defineQuery(`*[_id == "settings"][0]{
  name,
  email,
  portrait{
    asset->{_id, url, metadata{lqip, dimensions}},
    alt,
    hotspot,
    crop
  },
  "cv": cv.asset->{url, originalFilename},
  socialLinks[]{_key, platform, url},
  navigation{
    "home": coalesce(home[language == $lang][0].value, home[language == "is"][0].value),
    "services": coalesce(services[language == $lang][0].value, services[language == "is"][0].value),
    "work": coalesce(work[language == $lang][0].value, work[language == "is"][0].value),
    "about": coalesce(about[language == $lang][0].value, about[language == "is"][0].value),
    "contact": coalesce(contact[language == $lang][0].value, contact[language == "is"][0].value)
  },
  footer{
    "copyright": coalesce(copyright[language == $lang][0].value, copyright[language == "is"][0].value),
    "colophonLabel": coalesce(colophonLabel[language == $lang][0].value, colophonLabel[language == "is"][0].value),
    "colophon": coalesce(colophon[language == $lang][0].value, colophon[language == "is"][0].value)
  }
}`);

export const SEO_QUERY = defineQuery(`*[_id == "settings"][0]{
  name,
  "title": coalesce(seo.title[language == $lang][0].value, seo.title[language == "is"][0].value),
  "description": coalesce(seo.description[language == $lang][0].value, seo.description[language == "is"][0].value),
  "keywords": seo.keywords
}`);

export const HOME_PAGE_QUERY = defineQuery(`*[_id == "homePage"][0]{
  _id,
  _type,
  hero{
    "availability": coalesce(availability[language == $lang][0].value, availability[language == "is"][0].value),
    "headline": coalesce(headline[language == $lang][0].value, headline[language == "is"][0].value),
    "introduction": coalesce(introduction[language == $lang][0].value, introduction[language == "is"][0].value),
    "contactCallToAction": coalesce(contactCallToAction[language == $lang][0].value, contactCallToAction[language == "is"][0].value),
    "cvCallToAction": coalesce(cvCallToAction[language == $lang][0].value, cvCallToAction[language == "is"][0].value)
  },
  servicesSection{
    "heading": coalesce(heading[language == $lang][0].value, heading[language == "is"][0].value),
    "intro": coalesce(intro[language == $lang][0].value, intro[language == "is"][0].value),
    services[]->{
      _id,
      category,
      "title": coalesce(title[language == $lang][0].value, title[language == "is"][0].value),
      "description": coalesce(description[language == $lang][0].value, description[language == "is"][0].value),
      "features": coalesce(features[language == $lang][0].value, features[language == "is"][0].value)
    }
  },
  workSection{
    "heading": coalesce(heading[language == $lang][0].value, heading[language == "is"][0].value),
    "intro": coalesce(intro[language == $lang][0].value, intro[language == "is"][0].value),
    "liveLinkLabel": coalesce(liveLinkLabel[language == $lang][0].value, liveLinkLabel[language == "is"][0].value),
    "repositoryLinkLabel": coalesce(repositoryLinkLabel[language == $lang][0].value, repositoryLinkLabel[language == "is"][0].value),
    projects[]->{
      _id,
      "title": coalesce(title[language == $lang][0].value, title[language == "is"][0].value),
      "description": coalesce(description[language == $lang][0].value, description[language == "is"][0].value),
      image{
        asset->{_id, url, metadata{lqip, dimensions}},
        alt,
        hotspot,
        crop
      },
      technologies,
      liveUrl,
      repositoryUrl
    }
  },
  aboutSection{
    "heading": coalesce(heading[language == $lang][0].value, heading[language == "is"][0].value),
    "body": coalesce(body[language == $lang][0].value, body[language == "is"][0].value),
    skills
  },
  contactSection{
    "heading": coalesce(heading[language == $lang][0].value, heading[language == "is"][0].value),
    "body": coalesce(body[language == $lang][0].value, body[language == "is"][0].value),
    form{
      "emailPlaceholder": coalesce(emailPlaceholder[language == $lang][0].value, emailPlaceholder[language == "is"][0].value),
      "messagePlaceholder": coalesce(messagePlaceholder[language == $lang][0].value, messagePlaceholder[language == "is"][0].value),
      "submitLabel": coalesce(submitLabel[language == $lang][0].value, submitLabel[language == "is"][0].value),
      "successMessage": coalesce(successMessage[language == $lang][0].value, successMessage[language == "is"][0].value),
      "errorMessage": coalesce(errorMessage[language == $lang][0].value, errorMessage[language == "is"][0].value)
    }
  }
}`);
