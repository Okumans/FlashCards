/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}"
           ],
  theme: {
    extend: {
      colors: {
        'dark-blue-gray': '#27374D',
        'light-blue-gray': "#526D82",
        'gray-gray': "#9DB2BF",
        'light-gray': "#DDE6ED",
      },
    },
    fontFamily: {
      display: ["IBM Plex Sans Thai", "sans-serif"],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

