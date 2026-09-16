"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import RichText from "./RichText";
import type { ContactSection } from "@/sanity/lib/types";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact({ section }: { section: ContactSection }) {
  const { ref } = useSectionInView("Contact");
  const { form } = section;

  const handleSubmit = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ senderEmail, message }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.error || form?.errorMessage);
      return;
    }

    toast.success(form?.successMessage ?? "");
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{section.heading}</SectionHeading>

      <div className="text-gray-700 -mt-4 dark:text-white/80">
        <RichText value={section.body} />
      </div>

      <form
        className="mt-10 flex flex-col"
        action={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white/10 dark:focus:bg-white/20 transition-all dark:outline-none dark:text-white"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={form?.emailPlaceholder ?? undefined}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white/10 dark:focus:bg-white/20 transition-all dark:outline-none dark:text-white"
          name="message"
          placeholder={form?.messagePlaceholder ?? undefined}
          required
          maxLength={5000}
        />
        <SubmitBtn label={form?.submitLabel ?? null} />
      </form>
    </motion.section>
  );
}
