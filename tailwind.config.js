const { space } = require('postcss/lib/list');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        "lg":"480px"  
      },
      spacing:{
        "big":"35rem"
      }
    },
    fontFamily:{
      nunito:['Nunito','sans-serif']
    }
  },
  plugins: [],
}

