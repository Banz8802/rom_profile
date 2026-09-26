'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import HireMe from '@/components/HireMe';
import Footer from '@/components/Footer';
import FadeUp from '@/components/FadeUp';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LOGO_ITEMS = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  src: `/images/logos/logo_sample_${i + 1}.png`,
  alt: `Logo ${i + 1}`,
}));

const MARKETING_ITEMS = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  src: `/images/marketing/marketing-${i + 1}.png`,
  alt: `Marketing Campaign Design ${i + 1}`,
}));

export default function BrandCampaignDesignPage() {
  const [logoPage, setLogoPage] = useState(1);

  // Logo Designs pagination setup (3 logos per page on mobile)
  const totalLogos = LOGO_ITEMS.length;
  const LOGOS_PER_PAGE = 3;
  const totalLogoPages = Math.ceil(totalLogos / LOGOS_PER_PAGE);

  // Current page items
  const currentLogos = LOGO_ITEMS.slice(
    (logoPage - 1) * LOGOS_PER_PAGE,
    logoPage * LOGOS_PER_PAGE
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#050508] text-[#f4f4f6] relative selection:bg-[#e61e7a] selection:text-white overflow-x-hidden w-full max-w-full">
      <Header />

      <main className="flex-grow pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden w-full max-w-full">
        {/* Background Ambient Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[350px] sm:h-[450px] bg-[#2d091e]/20 rounded-full blur-[140px] sm:blur-[180px]" />
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
                Brand & Campaign Design
              </h1>
            </div>
          </FadeUp>

          {/* Container 1: Logo Designs */}
          <FadeUp delay={0.2}>
            <div className="bg-[#140812]/80 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 mb-10 md:mb-12 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  Logo Designs
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  A collection of logos I've designed for past clients, each created to reflect their brand identity and vision.
                </p>
              </div>

              {/* Desktop View: 2 Clean Horizontal Rows of 11 Logos */}
              <div className="hidden sm:grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-3 sm:gap-4 items-center justify-items-center">
                {LOGO_ITEMS.map((logo) => (
                  <div
                    key={`logo-desktop-${logo.id}`}
                    className="w-full h-16 sm:h-20 md:h-22 rounded-xl bg-zinc-950/40 hover:bg-zinc-900/80 border border-white/5 hover:border-[#ff4d29]/40 transition-all duration-300 flex items-center justify-center p-2 group relative shadow-md hover:-translate-y-1"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes="120px"
                        className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile View: 3 Logos per Page + Mobile Pagination */}
              <div className="block sm:hidden">
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {currentLogos.map((logo) => (
                    <div
                      key={`logo-mobile-${logo.id}`}
                      className="aspect-square bg-zinc-950/70 rounded-xl border border-white/10 flex items-center justify-center p-2 group relative overflow-hidden shadow-lg"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          sizes="33vw"
                          className="object-contain p-1"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Logo Pagination Controls */}
                <div className="flex items-center justify-center gap-1.5 pt-2">
                  <button
                    onClick={() => setLogoPage((p) => Math.max(p - 1, 1))}
                    disabled={logoPage === 1}
                    className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-white/10 flex items-center justify-center text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Previous Logo Page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {Array.from({ length: totalLogoPages }).map((_, pIdx) => {
                    const pageNum = pIdx + 1;
                    const isActive = pageNum === logoPage;
                    return (
                      <button
                        key={`logo-mobile-page-${pageNum}`}
                        onClick={() => setLogoPage(pageNum)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                          isActive
                            ? 'bg-[#ff4d29] text-white shadow-md shadow-[#ff4d29]/30'
                            : 'bg-zinc-900/60 text-zinc-400 border border-white/10'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => setLogoPage((p) => Math.min(p + 1, totalLogoPages))}
                    disabled={logoPage === totalLogoPages}
                    className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-white/10 flex items-center justify-center text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Next Logo Page"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Container 2: Marketing Campaign Designs */}
          <FadeUp delay={0.3}>
            <div className="bg-[#140812]/80 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 mb-16 md:mb-24 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  Marketing Campaign Designs
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Here are some of the marketing campaign designs I've created for past clients.
                </p>
              </div>

              {/* Responsive Masonry Layout for Marketing Campaign Designs */}
              <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-6 gap-3.5 sm:gap-4 space-y-3.5 sm:space-y-4">
                {MARKETING_ITEMS.map((item) => (
                  <div
                    key={`marketing-${item.id}`}
                    className="break-inside-avoid rounded-xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-[#ff4d29]/50 transition-all duration-300 group shadow-lg hover:-translate-y-1 relative"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Bottom Hire Me Section */}
        <HireMe />
      </main>

      <Footer />
    </div>
  );
}
