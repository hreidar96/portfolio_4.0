"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";
import { stegaClean } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import type { ProjectItem, WorkSection } from "@/sanity/lib/types";

type ProjectProps = {
  project: ProjectItem;
  liveLinkLabel: WorkSection["liveLinkLabel"];
  repositoryLinkLabel: WorkSection["repositoryLinkLabel"];
};

export default function Project({
  project,
  liveLinkLabel,
  repositoryLinkLabel,
}: ProjectProps) {
  const { title, description, image, technologies } = project;
  const liveUrl = stegaClean(project.liveUrl);
  const repositoryUrl = stegaClean(project.repositoryUrl);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative mb-8 last:mb-0"
    >
      <div className="relative grid overflow-hidden rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm transition-colors hover:border-black/20 sm:grid-cols-2 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20">
        {/* Text */}
        <div className="flex flex-col p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold">{title}</h3>
          <p className="mt-3 leading-relaxed text-gray-600 dark:text-white/70">
            {description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {technologies?.map((tag, index) => (
              <li
                className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-gray-700 dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-950 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                {liveLinkLabel} <FiExternalLink />
              </Link>
            )}
            {repositoryUrl && (
              <Link
                href={repositoryUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium transition hover:bg-black/[0.04] dark:border-white/15 dark:hover:bg-white/10"
              >
                {repositoryLinkLabel} <FiGithub />
              </Link>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="relative min-h-[16rem] overflow-hidden bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-950/40 dark:to-violet-950/40">
          {image?.asset && (
            <Image
              src={urlFor(image).width(1000).url()}
              alt={stegaClean(image.alt) ?? ""}
              quality={95}
              fill
              sizes="(max-width: 640px) 100vw, 31rem"
              placeholder={image.asset.metadata?.lqip ? "blur" : "empty"}
              blurDataURL={image.asset.metadata?.lqip ?? undefined}
              className="object-cover object-left-top transition duration-500 group-hover:scale-[1.03]"
            />
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              aria-label={`Open ${title}`}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 opacity-0 shadow-lg transition group-hover:opacity-100"
            >
              <FiArrowUpRight />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
