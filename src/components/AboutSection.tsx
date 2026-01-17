

type AboutSectionProps = {
  title?: string;
  text?: string;
};

export default function AboutSection({
  title = "About Me",
  text = `I'm a full-stack developer who enjoys building things that genuinely make life easier for users and businesses. Most of my work sits at the intersection of AI, SaaS, and interactive 3D experiences. I like taking ideas from the first concept all the way to a polished product—whether that means designing a clean React interface or structuring reliable backend microservices. I focus heavily on real results. In past projects, I've helped cut AI response times by about 40% and built automations that removed nearly 80% of the manual work for teams. My goal is always the same: create fast, scalable, and meaningful tools that people actually enjoy using.`,
}: AboutSectionProps) {
  return (
    <section className="w-full bg-[#e8e8e7] text-black">
      <div className=" w-full max-w-7xl px-4 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-28">
        {/* Title */}
        <h2 className="text-[56px] font-[300] leading-[0.95] tracking-tight sm:text-[84px] md:text-[110px] lg:text-[140px]">
          {title}
        </h2>

        {/* Text */}
        <div className="mt-10 max-w-5xl">
          <p className="text-[16px] leading-[1.9] text-black/70 sm:text-[17px] md:text-[18px] lg:text-[19px]">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
