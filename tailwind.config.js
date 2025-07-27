/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-gradient': `linear-gradient(to bottom right, ${theme('colors.custom-blue.200')}, ${theme('colors.gray.50')}, ${theme('colors.custom-green.200')})`,
        'dark-custom-gradient': `linear-gradient(to bottom right, ${theme('colors.custom-blue.900/0.4')}, ${theme('colors.gray.800/0.8')}, ${theme('colors.custom-green.900/0.4')})`,
      }),
      colors: {
        'custom-green': {
          50: '#f0f9f4',   // Very light green for backgrounds
          100: '#dcf4e4',  // Light green for backgrounds  
          200: '#b8e6c8',  // Light green for borders/highlights
          300: '#8dd5a7',  // Medium light green for text
          400: '#5bb882',  // Medium green
          500: '#40826d',  // Your specified color
          600: '#367056',  // Slightly darker
          700: '#2d5a47',  // Dark green for text
          800: '#254939',  // Darker green
          900: '#1f3d30',  // Very dark green
        },
        'custom-purple': {
          500: '#a100ff', // Accenture-like purple
        },
        'custom-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1474a5', // Dynatrace-like blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}
