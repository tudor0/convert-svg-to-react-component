/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        black: "#010400",
        blackOlive: "#30332E",
        snow: "#FFFBFC",
        verdigris: "#62BBC1",
        cerise: "#EC058E"
      }
    }
  },
  plugins: []
};
