import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  onAboutClick?: () => void;
};

export default function StretchyButton({ onAboutClick }: Props) {
  // raw motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);
  const rotate = useMotionValue(0);

  // spring smoothing (feels premium)
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });
  const sScaleX = useSpring(scaleX, { stiffness: 300, damping: 20 });
  const sScaleY = useSpring(scaleY, { stiffness: 300, damping: 20 });
  const sRotate = useSpring(rotate, { stiffness: 300, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // cursor position (-0.5 to +0.5)
    const dx = (e.clientX - rect.left) / rect.width - 0.5;
    const dy = (e.clientY - rect.top) / rect.height - 0.5;

    // magnetic movement
    x.set(dx * 18);
    y.set(dy * 14);

    // stretch in direction of movement (horizontal based)
    const stretch = Math.min(Math.abs(dx) * 0.35, 0.22); // max ~0.22
    scaleX.set(1 + stretch);
    scaleY.set(1 - stretch * 0.8);

    // little tilt
    rotate.set(dx * 8);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    scaleX.set(1);
    scaleY.set(1);
    rotate.set(0);
  };

  return (
    <motion.button
      type="button"
      onClick={onAboutClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        x: sx,
        y: sy,
        scaleX: sScaleX,
        scaleY: sScaleY,
        rotate: sRotate,
      }}
      className="group flex items-center gap-3 rounded-full bg-lime-300 px-6 py-3 text-sm font-medium text-black will-change-transform"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
    >
      About Me
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-200 transition-transform group-hover:translate-x-0.5">
        ↗
      </span>
    </motion.button>
  );
}
