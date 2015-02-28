var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    path: './build',
    filename: '[name].js',
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: "style-loader!stylus-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\^[^!]*\.png$/, loader: "url-loader?limit=100000&mimetype=image/png" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/assets/index.html',
    }),
  ],
};
