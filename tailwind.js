/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: '#FE2C55',
        cyan: '#00F2EA',
      }
    },
  },
  plugins: [],
}
