import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Clock, Mountain, MapPin, Sparkles, MessageSquare, 
  Phone, Car, Compass, ChevronRight, ChevronLeft, X, Maximize2, 
  Grid, Images, ShieldCheck, CheckCircle2, Instagram, Award, Calendar
} from 'lucide-react';
import { CLIENT_WHATSAPP_NUMBER, CONTACT_PERSON } from './BookingForm';
import { VEHICLES } from '../data/vehicles';
import TourContactModal from './TourContactModal';

export default function PackageDetailPage({ packageData, onBack, onBookVehicle }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showAllPhotosModal, setShowAllPhotosModal] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  // Scroll to top whenever page opens & trigger auto contact popup for 20 seconds
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => {
      setShowContactPopup(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, [packageData]);

  if (!packageData) return null;

  const places = packageData.placesGallery || [];

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    window.history.pushState({ modal: 'package-lightbox' }, '');
  };
  const closeLightbox = () => {
    if (window.history.state?.modal === 'package-lightbox') {
      window.history.back();
    } else {
      setSelectedImageIndex(null);
    }
  };

  useEffect(() => {
    const handlePop = (e) => {
      if (selectedImageIndex !== null && (!e.state || e.state.modal !== 'package-lightbox')) {
        setSelectedImageIndex(null);
      }
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, [selectedImageIndex]);

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + places.length) % places.length);
    }
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % places.length);
    }
  };

  const handleWhatsAppInquiry = (customNotes = '') => {
    const lines = [
      `*🌟 MADURAI MARIYA TRAVELS - TOUR PACKAGE RESERVATION 🌟*`,
      ``,
      `*Selected Tour:* ${packageData.name}`,
      `*Duration:* ${packageData.duration}`,
      `*Region / Circuit:* ${packageData.region}`,
      `*Elevation:* ${packageData.elevation}`,
      `*Recommended Fleet:* ${packageData.recommendedVehicles?.join(', ')}`,
      customNotes ? `*Spot Inquiry:* ${customNotes}` : '',
      ``,
      `Hello ${CONTACT_PERSON}, I am viewing the ${packageData.name} tour on your website. Please share the vehicle itinerary quote and package availability.`
    ].filter(Boolean);

    const url = `https://wa.me/${CLIENT_WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank');
  };

  // Find matching vehicle objects for recommendations
  const recommendedVehiclesData = VEHICLES.filter((v) => 
    packageData.recommendedVehicles?.some((name) => v.name.toLowerCase().includes(name.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans selection:bg-[#F5B800] selection:text-black overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. TOP STICKY BAR: BACK BUTTON & MARIYA TRAVELS BRANDING */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-2 sm:py-3 px-3 sm:px-8 shadow-xs">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Back to Tour Packages Button */}
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-100 hover:bg-[#8B1E1E] text-slate-800 hover:text-white font-extrabold text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-300 shadow-xs group shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Back to Tour Packages</span>
            <span className="sm:hidden">Back</span>
          </button>

          {/* Center Brand Identity */}
          <div className="flex items-center space-x-2 shrink-0">
            <div className="h-6 sm:h-8 w-auto">
              <img src="/logo.png" alt="Mariya Travels" className="h-full w-auto object-contain" />
            </div>
            <span className="hidden md:inline text-xs font-black uppercase tracking-[0.2em] text-[#8B1E1E]">
              Madurai Mariya Travels
            </span>
          </div>

          {/* Quick Contact & WhatsApp Pill */}
          <div className="flex items-center space-x-2 shrink-0">
            <a
              href="tel:+919943655680"
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-slate-300 text-slate-900 font-black text-[11px] uppercase tracking-wider hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#8B1E1E]" />
              <span>99436 55680</span>
            </a>
            <button
              onClick={() => handleWhatsAppInquiry()}
              className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-[11px] sm:text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">Book Package</span>
              <span className="sm:hidden">Book</span>
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. CINEMATIC HERO BANNER WITH BACKGROUND IMAGE */}
      {/* ========================================================================= */}
      <section className="relative h-[42vh] sm:h-[50vh] min-h-[340px] w-full overflow-hidden bg-slate-950 flex items-end">
        <img
          src={packageData.heroBanner || packageData.image}
          alt={packageData.name}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20" />

        <div className="relative w-full max-w-[96%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8 pb-8 sm:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-2.5"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#8B1E1E] text-white text-[10px] font-black uppercase tracking-wider shadow">
                {packageData.region}
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-slate-950 text-xs font-black flex items-center space-x-1.5 shadow">
                <Clock className="w-3.5 h-3.5 text-[#8B1E1E]" />
                <span className="font-numeric">{packageData.duration}</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-[#F5B800] text-slate-950 text-xs font-black flex items-center space-x-1.5 shadow">
                <Mountain className="w-3.5 h-3.5 text-slate-950" />
                <span>Elevation: {packageData.elevation}</span>
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-md break-words">
              {packageData.name}
            </h1>

            {/* Tagline */}
            <p className="text-xs sm:text-base text-amber-200 font-bold max-w-2xl leading-relaxed drop-shadow">
              {packageData.tagline}
            </p>

            {/* Route Information */}
            <div className="flex items-center space-x-2 text-xs text-white/90 font-semibold pt-1">
              <Compass className="w-3.5 h-3.5 text-[#F5B800] shrink-0" />
              <span>Route: <strong>{packageData.popularRoute}</strong></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TOUR DETAILS & ITINERARY OVERVIEW SECTION (BEFORE GALLERY) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="w-full max-w-[96%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 7 Columns: About This Tour & Assurance */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-2.5">
                <span className="w-6 h-[2.5px] bg-[#F5B800]" />
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#8B1E1E]">
                  Tour Circuit Overview
                </span>
              </div>

              <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-slate-950 tracking-tight leading-tight break-words">
                About the {packageData.name} Journey
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {packageData.description}
              </p>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-slate-200/80">
                  <span className="text-[10px] uppercase font-black text-slate-500 block">Duration</span>
                  <span className="text-xs sm:text-sm font-black font-numeric text-slate-950 mt-0.5 block">{packageData.duration}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-slate-200/80">
                  <span className="text-[10px] uppercase font-black text-slate-500 block">Altitude</span>
                  <span className="text-xs sm:text-sm font-black text-[#729227] mt-0.5 block">{packageData.elevation}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-slate-200/80">
                  <span className="text-[10px] uppercase font-black text-slate-500 block">Region</span>
                  <span className="text-xs sm:text-sm font-black text-slate-950 mt-0.5 block truncate">{packageData.region}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-slate-200/80">
                  <span className="text-[10px] uppercase font-black text-slate-500 block">Chauffeur</span>
                  <span className="text-xs sm:text-sm font-black text-[#8B1E1E] mt-0.5 block">Mountain Driver</span>
                </div>
              </div>

              {/* Assurances Checklist */}
              <div className="pt-2 space-y-2 border-t border-slate-100">
                <div className="flex items-center space-x-2.5 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#729227] shrink-0" />
                  <span>Customized pickup & drop from Madurai / Coimbatore / Trichy / Chennai.</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#729227] shrink-0" />
                  <span>Experienced ghat road mountain chauffeurs with uphill driving mastery.</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#729227] shrink-0" />
                  <span>Well-maintained clean vehicles with dual AC, music system, and pushback seats.</span>
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Itinerary Highlights Dossier Card */}
            <div className="lg:col-span-5 bg-[#FAF7F0] p-6 sm:p-7 rounded-3xl border border-amber-200/90 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-amber-200 pb-3">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#8B1E1E] flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-[#F5B800] fill-current" />
                  <span>Tour Itinerary Highlights</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F5B800] text-slate-950 text-[10px] font-black uppercase tracking-wider">
                  {places.length} Key Spots
                </span>
              </div>

              <div className="space-y-2.5">
                {packageData.highlights?.map((h, i) => (
                  <div key={i} className="flex items-start space-x-3 text-xs font-bold text-slate-900 bg-white p-3 rounded-xl border border-slate-200/70 shadow-2xs">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-[10px] font-black shrink-0">
                      {i + 1}
                    </span>
                    <span className="leading-snug">{h}</span>
                  </div>
                ))}
              </div>

              {/* Recommended Vehicles */}
              <div className="pt-2 border-t border-amber-200">
                <span className="text-[10px] uppercase font-black text-slate-600 block mb-1">Recommended Vehicles:</span>
                <p className="text-xs font-black text-[#8B1E1E]">
                  {packageData.recommendedVehicles?.join(' • ')}
                </p>
              </div>

              {/* Quick WhatsApp Inquiry CTA Button */}
              <button
                onClick={() => handleWhatsAppInquiry()}
                className="w-full py-3 rounded-xl bg-[#F5B800] hover:bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md hover:scale-[1.01]"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Book This Itinerary on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DAY-WISE ITINERARY SECTION */}
      {/* ========================================================================= */}
      {packageData.itinerary && packageData.itinerary.length > 0 && (
        <section className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-slate-200">
          <div className="w-full max-w-[96%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <div className="flex items-center space-x-2.5 mb-2">
                  <span className="w-6 h-[2.5px] bg-[#F5B800]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#8B1E1E]">
                    Day-by-Day Itinerary
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-950">
                  Detailed Tour Schedule
                </h2>
              </div>
              <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-black uppercase tracking-wider text-slate-700 shadow-sm shrink-0">
                {packageData.itinerary.length} Days Covered
              </span>
            </div>

            {/* Vertical timeline of days */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F5B800] via-[#8B1E1E]/30 to-transparent pointer-events-none" />

              <div className="space-y-6">
                {packageData.itinerary.map((day, idx) => (
                  <div key={idx} className="relative flex items-start gap-6 sm:gap-10">
                    {/* Day circle on timeline */}
                    <div className="shrink-0 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-[#8B1E1E] border-4 border-[#FAF8F5] flex flex-col items-center justify-center text-white z-10 shadow-lg">
                      <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider leading-none opacity-80">Day</span>
                      <span className="text-base sm:text-xl font-black leading-none">{day.day}</span>
                    </div>

                    {/* Day card */}
                    <div className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden mb-2">
                      {/* Day header */}
                      <div className="px-5 sm:px-7 py-4 bg-gradient-to-r from-[#8B1E1E]/5 to-transparent border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="font-serif text-base sm:text-xl font-bold text-slate-950 leading-snug">
                          {day.title}
                        </h3>
                        {day.stay && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[10px] font-black uppercase tracking-wider shrink-0">
                            🏨 {day.stay.length > 40 ? day.stay.slice(0, 38) + '…' : day.stay}
                          </span>
                        )}
                      </div>

                      {/* Places list */}
                      <div className="px-5 sm:px-7 py-4 space-y-3">
                        {day.places.map((place, pidx) => (
                          <div key={pidx} className="flex items-start gap-3">
                            <div className="mt-1 w-5 h-5 rounded-full bg-[#F5B800]/20 border border-[#F5B800]/50 flex items-center justify-center shrink-0">
                              <span className="text-[9px] font-black text-[#8B1E1E]">{pidx + 1}</span>
                            </div>
                            <div>
                              <span className="text-xs sm:text-sm font-black text-slate-900 block">{place.name}</span>
                              <span className="text-[11px] text-slate-500 font-medium leading-relaxed">{place.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. AIRBNB-STYLE LUXURY PHOTO MOSAIC (AFTER ITINERARY) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#FAF8F5]">
        <div className="w-full max-w-[96%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-2 sm:px-4">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-4 border-b border-slate-200/80 gap-3">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-6 h-[2px] bg-[#F5B800]" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8B1E1E]">
                  Sightseeing Photo Mosaic
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-950">
                Key Places Covered in this Tour
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
                Major sightseeing destinations included across {packageData.name}
              </p>
            </div>
            <p className="text-xs text-slate-600 font-semibold">
              Click any photo to inspect in full resolution
            </p>
          </div>

          {/* THE MASTER PHOTO MOSAIC (1 Hero Left + 4 Snug Mosaic Right) */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-300/80 bg-slate-950 h-[420px] sm:h-[520px] lg:h-[600px]">
            
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-1.5 sm:gap-2 h-full w-full p-1.5 sm:p-2 bg-slate-950">
              
              {/* 1. HERO PHOTO (Left Half - 2 Cols x 2 Rows) */}
              {places[0] && (
                <div
                  onClick={() => openLightbox(0)}
                  className="group relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden cursor-pointer bg-slate-900"
                >
                  <img
                    src={places[0].image}
                    alt={places[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 opacity-90 group-hover:opacity-75 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-slate-950 text-[11px] font-black uppercase tracking-wider shadow-md">
                      Featured Attraction • {places[0].category}
                    </span>
                  </div>

                  {/* Zoom Hint */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all shadow">
                    <Maximize2 className="w-4 h-4 text-[#F5B800]" />
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight drop-shadow-md">
                      {places[0].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2 drop-shadow font-medium max-w-lg">
                      {places[0].caption}
                    </p>
                  </div>
                </div>
              )}

              {/* 2. MOSAIC PHOTO 2 (Top Center - 1 Col x 1 Row) */}
              {places[1] && (
                <div
                  onClick={() => openLightbox(1)}
                  className="group relative md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 hidden md:block"
                >
                  <img
                    src={places[1].image}
                    alt={places[1].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow">
                      {places[1].category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-serif text-base sm:text-lg font-bold leading-snug drop-shadow line-clamp-1">
                      {places[1].title}
                    </h4>
                    <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-1 font-medium">
                      {places[1].caption}
                    </p>
                  </div>
                </div>
              )}

              {/* 3. MOSAIC PHOTO 3 (Top Right - 1 Col x 1 Row) */}
              {places[2] && (
                <div
                  onClick={() => openLightbox(2)}
                  className="group relative md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 hidden md:block"
                >
                  <img
                    src={places[2].image}
                    alt={places[2].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow">
                      {places[2].category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-serif text-base sm:text-lg font-bold leading-snug drop-shadow line-clamp-1">
                      {places[2].title}
                    </h4>
                    <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-1 font-medium">
                      {places[2].caption}
                    </p>
                  </div>
                </div>
              )}

              {/* 4. MOSAIC PHOTO 4 (Bottom Center - 1 Col x 1 Row) */}
              {places[3] && (
                <div
                  onClick={() => openLightbox(3)}
                  className="group relative md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 hidden md:block"
                >
                  <img
                    src={places[3].image}
                    alt={places[3].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow">
                      {places[3].category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-serif text-base sm:text-lg font-bold leading-snug drop-shadow line-clamp-1">
                      {places[3].title}
                    </h4>
                    <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-1 font-medium">
                      {places[3].caption}
                    </p>
                  </div>
                </div>
              )}

              {/* 5. MOSAIC PHOTO 5 (Bottom Right - 1 Col x 1 Row) */}
              {places[4] && (
                <div
                  onClick={() => openLightbox(4)}
                  className="group relative md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 hidden md:block"
                >
                  <img
                    src={places[4].image}
                    alt={places[4].title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow">
                      {places[4].category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-serif text-base sm:text-lg font-bold leading-snug drop-shadow line-clamp-1">
                      {places[4].title}
                    </h4>
                    <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-1 font-medium">
                      {places[4].caption}
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* AIRBNB-STYLE "SHOW ALL PHOTOS" BUTTON FLOATING BOTTOM RIGHT */}
            <button
              onClick={() => setShowAllPhotosModal(true)}
              className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 px-4 py-2.5 rounded-xl bg-white/95 hover:bg-white text-slate-950 font-black text-xs uppercase tracking-wider flex items-center space-x-2 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 border border-slate-200"
            >
              <Grid className="w-4 h-4 text-[#8B1E1E]" />
              <span>Show all {places.length} photos</span>
            </button>

          </div>

          {/* SIGHTSEEING ATTRACTIONS HORIZONTAL PILL TRAIL */}
          <div className="mt-5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#F5B800] fill-current shrink-0" />
              <span className="text-xs font-black uppercase tracking-wider text-slate-950">
                Key Sightseeing Spots Included:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {places.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="px-3 py-1 rounded-full bg-[#FAF8F5] hover:bg-[#F5B800] border border-slate-200 text-slate-800 hover:text-slate-950 text-xs font-bold transition-all"
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. RECOMMENDED FLEET FOR THIS CIRCUIT */}
      {/* ========================================================================= */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="w-full max-w-[96%] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center space-x-2.5 mb-2">
                <Car className="w-4 h-4 text-[#8B1E1E]" />
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#8B1E1E]">
                  Recommended Fleet & Tariff For This Tour
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-slate-950">
                Ideal Vehicles For {packageData.name}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-medium">
              Chauffeur-driven with mountain permits, dual AC, pushback seats, and expert mountain drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedVehiclesData.slice(0, 3).map((vehicle) => (
              <div
                key={vehicle.id}
                className="rounded-2xl bg-[#FAF8F5] border-2 border-slate-200 hover:border-[#F5B800] p-5 flex flex-col justify-between transition-all shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#8B1E1E] text-white">
                      {vehicle.seats}
                    </span>
                    <span className="text-xs font-black text-slate-950">
                      ₹{vehicle.pricing.dayRent.toLocaleString()} / Day
                    </span>
                  </div>

                  <div className="h-36 rounded-xl overflow-hidden mb-3 bg-white border border-slate-200">
                    <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>

                  <h4 className="font-serif text-lg font-bold text-slate-950">
                    {vehicle.name}
                  </h4>

                  {/* Tariff Mini Breakdown */}
                  <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-200 text-[11px] font-bold">
                    <div>
                      <span className="text-slate-500 block text-[10px]">Per KM:</span>
                      <span>₹{vehicle.pricing.perKm}/km</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Hills Allowance:</span>
                      <span>₹{vehicle.pricing.hills.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsAppInquiry(`Vehicle: ${vehicle.name} for ${packageData.name}`)}
                  className="w-full mt-4 py-2.5 rounded-xl bg-[#F5B800] hover:bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Book with {vehicle.name.split(' ')[0]}</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BOTTOM RESERVATION & RETURN BANNER */}
      {/* ========================================================================= */}
      <section className="py-14 bg-[#1E293B] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#F5B800] text-[11px] font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for {packageData.name}?</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-4xl font-bold leading-tight">
            Reserve Your Tour Package with Madurai Mariya Travels
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-medium">
            Contact <strong>{CONTACT_PERSON}</strong> directly on WhatsApp or Phone for customized schedules, multi-day hotel drops, and complete hill station tours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => handleWhatsAppInquiry()}
              className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs uppercase tracking-wider flex items-center space-x-2 shadow-lg hover:scale-105 transition-all"
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
              className="px-5 py-3 rounded-full border-2 border-white/30 hover:border-white text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              ← Back to All Packages
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SHOW ALL PHOTOS FULL-SCREEN MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showAllPhotosModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#FAF8F5] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 px-4 sm:px-8 flex items-center justify-between">
              <button
                onClick={() => setShowAllPhotosModal(false)}
                className="inline-flex items-center space-x-2 text-slate-900 font-extrabold text-xs uppercase tracking-wider hover:text-[#8B1E1E] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Tour</span>
              </button>
              <span className="font-serif text-lg font-bold text-slate-950">
                All {places.length} Sightseeing Photos • {packageData.name}
              </span>
              <button
                onClick={() => setShowAllPhotosModal(false)}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* All Photos Column Feed */}
            <div className="max-w-4xl mx-auto py-10 px-4 space-y-12">
              {places.map((p, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-black">
                    <img src={p.image} alt={p.title} className="w-full max-h-[70vh] object-cover" />
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-[10px] font-black uppercase text-[#8B1E1E] tracking-wider block">
                        {p.category}
                      </span>
                      <h4 className="font-serif text-xl font-bold text-slate-950 mt-0.5">
                        {p.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {p.caption}
                      </p>
                    </div>
                    <button
                      onClick={() => handleWhatsAppInquiry(`Inquiry about ${p.title} in ${packageData.name}`)}
                      className="px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-black uppercase tracking-wider flex items-center space-x-1.5 shrink-0 shadow"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>Inquire</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 8. LIGHTBOX MODAL WITH PREV / NEXT */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedImageIndex !== null && places[selectedImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-[#F5B800] hover:text-slate-950 transition-colors z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 p-3 rounded-full bg-white/10 text-white hover:bg-[#F5B800] hover:text-slate-950 transition-colors z-50 hidden sm:block"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 p-3 rounded-full bg-white/10 text-white hover:bg-[#F5B800] hover:text-slate-950 transition-colors z-50 hidden sm:block"
              aria-label="Next Image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Lightbox Content */}
            <div
              className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 max-h-[70vh]">
                <img
                  src={places[selectedImageIndex].image}
                  alt={places[selectedImageIndex].title}
                  className="max-h-[70vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Caption details under image */}
              <div className="mt-4 text-center text-white max-w-2xl px-4 flex flex-col items-center">
                <span className="px-3 py-0.5 rounded-full bg-[#F5B800] text-slate-950 text-[10px] font-bold uppercase tracking-wider mb-2">
                  {places[selectedImageIndex].category}
                </span>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {places[selectedImageIndex].title}
                </h4>
                <p className="text-sm text-gray-300 mt-1 font-light">
                  {places[selectedImageIndex].caption}
                </p>

                <div className="mt-3 flex items-center space-x-3">
                  <button
                    onClick={() => handleWhatsAppInquiry(`Enquiry about visiting ${places[selectedImageIndex].title} in ${packageData.name}`)}
                    className="px-5 py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-black uppercase tracking-wider flex items-center space-x-2 shadow-md hover:scale-105 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                  <span className="text-xs text-gray-400 font-semibold">
                    {selectedImageIndex + 1} of {places.length}
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 20-Second Auto Contact Enquiry Popup */}
      <TourContactModal
        isOpen={showContactPopup}
        onClose={() => setShowContactPopup(false)}
        packageName={packageData.name}
        durationSeconds={20}
      />

    </div>
  );
}
