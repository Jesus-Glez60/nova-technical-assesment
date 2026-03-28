import type { HeroBlock } from "@/types/cms";

export function Hero({ props }: HeroBlock) {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 py-24 text-center bg-gradient-to-b from-slate-900 to-slate-800 text-white"
      data-block-type="hero"
    >
      <h1 className="text-5xl font-bold tracking-tight max-w-3xl">{props.title}</h1>
      <p className="mt-6 text-xl text-slate-300 max-w-2xl">{props.subtitle}</p>
      <a
        href={props.ctaHref}
        className="mt-10 inline-block rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 transition-colors"
      >
        {props.ctaLabel}
      </a>
    </section>
  );
}
