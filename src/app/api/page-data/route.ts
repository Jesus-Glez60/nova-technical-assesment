import { NextResponse } from "next/server";
import type { CMSPayload } from "@/types/cms";
import payload from "../../../../data/data.json";

// force-static: Next.js generates this route at build time.
// The handler runs once per build — not once per request.
export const dynamic = "force-static";

export function GET(): NextResponse<CMSPayload> {
  return NextResponse.json(payload as CMSPayload, {
    headers: {
      // CDN and browsers can serve a cached response for 60s,
      // then revalidate in the background for up to 300s.
      "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
    },
  });
}
