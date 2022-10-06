/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'primary_green': "#0D5520",
        'primary_yellow': "#FDF1C9",
        'dark_blue': "#1C1D36",
        'white_2': "#F8F8F8",
      }
    },
  },
  plugins: [],
}
