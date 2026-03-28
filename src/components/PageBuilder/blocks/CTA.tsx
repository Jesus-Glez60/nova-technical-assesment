import type { CTABlock } from "@/types/cms";

export function CTA({ props }: CTABlock) {
  return (
    <section
      className="py-24 px-6 bg-indigo-600 text-white text-center"
      data-block-type="cta"
    >
      <h2 className="text-3xl font-bold">{props.heading}</h2>
      <p className="mt-4 text-lg text-indigo-100 max-w-xl mx-auto">{props.body}</p>
      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <a
          href={props.primaryHref}
          className="rounded-lg bg-white text-indigo-600 px-8 py-3 font-semibold hover:bg-indigo-50 transition-colors"
        >
          {props.primaryLabel}
        </a>
        {props.secondaryLabel && props.secondaryHref && (
          <a
            href={props.secondaryHref}
            className="rounded-lg border border-white/60 px-8 py-3 font-semibold hover:bg-indigo-500 transition-colors"
          >
            {props.secondaryLabel}
          </a>
        )}
      </div>
    </section>
  );
}
