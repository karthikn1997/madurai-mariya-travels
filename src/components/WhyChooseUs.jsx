import React from 'react';
import { 
  ShieldCheck, Clock, Coins, Compass, 
  Star, Car, CheckCircle2, ArrowRight
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
    <section id="why-us" className="relative py-12 sm:py-20 bg-white text-slate-900 overflow-hidden border-t border-stone-200">
      
      {/* Background Soft Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

          {/* ============================================================== */}
          {/* LEFT COLUMN: STICKY EDITORIAL HEADER                           */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 text-left space-y-4 lg:sticky lg:top-24">
            <div className="flex items-center space-x-2.5">
              <span className="w-8 h-[2px] bg-[#F5B800]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B1E1E]">
                The Mariya Standard
              </span>
            </div>

            <h2 className="font-sans text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-950 tracking-tight leading-tight">
              Why Discerning Travelers{' '}
              <span className="text-[#8B1E1E]">
                Trust Mariya.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-md">
              100% company-owned fleet, certified mountain route chauffeurs, and honest upfront tariffs across South India.
            </p>

            {/* Clean Trust Metrics (No heavy boxes, just subtle bottom border) */}
            <div className="hidden sm:flex items-center gap-6 pt-4 border-t border-stone-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-900">100% Owned Fleet</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-[#F5B800] fill-current shrink-0" />
                <span className="text-xs font-bold text-slate-900">4.9 / 5 Trust Score</span>
              </div>
            </div>

            {/* Editorial Madurai Heritage & Quick CTA Card (Desktop Balance) */}
            <div className="hidden lg:block mt-5 bg-[#FAF8F5] border border-stone-200/90 rounded-2xl overflow-hidden shadow-sm">
              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src="/gallery/meenakshi-temple.jpg"
                  alt="Madurai Meenakshi Temple Heritage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5B800]">
                      Headquartered in Madurai
                    </p>
                    <p className="text-xs font-semibold text-white/95">
                      Trusted Across Tamil Nadu &amp; Kerala Since 2018
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between gap-4">
                <div className="grid grid-cols-3 gap-3 flex-1 text-center divide-x divide-stone-200">
                  <div>
                    <p className="text-sm font-extrabold font-numeric text-slate-950">7+ Yrs</p>
                    <p className="text-[10px] font-medium text-slate-500">Experience</p>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold font-numeric text-slate-950">20+</p>
                    <p className="text-[10px] font-medium text-slate-500">Own Vehicles</p>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold font-numeric text-slate-950">10K+</p>
                    <p className="text-[10px] font-medium text-slate-500">Happy Trips</p>
                  </div>
                </div>

                {onBookClick && (
                  <button
                    type="button"
                    onClick={onBookClick}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#8B1E1E] hover:bg-[#701616] text-white text-xs font-bold transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Plan Trip</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: BORDERLESS DIVIDED LIST (ZERO BOXES)             */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-5 sm:gap-0 sm:divide-y sm:divide-stone-200/80">
            {TRUST_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              const num = String(idx + 1).padStart(2, '0');

              return (
                <div
                  key={pillar.id}
                  className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-5 py-1 sm:py-5 border-l-2 border-[#8B1E1E]/30 pl-3 sm:border-l-0 sm:pl-0 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 min-w-0 flex-1">
                    {/* Index + Icon */}
                    <div className="flex items-center space-x-2.5 shrink-0">
                      <span className="hidden sm:inline text-xs font-numeric font-bold text-slate-400 group-hover:text-[#8B1E1E] transition-colors w-5">
                        {num}
                      </span>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-50 border border-red-200/60 flex items-center justify-center text-[#8B1E1E] group-hover:bg-[#8B1E1E] group-hover:text-white transition-all duration-300">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-sans text-[13px] sm:text-base font-bold text-slate-950 group-hover:text-[#8B1E1E] transition-colors leading-snug">
                          {pillar.title}
                        </h3>
                        <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-[#8B1E1E]">
                          • {pillar.tag}
                        </span>
                      </div>
                      <p className="hidden sm:block text-xs text-slate-600 leading-relaxed mt-0.5 font-normal">
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
