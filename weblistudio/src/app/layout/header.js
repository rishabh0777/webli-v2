"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Refs
  const btnRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useGSAP(() => {
    const btn = btnRef.current;
    const circle = circleRef.current;
    const text = textRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const line3 = line3Ref.current;

    // hover IN
    const onEnter = () => {
      // Background fade
      gsap.to(btn, {
        background: "transparent",
        duration: 0.3,
        ease: "power2.out",
      });

      // Circle expand
      gsap.to(circle, {
        width: "5vh",
        height: "5vh",
        background: "#facc15",
        duration: 0.3,
        ease: "power2.out",
      });

      // Text color
      gsap.to(text, {
        color: "#facc15",
        duration: 0.25,
      });

      // Lines fade-in
      gsap.to([line1, line2, line3], {
        opacity: 1,
        duration: 0.25,
      });

      // Position lines
      gsap.to(line1, { y: -6, duration: 0.25 });
      gsap.to(line3, { y: 6, duration: 0.25 });
    };

    // hover OUT
    const onLeave = () => {
      // Background restore
      gsap.to(btn, {
        background:
          "linear-gradient(to right, #facc15, white, #fef08a)",
        duration: 0.3,
        ease: "power2.in",
      });

      // Circle shrink
      gsap.to(circle, {
        width: "1vh",
        height: "1vh",
        background: "black",
        duration: 0.3,
        ease: "power2.in",
      });

      // Text back to black
      gsap.to(text, {
        color: "black",
        duration: 0.25,
      });

      // Lines disappear IF MENU NOT OPEN
      if (!isOpen) {
        gsap.to([line1, line2, line3], {
          opacity: 0,
          duration: 0.25,
        });

        // Reset positions
        gsap.to([line1, line3], {
          y: 0,
          duration: 0.25,
        });
      }
    };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);

    // cleanup
    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, [isOpen]); // runs again if open state changes

  return (
    <header className="fixed text-white w-full h-[14vh] top-0 left-0 z-[999]">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-6 sm:px-4 lg:px-6 overflow-hidden">

        {/* LOGO */}
        <div className="relative flex justify-center items-center cursor-pointer">
          <Image
            className="block leading-none"
            src="/logo/primaryLogoWhite.svg"
            alt="Webli Studio Logo"
            width={150}
            height={50}
          />
        </div>

        {/* MENU BUTTON */}
        <button onClick={() => setIsOpen(!isOpen)}>
          <div
            ref={btnRef}
            className="relative bg-gradient-to-r from-yellow-400 via-white to-yellow-100
            text-black rounded-full flex items-center justify-center gap-2 
            md:w-[6vw] md:h-[5vh] w-[15vw] h-[5vh] transition-all duration-300 overflow-hidden"
          >
            <h3
              ref={textRef}
              className="tracking-[0.1vw] transition-all"
            >
              MENU
            </h3>

            {/* CIRCLE */}
            <div
              ref={circleRef}
              className="relative w-[1vh] h-[1vh] bg-black rounded-full transition-all duration-300 flex items-center justify-center"
            >
              {/* LINE 1 */}
              <div
                ref={line1Ref}
                style={{ opacity: 0 }}
                className={`absolute w-3 h-0.5 bg-black rounded-full transition-all duration-300
                  ${isOpen ? "rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100" : ""}
                `}
              />

              {/* LINE 2 */}
              <div
                ref={line2Ref}
                style={{ opacity: 0 }}
                className={`absolute w-3 h-0.5 bg-black rounded-full transition-all duration-300
                  ${isOpen ? "opacity-0" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
                `}
              />

              {/* LINE 3 */}
              <div
                ref={line3Ref}
                style={{ opacity: 0 }}
                className={`absolute w-3 h-0.5 bg-black rounded-full transition-all duration-300
                  ${isOpen ? "-rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100" : ""}
                `}
              />
            </div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
