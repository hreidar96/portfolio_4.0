import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import Script from "next/script";
import ThemeContextProvider from "@/context/theme-context";
import "../globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeSwitch from "@/components/ThemeSwitch";
import LanguageSwitch from "@/components/LanguageSwitch";
import DisableDraftMode from "@/components/DisableDraftMode";
import { isLanguage, languages } from "@/i18n";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { SEO_QUERY, SETTINGS_QUERY } from "@/sanity/lib/queries";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

// Canonical origin; the bare domain redirects here.
const siteUrl = "https://www.hreidarhallgrims.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const { data: seo } = await sanityFetch({
    query: SEO_QUERY,
    params: { lang },
    stega: false,
  });

  const title = seo?.title ?? undefined;
  const description = seo?.description ?? undefined;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: seo?.keywords ?? undefined,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(languages.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${lang}`,
      siteName: seo?.name ?? undefined,
      locale: lang,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  const [{ data: settings }, { isEnabled: isDraftMode }] = await Promise.all([
    sanityFetch({ query: SETTINGS_QUERY, params: { lang } }),
    draftMode(),
  ]);

  return (
    <html lang={lang} className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Apply the saved theme before first paint to avoid a flash. */}
        <Script id="theme" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`}
        </Script>
        <Background />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ScrollProgress />
            <Header navigation={settings?.navigation ?? null} />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer name={settings?.name ?? null} footer={settings?.footer ?? null} />
            <ThemeSwitch />
            <LanguageSwitch language={lang} />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

        <SanityLive />
        {isDraftMode && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  );
}
