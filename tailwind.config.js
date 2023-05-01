/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'pink': '#FB2E86',
        'red': '#FB2448',
        'blue': '#2F1AC4',
        'off-navy-blue': '#3F509E',
        'navy-blue': '#151875',
        'sky-blue': '#F3F9FF',
        'pantone-purple': '#E0D3F5',
        'purple': '#7E33E0',
        'off-purple': '#9F63B5',
      },
      fontFamily: {
        lato: ['Lato', "sans-serif"],
        josefin: ['Josefin Sans', "sans-serif"],
      },
    },
  },
  plugins: [],
}