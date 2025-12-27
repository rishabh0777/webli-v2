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
  const tl = useRef(null);

  // Content refs
  const leftRef = useRef(null);
  const menuRefs = useRef([]);
  const socialRefs = useRef([]);
  const footerRef = useRef(null);
  const contentTl = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);


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
    if (!overlayRef.current || !btnRef.current) return;

    gsap.set(overlayRef.current, {
      y: "100%",
      scale: 0.6,
      borderRadius: "50%",
      pointerEvents: "none",
    });

    gsap.set(btnRef.current.children[0], { opacity: 0, x: "50%" });
    gsap.set(btnRef.current.children[1], { opacity: 1, x: "0%" });

    // initial hidden states
    gsap.set(leftRef.current, { opacity: 0, y: 40 });
    gsap.set(menuRefs.current, { opacity: 0, x: 40 });
    gsap.set(socialRefs.current, { opacity: 0, y: 20 });
    gsap.set(footerRef.current, { opacity: 0, y: 20 });

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
            color: "#000",
          },
          "<"
        )
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

  /* ---------------- Overlay Content Animation (RESTART EVERY OPEN) ---------------- */
  useGSAP(() => {
  if (!contentTl.current) {
    contentTl.current = gsap.timeline({ paused: true });
  }

  if (isOpen) {
    // 🔁 RESET EVERY OPEN
    gsap.set([titleRef.current, paraRef.current], {
      autoAlpha: 0,
      y: 30,
    });
    gsap.set(menuRefs.current, { autoAlpha: 0, x: 40 });
    gsap.set(socialRefs.current, { autoAlpha: 0, y: 20 });
    gsap.set(footerRef.current, { autoAlpha: 0, y: 20 });

    contentTl.current.clear();

    contentTl.current
      // LEFT TEXT (THIS WAS MISSING PROPERLY)
      .to(titleRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        delay: 0.8,
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

      // MENU
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

      // SOCIAL
      .to(
        socialRefs.current,
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      )

      // FOOTER
      .to(
        footerRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );

    contentTl.current.play(0);
  }
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
        />

        <div
          ref={btnRef}
          onClick={() => setIsOpen(!isOpen)}
          className="relative h-8 w-16 cursor-pointer z-[2000] text-sm uppercase tracking-widest text-white overflow-hidden"
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
        className="fixed inset-0 z-[1500] bg-gradient-to-br from-white via-yellow-300 via-yellow-100 to-white translate-y-full"
      >
        <div className="absolute inset-0 flex items-center justify-center px-5 md:px-12 py-5">
          <div className="relative h-[80vh] w-[95%]">
            {/* LEFT */}
            <div
              ref={leftRef}
              className="absolute top-0 left-0 h-full w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10 gap-8 text-center md:text-left"
            >
              <h1 ref={titleRef} className="text-5xl font-bold text-zinc-800">
                Webli Studio
              </h1>
              <p ref={paraRef} className="text-zinc-600 max-w-md">
                Webli Studio is a digital creative studio focused on building
                modern, high-impact web experiences. We blend thoughtful design,
                smooth animations, and solid engineering to create websites that
                feel fast, intuitive, and visually powerful.
              </p>
            </div>

            {/* RIGHT */}
            <div className="absolute top-0 right-0 h-full w-1/2 hidden md:block">
              <div className="h-full flex flex-col justify-center items-center gap-8 font-bold text-zinc-800">
                {["Home", "Services", "Portfolio", "About Us", "Contact"].map(
                  (item, i) => (
                    <Link
                      key={i}
                      ref={addMenuRef}
                      href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                      onClick={() => setIsOpen(false)}
                      className="group text-3xl"
                    >
                      {item}
                      <ArrowBigRight
                        size={20}
                        className="inline-block ml-2 group-hover:-rotate-45"
                      />
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* SOCIAL */}
            <div className="absolute bottom-5 left-10 flex gap-6">
              <Instagram ref={addSocialRef} size={24} className="text-zinc-800 hover:text-yellow-500 transition" />
              <Linkedin ref={addSocialRef} size={24} className="text-zinc-800 hover:text-yellow-500 transition" />
              <Github ref={addSocialRef} size={24} className="text-zinc-800 hover:text-yellow-500 transition" />
            </div>
          </div>

          {/* FOOTER */}
          <footer
            ref={footerRef}
            className="absolute bottom-5 left-0 w-full text-center text-sm text-gray-700"
          >
            © {new Date().getFullYear()} Webli Studio. All rights reserved.
          </footer>
        </div>
      </div>
    </header>
  );
};

export default Header;
