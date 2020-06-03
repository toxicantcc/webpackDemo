# webpackDemo  
### 分离代码
代码分离是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。
有三种常用的代码分离方法：
  + 入口起点：使用 entry 配置手动地分离代码。
  + 防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
  + 动态导入：通过模块的内联函数调用来分离代码

#### 入口起点
这是最简单最直观的分离代码方式，不过，这种方式存在一些问题
  + 如果入口 chunks 之间包含重复的模块，那些重复模块都会被引入到各个 bundle 中。
  + 这种方法不够灵活，并且不能将核心应用程序逻辑进行动态拆分代码。
#### 防止重复
```javascript
  entry: {
    index: { import: './src/index.js', dependOn: 'shared' },
    another: { import: './src/another_bundle.js', dependOn: 'shared' },
    shared: 'lodash'
  }, // webpack 5+ 版本
  // webpack 4+ 版本
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
```
#### 动态导入
1、 import()
2、 webpack特定的require.ensure

#### bundle 分析
webpack-chart: webpack 数据交互饼图。
webpack-visualizer: 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。
webpack-bundle-analyzer: 一款分析 bundle 内容的插件及 CLI 工具，以便捷的、交互式、可缩放的树状图形式展现给用户。 (yarn add)
webpack bundle optimize helper: 此工具将分析您的软件包，并为您提供可行的建议，以进行改进以减小软件包的大小。
bundle-stats: 生成捆绑包报告（捆绑包大小，资产，模块），并比较不同版本之间的结果。