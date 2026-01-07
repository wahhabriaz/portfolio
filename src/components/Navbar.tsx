import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock scroll when drawer open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
    
      <header className="fixed left-0 top-0 z-[100] w-full bg-[#e8e8e7]/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-8xl items-center justify-between px-4 py-4 sm:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            {/* replace with your logo */}
            <div className="text-3xl font-black tracking-tight text-black">
              AB. WAHAAB
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 text-sm text-black/70 md:flex">
            {NAV_ITEMS.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="transition-colors hover:text-black"
              >
                {item.label}
              </Link>
            ))}

            {/* Contact Pill + Arrow Circle */}
            <a
              href="#contact"
              className="group flex items-center gap-2"
            >
              <span className="rounded-full bg-black px-5 py-2 text-sm text-white transition-transform group-hover:scale-[1.02]">
                Contact
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden"
            aria-label="Open menu"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
              ☰
            </div>
          </button>
        </div>
      </header>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <MobileDrawer
            items={NAV_ITEMS}
            onClose={() => setOpen(false)}
          />
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
        className="fixed right-3 top-3 z-[210] h-[calc(100vh-24px)] w-[calc(100vw-24px)] max-w-[560px] overflow-hidden rounded-[34px] bg-[#1a1a1a] text-white shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
        initial={{ x: 40, opacity: 0, scale: 0.98 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        exit={{ x: 40, opacity: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 240, damping: 26 }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="absolute right-6 top-6 z-[5] flex h-10 w-10 items-center justify-center rounded-full text-white/90 hover:text-white"
        >
          <span className="text-3xl leading-none">×</span>
        </button>

        <div className="flex h-full flex-col px-8 pb-8 pt-24">
          {/* Links */}
          <motion.ul
            className="space-y-6"
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
                  hidden: { y: 12, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
              >
                <a
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between text-5xl font-semibold tracking-tight text-white/95"
                >
                  <span>{item.label}</span>
                  <span className="text-xl font-light text-white/70 transition-transform group-hover:translate-x-1">
                    +
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Greeting */}
          <div className="mt-10 text-center">
            <div className="flex items-center justify-center gap-2 text-lg text-white/90">
              <span>👋</span>
              <span>Nice to see you!</span>
            </div>
            <div className="mt-2 text-sm text-white/55">
              I&apos;m Aziz Khaldi, Software Engineer <br />
              based in Algeria
            </div>
          </div>

          {/* Image card */}
          <div className="mt-8 flex items-center justify-center">
            <div className="w-full max-w-[420px] rounded-[26px] bg-[#e8e8e7] p-6">
              <div className="flex items-center justify-center">
                {/* replace image */}
                <img
                  src="/images/blob.png"
                  alt="Blob"
                  className="h-[220px] w-[220px] object-contain"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 text-center text-sm text-white/45">
            <div>
              Made with <span className="text-white/70">❤️</span> by Mr. Wahaab
            </div>
            <div className="mt-2">© 2026</div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
