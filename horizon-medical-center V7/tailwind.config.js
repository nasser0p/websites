/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        'brand-teal': {
          DEFAULT: '#008080',
          light: '#00A0A0',
        },
        'brand-gold': {
          DEFAULT: '#c59d5f',
          dark: '#b38d54',
        },
        'brand-dark': '#222222',
        'brand-whatsapp': {
          DEFAULT: '#25D366',
          dark: '#128C7E',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1) translate(0, 0)', transformOrigin: 'center center' },
          '100%': { transform: 'scale(1.1) translate(-2%, 2%)', transformOrigin: 'center center' },
        },
        'pulse-whatsapp': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.5)' },
          '50%': { transform: 'scale(1.1)', boxShadow: '0 0 0 15px rgba(37, 211, 102, 0)' },
        },
        'reveal-word': {
            '0%': { opacity: '0', transform: 'translateY(20px) rotate(5deg)' },
            '100%': { opacity: '1', transform: 'translateY(0) rotate(0deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'subtle-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 160, 160, 0.4)' },
          '70%': { boxShadow: '0 0 0 10px rgba(0, 160, 160, 0)' },
        },
        'subtle-pulse-whatsapp': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
          '70%': { boxShadow: '0 0 0 12px rgba(37, 211, 102, 0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'menu-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'menu-link-slide': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'ken-burns': 'ken-burns 15s ease-out infinite alternate-reverse forwards',
        'pulse-whatsapp': 'pulse-whatsapp 2.5s infinite',
        'reveal-word': 'reveal-word 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'shimmer': 'shimmer 4s linear infinite',
        'subtle-pulse': 'subtle-pulse 2s infinite cubic-bezier(0.4, 0, 0.6, 1)',
        'subtle-pulse-whatsapp': 'subtle-pulse-whatsapp 2s infinite cubic-bezier(0.4, 0, 0.6, 1)',
        'float': 'float 2.5s ease-in-out infinite',
        'menu-fade-in': 'menu-fade-in 0.3s ease-out forwards',
        'menu-link-slide': 'menu-link-slide 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}
