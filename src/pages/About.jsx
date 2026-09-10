import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Flame, Heart, Sparkles, UtensilsCrossed } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  const timelineEvents = [
    {
      year: '2018',
      title: 'Founding of Ember & Olive',
      desc: 'Opened our flagship doors in Piplod, Surat with a vision of quiet luxury, artisanal wood-fire cooking, and authentic hospitality.'
    },
    {
      year: '2020',
      title: '10,000+ Cherished Guests',
      desc: 'Celebrated serving over 10,000 guests while earning Surat Culinary Excellence awards for our signature charcoal dishes.'
    },
    {
      year: '2023',
      title: 'Kitchen & Dining Expansion',
      desc: 'Introduced an expanded state-of-the-art wood-fire hearth kitchen, expanded wine & beverage pairings, and private dining rooms.'
    },
    {
      year: '2026',
      title: 'Growing Culinary Community',
      desc: 'Continuously pushing culinary boundaries while welcoming second-generation families and global food connoisseurs.'
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-offwhite min-h-screen">
      
      {/* About Hero Banner */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-charcoal text-offwhite border-b border-gold/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Our Heritage & Story
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide">
            Rooted in Tradition. <br />
            <span className="italic text-gold">Crafted with Intention.</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-beige/70 max-w-xl mx-auto">
            Discover the passion, culinary ethos, and master craftsmanship behind Surat's most beloved fine dining sanctuary.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Our Beginning
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal leading-tight">
            An Ode to Charcoal Embers <br />
            <span className="italic text-gold">& Golden Olives</span>
          </h2>
          <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
            The story of Ember & Olive began with a simple belief: dining should be a ritual, not a routine. We named our restaurant after two fundamental elements of culinary alchemy: the raw, primal warmth of charcoal embers, and the golden purity of cold-pressed olive oils.
          </p>
          <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
            Every dish we serve carries a nod to Gujarat’s rich produce combined with global techniques perfected over decades in Michelin-level kitchens.
          </p>
        </div>

        <div className="lg:col-span-6 border border-beige-dark p-3 bg-white shadow-xl">
          <img
            src="/images/interior.jpg"
            alt="Ember & Olive Dining Hall"
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
      </section>

      {/* Interactive Brand Timeline */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-beige-light border-y border-beige-dark">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="Milestones"
            title="Our Journey Over The Years"
            centered
          />

          <div className="relative border-l border-gold/40 ml-4 md:ml-32 space-y-12 pl-8">
            {timelineEvents.map((evt, idx) => (
              <motion.div
                key={evt.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Year Marker */}
                <div className="absolute -left-[45px] top-0 w-6 h-6 rounded-full bg-gold border-4 border-beige flex items-center justify-center" />
                <span className="md:absolute md:-left-36 md:top-0 font-serif text-2xl font-semibold text-gold">
                  {evt.year}
                </span>

                <div className="bg-white p-6 border border-beige-dark shadow-sm">
                  <h3 className="font-serif text-xl font-medium text-charcoal">{evt.title}</h3>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed mt-2">
                    {evt.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Profile Highlight */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1 border border-gold/30 p-2 bg-charcoal">
          <img
            src="/images/chef.jpg"
            alt="Chef Arjun Mehta"
            className="w-full aspect-[3/4] object-cover"
          />
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Culinary Leadership
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal leading-tight">
            Meet Executive Chef <br />
            <span className="italic text-gold">Arjun Mehta</span>
          </h2>
          <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
            With over 15 years of culinary experience across London, Dubai, and Mumbai, Chef Arjun Mehta returned to Surat to establish a dining institution where authenticity meets quiet sophistication.
          </p>
          <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
            "My goal has always been to respect the integrity of natural ingredients. When you taste our Truffle Mushroom Pasta or Dum Biryani, you are tasting patience, memory, and precision."
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-beige">
            <div>
              <p className="font-serif text-3xl text-gold">15+</p>
              <p className="text-xs font-sans text-charcoal/60 uppercase tracking-wider">Years Culinary Exp</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-gold">50+</p>
              <p className="text-xs font-sans text-charcoal/60 uppercase tracking-wider">Signature Recipes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-6 md:px-12 bg-charcoal text-offwhite text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-light">
            Come Experience It <span className="italic text-gold">Yourself.</span>
          </h2>
          <p className="font-sans text-sm text-beige/70">
            We invite you to step through our doors in Surat and create your own stories with us.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gold hover:bg-gold-light text-charcoal text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl"
            >
              Reserve Your Table Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
