/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cool: {
          50: '#E5F1FF',
          100: '#CCE4FF',
          200: '#99C9FF',
          300: '#66ADFF',
          400: '#3392FF',
          500: '#0076FF',
          600: '#005FCC',
          700: '#004799',
          800: '#003066',
          900: '#001833',
        },
      },
    },
  },
  plugins: [],
};
