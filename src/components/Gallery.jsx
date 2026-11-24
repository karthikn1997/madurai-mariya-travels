import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon, Instagram } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="relative py-28 sm:py-36 bg-[#F6F2EA] overflow-hidden text-charcoal-900 scroll-mt-10">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-luxury-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-brand-yellow/30 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-[2.5px] bg-brand-yellow" />
              <span className="text-[11px] font-extrabold tracking-[0.3em] uppercase text-brand-yellow-700">
                Tamil Nadu Visual Chronicles
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight text-charcoal-950 tracking-tight">
              Moments & Journeys
            </h2>
            <p className="mt-3 text-sm sm:text-base text-charcoal-600 max-w-xl font-normal">
              Glimpses of misty ghat crossings, sacred Dravidian temple towers, roaring cascades, and pristine coastal sands across Tamil Nadu.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://www.instagram.com/maduraimariyatravels?igsh=MTU3MXB3cms2NHl4Zw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-extrabold text-xs tracking-wider shadow-md hover:scale-105 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              <span>@maduraimariyatravels</span>
            </a>
            <div className="text-xs text-slate-600 uppercase tracking-widest flex items-center space-x-2 font-bold">
              <ImageIcon className="w-4 h-4 text-[#F5B800]" />
              <span>Click to inspect</span>
            </div>
          </div>
        </div>

        {/* Asymmetrical Editorial Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              onClick={() => openLightbox(idx)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-brand-yellow/30 hover:border-brand-yellow shadow-md hover:shadow-2xl transition-all duration-400 bg-white ${
                idx === 0 || idx === 3 || idx === 7 ? 'sm:col-span-2 lg:col-span-2 h-[340px] sm:h-[400px]' : 'h-[340px] sm:h-[400px]'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/95 text-charcoal-900 border border-brand-yellow/40 text-[10px] font-bold uppercase tracking-wider shadow">
                  {item.category}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-charcoal-900 opacity-0 group-hover:opacity-100 transition-opacity shadow">
                <Maximize2 className="w-4 h-4 text-brand-yellow-700" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-lg sm:text-xl font-serif text-white font-medium group-hover:text-yellow-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-200 mt-1 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
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
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-brand-yellow hover:text-charcoal-950 transition-colors z-50"
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
              className="absolute left-6 p-3 rounded-full bg-white/10 text-white hover:bg-brand-yellow hover:text-charcoal-950 transition-colors z-50 hidden sm:block"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 p-3 rounded-full bg-white/10 text-white hover:bg-brand-yellow hover:text-charcoal-950 transition-colors z-50 hidden sm:block"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <div
              className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedImageIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={GALLERY_ITEMS[selectedImageIndex].image}
                alt={GALLERY_ITEMS[selectedImageIndex].title}
                className="max-h-[70vh] w-auto max-w-full rounded-xl border-2 border-brand-yellow object-contain shadow-2xl"
              />

              <div className="mt-4 text-center max-w-xl text-white">
                <span className="text-[10px] uppercase tracking-widest text-brand-yellow block mb-1 font-bold">
                  {GALLERY_ITEMS[selectedImageIndex].category}
                </span>
                <h4 className="text-xl font-serif font-medium">
                  {GALLERY_ITEMS[selectedImageIndex].title}
                </h4>
                <p className="text-xs text-gray-300 mt-1">
                  {GALLERY_ITEMS[selectedImageIndex].caption}
                </p>
                <div className="text-[11px] text-gray-400 mt-2">
                  Image {selectedImageIndex + 1} of {GALLERY_ITEMS.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
