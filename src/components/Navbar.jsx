import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, Utensils, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigate
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-4 shadow-2xl'
            : 'bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-2">
            <span className="font-serif text-2xl md:text-3xl font-normal tracking-wide text-offwhite group-hover:text-gold transition-colors">
              Ember <span className="italic text-gold">&</span> Olive
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-sans tracking-widest uppercase transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-gold font-medium'
                      : 'text-offwhite/80 hover:text-offwhite'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Book A Table CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-5 py-2.5 text-xs font-sans uppercase tracking-widest text-charcoal bg-gold hover:bg-gold-light transition-all duration-300 rounded-none inline-flex items-center space-x-2 shadow-lg shadow-gold/10 hover:shadow-gold/25"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Table</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-offwhite p-2 focus:outline-none focus:text-gold"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 text-gold" />
            ) : (
              <MenuIcon className="w-7 h-7 text-offwhite" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 bg-charcoal text-offwhite flex flex-col justify-between p-8 md:hidden"
          >
            {/* Top Spacing for close icon header */}
            <div className="h-16" />

            {/* Menu Links */}
            <div className="flex flex-col space-y-6 my-auto">
              <span className="text-xs uppercase tracking-[0.3em] text-gold/80 font-sans">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + idx * 0.08, duration: 0.4 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `font-serif text-4xl block tracking-wide transition-colors ${
                        isActive ? 'text-gold italic' : 'text-offwhite hover:text-gold'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Bottom Mobile Details & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="border-t border-gold/20 pt-6 space-y-4"
            >
              <Link
                to="/contact"
                className="w-full py-3.5 text-center text-xs font-sans uppercase tracking-widest text-charcoal bg-gold block font-semibold"
              >
                Book a Table Now
              </Link>
              <div className="text-center text-xs text-beige/60 font-sans tracking-wider">
                Surat, Gujarat · +91 98765 43210
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
