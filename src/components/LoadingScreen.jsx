import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 45); // ~1.5s total time

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center text-offwhite px-6"
        >
          {/* Brand Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans block mb-3 opacity-90">
              Surat · Est. 2018
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide font-light">
              Ember <span className="italic text-gold">&</span> Olive
            </h1>
            <p className="text-xs sm:text-sm font-sans tracking-widest text-beige/60 uppercase mt-2">
              Where Every Bite Tells a Story
            </p>
          </motion.div>

          {/* Gold Hairline Progress Line */}
          <div className="w-48 sm:w-64 h-[1px] bg-charcoal-muted mt-10 relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-gold"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="text-[10px] tracking-widest uppercase font-sans text-gold/70 mt-3 font-mono"
          >
            {progress}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
