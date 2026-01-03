import React, { useEffect, useMemo, useState } from "react";

type TopCurveProps = {
  /** Initial scaleY on load */
  initialScaleY?: number;
  /** Max scaleY on scroll */
  maxScaleY?: number;
  /** How many px of scroll to reach max scale */
  scrollRange?: number;
  /** Curve color */
  curveColor?: string;
};

export default function TopCurve({
  initialScaleY = 1.3399,
  maxScaleY = 6,
  scrollRange = 700,
  curveColor = "#141414",
}: TopCurveProps): JSX.Element {
  const [scaleY, setScaleY] = useState(initialScaleY);

  const clamp = useMemo(
    () => (v: number, min: number, max: number) => Math.min(max, Math.max(min, v)),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      // progress from 0 → 1
      const progress = clamp(y / scrollRange, 0, 1);

      // scaleY from initial → max
      const nextScaleY = initialScaleY + (maxScaleY - initialScaleY) * progress;

      setScaleY(nextScaleY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [clamp, initialScaleY, maxScaleY, scrollRange]);

  return (
    <div
      className="absolute left-1/2 -top-[2rem] z-40 mb-14 h-[2rem] w-full -translate-x-1/2 overflow-hidden lg:-top-[1rem] lg:h-[4rem]"
      style={{
        transform: `translateX(-50%) scale(1, ${scaleY})`,
        willChange: "transform",
      }}
    >
      {/* ✅ Child oval: w 120% / h 150% / rounded 50% */}
      <div
        className="absolute -right-[10%] top-0 h-[150%] w-[120%] rounded-[50%]"
        style={{ backgroundColor: curveColor }}
      />
    </div>
  );
}
