/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "serif"]
      },
      screens: {
        'mobile': '450px'
      }
    },
  },
  plugins: [],
}

