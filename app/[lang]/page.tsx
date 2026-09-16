import { notFound } from "next/navigation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SectionDivider from "@/components/SectionDivider";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY, SETTINGS_QUERY } from "@/sanity/lib/queries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  const [{ data: page }, { data: settings }] = await Promise.all([
    sanityFetch({ query: HOME_PAGE_QUERY, params: { lang } }),
    sanityFetch({ query: SETTINGS_QUERY, params: { lang } }),
  ]);

  if (!page || !settings) notFound();

  return (
    <main className="flex flex-col items-center px-4">
      <Intro hero={page.hero} settings={settings} />
      <SectionDivider />
      {page.servicesSection && <Services section={page.servicesSection} />}
      {page.workSection && <Projects section={page.workSection} />}
      {page.aboutSection && <About section={page.aboutSection} />}
      {page.contactSection && <Contact section={page.contactSection} />}
    </main>
  );
}
