// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true
  },
  extends: ["standart", "prettier"],
  plugins: ["html"],
  rules: {
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-plusplus": 0,
    "no-console": 0,
    "arrow-body-style": 0,
    "class-methods-use-this": 0,
    "no-restricted-syntax": 0,
    "guard-for-in": 0
  }
};
