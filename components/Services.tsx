"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { stegaClean } from "next-sanity";
import { TbBrandNextjs } from "react-icons/tb";
import { SiShopify } from "react-icons/si";
import { RiRobot2Line } from "react-icons/ri";
import { useSectionInView } from "@/lib/hooks";
import type { ServicesSection } from "@/sanity/lib/types";
import { motion } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index, duration: 0.5 },
  }),
};

const categoryIcons = {
  ecommerce: <SiShopify />,
  webApps: <TbBrandNextjs />,
  ai: <RiRobot2Line />,
};

export default function Services({ section }: { section: ServicesSection }) {
  const { ref } = useSectionInView("Services", 0.4);

  return (
    <section
      ref={ref}
      id="services"
      className="mb-28 w-full max-w-[62rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{section.heading}</SectionHeading>
      {section.intro && (
        <p className="mx-auto -mt-4 mb-12 max-w-[34rem] text-gray-600 dark:text-white/70">
          {section.intro}
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-3">
        {section.services?.map((service, index) => {
          const category = stegaClean(service.category);
          return (
            <motion.div
              key={service._id}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-2xl border border-black/10 bg-white/60 p-7 text-left backdrop-blur-sm transition-colors hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-2xl text-white shadow-lg shadow-indigo-500/20">
                {category && categoryIcons[category]}
              </div>
              <h3 className="font-display text-xl font-bold">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-600 dark:text-white/70">
                {service.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {service.features?.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
