import "server-only";

// Viewer token for draft content in Draft Mode / Visual Editing. Never import
// this from a client component.
export const token = process.env.SANITY_API_READ_TOKEN;

if (!token) {
  throw new Error("Missing environment variable: SANITY_API_READ_TOKEN");
}
