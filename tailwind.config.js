/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "serif"],
        jakarta: ["Plus Jakarta Sans", "serif"],
      },

      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
