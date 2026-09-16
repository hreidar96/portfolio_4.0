import { PortableText, stegaClean, type PortableTextComponents } from "next-sanity";
import type { BlockContent } from "@/sanity.types";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = stegaClean(value?.href ?? "");
      const isExternal = href.startsWith("http");
      return (
        <a
          className="underline"
          href={href}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
};

export default function RichText({ value }: { value: BlockContent | null }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
