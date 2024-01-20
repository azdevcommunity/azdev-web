/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";
import colors from "tailwindcss/colors";
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    ],
    theme: {
        extend: {
            boxShadow: {
                outline: '0 0 0 2px rgba(59, 130, 246, 0.5)', // Adjust the RGBA value to match your glow color
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            },
            transitionDuration: {
                '0': '0ms',
                '2000': '2000ms',
            },
            transitionTimingFunction: {
                'ease': 'ease',
            }
        },
        colors: {
            'milk-white': '#E7E9EA',
            'custom-color': {
              100: '#242D34',
              200: '#a5f3fc',
              300: '#67e8f9',
              400: '#22d3ee',
              500: '#06b6d4',
              600: '#0891b2',
              700: '#0e7490',
              800: '#155e75',
              900: '#000',
            },
            "border-color": {
              100: "#71767B"
            },
            "blue": {
              100: '#e6f4ff',
              200: '#b3d8ff',
              300: '#80bdff',
              400: '#4da1ff',
              500: '#1D9BF0',
              600: '#0066e6',
              700: '#0047b4',
              800: '#002d80',
              900: '#00194d',
            },
            "trend-dark": "#16181C",
            slate: colors.slate,
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            violet: colors.violet
        }
    },
    plugins: [


        nextui()
    ],
}