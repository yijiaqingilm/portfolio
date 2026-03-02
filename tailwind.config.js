/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#2563EB',
        'accent-hover': '#1D4ED8',
      },
      fontFamily: {
        display: ['Caveat', 'cursive'],
        body: ['Inter', '"PingFang SC"', '"Hiragino Sans GB"', '"Microsoft YaHei"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
