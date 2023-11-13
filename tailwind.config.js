/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        floatUp:{
          "0%": {transform: "translatey(0px)"},
          "50%": {transform: "translatey(-8px)"},
          "0%": {transform: "translatey(0px)"},
        }
      },
      animation:{
        floatUp:"floatUp 2s infinite"
      },      
      colors:{
        primaria:'#ff00ff',
        brown: '#fdf8f6'
      }
    },
  },
  plugins: [],
}

