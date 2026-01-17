
type Service = {
  number: string;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Full-Stack Architecture",
    description:
      "I architect end-to-end solutions using modern tech stacks—from Node.js backends with PostgreSQL/MongoDB to React and Next.js frontends. Whether building multi-tenant SaaS platforms, real-time dashboards with WebSockets, or RESTful APIs with tRPC, I ensure type-safe, scalable architecture that supports rapid growth and seamless deployment.",
  },
  {
    number: "02",
    title: "AI & Advanced Integration",
    description:
      "I specialize in integrating AI capabilities that deliver real value—implementing RAG systems with vector embeddings, building LangChain workflows, and connecting OpenAI APIs for intelligent automation. Beyond AI, I excel at complex integrations: Stripe/PayPal payment processing, Auth0 authentication, real-time Firebase notifications, and third-party API orchestration that powers sophisticated business logic.",
  },
  {
    number: "03",
    title: "3D & Interactive Experiences",
    description:
      "I create immersive web experiences using Three.js, React Three Fiber, and advanced techniques like Gaussian Splatting. From interactive 3D virtual tours to shader-based animations with GSAP, I transform standard websites into engaging, memorable digital experiences. I optimize WebGL performance for cross-device compatibility while maintaining stunning visual fidelity that makes brands stand out.",
  },
];

export default function AboutServices() {
  return (
    <section className="w-full bg-[#e8e8e7] text-black">
      <div className="mx-auto w-full max-w-8xl px-4 pb-20 pt-10 sm:px-8 sm:pb-24 lg:px-14 lg:pb-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
          {SERVICES.map((item) => (
            <ServiceCard key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ item }: { item: Service }) {
  return (
    <div className="w-full">
      {/* Number + Divider */}
      <div className="flex flex-col gap-3">
        <div className="text-sm text-black/70">{item.number}</div>
        <div className="h-px w-full bg-black/10" />
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold tracking-tight text-black/85">
          {item.title}
        </h3>

        <p className="mt-5 text-[15px] leading-[1.9] text-black/60 sm:text-[16px]">
          {item.description}
        </p>
      </div>
    </div>
  );
}
