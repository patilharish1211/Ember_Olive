import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowDown, ChevronRight, Award, ShieldCheck, HeartHandshake, Sparkles, MapPin, Clock, Phone } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import DishCard from '../components/DishCard';
import Lightbox from '../components/Lightbox';
import { menuItems } from '../data/menuData';
import { testimonials } from '../data/testimonialsData';
import { galleryItems } from '../data/galleryData';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const signatureDishes = menuItems.filter(item => item.featured);
  const previewGallery = galleryItems.slice(0, 4);

  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      title: 'Fresh Organic Ingredients',
      desc: 'Locally sourced daily from artisanal Gujarat farms and hand-picked specialty importers.'
    },
    {
      icon: <Award className="w-6 h-6 text-gold" />,
      title: 'Expert Master Chefs',
      desc: 'Led by Chef Arjun Mehta with over 15 years of Michelin-caliber global kitchen experience.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
      title: 'Thoughtful Flavours',
      desc: 'Every recipe is an intricate harmony of heritage spices and contemporary culinary art.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-gold" />,
      title: 'Warm Hospitality',
      desc: 'Gracious, attentive dining service designed to make every guest feel uniquely cherished.'
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[650px] w-full flex items-center justify-center bg-charcoal text-offwhite overflow-hidden">
        {/* Parallax Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="Ember and Olive Atmosphere"
            className="w-full h-full object-cover opacity-35 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20 flex flex-col items-center">
          
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-3 mb-6 px-4 py-1.5 border border-gold/30 bg-charcoal/60 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans">
              EST. 2018 · SURAT, GUJARAT
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-wide leading-[1.1] mb-6 max-w-4xl"
          >
            Where Every Bite <span className="italic text-gold">Tells a Story.</span>
          </motion.h1>

          {/* Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-sm sm:text-base md:text-lg text-beige/80 max-w-2xl leading-relaxed mb-10"
          >
            Experience quietly luxurious dining, artisanal charcoal-fired cuisine, and unforgettable moments in the heart of Surat.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-charcoal text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl shadow-gold/10"
            >
              Explore Menu
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 border border-offwhite/40 hover:border-gold hover:text-gold text-offwhite text-xs font-sans uppercase tracking-[0.2em] transition-all duration-300 backdrop-blur-sm"
            >
              Book a Table
            </Link>
          </motion.div>

          {/* 4.9★ Social Proof Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12 flex items-center space-x-3 text-xs font-sans text-beige/70"
          >
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold" />
              ))}
            </div>
            <span><strong className="text-offwhite font-medium">4.9★</strong> from 1,200+ Guest Reviews</span>
          </motion.div>

        </div>

        {/* Scroll Indicator Cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 flex flex-col items-center space-y-1 text-[10px] tracking-widest uppercase"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </section>

      {/* 2. EDITORIAL INTRODUCTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-offwhite">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal leading-tight">
              More Than Just A Meal. <br />
              <span className="italic text-gold">An Awakening of Senses.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal/70 leading-relaxed">
              Founded in 2018, Ember & Olive was born from a singular passion: honoring age-old culinary traditions while reimagining them through modern techniques. Every plate is crafted with raw ember heat, fresh cold-pressed olive oils, and hand-selected local harvests.
            </p>
            <p className="font-sans text-sm sm:text-base text-charcoal/70 leading-relaxed">
              Whether you are sharing an intimate dinner or hosting a landmark celebration, our sanctuary in Surat promises an atmosphere of quiet luxury and genuine warmth.
            </p>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center space-x-3 text-xs font-sans uppercase tracking-[0.2em] font-semibold text-charcoal hover:text-gold transition-colors group"
              >
                <span>Discover Our Story</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Asymmetric Overlapping Images */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Primary Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="border border-beige-dark p-2 bg-white shadow-2xl relative z-10"
              >
                <img
                  src="/images/interior.jpg"
                  alt="Ember & Olive Interior"
                  className="w-full aspect-[4/3] object-cover"
                />
              </motion.div>

              {/* Overlapping Secondary Image */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute -bottom-8 -right-4 sm:-right-8 w-2/3 border-2 border-gold/40 p-2 bg-charcoal z-20 shadow-2xl hidden sm:block"
              >
                <img
                  src="/images/truffle-pasta.jpg"
                  alt="Craft Dish Plating"
                  className="w-full aspect-[4/3] object-cover"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SIGNATURE DISHES */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-beige-light border-y border-beige-dark/40">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Curated Culinary Creations"
            title="Signature Dishes"
            description="A glimpse into our most celebrated kitchen masterpieces, prepared with rare spices and refined techniques."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-charcoal hover:bg-charcoal-light text-gold text-xs font-sans uppercase tracking-[0.2em] transition-all duration-300 border border-gold/30"
            >
              <span>View Full Menu</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CINEMATIC FULL-WIDTH PARALLAX BAND */}
      <section className="relative py-36 bg-charcoal text-offwhite overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/interior.jpg"
            alt="Kitchen Ambience"
            className="w-full h-full object-cover opacity-25 fixed-bg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            The Craft
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-wide leading-tight">
            Crafted With Intention. <br />
            <span className="italic text-gold">Served With Passion.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-beige/70 max-w-xl mx-auto">
            From our wood-fired clay ovens to delicate truffle glazes, we honor every single component that lands on your plate.
          </p>
        </div>
      </section>

      {/* 5. WHY EMBER & OLIVE (4-COLUMN FEATURE LIST) */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="The Standard of Excellence"
            title="Why Guests Choose Us"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-white border border-beige-dark/50 hover:border-gold/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gold-muted flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal">{feat.title}</h3>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CHEF STORY (SPLIT SCREEN) */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-charcoal text-offwhite border-t border-gold/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Chef Image Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="border border-gold/30 p-2 bg-charcoal-light shadow-2xl relative"
            >
              <img
                src="/images/chef.jpg"
                alt="Executive Chef Arjun Mehta"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-charcoal/90 backdrop-blur-md p-4 border border-gold/30">
                <p className="font-serif text-xl text-offwhite">Chef Arjun Mehta</p>
                <p className="text-xs font-sans text-gold uppercase tracking-widest">Head Culinary Director · 15+ Yrs Exp</p>
              </div>
            </motion.div>
          </div>

          {/* Story Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              The Kitchen Story
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight">
              Driven by Curiosity. <br />
              <span className="italic text-gold">Rooted in Authenticity.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-beige/80 leading-relaxed">
              "Cooking is not merely combining ingredients; it is a dialogue between smoke, spice, and memory. At Ember & Olive, we treat every dish as a canvas of Indian heritage elevated by refined global culinary art."
            </p>
            <p className="font-sans text-sm sm:text-base text-beige/60 leading-relaxed">
              Before founding Ember & Olive in Surat, Chef Arjun trained across acclaimed dining houses in London and Dubai. His signature philosophy revolves around slow ember roasting and minimal intervention to let natural flavors shine.
            </p>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center space-x-3 px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 text-xs font-sans uppercase tracking-[0.2em]"
              >
                <span>Meet Our Chef & Story</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS CAROUSEL */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-offwhite border-b border-beige-dark">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Guest Testimonials
          </span>

          <div className="relative min-h-[220px] flex items-center justify-center">
            {testimonials.map((test, idx) => (
              <div
                key={test.id}
                className={`transition-all duration-700 space-y-6 ${
                  idx === activeTestimonial ? 'opacity-100 scale-100 block' : 'opacity-0 scale-95 hidden'
                }`}
              >
                <div className="flex justify-center text-gold space-x-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold" />
                  ))}
                </div>
                <blockquote className="font-serif text-2xl sm:text-3xl font-light text-charcoal italic leading-relaxed">
                  "{test.quote}"
                </blockquote>
                <div>
                  <p className="font-sans text-sm font-semibold text-charcoal">{test.author}</p>
                  <p className="font-sans text-xs text-charcoal/60">{test.role} · {test.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center space-x-3 pt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeTestimonial ? 'bg-gold w-8' : 'bg-beige-dark hover:bg-gold/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. GALLERY PREVIEW */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                Visual Ambiance
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal mt-2">
                Moments Captured
              </h2>
            </div>
            <Link
              to="/gallery"
              className="mt-4 md:mt-0 text-xs font-sans uppercase tracking-[0.2em] font-semibold text-charcoal hover:text-gold transition-colors inline-flex items-center space-x-2"
            >
              <span>Explore The Full Gallery</span>
              <span>→</span>
            </Link>
          </div>

          {/* Masonry Grid Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer border border-beige-dark/60 bg-charcoal"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-xs font-sans uppercase tracking-[0.25em] text-gold font-semibold">
                    VIEW →
                  </span>
                  <p className="font-serif text-lg text-offwhite mt-2">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        items={previewGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* 9. RESERVATION CLOSING CTA (DARK CINEMATIC SECTION) */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-charcoal text-offwhite border-t border-gold/20 relative">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Surat, Gujarat
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-wide">
            Your Table Is Waiting.
          </h2>
          <p className="font-sans text-sm sm:text-base text-beige/70 max-w-xl mx-auto leading-relaxed">
            Reserve your table in advance for an exquisite dining experience. Walk-ins are welcomed subject to availability.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gold hover:bg-gold-light text-charcoal text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl"
            >
              Reserve a Table
            </Link>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 text-xs font-sans uppercase tracking-[0.2em]"
            >
              Get Directions
            </a>
          </div>

          {/* Info row */}
          <div className="pt-12 border-t border-charcoal-muted grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-sans text-beige/70">
            <div className="flex flex-col items-center">
              <MapPin className="w-5 h-5 text-gold mb-2" />
              <span>Piplod Boulevard, Surat, Gujarat</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-5 h-5 text-gold mb-2" />
              <span>Open Daily: 12:00 PM – 11:30 PM</span>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-5 h-5 text-gold mb-2" />
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
