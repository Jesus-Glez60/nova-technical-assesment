import type { FeaturesBlock } from "@/types/cms";

export function Features({ props }: FeaturesBlock) {
  return (
    <section
      className="py-24 px-6 bg-white"
      data-block-type="features"
    >
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
        {props.heading}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {props.items.map((item, i) => (
          <li key={i} className="flex flex-col items-center text-center gap-4">
            <span className="text-4xl" aria-hidden="true">{item.icon}</span>
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="text-slate-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
