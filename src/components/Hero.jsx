import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Compass, Calendar, Users, Search, 
  ArrowRight, ShieldCheck, Sparkles, Car, 
  CheckCircle2, Clock, Phone, MessageSquare, 
  ChevronRight, ArrowDownRight, Check
} from 'lucide-react';
import { VEHICLES } from '../data/vehicles';
import { TOUR_PACKAGES } from '../data/packages';
import { CLIENT_WHATSAPP_NUMBER, CONTACT_PERSON } from './BookingForm';

const POPULAR_DESTINATIONS = [
  'Kodaikanal',
  'Munnar',
  'Rameshwaram',
  'Ooty',
  'Kanyakumari',
  'Thekkady',
  'Palani',
  'Trivandrum',
  'Thanjavur'
];

const PICKUP_POINTS = [
  'Madurai (Any Hub / Doorstep)',
  'Madurai Airport (IXM)',
  'Madurai Junction Railway Station',
  'Mattuthavani Bus Stand (MGR)',
  'Meenakshi Amman Temple Zone',
  'Arapalayam Bus Stand'
];

const HERO_BG_IMAGES = [
  '/hero/hero-bg-1.jpg',
  '/hero/hero-bg-2.jpg',
  '/hero/hero-bg-3.jpg',
  '/hero/hero-bg-4.jpg',
];

export default function Hero({ 
  onExploreFleet, 
  onPlanJourney, 
  onSelectVehicle, 
  onSelectPackage, 
  onBookVehicle 
}) {
  // Tomorrow's date helper for default
  const getTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const getToday = () => new Date().toISOString().split('T')[0];

  // Dynamic 2-Second Background Slideshow State
  const [bgIndex, setBgIndex] = useState(0);

  // Preload hero background images for instant smooth transitions
  useEffect(() => {
    HERO_BG_IMAGES.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Cycle hero background every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex(prev => (prev + 1) % HERO_BG_IMAGES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Search State
  const [pickup, setPickup] = useState('Madurai (Any Hub / Doorstep)');
  const [destination, setDestination] = useState('Kodaikanal');
  const [travelDate, setTravelDate] = useState(getTomorrow());
  const [paxRange, setPaxRange] = useState('all');

  // Handle Search Trigger - Smoothly navigate to Tariff & Fleet Section
  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (onExploreFleet) {
      onExploreFleet();
    } else {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="relative w-full flex flex-col items-center justify-between overflow-hidden bg-slate-950 py-10 sm:py-14 text-slate-950 min-h-[500px] sm:min-h-[560px]">
      
      {/* 1. Cinematic 2-Second Rotating Scenic Background Slideshow (100% Crisp & Clear - Zero Fog) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        <AnimatePresence initial={false}>
          <motion.img
            key={HERO_BG_IMAGES[bgIndex]}
            src={HERO_BG_IMAGES[bgIndex]}
            alt="Mariya Travels Scenic Destination"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Minimal High-Clarity Film: Crisp, Rich Colors Without Fog */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/45 pointer-events-none" />

        {/* Slide Indicator Dots at bottom right */}
        <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center space-x-1.5 pointer-events-none">
          {HERO_BG_IMAGES.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                bgIndex === i ? 'w-5 bg-[#F5B800]' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hero Content Container - Top Title + Bottom Compact Search */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center">
        
        {/* Main Headline (Upper Section) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-3 flex flex-col items-center"
        >
          {/* Mariya Travels Official Brand Logo (Transparent - No Background Box) */}
          <div className="flex justify-center mb-1">
            <img
              src="/logo.png"
              alt="Madurai Mariya Travels Logo"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#F5B800] text-[10px] sm:text-[11px] font-black uppercase tracking-widest shadow-md">
            <Sparkles className="w-3 h-3 fill-current" />
            <span>Madurai's Premier Fleet & Tour Partner</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl md:text-[2.75rem] text-white font-bold leading-tight tracking-tight drop-shadow-[0_3px_14px_rgba(0,0,0,0.95)]">
            Every Journey Deserves a Better Ride with{' '}
            <span className="text-[#F5B800] not-italic font-black drop-shadow-[0_2px_12px_rgba(245,184,0,0.5)]">
              Mariya Travels.
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-white/95 font-medium max-w-lg mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] leading-relaxed">
            Search instant fleet availability & curated tours across South India
          </p>
        </motion.div>

        {/* ============================================================== */}
        {/* 2. COMPACT SEARCH WIDGET (LOWER POSITION & SLEEK SIZE)          */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full max-w-4xl mt-12 sm:mt-18"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-3 sm:p-4 shadow-2xl shadow-black/60 border border-amber-400/50 text-left transition-all">
            
            {/* The Search Form (Compact & Clean) */}
            <form onSubmit={handleSearch} className="space-y-2.5">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
                
                {/* 1. PICKUP POINT */}
                <div className="relative bg-stone-50 hover:bg-stone-100 rounded-xl p-2 sm:p-2.5 border border-stone-200 focus-within:border-amber-400 focus-within:ring-1 focus-within:ring-amber-400/30 transition-all">
                  <label className="block text-[9.5px] font-black uppercase tracking-wider text-slate-500 mb-0.5 flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-[#8B1E1E]" />
                    <span>From</span>
                  </label>
                  <select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full bg-transparent font-bold text-[11px] sm:text-xs text-slate-950 focus:outline-none cursor-pointer truncate"
                  >
                    {PICKUP_POINTS.map(pt => (
                      <option key={pt} value={pt}>{pt}</option>
                    ))}
                  </select>
                </div>

                {/* 2. DESTINATION / TO */}
                <div className="relative bg-stone-50 hover:bg-stone-100 rounded-xl p-2 sm:p-2.5 border border-stone-200 focus-within:border-amber-400 focus-within:ring-1 focus-within:ring-amber-400/30 transition-all">
                  <label className="block text-[9.5px] font-black uppercase tracking-wider text-slate-500 mb-0.5 flex items-center space-x-1">
                    <Compass className="w-3 h-3 text-[#F5B800]" />
                    <span>To Destination</span>
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Kodaikanal, Munnar..."
                    className="w-full bg-transparent font-bold text-[11px] sm:text-xs text-slate-950 placeholder-slate-400 focus:outline-none truncate"
                    list="destinations-list"
                  />
                  <datalist id="destinations-list">
                    {POPULAR_DESTINATIONS.map(d => (
                      <option key={d} value={d} />
                    ))}
                  </datalist>
                </div>

                {/* 3. TRAVEL DATE */}
                <div className="relative bg-stone-50 hover:bg-stone-100 rounded-xl p-2 sm:p-2.5 border border-stone-200 focus-within:border-amber-400 focus-within:ring-1 focus-within:ring-amber-400/30 transition-all">
                  <label className="block text-[9.5px] font-black uppercase tracking-wider text-slate-500 mb-0.5 flex items-center space-x-1">
                    <Calendar className="w-3 h-3 text-slate-600" />
                    <span>Travel Date</span>
                  </label>
                  <input
                    type="date"
                    min={getToday()}
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-transparent font-bold text-[11px] sm:text-xs text-slate-950 focus:outline-none cursor-pointer truncate"
                  />
                </div>

                {/* 4. PASSENGERS / VEHICLE TYPE */}
                <div className="relative bg-stone-50 hover:bg-stone-100 rounded-xl p-2 sm:p-2.5 border border-stone-200 focus-within:border-amber-400 focus-within:ring-1 focus-within:ring-amber-400/30 transition-all">
                  <label className="block text-[9.5px] font-black uppercase tracking-wider text-slate-500 mb-0.5 flex items-center space-x-1">
                    <Users className="w-3 h-3 text-slate-600" />
                    <span>Passengers</span>
                  </label>
                  <select
                    value={paxRange}
                    onChange={(e) => setPaxRange(e.target.value)}
                    className="w-full bg-transparent font-bold text-[11px] sm:text-xs text-slate-950 focus:outline-none cursor-pointer truncate"
                  >
                    <option value="all">Any (All 8 Fleet)</option>
                    <option value="1-4">1 - 4 Pax (Sedan)</option>
                    <option value="5-7">5 - 7 Pax (Innova / Crysta)</option>
                    <option value="8-14">8 - 14 Pax (14s Traveller)</option>
                    <option value="15-18">15 - 18 Pax (18s Traveller)</option>
                    <option value="19-21">19 - 21 Pax (21s Coach)</option>
                  </select>
                </div>

              </div>

              {/* Bottom Row: Quick Destinations & Search Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1">
                
                {/* Popular pills */}
                <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-0.5 scrollbar-none text-left">
                  <span className="text-[9px] font-black uppercase text-slate-500 shrink-0 mr-0.5">
                    Popular:
                  </span>
                  {POPULAR_DESTINATIONS.slice(0, 5).map(city => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => {
                        setDestination(city);
                        handleSearch();
                      }}
                      className={`px-2 py-0.5 rounded-full text-[9.5px] font-black transition-all shrink-0 cursor-pointer ${
                        destination === city
                          ? 'bg-[#8B1E1E] text-white shadow-2xs'
                          : 'bg-stone-100 hover:bg-amber-100 text-slate-700'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>

                {/* Submit Search Button (Compact) */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#8B1E1E] hover:bg-[#721818] active:scale-98 text-white font-black tracking-wider text-[11px] uppercase flex items-center justify-center space-x-2 shadow-md shadow-red-950/20 transition-all cursor-pointer group shrink-0"
                >
                  <Search className="w-3.5 h-3.5 text-[#F5B800] group-hover:scale-110 transition-transform" />
                  <span>Search Available Rides</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            </form>

          </div>
        </motion.div>

        {/* Quick Discovery Links (Compact) */}
        <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-white/90">
          <button
            onClick={onExploreFleet}
            className="hover:text-[#F5B800] underline underline-offset-4 flex items-center space-x-1 transition-colors cursor-pointer"
          >
            <span>Explore Fleet Tariff</span>
            <ArrowDownRight className="w-3.5 h-3.5" />
          </button>
          <span className="text-white/40">•</span>
          <button
            onClick={onPlanJourney}
            className="hover:text-[#F5B800] underline underline-offset-4 flex items-center space-x-1 transition-colors cursor-pointer"
          >
            <span>Custom Route Booking</span>
            <Sparkles className="w-3.5 h-3.5 text-[#F5B800] fill-current" />
          </button>
        </div>

      </div>
    </section>
  );
}
