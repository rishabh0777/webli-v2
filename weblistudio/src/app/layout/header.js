"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const btnRef = useRef(null);
  const overlayRef = useRef(null);
  const tl = useRef(null);
  const contentTl = useRef(null);

  // Overlay content refs
  const descRef = useRef(null);
  const menuItemsRef = useRef([]);
  const socialItemsRef = useRef([]);
  const footerRef = useRef(null);

  const addToMenuRefs = (el) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  const addToSocialRefs = (el) => {
    if (el && !socialItemsRef.current.includes(el)) {
      socialItemsRef.current.push(el);
    }
  };

  /* ---------------- Initial State ---------------- */
  useGSAP(() => {
    if (!overlayRef.current || !btnRef.current) return;

    gsap.set(overlayRef.current, {
      y: "100%",
      scale: 0.6,
      borderRadius: "50%",
      pointerEvents: "none",
    });

    // Button initial state
    gsap.set(btnRef.current.children[0], { opacity: 0, x: "50%" }); // Close
    gsap.set(btnRef.current.children[1], { opacity: 1, x: "0%" });  // Menu

    // Overlay content initial state
    gsap.set([descRef.current, footerRef.current], {
      opacity: 0,
      y: 20,
    });

    gsap.set(menuItemsRef.current, {
      opacity: 0,
      y: 30,
    });

    gsap.set(socialItemsRef.current, {
      opacity: 0,
      x: 20,
    });
  }, []);

  /* ---------------- Overlay + Button Animation ---------------- */
  useGSAP(() => {
    if (!btnRef.current || !overlayRef.current) return;

    if (!tl.current) {
      tl.current = gsap.timeline({ paused: true });
    }

    const closeText = btnRef.current.children[0];
    const menuText = btnRef.current.children[1];

    tl.current.clear();

    if (isOpen) {
      tl.current
        // MENU → CLOSE
        .to(menuText, {
          opacity: 0,
          x: "50%",
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          closeText,
          {
            opacity: 1,
            x: "0%",
            duration: 0.3,
            ease: "power2.out",
          },
          "<"
        )
        // OVERLAY OPEN
        .to(
          overlayRef.current,
          {
            y: "0%",
            scale: 1,
            borderRadius: "0%",
            duration: 0.9,
            ease: "power3.out",
            pointerEvents: "auto",
          },
          "-=0.25"
        );
    } else {
      tl.current
        // CLOSE → MENU
        .to(closeText, {
          opacity: 0,
          x: "50%",
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          menuText,
          {
            opacity: 1,
            x: "0%",
            duration: 0.3,
            ease: "power2.out",
          },
          "<"
        )
        // OVERLAY CLOSE
        .to(
          overlayRef.current,
          {
            y: "100%",
            scale: 0.6,
            borderRadius: "50%",
            duration: 0.8,
            ease: "power3.inOut",
            pointerEvents: "none",
          },
          "-=0.25"
        );
    }

    tl.current.play();
  }, [isOpen]);

  /* ---------------- Overlay Inner Content Animation ---------------- */
  useGSAP(() => {
    if (!overlayRef.current) return;

    if (!contentTl.current) {
      contentTl.current = gsap.timeline({ paused: true });
    }

    contentTl.current.clear();

    contentTl.current
      .to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      .to(
        menuItemsRef.current,
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(
        socialItemsRef.current,
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to(
        footerRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );

    isOpen ? contentTl.current.play() : contentTl.current.reverse();
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-[999]">
      {/* NAVBAR */}
      <div className="flex items-center justify-between px-5 md:px-12 py-5">
        <Image
          src="/logo/primaryLogoWhite.svg"
          alt="Webli"
          width={120}
          height={48}
          className="object-contain z-[2000]"
        />

        {/* MENU BUTTON */}
        <div
          ref={btnRef}
          onClick={() => setIsOpen(!isOpen)}
          className="relative h-8 w-16 cursor-pointer z-[2000] text-sm uppercase tracking-widest text-white overflow-hidden"
        >
          <span className="absolute inset-0 flex items-center justify-center">
            Close
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            Menu
          </span>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[1500] bg-gradient-to-br from-stone-900 via-purple-600 to-yellow-300 translate-y-full"
      >
        <div className="relative h-full w-full px-6 md:px-16 py-16 text-white">
          <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-8">

            {/* LEFT */}
            <div className="md:col-span-7 flex flex-col">
              <div
                ref={descRef}
                className="max-w-md text-sm md:text-base leading-relaxed opacity-80 mb-12"
              >
                Webli Studio is a creative digital agency crafting immersive web
                experiences. We blend design, animation, and engineering to build
                brands that stand out in the digital world.
              </div>

              <div className="flex flex-col gap-6 md:gap-8 text-4xl md:text-4xl font-light tracking-tight">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Contact", href: "/contact" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    ref={addToMenuRefs}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-yellow-300 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="hidden md:col-span-5 md:flex flex-col justify-between items-end">
              <div className="flex flex-col gap-4 text-sm uppercase tracking-widest opacity-80">
                {[
                  { label: "Instagram", href: "https://instagram.com" },
                  { label: "Twitter", href: "https://twitter.com" },
                  { label: "LinkedIn", href: "https://linkedin.com" },
                  { label: "GitHub", href: "https://github.com" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    ref={addToSocialRefs}
                    target="_blank"
                    className="hover:opacity-100 hover:-translate-x-2 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div
                ref={footerRef}
                className="text-xs text-black/50"
              >
                © {new Date().getFullYear()} Webli Studio
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
