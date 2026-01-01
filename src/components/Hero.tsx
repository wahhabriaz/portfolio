import React from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#e7e7e7]">
      {/* Wrapper (everything inside hero) */}
      <div className="relative h-full w-full">
        {/* LEFT SIDE (icons + vertical line) */}
        <aside className="absolute left-0 top-0 z-50 flex h-full flex-col items-center justify-between px-5 py-10 lg:px-9">
          {/* Top vertical line */}
          <div className="hidden h-[40vh] w-px bg-gray-700 lg:block" />

          {/* Social icons container */}
          <div className="flex flex-col gap-6">
            <div className="h-10 w-10 rounded bg-black/10" />
            <div className="h-10 w-10 rounded bg-black/10" />
            <div className="h-10 w-10 rounded bg-black/10" />
          </div>
        </aside>

        {/* CENTER CONTENT (headings area) */}
        <div className="relative z-40 flex h-full w-full items-center justify-center px-4">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Small heading */}
            <div className="h-6 w-40 rounded bg-black/10 mb-3" />

            {/* Big heading line 1 */}
            <div className="h-16 w-[70vw] max-w-3xl rounded bg-black/10 mb-4" />

            {/* Big heading line 2 */}
            <div className="h-16 w-[60vw] max-w-2xl rounded bg-black/10" />
          </div>
        </div>

        {/* RIGHT SIDE (vertical badge / rotated text area) */}
        <div className="absolute right-0 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
          <div className="h-28 w-16 bg-white shadow-md flex items-end justify-center">
            <span className="-rotate-90 text-sm font-medium">Honors</span>
          </div>
        </div>

        {/* BOTTOM CENTER (scroll down text) */}
        <div className="absolute bottom-10 left-1/2 z-50 -translate-x-1/2">
          <div className="h-5 w-32 rounded bg-black/10" />
        </div>
      </div>
    </section>
  );
}
