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
    <section id="why-us" className="relative py-12 sm:py-20 bg-gradient-to-br from-[#3D0808] via-[#540B0B] to-[#2B0505] text-white overflow-hidden border-t border-red-950/40">
      
      {/* Background Soft Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

          {/* ============================================================== */}
          {/* LEFT COLUMN: STICKY EDITORIAL HEADER                           */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 text-left space-y-4 lg:sticky lg:top-24">
            <div className="flex items-center space-x-2.5">
              <span className="w-8 h-[2px] bg-[#F5B800]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F5B800]">
                The Mariya Standard
              </span>
            </div>

            <h2 className="font-sans text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-tight">
              Why Discerning Travelers{' '}
              <span className="text-[#F5B800]">
                Trust Mariya.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-stone-300 font-medium leading-relaxed max-w-md">
              100% company-owned fleet, certified mountain route chauffeurs, and honest upfront tariffs across South India.
            </p>

            {/* Clean Trust Metrics (No heavy boxes, just subtle bottom border) */}
            <div className="hidden sm:flex items-center gap-6 pt-4 border-t border-white/15">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-white">100% Owned Fleet</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-[#F5B800] fill-current shrink-0" />
                <span className="text-xs font-bold text-white">4.9 / 5 Trust Score</span>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: BORDERLESS DIVIDED LIST (ZERO BOXES)             */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-5 sm:gap-0 sm:divide-y sm:divide-white/10">
            {TRUST_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              const num = String(idx + 1).padStart(2, '0');

              return (
                <div
                  key={pillar.id}
                  className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-5 py-1 sm:py-5 border-l-2 border-[#F5B800]/50 pl-3 sm:border-l-0 sm:pl-0 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 min-w-0 flex-1">
                    {/* Index + Icon */}
                    <div className="flex items-center space-x-2.5 shrink-0">
                      <span className="hidden sm:inline text-xs font-numeric font-bold text-[#F5B800]/70 w-5">
                        {num}
                      </span>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center text-[#F5B800] group-hover:bg-[#F5B800] group-hover:text-slate-950 transition-all duration-300">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-sans text-[13px] sm:text-base font-bold text-white group-hover:text-[#F5B800] transition-colors leading-snug">
                          {pillar.title}
                        </h3>
                        <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-[#F5B800]">
                          • {pillar.tag}
                        </span>
                      </div>
                      <p className="hidden sm:block text-xs text-stone-300/90 leading-relaxed mt-0.5 font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
