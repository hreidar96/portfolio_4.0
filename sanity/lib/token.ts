import "server-only";

// Viewer token for draft content in Draft Mode / Visual Editing. Never import
// this from a client component. Optional: without it the published site still
// works, but the Studio's Presentation tool can't enable Draft Mode.
export const token = process.env.SANITY_API_READ_TOKEN;
