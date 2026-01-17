import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen w-full bg-black px-3 py-3 sm:px-0 sm:py-0">
      {/* Outer rounded container */}
      <div className="relative mx-auto min-h-[calc(100vh-24px)] max-w-[1600px] overflow-hidden  bg-[#0b0b0b] ">
        {/* ✅ Marquee OVER entire section (image + content) */}
        <div className="pointer-events-none absolute left-0 top-0 z-[20] w-full">
          <Marquee text="CONTACT ON THIS" />
        </div>

        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
          {/* LEFT: Media */}
          <div className="relative hidden lg:block">
            <img
              src="/myimage.png"
              alt="Contact media"
              className="h-full w-full object-cover"
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-black/15" />
          </div>

          {/* RIGHT: Content */}
          <div className="relative flex flex-col bg-[#0b0b0b] px-6 pb-7 pt-28 sm:px-10 sm:pb-10 sm:pt-32 lg:px-16">
            {/* MAIN INFO GRID */}
            <div className="grid flex-1 grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
              {/* LEFT COLUMN */}
              <div className="pt-6 lg:pt-[8rem]">
                <div className="space-y-10">
                  <BlockLabel label="WRITE US">
                    <div className="text-xl font-extrabold uppercase tracking-tight text-white sm:text-2xl">
                      wahhabriaz95@gmail.com
                    </div>
                  </BlockLabel>

                  <BlockLabel label="TALK TO US">
                    <div className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                      +92 (0) 312 459 3613
                    </div>
                  </BlockLabel>
                </div>

                <div className="mt-16 hidden lg:block">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                    FOLLOW US
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="pt-6 lg:pt-[8rem]">
                <BlockLabel label="FIND US">
                  <div className="text-xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-2xl">
                    GULBERG
                    <br />
                    LAHORE
                  </div>
                </BlockLabel>

                {/* bottom socials aligned like screenshot */}
                <div className="mt-16 hidden lg:flex items-center justify-end gap-20">
                  <a
                    href="#"
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75 hover:text-white"
                  >
                    INSTAGRAM
                  </a>
                  <a
                    href="#"
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75 hover:text-white"
                  >
                    LINKEDIN
                  </a>
                  <a
                    href="#"
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75 hover:text-white"
                  >
                    X
                  </a>
                </div>
              </div>
            </div>

            {/* MOBILE: socials + optional image block */}
            <div className="mt-12 flex flex-col gap-6 lg:hidden">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                FOLLOW US
              </div>
              <div className="flex items-center gap-10">
                <a
                  href="#"
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75 hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75 hover:text-white"
                >
                  X
                </a>
              </div>

              {/* show image on mobile */}
              <div className="relative overflow-hidden rounded-2xl bg-black">
                <img
                  src="/myimage.png"
                  alt="Contact media"
                  className="h-[220px] w-full object-cover"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-0 bg-black/15" />
              </div>
            </div>
          </div>
        </div>

        {/* Optional: subtle vignette */}
        <div className="pointer-events-none absolute inset-0 z-[5] [box-shadow:inset_0_0_160px_rgba(0,0,0,0.55)]" />
      </div>
    </section>
  );
}

/* =========================
   Marquee (infinite)
========================= */
function Marquee({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      {/* height + padding like reference */}
      <div className="py-7 sm:py-9">
        <div className="marquee">
          <div className="marquee__track">
            <MarqueeRun text={text} />
            <MarqueeRun text={text} />
          </div>
        </div>
      </div>

      {/* soft fade edges like premium */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b0b0b] to-transparent" /> */}
      {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b0b0b] to-transparent" /> */}
    </div>
  );
}

function MarqueeRun({ text }: { text: string }) {
  // The more repeats, the more “dense” it looks like your screenshot
  const items = new Array(5).fill(text);
  return (
    <div className="marquee__run">
      {items.map((t, i) => (
        <span
          key={i}
          className="mx-10 whitespace-nowrap text-[42px] font-extrabold uppercase tracking-tight text-white sm:text-[54px] md:text-[64px] lg:text-[72px] xl:text-[82px]"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function BlockLabel({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
        {label}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}
