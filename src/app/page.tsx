import { PageBuilder } from "@/components/PageBuilder";
import type { CMSPayload } from "@/types/cms";

async function getPageData(): Promise<CMSPayload> {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  const res = await fetch(`${base}/api/page-data`, {
    // Idempotency: hits the Next.js Data Cache on repeated renders.
    // Combined with the route's force-static directive, data.json is
    // read exactly once per build cycle.
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch page data: ${res.status}`);
  }

  return res.json() as Promise<CMSPayload>;
}

export default async function HomePage() {
  const blocks = await getPageData();
  return <PageBuilder blocks={blocks} />;
}
