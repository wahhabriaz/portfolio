import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  topItems?: string[];
  bottomItems?: string[];
  speed?: number; // 1 = normal, 2 = faster
};

const DEFAULT_ITEMS = [
  "Custom Web Experiences",
  "Innovative Self-Made Creations",
  "Tailored Web Development for You",
  "Handcrafted Digital Solutions",
  "Driven by Passion, Built with Code",
];

export default function CrossMarquee({
  topItems = DEFAULT_ITEMS,
  bottomItems = DEFAULT_ITEMS,
  speed = 1,
}: Props) {
  const topTrackRef = useRef<HTMLDivElement | null>(null);
  const bottomTrackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const topTrack = topTrackRef.current;
    const bottomTrack = bottomTrackRef.current;
    if (!topTrack || !bottomTrack) return;

    // ✅ Smooth infinite marquee using xPercent loop (no jitter)
    const marquee = (track: HTMLDivElement, direction: 1 | -1) => {
      gsap.set(track, { xPercent: 0 });

      const tween = gsap.to(track, {
        xPercent: direction === 1 ? -50 : 50,
        duration: 18 / speed, // ✅ speed control
        ease: "none",
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.wrap(
            direction === 1 ? -50 : 0,
            direction === 1 ? 0 : 50
          ),
        },
      });

      return tween;
    };

    const topTween = marquee(topTrack, 1); // ✅ left
    const bottomTween = marquee(bottomTrack, -1); // ✅ right

    return () => {
      topTween.kill();
      bottomTween.kill();
    };
  }, [speed]);

  return (
    <section className="relative w-full overflow-hidden bg-[#e8e8e7] py-24">
      {/* Ribbon 1 */}
      <DiagonalRibbon
        rotate="-7deg"
        top="42%"
        trackRef={topTrackRef}
        items={topItems}
      />

      {/* Ribbon 2 */}
      <DiagonalRibbon
        rotate="7deg"
        top="57%"
        trackRef={bottomTrackRef}
        items={bottomItems}
      />
    </section>
  );
}

function DiagonalRibbon({
  rotate,
  top,
  trackRef,
  items,
}: {
  rotate: string;
  top: string;
  trackRef: React.RefObject<HTMLDivElement>;
  items: string[];
}) {
  return (
    <div
      className="absolute left-1/2 w-[160%] -translate-x-1/2"
      style={{ top, transform: `translateX(-50%) rotate(${rotate})` }}
    >
      <div className="bg-[#141414] py-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
        {/* Track: must be 200% wide */}
        <div
          ref={trackRef}
          className="flex w-[200%] items-center whitespace-nowrap will-change-transform"
        >
          {/* ✅ two identical halves */}
          <MarqueeHalf items={items} />
          <MarqueeHalf items={items} />
        </div>
      </div>
    </div>
  );
}

function MarqueeHalf({ items }: { items: string[] }) {
  return (
    <div className="flex w-1/2 items-center gap-10 px-8">
      {items.map((text, i) => (
        <div key={`${text}-${i}`} className="flex items-center gap-8">
          <StarBurst />
          <span className="text-xl font-medium tracking-wide text-white/90">
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}

function StarBurst() {
  return (
    <svg
      className="h-5 w-5 text-white/75"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
