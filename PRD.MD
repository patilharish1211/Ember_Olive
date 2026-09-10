# Ember & Olive — Website Design Brief

## Brand

Name Ember & Olive
Tagline Where Every Bite Tells a Story.
Personality Elegant, warm, sophisticated, modern, quietly luxurious.
Location Surat, Gujarat · Est. 2018

## Visual Direction

Color palette
- Deep Charcoal `#111111` — primary text, dark sections
- Warm Off-White `#F7F4EF` — primary background
- Muted Gold `#C89B5A` — accent only, used sparingly (prices, icons, dividers, hover states)
- Soft Beige `#E8E0D4` — secondary surface
- White `#FFFFFF` — contrast surface

Gold is a spice, not a base color — it should never dominate a section.

Typography
- Headingsdisplay Cormorant Garamond
- BodyUI Manrope
- Strong type hierarchy, generous line-height on body copy, line lengths under ~80 characters

Layout principles
- Editorial, asymmetric compositions rather than centered symmetric grids
- Large whitespace; let sections breathe
- Full-width, intentional photography with deliberate aspect ratios
- Subtle 1px borders instead of shadows or heavy card treatments
- No large rounded corners, no gradient washes, no generic SaaS-card kit
- One boldmemorable moment per page rather than decoration everywhere

Motion
- Framer Motion throughout, cinematic pacing (slow enough to feel expensive, fast enough not to annoy)
- One orchestrated entrance sequence on load (hero), scroll-triggered reveals elsewhere — not animation on every single element
- Word-by-word headline reveals, image scale-on-hover (1 → 1.08), staggered fades, subtle parallax on full-bleed images
- Respect `prefers-reduced-motion`

## Tech Stack

- React + Vite
- Tailwind CSS (custom theme tokens for the palettefonts above)
- Framer Motion
- React Router (multi-page Home, Menu, About, Gallery, Contact)
- Lucide React icons

Component architecture reusable Navbar, Button, SectionHeading, FoodCard, Testimonials, MasonryGallery + Lightbox, Footer, Loader, scroll chrome (progress bar, back-to-top, custom cursor on desktop only).

## Navigation

Logo  Home  Menu  About  Gallery  Contact  Book a Table (CTA)

- Transparent navbar over hero, becomes blurredsemi-opaque with a hairline border on scroll
- Mobile fullscreen animated menu (clip-path reveal), large type, staggered link entrance

## Pages & Sections

### Loading Screen
Ember & Olive wordmark with a thin gold progress line, fast and elegant (~1.5s), then dissolves into the homepage.

### Home
1. Hero — full-viewport cinematic image, slow zoom, EST. 2018 · SURAT label, headline Where Every Bite Tells a Story., supporting line, two CTAs (Explore Menu  Book a Table), 4.9★ social proof, scroll indicator.
2. Introduction — editorial More Than Just A Meal. section, asymmetric overlapping images, Discover Our Story → link.
3. Signature Dishes — 3 large-photography cards (Truffle Mushroom Pasta ₹499, Charcoal Paneer Tikka ₹349, Ember Signature Biryani ₹449) with hover zoom + lift, View Full Menu →.
4. Full-width cinematic band — Crafted With Intention. over a parallax kitchen image.
5. Why Ember & Olive — 4-column minimal feature list (Fresh Ingredients, Expert Chefs, Thoughtful Flavours, Warm Hospitality), sequential reveal.
6. Chef  Story — split-screen chef portrait + The Kitchen narrative, Chef Arjun Mehta, 15+ years, Meet Our Chef →.
7. Testimonials — minimal quote carousel, star rating, 3 guest quotes.
8. Gallery preview — masonry grid, hover overlay (VIEW →), opens fullscreen lightbox, Explore The Gallery →.
9. Reservation CTA — dark cinematic closing section Your Table Is Waiting., Reserve a Table  Get Directions, address, hours, phone.

### Menu
Hero (Our Menu), sticky category navigation (Starters, Soups, Mains, Pizza, Pasta, Desserts, Beverages), animated category switching, elegant list rows (name, short description, price), occasional dish photography beside featured items.

### About
Hero (Our Story), Our Beginning narrative, brand timeline (2018 founding → 2020 10,000 guests → 2023 new kitchen → 2026 growing community), chef section, philosophy statement, closing image + CTA (Come Experience It Yourself.).

### Gallery
Filterable masonry grid (All  Food  Interior  People  Events) with animated filtering (fade, scale, stagger), fullscreen lightbox with prevnext and keyboard navigation.

### Contact  Reservation
Reservation form (Name, Phone, Email, Date, Time, Guests, Special Request) with validation and an animated Table Reserved ✓ success state, restaurant info block (address, phone, email, hours), map section, WhatsApp booking button.

### Footer
Dark, sophisticated. Logo + tagline (Good food. Good mood. Great memories.), nav links, social icons (Instagram, Facebook), contact details, copyright line.

## UX & Performance Requirements

- Fully responsive, mobile-first, no horizontal scroll
- Fullscreen mobile nav; 2-column gallery on mobile
- Scroll progress indicator, back-to-top button, smooth scrolling, active nav state
- Lazy-loaded, responsive images with meaningful alt text; semantic HTML
- Accessible, keyboard-navigable, visible focus states
- Custom cursor interaction on desktop only, never on mobiletouch

## Quality Bar

The result should read as a premium hospitality brand site built by an experienced digital studio — not a generic template. Avoid ALL-CAPS overload, excessive shadowsgradients, oversized rounded cards everywhere, stock Bootstrap-style grids, and animation on every element. Prioritize, in order visual hierarchy, typography, photography, whitespace, animation, consistency, conversion. Use real restaurant copy throughout — no lorem ipsum.