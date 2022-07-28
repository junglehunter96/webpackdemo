const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolveApp } = require("./path.js");
module.exports = merge(
  {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    output: {
      filename: "[name].bundle.js",
      path: resolveApp("dist"),
      clean: true,
    },
    devServer: {},
  },
  common
);

