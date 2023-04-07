module.exports = {
  content: [
    "./src/**/*.html",
    "./dist/*.html",
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
