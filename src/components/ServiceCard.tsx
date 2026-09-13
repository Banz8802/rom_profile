'use client';

import React from 'react';
import {
  Palette,
  Video,
  Sparkles,
  Layers,
  Share2,
  Monitor,
  ArrowUpRight,
} from 'lucide-react';
import { ServiceItem } from '@/data/portfolioData';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = () => {
    switch (service.iconName) {
      case 'Palette':
        return <Palette className="w-7 h-7 text-[#ff4d29]" />;
      case 'Video':
        return <Video className="w-7 h-7 text-[#ff4d29]" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-[#ff4d29]" />;
      case 'Layers':
        return <Layers className="w-7 h-7 text-[#ff4d29]" />;
      case 'Share2':
        return <Share2 className="w-7 h-7 text-[#ff4d29]" />;
      case 'Monitor':
        return <Monitor className="w-7 h-7 text-[#ff4d29]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#ff4d29]" />;
    }
  };

  return (
    <div className="card-dark-glass rounded-3xl p-7 md:p-8 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden">
      {/* Background Accent Hover Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#e61e7a]/10 rounded-full blur-3xl group-hover:bg-[#e61e7a]/25 transition-all pointer-events-none" />

      <div>
        {/* Top Header: Icon & Arrow */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-[#ff4d29]/50 group-hover:scale-110 transition-all">
            {getIcon()}
          </div>
          <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-[#e61e7a] group-hover:bg-[#e61e7a] transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-pink-400 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-3">
          {service.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-zinc-800/80">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-zinc-950/80 text-zinc-400 text-xs font-medium border border-zinc-800 group-hover:border-zinc-700 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
