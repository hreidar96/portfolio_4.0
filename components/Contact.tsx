"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { t } = useLanguage();

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
      toast.error(data.error || t.contact.toastError);
      return;
    }

    toast.success(t.contact.toastSuccess);
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
      <SectionHeading>{t.contact.heading}</SectionHeading>

      <p className="text-gray-700 -mt-4 dark:text-white/80">
        {t.contact.textBefore}
        <a className="underline" href="mailto:contact@hreidarhallgrims.com">
          contact@hreidarhallgrims.com
        </a>
        {t.contact.textAfter}
      </p>

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
          placeholder={t.contact.emailPlaceholder}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white/10 dark:focus:bg-white/20 transition-all dark:outline-none dark:text-white"
          name="message"
          placeholder={t.contact.messagePlaceholder}
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
