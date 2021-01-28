module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    buttonColors: [
      'red',
      'green',
      'yellow',
    ],

    buttonSizes: {
      xs: ['1.5rem', '0.5rem', '12px'],
      sm: ['2rem', '1rem', '14px'],
      DEFAULT: ['2.5rem', '1.5rem', '16px'],
      lg: ['3rem', '2rem', '18px'],
      xl: ['3.5rem', '2.5rem', '20px'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('./src/index')
  ],
}
