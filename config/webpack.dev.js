const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolveApp } = require("./path.js");
module.exports = merge(
  {
    //webapck在指定mode下有相应默认的优化配置 化繁为简
    mode: "development",
    //打开调试source-map 方便debugger
    devtool: "eval-cheap-module-source-map",
    //输出目录
    output: {
      //dev环境下 不需要加content-hash
      filename: "[name].bundle.js",
      path: resolveApp("dist"),
      //重新编译清空上一次的目录
      clean: true,
    },
    devServer: {
      static: {
        directory: resolveApp("dist"),
      },
      compress: true,
      port: 8234,
    },
  },
  common
);
