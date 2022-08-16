const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("./path.js");
module.exports = {
  entry: {
    index: "./src/index.tsx",
  },
  resolve: {
    alias: {
      "@": path.appSrc,
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  cache: {
    type: "filesystem", //使用文件缓存
  },
  plugins: [
    // 生成html，自动引入所有bundle
    new HtmlWebpackPlugin({
      title: "release_v0",
      filename: "index.html",
      template: path.resolveApp("./index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        include: path.appSrc,
        use: [
          {
            loader: "esbuild-loader",
            options: {
              loader: "tsx",
              target: "es2015",
            },
          },
        ],
      },
      // 图片
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: path.appSrc,
        type: "asset/resource",
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        include: path.appSrc,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        include: path.appSrc,
        use: [
          // 将JS字符串转换成 style 节点
          "style-loader",
          // 将 CSS 转换成 CommonJS 模块
          {
            loader: "css-loader",
            options: {
              // 开启 CSS modules 特性
              modules: false,
              importLoaders: 2,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    // postcss-preset-env 包含autoprefixer
                    "postcss-preset-env",
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
