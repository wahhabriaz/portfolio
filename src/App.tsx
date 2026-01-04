import MainSection from "./components/ExpImage";
import Hero from "./components/Hero";
import HomeAboutSection from "./components/HomeAbout";
import HomeIntro from "./components/HomeIntro";

export default function App() {
  return (
    <>
        <Hero />
    <HomeIntro/>
    <section className="w-full h-screen"></section>
    {/* <HomeAboutSection/> */}
    <MainSection/>
    
    </>

  );
}
