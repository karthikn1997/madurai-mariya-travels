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

  const openLightbox  = (idx) => { 
    setLightboxIdx(idx); 
    setLightboxOpen(true); 
    window.history.pushState({ modal: 'vehicle-lightbox' }, '');
  };
  const closeLightbox = () => {
    if (window.history.state?.modal === 'vehicle-lightbox') {
      window.history.back();
    } else {
      setLightboxOpen(false);
    }
  };

  useEffect(() => {
    const handlePop = (e) => {
      if (lightboxOpen && (!e.state || e.state.modal !== 'vehicle-lightbox')) {
        setLightboxOpen(false);
      }
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, [lightboxOpen]);

  const currentPhoto = photos[activePhotoIdx] || photos[0];

  /* ── Specs ── */
  const specs = [
    { icon: Users,       label: 'Seating',      value: vehicle.specs.capacity },
    { icon: Briefcase,   label: 'Luggage',       value: vehicle.specs.luggage },
    { icon: Wind,        label: 'Climate',       value: vehicle.specs.climate },
    { icon: ShieldCheck, label: 'Ride Comfort',  value: vehicle.specs.comfort },
    { icon: Compass,     label: 'Best For',      value: vehicle.specs.range },
    { icon: MapPin,      label: 'Permit & Transit', value: 'All India Tourist Permit' },
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
          1. UNIFIED SHOWROOM HERO & INTERACTIVE GALLERY (NO ZOOMED BANNER)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-5 sm:py-10 lg:py-12 bg-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-8 space-y-4 sm:space-y-6">

          {/* Minimal Top Action Bar (Crisp Single-Line Pills on Mobile) */}
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={onBack}
              className="inline-flex items-center space-x-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-white hover:bg-[#8B1E1E] border border-stone-200 text-slate-900 hover:text-white font-extrabold text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-300 shadow-2xs group cursor-pointer whitespace-nowrap shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform shrink-0" />
              <span className="sm:hidden">Back</span>
              <span className="hidden sm:inline">Back to Fleet</span>
            </button>

            <span className="inline-flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/70 text-amber-950 text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider whitespace-nowrap shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8B1E1E] shrink-0" />
              <span className="sm:hidden">100% Owned</span>
              <span className="hidden sm:inline">100% Company-Owned</span>
            </span>
          </div>

          {/* 2-Column Showroom Layout: Left = Full Photo Carousel | Right = Vehicle Details & Tariff */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

            {/* LEFT COLUMN (7 Cols): Multi-Angle & Cabin Showcase Carousel */}
            <div
              className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl border border-stone-200/90 p-3.5 sm:p-6 shadow-md"
              onMouseEnter={() => setIsCarouselHovered(true)}
              onMouseLeave={() => setIsCarouselHovered(false)}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="text-xs font-black uppercase tracking-wider text-slate-900 truncate">
                      <span className="hidden sm:inline">Multi-Angle & Cabin Showcase</span>
                      <span className="sm:hidden">Vehicle & Cabin Views</span>
                    </span>
                    <span className="shrink-0 text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 whitespace-nowrap">
                      Auto-Swipe
                    </span>
                  </div>

                  <span className="shrink-0 text-xs font-bold text-slate-500 whitespace-nowrap tabular-nums">
                    {activePhotoIdx + 1} / {photos.length}
                  </span>
                </div>

                {/* Main Carousel Stage */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-stone-200 shadow-sm group">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentPhoto.src}
                      src={currentPhoto.src}
                      alt={`${vehicle.name} – ${currentPhoto.label}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.35 }}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => openLightbox(activePhotoIdx)}
                    />
                  </AnimatePresence>

                  {/* Gradient Scrim over photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                  {/* Angle Label Top Left */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-950 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow">
                      {currentPhoto.angle || currentPhoto.label}
                    </span>
                  </div>

                  {/* Zoom Lightbox Button Top Right */}
                  <button
                    onClick={() => openLightbox(activePhotoIdx)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-[#8B1E1E] transition-all backdrop-blur-md z-10 cursor-pointer shadow-md"
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
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <p className="text-white text-xs sm:text-sm font-bold truncate drop-shadow">
                      {currentPhoto.label}
                    </p>
                  </div>
                </div>

                {/* Clickable Multi-Angle Thumbnail Strip */}
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {photos.map((p, i) => (
                    <button
                      key={p.key}
                      onClick={() => setActivePhotoIdx(i)}
                      className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activePhotoIdx === i
                          ? 'border-[#8B1E1E] ring-2 ring-[#8B1E1E]/30 shadow-sm'
                          : 'border-stone-200 opacity-65 hover:opacity-100 hover:border-stone-400'
                      }`}
                    >
                      <img src={p.src} alt={p.label} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Indicator Dots */}
              <div className="mt-3.5 pt-3 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhotoIdx(i)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        activePhotoIdx === i ? 'w-6 bg-[#8B1E1E]' : 'w-1.5 bg-stone-200 hover:bg-stone-400'
                      }`}
                    />
                  ))}
                </div>

                <span className="text-[11px] font-bold text-slate-500">
                  {isCarouselHovered ? 'Paused on hover' : 'Auto-swiping every 3.5s'}
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN (5 Cols): Complete Vehicle Details, Tariff & Booking */}
            <div className="lg:col-span-5 flex flex-col space-y-5">
              {/* Title, Badges & Description */}
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#8B1E1E] text-white text-[10px] font-black uppercase tracking-wider shadow-2xs">
                    {vehicle.badge || 'Mariya Certified'}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-stone-200 text-slate-950 text-[11px] font-black flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5 text-[#8B1E1E]" />
                    <span>{vehicle.seats} Seats</span>
                  </span>
                </div>

                <h1 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  {vehicle.name}
                </h1>
                <p className="text-xs sm:text-sm font-bold text-[#8B1E1E]">
                  {vehicle.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {vehicle.description}
                </p>
              </div>

              {/* Clean 2x2 Royal Maroon Tariff Card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#450A0A] via-[#5C0D0D] to-[#2B0505] text-white p-4 sm:p-5 shadow-lg border border-red-950/60">
                <div className="flex items-center justify-between border-b border-white/15 pb-2.5 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F5B800]">
                    Official Tariff Schedule
                  </span>
                  <span className="text-[10px] font-bold text-stone-300">Transparent Rates</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: '1-Day Rent',                       value: `₹${vehicle.pricing.dayRent.toLocaleString()}`, gold: true },
                    { label: 'Per KM',                           value: `₹${vehicle.pricing.perKm}/km`,               gold: false },
                    { label: 'Hills Charge',                     value: `₹${vehicle.pricing.hills.toLocaleString()}`,  gold: true },
                    { label: `Above ${vehicle.pricing.limitKm} KM`, value: `₹${vehicle.pricing.aboveLimitRate}/km`,  gold: false },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/[0.06] rounded-xl p-2.5 sm:p-3 border border-white/10">
                      <span className="text-[9.5px] font-bold uppercase tracking-wider text-stone-300 block">{item.label}</span>
                      <span className={`text-base sm:text-xl font-numeric font-black tracking-tight mt-0.5 block ${item.gold ? 'text-[#F5B800]' : 'text-white'}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights Checklist */}
              {vehicle.highlights && vehicle.highlights.length > 0 && (
                <div className="grid grid-cols-2 gap-x-3 gap-y-2 pt-1">
                  {vehicle.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#729227] shrink-0 mt-0.5" />
                      <span className="text-xs font-bold text-slate-800 leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Direct Booking Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <button
                  onClick={handleWhatsApp}
                  className="justify-center px-4 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs uppercase tracking-wider flex items-center space-x-2 shadow-md hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                  <span>Instant Quote</span>
                </button>
                <a
                  href="tel:+919486875680"
                  className="justify-center px-4 py-3.5 rounded-xl bg-slate-950 hover:bg-[#8B1E1E] text-white font-black text-xs uppercase tracking-wider flex items-center space-x-2 shadow-md transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-[#F5B800] shrink-0" />
                  <span>Call Founder</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. TECHNICAL SPECIFICATIONS (FULL WIDTH - NO DUPLICATION)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="w-6 h-[2.5px] bg-[#8B1E1E]" />
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#8B1E1E]">
                  Engineering & Transit Standards
                </span>
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Technical Specifications
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-1.5">
                Every vehicle in the Mariya fleet is company-owned, speed-governed, and maintained with genuine parts for hill stations and interstate highways.
              </p>
            </div>

            <p className="text-xs text-slate-500 font-semibold shrink-0">
              * Official tariff schedule. Tolls, state permits & parking at actuals.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {specs.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-0 sm:space-x-4 p-3.5 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-slate-200/90 hover:border-[#8B1E1E]/50 transition-colors group shadow-2xs">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#8B1E1E]/10 flex items-center justify-center shrink-0 group-hover:bg-[#8B1E1E]/20 transition-colors">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B1E1E] stroke-[2.5]" />
                </div>
                <div className="min-w-0 w-full">
                  <span className="text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-wider sm:tracking-widest text-slate-500 block">{label}</span>
                  <span className="text-xs sm:text-sm font-black text-slate-950 block mt-0.5 leading-snug">{value}</span>
                </div>
              </div>
            ))}
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
