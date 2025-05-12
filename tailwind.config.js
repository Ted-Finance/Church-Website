/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {300:"#FFF5EB", 500: "#FFD2A4", 600: "#F2C79B" },
        secondary: "#161722",
      },
    },
  },
  plugins: [],
};
