/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5F30E2", //"#4F25CE",
        secondary: "#F2F2F2",
        dark: "#070707",
        "primary-dark": "#0B071A",
        light: "#EEEEEE",

        "secondary-blue": "#62E1FC",
        "primary-blue": "#2026D2",
        "primary-blue-dark": "#181d9d",
      },
    },
  },
  plugins: [],
};
