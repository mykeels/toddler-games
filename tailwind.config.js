/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Segoe UI', 'San Francisco', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          primary: '#BB017A',
          pink: {
            100: '#C62B90',
            200: '#D256A6',
            300: '#DD80BD',
            400: '#EBAAD3',
            500: '#F1CCE4',
          },
          accent: {
            orange: '#FF5117',
            pink: '#FF1093',
            blue: '#17A6FF',
            yellow: '#FFC300',
            green: '#17FF70',
            purple: '#803EC2'
          }
        }
      }
    },
  },
  plugins: [],
}

