/** @type {import('tailwindcss').Config}, */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-section":
          " url('/src/assets/images/hero-1.jpg')", 
      },
    },
  },
  plugins: [],
};
