/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["../index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
    plugins: [
        plugin(function (addBase, addComponents, addUtilities) {
            addBase({
                'h1': { fontSize: '35px' },
                'h2': { fontSize: '25px' }
            });

            addComponents({
                '.btn':{
                padding: '8px 16px',
                borderRadius: '4px',
                borderWidth: '2px'
            }
            });
      })
  ]
}
