"use client";
import Image from 'next/image';
import React from 'react'
import { InstagramIcon, LinkedinIcon, GithubIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer class="border-t border-white/80 bg-black backdrop-blur-sm">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="h-7 w-7 rounded-2xl flex items-center justify-center">
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
                <p class="text-xs sm:text-sm font-semibold tracking-tight">Webli Studio</p>
                </span>
                <p class="text-xs text-white/80">Playful websites for people who love the internet.</p>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/80">
              <div class="flex gap-3">
                <a href="#" class="text-purple-500 glow"><InstagramIcon size={16} /></a>
                <a href="#" class="glow"><GithubIcon size={16} /></a>
                <a href="#" class="text-blue-500 glow"><LinkedinIcon size={16} /></a>
              </div>
              <span class="hidden sm:inline text-white/70">•</span>
              <span>© <span id="year"></span> Webli Studio. Made with gradients &amp; coffee.</span>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer