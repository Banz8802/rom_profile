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

const MARKETING_ROW_1 = [
  { id: 'm1', src: '/images/marketing/marketing-1.png', alt: 'Famanna More Than a Stay', flex: 'flex-[188]' },
  { id: 'm2', src: '/images/marketing/marketing-2.png', alt: 'Famanna Relax & Make Memories', flex: 'flex-[188]' },
  { id: 'm3', src: '/images/marketing/marketing-3.png', alt: 'Matcha Latte Cakes Cakes', flex: 'flex-[205]' },
  { id: 'm4', src: '/images/marketing/marketing-4.png', alt: 'Funtask Chiks Fried Chicken', flex: 'flex-[219]' },
  { id: 'm5', src: '/images/marketing/marketing-5.png', alt: 'Mobile KTV Rooms Duo', flex: 'flex-[219]' },
];

const MARKETING_ROW_2 = [
  { id: 'm7', src: '/images/marketing/marketing-7.png', alt: 'Famanna Wedding I Do', flex: 'flex-[219]' },
  { id: 'm8', src: '/images/marketing/marketing-8.png', alt: 'Toastey Cakes Cakes', flex: 'flex-[133]' },
  { id: 'm9', src: '/images/marketing/marketing-9.png', alt: 'Caramel Macchiato Cakes Cakes', flex: 'flex-[205]' },
  { id: 'm10', src: '/images/marketing/marketing-10.png', alt: 'Funtask Chiks Chick It Out Coupon Promo', flex: 'flex-[145]' },
  { id: 'm11', src: '/images/marketing/marketing-11.png', alt: 'Ninos Lechon Bellychon', flex: 'flex-[143]' },
  { id: 'm12', src: '/images/marketing/marketing-12.png', alt: 'Mobile KTV Rooms Tara Sing Tayo', flex: 'flex-[132]' },
];

const MARKETING_TALL_BANNER = {
  id: 'm6',
  src: '/images/marketing/marketing-6.png',
  alt: 'Mobile KTV Luxury Rooms Banner',
};

const MARKETING_ROW_3 = [
  { id: 'm13', src: '/images/marketing/marketing-13.png', alt: 'Famanna Relax by the Water', flex: 'flex-[188]' },
  { id: 'm15', src: '/images/marketing/marketing-15.png', alt: 'Tubig ni Ariba Clean Water', flex: 'flex-[219]' },
  { id: 'm19', src: '/images/marketing/marketing-19.png', alt: 'Auroras Special Chili-Rap Rectangle Banner', flex: 'flex-[490]' },
  { id: 'm20', src: '/images/marketing/marketing-20.png', alt: 'Chili-Rap Now Available Poster', flex: 'flex-[133]' },
  { id: 'm21', src: '/images/marketing/marketing-21.png', alt: 'Chili-Rap Coming Soon Poster', flex: 'flex-[133]' },
];

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

              {/* Desktop / Tablet Row-Based Layout */}
              <div className="hidden md:flex flex-col gap-3 lg:gap-3.5">
                {/* Top Section: Left (Row 1 + Row 2) + Right (Tall Banner) */}
                <div className="flex flex-row gap-3 lg:gap-3.5 items-stretch">
                  {/* Left Block: Row 1 and Row 2 */}
                  <div className="flex-1 flex flex-col gap-3 lg:gap-3.5">
                    {/* Row 1: 5 images */}
                    <div className="flex flex-row gap-3 lg:gap-3.5 items-stretch">
                      {MARKETING_ROW_1.map((item) => (
                        <div
                          key={item.id}
                          className={`${item.flex} rounded-xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-[#ff4d29]/50 transition-all duration-300 group shadow-lg hover:-translate-y-1 relative flex items-center justify-center`}
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            width={350}
                            height={350}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Row 2: 6 images */}
                    <div className="flex flex-row gap-3 lg:gap-3.5 items-stretch">
                      {MARKETING_ROW_2.map((item) => (
                        <div
                          key={item.id}
                          className={`${item.flex} rounded-xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-[#ff4d29]/50 transition-all duration-300 group shadow-lg hover:-translate-y-1 relative flex items-center justify-center`}
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            width={350}
                            height={350}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Block: Tall Banner spanning Row 1 & 2 */}
                  <div className="w-[13.3%] lg:w-[13.4%] shrink-0 flex">
                    <div className="w-full rounded-xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-[#ff4d29]/50 transition-all duration-300 group shadow-lg hover:-translate-y-1 relative flex items-center justify-center">
                      <Image
                        src={MARKETING_TALL_BANNER.src}
                        alt={MARKETING_TALL_BANNER.alt}
                        width={350}
                        height={700}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Row 3 featuring the wide rectangular image in the center */}
                <div className="w-full flex flex-row gap-3 lg:gap-3.5 items-stretch">
                  {MARKETING_ROW_3.map((item) => (
                    <div
                      key={item.id}
                      className={`${item.flex} rounded-xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-[#ff4d29]/50 transition-all duration-300 group shadow-lg hover:-translate-y-1 relative flex items-center justify-center`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item.id === 'm19' ? 700 : 350}
                        height={350}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile View: Clean Responsive Grid Layout */}
              <div className="grid md:hidden grid-cols-2 sm:grid-cols-3 gap-3">
                {/* Row 1 Items */}
                {MARKETING_ROW_1.map((item) => (
                  <div
                    key={`mob-${item.id}`}
                    className="rounded-xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-[#ff4d29]/50 transition-all duration-300 group shadow-lg relative aspect-square"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}

                {/* Tall Banner on Mobile */}
                <div className="col-span-2 sm:col-span-1 rounded-xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-[#ff4d29]/50 transition-all duration-300 group shadow-lg relative aspect-[3/4] sm:aspect-auto">
                  <Image
                    src={MARKETING_TALL_BANNER.src}
                    alt={MARKETING_TALL_BANNER.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Row 2 Items */}
                {MARKETING_ROW_2.map((item) => (
                  <div
                    key={`mob-${item.id}`}
                    className="rounded-xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-[#ff4d29]/50 transition-all duration-300 group shadow-lg relative aspect-square"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}

                {/* Bottom Row: Famanna & Tubig ni Ariba */}
                <div className="rounded-xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-[#ff4d29]/50 transition-all duration-300 group shadow-lg relative aspect-square">
                  <Image
                    src={MARKETING_ROW_3[0].src}
                    alt={MARKETING_ROW_3[0].alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-[#ff4d29]/50 transition-all duration-300 group shadow-lg relative aspect-square">
                  <Image
                    src={MARKETING_ROW_3[1].src}
                    alt={MARKETING_ROW_3[1].alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Wide Rectangular Banner (spans full width on mobile) */}
                <div className="col-span-2 sm:col-span-3 rounded-xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-[#ff4d29]/50 transition-all duration-300 group shadow-lg relative aspect-[490/188]">
                  <Image
                    src={MARKETING_ROW_3[2].src}
                    alt={MARKETING_ROW_3[2].alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                {/* Chili-Rap Posters */}
                <div className="rounded-xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-[#ff4d29]/50 transition-all duration-300 group shadow-lg relative aspect-[3/4]">
                  <Image
                    src={MARKETING_ROW_3[3].src}
                    alt={MARKETING_ROW_3[3].alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-[#ff4d29]/50 transition-all duration-300 group shadow-lg relative aspect-[3/4]">
                  <Image
                    src={MARKETING_ROW_3[4].src}
                    alt={MARKETING_ROW_3[4].alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
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
