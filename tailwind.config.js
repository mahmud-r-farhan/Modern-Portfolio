/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        'deep-blue': '#1e3a8a',
        'purple-dark': '#4c1d95',
        'purple-light': '#9b87f5',
        'blue-DEFAULT': '#3b82f6',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in': 'slideIn 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}