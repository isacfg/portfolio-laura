/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
      lexend: ['Lexend Mega', 'sans-serif'],
    },
    screns: {
      sm: { max: '479px' },
      md: { max: '767px' },
      lg: { max: '1023px' },
      xl: { max: '1439px' },
    },
    extend: {
      colors: {
        // light mode
        white: '#F9F9F9',
        pink: '#FF006B',
        yellow: '#FFF301',
        gray: '#7F7F7F',
        lightgray: '#D9D9D9',
        black: '#0A0430',
        bgLight: '#fffced',
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: [
      "light",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  }
}
