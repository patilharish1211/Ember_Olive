import React from 'react';
import { motion } from 'framer-motion';

export default function DishCard({ dish, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className="group relative bg-offwhite border border-beige-dark/50 hover:border-gold/60 transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer"
    >
      {/* Dish Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
        {dish.image ? (
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-charcoal-muted text-beige/40 font-serif text-sm italic">
            Artisanal Culinary Craft
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {dish.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 bg-charcoal/80 text-gold border border-gold/30 backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price Pill */}
        <div className="absolute bottom-4 right-4 bg-charcoal text-gold font-serif text-lg font-normal px-3 py-1 border border-gold/40 shadow-xl">
          ₹{dish.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-serif text-2xl font-normal text-charcoal group-hover:text-gold transition-colors">
            {dish.name}
          </h3>
          <p className="text-xs font-sans text-charcoal/70 leading-relaxed mt-2 line-clamp-3">
            {dish.description}
          </p>
        </div>

        <div className="pt-2 border-t border-beige flex items-center justify-between text-xs font-sans uppercase tracking-widest text-gold font-semibold">
          <span>View Details</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </motion.div>
  );
}
