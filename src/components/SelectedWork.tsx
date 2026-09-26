'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import FadeUp from './FadeUp';

export default function SelectedWork() {
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
        <FadeUp delay={0.1}>
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="text-[#ff4d29] text-xs uppercase font-bold tracking-widest block mb-4">
              SELECTED WORK
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              A few things I’ve created.
            </h2>
          </div>
        </FadeUp>

        {/* Bento Grid Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Tall Card (Brand & Campaign Design) */}
          <div className="lg:col-span-6 flex">
            <FadeUp delay={0.15} className="w-full flex">
              <Link href="/brand-campaign-design" className="w-full flex">
                <div className="w-full bg-[#180914]/80 backdrop-blur-md border border-[#ff4d29]/25 hover:border-[#ff4d29]/60 rounded-2xl md:rounded-3xl overflow-hidden relative group flex flex-col justify-end min-h-[420px] sm:min-h-[500px] lg:min-h-[600px] transition-all duration-500 hover:-translate-y-1.5 shadow-2xl hover:shadow-[#ff4d29]/15 cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 bg-zinc-950">
                    <Image
                      src="/images/branding-camp.png"
                      alt="Brand & Campaign Design"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d030c] via-[#0d030c]/40 to-transparent" />
                  </div>

                  {/* Top Hover Icon */}
                  <div className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  {/* Card Content (Bottom) */}
                  <div className="relative z-10 p-6 sm:p-8 md:p-10">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2.5 group-hover:text-rose-200 transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      Brand & Campaign Design
                    </h3>
                    <p className="text-zinc-200 text-xs sm:text-sm font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      Identity systems • Social media • Marketing campaigns
                    </p>
                  </div>
                </div>
              </Link>
            </FadeUp>
          </div>

          {/* Right Column: 2 Stacked Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Top Right Card (Video & Motion) */}
            <FadeUp delay={0.3} className="flex-1 flex">
              <div className="w-full flex-1 bg-[#180914]/80 backdrop-blur-md border border-[#ff4d29]/25 hover:border-[#ff4d29]/60 rounded-2xl md:rounded-3xl overflow-hidden relative group flex flex-col justify-end min-h-[220px] sm:min-h-[260px] lg:min-h-[285px] transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[#ff4d29]/15">
                <div className="absolute inset-0 z-0 bg-zinc-950">
                  <Image
                    src="/images/video-motion.png"
                    alt="Video & Motion"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d030c] via-[#0d030c]/40 to-transparent" />
                </div>

                <div className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <div className="relative z-10 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-rose-200 transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    Video & Motion
                  </h3>
                  <p className="text-zinc-200 text-xs sm:text-sm font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    Reels • Ads • Short form content
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Bottom Right Card (UI Designs & Digital Artworks) */}
            <FadeUp delay={0.45} className="flex-1 flex">
              <div className="w-full flex-1 bg-[#180914]/80 backdrop-blur-md border border-[#ff4d29]/25 hover:border-[#ff4d29]/60 rounded-2xl md:rounded-3xl overflow-hidden relative group flex flex-col justify-end min-h-[220px] sm:min-h-[260px] lg:min-h-[285px] transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[#ff4d29]/15">
                <div className="absolute inset-0 z-0 bg-zinc-950">
                  <Image
                    src="/images/ui-designs.png"
                    alt="UI Designs & Digital Artworks"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d030c] via-[#0d030c]/40 to-transparent" />
                </div>

                <div className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <div className="relative z-10 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-rose-200 transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    UI Designs & Digital Artworks
                  </h3>
                  <p className="text-zinc-200 text-xs sm:text-sm font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    Interfaces • Game graphics • Visual systems
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
