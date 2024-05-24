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

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Sanity",
  "Framer Motion",
  "ThreeJS"
] as const;

export const experiencesData = [
  
  {
    title: "Nova Iceland - Stock Specialist",
    location: "Reykjavik, Iceland",
    description:
      "Managed inventory stock through operations including receiving, tracking, ordering, picking, packing, shipping, reconciling, and analyzing to ensure timely and accurate product delivery",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2020",
  },
  {
    title: "Aalto University",
    location: "Helsinki, Finland",
    description:
      "Went on an exchange with Erasmus+, had to live on my own in a new country and it was a fantastic experience",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "Nova Iceland - Sales Specialist",
    location: "Reykjavik, Iceland",
    description:
      "Prospected, qualified, demonstrated, negotiated, closed, followed up and analyzed sales data to increase revenue and maintain customer satisfaction",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "University of Iceland",
    location: "Reykjavik, Iceland",
    description:
      "Studied Business Administration with a major in Marketing. Graduated summer of '24. Wrote my thesis about the importance of customer-centric design approach in digital marketing communication",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2024",
  },
  {
    title: "Freelance Web Developer",
    location: "Reykjavik, Iceland",
    description:
      "Worked on some projects for friends and family while continuing to develop my skills",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - Present",
  },
] as const;
