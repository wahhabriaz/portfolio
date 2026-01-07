import React from "react";

type ImpactItem = {
  value: string;
  title: string;
  desc: string;
};

const IMPACT: ImpactItem[] = [
  {
    value: "40%",
    title: "Performance Improvement",
    desc: "Reduced AI response latency through optimized RAG retrieval and concurrency patterns",
  },
  {
    value: "80%",
    title: "Workflow Automation",
    desc: "Decreased manual lead processing time with background job automation",
  },
  {
    value: "10+",
    title: "Production Applications",
    desc: "Successfully deployed and maintained across various industries",
  },
  {
    value: "100%",
    title: "Type-Safe Architecture",
    desc: "End-to-end type safety with TypeScript, tRPC, and modern tooling",
  },
];

export default function ProvenImpact() {
  return (
    <section className="w-full bg-[#e8e8e7] text-black">
      <div className="mx-auto w-full max-w-8xl px-4 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Proven Impact
          </h2>
          <p className="mt-5 text-base leading-relaxed text-black/55 sm:text-lg">
            Throughout my career, I&apos;ve delivered measurable results that
            matter
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4 lg:gap-7">
          {IMPACT.map((item) => (
            <ImpactCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactCard({ item }: { item: ImpactItem }) {
  return (
    <div className="rounded-2xl bg-black px-7 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
      <div className="text-[52px] font-medium leading-none tracking-tight text-white sm:text-[58px]">
        {item.value}
      </div>

      <div className="mt-6 text-lg font-semibold tracking-tight text-white sm:text-xl">
        {item.title}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-[15px]">
        {item.desc}
      </p>
    </div>
  );
}
