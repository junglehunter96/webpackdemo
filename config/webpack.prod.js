const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolveApp } = require("./path.js");
module.exports = merge(
  {
    mode: "production",
    output: {
      filename: "[name].[contenthash].bundle.js",
      path: resolveApp("dist"),
      clean: true,
    },
  },
  common
);
