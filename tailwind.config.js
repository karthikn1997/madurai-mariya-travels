/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Direct brand colors for 100% reliable classes
        brandYellow: '#F5B800',
        brandMaroon: '#8B1E1E',
        brandOlive: '#729227',
        brandCharcoal: '#181E25',
        brand: {
          yellow: '#F5B800',
          maroon: '#8B1E1E',
          olive: '#729227',
          charcoal: '#181E25',
        },
      },
      fontFamily: {
        serif: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        numeric: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        price: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
