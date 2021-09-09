module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%' : { transform: 'translate(0px, 30px)' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
