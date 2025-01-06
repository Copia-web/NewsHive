/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Roboto:['Roboto']
      },
    
    screens: {
     'xs': '375px',    // Extra small devices (small phones)
        'sm': '640px',    // Small devices (phones)
        'md': '768px',    // Medium devices (tablets)
        'lg': '1024px',   // Large devices (laptops)
        'xl': '1280px',   // Extra large devices (desktops)
        '2xl': '1536px',  // Very large screens (large desktops)
        '3xl': '1920px',  // Ultra wide screens
        '4xl': '2560px',  // Super large screens (4K displays)
    },
    },
  },
  plugins: [],
}