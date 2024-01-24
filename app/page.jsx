"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactPage from "./contact/ContactPage";
import {StarsCanvas} from "./components/canvas/Stars";
import Footer from "./components/Footer";
import { Stars } from "@react-three/drei";


export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen bg-[#ffffff]">
     
        
      <section className="bg-hero bg-no-repeat bg-bottom" 
    
      style={{ 
        backgroundImage: "url(/images/hero-bg.svg)",
        backgroundSize: "cover", 
        position: "relative" 

      }}>
      <div className="sticky top-0 left-0 w-full h-full">
      <StarsCanvas/>
      </div>
      <Navbar/>
      
      
      <div class="container mt-24 mx-auto px-2" style={{paddingTop: "1rem", paddingBottom: "9rem"}}>
      <HeroSection/> 
      </div>

      </section>


      <div class="container mx-auto" style={{paddingTop: "9rem", paddingBottom: "9rem"}}>
      <AboutSection/>
     

      
      </div>

      <div>
        <ProjectsSection />
     
        
      </div>

      <div>
      
        <ContactPage />
 
      </div>

      
    </main> 
  );
};




