/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", 'node_modules/preline/dist/*.js'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        'brown-light': '#8A7361',
        'pink-light': '#F7D2BA',
        'gray-select': '#F5F2F0',
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
