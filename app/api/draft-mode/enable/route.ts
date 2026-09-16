import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";

const enableDraftMode = token
  ? defineEnableDraftMode({ client: client.withConfig({ token }) }).GET
  : null;

// Called by the Studio's Presentation tool to turn on Draft Mode.
export async function GET(request: Request) {
  if (!enableDraftMode) {
    return new Response("Draft Mode is not configured: SANITY_API_READ_TOKEN is missing", {
      status: 500,
    });
  }
  return enableDraftMode(request);
}
