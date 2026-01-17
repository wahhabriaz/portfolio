
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollDirectionMarquee from "./ScrollMarquee";
import ServicesSection from "./ServicesSection";

gsap.registerPlugin(ScrollTrigger);

type StatProps = {
  label: string;
  value: string;
};

function Stat({ label, value }: StatProps) {

  return (
    <div className="w-full">
      {/* Divider line */}
      <div className="h-px w-full bg-black/30" />

      <div className="pt-8">
        <div className="text-xs tracking-[0.12em] text-black/70">
          {label.toUpperCase()}
        </div>
        <div className="mt-6 text-6xl font-semibold tracking-tight text-black md:text-7xl">
          {value}
        </div>
      </div>
    </div>
  );
}

export default function FirstStorySection() {
     const cardRef = useRef<HTMLDivElement | null>(null);
       const imageWrapRef = useRef<HTMLDivElement | null>(null);
       const sectionRef = useRef<HTMLElement | null>(null);
const svgPathRef = useRef<SVGPathElement | null>(null);


  useEffect(() => {
    const card = cardRef.current;
    const imageWrap = imageWrapRef.current;
    if (!card || !imageWrap) return;

    
    // -----------------------------
    // 1) Card animation (80% -> 100%)
    // -----------------------------
    gsap.set(card, {
      width: "80%",
      y: 120,
      borderRadius: 34,
    });

    const cardTl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 50%",
        end: "top 10%",
        scrub: true,
        invalidateOnRefresh: true,
        // markers: true,
      },
    });

    cardTl.to(card, {
      width: "100%",
      y: 0,
      borderRadius: 0,
      ease: "none",
    });

    // -----------------------------
    // 2) Image wrapper animation (60% -> 90%)
    // -----------------------------
    gsap.set(imageWrap, {
      width: "60%",
    });

    const imageTl = gsap.timeline({
      scrollTrigger: {
        trigger: imageWrap,
        start: "top 70%",   // ✅ starts when image hits 70% of viewport
        end: "top 40%",     // ✅ ends at 30%
        scrub: true,
        invalidateOnRefresh: true,
        // markers: true,
      },
    });

    imageTl.to(imageWrap, {
      width: "90%",
      ease: "none",
      scale: 1.08
    });

    const section = sectionRef.current;
  const path = svgPathRef.current;

  if (!section || !path) return;

  // ✅ Path length for stroke drawing
  const length = path.getTotalLength();

  // ✅ Start with 5% visible (95% hidden)
  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
  });

  // ✅ Draw on scroll (separate trigger)
  const drawTween = gsap.to(path, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: section,
       start: "top -7%",
      end: "+=3500",        // ✅ make it slow
      scrub: true,
      invalidateOnRefresh: true,
      // markers: true,
    },
  });


    return () => {
      cardTl.scrollTrigger?.kill();
      cardTl.kill();

      imageTl.scrollTrigger?.kill();
      imageTl.kill();

      drawTween.scrollTrigger?.kill();
    drawTween.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full max-w-full bg-[#1e1e1e] text-white relative lg:overflow-hidden">
        {/* Green Curve Overlay */}
          <div className="absolute  lg:top-[10rem] top-[25rem]  -left-44 lg:left-10 hidden lg:block md:overflow-hidden w-full h-full pointer-events-none z-[30]">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2100 2850" fill="none" preserveAspectRatio="xMidYMid slice" className="jsx-331386f03080d6ed w-full min-w-[200vw] md:min-w-[150vw] lg:min-w-full h-auto"><path ref={svgPathRef} d="M2049.4 7.12338C2050.34 7.09245 2051.23 6.69369 2051.88 6.00967C2052.53 5.32571 2052.88 4.41341 2052.86 3.47254C2052.83 2.53168 2052.44 1.63823 2051.75 0.987824C2051.07 0.337364 2050.16 -0.0158818 2049.22 0.000643925C2049.22 0.000643925 2049.22 0.000643925 2049.22 0.000643925C1943.26 1.94307 1840.2 5.90331 1736.44 14.9286C1580.5 35.1176 1395.04 34.2702 1278.58 166.757C1227.87 238.526 1236.8 327.455 1207.7 401.188C1180.83 477.082 1123.39 535.224 1055.61 580.079C1016.79 606.535 979.953 634.166 955.567 675.911C927.749 717.393 946.265 778.123 980.727 808.354C1075.88 894.744 1195.98 932.824 1306.11 986.278C1361.73 1012.48 1416.74 1038.53 1465.3 1075.04C1488.69 1093.15 1510.8 1114.41 1519.8 1140.6C1529.12 1166.7 1519.29 1194.56 1500.7 1217.79C1404.12 1339.78 1268.09 1422.61 1139.05 1511.49C1075.88 1557.11 1005.55 1600.46 966.359 1674.6C923.616 1757.92 996.115 1837.3 1055.35 1883.24C1199.52 1951.53 1354.08 1931.18 1501.68 1955.38C1575.8 1965.1 1650.06 1977.47 1718.74 2004.79C1786.41 2030.3 1851.14 2084.87 1848.19 2160.07C1857.77 2265.2 1741.97 2306.5 1650.44 2305.64C1554.37 2308.8 1458.26 2296.72 1361.83 2287.47C1176.37 2275.98 949.392 2224.12 804.589 2378.02C676.379 2541.45 504.322 2672.42 307.757 2741.09C210.014 2775.13 106.864 2796.58 3.77395 2795.01C2.83192 2794.95 1.90584 2795.27 1.19933 2795.9C0.492818 2796.52 0.0637703 2797.4 0.00655131 2798.35C-0.0506677 2799.29 0.268607 2800.21 0.89412 2800.92C1.51963 2801.63 2.40016 2802.06 3.3419 2802.12C3.3419 2802.12 3.3419 2802.12 3.3419 2802.12C108.263 2804.24 211.744 2783.12 310.615 2749.26C509.168 2680.97 683.528 2549.47 813.527 2385.11C949.697 2239.53 1175.36 2287.99 1360.46 2300.99C1456.84 2310.54 1553.01 2323.05 1651 2320.16C1699.48 2317.99 1750.07 2312.84 1794.89 2288.18C1840.96 2264.57 1865.28 2210.14 1863.58 2160.07C1867.3 2076.9 1794.14 2015.79 1724.76 1989.98C1653.64 1961.52 1578.54 1948.99 1503.79 1938.98C1356.97 1915.39 1194.32 1930.71 1066.23 1869.57C1007.37 1823.57 945.361 1752.48 982.498 1682.27C1017.2 1615.88 1086.61 1571.25 1149.4 1526.47C1277.87 1438.09 1415.69 1354.9 1515.42 1229.34C1535.99 1204.15 1549.65 1167.96 1537.6 1134.63C1526.1 1101.89 1501.37 1079.39 1476.77 1060.11C1425.62 1021.67 1370.11 995.587 1314.1 969.12C1203.78 915.863 1082.67 875.787 994.272 795.03C962.857 765.637 949.342 721.103 972.099 685.095C993.13 648.632 1028.32 621.198 1065.96 595.585C1135.46 549.434 1196.38 487.653 1224.35 407.229C1254.02 328.852 1245.71 240.903 1291.77 176.154C1396.46 53.001 1582.9 47.2325 1737.51 26.2786C1840.75 16.0276 1943.59 10.6447 2049.4 7.12338Z" stroke="#d4f534" stroke-width="40" opacity="0.9" stroke-linecap="round" stroke-linejoin="round" fill="none" className="jsx-331386f03080d6ed"></path></svg>
          </div>
      <div ref={cardRef} className="mx-auto bg-[#e8e8e7] px-4 pb-20 pt-14 sm:px-8 md:px-10"  style={{
        
          willChange: "transform, width, border-radius",
        }}>
         
        {/* =========================
            TOP TITLE ROW
        ========================== */}
        
        
        <ScrollDirectionMarquee/>

        {/* =========================
            HERO IMAGE BLOCK
        ========================== */}
        <div ref={imageWrapRef} className="relative mt-12 overflow-hidden rounded-none bg-black mx-auto">
          {/* Image */}
          <img
            src="/myimage.png" // 🔁 replace with your image path
            alt="Portrait"
            className="h-[320px] w-full object-cover object-top sm:h-[420px] md:h-[520px] lg:h-[100vh] will-change-transform"

          />

         
        </div>

        {/* =========================
            TEXT TWO-COLUMN
        ========================== */}
        <div className="mt-[5%] w-[97%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          {/* Left big statement */}
          <div className="max-w-xl">
            <h3 className="text-3xl font-medium leading-tight text-black/80 tracking-tight sm:text-4xl md:text-5xl">
              Driving measurable growth and engagement through thoughtful design
              and engineering.
            </h3>
          </div>

          {/* Right paragraph */}
          <div className="max-w-xl md:pt-2">
            <p className="text-base leading-relaxed text-black/70 sm:text-lg">
              Every product I build starts with understanding user goals and
              translating them into intuitive, high-performance experiences.
              From concept to launch, I focus on meaningful results—boosting
              user engagement, retention, and overall business impact.
            </p>
          </div>
        </div>

        {/* =========================
            STATS ROW
        ========================== */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          <Stat label="Years of experience" value="4+" />
          <Stat label="Projects completed" value="30+" />
        </div>
      </div>
      <ServicesSection/>
    
    </section>
  );
}
