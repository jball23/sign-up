module.exports = {
  purge: ['./pages/*.{js,ts,jsx,tsx}', './components/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: {
        DEFAULT: '#ffffff'
      },
      blue: {
        DEFAULT: '#1e1d2b'
      },
      gray: {
        light: '#4b4a4a',
        dark: '#202020'
      },
      gold: {
        DEFAULT: '#ffbe03'
      }
    },
    fontFamily: {
      'body': ['HK Grotesk']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
