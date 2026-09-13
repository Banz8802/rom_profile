'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Calendar, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Video Production',
    budget: '$3k - $5k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#050508] relative overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#e61e7a]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#ff4d29]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff4d29]/10 border border-[#ff4d29]/20 text-[#ff4d29] text-xs font-bold tracking-wider uppercase mb-6">
                04 / CONTACT
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
                Let’s Create <br />
                <span className="text-[#ff4d29]">Something Great.</span>
              </h2>

              <p className="text-zinc-300 text-base md:text-lg leading-relaxed mt-6">
                Have an upcoming video project, visual identity launch, or creative campaign? Let’s collaborate to build something remarkable.
              </p>
            </div>

            {/* Direct Details Cards */}
            <div className="space-y-4 mt-10">
              <div className="card-dark-glass rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#ff4d29] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="block text-white font-bold text-base hover:text-pink-400 transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="card-dark-glass rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#ff4d29] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Location
                  </span>
                  <p className="text-white font-bold text-base">{CONTACT_INFO.location}</p>
                </div>
              </div>

              <div className="card-dark-glass rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#ff4d29] shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Availability
                  </span>
                  <p className="text-white font-bold text-base">{CONTACT_INFO.availability}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="card-dark-glass rounded-3xl p-8 sm:p-10 md:p-12 relative overflow-hidden">
              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-zinc-400 text-base max-w-md">
                    Thank you for reaching out. I’ll review your project details and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'Video Production',
                        budget: '$3k - $5k',
                        message: '',
                      });
                    }}
                    className="gradient-cta px-6 py-3 rounded-full text-white font-semibold text-sm mt-8"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#e61e7a] focus:ring-1 focus:ring-[#e61e7a] transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="alex@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#e61e7a] focus:ring-1 focus:ring-[#e61e7a] transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white focus:outline-none focus:border-[#e61e7a] focus:ring-1 focus:ring-[#e61e7a] transition-all text-sm"
                      >
                        <option value="Video Production">Video Production</option>
                        <option value="Motion Graphics">Motion Graphics</option>
                        <option value="Branding">Branding & Identity</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Web Design">Web / Creative Design</option>
                        <option value="Full Package">Full Package Direction</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white focus:outline-none focus:border-[#e61e7a] focus:ring-1 focus:ring-[#e61e7a] transition-all text-sm"
                      >
                        <option value="< $3k">Under $3,000</option>
                        <option value="$3k - $5k">$3,000 - $5,000</option>
                        <option value="$5k - $10k">$5,000 - $10,000</option>
                        <option value="$10k+">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project goals, timelines, and deliverables..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#e61e7a] focus:ring-1 focus:ring-[#e61e7a] transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="gradient-cta w-full py-4 rounded-full text-white font-semibold text-base shadow-xl shadow-pink-500/20 flex items-center justify-center gap-2 group"
                  >
                    <span>Let’s Work Together</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
