"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";


const navLinks = [
  {
    title: "About",
    path: "#about",

  },
  {
    title:"Projects",
    path:"#projects",
  },
  {
    title:"Contact",
    path:"#contact",
  }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 0); // Set to true if scrolled down, false otherwise
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav 
    className={`${
      isScrolled
        ? 'fixed top-0 left-0 right-0 z-10 bg-white shadow-customNavbar' 
        : 'bg_navbar'
    } top-0 z-30 transition-all`}
    >
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={'/'} className="relative text-2xl md:text-5xl text-white font-semibold">
                 <Image 
                 src="/images/logo.svg" 
                 alt="Logo" 
                 width={80} 
                 height={80} 
                 style={{ marginLeft: '30px' }}
                 />
        </Link>

        <div className="mobile-menu block md:hidden">
          {
            !navbarOpen ? (
              <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border border-slate-200 rounded text-slate-200 hover:text-white hover:border-white">
                <Bars3Icon className="h-5 w-5"/>
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border border-slate-200 rounded text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5"/>
              </button>
            )
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                {navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink href={link.path} title={link.title} />
                    </li>
                  ))
                }
            </ul>
        </div>
        </div>
        
        {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  );
};

export default Navbar;

