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
      xl: "1440px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary_green: "#0D5520",
        primary_yellow: "#FDF1C9",
        secondary_yellow: "#FFC42D73",
        dark_blue: "#1C1D36",
        white_2: "#F8F8F8",
        light_green: "#D6ECDC",
        dark_500: "rgba(0, 0, 0, 0.67)",
        primary_grey: "#B6BBB2",
        white: "#FFF",
        grey: "#BBBBC3",
        light_grey: "#B6BBB2",
        sunglow: "#0D5520",
        lighter_green: "rgba(214, 236, 220, 0.4)",
      },
    },
  },
  plugins: [],
};
