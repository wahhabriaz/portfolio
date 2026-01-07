import { Route, Routes } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import CrossMarquee from "./components/CrossMarquee";
import FirstStorySection from "./components/FirstStorySection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
// import HomeAboutSection from "./components/HomeAbout";
import HomeIntro from "./components/HomeIntro";
import Navbar from "./components/Navbar";
import WorkSection from "./components/WorkSection";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";

export default function App() {
  return (
    <>
    <Navbar/>
       
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
      </Routes>
  
   
   

    <Footer/>
    
    </>

  );
}
