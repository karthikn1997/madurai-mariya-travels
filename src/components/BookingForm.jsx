import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Phone, MapPin, Calendar, Car, CheckCircle2, 
  Instagram, ArrowRight, ShieldCheck, Clock, Send, Sparkles 
} from 'lucide-react';
import { VEHICLES } from '../data/vehicles';

/**
 * CLIENT OFFICIAL CONFIGURATION - MADURAI MARIYA TRAVELS
 */
export const CLIENT_WHATSAPP_NUMBER = '919943655680';
export const SECONDARY_PHONE = '+91 94868 75680';
export const CONTACT_PERSON = 'S. David';
export const OFFICE_ADDRESS = '45, Madha Kovil 3rd Street, K. Pudur, Madurai - 625007';
export const CONTACT_EMAIL = 'maduraimariya@gmail.com'; 
export const INSTAGRAM_URL = 'https://www.instagram.com/maduraimariyatravels?igsh=MTU3MXB3cms2NHl4Zw==';

export default function BookingForm({ initialVehicle, initialEstimate }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    travelDate: '',
    vehicle: initialVehicle || '21 Seat AC Luxury Coach',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialVehicle) {
      setFormData((prev) => ({ ...prev, vehicle: initialVehicle }));
    }
  }, [initialVehicle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      `*🌟 MADURAI MARIYA TRAVELS - TRIP BOOKING ENQUIRY 🌟*`,
      ``,
      `*Guest Name:* ${formData.name || 'Not provided'}`,
      `*Contact Phone:* ${formData.phone || 'Not provided'}`,
      `*Pickup Location:* ${formData.pickup || 'Not specified'}`,
      `*Destination:* ${formData.destination || 'Not specified'}`,
      `*Travel Date:* ${formData.travelDate || 'Not specified'}`,
      `*Vehicle Required:* ${formData.vehicle}`,
      initialEstimate ? `*Estimated Fare:* ~₹${initialEstimate.toLocaleString()}` : '',
      formData.message ? `*Special Notes:* ${formData.message}` : '',
      ``,
      `_Sent via Madurai Mariya Travels Web Portal_`
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const messageText = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${CLIENT_WHATSAPP_NUMBER}?text=${messageText}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-[#FAF8F5] overflow-hidden text-slate-900 border-t border-slate-200/80">
      
      {/* Background Soft Ambience */}
      <div className="absolute top-10 left-10 w-[24rem] h-[24rem] bg-amber-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[24rem] h-[24rem] bg-red-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-6 border-b-2 border-slate-200 gap-4">
          <div>
            <div className="flex items-center space-x-2.5 mb-2">
              <span className="w-6 h-[2px] bg-[#F5B800]" />
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#8B1E1E]">
                Madurai Mariya Travels • Est. 2018
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold leading-tight text-slate-950 tracking-tight">
              Plan Your Journey
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-700 max-w-lg font-medium">
              Fast, dependable vehicle dispatch across Tamil Nadu. Connect directly with <strong className="text-slate-950 font-bold">{CONTACT_PERSON}</strong>.
            </p>
          </div>

          {/* Quick Direct-Dial Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <a
              href="tel:+919486875680"
              className="w-full sm:w-auto justify-center inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider shadow-sm hover:scale-105 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#8B1E1E]" />
              <span>Call: 94868 75680</span>
            </a>
          </div>
        </div>

        {/* Master Reservation Pavilion - Two Sleek Balanced Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT: Compact Booking Console (7 Cols) */}
          <div className="lg:col-span-7 p-4 sm:p-7 bg-white rounded-2xl border border-slate-200/90 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-[#8B1E1E] text-[11px] font-black uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#F5B800] fill-current" />
                <span>Instant Travel Quotation</span>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-amber-50 border border-[#F5B800] text-center space-y-3 my-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F5B800] text-slate-950 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h4 className="text-xl font-serif font-black text-slate-950">WhatsApp Routing Initiated!</h4>
                  <p className="text-xs text-slate-700 font-semibold max-w-sm mx-auto">
                    Your itinerary has been sent to <strong>{CONTACT_PERSON}</strong> (+91 99436 55680) on WhatsApp.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-5 py-2 rounded-full bg-slate-950 text-white font-extrabold text-[11px] uppercase tracking-widest hover:bg-[#8B1E1E] transition-colors"
                  >
                    Edit & Submit Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#F5B800] focus:bg-white text-slate-950 text-xs sm:text-sm font-bold transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800 mb-1.5">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 98400 12345"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#F5B800] focus:bg-white text-slate-950 text-xs sm:text-sm font-bold transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Pickup & Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800 mb-1.5">
                        Pickup Location *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="pickup"
                          required
                          value={formData.pickup}
                          onChange={handleChange}
                          placeholder="e.g. Madurai / K. Pudur"
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#F5B800] focus:bg-white text-slate-950 text-xs sm:text-sm font-bold transition-all outline-none"
                        />
                        <MapPin className="w-3.5 h-3.5 text-[#8B1E1E] absolute left-3 top-3" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800 mb-1.5">
                        Destination *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="destination"
                          required
                          value={formData.destination}
                          onChange={handleChange}
                          placeholder="e.g. Kodaikanal / Munnar"
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#F5B800] focus:bg-white text-slate-950 text-xs sm:text-sm font-bold transition-all outline-none"
                        />
                        <MapPin className="w-3.5 h-3.5 text-[#729227] absolute left-3 top-3" />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Travel Date & Vehicle Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800 mb-1.5">
                        Travel Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="travelDate"
                          required
                          value={formData.travelDate}
                          onChange={handleChange}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#F5B800] focus:bg-white text-slate-950 text-xs sm:text-sm font-bold transition-all outline-none cursor-pointer"
                        />
                        <Calendar className="w-3.5 h-3.5 text-[#8B1E1E] absolute left-3 top-3" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800 mb-1.5">
                        Choose Vehicle *
                      </label>
                      <div className="relative">
                        <select
                          name="vehicle"
                          value={formData.vehicle}
                          onChange={handleChange}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#F5B800] focus:bg-white text-slate-950 text-xs sm:text-sm font-bold transition-all outline-none cursor-pointer appearance-none"
                        >
                          {VEHICLES.map((v) => (
                            <option key={v.id} value={v.name} className="bg-white text-slate-950">
                              {v.name} ({v.seats} Seats)
                            </option>
                          ))}
                        </select>
                        <Car className="w-3.5 h-3.5 text-[#8B1E1E] absolute left-3 top-3 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Special Notes */}
                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800 mb-1.5">
                      Trip Notes / Special Requirements
                    </label>
                    <textarea
                      name="message"
                      rows="2"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Hill station round-trip, luggage details, pickup time..."
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#F5B800] focus:bg-white text-slate-950 text-xs font-medium transition-all outline-none placeholder:text-slate-400"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black tracking-widest text-xs uppercase flex items-center justify-center space-x-2.5 shadow-lg shadow-green-500/25 hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Send Message to WhatsApp (99436 55680)</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                    <p className="text-[11px] text-center text-slate-600 font-bold mt-2">
                      Direct WhatsApp message will be delivered to <strong className="text-slate-950">{CONTACT_PERSON} (+91 99436 55680)</strong> for instant response.
                    </p>
                  </div>

                </form>
              )}
            </div>
          </div>

          {/* RIGHT: The Executive Chauffeur Desk (5 Cols) - Separate Luxury Ivory Card */}
          <div className="lg:col-span-5 bg-[#FAF7F0] text-slate-900 p-6 sm:p-7 rounded-2xl border border-amber-200/70 shadow-lg flex flex-col justify-between">
            
            <div className="space-y-4">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-200/90 pb-3">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-auto flex items-center justify-center">
                    <img src="/logo.png" alt="Madurai Mariya Travels" className="h-full w-auto object-contain" />
                  </div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F5B800] text-slate-950 shadow-sm">
                  Est. 2018
                </span>
              </div>

              {/* Title & Proprietor */}
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8B1E1E]">
                  Head Office & Concierge
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-950 mt-0.5">
                  Madurai Mariya Travels
                </h3>
                <p className="text-xs text-slate-700 mt-0.5 font-semibold">
                  Proprietor: <strong className="text-slate-950 font-black">{CONTACT_PERSON}</strong>
                </p>
              </div>

              {/* Direct Info Cards - Compact */}
              <div className="space-y-2.5">
                {/* Phone 1 */}
                <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#8B1E1E] flex items-center justify-center shrink-0 border border-amber-200">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 font-extrabold">Primary & WhatsApp</span>
                    <a href="tel:+919943655680" className="block text-sm font-black text-slate-950 hover:text-[#8B1E1E] transition-colors">
                      +91 99436 55680
                    </a>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 font-extrabold">Secondary Hotline</span>
                    <a href="tel:+919486875680" className="block text-sm font-black text-slate-950 hover:text-[#8B1E1E] transition-colors">
                      +91 94868 75680
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#8B1E1E] flex items-center justify-center shrink-0 border border-red-200">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 font-extrabold">Registered Head Office</span>
                    <address className="not-italic text-xs text-slate-900 font-bold leading-snug">
                      45, Madha Kovil 3rd Street, <br />
                      K. Pudur, Madurai - 625007.
                    </address>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#729227] flex items-center justify-center shrink-0 border border-emerald-200">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 font-extrabold">Official Email</span>
                    <a href="mailto:maduraimariya@gmail.com" className="block text-xs font-black text-slate-950 hover:text-[#8B1E1E] transition-colors">
                      maduraimariya@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram Follow Card */}
              <div className="p-3 rounded-xl bg-white border border-pink-200 shadow-sm flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500 flex items-center justify-center text-white shadow-sm">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-950">@maduraimariyatravels</p>
                    <p className="text-[10px] text-slate-500 font-semibold">Tour reels & photos</p>
                  </div>
                </div>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-slate-950 hover:bg-[#8B1E1E] text-white font-black text-[10px] tracking-wider uppercase transition-colors"
                >
                  Follow
                </a>
              </div>
            </div>

            {/* Bottom Service Assurance */}
            <div className="pt-4 border-t border-slate-200/80 mt-4 flex items-center space-x-2 text-[11px] text-slate-700 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#729227] shrink-0" />
              <span>Certified Mountain Drivers & GPS Equipped Fleet</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
