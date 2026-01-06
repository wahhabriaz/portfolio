import React, { useEffect, useRef } from "react";

type LinkItem = { label: string; href: string };

const LINKS: LinkItem[] = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS: LinkItem[] = [
  { label: "Email", href: "mailto:contact@yourdomain.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Whatsapp", href: "https://wa.me/0000000000" },
  { label: "Github", href: "https://github.com" },
];

function FooterColumn({ title, items }: { title: string; items: LinkItem[] }) {
  return (
    <div className="min-w-[120px]">
      <div className="text-xs uppercase tracking-[0.18em] text-white/40">
        {title}
      </div>
      <ul className="mt-4 space-y-3 text-sm text-white/70">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="rounded-full border border-white/30 px-5 py-2 text-sm text-white/80 backdrop-blur transition-colors hover:text-white"
    >
      {children}
    </a>
  );
}

/**
 * Robot face follows mouse by rotating slightly + parallax translate.
 * Works with a PNG/WebP robot image. Swap in 3D later.
 */
function RobotFollow({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = (e.clientX - cx) / rect.width;  // -0.5 to 0.5ish
      const dy = (e.clientY - cy) / rect.height;

      // clamp
      const clamp = (v: number, min: number, max: number) =>
        Math.max(min, Math.min(max, v));

      const rx = clamp(dy * -18, -12, 12);
      const ry = clamp(dx * 22, -14, 14);

      const tx = clamp(dx * 18, -10, 10);
      const ty = clamp(dy * 14, -10, 10);

      el.style.transform = `
        translate3d(${tx}px, ${ty}px, 0)
        rotateX(${rx}deg)
        rotateY(${ry}deg)
      `;
    };

    const onLeave = () => {
      el.style.transform =
        "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* perspective wrapper */}
      <div className="[perspective:900px]">
        <div
          ref={ref}
          className="will-change-transform transition-transform duration-150 ease-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src={src}
            alt="Robot"
            className="h-[140px] w-[140px] object-contain sm:h-[170px] sm:w-[170px] md:h-[200px] md:w-[200px]"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  // local time (like screenshot)
  const time = new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <footer className="relative w-full overflow-hidden bg-[#151515] text-white">
      {/* top padding */}
      <div className="mx-auto w-full max-w-9xl px-4 pb-16 pt-12 sm:px-8 lg:px-12">
        {/* top row */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* left columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <FooterColumn title="Links" items={LINKS} />
            <FooterColumn title="Socials" items={SOCIALS} />

            <div className="min-w-[140px]">
              <div className="text-xs uppercase tracking-[0.18em] text-white/40">
                Local Time
              </div>
              <div className="mt-4 text-sm text-white/70">
                {time} <span className="text-white/50">UTC+2</span>
              </div>
            </div>

            <div className="min-w-[140px]">
              <div className="text-xs uppercase tracking-[0.18em] text-white/40">
                Version
              </div>
              <div className="mt-4 text-sm text-white/70">
                2026 © Edition
              </div>
            </div>
          </div>

          {/* right pills */}
          <div className="flex flex-wrap items-center justify-start gap-4 lg:justify-end">
            <Pill>+923124593613</Pill>
            <Pill>contact@abdulwahhab4.com</Pill>
          </div>
        </div>

        {/* middle robot */}
        <div className="relative mt-16 flex items-center justify-center">
          {/* you can add a subtle shadow/spotlight */}
          <div className="pointer-events-none absolute inset-0 mx-auto h-[240px] w-[240px] rounded-full bg-white/5 blur-3xl" />
          <RobotFollow src="/images/robot.webp" />
        </div>

        {/* big name text */}
        <div className="mt-6 flex items-end justify-center">
          <h2 className="select-none text-[22vw] font-semibold leading-none tracking-tight text-white sm:text-[18vw] md:text-[15vw]">
            AB. WAHAAB
          </h2>
        </div>
      </div>
    </footer>
  );
}
