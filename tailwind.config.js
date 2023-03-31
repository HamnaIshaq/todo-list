module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.{js, jsx, ts, tsx}"],
  content: ["./dist/*.html"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
