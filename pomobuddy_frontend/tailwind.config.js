/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cardcolor: "#0D1B48A3",
        cardborder: "#0D1B487A",
        timercolor: "#F2F2F2",
        backgroundcolorTEMP: "#030e33",
      },
      boxShadow: {
        cardshadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        cardblur: "7.1px",
      },
    },
  },
  plugins: [],
};
