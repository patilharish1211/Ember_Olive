import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle2, MessageSquare, Send, Users, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '19:30',
    guests: '2',
    specialRequest: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) errs.phone = 'Enter a valid phone number';
    if (!formData.email.trim()) errs.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Enter a valid email address';
    if (!formData.date) errs.date = 'Reservation date is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate backend booking API call (~1.2s)
    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = 'EO-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);
      setIsSuccess(true);
    }, 1200);
  };

  // WhatsApp click handler
  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Ember & Olive, I would like to reserve a table for ${formData.guests || 2} guests on ${formData.date || 'upcoming date'} at ${formData.time || '7:30 PM'}. Name: ${formData.name || 'Guest'}.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="pt-24 pb-24 bg-offwhite min-h-screen">
      
      {/* Contact Banner */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-charcoal text-offwhite border-b border-gold/20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Table Reservations & Contact
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide">
            Reserve Your <span className="italic text-gold">Experience</span>
          </h1>
          <p className="font-sans text-sm text-beige/70 max-w-xl mx-auto">
            Book your dining table online or connect directly with our hospitality concierge in Surat.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Reservation Form Column */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-beige-dark shadow-xl space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold">
              Instant Booking
            </span>
            <h2 className="font-serif text-3xl font-light text-charcoal mt-1">
              Table Reservation
            </h2>
            <p className="text-xs font-sans text-charcoal/60 mt-1">
              Please fill out the form below. Confirmation will be sent instantly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans text-charcoal font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ananya Mehta"
                  className={`w-full px-4 py-3 bg-offwhite border text-xs font-sans text-charcoal focus:outline-none focus:border-gold transition-colors ${
                    errors.name ? 'border-red-500' : 'border-beige-dark'
                  }`}
                />
                {errors.name && <p className="text-[11px] text-red-500 font-sans mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans text-charcoal font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-3 bg-offwhite border text-xs font-sans text-charcoal focus:outline-none focus:border-gold transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-beige-dark'
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-red-500 font-sans mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans text-charcoal font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ananya@example.com"
                  className={`w-full px-4 py-3 bg-offwhite border text-xs font-sans text-charcoal focus:outline-none focus:border-gold transition-colors ${
                    errors.email ? 'border-red-500' : 'border-beige-dark'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-500 font-sans mt-1">{errors.email}</p>}
              </div>

              {/* Guests */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans text-charcoal font-medium mb-2">
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-offwhite border border-beige-dark text-xs font-sans text-charcoal focus:outline-none focus:border-gold transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, '9+ (Large Party)'].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans text-charcoal font-medium mb-2">
                  Reservation Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 bg-offwhite border text-xs font-sans text-charcoal focus:outline-none focus:border-gold transition-colors ${
                    errors.date ? 'border-red-500' : 'border-beige-dark'
                  }`}
                />
                {errors.date && <p className="text-[11px] text-red-500 font-sans mt-1">{errors.date}</p>}
              </div>

              {/* Time */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans text-charcoal font-medium mb-2">
                  Time Slot
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-offwhite border border-beige-dark text-xs font-sans text-charcoal focus:outline-none focus:border-gold transition-colors"
                >
                  <optgroup label="Lunch Service">
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="13:30">01:30 PM</option>
                    <option value="14:00">02:00 PM</option>
                  </optgroup>
                  <optgroup label="Dinner Service">
                    <option value="19:00">07:00 PM</option>
                    <option value="19:30">07:30 PM</option>
                    <option value="20:00">08:00 PM</option>
                    <option value="20:30">08:30 PM</option>
                    <option value="21:00">09:00 PM</option>
                    <option value="21:30">09:30 PM</option>
                  </optgroup>
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-sans text-charcoal font-medium mb-2">
                Special Requests / Dietary Notes
              </label>
              <textarea
                name="specialRequest"
                rows="3"
                value={formData.specialRequest}
                onChange={handleChange}
                placeholder="Anniversary celebration, window table preference, allergen notes..."
                className="w-full px-4 py-3 bg-offwhite border border-beige-dark text-xs font-sans text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-charcoal text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Confirming Table...' : 'Confirm Reservation'}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="w-full sm:w-auto px-6 py-4 border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white text-xs font-sans uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book via WhatsApp</span>
              </button>
            </div>

          </form>
        </div>

        {/* Restaurant Info & Map Column */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Info Card */}
          <div className="bg-charcoal text-offwhite p-8 border border-gold/30 shadow-xl space-y-6">
            <h3 className="font-serif text-2xl font-light text-gold">Ember & Olive Sanctuary</h3>
            
            <div className="space-y-4 text-xs font-sans text-beige/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-offwhite">Address</p>
                  <p>102 Olive Avenue, Piplod Boulevard, Surat, Gujarat 395007</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-offwhite">Direct Line</p>
                  <p>+91 98765 43210 / 0261 2345678</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-offwhite">Email Reservations</p>
                  <p>reservations@emberandolive.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-offwhite">Opening Hours</p>
                  <p>Lunch: 12:00 PM – 3:30 PM</p>
                  <p>Dinner: 07:00 PM – 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="bg-beige-light border border-beige-dark p-6 text-center space-y-4 relative overflow-hidden">
            <div className="aspect-[16/9] bg-charcoal-muted relative flex items-center justify-center border border-gold/20">
              <img
                src="/images/interior.jpg"
                alt="Map location preview"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm text-offwhite">
                <MapPin className="w-8 h-8 text-gold animate-bounce mb-2" />
                <span className="font-serif text-xl">Piplod Boulevard, Surat</span>
                <span className="text-[10px] font-sans text-gold uppercase tracking-widest mt-1">Google Maps Coordinates Included</span>
              </div>
            </div>
            
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-sans uppercase tracking-widest text-gold font-semibold hover:underline"
            >
              Open Live Directions →
            </a>
          </div>

        </div>

      </div>

      {/* Table Reserved ✓ Animated Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              className="bg-offwhite border border-gold p-8 md:p-12 max-w-md w-full text-center space-y-6 shadow-2xl relative"
            >
              <div className="w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto border border-gold">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold">
                  Reservation Confirmed
                </span>
                <h3 className="font-serif text-3xl font-light text-charcoal">
                  Table Reserved <span className="text-gold">✓</span>
                </h3>
              </div>

              <div className="p-4 bg-beige-light border border-beige-dark text-xs font-sans space-y-2 text-left">
                <p><strong>Ref Code:</strong> <span className="text-gold font-mono">{bookingRef}</span></p>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Date & Time:</strong> {formData.date} at {formData.time}</p>
                <p><strong>Guests:</strong> {formData.guests}</p>
              </div>

              <p className="text-xs font-sans text-charcoal/70">
                A confirmation SMS & email have been dispatched to your contact details. We look forward to hosting you in Surat!
              </p>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({ name: '', phone: '', email: '', date: '', time: '19:30', guests: '2', specialRequest: '' });
                }}
                className="w-full py-3.5 bg-charcoal text-gold text-xs font-sans uppercase tracking-widest font-semibold hover:bg-gold hover:text-charcoal transition-colors"
              >
                Close & Return
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
