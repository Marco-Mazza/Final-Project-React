/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        scondary: "var(--secondary)",
        accent: "var(--accent)"
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}