import React, { useEffect, useRef } from "react";
import TopCurve from "./TopCurve";
import gsap from "gsap";
import StretchyButton from "./StretchyMagneticButton";
import ScrubRevealLines from "./ScrubRevealLines";

type HomeIntroProps = {
  onAboutClick?: () => void;
  onStoryClick?: () => void;
};

export default function HomeIntro({
  onAboutClick,
  onStoryClick,
}: HomeIntroProps): JSX.Element {






  return (
    <section className="relative min-h-screen w-full bg-[#141414] text-white">
      <TopCurve initialScaleY={1.3399} maxScaleY={6} scrollRange={700} />

      <div className="relative mx-auto flex min-h-screen max-w-6xl z-[41] flex-col items-center px-4 pt-28">
        {/* headline */}
   <div className="w-full max-w-6xl px-6 py-8 text-center sm:px-10">
  <ScrubRevealLines
    startAt="70%"  // ✅ starts when heading top hits 40% of viewport
    endAt="60%"    // ✅ ends when heading top hits 10%
    className="text-3xl font-light leading-snug tracking-wide sm:text-4xl md:text-5xl"
    lines={[
      "I'm Abdul – a Full Stack Developer crafting fast,",
      "scalable, and immersive digital experiences that",
      "merge creativity with engineering precision.",
    ]}
  />
</div>
        <div className="h-16 sm:h-20" />

        {/* paragraph */}
    <div className="w-full max-w-6xl  px-6 py-6 text-center sm:px-10">
  <ScrubRevealLines
    startAt="80%" // ✅ starts later
    endAt="75%"
    className="text-lg font-light leading-relaxed text-white/80 sm:text-xl"
    lines={[
      "I specialize in developing SaaS platforms, AI-driven products, and",
      "interactive 3D web experiences using technologies like Next.js,",
      "Node.js, and Three.js.",
    ]}
  />
</div>



        <div className="h-14 sm:h-16" />

        {/* CTA */}
<div className="flex items-center justify-center">
 <StretchyButton onAboutClick={onAboutClick} />
 
</div>


        <div className="flex-1" />

        {/* bottom bar */}
        <div className="mb-8 mt-10 w-full px-4 py-2">
          <div className="flex items-center justify-between text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-base leading-none">↓</span>
              <span>Scroll to Explore</span>
            </div>

            <button
             
              type="button"
              onClick={onStoryClick}
              className="transition-colors hover:text-white"
            >
              My Short Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
