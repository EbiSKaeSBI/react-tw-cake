/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      colors:{
        'brown-light': '#8A7361',
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
