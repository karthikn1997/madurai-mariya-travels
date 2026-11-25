import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, ArrowRight, 
  BookOpen, Luggage, Sparkles, MapPin, 
  Compass, ExternalLink 
} from 'lucide-react';
import { CLIENT_WHATSAPP_NUMBER, CONTACT_PERSON } from './BookingForm';

export const FEATURED_DESTINATIONS = [
  {
    id: 'kanyakumari',
    name: 'Kanyakumari',
    state: 'Tamil Nadu',
    image: '/destinations/kanyakumari-card.jpg',
    packageId: 'madurai-rameswaram-kanyakumari-trivandrum'
  },
  {
    id: 'rameshwaram',
    name: 'Rameshwaram',
    state: 'Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1706932642959-97cdde19ef0b?auto=format&fit=crop&w=800&q=80',
    packageId: 'madurai-rameshwaram'
  },
  {
    id: 'thanjavur',
    name: 'Thanjavur & Srirangam',
    state: 'Tamil Nadu',
    image: '/gallery/thanjavur-temple.jpg',
    packageId: 'madurai-pillayarpatti-srirangam-thanjavur'
  },
  {
    id: 'ooty',
    name: 'Ooty (Nilgiris)',
    state: 'Tamil Nadu',
    image: '/destinations/ooty-nilgiris-card.jpg',
    packageId: 'madurai-kodai-palani-ooty-cbe'
  },
  {
    id: 'thekkady',
    name: 'Thekkady',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    packageId: 'madurai-thekkady-munnar'
  },
  {
    id: 'kodaikanal',
    name: 'Kodaikanal',
    state: 'Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    packageId: 'kodaikanal-palani-madurai'
  },
  {
    id: 'munnar',
    name: 'Munnar',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    packageId: 'madurai-thekkady-munnar'
  },
  {
    id: 'palani',
    name: 'Palani Hills',
    state: 'Tamil Nadu',
    image: '/gallery/palani-murugan-temple.jpg',
    packageId: 'kodaikanal-palani-madurai'
  }
];

export default function Destinations({ onSelectDestination, onViewAll }) {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll every 2 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: 230, behavior: 'smooth' });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleDestinationClick = (dest) => {
    if (onSelectDestination) {
      onSelectDestination(dest);
    } else {
      const el = document.getElementById('packages');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations-showcase" className="relative py-16 sm:py-24 overflow-hidden text-slate-900 border-b border-stone-200">
      
      {/* Scenic Mountain & Sky Background Image */}
      {/* High-clarity scenic background with minimal subtle overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/destinations-bg.jpg"
          alt="Scenic Mountain Peaks & Clear Sky"
          className="w-full h-full object-cover object-center"
        />
        {/* Lighter, clearer overlay without heavy wash or fog so scenic background stays visible and crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-white/30" />
      </div>

      {/* Expanded Container Width to remove large left void on wide screens */}
      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10 xl:gap-14">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: TITLE, STATS & CTA                                */}
          {/* ============================================================== */}
          <div className="w-full lg:w-[380px] xl:w-[410px] shrink-0 text-left space-y-4">
            
            {/* Kicker */}
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#8B1E1E]">
              EXPLORE TAMIL NADU
            </p>

            {/* Main Heading with Deep Royal Dark Red Font (#8B1E1E) */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-[#0F172A] leading-[1.12] tracking-tight">
              Tamil Nadu <br />
              <span className="text-[#8B1E1E]">Destinations</span>
            </h2>

            {/* Description Subtext */}
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-sm">
              From misty Western Ghats hill stations to sacred coastal heritage temples, discover Tamil Nadu's most cherished travel destinations.
            </p>

            {/* 3 Stats Columns with Dark Red Accents (#8B1E1E) */}
            <div className="pt-2 flex items-center justify-between sm:justify-start sm:space-x-7 border-t border-stone-200/80 w-full">
              
              {/* Stat 1 */}
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-red-100/70 border border-red-200/50 flex items-center justify-center text-[#8B1E1E] shrink-0">
                  <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="font-black text-xs sm:text-base text-slate-950 leading-none">38</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 font-bold mt-0.5">Districts</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-red-100/70 border border-red-200/50 flex items-center justify-center text-[#8B1E1E] shrink-0">
                  <Luggage className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="font-black text-xs sm:text-base text-slate-950 leading-none">70+</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 font-bold mt-0.5">Packages</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-red-100/70 border border-red-200/50 flex items-center justify-center text-[#8B1E1E] shrink-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                </div>
                <div>
                  <div className="font-black text-xs sm:text-base text-slate-950 leading-none">Unique</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 font-bold mt-0.5">Tours</div>
                </div>
              </div>

            </div>

            {/* Primary Dark Red CTA Button -> Navigates to Tour Packages */}
            <div className="pt-2 sm:pt-3">
              <button
                type="button"
                onClick={() => {
                  if (onViewAll) {
                    onViewAll();
                  } else {
                    const el = document.getElementById('packages');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#8B1E1E] hover:bg-[#721818] active:scale-98 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-red-950/20 flex items-center space-x-2 transition-all hover:scale-102 cursor-pointer"
              >
                <span>View All Tamil Nadu Destinations</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Carousel Navigation Arrow Controls */}
            <div className="pt-2 flex items-center space-x-2.5">
              <button
                type="button"
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border border-stone-300/80 bg-white hover:bg-stone-100 text-slate-700 hover:text-black flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
                aria-label="Previous Destinations"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border border-stone-300/80 bg-white hover:bg-stone-100 text-slate-700 hover:text-black flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
                aria-label="Next Destinations"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: HORIZONTAL SCROLL CAROUSEL OF VERTICAL CARDS     */}
          {/* ============================================================== */}
          <div className="w-full lg:flex-1 overflow-hidden relative">
            
            {/* Scrollable Container with 2-sec Auto Scroll */}
            <div
              ref={scrollContainerRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex items-center space-x-4 sm:space-x-5 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth scrollbar-none snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {FEATURED_DESTINATIONS.map((dest) => (
                <div
                  key={dest.id}
                  onClick={() => handleDestinationClick(dest)}
                  className="group relative w-[170px] sm:w-[200px] md:w-[220px] h-[280px] sm:h-[320px] md:h-[345px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 shrink-0 cursor-pointer snap-start bg-slate-900 border border-stone-200/80 hover:border-[#8B1E1E]"
                >
                  {/* High Res Scenic Photo */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

                  {/* Bottom Content Row: Destination Name + White Circle Arrow Button */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                    <div className="text-left">
                      <h3 className="font-serif text-sm sm:text-base font-bold text-white drop-shadow-md leading-tight group-hover:text-amber-300 transition-colors">
                        {dest.name}
                      </h3>
                    </div>

                    {/* Circular White Button with Arrow (Dark Red on Hover) */}
                    <div className="w-8 h-8 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-md group-hover:bg-[#8B1E1E] group-hover:text-white transition-all duration-300 shrink-0 group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
