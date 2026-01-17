

type AboutIntroProps = {
  imageSrc?: string;
};

export default function AboutIntro({
  imageSrc = "/myimage2.jpg",
}: AboutIntroProps) {
  return (
    <section className="w-full bg-[#e8e8e7] text-black">
      <div className="mx-auto w-full max-w-8xl px-4 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        {/* layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: text */}
          <div className="max-w-full text-black/65">
            <p className="text-base leading-[1.9] sm:text-[17px]">
              I&apos;m a Full-Stack Developer who bridges the gap between
              cutting-edge technology and exceptional user experience. With
              proven experience building AI-powered SaaS platforms, 3D virtual
              tour systems, and enterprise-grade applications, I specialize in
              solving complex technical challenges while delivering intuitive,
              visually stunning interfaces.
            </p>

            <p className="mt-10 text-base leading-[1.9] sm:text-[17px]">
              My approach combines strategic architecture with hands-on
              development—whether it&apos;s implementing Retrieval-Augmented
              Generation (RAG) systems, optimizing WebGL rendering for 3D
              experiences, or architecting type-safe monorepo setups with tRPC.
              I&apos;ve worked across diverse industries from PropTech to
              FinTech, consistently delivering production-ready solutions that
              scale.
            </p>

            <p className="mt-10 text-base leading-[1.9] sm:text-[17px]">
              What sets me apart is my ability to work across the entire stack:
              designing systems in Node.js, building dynamic React frontends,
              integrating AI capabilities, and deploying Dockerized microservices
              with CI/CD pipelines. I don&apos;t just write code—I architect
              solutions that drive measurable business outcomes.
            </p>
          </div>

          {/* RIGHT: image */}
          <div className="flex items-start justify-center lg:justify-end">
            <div className="w-full max-w-full overflow-hidden md:h-full border border-black/20 bg-black/5 shadow-[0_30px_70px_rgba(0,0,0,0.12)]">
              <img
                src={imageSrc}
                alt="Portrait"
                className="h-[420px] w-full object-cover sm:h-[520px] md:h-[620px] lg:h-full"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
