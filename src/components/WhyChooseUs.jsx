import React from 'react';
import { 
  ShieldCheck, Clock, Coins, Compass, 
  Star, Car, CheckCircle2
} from 'lucide-react';

const TRUST_PILLARS = [
  {
    id: 'fleet',
    icon: Car,
    title: '100% Company-Owned Fleet',
    desc: 'Zero aggregators. Every coach, Traveller, and Crysta is owned and sanitized directly by us.',
    tag: 'Zero Brokers'
  },
  {
    id: 'drivers',
    icon: ShieldCheck,
    title: 'Mountain Ghat Chauffeurs',
    desc: 'Certified hill route masters trained for steep 36-hairpin curves across Ooty, Kodai & Munnar.',
    tag: '10+ Yrs Ghat Exp'
  },
  {
    id: 'pricing',
    icon: Coins,
    title: 'Honest Per-KM Tariff',
    desc: 'Clear daily rents and transparent per-km slabs with zero hidden or surprise surcharges.',
    tag: 'Upfront Pricing'
  },
  {
    id: 'punctuality',
    icon: Clock,
    title: 'Punctual Doorstep Pickup',
    desc: 'Guaranteed on-time pickup from Madurai Airport, Railway Junction, or doorstep with 24/7 support.',
    tag: '99.4% On-Time'
  },
  {
    id: 'safety',
    icon: Compass,
    title: 'GPS Monitored & Insured',
    desc: 'Satellite GPS tracking, speed-governed fleet, and comprehensive commercial passenger insurance.',
    tag: 'Commercial Cover'
  },
  {
    id: 'founder',
    icon: Star,
    title: 'Direct Founder Care',
    desc: 'Speak directly with founder S. David for customized temple darshan timings and route advice.',
    tag: 'S. David Support'
  }
];

export default function WhyChooseUs({ onBookClick }) {
  return (
    <section id="why-us" className="relative py-14 sm:py-20 bg-gradient-to-br from-[#450A0A] via-[#5C0D0D] to-[#3B0707] text-white overflow-hidden border-t border-red-950/40">
      
      {/* Background Soft Ambient Glows */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* ============================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-5 border-b border-white/15 gap-5">
          <div className="max-w-2xl text-left space-y-2">
            <div className="flex items-center space-x-2.5">
              <span className="w-8 h-[2px] bg-[#F5B800]" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#F5B800]">
                The Mariya Standard
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Why Discerning Travelers{' '}
              <span className="font-serif italic text-[#F5B800] font-black">
                Trust Mariya.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-stone-300 font-medium leading-relaxed max-w-xl">
              100% company-owned fleet, certified mountain route chauffeurs, and honest upfront tariffs.
            </p>
          </div>

          {/* Quick Assurance Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-[10.5px] sm:text-[11px] font-bold text-white shrink-0">
            <span className="inline-flex items-center space-x-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Owned Fleet</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
              <span>4.9 / 5 Trust Score</span>
            </span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BORDERLESS EDITORIAL FEATURE SHOWCASE                         */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 sm:gap-y-12 md:gap-x-10">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const num = String(idx + 1).padStart(2, '0');

            return (
              <div 
                key={pillar.id}
                className="group relative flex items-start space-x-3.5 sm:space-x-5 text-left transition-all duration-300 bg-white/[0.03] sm:bg-transparent p-3.5 sm:p-0 rounded-2xl sm:rounded-none border border-white/5 sm:border-transparent"
              >
                {/* 1. Clear Luxury Serif Numeral + Soft Circular Icon */}
                <div className="relative shrink-0 pt-0.5">
                  <span className="font-serif text-2xl sm:text-3xl font-black text-white/20 group-hover:text-[#F5B800]/40 transition-colors absolute -top-3.5 -left-1 sm:-top-4 sm:-left-2 pointer-events-none select-none">
                    {num}
                  </span>
                  <div className="relative z-10 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md flex items-center justify-center text-[#F5B800] group-hover:bg-[#F5B800] group-hover:text-slate-950 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>
                </div>

                {/* 2. Content & Micro Tag */}
                <div className="space-y-1.5 sm:space-y-2 min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-2">
                    <h3 className="font-serif text-base sm:text-xl font-bold text-white group-hover:text-[#F5B800] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <span className="self-start px-2 py-0.5 rounded-full bg-[#F5B800] text-slate-950 text-[9px] sm:text-[10px] font-black tracking-wider uppercase shadow-xs">
                      {pillar.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-stone-300 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
