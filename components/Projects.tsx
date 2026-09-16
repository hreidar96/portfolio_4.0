"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectAssets } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

export default function Projects() {
  const { ref } = useSectionInView("Work", 0.3);
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="work"
      className="mb-28 w-full max-w-[52rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>{t.work.heading}</SectionHeading>
      <p className="mx-auto -mt-4 mb-12 max-w-[34rem] text-center text-gray-600 dark:text-white/70">
        {t.work.subtitle}
      </p>
      <div>
        {t.work.projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project
              title={project.title}
              description={project.description}
              {...projectAssets[index]}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
