'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import StatCard from './StatCard';
import { HERO_STATS } from '@/data/portfolioData';

export default function Hero() {
  const [bgSrc, setBgSrc] = useState('/images/hero-banner.png');

  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-[#050508]">
      {/* Hero Background Image with Fallback */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgSrc}
          alt="Rom Christian Laberinto Studio Atmosphere"
          fill
          priority
          quality={90}
          className="object-cover object-center md:object-right opacity-80"
          onError={() => {
            // Fallback to SVG placeholder if JPG doesn't exist yet
            if (bgSrc !== '/images/hero-bg.svg') {
              setBgSrc('/images/hero-bg.svg');
            }
          }}
        />

        {/* Ambient Dark Gradient Overlays for High Contrast Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-[#050508]/60" />
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#e61e7a]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#ff4d29]/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Introductory Accent Text */}
          <span className="text-[#ff4d29] font-semibold text-base sm:text-lg md:text-xl tracking-wide inline-block mb-2">
            Hey, I’m
          </span>

          {/* Large Headline Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white tracking-tight leading-[0.95] drop-shadow-md">
            Rom Christian
            <span className="block mt-1 uppercase text-white">LABERINTO</span>
          </h1>

          {/* Subheadline with Red Accent Text */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mt-5 sm:mt-6 text-white">
            Turning Ideas Into{' '}
            <span className="text-[#ff4d29] inline-block">Visual Stories.</span>
          </h2>

          {/* Body Description */}
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mt-3 sm:mt-4 max-w-xl">
            I create designs and videos that help brands communicate, connect, and grow.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10">
            <Link
              href="#work"
              className="gradient-cta inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold text-base shadow-xl shadow-pink-500/20 group"
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-white font-semibold text-base bg-zinc-900/60 backdrop-blur-md border border-white/20 hover:border-white/50 hover:bg-zinc-800/80 transition-all"
            >
              Get In Touch
            </Link>
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mt-10 md:mt-14">
            {HERO_STATS.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
