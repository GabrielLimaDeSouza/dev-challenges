/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#FFB612',
        'border-gray': '#EDEDED',
        'background-gray': '#F5F5F5',
        'text-gray': '#444444',
        'card-border': '#F7F7F7',
        'footer-color': '#333333',
        'red': '#dc0a17'
      },
    },
  },
  plugins: [],
}