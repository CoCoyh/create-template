module.exports = {
  parser: "babel-eslint",
  extends: ["standard"],
  plugins: ["standard"],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
  },
};
