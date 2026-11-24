import React from 'react';
import { ArrowUp, ShieldCheck, MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Footer({ onSelectVehicleName }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const INSTAGRAM_URL = "https://www.instagram.com/maduraimariyatravels?igsh=MTU3MXB3cms2NHl4Zw==";

  return (
    <footer className="relative bg-[#ECE7DA] border-t-2 border-[#F5B800]/40 text-slate-800 overflow-hidden pt-8 pb-7 sm:pt-16 sm:pb-12">
      {/* Travel-Inspired Atmosphere Background */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('/ooty-slopes.jpg')`,
          filter: 'grayscale(70%)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#ECE7DA] via-[#ECE7DA]/95 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Responsive Grid: 2-Cols on Mobile for compact height, 12-Cols on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 pb-7 sm:pb-14 border-b border-slate-300">
          
          {/* Col 1: Brand & Credibility (Full width on mobile) */}
          <div className="col-span-2 lg:col-span-4 space-y-2.5 sm:space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="h-8 sm:h-12 w-auto flex items-center justify-center">
                <img src="/logo.png" alt="Madurai Mariya Travels" className="h-full w-auto object-contain" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-serif font-black text-slate-950 leading-tight">Madurai Mariya Travels</h3>
                <p className="text-[10px] sm:text-xs text-[#8B1E1E] font-black uppercase tracking-wider mt-0.5">
                  Proprietor: S. David • Est. 2018
                </p>
              </div>
            </div>

            {/* Concise on mobile, full on tablet/desktop */}
            <p className="hidden sm:block text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
              Premium passenger transportation and tourist travel specialist across Tamil Nadu & South India. Luxury 21-seat coaches, tempo travellers, and executive chauffeur cars.
            </p>

            <div className="text-[10px] sm:text-xs text-[#8B1E1E] font-bold flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8B1E1E] shrink-0" />
              <span>Certified Mountain Drivers & GPS Equipped Fleet</span>
            </div>

            {/* Official Instagram Page Button */}
            <div className="pt-0.5 sm:pt-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-extrabold text-[10px] sm:text-xs tracking-wider shadow-sm hover:scale-105 transition-all duration-300 group"
              >
                <Instagram className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
                <span>@maduraimariyatravels</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Nav (Col 1 on mobile) */}
          <div className="col-span-1 lg:col-span-2 space-y-2 sm:space-y-3">
            <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-[#8B1E1E]">
              Navigation
            </h4>
            <ul className="space-y-1.5 sm:space-y-2.5 text-[10.5px] sm:text-xs text-slate-800 font-bold">
              <li><a href="#home" className="hover:text-[#8B1E1E] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#8B1E1E] transition-colors">About Mariya</a></li>
              <li><a href="#pricing" className="hover:text-[#8B1E1E] transition-colors">Tariff & Fleet</a></li>
              <li><a href="#packages" className="hover:text-[#8B1E1E] transition-colors">Tour Packages</a></li>
              <li><a href="#gallery" className="hover:text-[#8B1E1E] transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#8B1E1E] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Official Head Office & Contact (Col 2 on mobile) */}
          <div className="col-span-1 lg:col-span-3 space-y-2 sm:space-y-3">
            <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-[#8B1E1E]">
              Contact Office
            </h4>
            <div className="space-y-2 text-[10px] sm:text-xs text-slate-800">
              <div className="flex items-start space-x-1.5 sm:space-x-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#8B1E1E] shrink-0 mt-0.5" />
                <address className="not-italic leading-snug font-semibold text-[10px] sm:text-xs">
                  <strong className="text-slate-950 font-black block">Madurai Mariya Travels</strong>
                  45, Madha Kovil 3rd St, <br />
                  K. Pudur, Madurai - 625007.
                </address>
              </div>

              <div className="flex items-start space-x-1.5 sm:space-x-2.5 pt-0.5">
                <Phone className="w-3.5 h-3.5 text-[#F5B800] shrink-0 mt-0.5" />
                <div className="space-y-0.5 font-numeric font-bold text-[10.5px] sm:text-xs">
                  <a 
                    href="https://wa.me/919943655680" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-slate-950 hover:text-[#25D366] transition-colors"
                  >
                    +91 99436 55680 <span className="text-[9px] sm:text-[10px] text-[#25D366] font-black font-sans">(WhatsApp)</span>
                  </a>
                  <a href="tel:+919486875680" className="block text-slate-950 hover:text-[#8B1E1E] transition-colors">
                    +91 94868 75680
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-1.5 sm:space-x-2.5 pt-0.5">
                <Mail className="w-3.5 h-3.5 text-[#729227] shrink-0" />
                <a href="mailto:maduraimariya@gmail.com" className="font-bold text-slate-950 hover:text-[#8B1E1E] transition-colors text-[10px] sm:text-xs truncate block max-w-[140px] sm:max-w-none">
                  maduraimariya@gmail.com
                </a>
              </div>

              {/* Desktop Instagram link (already a pill on mobile) */}
              <div className="hidden sm:flex items-center space-x-2.5 pt-0.5">
                <Instagram className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-slate-950 hover:text-pink-600 transition-colors text-xs"
                >
                  @maduraimariyatravels
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Top Circuits (Hidden on mobile for reduced footer length, shown on desktop) */}
          <div className="hidden lg:block lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#8B1E1E]">
              Major Tour Routes
            </h4>
            <ul className="space-y-2 text-xs text-slate-700 font-semibold">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B800]" />
                <span>Madurai • Kodaikanal • Munnar</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B800]" />
                <span>Madurai • Rameswaram • Kanyakumari</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B800]" />
                <span>Ooty Nilgiri Mountain Express</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B800]" />
                <span>Kerala God's Own Country Circuit</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B800]" />
                <span>Thanjavur & Temple Heritage Tours</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Compact Font on Mobile */}
        <div className="pt-5 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs text-slate-600 gap-2.5 font-semibold text-center sm:text-left">
          <p>© {new Date().getFullYear()} Madurai Mariya Travels (Est. 2018). S. David • K. Pudur, Madurai.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-slate-300 hover:border-[#F5B800] text-slate-900 hover:text-[#8B1E1E] transition-all text-[10px] sm:text-xs bg-white/80 shadow-2xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
