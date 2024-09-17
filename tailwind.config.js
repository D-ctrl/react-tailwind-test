/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'text': '#2C3E2E',
        'background': '#F0F7F4',
        'primary': '#5B9279',
        'secondary': '#8FCB9B',
        'accent': '#FF6B6B',
      },
    },
  },
  plugins: [],
}