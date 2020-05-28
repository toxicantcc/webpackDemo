const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

const {CleanWebpackPlugin} = require("clean-webpack-plugin");

// const Webpack = require('webpack');

module.exports = {
  // mode: "development",
  mode: 'production',
  optimization: {
    usedExports: true, 
  },
  // entry: './src/index.js',

  // 分离入口文件
  entry: {
    // app: "./src/index.js",
    // print: "./src/print.js",
    app: "./src/index.js",
  },

  // 开发
  devtool: "inline-source-map",

  // webpack-dev-server
  devServer: {
    contentBase: "./dist",
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  output: {
    // filename: 'bundle.js',
    // 动态生成bundle名称
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // 对 webpack 的配置文件做一些调整，以确保中间件(middleware)功能能够正确启用：publicPath 也会在服务器脚本用到，以确保文件资源能够在 http://localhost:3000 下正确访问
    publicPath: "/",
  },
  plugins: [
    // 使用插件
    new CleanWebpackPlugin(),
    // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false}),  //开启观察者模式需要保留dist文件夹下的html文件
    new HtmlWebpackPlugin({
      title: "模块热替换",
    }),
    // 添加了 NamedModulesPlugin，以便更容易查看要修补(patch)的依赖
    // new Webpack.NamesModulesPlugin(),
    // new Webpack.HotModuleReplacementPlugin(),
  ],
};