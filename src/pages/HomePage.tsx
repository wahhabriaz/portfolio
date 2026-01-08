import React from "react";



import WorkSection from "../components/WorkSection";
import Hero from "../components/Hero";
import FirstStorySection from "../components/FirstStorySection";
import HomeIntro from "../components/HomeIntro";

export default function HomePage() {
  return (
    <>
    <Hero/>
 <HomeIntro/>
    <FirstStorySection/>
      <WorkSection />
    </>
  );
}
