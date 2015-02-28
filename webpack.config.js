var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var debug = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    path: './build',
    filename: '[name].js',
  },
  devtool: debug ? '#source-map' : null,
  module: {
    loaders: [
      { test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!stylus?sourceMap') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap') },
      { test: /\^[^!]*\.png$/, loader: 'url-loader?limit=100000&mimetype=image/png' },
      { test: /\.jpg$/, loader: 'file-loader' },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/assets/index.html',
    }),
    new ExtractTextPlugin('bundle.css'),
  ],
};
