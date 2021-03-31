const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.base");
const HtmlPluginWebpack = require("html-webpack-plugin");

module.exports = merge(base, {
  mode: "development",
  entry: path.join(__dirname, "../../src/client/index.tsx"),
  output: {
    path: path.join(__dirname, "../../public"),
    filename: "index.js",
  },
  devServer: {
    open: true,
    port: 8080,
    hot: true,
    compress: true,
    historyApiFallback: true,
    proxy: {
      "/ssr/api": {
        target: "http://localhost:3000",
      },
    },
  },
  plugins: [
    new HtmlPluginWebpack({
      template: path.join(__dirname, "../../src/index.html"),
      scriptLoading: "defer",
    }),
  ],
});
