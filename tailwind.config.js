/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        flash: "flash 1s ease infinite both"
      },
      keyframes: {
        flash: {
          "0%": {
            boxShadow: "0 0 12px white"
          },
          "100%": {
            boxShadow: "none"
          },
        }
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}