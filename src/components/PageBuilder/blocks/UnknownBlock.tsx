import type { UnknownBlock as UnknownBlockType } from "@/types/cms";

export function UnknownBlock({ type }: UnknownBlockType) {
  // Silent fallback in production — does not crash the app
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div
      role="alert"
      aria-label={`Unknown block type: ${type}`}
      className="border-2 border-dashed border-amber-400 bg-amber-50 p-6 my-4 text-center text-amber-700 rounded-lg"
    >
      <p className="font-mono text-sm">
        Unknown block type: <strong>&quot;{type}&quot;</strong>
      </p>
      <p className="text-xs mt-1 text-amber-600">
        This block is not registered. Add it to{" "}
        <code>src/components/PageBuilder/registry.ts</code>.
      </p>
    </div>
  );
}
