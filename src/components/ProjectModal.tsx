'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ExternalLink, Tag, Calendar, UserCheck } from 'lucide-react';
import { ProjectItem } from '@/data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [imgSrc, setImgSrc] = useState(project?.image || '');

  if (!project) return null;

  const fallbackSvg = `/images/portfolio/${project.id === 'neon-cyber' ? 'project-1' : project.id === 'aura-audio' ? 'project-2' : project.id === 'velocity-motors' ? 'project-3' : project.id === 'vanguard-platform' ? 'project-4' : project.id === 'synthetix-3d' ? 'project-5' : 'project-6'}.svg`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0b0a10] border border-zinc-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-colors"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-800/80 mb-8 bg-zinc-950">
          <Image
            src={imgSrc || fallbackSvg}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover"
            onError={() => {
              if (imgSrc !== fallbackSvg) {
                setImgSrc(fallbackSvg);
              }
            }}
          />
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-[#ff4d29] border border-[#ff4d29]/30 text-xs font-semibold">
              {project.category}
            </span>
          </div>
        </div>

        {/* Modal Header Details */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6 mb-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-base mt-1">{project.description}</p>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-zinc-400">
            {project.client && (
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#ff4d29]" />
                <span>{project.client}</span>
              </div>
            )}
            {project.year && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#ff4d29]" />
                <span>{project.year}</span>
              </div>
            )}
          </div>
        </div>

        {/* Full Details Content */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white">Project Overview</h4>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            {project.fullDetails || project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 text-xs font-medium border border-zinc-800"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-end">
          <button
            onClick={onClose}
            className="gradient-cta px-6 py-2.5 rounded-full text-white font-semibold text-sm inline-flex items-center gap-2"
          >
            <span>Close Showcase</span>
          </button>
        </div>
      </div>
    </div>
  );
}
