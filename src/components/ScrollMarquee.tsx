import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text?: string;
  iconSrc?: string;
  speed?: number; // pixels per second
};

export default function ScrollDirectionMarquee({
  text = "FULL-STACK DEVELOPER.",
  iconSrc = "green-flower.avif",
  speed = 220, // ✅ adjust speed
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    // ✅ Make track wide enough (duplicate content already)
    const trackWidth = track.scrollWidth / 2;

    // Loop animation (moves left continuously)
    const tween = gsap.to(track, {
      x: -trackWidth,
      duration: trackWidth / speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          // wrap around seamlessly
          const num = parseFloat(x);
          return `${num % -trackWidth}px`;
        },
      },
    });

    // ✅ Change direction based on scroll direction
    const st = ScrollTrigger.create({
      trigger: wrap,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        // self.direction => 1 when scrolling down, -1 when scrolling up
        tween.timeScale(self.direction === 1 ? 1 : -1);
      },
    });

    return () => {
      st.kill();
      tween.kill();
    };
  }, [speed]);

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden py-6 lg:py-12"
    >
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#e8e8e7] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#e8e8e7] to-transparent" />

      {/* Track */}
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
      >
        {/* ✅ First set */}
        <MarqueeSet text={text} iconSrc={iconSrc} />

        {/* ✅ Duplicate set for seamless loop */}
        <MarqueeSet text={text} iconSrc={iconSrc} />
      </div>
    </div>
  );
}

function MarqueeSet({ text, iconSrc }: { text: string; iconSrc: string }) {
  return (
    <div className="flex items-center gap-8 pr-12">
      <MarqueeItem text={text} iconSrc={iconSrc} />
      <MarqueeItem text={text} iconSrc={iconSrc} />
      <MarqueeItem text={text} iconSrc={iconSrc} />
      <MarqueeItem text={text} iconSrc={iconSrc} />
    </div>
  );
}

function MarqueeItem({ text, iconSrc }: { text: string; iconSrc: string }) {
  return (
    <div className="flex items-center gap-6">
      <h2 className="whitespace-nowrap text-4xl font-semibold tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl">
        {text}
      </h2>

      <span className="inline-flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
        <img
          src={iconSrc}
          alt=""
          className="h-full w-full object-contain"
          draggable={false}
        />
      </span>
    </div>
  );
}
