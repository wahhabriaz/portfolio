import React from "react";
import AboutSection from "../components/AboutSection";
import ScrollDirectionMarquee from "../components/ScrollMarquee";
import AboutIntro from "../components/AboutIntro";
import AboutServices from "../components/AboutServices";
import ProvenImpact from "../components/ProvenImpact";
import TechnologyArsenal from "../components/TechnologyArsenal";
import AboutCTA from "../components/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <ScrollDirectionMarquee/>
      <AboutIntro/>
      <AboutServices/>
   <ProvenImpact/>
   <TechnologyArsenal/>
   <AboutCTA/>
    </>
  );
}
