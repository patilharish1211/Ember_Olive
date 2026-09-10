import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ items = [], currentIndex, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 md:p-8 text-offwhite"
      >
        {/* Header Controls */}
        <div className="w-full flex items-center justify-between text-xs font-sans tracking-widest text-gold uppercase z-10">
          <span>{currentIndex + 1} / {items.length} — {currentItem.category}</span>
          <button
            onClick={onClose}
            className="p-2 border border-gold/30 hover:bg-gold hover:text-charcoal transition-colors rounded-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Image View */}
        <div className="relative max-w-5xl max-h-[75vh] w-full flex items-center justify-center my-auto">
          {/* Previous Button */}
          <button
            onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
            className="absolute left-2 md:-left-12 p-3 bg-charcoal/60 hover:bg-gold hover:text-charcoal border border-gold/30 text-gold transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <motion.img
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            src={currentItem.image}
            alt={currentItem.title || 'Gallery item'}
            className="max-h-[75vh] max-w-full object-contain border border-gold/20 shadow-2xl"
          />

          {/* Next Button */}
          <button
            onClick={() => onNavigate((currentIndex + 1) % items.length)}
            className="absolute right-2 md:-right-12 p-3 bg-charcoal/60 hover:bg-gold hover:text-charcoal border border-gold/30 text-gold transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer Caption */}
        <div className="text-center max-w-xl space-y-1">
          <h3 className="font-serif text-2xl font-light text-offwhite">{currentItem.title}</h3>
          {currentItem.caption && (
            <p className="text-xs font-sans text-beige/70">{currentItem.caption}</p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
