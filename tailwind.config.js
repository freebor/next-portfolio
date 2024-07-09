/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode : "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      ...colors,
      primary: "var(--primary-light)", //purple color
      secondary: "var(--secondary-light)", //pink color
      Gray: "var(--text-gray)",
      Gray2: "var(--text-gray-2)",
      background: "var(--bg-100)",
      bgDark: "var(--bg-dark)",
      txtDark: "var(--text-light)",
      bgLinkedIn: "var(--bg-linkedIn)",
      LinkedIn: "var(--linkedIn)",
      bgGithub: "var(--bg-github)",
      Github: "var(--github)",
    }
  },
  plugins: [],
};
