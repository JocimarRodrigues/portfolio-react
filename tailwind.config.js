/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#38bdf8',
          dark: '#0f172a',
          accent: '#f97316',
        },
      },
      boxShadow: {
        glow: '0 20px 45px rgba(56, 189, 248, 0.18)',
      },
    },
  },
  plugins: [],
};
