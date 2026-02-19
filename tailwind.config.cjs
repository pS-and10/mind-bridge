/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4DAA9F',
        accent: '#A79BDF',
        softbg: '#F5F9F8',
        textmain: '#2D2D2D',
        textsub: '#6B7280',
      }
    },
  },
  plugins: [],
}