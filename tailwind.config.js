module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{html,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'centra': ['Centra', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
