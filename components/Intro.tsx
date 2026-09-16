"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import MagneticButton from "./MagneticButton";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[52rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/Hreidar_portrait.jpg"
              alt="Hreiðar Hallgríms"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-white/20"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Availability badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-sm font-medium text-gray-700 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>
        {t.hero.badge}
      </motion.div>

      {/* Animated headline — word-by-word stagger */}
      <h1 className="font-display mb-6 mt-5 px-4 text-3xl font-bold !leading-[1.2] tracking-tight sm:text-5xl">
        {t.hero.headline.split(" ").map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.04, duration: 0.4 }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </h1>

      <motion.p
        className="mx-auto mb-9 max-w-[38rem] px-4 text-lg text-gray-600 [&_strong]:font-semibold [&_strong]:text-gray-900 dark:text-white/70 dark:[&_strong]:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        dangerouslySetInnerHTML={{ __html: t.hero.subtitleHtml }}
      />

      <motion.div
        className="flex flex-col items-center justify-center gap-3 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
      >
        <MagneticButton>
          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:bg-gray-950 focus:ring-2 focus:ring-gray-400 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            {t.hero.ctaStart}{" "}
            <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
          </Link>
        </MagneticButton>

        <MagneticButton>
          <a
            className="group flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-7 py-3 outline-none backdrop-blur-sm transition hover:bg-white focus:ring-2 focus:ring-gray-300 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
            href="/Hreiðar_Ingi_CV.pdf"
            download
          >
            {t.hero.ctaCV}{" "}
            <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
          </a>
        </MagneticButton>

        <div className="flex items-center gap-3">
          <MagneticButton strength={0.5}>
            <a
              className="flex items-center gap-2 rounded-full border border-black/10 bg-white/70 p-4 text-gray-700 backdrop-blur-sm transition hover:text-gray-950 focus:ring-2 focus:ring-gray-300 dark:border-white/10 dark:bg-white/10 dark:text-white/90"
              href="https://www.linkedin.com/in/hreidaringi/"
              target="_blank"
              aria-label="LinkedIn profile"
            >
              <BsLinkedin />
            </a>
          </MagneticButton>

          <MagneticButton strength={0.5}>
            <a
              className="flex items-center gap-2 rounded-full border border-black/10 bg-white/70 p-4 text-[1.35rem] text-gray-700 backdrop-blur-sm transition hover:text-gray-950 focus:ring-2 focus:ring-gray-300 dark:border-white/10 dark:bg-white/10 dark:text-white/90"
              href="https://github.com/hreidar96"
              target="_blank"
              aria-label="GitHub profile"
            >
              <FaGithubSquare />
            </a>
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
