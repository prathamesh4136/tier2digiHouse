/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Our Custom "Tier 2" Palette
        brand: {
          dark: '#0f0518',   // Very dark purple (almost black) for text
          primary: '#7e22ce', // Vibrant Purple (Main Buttons/Logos)
          light: '#f3e8ff',  // Light Purple (Background accents)
          white: '#ffffff',  // Clean White
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern, clean font
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}