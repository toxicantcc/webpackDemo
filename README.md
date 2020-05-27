# webpackDemo  
### 安装
```
npm install --save-dev webpack
<!-- 安装特定版本 -->
npm install --save-dev webpack@<version>
<!-- 如果使用webpack4.+版本，需安装CLI -->
npm install --save-dev webpack-cli
<!-- 全局安装 -->
npm install --global webpack
```
### 管理资源
  ```
  <!-- 安装css-loader 和 style-loader 识别css文件-->
  npm install --save-dev css-loader style-loader
  <!-- 安装 file-loader 识别图片 -->
  npm install --save-dev file-loader
  <!-- 安装 csv-loader xml-loader 支持CSV TSV XML文件，JSON文件内置支持 -->
  npm install --save-dev csv-loader xml-loader
  ```
### 管理输出
```
<!-- 设定HtmlWebpackPlugin -->
npm install --save-dev html-webpack-plugin
<!-- 添加 CleanWebpackPlugin 来清理dist文件夹-->
npm install --save-dev clean-webpack-plugin
CleanWebpackPlugin使用方法：
  const {CleanWebpackPlugin} = require("clean-webpack-plugin");
  plugins: [
    // 使用插件
    new CleanWebpackPlugin(),
    ...
  ],  //官方更新用法，中文文档没更新
```
### 开发
#### [source map](https://www.webpackjs.com/configuration/devtool/)
```
使用source map捕获异常， 将编译后的代码映射回原始源代码
```
#### webpack-dev-serve
```
npm install webpack-dev-server --save-dev  || yarn add webpack-dev-server --save-dev
```
#### webpack-dev-middleware
```
webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。 webpack-dev-server 在内部使用了它，同时，它也可以作为一个单独的包来使用，以便进行更多自定义设置来实现更多的需求
示例实现 使用express 和 webpack-dev-middleware
安装
npm install --save-dev express webpack-dev-middleware
```
### 模块热替换
#### 启用HMR
```
更新 webpack-dev-server 的配置，和使用 webpack 内置的 HMR 插件
```
#### HMR修改样式表
```
安装样式loader
npm install --save-dev css-loader style-loader
```
#### 其他代码和框架
```
React Hot Loader：实时调整 react 组件。
Vue Loader：此 loader 支持用于 vue 组件的 HMR，提供开箱即用体验。
Elm Hot Loader：支持用于 Elm 程序语言的 HMR。
Redux HMR：无需 loader 或插件！只需对 main store 文件进行简单的修改。
Angular HMR：No loader necessary! A simple change to your main NgModule file is all that's required to have full control over the HMR APIs.没有必要使用 loader！只需对主要的 NgModule 文件进行简单的修改，由 HMR API 完全控制。
```




