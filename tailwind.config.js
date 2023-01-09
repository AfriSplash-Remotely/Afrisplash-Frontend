/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "380px",
      md: "740px",
      lg: "980px",
      xx: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary_green: "#0D5520",
        primary_yellow: "#FDF1C9",
        dark_blue: "#1C1D36",
        white_2: "#F8F8F8",
        secondary_yellow: "#FFC42D73",
        dark_blue: "#1C1D36",
        light_green: "#D6ECDC",
        white: "#FFF",
        grey: "#BBBBC3",
        light_grey: "#B6BBB2",
        sunglow: "#0D5520",
      },
    },
  },
  plugins: [],
};
