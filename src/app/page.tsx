import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatIDo from '@/components/WhatIDo';
import SelectedWork from '@/components/SelectedWork';
import About from '@/components/About';
import HireMe from '@/components/HireMe';
import Footer from '@/components/Footer';
import IntroOverlay from '@/components/IntroOverlay';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050508] text-[#f4f4f6]">
      <IntroOverlay />
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhatIDo />
        <SelectedWork />
        <About />
        <HireMe />
      </main>
      <Footer />
    </div>
  );
}

