import React from 'react';
import { ArrowUp, ShieldCheck, MapPin, Phone, Mail, Instagram, MessageCircle, ChevronRight } from 'lucide-react';

const INSTAGRAM_URL = "https://www.instagram.com/maduraimariyatravels?igsh=MTU3MXB3cms2NHl4Zw==";
const WHATSAPP_URL = "https://wa.me/919943655680";

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Mariya' },
  { href: '#pricing', label: 'Tariff & Fleet' },
  { href: '#packages', label: 'Tour Packages' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact Us' },
];

const TOUR_ROUTES = [
  'Madurai • Kodaikanal • Munnar',
  'Madurai • Rameswaram • Kanyakumari',
  'Ooty Nilgiri Mountain Express',
  "Kerala God's Own Country Circuit",
  'Thanjavur & Temple Heritage Tours',
];

// Column heading with a short yellow accent bar underneath
function FooterHeading({ children }) {
  return (
    <div className="mb-4 sm:mb-6">
      <h4 className="text-[10px] sm:text-xs md:!text-[14px] font-black uppercase tracking-[0.2em] text-[#F5B800]">
        {children}
      </h4>
      <span className="block mt-2 sm:mt-3 h-0.5 w-8 rounded-full bg-[#F5B800]/70" />
    </div>
  );
}

// Round icon badge used in the contact column
function IconBadge({ children, className = '' }) {
  return (
    <span className={`flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/10 border border-white/15 shrink-0 ${className}`}>
      {children}
    </span>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#4A0A0A] via-[#3B0707] to-[#2B0505] border-t-2 border-[#F5B800] text-stone-200 overflow-hidden">
      {/* Travel-inspired background texture with subtle dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-bottom opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('/ooty-slopes.jpg')`,
          filter: 'grayscale(100%)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* ===== CTA strip ===== */}
        <div className="pt-10 sm:pt-16 lg:pt-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-8 rounded-2xl sm:rounded-3xl bg-white/[0.06] border border-white/15 backdrop-blur-sm px-5 py-6 sm:px-10 sm:py-8">
            <div>
              <p className="text-[10px] sm:text-xs md:!text-[13px] font-black uppercase tracking-[0.2em] text-[#F5B800]">
                24/7 Tour Dispatch • Madurai
              </p>
              <h3 className="mt-2 text-lg sm:text-2xl md:!text-[1.75rem] font-serif font-black text-white leading-tight">
                Planning your next trip? Let's talk.
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 rounded-full bg-[#25D366] hover:bg-[#1fb857] text-white font-black text-xs sm:text-sm md:!text-[15px] shadow-lg shadow-black/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="tel:+919486875680"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 rounded-full bg-[#F5B800] hover:bg-[#e0a800] text-slate-950 font-black text-xs sm:text-sm md:!text-[15px] shadow-lg shadow-black/20 transition-colors"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* ===== Main columns ===== */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 sm:gap-x-10 lg:gap-x-14 sm:gap-y-12 py-10 sm:py-14 lg:py-16 border-b border-white/15">

          {/* Col 1: Brand & credibility */}
          <div className="col-span-2 lg:col-span-4 text-left">
            <div className="flex items-center gap-3 sm:gap-4">
              <img src="/logo.png" alt="Madurai Mariya Travels" className="h-10 sm:h-14 w-auto object-contain drop-shadow" />
              <div>
                <h3 className="text-sm sm:text-base md:!text-xl font-serif font-black text-white leading-tight">
                  Madurai Mariya Travels
                </h3>
                <p className="mt-1 text-[10px] sm:text-xs md:!text-[13px] text-[#F5B800] font-black uppercase tracking-wider">
                  Proprietor: S. David • Est. 2018
                </p>
              </div>
            </div>

            <p className="hidden sm:block mt-6 text-sm md:!text-[16px] text-stone-300 leading-relaxed max-w-sm">
              Premium passenger transportation and tourist travel specialist across Tamil Nadu & South India. Luxury 21-seat coaches, tempo travellers, and executive chauffeur cars.
            </p>

            <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-full bg-black/20 border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2">
              <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#F5B800] shrink-0" />
              <span className="text-[10px] sm:text-xs md:!text-[14px] font-bold text-stone-200">
                Certified Mountain Drivers & GPS Equipped Fleet
              </span>
            </div>

            <div className="mt-4 sm:mt-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-extrabold text-[10px] sm:text-xs md:!text-[14px] tracking-wide shadow-sm hover:scale-105 transition-transform duration-300 group"
              >
                <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:rotate-12" />
                <span>@maduraimariyatravels</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick navigation */}
          <div className="col-span-1 lg:col-span-2">
            <FooterHeading>Navigation</FooterHeading>
            <ul className="space-y-2.5 sm:space-y-3.5">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[11px] sm:text-sm md:!text-[16px] font-semibold text-stone-300 hover:text-[#F5B800] transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#F5B800]/60 group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Head office & contact */}
          <div className="col-span-1 lg:col-span-3">
            <FooterHeading>Contact Office</FooterHeading>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <IconBadge><MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#F5B800]" /></IconBadge>
                <address className="not-italic text-[10.5px] sm:text-sm md:!text-[16px] leading-relaxed text-stone-300">
                  <strong className="block text-white font-black">Madurai Mariya Travels</strong>
                  45, Madha Kovil 3rd St,<br />
                  K. Pudur, Madurai - 625007.
                </address>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <IconBadge><Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#F5B800]" /></IconBadge>
                <div className="space-y-1 font-numeric font-bold text-[10.5px] sm:text-sm md:!text-[16px]">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block text-white hover:text-[#25D366] transition-colors">
                    +91 99436 55680{' '}
                    <span className="text-[9px] sm:text-[11px] md:!text-[12px] text-[#25D366] font-black font-sans">(WhatsApp)</span>
                  </a>
                  <a href="tel:+919486875680" className="block text-white hover:text-[#F5B800] transition-colors">
                    +91 94868 75680
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <IconBadge><Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#86efac]" /></IconBadge>
                <a
                  href="mailto:maduraimariya@gmail.com"
                  className="font-bold text-white hover:text-[#F5B800] transition-colors text-[10.5px] sm:text-sm md:!text-[16px] truncate max-w-[130px] sm:max-w-none"
                >
                  maduraimariya@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Major tour routes (desktop only, keeps mobile footer short) */}
          <div className="hidden lg:block lg:col-span-3">
            <FooterHeading>Major Tour Routes</FooterHeading>
            <ul className="space-y-3.5">
              {TOUR_ROUTES.map(route => (
                <li key={route} className="flex items-start gap-2.5 text-sm md:!text-[16px] font-semibold text-stone-300">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F5B800] shrink-0" />
                  <span>{route}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== Bottom bar ===== */}
        <div className="py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1.5">
            <p className="text-[10px] sm:text-xs md:!text-[14px] text-stone-400 font-medium">
              © {new Date().getFullYear()} Madurai Mariya Travels (Est. 2018). S. David • K. Pudur, Madurai.
            </p>
            <p className="text-[10px] sm:text-xs md:!text-[13px] text-stone-500 font-medium">
              Powered by{' '}
              <a
                href="https://www.infovo.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-black text-[#F5B800] tracking-wide hover:text-white underline-offset-4 hover:underline transition-colors"
              >
                Infovo Technologies
              </a>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/20 hover:border-[#F5B800] text-white hover:text-[#F5B800] transition-colors text-[10px] sm:text-xs md:!text-[14px] font-semibold bg-white/10 backdrop-blur-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
