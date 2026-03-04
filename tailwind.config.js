/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#09aa96",
          hover: "#089e8b",
          light: "#4fd1c5",
          dark: "#078a79",
        },
        secondary: {
          DEFAULT: "#51708b",
          hover: "#445f78",
          light: "#6e8fa9",
          dark: "#3e576c",
        },
        dark: "#24211a",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}