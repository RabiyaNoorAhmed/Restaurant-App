
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Red": "#E74141",
        "Green": "#54B686",
        "textcolor": "#4E4133",
        "primarybg": "#FAF7FA"
        
      },
      fontFamily:{
        "primary":["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"], // Set the default theme to 'light'
  },
}

