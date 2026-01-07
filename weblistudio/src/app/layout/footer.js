"use client";
import Image from 'next/image';
import React from 'react'
import { InstagramIcon, LinkedinIcon, GithubIcon, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/80 bg-black backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-2xl flex items-center justify-center">
                <Image
                  className='glow'
                  src="/logo/logoIconTransparent.svg"
                  alt="Webli Studio Logo"
                  width={20}
                  height={20}
                
                />
              </div>
              <div>
                <span className='block bg-gradient-to-r from-yellow-200 via-white to-yellow-300 bg-clip-text text-transparent'>
                <p className="text-xs sm:text-sm font-semibold tracking-tight">Webli Studio</p>
                </span>
                <p className="text-xs text-white/80">Playful websites for people who love the internet.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/80">
              <div className="flex gap-3">
                <a href="https://www.instagram.com/webli_studio/" target="_blank" className="text-purple-500 glow"><InstagramIcon size={20} /></a>
                <a href="https://github.com/webli-studio" target="_blank" className="glow"><GithubIcon size={20} /></a>
                <a href="https://www.linkedin.com/in/webli-studio-creative-web-development-agency-250a5336b/" target="_blank" className="text-blue-500 glow"><LinkedinIcon size={20} /></a>
              </div>
              <span className="hidden sm:inline text-white/70">•</span>
              <span>© <span id="year">{
                new Date().getFullYear()
                } Webli Studio.</span> Made with gradients &amp; <Coffee size={16} className="inline-block mb-[2px] ml-1 text-yellow-200" /> </span>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer