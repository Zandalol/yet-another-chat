/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vue-green': '#00BD7E'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  darkMode: 'class',
}
