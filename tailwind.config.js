/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#10B981',
        primaryDark: '#34D399',
        background: '#111827'
      },
    },
  },
  plugins: [],
}
