import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  
  return (
    <>
   
    <Navbar/>
        <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
      </Routes>
  
   
   

    <Footer/>
    
    </>

  );
}
