'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import HireMe from '@/components/HireMe';
import Footer from '@/components/Footer';
import FadeUp from '@/components/FadeUp';
import { ArrowUpRight, Play, Film } from 'lucide-react';

const CLAW_GRID_ITEMS = [
  { id: 1, src: '/images/clawbaby/claw-grid-1.png', alt: 'Clawbaby Screen 1' },
  { id: 2, src: '/images/clawbaby/claw-grid-2.png', alt: 'Clawbaby Screen 2' },
  { id: 3, src: '/images/clawbaby/claw-grid-3.png', alt: 'Clawbaby Screen 3' },
  { id: 4, src: '/images/clawbaby/claw-grid-4.png', alt: 'Clawbaby Screen 4' },
  { id: 5, src: '/images/clawbaby/claw-grid-5.png', alt: 'Clawbaby Screen 5' },
  { id: 6, src: '/images/clawbaby/claw-grid-6.png', alt: 'Clawbaby Screen 6' },
  { id: 7, src: '/images/clawbaby/claw-grid-7.png', alt: 'Clawbaby Screen 7' },
  { id: 8, src: '/images/clawbaby/claw-grid-8.png', alt: 'Clawbaby Screen 8' },
  { id: 9, src: '/images/clawbaby/claw-grid-9.png', alt: 'Clawbaby Screen 9' },
  { id: 10, src: '/images/clawbaby/vgrid-10.png', alt: 'Clawbaby Screen 10' },
  { id: 11, src: '/images/clawbaby/claw-grid-11.png', alt: 'Clawbaby Screen 11' },
  { id: 12, src: '/images/clawbaby/claw-grid-12.png', alt: 'Clawbaby Screen 12' },
  { id: 13, src: '/images/clawbaby/claw-grid-13.png', alt: 'Clawbaby Screen 13' },
  { id: 14, src: '/images/clawbaby/claw-grid-14.png', alt: 'Clawbaby Screen 14' },
];

const DIGITAL_ROW_1 = [
  { id: 'd1', src: '/images/digital/digi-img-1a.png', alt: 'Digital Artwork 1', flex: 'flex-[1.41]' },
  { id: 'd2', src: '/images/digital/digi-img-2a.png', alt: 'Digital Artwork 2', flex: 'flex-[0.7]' },
  { id: 'd3', src: '/images/digital/digi-img-3a.png', alt: 'Digital Artwork 3', flex: 'flex-[0.7]' },
  { id: 'd4', src: '/images/digital/digi-img-4a.png', alt: 'Digital Artwork 4', flex: 'flex-[0.71]' },
  { id: 'd5', src: '/images/digital/digi-img-5a.png', alt: 'Digital Artwork 5', flex: 'flex-[0.9]' },
];

const DIGITAL_ROW_2 = [
  { id: 'd6', src: '/images/digital/digi-img-6.png', alt: 'Digital Artwork 6', flex: 'flex-[0.71]' },
  { id: 'd7', src: '/images/digital/digi-img-7.png', alt: 'Digital Artwork 7', flex: 'flex-[0.71]' },
  { id: 'd8', src: '/images/digital/digi-img-8.png', alt: 'Digital Artwork 8', flex: 'flex-[0.71]' },
  { id: 'd9', src: '/images/digital/digi-img-9.png', alt: 'Digital Artwork 9', flex: 'flex-[1.41]' },
  { id: 'd10', src: '/images/digital/digi-img-10.png', alt: 'Digital Artwork 10', flex: 'flex-[1.07]' },
];

const SPRITE_SHEETS = [
  { id: 's1', src: '/images/digital/digi2-img-4.png', alt: 'Animation Sprite 1' },
  { id: 's2', src: '/images/digital/digi2-img-5.png', alt: 'Animation Sprite 2' },
  { id: 's3', src: '/images/digital/digi2-img-6.png', alt: 'Animation Sprite 3' },
  { id: 's4', src: '/images/digital/digi2-img-7.png', alt: 'Animation Sprite 4' },
  { id: 's5', src: '/images/digital/digi2-img-8.png', alt: 'Animation Sprite 5' },
  { id: 's6', src: '/images/digital/digi2-img-9.png', alt: 'Animation Sprite 6' },
  { id: 's7', src: '/images/digital/digi2-img-10.png', alt: 'Animation Sprite 7' },
];

const CHARACTER_ASSETS = [
  { id: 'c1', src: '/images/digital/digi2-img-11.png', alt: 'Character Asset 1', flex: 'flex-[0.9]' },
  { id: 'c2', src: '/images/digital/digi2-img-12.png', alt: 'Character Asset 2', flex: 'flex-[0.9]' },
  { id: 'c3', src: '/images/digital/digi2-img-13.png', alt: 'Character Asset 3', flex: 'flex-[1.1]' },
  { id: 'c4', src: '/images/digital/digi2-img-14.png', alt: 'Character Asset 4', flex: 'flex-[2.1]' },
];

export default function UIDesignsDigitalArtworksPage() {
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
                UI Designs
              </h1>
            </div>
          </FadeUp>

          {/* Container 1: Clawbaby Mobile App Game */}
          <FadeUp delay={0.2}>
            <div className="bg-[#140812]/80 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 mb-12 md:mb-16 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Left Column: Vertical Hero Poster */}
                <div className="lg:col-span-3 flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-[240px] lg:max-w-none rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-zinc-950/80 group">
                    <Image
                      src="/images/clawbaby/claw-img-1.png"
                      alt="Clawbaby Mobile App Game Hero"
                      width={412}
                      height={732}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>

                {/* Right Column: Title + Description + UI Grids + Components */}
                <div className="lg:col-span-9 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                      Clawbaby Mobile App Game
                    </h2>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-3xl">
                      A colorful and playful mobile game UI designed to make every interaction fun, engaging, and rewarding.
                    </p>

                    {/* UI Screens Grid + Component Preview */}
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-start">
                      {/* 14 Screens Grid (2 rows x 7 cols) */}
                      <div className="xl:col-span-8">
                        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                          {CLAW_GRID_ITEMS.map((item) => (
                            <div
                              key={`claw-screen-${item.id}`}
                              className="rounded-lg overflow-hidden border border-white/10 bg-zinc-950/70 hover:border-[#ff4d29]/40 hover:scale-105 transition-all duration-300 shadow-md group relative aspect-[83/148]"
                            >
                              <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 640px) 25vw, (max-width: 1024px) 14vw, 8vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Component Mockup Right */}
                      <div className="xl:col-span-4 flex justify-center">
                        <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-zinc-950/70 hover:border-[#ff4d29]/40 transition-all duration-300 shadow-lg group">
                          <Image
                            src="/images/clawbaby/claw-img-2.png"
                            alt="Clawbaby UI Components"
                            width={628}
                            height={352}
                            className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Clawbaby Interactive Badges */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mr-1">
                      Figma Prototypes:
                    </span>
                    <a
                      href="https://www.figma.com/design/d4H76x2sD20G2hZpTffp/Clawbaby-Daily-Activity_2024-(11.18.24)---V1?node-id=0-1&t=W35S42m47x4x4fU-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 hover:bg-[#ff4d29]/20 border border-white/10 hover:border-[#ff4d29]/50 text-xs text-zinc-200 hover:text-white font-medium transition-all group shadow-sm"
                    >
                      <span>Mobile Game App</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <a
                      href="https://www.figma.com/design/89JZOkh2E8P0jTRsXZemWp/Clawbaby-Site?node-id=0-1&p=f&t=rCAwQQO6sNrjarza-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 hover:bg-[#ff4d29]/20 border border-white/10 hover:border-[#ff4d29]/50 text-xs text-zinc-200 hover:text-white font-medium transition-all group shadow-sm"
                    >
                      <span>Website Figma</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Section 2: Digital Artworks Header */}
          <FadeUp delay={0.25}>
            <div className="mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
                Digital Artworks
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-3xl">
                Here are some of the digital artworks I've created, from illustrations to creative visuals that can be used for games, branding, and other projects.
              </p>
            </div>
          </FadeUp>

          {/* Container 2: Digital Artworks Grid with Floating Character */}
          <FadeUp delay={0.3}>
            <div className="bg-[#140812]/80 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 mb-12 md:mb-16 shadow-2xl relative">
              {/* Floating Top Right Character */}
              <div className="absolute -top-10 sm:-top-14 md:-top-20 right-3 sm:right-6 lg:right-8 w-28 sm:w-36 md:w-48 lg:w-56 xl:w-60 pointer-events-none z-20 drop-shadow-[0_10px_35px_rgba(255,100,50,0.4)]">
                <Image
                  src="/images/digital/digi-img-card-1.png"
                  alt="Floating Character Artwork"
                  width={249}
                  height={261}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Row 1 Artworks: Occupies ~78% width to leave space for the floating character */}
              <div className="w-full lg:w-[77%] xl:w-[78%] flex flex-col sm:flex-row gap-2.5 sm:gap-3.5 mb-3 sm:mb-4">
                {DIGITAL_ROW_1.map((item) => (
                  <div
                    key={item.id}
                    className={`${item.flex} rounded-xl overflow-hidden border border-white/10 bg-zinc-950/70 hover:border-[#ff4d29]/40 hover:-translate-y-1 transition-all duration-300 shadow-lg group relative flex items-center justify-center`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Row 2 Artworks: Spans full width */}
              <div className="w-full flex flex-col sm:flex-row gap-2.5 sm:gap-3.5">
                {DIGITAL_ROW_2.map((item) => (
                  <div
                    key={item.id}
                    className={`${item.flex} rounded-xl overflow-hidden border border-white/10 bg-zinc-950/70 hover:border-[#ff4d29]/40 hover:-translate-y-1 transition-all duration-300 shadow-lg group relative flex items-center justify-center`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Container 3: Panda Wars & Animation Sprites with Floating Golden Warrior */}
          <FadeUp delay={0.35}>
            <div className="bg-[#140812]/80 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 mb-6 shadow-2xl relative">
              {/* Top Row: 3 Columns (Large Golden Warrior Left + Panda Wars Banner Center + 2 Stacked Screens Right) */}
              <div className="flex flex-col lg:flex-row items-center gap-3 sm:gap-5 mb-4 pt-1">
                {/* Left Column: Golden Warrior filling the left space */}
                <div className="w-full lg:w-[28%] xl:w-[26%] flex items-center justify-center relative shrink-0">
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] aspect-square flex items-center justify-center -mt-8 sm:-mt-10 lg:-mt-14 z-20 pointer-events-none drop-shadow-[0_0_45px_rgba(255,200,50,0.55)]">
                    <Image
                      src="/images/digital/panda-067 1.png"
                      alt="Golden Warrior Sprite"
                      fill
                      sizes="(max-width: 1024px) 320px, 360px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Middle Column: Panda Wars Banner */}
                <div className="flex-1 w-full rounded-xl overflow-hidden border border-white/10 bg-zinc-950/70 hover:border-[#ff4d29]/40 transition-all duration-300 shadow-lg group relative aspect-[650/238] flex items-center justify-center">
                  <Image
                    src="/images/digital/digi2-img-1.png"
                    alt="Panda Wars Key Artwork"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                {/* Right Column: 2 Stacked Screens */}
                <div className="w-full lg:w-[24%] xl:w-[23%] flex flex-col gap-2.5 sm:gap-3 shrink-0">
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-zinc-950/70 hover:border-[#ff4d29]/40 transition-all duration-300 shadow-lg group relative aspect-[245/114]">
                    <Image
                      src="/images/digital/digi2-img-2.png"
                      alt="Game Screen 1"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-zinc-950/70 hover:border-[#ff4d29]/40 transition-all duration-300 shadow-lg group relative aspect-[245/114]">
                    <Image
                      src="/images/digital/digi2-img-3.png"
                      alt="Game Screen 2"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Middle Row: 7 Animation Sprites */}
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                {SPRITE_SHEETS.map((sprite) => (
                  <div
                    key={sprite.id}
                    className="rounded-xl overflow-hidden border border-white/10 bg-zinc-950/70 hover:border-[#ff4d29]/40 hover:-translate-y-1 transition-all duration-300 shadow-md group"
                  >
                    <Image
                      src={sprite.src}
                      alt={sprite.alt}
                      width={200}
                      height={140}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Row: Character Assets */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch mb-4">
                {CHARACTER_ASSETS.map((asset) => (
                  <div
                    key={asset.id}
                    className={`${asset.flex} rounded-xl overflow-hidden border border-white/10 bg-zinc-950/70 hover:border-[#ff4d29]/40 hover:-translate-y-1 transition-all duration-300 shadow-md group flex items-center justify-center p-1`}
                  >
                    <Image
                      src={asset.src}
                      alt={asset.alt}
                      width={300}
                      height={160}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Sample Video Animation Action Bar inside Container 3 */}
              <div className="pt-5 mt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#ff4d29]/15 border border-[#ff4d29]/30 flex items-center justify-center text-[#ff4d29] shrink-0 shadow-md shadow-[#ff4d29]/10">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      Sample Video Animation
                    </h4>
                    <p className="text-[11px] sm:text-xs text-zinc-400">
                      Preview game animations, combat sequences & character motion
                    </p>
                  </div>
                </div>

                <a
                  href="https://drive.google.com/drive/folders/1rRpY28ohSA3bPR0z49l0QqAnO-rg6-uI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/90 hover:bg-[#ff4d29] border border-white/15 hover:border-[#ff4d29] text-zinc-200 hover:text-white text-xs font-semibold tracking-wide transition-all duration-300 shadow-md group shrink-0"
                >
                  <span>Watch Sample Animation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Interactive Video Animation CTA Banner */}
          <FadeUp delay={0.4}>
            <div className="bg-gradient-to-r from-[#180814]/90 via-[#130710]/95 to-[#220a1a]/90 backdrop-blur-xl border border-[#ff4d29]/25 hover:border-[#ff4d29]/50 rounded-2xl md:rounded-3xl p-5 sm:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-16 md:mb-24 shadow-2xl transition-all duration-500 hover:shadow-[#ff4d29]/15">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff4d29]/20 to-[#e61e7a]/20 border border-[#ff4d29]/40 flex items-center justify-center text-[#ff4d29] shadow-lg shadow-[#ff4d29]/10 shrink-0">
                  <Film className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Additional Video Animations & Motion Reels
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                    Explore more 2D/3D motion pieces, gameplay cuts, and video effects
                  </p>
                </div>
              </div>

              <a
                href="https://drive.google.com/drive/folders/1yld-vqXA9blu42wis9yF5zqXSGiQX6Cy"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-cta inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-pink-500/10 hover:shadow-pink-500/25 transition-all group shrink-0"
              >
                <span>Open Animation Folder</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
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
