import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Eye, ArrowRight, Sparkles 
} from 'lucide-react';
import { VEHICLES, FLEET_CATEGORIES } from '../data/vehicles';

export default function Pricing({ onSelectPlan, onSelectVehicle }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredVehicles = useMemo(() => {
    if (activeCategory === 'all') return VEHICLES;
    return VEHICLES.filter(v => v.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="pricing" className="relative py-10 sm:py-14 bg-[#FAF8F5] text-slate-900 overflow-hidden border-t border-stone-200">
      
      {/* Soft Ambient Studio Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-red-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* COMPACT SECTION HEADER                                         */}
        {/* ============================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 pb-3 border-b border-stone-200/90 gap-4">
          <div className="max-w-xl text-left space-y-1">
            <div className="flex items-center space-x-2 mb-0.5">
              <div className="w-7 h-[2px] bg-[#8B1E1E]" />
              <span className="text-[10.5px] font-black tracking-[0.25em] uppercase text-[#8B1E1E]">
                Mariya Travels Fleet
              </span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Tariff & Fleet Pricing
            </h2>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              100% company-owned luxury fleet. Transparent rates, verified passenger ergonomics, and mountain chauffeurs.
            </p>
          </div>

          <div className="flex items-center space-x-1.5 text-[11px] font-black uppercase tracking-wider text-slate-800 bg-white px-3.5 py-1.5 rounded-full border border-stone-300/80 shadow-2xs shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-[#8B1E1E]" />
            <span>6 Verified Fleet Models</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* COMPACT FLEET CATEGORY TABS                                    */}
        {/* ============================================================== */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 mb-5 scrollbar-none">
          {FLEET_CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-wider uppercase transition-colors shrink-0 cursor-pointer ${
                  isActive 
                    ? 'text-white' 
                    : 'text-slate-700 hover:text-slate-950 bg-white border border-stone-300/80 hover:bg-stone-50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFleetPill"
                    className="absolute inset-0 bg-[#8B1E1E] rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* COMPACT LUXURY SHOWROOM GRID (REDUCED HEIGHT & WIDTH)          */}
        {/* ============================================================== */}
        <motion.div 
          layout
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle, idx) => {
              return (
                <motion.div
                  layout
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  onClick={() => onSelectVehicle?.(vehicle)}
                  className="group rounded-2xl overflow-hidden bg-white border border-stone-200/90 hover:border-[#8B1E1E]/40 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 text-left cursor-pointer"
                >
                  {/* 1. Compact, Clear Vehicle Photo */}
                  <div className="relative h-28 sm:h-48 w-full overflow-hidden bg-stone-100">
                    <img
                      src={vehicle.image || `/vehicles/${vehicle.id}.jpg`}
                      alt={vehicle.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Floating Badges */}
                    <div className="absolute top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between gap-1 pointer-events-none">
                      <span className="px-1.5 sm:px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-slate-950 text-[8px] sm:text-[10px] font-black uppercase tracking-wider shadow-2xs border border-stone-200/80 truncate">
                        {vehicle.category}
                      </span>

                      <span className="px-1.5 sm:px-2.5 py-0.5 rounded-full bg-[#8B1E1E] text-white text-[8px] sm:text-[10px] font-black font-numeric flex items-center space-x-0.5 sm:space-x-1 shadow-2xs shrink-0">
                        <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/90" />
                        <span>{vehicle.seats}</span>
                        <span className="hidden sm:inline">Seats</span>
                      </span>
                    </div>
                  </div>

                  {/* 2. Ultra-Clean Showroom Information (Only Name, Price & View/Book Button) */}
                  <div className="p-2.5 sm:p-4.5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
                    <h3 className="font-serif text-[13px] sm:text-xl font-bold text-slate-950 leading-snug group-hover:text-[#8B1E1E] transition-colors line-clamp-2">
                      {vehicle.name}
                    </h3>

                    {/* 3. Combined Tariff & Single Action Row */}
                    <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                      <div>
                        <span className="text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-wider text-slate-400 block font-numeric">
                          Tariff
                        </span>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-base sm:text-[22px] font-numeric font-black text-slate-950 leading-none tracking-tight">
                            ₹{vehicle.pricing?.dayRent?.toLocaleString()}
                          </span>
                          <span className="text-[10px] sm:text-xs text-slate-500 font-bold font-numeric">/day</span>
                        </div>
                      </div>

                      {/* Compact Single Action Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectVehicle?.(vehicle);
                        }}
                        className="w-full sm:w-auto justify-center px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-950 group-hover:bg-[#8B1E1E] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center space-x-1 sm:space-x-1.5 transition-colors shadow-2xs cursor-pointer shrink-0"
                      >
                        <span className="sm:hidden">View</span>
                        <span className="hidden sm:inline">View & Book</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
