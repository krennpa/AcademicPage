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
        }
      }
    },
  },
  plugins: [],
}
