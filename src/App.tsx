import FirstStorySection from "./components/FirstStorySection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
// import HomeAboutSection from "./components/HomeAbout";
import HomeIntro from "./components/HomeIntro";
import Navbar from "./components/Navbar";
import WorkSection from "./components/WorkSection";

export default function App() {
  return (
    <>
    <Navbar/>
        <Hero />
    <HomeIntro/>
    {/* <HomeAboutSection/> */}
    <FirstStorySection/>
    <WorkSection/>
    <Footer/>
    
    </>

  );
}
