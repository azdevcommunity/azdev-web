/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 600px rgba(18, 37, 49, 2)', // Your custom shadow
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

