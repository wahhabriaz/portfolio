import React from "react";


type LinkItem = { label: string; href: string };

const LINKS: LinkItem[] = [
  { label: "Home", href: "/home" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS: LinkItem[] = [
  { label: "Email", href: "mailto:wahhabriaz95@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdulwahaab4/" },
  { label: "Whatsapp", href: "https://wa.me/923124593613" },
  { label: "Github", href: "https://github.com/wahhabriaz" },
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


type PillProps = {
  children: React.ReactNode;
  href: string;           // route / url
  target?: string;
  rel?: string;
};

export function Pill({ children, href, target, rel }: PillProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="rounded-full border border-white/30 px-5 py-2 text-sm text-white/80 backdrop-blur transition-colors hover:text-white"
    >
      {children}
    </a>
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
            <Pill href="tel:+923124593613">+923124593613</Pill>
            <Pill href="mailto:wahhabriaz95@gmail.com">wahhabriaz95@gmail.com</Pill>
          </div>
        </div>

        {/* middle robot */}
        <div className="relative mt-16 flex items-center justify-center">
          {/* you can add a subtle shadow/spotlight */}
          <div className="pointer-events-none absolute inset-0 mx-auto h-[240px] w-[240px] rounded-full bg-white/5 blur-3xl" />
          {/* <RobotFollow src="/images/robot.webp" />
           <FooterRobot height={240} /> */}
        </div>

        {/* big name text */}
        <div className="mt-6 flex items-end justify-center">
          <h2 className="select-none text-[11vw] font-semibold leading-none tracking-tight text-white font-unbounded">
            AB. WAHAAB
          </h2>
        </div>
      </div>
    </footer>
  );
}
