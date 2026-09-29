'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import HireMe from '@/components/HireMe';
import Footer from '@/components/Footer';
import FadeUp from '@/components/FadeUp';
import { ArrowUpRight } from 'lucide-react';

const VIDEO_CARDS = [
  {
    id: 'commercial-reels',
    title: 'Video Commercial Reels',
    link: 'https://drive.google.com/drive/folders/1p_9zF1CYRur-7dG1gqnJZISviz7naScx',
    bgImage: '/images/video/video-commercial-reels-bg.png',
  },
  {
    id: 'animation',
    title: 'Video Animation',
    link: 'https://drive.google.com/drive/folders/1yld-vqXA9blu42wis9yF5zqXSGiQX6Cy',
    bgImage: '/images/video/video-animation-bg.png',
  },
];

export default function VideoMotionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050508] text-[#f4f4f6] relative selection:bg-[#e61e7a] selection:text-white overflow-x-hidden w-full max-w-full">
      <Header />

      <main className="flex-grow pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden w-full max-w-full">
        {/* Background Ambient Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[350px] sm:h-[450px] bg-[#2d091e]/25 rounded-full blur-[140px] sm:blur-[180px]" />
          <div className="absolute top-2/3 right-0 sm:right-10 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#ff4d29]/10 rounded-full blur-[120px] sm:blur-[160px]" />
        </div>

        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          {/* Header Section */}
          <FadeUp delay={0.1}>
            <div className="mb-8 sm:mb-10 md:mb-14">
              <span className="text-[#ff4d29] text-xs uppercase font-bold tracking-widest block mb-3">
                SELECTED WORK
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight break-words">
                Video & Motion
              </h1>
            </div>
          </FadeUp>

          {/* 2-Column Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 md:mb-24">
            {VIDEO_CARDS.map((card, index) => (
              <FadeUp key={card.id} delay={0.2 + index * 0.1} className="h-full flex">
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex"
                >
                  <div className="w-full bg-[#180914]/80 backdrop-blur-md border border-[#ff4d29]/25 hover:border-[#ff4d29]/60 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#ff4d29]/15 transition-all duration-500 hover:-translate-y-1.5 group flex flex-col justify-end min-h-[340px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[480px] relative p-6 sm:p-8 md:p-10 cursor-pointer">
                    {/* Background Image & Enhanced Overlays */}
                    <div className="absolute inset-0 z-0 bg-zinc-950">
                      <Image
                        src={card.bgImage}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        priority
                      />
                      {/* Base plum ambient tone */}
                      <div className="absolute inset-0 bg-[#180914]/30 mix-blend-multiply" />
                      {/* Smooth dark plum gradient overlay for enhanced depth & text pop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c030a]/95 via-[#0c030a]/60 to-[#0c030a]/20 group-hover:from-[#0c030a]/90 group-hover:via-[#0c030a]/45 transition-colors duration-500" />
                    </div>

                    {/* Top Right Hover Action Icon */}
                    <div className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>

                    {/* Content (Bottom) */}
                    <div className="relative z-10 flex flex-col justify-end">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight group-hover:text-rose-100 transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        {card.title}
                      </h2>
                    </div>
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Bottom Hire Me Section */}
        <HireMe />
      </main>

      <Footer />
    </div>
  );
}
