import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Phone, MessageSquare, Calendar, Car, 
  MapPin, CheckCircle2, ShieldCheck, Clock, Send, Sparkles 
} from 'lucide-react';
import { CLIENT_WHATSAPP_NUMBER, SECONDARY_PHONE, CONTACT_PERSON } from './BookingForm';
import { VEHICLES } from '../data/vehicles';

export default function TourContactModal({ 
  isOpen, 
  onClose, 
  packageName = 'South India Tour Circuit',
  durationSeconds = 30 
}) {
  const [timeLeft, setTimeLeft] = useState(durationSeconds);
  const [isInteracting, setIsInteracting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: 'Madurai (Any Hub / Doorstep)',
    travelDate: '',
    vehicle: '21 Seat AC Luxury Coach',
    message: ''
  });

  // Reset timer whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeLeft(durationSeconds);
      setIsInteracting(false);
    }
  }, [isOpen, durationSeconds]);

  // 20-second countdown timer that automatically closes the modal
  useEffect(() => {
    if (!isOpen || isInteracting) return;

    if (timeLeft <= 0) {
      onClose();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, timeLeft, isInteracting, onClose]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setIsInteracting(true);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `*🌟 MADURAI MARIYA TRAVELS – TOUR PACKAGE ENQUIRY 🌟*`,
      ``,
      `*Package / Circuit:* ${packageName}`,
      `*Guest Name:* ${formData.name || 'Not provided'}`,
      `*Mobile Number:* ${formData.phone || 'Not provided'}`,
      `*Pickup Location:* ${formData.pickup}`,
      `*Travel Date:* ${formData.travelDate || 'Flexible / To be planned'}`,
      `*Vehicle Required:* ${formData.vehicle}`,
      formData.message ? `*Notes / Requirements:* ${formData.message}` : '',
      ``,
      `Hello ${CONTACT_PERSON}, I am interested in this tour package. Please share available vehicles, complete itinerary, and custom quote.`
    ].filter(Boolean);

    const url = `https://wa.me/${CLIENT_WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank');
    onClose();
  };

  const progressPercent = (timeLeft / durationSeconds) * 100;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        
        {/* Dark Glassmorphic Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200 z-10 text-slate-900 my-auto text-left"
          onMouseEnter={() => setIsInteracting(true)}
        >
          {/* Top Auto-dismiss Progress Bar */}
          <div className="w-full h-1.5 bg-stone-100 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C]"
              style={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3, ease: 'linear' }}
            />
          </div>

          {/* Header Bar */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-stone-900 via-slate-900 to-slate-950 text-white flex items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/20 shrink-0">
                <img src="/logo.png" alt="Mariya Travels Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                    Quick Reservation & Quote
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <h3 className="font-serif font-black text-base sm:text-lg text-white line-clamp-1">
                  {packageName}
                </h3>
              </div>
            </div>

            {/* Close Button "X" */}
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
              aria-label="Close Enquiry Dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Countdown Notification Pill */}
          <div className="px-5 py-2 bg-amber-50/80 border-b border-amber-200/50 flex items-center justify-between text-xs text-amber-900 font-bold">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>
                {isInteracting
                  ? 'Timer paused while typing'
                  : `Auto-dismissing in ${timeLeft}s`}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-[11px] underline underline-offset-2 text-stone-600 hover:text-black cursor-pointer"
            >
              Close Now
            </button>
          </div>

          {/* Form Body */}
          <form onSubmit={handleWhatsAppSubmit} className="p-5 sm:p-6 space-y-3.5">
            <p className="text-xs text-slate-600 font-medium">
              Share your trip details for an instant custom itinerary quote with driver & fuel included.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Name */}
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-600 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] bg-stone-50/50"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-600 mb-1">
                  Mobile / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] bg-stone-50/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Travel Date */}
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-600 mb-1">
                  Travel Date
                </label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] bg-stone-50/50"
                />
              </div>

              {/* Vehicle Preference */}
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-600 mb-1">
                  Vehicle Preference
                </label>
                <select
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] bg-stone-50/50 font-bold"
                >
                  <option value="21 Seat AC Luxury Coach">21 Seat AC Luxury Coach</option>
                  <option value="21 Seat Non-AC Coach">21 Seat Non-AC Coach</option>
                  <option value="18 Seat Force Traveller">18 Seat Force Traveller</option>
                  <option value="14 Seat Force Traveller">14 Seat Force Traveller</option>
                  <option value="Toyota Innova Crysta">Toyota Innova Crysta</option>
                  <option value="Toyota Innova">Toyota Innova</option>
                  <option value="Swift Dzire / Sedan">Swift Dzire / Sedan</option>
                </select>
              </div>
            </div>

            {/* Special Notes (Optional) */}
            <div>
              <label className="block text-[10px] font-black uppercase text-slate-600 mb-1">
                Any Specific Stop / Notes (Optional)
              </label>
              <input
                type="text"
                name="message"
                placeholder="e.g. 15 Pax group, need morning temple darshan"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] bg-stone-50/50"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
              <button
                type="submit"
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#1ebd59] hover:to-[#0f7569] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Submit & Chat on WhatsApp</span>
              </button>

              <a
                href={`tel:${SECONDARY_PHONE.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 border border-slate-300 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Call Us</span>
              </a>
            </div>

            {/* Privacy & Trust micro-badge */}
            <div className="pt-1 flex items-center justify-center space-x-3 text-[10px] text-slate-500 font-semibold">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>100% Verified Fleet</span>
              </span>
              <span>•</span>
              <span>Direct Founder Coordination</span>
            </div>
          </form>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
