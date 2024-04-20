/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#626262",
        light: "#ffffff",
        body: "#ffffff",
        accent: "#39856c",
        primary: "#1b3b1e",
        footer: "#f2f2f2",
        dropdown: "#2b2b2b",
        btnwhole: "#28941e",
        hover: "#daa625",
      },
    },
  },
  plugins: [],
}