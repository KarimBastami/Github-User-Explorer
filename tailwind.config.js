/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  
  theme: {
    extend: {},
    screens: {
      "xs": {max: "374px"},
      ...defaultTheme.screens
    }
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: ["dark"],
    darkTheme: "dark",
  },
}
 