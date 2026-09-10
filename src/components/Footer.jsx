import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-offwhite border-t border-gold/15 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand & Slogan Column */}
        <div className="space-y-4 md:col-span-1">
          <Link to="/" className="inline-block">
            <span className="font-serif text-3xl font-light tracking-wide text-offwhite">
              Ember <span className="italic text-gold">&</span> Olive
            </span>
          </Link>
          <p className="text-xs text-beige/70 font-sans leading-relaxed">
            Where Every Bite Tells a Story. Good food. Good mood. Great memories.
          </p>
          <p className="text-xs text-gold/90 font-sans tracking-widest uppercase">
            Surat, Gujarat · Est. 2018
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold">
            Explore
          </h4>
          <ul className="space-y-2 text-sm font-sans text-beige/80">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/menu" className="hover:text-gold transition-colors">Our Menu</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Our Story & Chef</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Visual Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Reserve a Table</Link></li>
          </ul>
        </div>

        {/* Operating Hours Column */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold">
            Hours of Operation
          </h4>
          <div className="text-xs font-sans text-beige/80 space-y-2">
            <div className="flex items-start space-x-2">
              <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-offwhite">Lunch Service</p>
                <p className="text-beige/60">Mon – Sun: 12:00 PM – 3:30 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 pt-2">
              <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-offwhite">Dinner Service</p>
                <p className="text-beige/60">Mon – Sun: 7:00 PM – 11:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info & Social Column */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold">
            Visit & Contact
          </h4>
          <div className="text-xs font-sans text-beige/80 space-y-2.5">
            <p className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>102 Olive Avenue, Piplod Boulevard, Surat, Gujarat 395007</span>
            </p>
            <p className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <span>+91 98765 43210 / 0261 2345678</span>
            </p>
            <p className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <span>reservations@emberandolive.in</span>
            </p>
          </div>

          <div className="flex items-center space-x-4 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-charcoal-muted pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-beige/50">
        <p>© {new Date().getFullYear()} Ember & Olive Fine Dining. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 tracking-wider">Crafted with intention in Surat, Gujarat.</p>
      </div>
    </footer>
  );
}
