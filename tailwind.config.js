/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        lightGreen: 'hsl(158, 36%, 37%)',
        darkLightGreen: 'hsl(158, 35%, 15%)',
        lightGray: 'hsl(230, 3%, 61%)',
        lightBrown: 'hsl(26, 40%, 92%)',
      }
    },
    fontFamily: {
      'serif': ['ESPINOSA NOVA']
    }
  },
  plugins: [],
}
