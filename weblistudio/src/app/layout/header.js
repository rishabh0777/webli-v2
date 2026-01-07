"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowBigRight, Instagram, Github, Linkedin } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const btnRef = useRef(null);
  const overlayRef = useRef(null);
  const headerRef = useRef(null);
  const tl = useRef(null);

  // content refs
  const menuRefs = useRef([]);
  const socialRefs = useRef([]); 
  const footerRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const contentTl = useRef(null);

  const addMenuRef = (el) => {
    if (el && !menuRefs.current.includes(el)) {
      menuRefs.current.push(el);
    }
  };

  const addSocialRef = (el) => {
    if (el && !socialRefs.current.includes(el)) {
      socialRefs.current.push(el);
    }
  };

  /* ---------------- Initial State ---------------- */
  useGSAP(() => {
    gsap.set(overlayRef.current, {
      y: "100%",
      scale: 0.6,
      borderRadius: "50%",
      pointerEvents: "none",
    });

    gsap.set(headerRef.current, { opacity: 0, y: -20 });

    gsap.set(btnRef.current.children[0], { opacity: 0, x: "50%" });
    gsap.set(btnRef.current.children[1], { opacity: 1, x: "0%" });

    gsap.set([titleRef.current, paraRef.current], {
      autoAlpha: 0,
      y: 30,
    });

    gsap.set(menuRefs.current, { autoAlpha: 0, x: 40 });
    gsap.set(socialRefs.current, { autoAlpha: 0, y: 20 });
    gsap.set(footerRef.current, { autoAlpha: 0, y: 20 });
  }, []);

  /* ---------------- Header Animation ---------------- */
  useGSAP(() => {
    gsap.to(headerRef.current, {
      autoAlpha: 1,
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  /* ---------------- Overlay + Button ---------------- */
  useGSAP(() => {
    if (!tl.current) {
      tl.current = gsap.timeline({ paused: true });
    }

    const closeText = btnRef.current.children[0];
    const menuText = btnRef.current.children[1];

    tl.current.clear();

    if (isOpen) {
      tl.current
        .to(menuText, { opacity: 0, x: "50%", duration: 0.3 })
        .to(closeText, { opacity: 1, x: "0%", duration: 0.3 }, "<")
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
          "-=0.2"
        );
    } else {
      tl.current
        .to(closeText, { opacity: 0, x: "50%", duration: 0.3 })
        .to(menuText, { opacity: 1, x: "0%", duration: 0.3 }, "<")
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
          "-=0.2"
        );
    }

    tl.current.play();
  }, [isOpen]);

  /* ---------------- Content Animation (EVERY OPEN) ---------------- */
  useGSAP(() => {
    if (!contentTl.current) {
      contentTl.current = gsap.timeline({ paused: true });
    }

    if (isOpen) {
      gsap.set([titleRef.current, paraRef.current], {
        autoAlpha: 0,
        y: 30,
      });
      gsap.set(menuRefs.current, { autoAlpha: 0, x: 40 });
      gsap.set(socialRefs.current, { autoAlpha: 0, y: 20 });
      gsap.set(footerRef.current, { autoAlpha: 0, y: 20 });

      contentTl.current.clear();

      contentTl.current
        .to(titleRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          delay: 0.7,
          ease: "power3.out",
        })
        .to(
          paraRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          menuRefs.current,
          {
            autoAlpha: 1,
            x: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          socialRefs.current,
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.4,
          },
          "-=0.3"
        )
        .to(
          footerRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
          },
          "-=0.3"
        );

      contentTl.current.play(0);
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-[999]">
      {/* NAV */}
      <div ref={headerRef} className="flex justify-between px-5 md:px-12 py-5 opacity-0">
        <Image src="/logo/primaryLogoWhite.svg" alt="Webli" width={120} height={48} />

        <div
          ref={btnRef}
          onClick={() => setIsOpen(!isOpen)}
          className="relative h-8 w-16 cursor-pointer text-sm uppercase tracking-widest text-white z-[999]"
        >
          <span className="absolute inset-0 flex items-center justify-center opacity-0">
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
        className="fixed inset-0 bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white flex items-center justify-center overflow-y-auto will-change-transform menu-overlay-hidden"
      >

        <div className="h-full flex flex-col justify-center items-center px-6 md:px-16 gap-6 md:gap-5 md:gap-10 text-center md:text-left">
          <h1 ref={titleRef} className="font-[bangers] tracking-wide text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-white to-yellow-100 bg-clip-text text-transparent px-1">
            Webli Studio
          </h1>

          <p ref={paraRef} className="text-[0.8em] md:text-[0.9em] max-w-2xl text-white/80 px-4">
            Webli Studio is a digital creative studio focused on building modern, high-impact web experiences. We blend thoughtful design, smooth animations, and solid engineering to create websites that feel fast, intuitive, and visually powerful. Every project is crafted with precision to help brands stand out and scale confidently in the digital space.
          </p>

          {/* MENU (RESPONSIVE, ALWAYS VISIBLE) */}
          <div className="flex gap-6 text-[0.7em] md:text-2xl font-bold">
            {["Home", "Services", "Portfolio", "About", "Contact"].map(
              (item, i) => (
                <Link
                  key={i}
                  ref={addMenuRef}
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-yellow-300 duration-300"
                >
                  {item}

                </Link>
              )
            )}
          </div>

          {/* SOCIAL */}
          <div className="flex gap-6 text-md">
            <Instagram
              className="cursor-pointer hover:text-yellow-300 duration-300"
              onClick={() => {
                window.open('https://www.instagram.com/webli_studio/', '_blank')
              }} ref={addSocialRef} size={18} />
            <Linkedin
              className="cursor-pointer hover:text-yellow-300 duration-300"
              onClick={() => {
                window.open('https://www.linkedin.com/in/webli-studio-creative-web-development-agency-250a5336b/', '_blank')
              }} ref={addSocialRef} size={18} />
            <Github className="cursor-pointer hover:text-yellow-300 duration-300"
              onClick={() => {
                window.open('https://github.com/webli-studio', '_blank')
              }} ref={addSocialRef} size={18} />
          </div>

          {/* FOOTER */}
          <footer ref={footerRef} className="text-[0.8em] md:text-sm">
            © {new Date().getFullYear()} Webli Studio. All rights reserved.
          </footer>
        </div>
      </div>
    </header>
  );
};

export default Header;
