import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type WorkItem = {
  category: string;
  title: string;
  image: string;
  theme?: "light" | "dark";
};

const WORKS: WorkItem[] = [
  {
    category: "AI Assistant",
    title: "VexLogic",
    image: "https://azizkhaldi.com/_next/static/media/p-vexlogic-ai-assistant.1a9ca26b.jpg",
    theme: "dark",
  },
  {
    category: "Business",
    title: "VexLogic business",
    image: "https://azizkhaldi.com/_next/static/media/p-vexlogic-business-expander.84d3869a.jpg",
    theme: "dark",
  },
  {
    category: "3D Visualisation",
    title: "Comra",
    image: "https://azizkhaldi.com/_next/static/media/p-comra.66d67f23.jpg",
    theme: "dark",
  },
  {
    category: "Property Booking",
    title: "SuperHost",
    image: "https://azizkhaldi.com/_next/static/media/super-host-phone.6e0451d2.jpg",
    theme: "light",
  },
];

export default function WorkSection() {
  return (
    <section className="w-full bg-[#e8e8e7] text-black">
      <div className="mx-auto w-full max-w-8xl px-4 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Discover my latest work and creative solutions that bring ideas to
            life
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {WORKS.map((item) => (
            <WorkCard key={item.title} item={item} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex items-center justify-center">
          <button
            type="button"
            className="group flex items-center gap-3 rounded-full bg-[#d4f534] px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            projects
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4f534] ring-1 ring-black/20 transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================
   Work Card
========================= */

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <motion.a
      href="#"
      className={[
        "group relative block overflow-hidden border border-black/20",
        "bg-black/10",
        item.theme === "light" ? "bg-white" : "bg-black/10",
      ].join(" ")}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Category */}
      <div className="absolute left-5 top-4 z-20 text-sm text-black/55">
        {item.category}
      </div>

      {/* Image */}
      <div className="relative aspect-[16/10] w-full">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          draggable={false}
        />

        {/* Overlay (subtle dim) */}
        <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Hover Title */}
      <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
        <AnimatePresence>
          <motion.div
            className="flex items-center justify-center"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.25 }}
          >
            <AnimatedLetters
              text={item.title}
              className="text-4xl font-medium tracking-wide text-[#d4f534] sm:text-5xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.a>
  );
}

/* =========================
   Letter-by-letter hover animation
   (alphabetical reveal)
========================= */

function AnimatedLetters({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const letters = Array.from(text);

  return (
    <span className={["inline-flex", className].join(" ")}>
      {letters.map((char, i) => {
        const isSpace = char === " ";

        return (
          <motion.span
            key={`${char}-${i}`}
            className={isSpace ? "w-3" : "inline-block"}
            variants={{
              rest: {
                y: 24,
                opacity: 0,
                filter: "blur(4px)",
              },
              hover: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  delay: i * 0.03, // ✅ letter stagger
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            {isSpace ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </span>
  );
}
