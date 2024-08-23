/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#7B2CBF",
        "secondary": "#916DD5",
        "third": "#E0AAFF",
        "background": "#EEE5FF"
      }
    },
  },
  plugins: [],
}