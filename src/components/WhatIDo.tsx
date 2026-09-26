'use client';

import React from 'react';
import Image from 'next/image';
import FadeUp from './FadeUp';

export interface WhatIDoCardItem {
  number: string;
  title: string;
  description: string;
  bgImage: string;
}

export const WHAT_I_DO_CARDS: WhatIDoCardItem[] = [
  {
    number: '#01',
    title: 'Branding & Logo Design',
    description:
      'Distinct visual identities, logos and brand assets designed for memorable brands.',
    bgImage: '/images/branding-bg.png',
  },
  {
    number: '#02',
    title: 'Social Media Graphics',
    description:
      'Scroll-stopping layouts, campaigns, promotional posts and content systems.',
    bgImage: '/images/social-bg.png',
  },
  {
    number: '#03',
    title: 'Video Editing',
    description:
      'Reels, ads, short-form videos, motion graphics and engaging visual storytelling.',
    bgImage: '/images/video-bg.png',
  },
  {
    number: '#04',
    title: 'Print & Marketing',
    description:
      'Posters, tarpaulins, uniforms, packaging, brochures and marketing materials.',
    bgImage: '/images/print-bg.png',
  },
];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="py-20 md:py-28 bg-[#09050b] relative overflow-hidden border-t border-b border-zinc-900/60"
    >
      {/* Background Plum Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#2d091e]/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <FadeUp delay={0.1}>
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="text-[#ff4d29] text-xs uppercase font-bold tracking-widest block mb-4">
              WHAT I DO
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              Creative services <br />
              built to stand out.
            </h2>
          </div>
        </FadeUp>

        {/* 4 Cards Row with Staggered Scroll Delays */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {WHAT_I_DO_CARDS.map((card, index) => (
            <FadeUp key={card.number} delay={0.15 * (index + 1)} className="h-full">
              <div className="relative h-full rounded-2xl md:rounded-3xl overflow-hidden border border-[#ff4d29]/25 hover:border-[#ff4d29]/60 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[#ff4d29]/15 group min-h-[300px] flex flex-col justify-between p-6 sm:p-7 md:p-8">
                {/* Background Image with high clarity */}
                <Image
                  src={card.bgImage}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center opacity-85 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                />

                {/* Subtle Plum Gradient Overlay for enhanced image clarity & text pop */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#180914]/45 via-[#140611]/55 to-[#0c030a]/75 group-hover:from-[#180914]/30 group-hover:via-[#140611]/45 group-hover:to-[#0c030a]/65 transition-colors duration-500" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Number Accent */}
                    <span className="text-[#ff4d29] font-bold text-lg sm:text-xl block mb-6 md:mb-8 group-hover:scale-105 transition-transform origin-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {card.number}
                    </span>

                    {/* Card Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3.5 group-hover:text-rose-200 transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-zinc-100 text-sm md:text-base leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
