'use client';

import React from 'react';

export default function About() {
  const toolsAndSkills = [
    'Photoshop',
    'After Effects',
    'Figma',
    'Corel Draw',
    'Illustrator',
    'Video Editing',
    'Branding',
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-[#08040a] relative overflow-hidden border-b border-zinc-900/60"
    >
      {/* Background Plum Glow Accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#e61e7a]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#2d091e]/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-[#ff4d29] text-xs uppercase font-bold tracking-widest block mb-4">
            ABOUT ME
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            A designer who <br />
            loves visual stories.
          </h2>
        </div>

        {/* 2 Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Left Card: Bio & Tools */}
          <div className="bg-[#180914]/80 backdrop-blur-md border border-[#ff4d29]/20 hover:border-[#ff4d29]/40 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
              <p>
                I’m Rom Christian Laberinto, a graphic artist, video editor and creative designer. I enjoy turning simple ideas into work that feels clear, modern and memorable.
              </p>
              <p>
                My work covers branding, social media graphics, video content, print materials and digital design.
              </p>
            </div>

            {/* Skill / Tool Pills */}
            <div className="flex flex-wrap gap-2.5 mt-8 pt-6 border-t border-zinc-800/80">
              {toolsAndSkills.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-zinc-950/80 text-zinc-200 text-xs sm:text-sm font-medium border border-zinc-800 hover:border-[#ff4d29]/50 hover:text-white transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Right Card: Philosophy & Quote */}
          <div className="bg-[#180914]/80 backdrop-blur-md border border-[#ff4d29]/20 hover:border-[#ff4d29]/40 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <div className="space-y-6">
              {/* Large Quote */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-[1.2]">
                “Good design doesn’t just{' '}
                <span className="text-[#ff4d29] block sm:inline">look good.</span>{' '}
                It communicates.”
              </h3>

              {/* Goal Paragraph */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                My goal is simple: create work that looks professional, tells the story clearly and helps the client achieve the purpose behind the design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
