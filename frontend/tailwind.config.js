/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeIn3s: 'fadeIn 3s ease-in-out',
        fadeIn1s: 'fadeIn 1s ease-in-out',
        'fadeIn0.5s': 'fadeIn 0.5s ease-in-out',
        'fadeOut0.5s': 'fadeOut 0.5s ease-in-out',
        rotate: 'rotate 1s linear infinite'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
