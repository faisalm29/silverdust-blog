/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#f9f9f9",
      secondary: "#121212",
      accent: "#7F8487",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
