import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = false,
  light = false
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold block mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-tight ${
            light ? 'text-offwhite' : 'text-charcoal'
          }`}
        >
          {title}
        </motion.h2>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`font-sans text-sm sm:text-base leading-relaxed mt-4 ${
            light ? 'text-beige/70' : 'text-charcoal/70'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
