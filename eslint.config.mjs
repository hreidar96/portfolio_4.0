import nextConfig from "eslint-config-next";
import coreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  // The Sanity Studio has its own lint setup.
  { ignores: ["studio/**", "sanity.types.ts"] },
  ...nextConfig,
  ...coreWebVitals,
];

export default config;
