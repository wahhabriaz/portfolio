

export default function LetsConnectSection() {
  return (
    <section className="w-full bg-[#e7e7e7] px-3 sm:px-6 lg:px-10 py-10 sm:py-16">
      {/* Outer Card */}
      <div
        className="
          relative mx-auto max-w-[1600px]
          overflow-hidden
          rounded-[26px] sm:rounded-[34px] lg:rounded-[42px]
          bg-[#0a0a0a]
          px-6 sm:px-10 lg:px-16
          py-20 sm:py-28 lg:py-36
        "
      >
        {/* Background texture / cloudy smoke */}
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-80
            bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_55%)]
          "
        />
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-70
            bg-[radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.10),transparent_55%)]
          "
        />
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-50
            bg-[radial-gradient(circle_at_10%_60%,rgba(255,255,255,0.08),transparent_60%)]
          "
        />
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.85))]
          "
        />

        {/* Grain effect */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay">
          <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Top label */}
          <div className="flex items-center gap-4 text-sm sm:text-base text-white/60">
            <span className="h-px w-16 sm:w-24 bg-white/20" />
            <span className="italic tracking-wide">Available to work</span>
            <span className="h-px w-16 sm:w-24 bg-white/20" />
          </div>

          {/* Heading */}
          <h2 className="mt-10 text-[54px] leading-[0.95] sm:text-[72px] md:text-[92px] lg:text-[104px] font-light tracking-tight">
            <span className="text-white">Let&apos;s</span>{" "}
            <span className="text-white/35">Connect</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-6 max-w-xl text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
            Feel free to contact me if having any questions.
            <br className="hidden sm:block" />
            I&apos;m available for new projects or just for chatting.
          </p>

          {/* Button */}
          <a
            href="#"
            className="
              group mt-10 inline-flex items-center gap-3
              rounded-full
              border border-white/15
              bg-white/5
              px-6 py-3
              text-sm sm:text-base
              text-white/85
              backdrop-blur-xl
              shadow-[0_10px_40px_rgba(0,0,0,0.45)]
              transition
              hover:bg-white/10 hover:border-white/25
            "
          >
            {/* icon circle */}
            <span
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full
                border border-white/20
                bg-white/5
                transition
                group-hover:bg-white/10
              "
            >
              {/* simple "play/arrow" style icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white/85"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span className="font-medium">Book a Meeting</span>

            {/* right arrow */}
            <span className="text-white/60 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
