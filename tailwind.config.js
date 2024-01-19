/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Dark-cyan': 'hsl(158, 36%, 37%)',
        'Dark-cyan-hover': 'hsl( 156, 42%, 18%)',
        'Cream': 'hsl(30, 38%, 92%)',
        'Very-dark-blue': 'hsl(212, 21%, 14%)',
        'Dark-grayish-blue': 'hsl(228, 12%, 48%)',
        'White': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'fraunces': ['Fraunces', 'sans-serif']
      }
    },
  },
  plugins: [],
}

