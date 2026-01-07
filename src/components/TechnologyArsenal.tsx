import React from "react";

type TechCategory = {
  title: string;
  items: string[];
};

const DATA: TechCategory[] = [
  {
    title: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Express.js", "Fastify"],
  },
  {
    title: "AI & Machine Learning",
    items: ["OpenAI API", "LangChain", "RAG", "Google Generative AI", "Vector Embeddings"],
  },
  {
    title: "3D & Graphics",
    items: ["Three.js", "React Three Fiber", "WebGL", "Gaussian Splatting", "GSAP", "Framer Motion"],
  },
  {
    title: "Databases & State",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Drizzle ORM", "Redis", "React Query", "Zustand"],
  },
  {
    title: "DevOps & Cloud",
    items: ["Docker", "CI/CD", "Google Cloud Platform", "Vercel", "VPS", "Nginx", "Caddy", "PM2"],
  },
  {
    title: "UI & Styling",
    items: ["Tailwind CSS", "ShadCN UI", "Radix UI", "MUI", "Framer Motion"],
  },
];

export default function TechnologyArsenal() {
  return (
    <section className="w-full bg-[#e8e8e7] text-black">
      <div className="mx-auto w-full max-w-full px-4 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Technology Arsenal
          </h2>
          <p className="mt-5 text-base leading-relaxed text-black/55 sm:text-lg">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {DATA.map((cat) => (
            <CategoryBlock key={cat.title} title={cat.title} items={cat.items} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold tracking-tight text-black/85 sm:text-2xl">
        {title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <Pill key={item} label={item} />
        ))}
      </div>
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span
      className="
        inline-flex select-none items-center justify-center
        rounded-full bg-white/40 px-4 py-2
        text-sm text-black/70
        shadow-[0_1px_0_rgba(0,0,0,0.05)]
        transition-all duration-200
        hover:bg-black hover:text-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
      "
    >
      {label}
    </span>
  );
}
