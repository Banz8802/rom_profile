'use client';

import React from 'react';
import { Mail } from 'lucide-react';

export default function HireMe() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#08040a] relative overflow-hidden border-b border-zinc-900/60"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[#e61e7a]/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-[#180914]/80 backdrop-blur-md border border-[#e61e7a]/35 rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-xl">
              <span className="text-[#ff4d29] text-xs uppercase font-bold tracking-widest block mb-3">
                LET'S WORK TOGETHER
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
                <span className="text-white">HIRE </span>
                <span className="text-[#e61e7a]">ME</span>
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Have a project in mind? Let’s turn your ideas into amazing visuals. Send me an email and let’s discuss how we can work together.
              </p>
            </div>

            {/* Vertical Divider (Desktop) */}
            <div className="hidden lg:block w-px h-28 bg-zinc-800/80 my-auto" />

            {/* Right Content: Email Box */}
            <div className="flex items-center gap-4 sm:gap-5 bg-zinc-950/40 p-4 sm:p-6 rounded-2xl border border-white/5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-zinc-950 border border-[#e61e7a]/30 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-[#e61e7a]" />
              </div>
              <div>
                <span className="text-zinc-400 text-[11px] sm:text-xs font-semibold tracking-widest uppercase block mb-1">
                  EMAIL ME AT
                </span>
                <a
                  href="mailto:rom.laberinto@gmail.com"
                  className="text-white font-bold text-base sm:text-xl hover:text-[#e61e7a] transition-colors"
                >
                  rom.laberinto@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
