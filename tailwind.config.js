/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'], // ou o caminho dos seus arquivos de template
  darkMode: 'media', // ou 'class' se você estiver usando a classe .dark
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

