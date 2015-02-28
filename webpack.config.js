var HTMLWebpack = require('html-webpack-plugin');
var ExtractText = require('extract-text-webpack-plugin');

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
      { test: /\.jsx$/, loader: 'jsx' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.styl$/, loader: ExtractText.extract('style', 'css?sourceMap!stylus?sourceMap') },
      { test: /\.css$/, loader: ExtractText.extract('style', 'css?sourceMap') },
      { test: /\^[^!]*\.png$/, loader: 'url?limit=100000&mimetype=image/png' },
      { test: /\.jpg$/, loader: 'file' },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  plugins: [
    new HTMLWebpack({
      template: 'src/assets/index.html',
    }),
    new ExtractText('bundle.css'),
  ],
};
