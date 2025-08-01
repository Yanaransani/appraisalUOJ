/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}' 
  ],
  theme: {
    extend: {},
  },
   variants: {
    extend: {
      backgroundColor: ['checked', 'before'],
      borderColor: ['checked'],
      display: ['before'],
    },
  },
  plugins: [],
}