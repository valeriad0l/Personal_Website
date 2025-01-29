"use client";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {

  const [isSpinning, setIsSpinning] = useState(false);
  let timeoutId;

  const startSpinning = () => {
    setIsSpinning(true);
    // Clear any existing timeouts to prevent conflicts
    clearTimeout(timeoutId);
  };

  const stopSpinning = () => {
    // Start a timeout when the mouse leaves the element
    timeoutId = setTimeout(() => {
      setIsSpinning(false);
    }, 2000); // Continue to spin for 5 seconds after hover
  };

  // Ensure that if the component is unmounted while spinning, the timeout is cleared
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
  <section>
    <div className="grid grid-cols-1 sm:grid-cols-12">
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="col-span-7 place-self-center text-center sm:text-left"
    >

    <h1 className="text-[#4844FF] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A95FF] via-[#1E4FFF] to-[#4844FF]">Hello, I&apos;m {""}</span>
      <br/>
  
      <TypeAnimation
      sequence={[
        
        'Valeria',
        1000, 
        'a Student',
        1000, 
        'a Tutor',
        1000,
        'a Volunteer',
        1000,
        'a Software Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />

    </h1>
    <p style={{ fontWeight: 500, color: '#553BFF' }} className="text-base mb-6 sm:text-lg lg:text-xl"> 
    Ambitious 4th/final year Co-op Software Engineering student @ Concordia University.
    Actively seeking Summer 2025 internships to apply my growing
    knowledge and passion for innovative technology!
    </p>
    
    <div>
        <Link href="#contact" className="relative px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#0A95FF] via-[#2B0AFF] to-[#6C0AFF] hover:bg-slate-200 text-white">Hire Me</Link>
        <Link href="/">
        <button className="relative px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-[#0A95FF] via-[#2B0AFF] to-[#6C0AFF] hover:bg-slate-800 text-white border mt-3" >
          <span className="block bg-[#4844FF] hover:bg-[#100075] rounded-full px-5 py-2">Download CV</span>
          </button>
        </Link>
    </div>
  </motion.div>


    
  <motion.div 
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}


    className={`col-span-5 place-self-center mt-4 lg:mt-0 ${
      isSpinning ? "circle-animate" : ""
    }`}
    onMouseEnter={startSpinning}
    onMouseLeave={stopSpinning}
  >
   
   <div className="rounded-full bg-gradient-to-br from-[#0A95FF] via-[#2B0AFF] to-[#6C0AFF] w-[250px] h-[250px] lg:w-[382px] lg:h-[382px] relative shadow-customAvatar">
   <Image
     src ="/images/memoji.png"
     alt="memoji"
     className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
     width={300}
     height={300}

     />
   </div>
  </motion.div>

  </div>
  </section>

  );
  
};

export default HeroSection;