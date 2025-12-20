"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const overlayRef = useRef(null);
  const tl = gsap.timeline();

  

  useGSAP(() => {
    if (!isOpen) {
      tl.to(btnRef.current.children[0],{
        opacity: 0,
        x: "50%",
        duration: 0.3,
        ease: "power2.out"
      }).to(btnRef.current.children[1],{
        opacity: 1,
        x: "-50%",
        duration: 0.3,
        ease: "power2.out"
      })
      tl.fromTo(overlayRef.current,{
        y: "0%"
      },{
        y: "100%",
        duration: 0.5,
        ease: "power2.out",
        pointerEvents: "none"
      }).to(overlayRef.current,{
        y: "100%",
        duration: 0.5,
        ease: "power2.out",
        pointerEvents: "none"
      }, "-=0.3");

    }else{
      tl.to(btnRef.current.children[1],{
        opacity: 0,
        x: "50%",
        duration: 0.3,
        ease: "power2.out"
      }).to(btnRef.current.children[0],{
        opacity: 1,
        x: "-50%",
        duration: 0.3,
        ease: "power2.out"
      }).to(overlayRef.current,{
        y: "0%",
        duration: 0.5,
        ease: "power2.out",
        pointerEvents: "all"
      }, "-=0.3");
    }
  }, [isOpen]);
  

  return (
   <header className="fixed top-0 left-0 w-full z-999">
      <div className="container mx-auto flex items-center justify-between py-6 px-6 md:px-18">
        <div className="relative flex items-center z-[1000]">
          <Image
            src="/logo/primaryLogoWhite.svg"
            alt="Logo"
            width={130}
            height={58}
            className="object-contain glow"
          />
          </div>
          {/* btn */}
          <div 
          onClick={()=>{
            if(isOpen===true){
              setIsOpen(false);
            } else {
              setIsOpen(true);
            }
          }}
          ref={btnRef} 
          className="relative h-10 w-15 flex items-center justify-center cursor-pointer z-[1000]">
            
            <h2 className={`absolute drop-shadow-md drop-shadow-black top-1/2 ${!isOpen?"opacity-0":"opacity-100"} left-1/2 transform -translate-y-1/2`}>Close</h2>
            <h2 className="absolute drop-shadow-md drop-shadow-black top-1/2 left-1/2 transform -translate-y-1/2">Menu</h2>

          </div>
        </div>
        {/* Overlay */}
        <div 
        ref={overlayRef}
        className="fixed inset-0 z-[999] bg-black pointer-events-none">

        </div>
      </header>
  );
};

export default Header;