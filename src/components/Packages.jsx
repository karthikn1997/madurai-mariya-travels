import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Mountain, 
  Compass, Sparkles, MapPin, 
  Calendar, MessageCircle
} from 'lucide-react';
import { TOUR_PACKAGES } from '../data/packages';
import { CLIENT_WHATSAPP_NUMBER, CONTACT_PERSON } from './BookingForm';

// Filter Categories
const CATEGORIES = [
  { id: 'all', label: 'All Packages', count: 6 },
  { id: 'hills', label: 'Hill Stations', filter: ['madurai-kodai-palani-ooty-cbe', 'madurai-thekkady-munnar', 'kodaikanal-palani-madurai'] },
  { id: 'temples', label: 'Temple Heritage', filter: ['madurai-pillayarpatti-srirangam-thanjavur', 'madurai-rameshwaram', 'madurai-rameswaram-kanyakumari-trivandrum'] },
  { id: 'coastal', label: 'Coastal & Island', filter: ['madurai-rameswaram-kanyakumari-trivandrum', 'madurai-rameshwaram'] },
];

export default function Packages({ onSelectPackage, onEnquirePackage }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPackages = useMemo(() => {
    if (activeTab === 'all') return TOUR_PACKAGES;
    const cat = CATEGORIES.find(c => c.id === activeTab);
    if (!cat?.filter) return TOUR_PACKAGES;
    return TOUR_PACKAGES.filter(p => cat.filter.includes(p.id));
  }, [activeTab]);

  const handleCustomWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${CONTACT_PERSON}, I am reviewing the tour packages on Mariya Travels and would like to plan a custom South India tour itinerary.`
    );
    window.open(`https://wa.me/${CLIENT_WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="packages" className="relative py-8 sm:py-10 bg-[#eef3f8] text-slate-900 overflow-hidden border-b border-stone-200">
      
      {/* Scenic Kanyakumari Thiruvalluvar Statue & Ocean Background (Zoomed Out / Wide Angle) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/kanyakumari-packages-bg-wide.jpg"
          alt="Kanyakumari Thiruvalluvar Statue and Vivekananda Rock Memorial"
          className="w-full h-full object-cover object-bottom"
        />
        {/* Soft elegant scrim ensuring contrast for text and cards while keeping the monument clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/35 to-white/60 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* COMPACT SECTION HEADER                                         */}
        {/* ============================================================== */}
        <div className="mb-3.5 pb-2 border-b border-stone-300/80">
          <div className="max-w-2xl text-left">
            <div className="flex items-center space-x-2 mb-1">
              <span className="w-7 h-[2px] bg-[#8B1E1E]" />
              <span className="text-[10.5px] font-black tracking-[0.28em] uppercase text-[#8B1E1E]">
                Tailored Travel Experiences
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#8B1E1E] tracking-tight">
              Tour Packages
            </h2>
            <p className="mt-0.5 text-xs text-slate-600 leading-relaxed font-medium">
              Handcrafted round-trips from Madurai with premium AC fleet, dedicated mountain chauffeurs, and customized pickup & drops.
            </p>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PILL BAR CATEGORY TABS (COMPACT)                               */}
        {/* ============================================================== */}
        <div className="flex justify-start sm:justify-center mb-4 overflow-x-auto pb-1 scrollbar-none px-1 sm:px-0">
          <div className="bg-white/95 backdrop-blur-md p-1 rounded-full border border-stone-300/80 shadow-sm inline-flex items-center space-x-1 shrink-0">
            {CATEGORIES.map(cat => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] font-black tracking-wider uppercase transition-all shrink-0 flex items-center space-x-1.5 cursor-pointer ${
                    isActive 
                      ? 'bg-[#F5B800] text-slate-950 shadow-sm scale-102 font-extrabold' 
                      : 'text-slate-700 hover:text-slate-950 hover:bg-stone-100'
                  }`}
                >
                  {cat.id === 'all' && <Compass className="w-3 h-3" />}
                  {cat.id === 'hills' && <Mountain className="w-3 h-3" />}
                  {cat.id === 'temples' && <Sparkles className="w-3 h-3" />}
                  {cat.id === 'coastal' && <MapPin className="w-3 h-3" />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* COMPACT UNIFORM ROUNDED BOX CARDS (REDUCED HEIGHT)             */}
        {/* ============================================================== */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg, idx) => {
              const isFirstGold = idx === 0;

              return (
                <motion.div
                  layout
                  key={pkg.id}
                  id={`pkg-${pkg.id}`}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.93, transition: { duration: 0.22 } }}
                  transition={{ 
                    duration: 0.35, 
                    delay: idx * 0.04, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  whileHover={{ 
                    y: -4, 
                    scale: 1.02,
                    transition: { duration: 0.2, ease: 'easeOut' } 
                  }}
                  onClick={() => onSelectPackage?.(pkg)}
                  className="group relative h-[195px] sm:h-[210px] md:h-[225px] w-full rounded-2xl overflow-hidden cursor-pointer border-[2.5px] border-white shadow-[0_8px_20px_-4px_rgba(0,0,0,0.18)] hover:shadow-[0_14px_30px_-5px_rgba(0,0,0,0.26)] transition-all duration-300 bg-slate-900"
                >
                  {/* 1. Full-Bleed Destination Cover Photo */}
                  <img
                    src={pkg.coverImage || pkg.heroBanner || pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* 2. Deep Gradient Scrim for Impeccable Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/15 pointer-events-none" />

                  {/* 3. Top-Left Pill Badge with Location Pin */}
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-10 pointer-events-none">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black shadow-md flex items-center space-x-1 border ${
                      isFirstGold 
                        ? 'bg-[#F5B800] text-slate-950 border-amber-300 shadow-amber-500/20' 
                        : 'bg-white/95 text-slate-950 border-white/80'
                    }`}>
                      <MapPin className={`w-3 h-3 ${isFirstGold ? 'text-slate-950' : 'text-[#8B1E1E]'}`} />
                      <span>{pkg.region?.split('–')[0]?.trim() || 'Tamil Nadu'}</span>
                    </span>
                  </div>

                  {/* 4. Bottom Info & Circular Arrow Row */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 z-10 flex items-end justify-between gap-2.5 text-left">
                    <div className="min-w-0 pr-1 space-y-0.5">
                      {/* Title right on top of image */}
                      <h3 className="font-serif text-sm sm:text-base font-bold text-white leading-tight drop-shadow-md group-hover:text-amber-200 transition-colors line-clamp-1">
                        {pkg.name}
                      </h3>

                      {/* Days & Location Subtitle Row */}
                      <div className="flex items-center space-x-2 text-[11px] text-white/95 font-bold font-numeric drop-shadow">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3 text-amber-300" />
                          <span>{pkg.duration}</span>
                        </span>
                        <span className="text-white/60 font-normal">|</span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-amber-300" />
                          <span className="truncate max-w-[120px]">
                            {pkg.popularRoute.split(' → ')[1] || pkg.popularRoute}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Circular Arrow Button */}
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold shadow-lg transition-all duration-300 shrink-0 ${
                      isFirstGold 
                        ? 'bg-[#F5B800] text-slate-950 scale-105' 
                        : 'bg-white text-slate-950 group-hover:bg-[#F5B800] group-hover:scale-110'
                    }`}>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ============================================================== */}
        {/* COMPACT BOTTOM CUSTOM ITINERARY INLINE BANNER                  */}
        {/* ============================================================== */}
        <div className="mt-4 sm:mt-5 p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-300/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3 text-left">
          <div className="space-y-0.5 max-w-xl">
            <div className="flex items-center space-x-1.5 text-[#8B1E1E]">
              <Sparkles className="w-3.5 h-3.5 fill-current text-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#8B1E1E]">
                Customized South India Tours
              </span>
            </div>
            <h4 className="font-serif text-base sm:text-lg font-black text-slate-950">
              Need a personalized circuit, temple darshan route, or group schedule?
            </h4>
            <p className="text-xs text-slate-600 font-medium">
              We customize pickup times, luxury fleet options, and flexible halts to match your family's exact comfort.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCustomWhatsApp}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#8B1E1E] hover:bg-[#721818] active:scale-98 text-white font-black text-xs uppercase tracking-wider shadow-sm hover:scale-102 transition-all flex items-center justify-center space-x-1.5 cursor-pointer shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-amber-300" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
