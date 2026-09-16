export type Language = "is" | "en";

export const languages: Language[] = ["is", "en"];

// Icelandic is the default/primary language; English is the toggle.
export type Dictionary = {
  nav: {
    Home: string;
    Services: string;
    Work: string;
    About: string;
    Contact: string;
  };
  hero: {
    badge: string;
    // `headline` is split on spaces for the word-by-word entrance animation.
    headline: string;
    // `subtitleHtml` may contain <strong> for emphasis (trusted, static content).
    subtitleHtml: string;
    ctaStart: string;
    ctaCV: string;
  };
  services: {
    heading: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      features: string[];
    }[];
  };
  work: {
    heading: string;
    subtitle: string;
    live: string;
    code: string;
    projects: {
      title: string;
      description: string;
    }[];
  };
  about: {
    heading: string;
    // Paragraphs may contain <strong>/<em> emphasis (trusted, static content).
    paragraphsHtml: string[];
  };
  contact: {
    heading: string;
    textBefore: string;
    textAfter: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    toastSuccess: string;
    toastError: string;
  };
  footer: {
    rights: string;
    aboutLabel: string;
    aboutText: string;
  };
};

export const translations: Record<Language, Dictionary> = {
  is: {
    nav: {
      Home: "Heim",
      Services: "Þjónusta",
      Work: "Verk",
      About: "Um mig",
      Contact: "Samband",
    },
    hero: {
      badge: "Laus í verkefni",
      headline:
        "Ég smíða hraðar vefsíður og gervigreindarlausnir fyrir lítil og meðalstór fyrirtæki.",
      subtitleHtml:
        "Ég heiti Hreiðar — full-stack forritari í Reykjavík. Ég hjálpa fyrirtækjum að koma vönduðum, nútímalegum veflausnum í loftið með <strong>Next.js og Sanity</strong>.",
      ctaStart: "Fá tilboð í verkefni",
      ctaCV: "Sækja ferilskrá",
    },
    services: {
      heading: "Hvaða lausnir get ég smíðað fyrir þig",
      subtitle:
        "Þrjár leiðir sem ég hjálpa fyrirtækjum að gera betri hugbúnað — frá fyrstu hugmynd að útgáfu.",
      items: [
        {
          title: "Shopify netverslanir",
          description:
            "Uppsetning, bestun og viðhald á Shopify netverslunum sem eru hannaðar til að selja og virka vel á öllum tækjum.",
          features: ["Shopify", "Tenging við greiðslugátt", "Viðhald"],
        },
        {
          title: "Vefforrit",
          description:
            "Full-stack forrit með auðkenningum, gagnagrunni og stjórnborði — byggt á Next.js og TypeScript fyrir hraða og viðhaldsvæn eftir því sem síðan stækkar.",
          features: ["Auðkenning", "Stjórnborð", "Gagnagrunnur"],
        },
        {
          title: "Gervigreindarlausnir",
          description:
            "Bættu gervigreind við vefinn þinn — spjallmenni, snjallari leit og efnissköpun — tengt inn í núverandi vefsíðu með OpenAI og Claude API.",
          features: ["Spjallmenni", "Snjöll leit", "Sjálfvirkni"],
        },
      ],
    },
    work: {
      heading: "Valin verkefni",
      subtitle: "Nokkur verkefni sem ég hef hannað og smíðað nýlega.",
      live: "Skoða síðu",
      code: "Kóði",
      projects: [
        {
          title: "Veðurstöðin",
          description:
            "Gervigreindar-veðurfélagi byggður með Next.js, TypeScript og OpenAI API. Hann býr til veðurlýsingu á mannamáli fyrir hvaða borg sem er, ásamt gagnvirkum gröfum.",
        },
        {
          title: "Þessi vefsíða",
          description:
            "Síðan sem þú ert á núna — einnar síðu ferilsíða í Next.js með virku samskiptaformi (Resend), dökkri stillingu og skrunhreyfingum knúnum af Framer Motion.",
        },
      ],
    },
    about: {
      heading: "Um mig",
      paragraphsHtml: [
        "Ég kynntist forritun þegar ég var að klára nám í <strong>viðskiptafræði</strong> — sem þýðir að mér er jafn annt um markmiðið á bak við verkefni og kóðann sjálfan. Kjarnatæknin mín er <strong>React, Next.js og Node.js</strong> ásamt TypeScript, og ég elska augnablikið þegar erfitt vandamál smellur loksins saman.",
        "Sem sjálfstætt starfandi vinn ég náið með viðskiptavinum frá fyrstu skissu að útgáfu — held samskiptum skýrum og skila vörum sem eru hraðar, aðgengilegar og virkilega þægilegar í notkun. Þegar ég er ekki að forrita er ég yfirleitt í tölvuleikjum, á ferðalögum eða að læra eitthvað nýtt (nýlega á gítar).",
      ],
    },
    contact: {
      heading: "Vinnum saman",
      textBefore:
        "Ertu með verkefni í huga? Segðu mér aðeins frá því hér að neðan, eða sendu mér tölvupóst beint á ",
      textAfter: ". Ég svara yfirleitt innan sólarhrings.",
      emailPlaceholder: "Netfangið þitt",
      messagePlaceholder: "Segðu mér frá verkefninu þínu…",
      submit: "Senda",
      toastSuccess: "Tölvupóstur sendur!",
      toastError: "Ekki tókst að senda tölvupóst",
    },
    footer: {
      rights: "Allur réttur áskilinn.",
      aboutLabel: "Um þessa vefsíðu:",
      aboutText:
        "byggð með Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend og hýst á Vercel.",
    },
  },
  en: {
    nav: {
      Home: "Home",
      Services: "Services",
      Work: "Work",
      About: "About",
      Contact: "Contact",
    },
    hero: {
      badge: "Available for freelance work",
      headline: "I build fast websites, web apps & AI features for businesses.",
      subtitleHtml:
        "I'm Hreiðar — a full-stack developer based in Reykjavik. I help businesses ship polished, modern web experiences with <strong>Next.js &amp; Sanity</strong>.",
      ctaStart: "Start a project",
      ctaCV: "Download CV",
    },
    services: {
      heading: "What I can build for you",
      subtitle:
        "Three ways I help businesses ship better software — from first idea to launch.",
      items: [
        {
          title: "Shopify Stores",
          description:
            "Fast, responsive Shopify stores that look sharp on every device and are built to convert visitors into customers.",
          features: ["Shopify", "Payment processing", "Maintenance"],
        },
        {
          title: "Web Applications",
          description:
            "Full-stack apps with authentication, databases and dashboards — built on Next.js and TypeScript so they stay fast and maintainable as they grow.",
          features: ["Auth & databases", "Dashboards", "Type-safe"],
        },
        {
          title: "AI Integrations",
          description:
            "Bring AI into your product — chatbots, smart search and content generation — wired into your existing site with the OpenAI and Claude APIs.",
          features: ["Chatbots", "Smart search", "Automation"],
        },
      ],
    },
    work: {
      heading: "Selected work",
      subtitle: "A few things I've designed and built recently.",
      live: "Live demo",
      code: "Code",
      projects: [
        {
          title: "Veðurstöðin",
          description:
            "An AI weather companion built with Next.js, TypeScript and the OpenAI API. It generates a plain-language summary of the weather for any city, alongside interactive charts.",
        },
        {
          title: "This Portfolio",
          description:
            "The site you're on now — a Next.js single-page portfolio with a working contact form (Resend), dark mode, and scroll-driven animations powered by Framer Motion.",
        },
      ],
    },
    about: {
      heading: "About me",
      paragraphsHtml: [
        "I came to programming while finishing a degree in <strong>Business Administration</strong> — which means I care as much about the goal behind a project as the code itself. My core stack is <strong>Next.js, Sanity and Shopify</strong> with TypeScript, and I love the moment a tricky problem finally clicks into place.",
        "As a freelancer I work closely with clients from first sketch to launch — keeping communication clear and shipping things that are fast, accessible and genuinely nice to use. When I'm not coding I'm usually gaming, travelling, or picking up something new (lately, the guitar).",
      ],
    },
    contact: {
      heading: "Let's work together",
      textBefore:
        "Have a project in mind? Tell me a bit about it below, or email me directly at ",
      textAfter: ". I usually reply within a day.",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Tell me about your project…",
      submit: "Submit",
      toastSuccess: "Email sent successfully!",
      toastError: "Failed to send email",
    },
    footer: {
      rights: "All rights reserved.",
      aboutLabel: "About this website:",
      aboutText:
        "built with Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel Hosting.",
    },
  },
};
