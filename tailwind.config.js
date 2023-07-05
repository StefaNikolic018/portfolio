module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [require('@tailwindcss/forms')],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  theme: {
    fontFamily: {
      jiro: ['Jiro', 'sans-serif'],
      dalfitra: ['Dalfitra', 'cursive'],
      comebro: ['Comebro', 'cursive']
    }
  }
}
// GANGSTARR - DARK
// 'text': '#f3f2f1',
// 'background': '#161413',
// 'primary-button': '#37cd80',
// 'secondary-button': '#d2f4e2',
// 'accent': '#2fbc73',
// GANGSTARR - WHITE
// 'text': '#141901',
// 'background': '#ffffff',
// 'primary-button': '#8fb106',
// 'secondary-button': '#f9fee6',
// 'accent': '#a3ca07',

// ASAP FERG - WORK - WHITE
// 'text': '#182009',
// 'background': '#f4faeb',
// 'primary-button': '#5b2fac',
// 'secondary-button': '#eaf4d7',
// 'accent': '#5b2fac',
// DARK
// 'text': '#f6eaf1',
// 'background': '#040203',
// 'primary-button': '#852796',
// 'secondary-button': '#f0c6e2',
// 'accent': '#451233',

// WAKA FLOCKA - WORKING - WHITE
// 'text': '#100405',
// 'background': '#f6dbdb',
// 'primary-button': '#dc797d',
// 'secondary-button': '#eebec0',
// 'accent': '#d76569',
// DARK
// 'text': '#f6eaf1',
// 'background': '#040203',
// 'primary-button': '#a34852',
// 'secondary-button': '#312129',
// 'accent': '#6e495b',
