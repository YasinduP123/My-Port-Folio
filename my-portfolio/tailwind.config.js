/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./node_modules/flowbite/**/*.js", 
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "media", // Enable dark mode using the `class` strategy
  plugins: [
    require("flowbite/plugin"), 
    require("flowbite-react/tailwind")
  ],
};
