import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, X, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { categories, menuItems } from '../data/menuData';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState(null);

  // Filter items
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-24 min-h-screen bg-offwhite">
      
      {/* Menu Header Banner */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-charcoal text-offwhite border-b border-gold/20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Artisanal Culinary Catalog
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide">
            Our Culinary <span className="italic text-gold">Menu</span>
          </h1>
          <p className="font-sans text-sm text-beige/70 max-w-xl mx-auto">
            Explore our curated menu of charcoal-fired delicacies, fresh house pasta, and hand-crafted desserts.
          </p>

          {/* Search Input */}
          <div className="pt-6 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a dish, spice, or ingredient..."
              className="w-full pl-12 pr-4 py-3 bg-charcoal-light border border-gold/30 text-offwhite placeholder:text-beige/40 text-xs font-sans focus:outline-none focus:border-gold transition-colors"
            />
            <Search className="w-4 h-4 text-gold absolute left-4 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-beige/50 hover:text-gold"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Sticky Category Navigation Bar */}
      <div className="sticky top-[73px] z-30 bg-offwhite/95 backdrop-blur-md border-b border-beige-dark shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar py-4 flex items-center space-x-2 md:space-x-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 text-xs font-sans uppercase tracking-widest whitespace-nowrap transition-all duration-300 relative ${
                selectedCategory === cat.id
                  ? 'text-charcoal font-bold'
                  : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              {cat.name}
              {selectedCategory === cat.id && (
                <motion.div
                  layoutId="activeCategoryUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Menu List Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <p className="font-serif text-2xl text-charcoal/60">No dishes found matching your search.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="text-xs font-sans uppercase tracking-widest text-gold font-semibold underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedDish(item)}
                  className="group cursor-pointer p-5 bg-white border border-beige-dark/50 hover:border-gold/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between space-x-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-gold transition-colors">
                          {item.name}
                        </h3>
                        {item.featured && (
                          <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {item.tags?.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] font-sans uppercase tracking-wider px-2 py-0.5 bg-beige text-charcoal/80 border border-beige-dark"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span className="font-serif text-xl font-semibold text-gold shrink-0">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="text-xs font-sans text-charcoal/70 leading-relaxed mt-3">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-beige flex items-center justify-between text-[10px] font-sans uppercase tracking-widest text-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Recipe Detail</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>

      {/* Dish Detail Modal */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-offwhite border border-gold/40 max-w-lg w-full p-6 md:p-8 relative shadow-2xl space-y-6"
            >
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 text-charcoal hover:text-gold p-1"
                aria-label="Close Dish Modal"
              >
                <X className="w-6 h-6" />
              </button>

              {selectedDish.image && (
                <div className="aspect-[16/9] overflow-hidden border border-beige-dark">
                  <img
                    src={selectedDish.image}
                    alt={selectedDish.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-3xl font-light text-charcoal">{selectedDish.name}</h3>
                  <span className="font-serif text-2xl text-gold">₹{selectedDish.price}</span>
                </div>
                
                <div className="flex gap-2">
                  {selectedDish.tags?.map((t, i) => (
                    <span key={i} className="text-[10px] font-sans uppercase tracking-wider px-2 py-0.5 bg-gold-muted text-gold border border-gold/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs font-sans text-charcoal/80 leading-relaxed">
                {selectedDish.description}
              </p>

              <div className="pt-4 border-t border-beige flex justify-between items-center text-xs font-sans">
                <span className="text-charcoal/60">Serves 1–2 Guests</span>
                <span className="text-gold uppercase tracking-wider font-semibold">Ember & Olive Special</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
