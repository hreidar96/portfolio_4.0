import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="font-display mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
      {children}
    </h2>
  );
}
