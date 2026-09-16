"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import type { WorkSection } from "@/sanity/lib/types";

export default function Projects({ section }: { section: WorkSection }) {
  const { ref } = useSectionInView("Work", 0.3);

  return (
    <section
      ref={ref}
      id="work"
      className="mb-28 w-full max-w-[52rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>{section.heading}</SectionHeading>
      {section.intro && (
        <p className="mx-auto -mt-4 mb-12 max-w-[34rem] text-center text-gray-600 dark:text-white/70">
          {section.intro}
        </p>
      )}
      <div>
        {section.projects?.map((project) => (
          <Project
            key={project._id}
            project={project}
            liveLinkLabel={section.liveLinkLabel}
            repositoryLinkLabel={section.repositoryLinkLabel}
          />
        ))}
      </div>
    </section>
  );
}
