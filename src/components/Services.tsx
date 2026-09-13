'use client';

import React from 'react';
import ServiceCard from './ServiceCard';
import { SERVICES } from '@/data/portfolioData';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#050508] relative overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#9333ea]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff4d29]/10 border border-[#ff4d29]/20 text-[#ff4d29] text-xs font-bold tracking-wider uppercase mb-4">
            02 / WHAT I DO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            High-Impact Creative & Video{' '}
            <span className="text-[#ff4d29]">Services.</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mt-4">
            From concept direction to final master post-production, delivering end-to-end visual excellence tailored for brands and creators.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
