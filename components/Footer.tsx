import React from "react";
import type { Settings } from "@/sanity/lib/types";

type FooterProps = {
  name: Settings["name"];
  footer: Settings["footer"];
};

export default function Footer({ name, footer }: FooterProps) {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} {name}. {footer?.copyright}
      </small>
      {footer?.colophon && (
        <p className="text-xs">
          <span className="font-semibold">{footer.colophonLabel}</span>{" "}
          {footer.colophon}
        </p>
      )}
    </footer>
  );
}
