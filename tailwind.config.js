/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {300:"#FFF5EB", 
          500: "#FFD2A4", 
          600: "#F2C79B",
          700:"#DC9853",
          800:"#A54E2B" },
        secondary: "#161722",
        redOrange:"#EA4335",
        lightGray:"#F5F2F0"
      },
    },
  },
  plugins: [],
};
