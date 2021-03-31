const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.base");

module.exports = merge(base, {
  mode: "development",
  entry: path.join(__dirname, "../../src/client/index.tsx"),
  output: {
    path: path.join(__dirname, "../../public"),
    filename: "index.js",
  },
});
