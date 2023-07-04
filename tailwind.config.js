/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm:'2rem',
        lg:'4rem',
      }
    },
    extend: {
      colors: {
        primary: {
          100: '#06C2AE',
          200: '#02889B'
        },
        secondary: '#FF693A'

      }

    },
  },
  plugins: [],
}

