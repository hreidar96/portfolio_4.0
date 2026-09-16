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
import { stegaClean } from "next-sanity";
import MagneticButton from "./MagneticButton";
import RichText from "./RichText";
import { urlFor } from "@/sanity/lib/image";
import type { HomePage, Settings } from "@/sanity/lib/types";

type IntroProps = {
  hero: HomePage["hero"];
  settings: Settings;
};

const socialIcons = {
  linkedin: { icon: <BsLinkedin />, label: "LinkedIn profile", className: "" },
  github: {
    icon: <FaGithubSquare />,
    label: "GitHub profile",
    className: "text-[1.35rem]",
  },
};

export default function Intro({ hero, settings }: IntroProps) {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { portrait, cv, socialLinks } = settings;

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
            {portrait?.asset && (
              <Image
                src={urlFor(portrait).width(192).height(192).url()}
                alt={stegaClean(portrait.alt) ?? ""}
                width={192}
                height={192}
                quality={95}
                priority={true}
                placeholder={portrait.asset.metadata?.lqip ? "blur" : "empty"}
                blurDataURL={portrait.asset.metadata?.lqip ?? undefined}
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-white/20"
              />
            )}
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
      {hero?.availability && (
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
          {hero.availability}
        </motion.div>
      )}

      {/* Animated headline — word-by-word stagger */}
      <h1 className="font-display mb-6 mt-5 px-4 text-3xl font-bold !leading-[1.2] tracking-tight sm:text-5xl">
        {hero?.headline?.split(" ").map((word, i) => (
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

      <motion.div
        className="mx-auto mb-9 max-w-[38rem] px-4 text-lg text-gray-600 [&_strong]:font-semibold [&_strong]:text-gray-900 dark:text-white/70 dark:[&_strong]:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        <RichText value={hero?.introduction ?? null} />
      </motion.div>

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
            {hero?.contactCallToAction}{" "}
            <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
          </Link>
        </MagneticButton>

        {cv?.url && (
          <MagneticButton>
            <a
              className="group flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-7 py-3 outline-none backdrop-blur-sm transition hover:bg-white focus:ring-2 focus:ring-gray-300 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
              // `dl` makes the Sanity CDN serve the file as a download.
              href={`${cv.url}?dl=${encodeURIComponent(cv.originalFilename ?? "")}`}
            >
              {hero?.cvCallToAction}{" "}
              <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
            </a>
          </MagneticButton>
        )}

        <div className="flex items-center gap-3">
          {socialLinks?.map((link) => {
            const platform = stegaClean(link.platform);
            const social = platform ? socialIcons[platform] : undefined;
            if (!social || !link.url) return null;
            return (
              <MagneticButton key={link._key} strength={0.5}>
                <a
                  className={`flex items-center gap-2 rounded-full border border-black/10 bg-white/70 p-4 text-gray-700 backdrop-blur-sm transition hover:text-gray-950 focus:ring-2 focus:ring-gray-300 dark:border-white/10 dark:bg-white/10 dark:text-white/90 ${social.className}`}
                  href={stegaClean(link.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </MagneticButton>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
