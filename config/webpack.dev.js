const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolveApp } = require("./");
module.exports = merge(
  {
    output: {
      filename: "[name].bundle.js",
      path: resolveApp("dist"),
    },
  },
  common
);
