import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiShopify } from "react-icons/si";
import { RiRobot2Line } from "react-icons/ri";
import vedurstodinImg from "@/public/vedurstodinImg.png";
import portfolioImg from "@/public/portfolioImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Services",
    hash: "#services",
  },
  {
    name: "Work",
    hash: "#work",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// Visual assets for each service — the text lives in lib/translations.ts and is
// matched to these by index.
export const serviceIcons = [
  React.createElement(SiShopify),
  React.createElement(TbBrandNextjs),
  React.createElement(RiRobot2Line),
] as const;

// Non-translatable project data (images, links, tech tags). Titles and
// descriptions live in lib/translations.ts, matched by index.
export const projectAssets = [
  {
    tags: ["React", "Next.js", "TypeScript", "OpenAI", "Tailwind"],
    imageUrl: vedurstodinImg,
    liveUrl: "https://weather-station-green.vercel.app",
    githubUrl: "https://github.com/hreidar96",
  },
  {
    tags: ["React", "Next.js", "Tailwind", "Resend", "Framer Motion"],
    imageUrl: portfolioImg,
    liveUrl: "https://hreidarhallgrims.com",
    githubUrl: "https://github.com/hreidar96",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Sanity",
  "Framer Motion",
  "OpenAI",
] as const;
