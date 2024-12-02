/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        becblue: {
          200: "#3caadc",
          500: "#1e6eb4"
        },
        becorange: {
          200: "#ffbc1b",
          500: "#ffaf0a"
        },
        becgray: {
          100: "#ededed",
          200: "#b2b2b2",
          500: "#707070",
          700: "#3c3b41"
        },
      }
    },
  },
  plugins: [],
}