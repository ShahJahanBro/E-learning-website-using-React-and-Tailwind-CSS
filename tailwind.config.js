/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { poppins: ["Poppins", ["sans-serif"]] },
      colors: {
        primary: "#4F46E5",  // Indigo-600 (Good for buttons, highlights)
        secondary: "#EC4899", // Pink-500 (Great for accents)
        light: "#F3F4F6",  // Gray-100 (Backgrounds, cards)
        dark: "#1F2937",   // Gray-800 (Text, dark mode UI)
        dark2: "#111827",  // Gray-900 (Darker contrast areas)
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      }
    },
  },
  plugins: [],
};
