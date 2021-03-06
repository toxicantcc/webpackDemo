const WebpackDevServer = require('webpack-dev-server');
const Webpack = require('webpack');

const config = require('./webpack.config.js');

const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
}

WebpackDevServer.addDevServerEntrypoints(config, options);

const compiler = Webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log("dev server listening on port 5000");
})
 