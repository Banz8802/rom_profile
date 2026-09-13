'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/portfolioData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050508]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3'
          : 'bg-[#050508]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[64px] md:h-[72px] flex items-center justify-between">
        {/* Left: Minimal Geometric Logo */}
        <Link
          href="#"
          className="flex items-center gap-3 group transition-transform duration-200 hover:scale-105"
          aria-label="Rom Christian Laberinto - Home"
        >
          <div className="w-10 h-10 md:w-11 md:h-11 relative flex items-center justify-center">
            <Image
              src="/images/rom-logo.png"
              alt="Rom Christian LABERINTO Logo"
              width={44}
              height={44}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-zinc-400 hover:text-white text-sm lg:text-base font-medium tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#e61e7a] after:to-[#9333ea] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="gradient-cta inline-flex items-center gap-2.5 px-6 lg:px-7 py-3 lg:py-3.5 rounded-full text-white font-semibold text-sm lg:text-base tracking-wide shadow-lg shadow-pink-500/10 group"
          >
            <span>Let’s Work Together</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile: Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl text-zinc-300 hover:text-white bg-zinc-900/80 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`md:hidden fixed inset-x-0 top-[80px] bg-[#07070c]/98 border-b border-zinc-800/80 backdrop-blur-xl px-6 py-8 transition-all duration-300 ease-in-out flex flex-col gap-6 shadow-2xl ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 hover:text-white text-lg font-medium py-2 border-b border-zinc-900/60"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="gradient-cta flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-white font-semibold text-base tracking-wide shadow-lg shadow-pink-500/20 mt-2"
        >
          <span>Let’s Work Together</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </header>
  );
}
