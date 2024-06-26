/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      featuredBackground:{
        'featured-image': "url('/client/src/assets/home/featured.jpg"
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

