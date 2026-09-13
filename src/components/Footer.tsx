'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050306] border-t border-zinc-900/80 py-8 text-zinc-400 text-xs sm:text-sm">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="flex items-center gap-1.5 text-zinc-400 font-medium">
          <span className="text-zinc-500 font-serif">©</span> {currentYear} Rom Laberinto. All rights reserved.
        </p>
        <p className="text-zinc-400 font-medium">
          Graphic Artist • Video Editor • Creative Designer
        </p>
      </div>
    </footer>
  );
}
