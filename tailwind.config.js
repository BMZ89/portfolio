/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      colors: {
        myblue: "#2279BE",
      },
      backgroundImage : {
        'hello':'url("../src/assets/images/welcome.jpg")',
      },
      animation : {
bounce : 'bounce 20s',
      },
      animation: {
        pulse: 'pulse 12s  ',
      },
      animation: {
        spin: 'spin 20s ',
      }
    },
  },
  plugins: [],
};
