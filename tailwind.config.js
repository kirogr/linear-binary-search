module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'black': '#000',
      },
      width: {
        '1920': '1920px',
      },
      height: {
        '1080': '1080px',
      },
    },
  },
  variants: {},
  plugins: [],
}