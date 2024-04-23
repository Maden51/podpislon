/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'desktop': '1219px',
    },
    colors: {
      'orange': '#F79900',
      'dark-orange': '#C57A00',
      'dark-gray': '#333',
      'light-gray': '#D6D6D6',
      'white': '#FFFFFF',
      'black': '#000',
    },
    fontFamily: {
      sans: ['Gotham Pro', 'sans-serif'],
      sansBold: ['Gotham Pro-Bold', 'sans-serif'],
      sansMed: ['Gotham Pro-Med', 'sans-serif'],
      sansBlack: ['Gotham Pro-Black', 'sans-serif'],
      sansLight: ['Gotham Pro-Light', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

