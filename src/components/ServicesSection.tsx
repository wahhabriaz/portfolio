import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const services = useMemo<Service[]>(
    () => [
      {
        id: "01",
        number: "01",
        title: "Full Stack\nDevelopment",
        description:
          "Building scalable and high-performance web applications using Next.js, React, Node.js, and TypeScript, with robust backend architectures, secure RESTful APIs, and clean code practices.",
        icon: (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="ml-2 mt-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
            <path d="M12 18L22 12L32 18L42 12V38L32 44L22 38L12 44V18Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 12V38M32 18V44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        id: "02",
        number: "02",
        title: "UI/UX Design &\nFrontend",
        description:
          "Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion. Creating intuitive experiences with clean design systems and pixel-perfect implementations.",
        icon: (
          <svg width="50" height="50" viewBox="0 0 64 64" fill="none" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
            <rect x="10" y="10" width="44" height="44" rx="6" stroke="currentColor" strokeWidth="2.5" />
            <path d="M10 22H54M22 10V54" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="38" cy="38" r="6" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        ),
      },
      {
        id: "03",
        number: "03",
        title: "SaaS Platform\nDevelopment",
        description:
          "Developing end-to-end SaaS solutions with subscription systems, Stripe billing, and multi-tenant management. Ensuring scalability and secure user management.",
        icon: (
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mt-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
            <path d="M32 10L46 18V38L32 46L18 38V18L32 10Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 10V46M18 18L46 38M46 18L18 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        id: "04",
        number: "04",
        title: "API & System\nArchitecture",
        description:
          "Designing maintainable APIs with PostgreSQL, Prisma, and MongoDB. Focusing on performance optimization, security best practices, and reliable data flow.",
        icon: (
          <svg width="60" height="60" viewBox="0 0 64 64" fill="none" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
            <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="46" cy="18" r="6" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="18" cy="46" r="6" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="46" cy="46" r="6" stroke="currentColor" strokeWidth="2.5" />
            <path d="M24 18H40M24 46H40M18 24V40M46 24V40" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!section || !pin || !track) return;

    // ✅ Only do pin + horizontal scroll on large screens (like reference)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // total horizontal distance we need to scroll
      const totalScroll = track.scrollWidth - pin.clientWidth;

      // prevent weirdness if widths are equal
      if (totalScroll <= 0) return;

      gsap.set(track, { x: 0 });

      const tween = gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: track,
          start: "top 10%",
          end: () => `+=${totalScroll + 0}`, // ✅ extra space like reference
          scrub: 1,
          pin: pin,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => {
      mm.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#e8e8e7] relative overflow-hidden">
      <div className="mx-auto w-full max-w-[1400px] px-4 lg:px-24 py-20 sm:py-32 lg:py-40 relative z-[50]">
        {/* Heading */}
        <div className="flex flex-col items-start max-w-3xl">
          <h2 className="text-[#1c1c1c] text-3xl lg:text-4xl font-medium mb-8 sm:mb-12 leading-[1.1] lg:px-4 px-1">
            Transforming ideas into exceptional digital experiences through
            expertise and innovation
          </h2>
        </div>

        {/* Pinned area */}
        <div ref={pinRef} className="relative w-full">
          {/* Track */}
          <div
            ref={trackRef}
            className="flex flex-col lg:flex-row gap-10 lg:gap-0"
          >
            {services.map((s, idx) => (
              <ServiceCard
                key={s.id}
                service={s}
                isLast={idx === services.length - 1}
                isFirst={idx === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  isLast,
  
}: {
  service: Service;
  isLast: boolean;
  isFirst: boolean;
}) {
  return (
    <div className="group relative">
      <div
         className={[
    "relative text-[#1c1c1c]",
    "w-full sm:w-[350px] md:w-[450px] lg:w-[480px]",
    "h-auto sm:h-[350px] md:h-[450px] lg:h-[480px]",
    "border border-gray-400",
    // ✅ Only remove right border on desktop if NOT last
    !isLast ? "lg:border-r-0" : "lg:border-r",
    "p-6 sm:p-8 md:p-10",
    "transition-all duration-500 cursor-pointer overflow-hidden",
    "mb-4 lg:mb-0",
  ].join(" ")}
      >
        <div className="relative flex flex-col justify-between z-10 h-full">
          {/* top */}
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Number */}
              <span className="text-[#1c1c1c] absolute -top-3 sm:-top-5 -right-3 sm:-right-5 text-base sm:text-lg md:text-2xl font-light">
                {service.number}
              </span>

              {/* Icon circle */}
              <div className="transition-all bg-[#d4f534] h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 rounded-full flex items-center justify-center duration-500 text-[#1c1c1c]/70">
                {service.icon}
              </div>
            </div>
          </div>

          {/* title */}
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold my-3 w-full lg:w-[70%] leading-tight text-[#1c1c1c]/90 whitespace-pre-line">
            {service.title}
          </h3>

          {/* divider */}
          <div className="pt-4 sm:pt-6 border-t border-[#1c1c1c]/10">
            <p className="text-[#1c1c1c]/70 text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* top-right light corner gradient (like reference) */}
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#d4f534]/10 to-transparent rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
