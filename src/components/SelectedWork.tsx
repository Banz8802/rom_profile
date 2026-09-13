'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function SelectedWork() {
  const [img1, setImg1] = useState('/images/portfolio/project-1.jpg');
  const [img2, setImg2] = useState('/images/portfolio/project-3.jpg');
  const [img3, setImg3] = useState('/images/portfolio/project-4.jpg');

  return (
    <section
      id="work"
      className="py-20 md:py-32 bg-[#08040a] relative overflow-hidden border-b border-zinc-900/60"
    >
      {/* Background Plum Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#2d091e]/25 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#e61e7a]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-[#ff4d29] text-xs uppercase font-bold tracking-widest block mb-4">
            SELECTED WORK
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            A few things I’ve created.
          </h2>
        </div>

        {/* Bento Grid Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Tall Card (Brand & Campaign Design) */}
          <div className="lg:col-span-6 flex">
            <div className="w-full bg-[#180914]/80 backdrop-blur-md border border-[#ff4d29]/20 hover:border-[#ff4d29]/50 rounded-2xl md:rounded-3xl overflow-hidden relative group flex flex-col justify-end min-h-[420px] sm:min-h-[500px] lg:min-h-[600px] transition-all duration-500 hover:-translate-y-1.5 shadow-2xl hover:shadow-[#ff4d29]/15">
              {/* Image / Dark Background Atmosphere */}
              <div className="absolute inset-0 z-0 bg-zinc-950">
                <Image
                  src={img1}
                  alt="Brand & Campaign Design"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                  onError={() => setImg1('/images/portfolio/project-1.svg')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12050f] via-[#180914]/80 to-transparent" />
              </div>

              {/* Top Hover Icon */}
              <div className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              {/* Card Content (Bottom) */}
              <div className="relative z-10 p-6 sm:p-8 md:p-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2.5 group-hover:text-rose-300 transition-colors">
                  Brand & Campaign Design
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm font-medium tracking-wide">
                  Identity systems • Social media • Marketing campaigns
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Stacked Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Top Right Card (Video & Motion) */}
            <div className="flex-1 bg-[#180914]/80 backdrop-blur-md border border-[#ff4d29]/20 hover:border-[#ff4d29]/50 rounded-2xl md:rounded-3xl overflow-hidden relative group flex flex-col justify-end min-h-[220px] sm:min-h-[260px] lg:min-h-[285px] transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[#ff4d29]/15">
              <div className="absolute inset-0 z-0 bg-zinc-950">
                <Image
                  src={img2}
                  alt="Video & Motion"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                  onError={() => setImg2('/images/portfolio/project-3.svg')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12050f] via-[#180914]/80 to-transparent" />
              </div>

              <div className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              <div className="relative z-10 p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-rose-300 transition-colors">
                  Video & Motion
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm font-medium tracking-wide">
                  Reels • Ads • Short form content
                </p>
              </div>
            </div>

            {/* Bottom Right Card (Digital & UI) */}
            <div className="flex-1 bg-[#180914]/80 backdrop-blur-md border border-[#ff4d29]/20 hover:border-[#ff4d29]/50 rounded-2xl md:rounded-3xl overflow-hidden relative group flex flex-col justify-end min-h-[220px] sm:min-h-[260px] lg:min-h-[285px] transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[#ff4d29]/15">
              <div className="absolute inset-0 z-0 bg-zinc-950">
                <Image
                  src={img3}
                  alt="Digital & UI"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                  onError={() => setImg3('/images/portfolio/project-4.svg')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12050f] via-[#180914]/80 to-transparent" />
              </div>

              <div className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              <div className="relative z-10 p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-rose-300 transition-colors">
                  Digital & UI
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm font-medium tracking-wide">
                  Interfaces • Game graphics • Visual systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
