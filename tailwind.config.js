/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#111111',
          light: '#1A1A1A',
          dark: '#0B0B0B',
          muted: '#262626'
        },
        offwhite: {
          DEFAULT: '#F7F4EF',
          pure: '#FAFAFA'
        },
        gold: {
          DEFAULT: '#C89B5A',
          light: '#DAB57A',
          dark: '#A67B3E',
          muted: 'rgba(200, 155, 90, 0.15)'
        },
        beige: {
          DEFAULT: '#E8E0D4',
          light: '#F0EADF',
          dark: '#D8CDBB'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      aspectRatio: {
        'portrait': '3/4',
        'landscape': '4/3',
        'wide': '16/9',
        'tall': '9/16'
      },
      animation: {
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
