const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("./path.js");
module.exports = {
  entry: {
    index: "./src/index.js",
  },
  resolve: {
    alias: {
      "@": path.appSrc,
      //...按需添加
    },
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
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
              importLoaders: 1,
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
