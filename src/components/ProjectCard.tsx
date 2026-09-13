'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Eye } from 'lucide-react';
import { ProjectItem } from '@/data/portfolioData';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const fallbackSvg = `/images/portfolio/${
    project.id === 'neon-cyber'
      ? 'project-1'
      : project.id === 'aura-audio'
      ? 'project-2'
      : project.id === 'velocity-motors'
      ? 'project-3'
      : project.id === 'vanguard-platform'
      ? 'project-4'
      : project.id === 'synthetix-3d'
      ? 'project-5'
      : 'project-6'
  }.svg`;

  const [imgSrc, setImgSrc] = useState(project.image);

  return (
    <div
      onClick={() => onSelect(project)}
      className="card-dark-glass rounded-3xl overflow-hidden group cursor-pointer flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 relative"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
        <Image
          src={imgSrc || fallbackSvg}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          onError={() => {
            if (imgSrc !== fallbackSvg) {
              setImgSrc(fallbackSvg);
            }
          }}
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#ff4d29] border border-[#ff4d29]/30 text-xs font-semibold">
            {project.category}
          </span>

          <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Eye className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-pink-400 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed mt-2.5 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-zinc-800/80">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-zinc-950/80 text-zinc-400 text-[11px] font-medium border border-zinc-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
