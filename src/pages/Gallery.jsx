import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '../components/Lightbox';
import { galleryCategories, galleryItems } from '../data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = galleryItems.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <div className="pt-24 pb-24 bg-offwhite min-h-screen">
      
      {/* Gallery Header */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-charcoal text-offwhite border-b border-gold/20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Visual Ambiance & Moments
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide">
            The Gallery <span className="italic text-gold">Collection</span>
          </h1>
          <p className="font-sans text-sm text-beige/70 max-w-xl mx-auto">
            Explore photos of our dish preparations, intimate dining rooms, and memorable celebrations at Ember & Olive.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-center flex-wrap gap-2 md:gap-4">
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-2.5 text-xs font-sans uppercase tracking-widest transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-gold text-charcoal font-semibold shadow-md'
                : 'bg-white text-charcoal/70 border border-beige-dark hover:border-gold hover:text-charcoal'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Filterable Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative overflow-hidden bg-charcoal border border-beige-dark cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className={`relative w-full ${item.aspect}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-offwhite">
                    <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold font-semibold mb-1">
                      VIEW FULLSCREEN →
                    </span>
                    <h3 className="font-serif text-xl font-light">{item.title}</h3>
                    <p className="text-xs font-sans text-beige/70 mt-1">{item.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

    </div>
  );
}
