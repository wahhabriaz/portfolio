import React, { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

/* =========================
   Premium Hover Letters
========================= */
function PremiumHoverText({ text }: { text: string }) {
  const letters = useMemo(() => text.split(""), [text]);

  return (
    <motion.span
      className="relative inline-block overflow-hidden leading-none"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* BASE */}
      <span className="relative block">
        {letters.map((char, i) => (
          <motion.span
            key={`base-${char}-${i}`}
            className="inline-block"
            variants={{
              rest: { y: 0, opacity: 1 },
              hover: {
                y: "-115%",
                opacity: 0.9,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 22,
                  delay: i * 0.02,
                },
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>

      {/* HOVER */}
      <span className="absolute left-0 top-0 block">
        {letters.map((char, i) => (
          <motion.span
            key={`hover-${char}-${i}`}
            className="inline-block"
            variants={{
              rest: { y: "115%", opacity: 0.9 },
              hover: {
                y: "0%",
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 22,
                  delay: i * 0.02,
                },
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </motion.span>
  );
}

/* =========================
   Hover Fill (per element)
   - independent sliding background
========================= */
function HoverFill({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span className={`relative inline-flex overflow-hidden ${className}`}>
      {/* bg */}
      <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover/contact:translate-x-0" />
      {/* content */}
      <span className="relative z-[2]">{children}</span>
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showStickyHamburger, setShowStickyHamburger] = useState(false);

  const { scrollY } = useScroll();
  const location = useLocation();

  // lock scroll when drawer open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // show sticky hamburger after scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowStickyHamburger(latest > 160);
  });

  return (
    <>
      {/* Navbar (NOT sticky) */}
      <header className="z-[100] w-full bg-[#e7e7e7]">
        <div className="mx-auto flex w-full max-w-8xl items-center justify-between px-4 py-6 sm:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="text-3xl font-black tracking-tight text-black">
              AB. WAHAAB
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-md text-black/70 md:flex">
            {NAV_ITEMS.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-md font-medium text-black/70 transition-colors hover:text-black"
              >
                <PremiumHoverText text={item.label} />
              </Link>
            ))}

            {/* ✅ Contact button (parent group + each span reacts independently) */}
            <Link
              to="/contact"
              className="group/contact flex items-center"
            >
              {/* Pill */}
              <HoverFill className="rounded-full">
                <span className="rounded-full bg-black px-5 py-2 text-md font-medium text-white transition-colors duration-500 group-hover/contact:bg-transparent group-hover/contact:text-black inline-block">
                  <PremiumHoverText text="Contact" />
                </span>
              </HoverFill>

              {/* Arrow Circle */}
              <HoverFill className="rounded-full">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover/contact:bg-transparent group-hover/contact:text-black group-hover/contact:translate-x-0.5">
                  ↗
                </span>
              </HoverFill>
            </Link>
          </nav>

          {/* Mobile hamburger (always top-right) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden h-12 w-12 rounded-[1.5rem]"
            aria-label="Open menu"
          >
            <div className="flex w-full h-full items-center justify-center  rounded-[1.2rem] bg-black text-white">
             <FaBars className="w-full h-[50%]"/>
            </div>
          </button>
        </div>
      </header>

      {/* ✅ Sticky hamburger (top-right after scroll, also works on mobile) */}
      <AnimatePresence>
        {showStickyHamburger && (
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="fixed right-6 top-6 z-[120] flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-black text-white shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            initial={{ y: 18, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <FaBars className="w-full h-[50%]"/>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <MobileDrawer items={NAV_ITEMS} onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================
   Mobile Drawer
========================= */

function MobileDrawer({
  items,
  onClose,
}: {
  items: NavItem[];
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-[200] bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.aside
     className="
    fixed right-3 top-3 z-[210]
    h-[calc(100vh-24px)]
    w-[calc(100vw-24px)]
    lg:w-[70vw]
    lg:max-w-none
    overflow-hidden
    rounded-[34px]
    text-white
    shadow-[0_40px_120px_rgba(0,0,0,0.55)]
    border border-white/10
    bg-gradient-to-b from-white/10 to-white/5
    backdrop-blur-3xl
  "
  initial={{ x: 80, opacity: 0, scale: 0.96, rotate: 1 }}
  animate={{ x: 0, opacity: 1, scale: 1, rotate: 0 }}
  exit={{ x: 80, opacity: 0, scale: 0.96, rotate: 1 }}
  transition={{ type: "spring", stiffness: 210, damping: 26 }}
      >
        {/* Close */}
       <button
  type="button"
  onClick={onClose}
  aria-label="Close menu"
  className="
    absolute right-6 top-6 z-[5]
    flex h-11 w-11 items-center justify-center
    rounded-full
    bg-white/5
    text-white/90
    border border-white/10
    backdrop-blur-xl
    transition hover:bg-white/10 hover:text-white
  "
>
  <span className="text-3xl leading-none">×</span>
</button>

        {/* Layout wrapper */}
        <div className="flex h-full flex-col px-7 pb-7 pt-20 sm:px-10 sm:pb-10 sm:pt-24">
          <div className="flex h-full flex-col gap-10 lg:flex-row lg:gap-0">
            {/* LEFT LINKS */}
            <div className="w-full lg:w-[55%]">
              <motion.ul
                className="space-y-7"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
                  },
                }}
              >
                {items.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={{
                      hidden: { y: 18, opacity: 0 },
                      show: { y: 0, opacity: 1 },
                    }}
                  >
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between text-[56px] font-semibold leading-[0.95] tracking-tight text-white/95 sm:text-[72px]"
                    >
                      <PremiumHoverText text={item.label} />

                      {/* plus */}
                      <span className="text-xl font-light text-white/60 transition-transform group-hover:translate-x-1">
                        +
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="w-full lg:w-[45%] lg:pl-12">
              <div className="flex h-full flex-col items-end justify-start gap-6">
                {/* Greeting */}
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2 text-lg text-white/90">
                    <span>👋</span>
                    <span>Nice to see you!</span>
                  </div>
                  <div className="mt-2 text-sm text-white/55">
                    I&apos;m Abdul Wahaab, Full Stack Developer <br />
                    based in Pakistan
                  </div>
                </div>

                {/* Image Card */}
                <div className="mt-4 w-full max-w-[520px] rounded-[28px] bg-[#e8e8e7] p-8 sm:p-10">
                  <div className="flex items-center justify-center">
                    <video
    className="inset-0 z-0 h-full w-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  >
    <source src="/glassyObj.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER (bottom left + bottom right) */}
          <div className="mt-auto flex items-center justify-between pt-8 text-xs text-white/30 sm:text-sm">
            <div>
              Made with <span className="text-white/60">❤️</span> by Mr. Wahaab
            </div>
            <div>© 2026</div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}

