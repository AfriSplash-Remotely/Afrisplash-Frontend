/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "380px",
      xsm: "640px",
      md: "740px",
      lg: "980px",
      xlg: "1025px",
      xl: "1440px",
      xxl: "2400px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary_green: "#0D5520",
        primary_yellow: "#FDF1C9",
        secondary_yellow: "#FFC42D73",
        dark_blue: "#1C1D36",
        white_2: "#F8F8F8",
        white_3: "#F0FBF3",
        light_green: "#D6ECDC",
        dark_500: "rgba(0, 0, 0, 0.67)",
        primary_grey: "#B6BBB2",
        white: "#FFFFFF",
        grey: "#BBBBC3",
        light_grey: "#B6BBB2",
        sunglow: "#0D5520",
        secondary_yellow_2: "#FFC42D",
        lighter_green: "rgba(214, 236, 220, 0.4)",
        dark_primary: "#2B2B2B",
      },
    },
  },
  plugins: [],
};
