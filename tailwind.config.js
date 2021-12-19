module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#232A2F',
        'secondary': '#E5383B',
        'gray': {
          DEFAULT: '#F5F5F5'
        },
        'type': {
          'normal': {
            DEFAULT: "#A8A77A",
            text: "#212529" //dark
          },
          fire: {
            DEFAULT: "#EE8130",
            text: '#f7f7f2' //light
          },
          water: {
            DEFAULT: "#6390F0",
            text: '#f7f7f2'
          },
          electric: {
            DEFAULT: "#F7D02C",
            text: "#212529"
          },
          grass: {
            DEFAULT: "#7AC74C",
            text: "#212529"
          },
          ice: {
            DEFAULT: "#96D9D6",
            text: "#212529"
          },
          fighting: {
            DEFAULT: "#C22E28",
            text: '#f7f7f2'
          },
          poison: {
            DEFAULT: "#A33EA1",
            text: '#f7f7f2'
          },
          ground: {
            DEFAULT: "#E2BF65",
            text: "#212529"
          },
          flying: {
            DEFAULT: "#A98FF3",
            text: "#212529"
          },
          psychic: {
            DEFAULT: "#F95587",
            text: "#212529"
          },
          bug: {
            DEFAULT: "#A6B91A",
            text: "#212529"
          },
          rock: {
            DEFAULT: "#B6A136",
            text: "#212529"
          },
          ghost: {
            DEFAULT: "#735797",
            text: '#f7f7f2'
          },
          dragon: {
            DEFAULT: "#6F35FC",
            text: '#f7f7f2'
          },
          dark: {
            DEFAULT: "#705746",
            text: '#f7f7f2'
          },
          steel: {
            DEFAULT: "#B7B7CE",
            text: "#212529"
          },
          fairy: {
            DEFAULT: "#D685AD",
            text: "#212529"
          }
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}