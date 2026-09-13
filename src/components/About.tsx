'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Award, Camera, Film, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const [portraitSrc, setPortraitSrc] = useState('/images/about-portrait.jpg');

  const highlights = [
    'Over 9+ years of professional video production & design experience',
    'Directed 120+ commercial, broadcast & brand campaigns',
    'Specialized in dark cinematic aesthetics & kinetic typography',
    'End-to-end creative direction: concept to final master delivery',
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#08080c] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#e61e7a]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Portrait Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/40 group shadow-2xl">
              <div className="aspect-[4/5] relative w-full">
                <Image
                  src={portraitSrc}
                  alt="Rom Christian Laberinto Creative Studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={() => {
                    if (portraitSrc !== '/images/about-portrait.svg') {
                      setPortraitSrc('/images/about-portrait.svg');
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e61e7a] to-[#9333ea] flex items-center justify-center text-white">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Creative Director</h4>
                    <p className="text-xs text-zinc-400">Based in Manila & Available Worldwide</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#ff4d29]/20 text-[#ff4d29] text-xs font-semibold border border-[#ff4d29]/30">
                  Pro
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff4d29]/10 border border-[#ff4d29]/20 text-[#ff4d29] text-xs font-bold tracking-wider uppercase mb-6">
              01 / ABOUT ME
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Crafting visual narratives that help brands{' '}
              <span className="text-[#ff4d29]">stand out & connect.</span>
            </h2>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mt-6">
              Hi, I’m <strong className="text-white font-semibold">Rom Christian LABERINTO</strong>. As a multidisciplinary visual designer and video creator, I bridge the gap between creative vision and strategic audience engagement.
            </p>

            <p className="text-zinc-400 text-base leading-relaxed mt-4">
              My approach combines cinematic lighting, high-contrast typography, and purposeful motion design to build brand identities and commercials that command attention. Whether producing a high-energy brand film or designing a comprehensive visual design system, I focus on emotion, clarity, and precision.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 pt-6 border-t border-zinc-800/80">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ff4d29] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Skills Pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                'Video Production',
                'Motion Design',
                'Brand Identity',
                'Color Grading',
                'Kinetic Typography',
                'Creative Direction',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-zinc-900 text-zinc-300 text-xs font-medium border border-zinc-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
