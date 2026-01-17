import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type ScrubRevealLinesProps = {
  lines: string[];
  className?: string;

  /** When reveal starts: element top reaches this % of viewport */
  startAt?: string; // e.g. "40%"

  /** When reveal ends: element top reaches this % of viewport */
  endAt?: string; // e.g. "10%"

  /** How much each line is staggered across the scroll progress */
  staggerAmount?: number; // e.g. 0.4 (0..1)
};

export default function ScrubRevealLines({
  lines,
  className = "",
  startAt = "40%",
  endAt = "10%",
  staggerAmount = 0.85,
}: ScrubRevealLinesProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  // Ensure correct offset format
  const startOffset = `start ${startAt}` as "start" | `${number}%`;
  const endOffset = `start ${endAt}` as "start" | `${number}%`;

  // ✅ scroll progress for this element only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [startOffset, endOffset], // Use the newly typed offset here
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <div ref={ref} className={className}>
      {lines.map((text, i) => (
        <ScrubLine
          key={i}
          index={i}
          total={lines.length}
          progress={smoothProgress}
          staggerAmount={staggerAmount}
        >
          {text}
        </ScrubLine>
      ))}
    </div>
  );
}

function ScrubLine({
  children,
  index,
  total,
  progress,
  staggerAmount,
}: {
  children: React.ReactNode;
  index: number;
  total: number;
  progress: any;
  staggerAmount: number;
}) {
  // We map each line to a slice of the scroll progress (staggered).
  // staggerAmount controls how much overlap there is between lines.
  const step = (1 - staggerAmount) / Math.max(total - 1, 1);
  const start = index * step;
  const end = start + staggerAmount;

  // ✅ Bottom-to-top reveal
  const y = useTransform(progress, [start, end], [40, 0]);
  const opacity = useTransform(progress, [start, end], [0, 1]);

  return (
    <div className="overflow-hidden">
      <motion.div style={{ y, opacity }}>
        {children}
      </motion.div>
    </div>
  );
}
