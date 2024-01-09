/** @type {import('tailwindcss').Config}, */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-section": " url('/src/assets/images/hero-1.jpg')",
      },
      colors: {
        primary: "rgb(11,165,233)",
        secondary: {
          100: "#F1F5F9",
          200: "#4B5563",
        },
      },
    },
  },
  plugins: [],
};
