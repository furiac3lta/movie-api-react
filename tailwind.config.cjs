/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.html', './node_modules/flowbite/**/*.js'
    
  ],
  theme: {
    extend: {
      screens: {
        'xs': '380px', // min-width
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
