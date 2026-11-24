import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Users, Wind, Briefcase, ShieldCheck, Compass,
  CheckCircle2, ArrowRight, Sparkles, Car, MapPin, MessageSquare,
  Phone, X, ChevronLeft, ChevronRight, Maximize2, Star, Play, Pause
} from 'lucide-react';
import { CLIENT_WHATSAPP_NUMBER, CONTACT_PERSON } from './BookingForm';

export default function VehicleDetailPage({ vehicle, onBack, onBookNow }) {
  const photos = (vehicle?.gallery && vehicle.gallery.length > 0)
    ? vehicle.gallery.map((g, idx) => ({
        key: `photo-${g.id || idx}`,
        label: g.label,
        angle: g.angle || g.label,
        src: g.src,
      }))
    : [
        { key: 'exterior', label: 'Exterior View', angle: 'Exterior View', src: vehicle?.image },
        ...(vehicle?.interiorImage ? [{ key: 'interior', label: 'Cabin Interior', angle: 'Cabin Interior', src: vehicle.interiorImage }] : []),
      ];

  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx]   = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  /* scroll to top on mount or vehicle change */
  useEffect(() => { 
    setActivePhotoIdx(0);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }, [vehicle?.id]);

  /* Automatic swipe / slide every 3.5 seconds (pauses on hover) */
  useEffect(() => {
    if (isCarouselHovered || lightboxOpen || photos.length <= 1) return;
    const interval = setInterval(() => {
      setActivePhotoIdx(prev => (prev + 1) % photos.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isCarouselHovered, lightboxOpen, photos.length]);

  /* keyboard nav for lightbox and carousel */
  useEffect(() => {
    const handler = (e) => {
      if (lightboxOpen) {
        if (e.key === 'Escape')      closeLightbox();
        if (e.key === 'ArrowRight')  setLightboxIdx(i => (i + 1) % photos.length);
        if (e.key === 'ArrowLeft')   setLightboxIdx(i => (i - 1 + photos.length) % photos.length);
      } else {
        if (e.key === 'ArrowRight')  setActivePhotoIdx(i => (i + 1) % photos.length);
        if (e.key === 'ArrowLeft')   setActivePhotoIdx(i => (i - 1 + photos.length) % photos.length);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen, photos.length]);

  if (!vehicle) return null;

  const openLightbox  = (idx) => { setLightboxIdx(idx); setLightboxOpen(true); };
  const closeLightbox = ()    => setLightboxOpen(false);

  const currentPhoto = photos[activePhotoIdx] || photos[0];

  /* ── Specs ── */
  const specs = [
    { icon: Users,       label: 'Seating',      value: vehicle.specs.capacity },
    { icon: Briefcase,   label: 'Luggage',       value: vehicle.specs.luggage },
    { icon: Wind,        label: 'Climate',       value: vehicle.specs.climate },
    { icon: ShieldCheck, label: 'Ride Comfort',  value: vehicle.specs.comfort },
    { icon: Compass,     label: 'Best For',      value: vehicle.specs.range },
    { icon: MapPin,      label: 'Registration',  value: vehicle.registrationNumber },
  ];

  /* ── WhatsApp ── */
  const handleWhatsApp = () => {
    const msg = [
      `*🚗 MARIYA TRAVELS – VEHICLE BOOKING ENQUIRY*`,
      ``,
      `*Vehicle:* ${vehicle.name}`,
      `*Category:* ${vehicle.category?.toUpperCase()}`,
      `*Seats:* ${vehicle.seats}`,
      `*1-Day Rent:* ₹${vehicle.pricing.dayRent.toLocaleString()}`,
      `*Per KM:* ₹${vehicle.pricing.perKm}`,
      ``,
      `Hello ${CONTACT_PERSON}, I would like to book the ${vehicle.name}. Please confirm availability and schedule.`,
    ].join('\n');
    window.open(`https://wa.me/${CLIENT_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans selection:bg-[#F5B800] selection:text-black overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════
          1. STICKY HEADER
      ══════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 px-4 sm:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          <button
            onClick={onBack}
            className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-slate-100 hover:bg-[#8B1E1E] text-slate-800 hover:text-white font-extrabold text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-300 shadow-xs group shrink-0 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Back to Fleet</span>
            <span className="sm:hidden">Back</span>
          </button>

          <div className="hidden md:flex items-center space-x-2.5">
            <img src="/logo.png" alt="Mariya Travels" className="h-8 w-auto object-contain" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8B1E1E]">
              Madurai Mariya Travels
            </span>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <a
              href="tel:+919943655680"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-slate-300 text-slate-900 font-black text-[11px] uppercase tracking-wider hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#8B1E1E]" />
              <span>99436 55680</span>
            </a>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Book Now</span>
            </button>
          </div>

        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════
          2. SCENIC TOURIST DESTINATION HERO BANNER (MOUNTAIN PASS / HILL STATION)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative h-[38vh] sm:h-[46vh] min-h-[300px] w-full overflow-hidden bg-slate-950 flex items-end">
        {/* Scenic Tourist Place Background Image */}
        <img
          src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=2000&q=85"
          alt="Scenic Western Ghats Misty Tea Hills & Travel Highway"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,30,30,0.25)_0%,transparent_60%)] pointer-events-none" />

        {/* Content on Hero Banner */}
        <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 pb-7 sm:pb-9 z-10 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-2"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#8B1E1E] text-white text-[10px] font-black uppercase tracking-widest shadow">
                {vehicle.badge || 'Mariya Certified'}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/95 text-slate-950 text-xs font-black flex items-center space-x-1.5 shadow">
                <Users className="w-3.5 h-3.5 text-[#8B1E1E]" />
                <span>{vehicle.seats} Seats</span>
              </span>
              {vehicle.registrationNumber && (
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-mono font-bold tracking-wider border border-white/30">
                  {vehicle.registrationNumber}
                </span>
              )}
              <span className="px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-bold uppercase tracking-wider">
                100% Owned Fleet
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight drop-shadow-md">
              {vehicle.name}
            </h1>
            <p className="text-xs sm:text-sm text-stone-200 font-medium max-w-2xl leading-relaxed drop-shadow">
              {vehicle.tagline}
            </p>
          </motion.div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={handleWhatsApp}
              className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Instant Quote</span>
            </button>
            <a
              href="tel:+919486875680"
              className="px-4 py-2.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-black text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-md transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#8B1E1E]" />
              <span>Call Founder</span>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. PRICING STRIP
      ══════════════════════════════════════════════════════════ */}
      <div className="bg-[#1E293B] text-white border-y border-slate-700/60 shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
          {[
            { label: '1-Day Rent',                       value: `₹${vehicle.pricing.dayRent.toLocaleString()}`, gold: true },
            { label: 'Per KM',                           value: `₹${vehicle.pricing.perKm}/km`,               gold: false },
            { label: 'Hills Charge',                     value: `₹${vehicle.pricing.hills.toLocaleString()}`,  gold: true },
            { label: `Above ${vehicle.pricing.limitKm} KM`, value: `₹${vehicle.pricing.aboveLimitRate}/km`,  gold: false },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-4 px-3 text-center">
              <span className="text-[9.5px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{item.label}</span>
              <span className={`text-lg sm:text-2xl font-numeric font-black tracking-tight ${item.gold ? 'text-amber-400' : 'text-white'}`}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          4. DEDICATED VEHICLE SHOWCASE & AUTO-SWIPING GALLERY
             (LEFT: FULL VEHICLE CUTOUT STAGE | RIGHT: AUTO-SLIDING MULTI-ANGLE CAROUSEL)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-16 bg-[#FBF9F5] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* LEFT COLUMN: Clean Showroom Stage (Full Uncut Vehicle Cutout) */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8B1E1E]" />
                    <span className="text-xs font-black uppercase tracking-widest text-[#8B1E1E]">
                      Official Showroom Cutout
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-mono font-bold border border-slate-200">
                    {vehicle.registrationNumber || 'TN 59 REGISTERED'}
                  </span>
                </div>

                {/* Vehicle Real Photo Showcase */}
                <div className="relative h-60 sm:h-72 w-full rounded-2xl flex items-center justify-center border border-slate-200 overflow-hidden bg-slate-900 group">
                  {/* Real Vehicle Photo with Background */}
                  <img
                    src={vehicle.image || vehicle.gallery?.[0]?.src || `/vehicles/${vehicle.id}.jpg`}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="mt-5 space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-slate-900">{vehicle.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {vehicle.description}
                  </p>
                </div>
              </div>

              {/* Fast Feature Badges */}
              <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                  <span className="text-[9px] uppercase font-bold text-slate-500 block">Captains</span>
                  <span className="text-xs font-black font-numeric text-slate-900">{vehicle.seats} Pushback Seats</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                  <span className="text-[9px] uppercase font-bold text-slate-500 block">Luggage</span>
                  <span className="text-xs font-black text-slate-900">{vehicle.specs.luggage}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center col-span-2 sm:col-span-1">
                  <span className="text-[9px] uppercase font-bold text-slate-500 block">Climate</span>
                  <span className="text-xs font-black text-[#8B1E1E]">High-Capacity AC</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Auto-Swiping Multi-Angle & Cabin Interior Carousel */}
            <div 
              className="lg:col-span-6 flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 p-4 sm:p-8 shadow-sm"
              onMouseEnter={() => setIsCarouselHovered(true)}
              onMouseLeave={() => setIsCarouselHovered(false)}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="flex items-center space-x-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="text-xs font-black uppercase tracking-wider text-slate-900 truncate">
                      <span className="hidden sm:inline">Multi-Angle & Cabin Showcase</span>
                      <span className="sm:hidden">Cabin Showcase</span>
                    </span>
                    <span className="shrink-0 text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 whitespace-nowrap">
                      Auto-Swipe
                    </span>
                  </div>

                  <span className="shrink-0 text-xs font-bold text-slate-500 whitespace-nowrap tabular-nums">
                    {activePhotoIdx + 1} of {photos.length}
                  </span>
                </div>

                {/* Main Carousel Stage */}
                <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md group">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentPhoto.src}
                      src={currentPhoto.src}
                      alt={`${vehicle.name} – ${currentPhoto.label}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => openLightbox(activePhotoIdx)}
                    />
                  </AnimatePresence>

                  {/* Gradient Scrim over photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Angle Label Top Left */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-950 text-xs font-black uppercase tracking-wider shadow">
                      {currentPhoto.angle || currentPhoto.label}
                    </span>
                  </div>

                  {/* Zoom Lightbox Button Top Right */}
                  <button
                    onClick={() => openLightbox(activePhotoIdx)}
                    className="absolute top-3.5 right-3.5 p-2 rounded-full bg-black/60 text-white hover:bg-[#8B1E1E] transition-all backdrop-blur-md z-10 cursor-pointer shadow-md"
                    title="Zoom Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Manual Prev / Next Arrow Controls */}
                  <button
                    onClick={() => setActivePhotoIdx(i => (i - 1 + photos.length) % photos.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-[#8B1E1E] text-white backdrop-blur-md transition-all z-10 cursor-pointer shadow-md opacity-80 group-hover:opacity-100"
                    title="Previous View"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActivePhotoIdx(i => (i + 1) % photos.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-[#8B1E1E] text-white backdrop-blur-md transition-all z-10 cursor-pointer shadow-md opacity-80 group-hover:opacity-100"
                    title="Next View"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Photo Title bottom left */}
                  <div className="absolute bottom-3.5 left-4 right-4 z-10">
                    <p className="text-white text-xs sm:text-sm font-bold truncate drop-shadow">
                      {currentPhoto.label}
                    </p>
                  </div>
                </div>

                {/* Clickable Multi-Angle Thumbnail Strip */}
                <div className="mt-3.5 grid grid-cols-4 gap-2">
                  {photos.map((p, i) => (
                    <button
                      key={p.key}
                      onClick={() => setActivePhotoIdx(i)}
                      className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activePhotoIdx === i
                          ? 'border-[#8B1E1E] ring-2 ring-[#8B1E1E]/30 scale-102 shadow-sm'
                          : 'border-slate-200 opacity-65 hover:opacity-100 hover:border-slate-400'
                      }`}
                    >
                      <img src={p.src} alt={p.label} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Indicator Dots */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhotoIdx(i)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        activePhotoIdx === i ? 'w-6 bg-[#8B1E1E]' : 'w-1.5 bg-slate-200 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>

                <span className="text-[11px] font-bold text-slate-500">
                  {isCarouselHovered ? 'Paused on hover' : 'Auto-swiping every 3.5s'}
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. TECHNICAL SPECS & INCLUDED AMENITIES
      ══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* LEFT: Specifications */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center space-x-2.5 mb-2.5">
                  <span className="w-6 h-[2.5px] bg-[#8B1E1E]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#8B1E1E]">
                    Engineering & Transit Standards
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mb-2">
                  Technical Specifications
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Every vehicle in the Mariya fleet is company-owned, speed-governed, and maintained with genuine parts for hill stations and interstate highways.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {specs.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center space-x-4 p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200/90 hover:border-[#8B1E1E]/50 transition-colors group shadow-2xs">
                    <div className="w-10 h-10 rounded-xl bg-[#8B1E1E]/10 flex items-center justify-center shrink-0 group-hover:bg-[#8B1E1E]/20 transition-colors">
                      <Icon className="w-4.5 h-4.5 text-[#8B1E1E] stroke-[2.5]" style={{ width: 18, height: 18 }} />
                    </div>
                    <div>
                      <span className="text-[9.5px] font-black uppercase tracking-widest text-slate-500 block">{label}</span>
                      <span className="text-sm font-black text-slate-950 block mt-0.5">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Amenities + WhatsApp booking card */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#FAF8F5] p-4 sm:p-7 rounded-3xl border border-slate-200 shadow-sm">

                <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-4">
                  <div className="flex items-center space-x-1.5 min-w-0">
                    <Sparkles className="w-4 h-4 text-[#8B1E1E] shrink-0" />
                    <span className="text-[11px] font-black uppercase tracking-wider sm:tracking-widest text-[#8B1E1E] truncate">
                      <span className="hidden sm:inline">Included Passenger Amenities</span>
                      <span className="sm:hidden">Passenger Amenities</span>
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#8B1E1E] text-white text-[10px] font-black uppercase tracking-wider whitespace-nowrap shrink-0">
                    {vehicle.highlights.length} Features
                  </span>
                </div>

                <div className="space-y-2.5 mb-5">
                  {vehicle.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-[#8B1E1E] shrink-0 fill-current" />
                      <span className="text-xs font-bold text-slate-900">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Quick book CTA */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3.5 rounded-xl bg-[#8B1E1E] hover:bg-[#721818] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md hover:scale-[1.01] cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Book {vehicle.name} on WhatsApp</span>
                </button>
              </div>

              {/* Tariff note */}
              <p className="text-xs text-slate-500 font-semibold text-center px-2">
                * Official tariff schedule. Tolls, state permits & parking at actuals.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. BOTTOM RESERVATION BANNER
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#1E293B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-amber-400 text-[11px] font-black uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Ready to Ride in {vehicle.name}?</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold leading-tight">
            Reserve Your Vehicle with Madurai Mariya Travels
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-medium">
            Contact <strong>{CONTACT_PERSON}</strong> directly for customized schedules, multi-day bookings, and complete tour packages.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleWhatsApp}
              className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs uppercase tracking-wider flex items-center space-x-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Book via WhatsApp (+91 99436 55680)</span>
            </button>

            <a
              href="tel:+919486875680"
              className="px-5 py-3 rounded-full bg-white text-slate-950 hover:bg-amber-50 font-black text-xs uppercase tracking-wider flex items-center space-x-2 shadow-md transition-colors"
            >
              <Phone className="w-4 h-4 text-[#8B1E1E]" />
              <span>Call: 94868 75680</span>
            </a>

            <button
              onClick={onBack}
              className="px-5 py-3 rounded-full border-2 border-white/30 hover:border-white text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              ← Back to All Vehicles
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. FULL-SCREEN LIGHTBOX
      ══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between text-white z-10" onClick={e => e.stopPropagation()}>
              <div>
                <span className="text-xs font-bold text-slate-400">
                  {lightboxIdx + 1} of {photos.length}
                </span>
                <h3 className="text-sm font-bold text-white truncate max-w-xs sm:max-w-md">
                  {photos[lightboxIdx]?.label}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Center Image */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden" onClick={e => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={photos[lightboxIdx]?.src}
                  src={photos[lightboxIdx]?.src}
                  alt={photos[lightboxIdx]?.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl"
                />
              </AnimatePresence>

              {/* Prev / Next Controls */}
              {photos.length > 1 && (
                <>
                  <button
                    onClick={() => setLightboxIdx(i => (i - 1 + photos.length) % photos.length)}
                    className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/60 hover:bg-white text-white hover:text-black transition-colors cursor-pointer shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setLightboxIdx(i => (i + 1) % photos.length)}
                    className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/60 hover:bg-white text-white hover:text-black transition-colors cursor-pointer shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Thumbnail Strip */}
            <div className="flex items-center justify-center space-x-2 overflow-x-auto py-2 z-10" onClick={e => e.stopPropagation()}>
              {photos.map((p, i) => (
                <button
                  key={p.key}
                  onClick={() => setLightboxIdx(i)}
                  className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    lightboxIdx === i ? 'border-[#8B1E1E] scale-110' : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={p.src} alt={p.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
