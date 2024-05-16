/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/js/**/*.js",
  ],
  theme: {
    screens: {
      'tablet': {'min': '640px', 'max': '1219px'},
      'desktop': '1219px',
    },
    colors: {
      'orange': '#F79900',
      'dark-orange': '#C57A00',
      'dark-gray': '#333',
      'light-gray': '#D6D6D6',
      'list-gray': '#D2D2D7',
      'white': '#FFFFFF',
      'black': '#000',
    },
    fontFamily: {
      sansReg: ['Gotham Pro', 'sans-serif'],
      sansBold: ['Gotham Pro-Bold', 'sans-serif'],
      sansMed: ['Gotham Pro-Med', 'sans-serif'],
      sansBlack: ['Gotham Pro-Black', 'sans-serif'],
      sansLight: ['Gotham Pro-Light', 'sans-serif'],
      sansItalic: ['Gotham Pro-Medium Italic', 'sans-serif'],
      walsheimBold: ['GT Walsheim Pro-Bold', 'sans-serif'],
      waslheim: ['GT Walsheim', 'sans-serif'],
    },
    fontSize: {
      h1: '52px',
    },
    extend: {},
  },

  // eslint-disable-next-line no-undef
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}

