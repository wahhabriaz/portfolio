

type AboutCTAProps = {
  title?: string;
  text?: string;
};

export default function AboutCTA({
  title = "Ready to Build Something Exceptional?",
  text = `Whether you need an AI-powered SaaS platform, an immersive 3D experience, or a high-performance web application, I bring the technical expertise and creative vision to make it happen. Let's discuss how we can turn your ambitious ideas into production-ready solutions that drive real business results.`,
}: AboutCTAProps) {
  return (
    <section className="w-full bg-[#e8e8e7]">
      <div className="mx-auto w-full max-w-full px-4 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
        {/* Black CTA Box */}
        <div className="rounded-[26px] bg-black px-6 py-16 shadow-[0_20px_80px_rgba(0,0,0,0.22)] sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              {title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-[1.9] text-white/60 sm:text-base md:text-[17px]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
