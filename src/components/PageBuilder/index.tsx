import type { CMSPayload } from "@/types/cms";
import { blockRegistry, UnknownBlock } from "./registry";

interface PageBuilderProps {
  blocks: CMSPayload;
}

export function PageBuilder({ blocks }: PageBuilderProps) {
  if (blocks.length === 0) {
    return null;
  }

  return (
    <main>
      {blocks.map((block, index) => {
        const Component = blockRegistry[block.type] ?? UnknownBlock;
        return (
          <Component
            key={`${block.type}-${index}`}
            {...(block as any)} // eslint-disable-line @typescript-eslint/no-explicit-any
          />
        );
      })}
    </main>
  );
}
