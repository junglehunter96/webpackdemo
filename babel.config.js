module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 2 versions"], //最近两个版本的浏览器
        },
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
