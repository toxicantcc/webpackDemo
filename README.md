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