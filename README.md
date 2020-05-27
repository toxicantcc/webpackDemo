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




