/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown:{
          600: '#8B4513', 
          700: '#6F4C3E',
        }
      }
    },
  },
  plugins: [],
}

