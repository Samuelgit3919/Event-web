/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      width: {
        '1100': '1100px',
        
      },
      height: {
        '340' : '340px'
      }
    },
  },
  plugins: [],
}

