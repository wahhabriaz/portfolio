import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  useEffect(() => {
    // ✅ Create Lenis instance
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false, // better UX on mobile (keep false)
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    // ✅ Tell ScrollTrigger to update on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // ✅ Use GSAP ticker instead of requestAnimationFrame
    // This syncs perfectly with GSAP animations
    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    // ✅ Disable GSAP lag smoothing for better smooth scrolling
    gsap.ticker.lagSmoothing(0);

    // ✅ Refresh ScrollTrigger after setup (important)
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
