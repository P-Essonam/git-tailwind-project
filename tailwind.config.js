/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        'primary': {
          light: '#ffffff',
          DEFAULT: '#24292f',
          dark: '#24292f',
        },

        'secondary': {
          light: '#1f2328',
          DEFAULT: '#1e8ee',
          dark: '#1e8ee',
        },

        'tertiary': {
          DEFAULT: '#06b6d4',
        },

        'footer': {
          light: '#f6f8fa',
          DEFAULT: '#161b22',
          dark: '#161b22',
        },

        'border': {
          light: '#dddddd',
          DEFAULT: '#224549',
          dark: '#224549',
        },

      },
    },
  },
  plugins: [],
}

