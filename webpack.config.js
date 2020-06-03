const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin  = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: {
    app: "./src/index.js",
    // another: "./src/another_bundle.js",
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js", //决定非入口的名称
    path: path.resolve(__dirname, "dist"),
  },

  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },

  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      title: "代码分离",
    }),
  ],
};