'use client';

import React from 'react';

export interface WhatIDoCardItem {
  number: string;
  title: string;
  description: string;
}

export const WHAT_I_DO_CARDS: WhatIDoCardItem[] = [
  {
    number: '#01',
    title: 'Branding & Logo Design',
    description:
      'Distinct visual identities, logos and brand assets designed for memorable brands.',
  },
  {
    number: '#02',
    title: 'Social Media Graphics',
    description:
      'Scroll-stopping layouts, campaigns, promotional posts and content systems.',
  },
  {
    number: '#03',
    title: 'Video Editing',
    description:
      'Reels, ads, short-form videos, motion graphics and engaging visual storytelling.',
  },
  {
    number: '#04',
    title: 'Print & Marketing',
    description:
      'Posters, tarpaulins, uniforms, packaging, brochures and marketing materials.',
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
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-[#ff4d29] text-xs uppercase font-bold tracking-widest block mb-4">
            WHAT I DO
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Creative services <br />
            built to stand out.
          </h2>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {WHAT_I_DO_CARDS.map((card) => (
            <div
              key={card.number}
              className="bg-[#180914]/80 backdrop-blur-md border border-[#ff4d29]/20 hover:border-[#ff4d29]/50 rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[#ff4d29]/10 group"
            >
              <div>
                {/* Number Accent */}
                <span className="text-[#ff4d29] font-bold text-lg sm:text-xl block mb-6 md:mb-8 group-hover:scale-105 transition-transform origin-left">
                  {card.number}
                </span>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3.5 group-hover:text-rose-300 transition-colors">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
