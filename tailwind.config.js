/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#3238f2',
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}

