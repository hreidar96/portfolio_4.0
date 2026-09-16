import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeContextProvider from "@/context/theme-context";
import LanguageContextProvider from "@/context/language-context";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeSwitch from "@/components/ThemeSwitch";
import LanguageSwitch from "@/components/LanguageSwitch";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const siteUrl = "https://hreidarhallgrims.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hreiðar Hallgríms — Sjálfstætt starfandi vefforritari",
  description:
    "Sjálfstætt starfandi vefforritari sem smíðar hraðar vefsíður, vefforrit og gervigreindarlausnir með Next.js, TypeScript og Tailwind. Laus í ný verkefni.",
  keywords: [
    "vefforritari",
    "sjálfstætt starfandi",
    "vefsíðugerð",
    "Next.js",
    "gervigreind",
    "Reykjavík",
    "Ísland",
    "freelance web developer",
  ],
  openGraph: {
    title: "Hreiðar Hallgríms — Sjálfstætt starfandi vefforritari",
    description:
      "Hraðar vefsíður, vefforrit og gervigreindarlausnir byggð með Next.js. Laus í ný verkefni.",
    url: siteUrl,
    siteName: "Hreiðar Hallgríms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hreiðar Hallgríms — Sjálfstætt starfandi vefforritari",
    description:
      "Hraðar vefsíður, vefforrit og gervigreindarlausnir byggð með Next.js.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="is" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}var l=localStorage.getItem('language');if(l==='en'||l==='is'){document.documentElement.lang=l;}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}
      >
        <Background />

        <LanguageContextProvider>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <ScrollProgress />
              <Header />
              {children}
              <Analytics />
              <SpeedInsights />
              <Footer />
              <ThemeSwitch />
              <LanguageSwitch />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </LanguageContextProvider>
      </body>
    </html>
  );
}
