const fs = require("fs");
const path = require("path");

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = (realitivePath) => path.resolve(appDirectory, realitivePath);

module.exports = {
  resolveApp,
  appPublic: resolveApp("public"),
  appHtml: resolveApp("public/index.html"),
  appSrc: resolveApp("src"),
  appDist: resolveApp("dist"),
};
