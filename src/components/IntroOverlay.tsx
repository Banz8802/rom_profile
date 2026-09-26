'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (visible && !isFading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [visible, isFading]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        dismissIntro();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const dismissIntro = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setVisible(false);
    }, 700);
  };

  if (!visible) return null;

  return (
    <div
      onClick={dismissIntro}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center select-none cursor-pointer bg-[#050508]/75 backdrop-blur-2xl transition-all duration-700 ease-in-out ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="button"
      tabIndex={0}
      aria-label="Click anywhere to enter site"
    >
      <div className="flex flex-col items-center justify-center space-y-8 px-4 text-center">
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center">
          <Image
            src="/images/rom-intro.png"
            alt="ROM Logo Intro"
            width={240}
            height={240}
            priority
            className="w-full h-full object-contain animate-heartbeat"
          />
        </div>

        <p className="text-xs sm:text-sm tracking-widest text-zinc-300/90 font-medium animate-pulse-subtle">
          Click to continue
        </p>
      </div>
    </div>
  );
}
