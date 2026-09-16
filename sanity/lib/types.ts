import type { StegaBranded } from "next-sanity";
import type {
  HOME_PAGE_QUERY_RESULT,
  SETTINGS_QUERY_RESULT,
} from "@/sanity.types";

// Query results as returned by `sanityFetch`: strings may carry stega
// encoding for Visual Editing, so clean them before comparing or using as URLs.
export type Settings = NonNullable<StegaBranded<SETTINGS_QUERY_RESULT>>;
export type HomePage = NonNullable<StegaBranded<HOME_PAGE_QUERY_RESULT>>;

export type ServicesSection = NonNullable<HomePage["servicesSection"]>;
export type WorkSection = NonNullable<HomePage["workSection"]>;
export type ProjectItem = NonNullable<WorkSection["projects"]>[number];
export type AboutSection = NonNullable<HomePage["aboutSection"]>;
export type ContactSection = NonNullable<HomePage["contactSection"]>;
