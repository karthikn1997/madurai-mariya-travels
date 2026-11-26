import React from 'react';
import { 
  ShieldCheck, Car, Users, Navigation, 
  MessageCircle, Star, CheckCircle2
} from 'lucide-react';
import { COMPANY_STATS } from '../data/features';
import { CLIENT_WHATSAPP_NUMBER, CONTACT_PERSON } from './BookingForm';

export default function About() {
  const handleFounderWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${CONTACT_PERSON}, I am visiting the Mariya Travels website and would like to consult with you regarding vehicle booking and tour planning.`
    );
    window.open(`https://wa.me/${CLIENT_WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="about" className="relative scroll-mt-20 py-16 sm:py-20 bg-[#FBF9F5] overflow-hidden text-slate-900 border-t border-stone-200">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-80 h-80 bg-amber-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Top Header Badge */}
        <div className="flex items-center space-x-2.5 mb-4">
          <span className="w-8 h-[2px] bg-[#8B1E1E]" />
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#8B1E1E]">
            About Mariya Travels
          </span>
        </div>

        {/* Main 2-Column Grid: Left Multi-Layered Visual Collage & Right Concise Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: MULTI-LAYERED PHOTO COLLAGE (COMPACT & BALANCED)  */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 relative max-w-[460px] mx-auto lg:max-w-none w-full">
            
            {/* Primary Large Card: Real Mariya 21-Seat Luxury Coach */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-stone-200/80 shadow-xl bg-slate-950 group">
              <img
                src="/vehicles/gallery/coach-3-front-angle.jpg"
                alt="Mariya Travels 21 Seat AC Luxury Coach"
                className="w-full h-[290px] sm:h-[340px] lg:h-[370px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              {/* Bottom Inset Caption on Primary Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 text-white text-left">
                <span className="px-2.5 py-0.5 rounded-full bg-[#8B1E1E] text-white text-[9.5px] font-black uppercase tracking-wider shadow inline-block mb-1.5">
                  Mariya Executive Flagship
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                  21-Seat AC Pushback Luxury Coach
                </h4>
                <p className="text-xs text-stone-300 font-medium line-clamp-1 mt-0.5">
                  100% Owned Fleet • Hill Station & Wedding Specialist
                </p>
              </div>

              {/* Top-Right Pill on Main Image */}
              <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white flex items-center space-x-1.5 text-[10px] font-bold shadow-md">
                <Star className="w-3 h-3 text-amber-400 fill-current" />
                <span>4.9 / 5 Rated Service</span>
              </div>
            </div>

            {/* Floating Overlapping Card 1 (Bottom Right): Real Interior Comfort */}
            <div className="hidden sm:block absolute -bottom-5 -right-4 lg:-bottom-6 lg:-right-5 z-20 w-56 sm:w-60 rounded-2xl overflow-hidden border-2 border-white shadow-2xl bg-white group hover:-translate-y-1 transition-transform">
              <div className="relative h-24 overflow-hidden bg-slate-900">
                <img
                  src="/vehicles/gallery/coach-4-cabin-interior.jpg"
                  alt="Mariya Coach Pushback Interior"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[9.5px] font-bold text-amber-300 border border-amber-300/30">
                  2x1 Recliner Comfort
                </span>
              </div>
              <div className="p-2.5 text-left">
                <div className="flex items-center space-x-1.5 text-xs font-black text-slate-900">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Zero Travel Fatigue</span>
                </div>
                <p className="text-[10px] text-slate-600 mt-0.5 font-medium leading-snug">
                  Individual AC louvers, plush calf support & high-roof comfort.
                </p>
              </div>
            </div>

            {/* Floating Overlapping Badge 2 (Top Left): Official Founder Emblem */}
            <div className="absolute -top-3 left-2 sm:-top-4 sm:-left-4 z-20 p-2 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-xl flex items-center space-x-2 sm:space-x-2.5 text-left">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-50 border border-red-200/60 flex items-center justify-center shrink-0 p-1">
                <img
                  src="/logo.png"
                  alt="Mariya Travels Galloping Horses Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[8px] sm:text-[8.5px] font-black uppercase tracking-wider text-slate-500 block">
                  ESTABLISHED 2018
                </span>
                <span className="font-serif font-black text-xs sm:text-sm text-slate-950">
                  Madurai, Tamil Nadu
                </span>
              </div>
            </div>

          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: CONCISE STORY, VALUE PILLARS & STATS             */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 flex flex-col space-y-4 lg:space-y-5 text-left">
            
            {/* Editorial Heading */}
            <div>
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
                Travel Is Not Just About Reaching.{' '}
                <span className="text-[#8B1E1E] font-extrabold block sm:inline">
                  It's About Experiencing.
                </span>
              </h2>
            </div>

            {/* Concise Story - 1 Tight Paragraph */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-700 leading-relaxed font-medium">
              Founded in 2018 in Madurai by <strong className="text-slate-950 font-black">S. David</strong>, <strong className="text-slate-950 font-black">Mariya Travels</strong> operates a 100% company-owned luxury fleet for comfortable tour yatras, ghat road mountain circuits, and corporate group travel across South India with absolute safety.
            </p>

            {/* 4 Compact Mini Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              
              {/* Feature 1 */}
              <div className="p-3 rounded-xl bg-white border border-stone-200/90 shadow-2xs flex items-center space-x-3 hover:border-[#8B1E1E]/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <Car className="w-4 h-4 text-[#8B1E1E]" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs sm:text-[13px] font-black text-slate-950 leading-snug">100% Owned Fleet</p>
                  <p className="text-[11px] sm:text-[10px] text-slate-500 font-medium mt-0.5 leading-snug">Zero brokers or aggregators</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-3 rounded-xl bg-white border border-stone-200/90 shadow-2xs flex items-center space-x-3 hover:border-[#8B1E1E]/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <Navigation className="w-4 h-4 text-[#8B1E1E]" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs sm:text-[13px] font-black text-slate-950 leading-snug">Ghat Road Experts</p>
                  <p className="text-[11px] sm:text-[10px] text-slate-500 font-medium mt-0.5 leading-snug">Seasoned mountain drivers</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-3 rounded-xl bg-white border border-stone-200/90 shadow-2xs flex items-center space-x-3 hover:border-[#8B1E1E]/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#8B1E1E]" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs sm:text-[13px] font-black text-slate-950 leading-snug">Honest Kilometrage</p>
                  <p className="text-[11px] sm:text-[10px] text-slate-500 font-medium mt-0.5 leading-snug">Clear transparent rates</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="p-3 rounded-xl bg-white border border-stone-200/90 shadow-2xs flex items-center space-x-3 hover:border-[#8B1E1E]/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#8B1E1E]" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs sm:text-[13px] font-black text-slate-950 leading-snug">Direct Founder Access</p>
                  <p className="text-[11px] sm:text-[10px] text-slate-500 font-medium mt-0.5 leading-snug">S. David custom support</p>
                </div>
              </div>

            </div>

            {/* Combined Numerical Stats & Founder Contact Action */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 text-center sm:text-left sm:flex sm:items-center sm:space-x-6">
                {COMPANY_STATS.map((stat, idx) => (
                  <div key={idx} className="text-center sm:text-left">
                    <p className="text-lg sm:text-xl font-numeric text-slate-950 font-black leading-none tracking-tight">{stat.number}</p>
                    <p className="text-[10px] sm:text-[9.5px] uppercase tracking-wider text-slate-500 font-bold mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={handleFounderWhatsApp}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#8B1E1E] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-sm hover:scale-102 transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Chat with Founder</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
