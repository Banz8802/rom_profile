'use client';

import React from 'react';
import { CheckSquare, Users, Star, TrendingUp } from 'lucide-react';
import { StatItem } from '@/data/portfolioData';

interface StatCardProps {
  stat: StatItem;
}

export default function StatCard({ stat }: StatCardProps) {
  const renderIcon = () => {
    switch (stat.iconName) {
      case 'check-square':
        return <CheckSquare className="w-6 h-6 text-[#ff4d29]" />;
      case 'users':
        return <Users className="w-6 h-6 text-[#ff4d29]" />;
      case 'star':
        return <Star className="w-6 h-6 text-[#ff4d29]" />;
      default:
        return <CheckSquare className="w-6 h-6 text-[#ff4d29]" />;
    }
  };

  return (
    <div className="card-dark-glass rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff4d29]/40 group">
      {/* Left Icon Badge */}
      <div className="w-12 h-12 rounded-xl bg-[#1d141e] border border-[#ff4d29]/30 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#ff4d29]/60 transition-transform">
        {renderIcon()}
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-center min-w-0">
        <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-zinc-400 uppercase leading-snug">
          {stat.label}
        </span>
        <div className="flex items-baseline gap-1.5 mt-0.5">
          <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {stat.value}
          </span>
          {stat.unit && (
            <span className="text-xs font-medium text-zinc-400">
              {stat.unit}
            </span>
          )}
          {stat.hasTrendArrow && (
            <div className="flex items-center text-[#ff4d29]">
              <TrendingUp className="w-4 h-4 stroke-[2.5]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
