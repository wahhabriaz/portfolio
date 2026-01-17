import React from "react";

type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" viewBox="0 0 448 512" fill="currentColor" {...props}>
    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" viewBox="0 0 448 512" fill="currentColor" {...props}>
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z" />
  </svg>
);

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" viewBox="0 0 496 512" fill="currentColor" {...props}>
    <path d="M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
  </svg>
);

export default function Hero(): JSX.Element {
  const socials: SocialLink[] = [
    {
      href: "https://www.linkedin.com/in/abdulwahhab4/",
      label: "LinkedIn",
      icon: <LinkedInIcon className="h-6 w-6" />,
    },
    {
      href: "https://wa.me/923124593613s",
      label: "WhatsApp",
      icon: <WhatsAppIcon className="h-6 w-6" />,
    },
    {
      href: "https://github.com/wahhabriaz",
      label: "GitHub",
      icon: <GitHubIcon className="h-6 w-6" />,
    },
  ];

  return (
    <section
      className="relative h-[calc(100vh-96px)] md:h-[calc(100vh-88px)] w-full overflow-hidden bg-[#e7e7e7]"
      itemScope
      itemType="http://schema.org/Person"
    >
     {/* ✅ VIDEO BACKGROUND */}
  <video
    className="absolute inset-0 z-0 h-full w-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  >
    <source src="/glassyObj.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

      <div className="relative z-20 h-full w-full">
        {/* LEFT SIDE */}
        <aside className="absolute left-0 top-0 z-50 flex h-full flex-col items-center justify-between px-5 py-10 lg:px-9">
          {/* Vertical line */}
          <div className="relative hidden h-[40vh] w-px bg-gray-700 lg:block">
            <span className="absolute bottom-0 right-1/2 h-[0.3rem] w-[0.3rem] translate-x-1/2 rounded-full bg-black" />
            <span className="absolute top-0 right-1/2 h-[0.3rem] w-[0.3rem] translate-x-1/2 rounded-full bg-black" />
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-6 text-[#1e1e1e]">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="transition-colors hover:text-black/60"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </aside>

        {/* CENTER CONTENT */}
        <div className="relative z-40 flex h-full w-full items-center justify-center px-4">
          <div className="flex flex-col items-center justify-center text-center text-black">
            <p className="mb-3 text-base sm:text-lg">Hi! i'm Abdul</p>

            <h1 className="font-cabinetGrotesk text-[2.5rem] leading-[2.7rem] sm:text-[3.2rem] sm:leading-[3.4rem] md:text-[4.2rem] md:leading-[4.5rem] lg:text-[5.2rem] lg:leading-[5.2rem]">
              Full-stack Developer
            </h1>

            <h1 className="font-cabinetGrotesk text-[2.5rem] leading-[2.7rem] sm:text-[3.2rem] sm:leading-[3.4rem] md:text-[4.2rem] md:leading-[4.5rem] lg:text-[5.2rem] lg:leading-[5.2rem]">
              Data Scientist.
            </h1>
          </div>
        </div>

        {/* RIGHT SIDE - vertical badge */}
        <div className="absolute right-0 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
          <div className="flex h-32 w-16 items-center justify-center bg-white shadow-md">
            <span className="-rotate-90 text-sm font-semibold tracking-wider text-black ">
              Abdul
            </span>
          </div>
        </div>

        {/* Bottom centered scroll down */}
        <div className="absolute bottom-10 left-1/2 z-50 -translate-x-1/2">
          <p className="text-sm font-medium tracking-widest text-black/80">
            scroll down
          </p>
        </div>
      </div>
    </section>
  );
}
