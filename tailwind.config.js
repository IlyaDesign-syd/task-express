/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✨ scan your React files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af", // ✨ custom blue
        secondary: "#f43f5e", // ✨ custom pink
        neutral: "#64748b", // ✨ custom gray
      },
      borderRadius: {
        xl: "1rem", // ✨ larger border-radius
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

