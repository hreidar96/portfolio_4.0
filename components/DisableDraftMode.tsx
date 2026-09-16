"use client";

import Link from "next/link";
import { useIsPresentationTool } from "next-sanity/hooks";

// Lets an editor leave Draft Mode when previewing outside the Studio's
// Presentation tool.
export default function DisableDraftMode() {
  const isPresentationTool = useIsPresentationTool();
  if (isPresentationTool !== false) return null;

  return (
    <Link
      href="/api/draft-mode/disable"
      // Prefetching would call the route and silently leave Draft Mode.
      prefetch={false}
      className="fixed bottom-5 left-5 z-[1000] rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-lg dark:bg-white dark:text-gray-900"
    >
      Disable draft mode
    </Link>
  );
}
