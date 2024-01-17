/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 600px rgba(18, 37, 49, 2)', // Your custom shadow
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),

    nextui()
  ],
}

