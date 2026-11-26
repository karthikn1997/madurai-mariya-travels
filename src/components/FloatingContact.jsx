import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '919943655680';
const CALL_NUMBER = '+919486875680';
const WHATSAPP_MESSAGE = "Hi Mariya Travels, I'd like to enquire about a trip.";

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.004 3C8.82 3 3 8.82 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16.004 3Zm0 23.6c-1.98 0-3.92-.53-5.61-1.54l-.4-.24-3.97 1.04 1.06-3.87-.26-.4A10.56 10.56 0 0 1 5.4 16c0-5.85 4.76-10.6 10.6-10.6 5.85 0 10.6 4.75 10.6 10.6 0 5.85-4.75 10.6-10.6 10.6Zm5.81-7.94c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

// One round floating button with a slide-out label on hover (desktop)
function FloatButton({ href, label, sublabel, className, ringClassName, children, external, delay }) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={label}
      initial={{ opacity: 0, scale: 0.3, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, delay }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="group relative flex items-center justify-end"
    >
      {/* Slide-out label (desktop hover only) */}
      <span className="pointer-events-none absolute right-full mr-3 hidden md:flex flex-col items-end whitespace-nowrap rounded-xl bg-white px-4 py-2 shadow-xl shadow-black/15 border border-stone-200 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <span className="text-sm font-black text-slate-900 leading-tight">{label}</span>
        <span className="text-xs font-semibold text-slate-500 font-numeric leading-tight">{sublabel}</span>
      </span>

      {/* Pulse ring */}
      <span className={`absolute inset-0 rounded-full motion-safe:animate-ping opacity-40 ${ringClassName}`} />
      <span className={`absolute -inset-1 md:-inset-1.5 rounded-full motion-safe:animate-[float-glow_2.4s_ease-in-out_infinite] ${ringClassName} opacity-20`} />

      {/* Button */}
      <span className={`relative flex items-center justify-center w-11 h-11 md:w-[60px] md:h-[60px] rounded-full text-white shadow-lg shadow-black/30 ring-[1.5px] md:ring-2 ring-white/80 ${className}`}>
        {children}
      </span>
    </motion.a>
  );
}

export default function FloatingContact() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-4 right-3 md:bottom-8 md:right-8 z-[39] flex flex-col items-end gap-3 md:gap-5">
      <FloatButton
        href={`tel:${CALL_NUMBER}`}
        label="Call Now"
        sublabel="+91 94868 75680"
        className="bg-gradient-to-br from-[#A82424] to-[#8B1E1E]"
        ringClassName="bg-[#8B1E1E]"
        delay={1.2}
      >
        <Phone className="w-5 h-5 md:w-7 md:h-7 fill-current motion-safe:animate-[phone-ring_2.5s_ease-in-out_infinite]" />
      </FloatButton>

      <FloatButton
        href={waHref}
        label="Chat on WhatsApp"
        sublabel="+91 99436 55680"
        className="bg-gradient-to-br from-[#2BE070] to-[#1DA851]"
        ringClassName="bg-[#25D366]"
        external
        delay={1}
      >
        <WhatsAppIcon className="w-6 h-6 md:w-8 md:h-8 motion-safe:animate-[wa-bounce_3s_ease-in-out_infinite]" />
      </FloatButton>
    </div>
  );
}
