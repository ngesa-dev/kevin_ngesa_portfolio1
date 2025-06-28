/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        tertiaryLight: '#2a204d',
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
         keyframes: {
          
        bgPan: {
          '0%, 100%': { backgroundPosition: 'center top' },
          '50%': { backgroundPosition: 'center center' },
        },
        bgZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        bgPan: 'bgPan 20s ease-in-out infinite',
        bgZoom: 'bgZoom 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
