const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

const {CleanWebpackPlugin} = require("clean-webpack-plugin");
console.log(CleanWebpackPlugin);

module.exports = {
  mode: "production",
  // entry: './src/index.js',

  // 分离入口文件
  entry: {
    app: "./src/index.js",
    print: "./src/print.js",
  },

  output: {
    // filename: 'bundle.js',
    // 动态生成bundle名称
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    // 使用插件
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "管理输出",
    }),
  ],
};