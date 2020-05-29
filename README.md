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
### Tree Shaking
```
为了学会使用 tree shaking，你必须……

使用 ES2015 模块语法（即 import 和 export）。
在项目 package.json 文件中，添加一个 "sideEffects" 入口。
引入一个能够删除未引用代码(dead code)的压缩工具(minifier)（例如 UglifyJSPlugin）。
你可以将应用程序想象成一棵树。绿色表示实际用到的源码和 library，是树上活的树叶。灰色表示无用的代码，是秋天树上枯萎的树叶。为了除去死去的树叶，你必须摇动这棵树，使它们落下。
```
#### 将文件标记为无副作用
```
「副作用」的定义是，在导入时会执行特殊行为的代码，而不是仅仅暴露一个 export 或多个 export。举例说明，例如 polyfill，它影响全局作 用域，并且通常不提供 export。
```
#### 压缩输出  （-p）
```
mode设置为production
``` 
### 生产环境构建
#### 配置
```
开发环境(development)和生产环境(production)的构建目标差异很大。在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。

虽然，以上我们将生产环境和开发环境做了略微区分，但是，请注意，我们还是会遵循不重复原则(Don't repeat yourself - DRY)，保留一个“通用”配置。为了将这些配置合并在一起，我们将使用一个名为 webpack-merge 的工具。通过“通用”配置，我们不必在环境特定(environment-specific)的配置中重复代码。

webpack-merge 安装
npm install --save-dev webpack-merge
```
