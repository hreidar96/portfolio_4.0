"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import RichText from "./RichText";
import type { AboutSection } from "@/sanity/lib/types";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.03 * index },
  }),
};

export default function About({ section }: { section: AboutSection }) {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="about"
    >
      <SectionHeading>{section.heading}</SectionHeading>
      <div className="[&_p]:mb-3 [&_p:last-child]:mb-8 [&_strong]:font-medium">
        <RichText value={section.body} />
      </div>

      <ul className="flex flex-wrap justify-center gap-2 text-base text-gray-800">
        {section.skills?.map((skill, index) => (
          <motion.li
            className="rounded-full border border-black/10 bg-white/60 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/10 dark:text-white/80"
            key={skill}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
