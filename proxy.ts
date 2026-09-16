import { NextResponse, type NextRequest } from "next/server";
import { defaultLanguage, languages } from "@/i18n";

// Every page lives under a language prefix (/is, /en). Paths without one are
// redirected to the default language.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLanguage = languages.some(
    (language) =>
      pathname === `/${language}` || pathname.startsWith(`/${language}/`),
  );
  if (hasLanguage) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLanguage}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip API routes, Next.js internals and files with an extension (public assets).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
