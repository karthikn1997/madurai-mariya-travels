import React from 'react';
import { ArrowUp, ShieldCheck, MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Footer({ onSelectVehicleName }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const INSTAGRAM_URL = "https://www.instagram.com/maduraimariyatravels?igsh=MTU3MXB3cms2NHl4Zw==";

  return (
    <footer className="relative bg-[#ECE7DA] border-t-2 border-[#F5B800]/40 text-slate-800 overflow-hidden pt-16 pb-12">
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
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 sm:pb-16 border-b border-slate-300">
          
          {/* Col 1: Brand & Credibility */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center space-x-3.5">
              <div className="h-12 w-auto flex items-center justify-center">
                <img src="/logo.png" alt="Madurai Mariya Travels" className="h-full w-auto object-contain" />
              </div>
            </div>

            <div>
              <h3 className="text-base font-serif font-black text-slate-950">Madurai Mariya Travels</h3>
              <p className="text-xs text-[#8B1E1E] font-black uppercase tracking-wider mt-0.5">
                Proprietor: S. David • Est. 2018
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
              Premium passenger transportation and tourist travel specialist across Tamil Nadu & South India. Luxury 21-seat coaches, tempo travellers, and executive chauffeur cars.
            </p>

            <div className="pt-1 text-xs text-[#8B1E1E] font-bold flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#8B1E1E] shrink-0" />
              <span>Certified Mountain Drivers & GPS Equipped Fleet</span>
            </div>

            {/* Official Instagram Page Button */}
            <div className="pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-extrabold text-xs tracking-wider shadow-md hover:scale-105 transition-all duration-300 group"
              >
                <Instagram className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span>@maduraimariyatravels</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Nav */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#8B1E1E]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-800 font-bold">
              <li><a href="#home" className="hover:text-[#8B1E1E] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#8B1E1E] transition-colors">About Mariya</a></li>
              <li><a href="#pricing" className="hover:text-[#8B1E1E] transition-colors">Tariff & Vehicles</a></li>
              <li><a href="#packages" className="hover:text-[#8B1E1E] transition-colors">Tour Packages</a></li>
              <li><a href="#gallery" className="hover:text-[#8B1E1E] transition-colors">Tamil Nadu Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#8B1E1E] transition-colors">Contact & Booking</a></li>
            </ul>
          </div>

          {/* Col 3: Official Head Office & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#8B1E1E]">
              Head Office Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-800">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed font-semibold">
                  <strong className="text-slate-950 font-black block">Madurai Mariya Travels</strong>
                  45, Madha Kovil 3rd Street, <br />
                  K. Pudur, Madurai - 625007.
                </address>
              </div>

              <div className="flex items-start space-x-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#F5B800] shrink-0 mt-0.5" />
                <div className="space-y-1 font-numeric font-bold">
                  <a 
                    href="https://wa.me/919943655680" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-slate-950 hover:text-[#25D366] transition-colors"
                  >
                    +91 99436 55680 <span className="text-[10px] text-[#25D366] font-black font-sans">(WhatsApp)</span>
                  </a>
                  <a href="tel:+919486875680" className="block text-slate-950 hover:text-[#8B1E1E] transition-colors">
                    +91 94868 75680
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#729227] shrink-0" />
                <a href="mailto:maduraimariya@gmail.com" className="font-bold text-slate-950 hover:text-[#8B1E1E] transition-colors">
                  maduraimariya@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-2.5 pt-1">
                <Instagram className="w-4 h-4 text-pink-600 shrink-0" />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-slate-950 hover:text-pink-600 transition-colors"
                >
                  Instagram: @maduraimariyatravels
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Top Circuits */}
          <div className="lg:col-span-3 space-y-3">
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

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4 font-semibold">
          <p>© {new Date().getFullYear()} Madurai Mariya Travels (Est. 2018). All rights reserved. S. David • K. Pudur, Madurai.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 rounded-full border border-slate-300 hover:border-[#F5B800] text-slate-900 hover:text-[#8B1E1E] transition-all text-xs bg-white/80 shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
