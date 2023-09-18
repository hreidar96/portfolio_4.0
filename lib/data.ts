import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vedurstodinImg from "@/public/vedurstodinImg.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Veðurstöðin",
    description:
      "I built this website myself with NextJS, TypeScript TailwindCSS, OpenAI and more. ChatGPT gives a summary of weather data for a chosen city along with graphs",
    tags: ["React", "Next.js", "Vercel", "Tailwind", "OpenAI"],
    imageUrl: vedurstodinImg,
  },
] as const;