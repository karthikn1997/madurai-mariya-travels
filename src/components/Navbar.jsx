import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, MessageCircle, Instagram } from 'lucide-react';
import { CLIENT_WHATSAPP_NUMBER, SECONDARY_PHONE, INSTAGRAM_URL } from './BookingForm';

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tariff', href: '#pricing' },
    { name: 'Tour Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 shadow-sm transition-all duration-300">
        {/* ============================================================== */}
        {/* 1. TOP MINI NAVBAR (KUTTY NAVBAR WITH WHATSAPP & INSTAGRAM)    */}
        {/* ============================================================== */}
        <div className="bg-[#721818] text-white border-b border-red-900/40 text-[10.5px] sm:text-[11px] font-semibold py-1.5 px-3 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            {/* Left: WhatsApp & Phone */}
            <div className="flex items-center space-x-2.5 sm:space-x-5">
              <a
                href={`https://wa.me/${CLIENT_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-white/95 hover:text-[#F5B800] transition-colors"
                title="Chat with Mariya Travels on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-current shrink-0" />
                <span className="font-numeric font-black tracking-wide text-[10.5px] sm:text-[11.5px]">+91 99436 55680</span>
                <span className="hidden sm:inline text-white/70 text-[10px] font-medium">(WhatsApp)</span>
              </a>

              <a
                href={`tel:${SECONDARY_PHONE.replace(/[^0-9+]/g, '')}`}
                className="hidden md:flex items-center space-x-1.5 text-white/90 hover:text-[#F5B800] transition-colors"
                title="Call Mariya Travels"
              >
                <Phone className="w-3 h-3 text-[#F5B800] shrink-0" />
                <span className="font-numeric font-bold tracking-wide">+91 94868 75680</span>
              </a>
            </div>

            {/* Right: Instagram Profile */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              <span className="hidden lg:inline text-white/65 text-[10px] uppercase tracking-wider">
                Madurai 24/7 Tour Dispatch
              </span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-white/95 hover:text-[#F5B800] transition-colors group shrink-0"
                title="Follow Mariya Travels on Instagram"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-300 group-hover:scale-110 transition-transform shrink-0" />
                <span className="font-bold tracking-wide hidden sm:inline">@maduraimariyatravels</span>
                <span className="font-bold tracking-wide sm:hidden text-[10px]">@mariyatravels</span>
              </a>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. MAIN NAVBAR (WITH CRISP HD BRAND LOGO)                      */}
        {/* ============================================================== */}
        <div className="bg-white/95 backdrop-blur-xl border-b border-slate-200 py-2 sm:py-2.5">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-6">
            
            {/* Brand Logo on Navbar Left */}
            <a href="#home" className="flex items-center space-x-2 shrink-0 group py-0.5" title="Mariya Travels Home">
              {/* Desktop / Tablet View: Full Official Logo with Speed Wings */}
              <img 
                src="/logo.png" 
                alt="Madurai Mariya Travels Logo" 
                className="hidden sm:block h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />

              {/* Mobile View: Circular Emblem + "Mariya Travels" Bold Text */}
              <div className="flex sm:hidden items-center space-x-2">
                <img 
                  src="/emblem.png" 
                  alt="Mariya Travels Emblem" 
                  className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-2xs" 
                />
                <span className="font-serif font-black text-sm tracking-wide text-slate-950 uppercase">
                  Mariya <span className="text-[#8B1E1E]">Travels</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-wider font-extrabold text-slate-800 hover:text-[#8B1E1E] transition-all duration-200 relative py-1 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F5B800] hover:after:w-full after:transition-all after:duration-250"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action CTA & Mobile Toggle */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              {/* Quick Book Pill on Mobile */}
              <button
                onClick={() => onBookClick?.()}
                className="sm:hidden px-3 py-1.5 rounded-full bg-[#F5B800] hover:bg-yellow-400 active:scale-95 text-slate-950 font-black text-[10px] tracking-wider uppercase transition-all shadow-xs cursor-pointer"
              >
                Book
              </button>

              {/* Desktop Book Ride Button */}
              <button
                onClick={() => onBookClick?.()}
                className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#F5B800] hover:bg-yellow-400 text-slate-950 font-extrabold text-xs tracking-wider uppercase transition-all duration-300 shadow-md shadow-amber-400/40 hover:scale-105 shrink-0 whitespace-nowrap cursor-pointer"
              >
                <span>Book Your Ride</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-lg text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu - Pure solid white background with zero transparent glass wash */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 lg:hidden flex flex-col justify-between p-6 pt-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between border-b border-brand-yellow/30 pb-4">
            <div className="flex items-center space-x-2.5">
              <img src="/emblem.png" alt="Mariya Travels Emblem" className="h-9 w-9 object-contain drop-shadow-2xs" />
              <span className="font-serif font-black text-base tracking-wide text-slate-950 uppercase">
                Mariya <span className="text-[#8B1E1E]">Travels</span>
              </span>
            </div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-brand-maroon font-bold">
              Menu
            </span>
          </div>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-brand-charcoal-900 hover:text-brand-yellow-700 transition-colors flex items-center justify-between font-medium group"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-brand-yellow-600 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-brand-yellow/30 pt-6 space-y-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick?.();
            }}
            className="w-full py-3.5 rounded-full bg-brand-yellow text-brand-charcoal-950 font-bold tracking-widest text-xs uppercase flex items-center justify-center space-x-2 shadow-lg shadow-brand-yellow/30 hover:bg-yellow-400 transition-colors"
          >
            <span>Book Your Ride</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <p className="text-center text-[11px] tracking-wider text-brand-charcoal-500 font-medium">
            MARIYA TRAVELS • TAMIL NADU TOURISM & CHAUFFEUR
          </p>
          <p className="text-center text-[11px] text-brand-charcoal-500 font-medium">
            Powered by{' '}
            <a
              href="https://www.infovo.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-[#8B1E1E] hover:underline underline-offset-4"
            >
              Infovo Technologies
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
