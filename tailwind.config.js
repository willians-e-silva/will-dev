/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whisper: {
          100: "#fcfcfc",
          200: "#f8f8f8",
          300: "#f5f5f5",
          400: "#f1f1f1",
          500: "#eeeeee",
          600: "#bebebe",
          700: "#8f8f8f",
          800: "#5f5f5f",
          900: "#303030"
        },
        blackPearl: {
          100: "#d0d1d3",
          200: "#a2a4a7",
          300: "#73767a",
          400: "#222831",
          500: "#161b22",
          600: "#0D1117",
          700: "#0d1014",
          800: "#090b0e",
          900: "#040507"
        },
        portage: {
          100: "#e9ebff",
          200: "#d4d7ff",
          300: "#bec2ff",
          400: "#a9aeff",
          500: "#939aff",
          600: "#767bcc",
          700: "#585c99",
          800: "#3b3e66",
          900: "#1d1f33"
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

