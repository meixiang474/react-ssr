module.exports = {
  root: true,
  extends: [
    "alloy",
    "alloy/typescript",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    "no-undef": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "max-params": "off",
  },
};
